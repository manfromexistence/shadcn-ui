import fs from 'fs/promises';
import path from 'path';

const g2SiteExamplesDir = path.resolve(__dirname, '../../../G2/site/examples');
const targetExamplesDir = path.resolve(__dirname, '../src/app/shadcn-themes/visualization/g2-examples');
const wrapperPath = '../../../g2-wrapper'; // Relative path from generated component to wrapper

interface ExampleInfo {
  id: string; // e.g., general/interval/bar-dodged
  componentName: string; // e.g., GeneralIntervalBarDodgedChart
  filePath: string; // Full path to the new component file
  originalFilePath: string; // Full path to the original Dumi example file
  originalDemoDir: string; // Full path to the original demo directory
}

// Helper function to convert kebab-case/slash-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split(/[-/]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to extract title from frontmatter (simple regex approach)
async function extractTitleFromMarkdown(dirPath: string): Promise<string | null> {
    const mdFilePath = path.join(dirPath, '../index.en.md');
    try {
        const mdContent = await fs.readFile(mdFilePath, 'utf-8');
        const match = mdContent.match(/^---\s*[\s\S]*?title:\s*(.+?)\s*[\s\S]*?---/);
        return match ? match[1].trim() : null;
    } catch (err) {
        // console.warn(`Could not read or parse markdown file: ${mdFilePath}`, err);
        return null;
    }
}

// Function to detect common imports and G2 extensions
function detectImports(code: string): string[] {
    const imports: string[] = [];
    const detected = new Set<string>();

    if (/\bimport\s+\*\s+as\s+d3\b/.test(code) || /\bd3\./.test(code)) {
        if (!detected.has('d3')) {
            imports.push("import * as d3 from 'd3';");
            detected.add('d3');
        }
    }
     if (/\bimport\s+_\s+from\s+'lodash'\b/.test(code) || /\b_\./.test(code)) {
         if (!detected.has('lodash')) {
            imports.push("import _ from 'lodash';");
            detected.add('lodash');
        }
    }
    if (/\bimport\s+\{[^}]*Insight[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
         if (!detected.has('ava')) {
            imports.push("import { Insight } from '@antv/g2-extension-ava'; // Might need other exports too");
            detected.add('ava');
        }
    }
    if (/\bimport\s+\{[^}]*Auto[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
         if (!detected.has('ava')) {
             imports.push("import { Auto } from '@antv/g2-extension-ava'; // Might need other exports too");
             detected.add('ava');
         }
    }
    if (/\bimport\s+\{[^}]*Plugin[^}]*\}\s+from\s+'@antv/g-plugin-a11y'/.test(code)) {
         if (!detected.has('a11y')) {
            imports.push("import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y'; // Renamed to avoid conflict");
             detected.add('a11y');
         }
    }
    
    // Detect animation/keyframe related imports
    if (/\btimingKeyframe\b/.test(code) || /\bstaggeredKeyframe\b/.test(code)) {
        if (!detected.has('g2-animations')) {
            imports.push("// Chart animation detected - G2 animation API will be used");
            detected.add('g2-animations');
        }
    }
    
    // Add more common libraries or G2 extensions if needed
    return imports;
}

// Detect if the code contains generator functions, algorithms or animations
function detectComplexLogic(code: string): {
    hasGenerators: boolean;
    hasAlgorithms: boolean; 
    hasAnimations: boolean;
    hasTimingKeyframe: boolean;
    algorithmCode: string | null;
    dataTransformCode: string | null;
} {
    const result = {
        hasGenerators: /function\s*\*/.test(code),
        hasAlgorithms: /sort|algorithm|compute|calculate|simulate/.test(code),
        hasAnimations: /\.animate\(/.test(code) || /keyframe/.test(code),
        hasTimingKeyframe: /timingKeyframe\(/.test(code),
        algorithmCode: null as string | null,
        dataTransformCode: null as string | null
    };
    
    // Try to extract generator function if exists
    const generatorMatch = code.match(/function\s*\*\s*([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{([\s\S]*?)\}/);
    if (generatorMatch) {
        result.algorithmCode = `function* ${generatorMatch[1]}${generatorMatch[0].substring(generatorMatch[0].indexOf('('))}`;
    }
    
    // Try to extract data transformation code
    const dataTransformMatch = code.match(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*([^;]*?\.map\([^;]*?\)|[^;]*?\.filter\([^;]*?\)|[^;]*?\.reduce\([^;]*?\))/);
    if (dataTransformMatch) {
        result.dataTransformCode = `const ${dataTransformMatch[1]} = ${dataTransformMatch[2]};`;
    }
    
    return result;
}

// Extract raw data declaration if there is one
function extractRawDataDeclaration(code: string): string | null {
  // Look for variable declarations that look like data arrays
  const dataVarMatch = code.match(/const\s+data\s*=\s*(\[[\s\S]*?\]);/);
  if (dataVarMatch) {
    return dataVarMatch[0];
  }
  return null;
}

// Extract generator functions or algorithms
// Returns the full code block and the function name if found
function extractAlgorithms(code: string): { name: string; code: string } | null {
  // Look for generator functions. Use a greedy match for the body.
  // Capture the function name as well.
  const genFuncMatch = code.match(/(function\s*\*\s*([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{[\s\S]*\})/);
  if (genFuncMatch && genFuncMatch[1] && genFuncMatch[2]) {
    const funcCode = genFuncMatch[1];
    const funcName = genFuncMatch[2];
    // Basic check for balanced braces - very naive
    const openBraces = (funcCode.match(/\{/g) || []).length;
    const closeBraces = (funcCode.match(/\}/g) || []).length;
    if (openBraces === closeBraces && openBraces > 0) {
       return { name: funcName, code: funcCode }; // Return name and code if braces seem balanced
    } else {
       console.warn(`Algorithm extraction produced unbalanced braces (${openBraces} open vs ${closeBraces} close) for ${funcName}. Falling back to default algorithm template.`);
       return null;
    }
  }
  return null;
}

// Extract animation-related code sections
function extractAnimationCode(code: string): {
  hasAnimation: boolean;
  keyframeDeclaration: string | null;
  animationLoop: string | null;
} {
  const result = {
    hasAnimation: /keyframe|\.animate\(/.test(code),
    keyframeDeclaration: null as string | null,
    animationLoop: null as string | null,
  };

  // Get keyframe declaration
  const keyframeMatch = code.match(/const\s+keyframe\s*=\s*chart\.timingKeyframe\(\);/);
  if (keyframeMatch) {
    result.keyframeDeclaration = keyframeMatch[0];
  }

  // Get animation loop
  const animLoopMatch = code.match(/for\s*\(const\s+frame\s+of\s+[^)]*\)\s*\{[\s\S]*?\}/);
  if (animLoopMatch) {
    result.animationLoop = animLoopMatch[0];
  }

  return result;
}

// Basic parser for G2 imperative code (using Regex - limited capability)
function parseG2Code(code: string): Record<string, any> {
    // First check if this is a complex example with animations/algorithms
    const complexLogic = detectComplexLogic(code);
    
    const spec: Record<string, any> = {};
    let data: any = null;
    let needsFetching = false;
    let fetchUrl = null;
    let chartType: string | null = null;
    const encodes: Record<string, string> = {};
    const transforms: any[] = [];
    const scales: Record<string, any> = {};
    const axes: Record<string, any> = {};
    const legends: Record<string, any> = {};
    const styles: Record<string, any> = {};
    const labels: any[] = [];
    let coordinate: any = null;
    let interaction: any = null; // Basic interaction detection
    let plugins: any[] = [];
    
    // Check for complex animations, algorithms, etc.
    let isAnimationExample = complexLogic.hasAnimations;
    let hasKeyframe = complexLogic.hasTimingKeyframe;
    let isAlgorithm = complexLogic.hasGenerators;
    
    // Extract raw data if any
    const rawDataDecl = extractRawDataDeclaration(code);
    
    // Extract any algorithms
    const algorithmCode = extractAlgorithms(code);
    
    // Extract animation code
    const animationDetails = extractAnimationCode(code);
    
    // If this is an animation example, handle it differently
    if (isAnimationExample || isAlgorithm || hasKeyframe) {
      // For animations/algorithms, we'll need more custom code in the React component
      spec.isComplex = true;
      spec.hasAnimation = isAnimationExample;
      spec.hasAlgorithm = isAlgorithm;
      spec.algorithmCode = algorithmCode;
      spec.rawDataDeclaration = rawDataDecl;
      spec.keyframeDeclaration = animationDetails.keyframeDeclaration;
      spec.animationLoop = animationDetails.animationLoop;
    }

    // --- Chart Initialization ---
    const chartInitMatch = code.match(/new Chart\(\s*(\{[\s\S]*?\})\s*\)/);
    if (chartInitMatch) {
        const optionsStrRaw = chartInitMatch[1];
        try {
            // Very basic attempt to parse options - might fail on complex objects/functions
            const optionsStr = optionsStrRaw
                .replace(/container:\s*['"][^'"]+['"]\s*,?/, '') // Remove container
                .replace(/autoFit:\s*true\s*,?/, '') // Assume autoFit handled by wrapper
                .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // Quote keys
                .replace(/'/g, '"') // Replace single quotes
                .replace(/,\s*}/g, '}') // Remove trailing commas
                .replace(/,\s*]/g, ']');
            const options = JSON.parse(optionsStr);
            Object.assign(spec, options); // Assign parsed options like width, height, padding etc.

            // Check for plugins in options
             if (options.plugins) {
                 // Plugins often involve `new Plugin()` which is not valid JSON
                 spec.plugins = `/* TODO: Manually convert plugins array: ${JSON.stringify(options.plugins)} */`;
             }

        } catch (e) {
            // console.warn("Could not parse Chart options:", e, `Original: ${optionsStrRaw}`);
            spec.chartOptionsComment = `/* TODO: Manually convert Chart constructor options: ${optionsStrRaw} */`;
        }
    }

     // --- Chart Type (Mark) ---
     // Try to find the first mark type call (interval, line, point, etc.)
     const markMatch = code.match(/\.([a-zA-Z]+)\(\s*\)/); // Simple match like .interval()
     if (markMatch) {
         chartType = markMatch[1];
         spec.type = chartType; // Set top-level type for simple charts
     } else {
         // Check for chart.options({ children: [...] }) structure
         const optionsChildrenMatch = code.match(/chart\.options\(\s*(\{[\s\S]*?type:\s*['"]([^'"]+)['"][\s\S]*?children:\s*\[([\s\S]*?)\][\s\S]*?\})\s*\)/);
         if (optionsChildrenMatch) {
             spec.type = optionsChildrenMatch[2]; // e.g., spaceLayer
             spec.childrenComment = "/* TODO: Manually convert children array from chart.options() */";
             // A more advanced parser would recursively parse children here
         } else {
            spec.typeComment = "/* TODO: Determine chart type (e.g., interval, line, point) */";
         }
     }


    // --- Data ---
    const dataFetchMatch = code.match(/\.data\(\s*\{\s*type:\s*['"]fetch['"],\s*value:\s*['"]([^'"]+)['"]\s*\}\s*\)/);
    const dataInlineMatch = code.match(/\.data\(\s*(\[[\s\S]*?\])\s*\)/); // Match inline array data
    const dataDirectMatch = code.match(/chart\.data\(([^)]+)\)/); // Match direct variable or value

    if (dataFetchMatch) {
        needsFetching = true;
        fetchUrl = dataFetchMatch[1];
        spec.dataComment = `/* Data fetched from: ${fetchUrl} - Handled by useEffect */`;
    } else if (dataInlineMatch) {
        const dataStrRaw = dataInlineMatch[1];
        try {
            // Attempt to parse inline data - very fragile
            const dataStr = dataStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
            // Further cleaning might be needed, but JSON.parse will catch errors
            data = JSON.parse(dataStr);
            spec.data = data;
        } catch (e) {
            // console.warn("Could not parse inline data:", e, `Original: ${dataStrRaw}`);
            spec.dataComment = `/* TODO: Manually define inline data array. Original: ${dataStrRaw} */`;
            data = "/* PARSE_ERROR */";
        }
    } else if (dataDirectMatch) {
         // Could be a variable name or a simple value (like for liquid chart)
         const dataArg = dataDirectMatch[1].trim();
         if (!isNaN(parseFloat(dataArg))) { // Check if it's a number
             spec.data = parseFloat(dataArg);
         } else {
             spec.dataComment = `/* TODO: Data assigned from variable/value: ${dataArg} - Handle this manually */`;
             data = `/* ${dataArg} */`; // Placeholder
         }
    } else {
        spec.dataComment = "/* TODO: Define chart data (inline or fetched) */";
    }

    // --- Encodings ---
    const encodeMatches = code.matchAll(/\.encode\(\s*['"]([^'"]+)['"],\s*([^)]+)\s*\)/g);
    for (const match of encodeMatches) {
        const channel = match[1];
        let value = match[2].trim();
        // Remove quotes if it's a simple string field name
        if (value.startsWith("'") && value.endsWith("'") || value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        } else {
             // It might be a function or complex expression, add comment
             value = `/* TODO: Convert encode function/expression: ${value} */`;
        }
        encodes[channel] = value;
    }
     if (Object.keys(encodes).length > 0) {
        spec.encode = encodes;
    }

    // --- Transforms ---
     const transformMatches = code.matchAll(/\.transform\(\s*(\{[\s\S]*?\})\s*\)/g);
     for (const match of transformMatches) {
         const transformStrRaw = match[1];
         try {
             // Basic parsing attempt
             const transformStr = transformStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             transforms.push(JSON.parse(transformStr));
         } catch (e) {
             // console.warn("Could not parse transform:", e, `Original: ${transformStrRaw}`);
             transforms.push({ type: "/* PARSE_ERROR */", comment: `/* TODO: Manually convert transform options: ${transformStrRaw} */` });
         }
     }
     if (transforms.length > 0) {
         spec.transform = transforms;
     }

     // --- Scales ---
     const scaleMatches = code.matchAll(/\.scale\(\s*['"]([^'"]+)['"],\s*(\{[\s\S]*?\})\s*\)/g);
     for (const match of scaleMatches) {
         const channel = match[1];
         const scaleStrRaw = match[2];
         try {
             const scaleStr = scaleStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             scales[channel] = JSON.parse(scaleStr);
         } catch (e) {
             // console.warn(`Could not parse scale for ${channel}:`, e, `Original: ${scaleStrRaw}`);
             scales[channel] = { comment: `/* TODO: Manually convert scale options: ${scaleStrRaw} */` };
         }
     }
      if (Object.keys(scales).length > 0) {
         spec.scale = scales;
     }

     // --- Axes ---
     const axisMatches = code.matchAll(/\.axis\(\s*['"]([^'"]+)['"],\s*(\{[\s\S]*?\}|false)\s*\)/g);
     for (const match of axisMatches) {
         const channel = match[1];
         const optionsStrRaw = match[2].trim();
         if (optionsStrRaw === 'false') {
             axes[channel] = false;
         } else {
             try {
                 const axisStr = optionsStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
                 axes[channel] = JSON.parse(axisStr);
             } catch (e) {
                 // console.warn(`Could not parse axis for ${channel}:`, e, `Original: ${optionsStrRaw}`);
                 axes[channel] = { comment: `/* TODO: Manually convert axis options: ${optionsStrRaw} */` };
             }
         }
     }
      if (Object.keys(axes).length > 0) {
         spec.axis = axes;
     }

     // --- Legends ---
      const legendMatches = code.matchAll(/\.legend\(\s*['"]([^'"]+)['"],\s*(\{[\s\S]*?\}|false)\s*\)/g);
      for (const match of legendMatches) {
         const channel = match[1];
         const optionsStrRaw = match[2].trim();
         if (optionsStrRaw === 'false') {
             legends[channel] = false;
         } else {
             // Legends often contain functions (e.g., formatter), making JSON.parse unreliable.
             // Always add a comment for manual review.
             legends[channel] = { comment: `/* TODO: Manually convert legend options: ${optionsStrRaw} */` };
             // Optional: Try to parse, but keep the comment as primary.
             // try {
             //     const legendStr = optionsStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             //     legends[channel] = JSON.parse(legendStr);
             //     legends[channel].comment = `/* TODO: Verify manually converted legend options: ${optionsStrRaw} */`;
             // } catch (e) {
             //     // console.warn(`Could not parse legend for ${channel}:`, e, `Original: ${optionsStrRaw}`);
             //     legends[channel] = { comment: `/* TODO: Manually convert legend options: ${optionsStrRaw} */` };
             // }
         }
     }
      if (Object.keys(legends).length > 0) {
         spec.legend = legends;
     }

     // --- Styles ---
      const styleMatches = code.matchAll(/\.style\(\s*['"]([^'"]+)['"],\s*([^)]+)\s*\)/g);
      for (const match of styleMatches) {
         const key = match[1];
         let value = match[2].trim();
         if (value.startsWith("'") && value.endsWith("'") || value.startsWith('"') && value.endsWith('"')) {
             value = value.slice(1, -1);
         } else {
              value = `/* TODO: Convert style value/expression: ${value} */`;
         }
         styles[key] = value;
     }
      if (Object.keys(styles).length > 0) {
         spec.style = styles;
     }

      // --- Labels ---
      const labelMatches = code.matchAll(/\.label\(\s*(\{[\s\S]*?\})\s*\)/g);
      for (const match of labelMatches) {
          const labelStrRaw = match[1];
          // Labels often contain functions, always add comment.
          labels.push({ comment: `/* TODO: Manually convert label options: ${labelStrRaw} */` });
          // Optional: Try to parse
          // try {
          //     const labelStr = labelStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
          //     labels.push(JSON.parse(labelStr));
          // } catch (e) {
          //     // console.warn("Could not parse label:", e, `Original: ${labelStrRaw}`);
          //     labels.push({ comment: `/* TODO: Manually convert label options: ${labelStrRaw} */` });
          // }
      }
       if (labels.length > 0) {
          spec.labels = labels;
      }

      // --- Coordinate ---
      const coordinateMatch = code.match(/\.coordinate\(\s*(\{[\s\S]*?\})\s*\)/);
      if (coordinateMatch) {
          const coordStrRaw = coordinateMatch[1];
          try {
              const coordStr = coordStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
              coordinate = JSON.parse(coordStr);
              spec.coordinate = coordinate;
          } catch (e) {
              // console.warn("Could not parse coordinate:", e, `Original: ${coordStrRaw}`);
              spec.coordinate = { comment: `/* TODO: Manually convert coordinate options: ${coordStrRaw} */` };
          }
      }

       // --- Interaction ---
       const interactionMatch = code.match(/\.interaction\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\})|,\s*true)?\s*\)/);
       if (interactionMatch) {
           interaction = { type: interactionMatch[1] };
           const optionsStrRaw = interactionMatch[3];
           if (optionsStrRaw) {
                // Interactions often have complex options, add comment.
               interaction.optionsComment = `/* TODO: Manually convert interaction options: ${optionsStrRaw} */`;
                // Optional: Try to parse
               // try {
               //     const optionsStr = optionsStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
               //     interaction.options = JSON.parse(optionsStr);
               // } catch (e) {
               //     // console.warn(`Could not parse interaction options for ${interaction.type}:`, e, `Original: ${optionsStrRaw}`);
               //     interaction.optionsComment = `/* TODO: Manually convert interaction options: ${optionsStrRaw} */`;
               // }
           } else if (interactionMatch[2]?.trim() === ', true') {
               // interaction enabled without options
           }
           spec.interaction = interaction;
       }

        // --- Scrollbar ---
        const scrollbarMatch = code.match(/\.scrollbar\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\})|,\s*true)?\s*\)/);
        if (scrollbarMatch) {
            if (!spec.interaction) spec.interaction = {};
            if (!spec.interaction.scrollbar) spec.interaction.scrollbar = {};
            const channel = scrollbarMatch[1];
            const optionsStrRaw = scrollbarMatch[3];
            spec.interaction.scrollbar[channel] = optionsStrRaw
                ? { comment: `/* TODO: Manually convert scrollbar options: ${optionsStrRaw} */` }
                : true;
             // Optional: Try to parse scrollbar options
             // if (optionsStrRaw) {
             //     try {
             //         const optionsStr = optionsStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             //         spec.interaction.scrollbar[channel] = JSON.parse(optionsStr);
             //         spec.interaction.scrollbar[channel].comment = `/* TODO: Verify manually converted scrollbar options: ${optionsStrRaw} */`;
             //     } catch (e) {
             //         // console.warn(`Could not parse scrollbar options for ${channel}:`, e, `Original: ${optionsStrRaw}`);
             //         spec.interaction.scrollbar[channel] = { comment: `/* TODO: Manually convert scrollbar options: ${optionsStrRaw} */` };
             //     }
             // } else {
             //      spec.interaction.scrollbar[channel] = true;
             // }
        }


    return { spec, needsFetching, fetchUrl, originalData: data };
}


// Function to generate component content
async function generateComponentContent(example: ExampleInfo): Promise<string> {
  let originalCode = '// Original file could not be read.';
  let title = example.id.split('/').pop()?.replace(/-/g, ' ') || 'Example'; // Default title
  let potentialImports: string[] = [];
  let parsedResult: Record<string, any> = { spec: {}, needsFetching: false, fetchUrl: null, originalData: null };
  let algorithmResult: { name: string; code: string } | null = null; // Store algorithm extraction result

  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
    potentialImports = detectImports(originalCode);
    parsedResult = parseG2Code(originalCode);
    // Attempt to extract algorithm after parsing general code
    algorithmResult = extractAlgorithms(originalCode);
  } catch (err) {
    console.warn(`Could not read or parse original file: ${example.originalFilePath}`, err);
  }

  // Try to read the index.en.md file for the title
  const extractedTitle = await extractTitleFromMarkdown(example.originalDemoDir);
  if (extractedTitle) {
      title = extractedTitle;
  } else {
      console.warn(`Could not extract title for: ${example.id}. Using default.`);
  }

  const componentName = example.componentName;
  const { spec, needsFetching, fetchUrl, originalData } = parsedResult;
  
  // Check if this is a complex animation or algorithm example
  const isComplex = spec.isComplex;
  const hasAnimation = spec.hasAnimation;
  const hasAlgorithm = spec.hasAlgorithm;
  const rawDataDeclaration = spec.rawDataDeclaration;
  const algorithmCode = spec.algorithmCode;
  const keyframeDeclaration = spec.keyframeDeclaration;
  const animationLoop = spec.animationLoop;
  
  // Remove metadata fields not needed in the final spec
  delete spec.isComplex;
  delete spec.hasAnimation;
  delete spec.hasAlgorithm;
  delete spec.rawDataDeclaration;
  delete spec.algorithmCode;
  delete spec.keyframeDeclaration;
  delete spec.animationLoop;

  // Clean up spec for stringification (remove comments, handle functions)
  const specString = JSON.stringify(spec, (key, value) => {
      // Remove any fields that are comments, TODOs, or parse errors
      if (
        (typeof value === 'string' && (value.startsWith('/* TODO:') || value.startsWith('/* PARSE_ERROR */')))
        || (typeof value === 'object' && value !== null && value.comment)
      ) {
        return undefined;
      }
      if (
        key.endsWith('Comment') ||
        key === 'chartOptionsComment' ||
        key === 'typeComment' ||
        key === 'dataComment' ||
        key === 'childrenComment' ||
        key === 'optionsComment'
      ) {
        return undefined;
      }
      return value;
  }, 2);

  // Add TypeScript type import and ts-nocheck to all generated files
  const tsNoCheck = '// @ts-nocheck';
  const g2SpecImport = "import { type G2Spec } from '@antv/g2';";

  // For complex animations or algorithms, use a specialized template
  if (isComplex && (hasAnimation || hasAlgorithm)) {
    return generateAnimationAlgorithmComponent({
      componentName,
      title,
      originalCode,
      example,
      spec,
      rawDataDeclaration,
      algorithmCode,
      keyframeDeclaration,
      animationLoop,
      potentialImports,
      wrapperPath,
      tsNoCheck,
      g2SpecImport,
      algorithmResult // Pass the extraction result object
    });
  }

  const dataHandlingCode = needsFetching
    ? `
  const [chartData, setChartData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('${fetchUrl}')
      .then(res => {
        if (!res.ok) {
          throw new Error(\`HTTP error! status: \${res.status}\`);
        }
        return res.json();
      })
      .then((data: any) => {
        setChartData(data);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e.message || 'Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Chart Data...</div>;
  }

  if (error) {
      return <div style={{ color: 'red' }}>Error loading data: {error}</div>;
  }

  const finalSpec: G2Spec = { ...spec, data: chartData };
`
    : originalData === "/* PARSE_ERROR */" || (typeof originalData === 'string' && originalData.startsWith('/*'))
    ? `
  const chartData: any[] = [];
  const finalSpec: G2Spec = { ...spec, data: chartData };
`
    : `
  const finalSpec: G2Spec = spec;
`;

  return `${tsNoCheck}
'use client';

import React from 'react';
${g2SpecImport}
import G2Chart from '${wrapperPath}';
${potentialImports.length > 0 ? '// Potential external libraries detected:' : ''}
${potentialImports.map(imp => `// ${imp}`).join('\n')}
${potentialImports.length > 0 ? '// TODO: Ensure these libraries are installed (e.g., npm install d3 @types/d3) and imported correctly.' : ''}

/*
  Original G2 Example Code:
  Source: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
  ================================================================================
${originalCode.split('\n').map(line => `  // ${line}`).join('\n')}
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = ${specString};

const ${componentName}: React.FC = () => {
  ${dataHandlingCode.split('\n').map(line => `  ${line}`).join('\n')}

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ${componentName};
`;
}

// Generate specialized component for animation or algorithm examples
function generateAnimationAlgorithmComponent(params: {
  componentName: string;
  title: string;
  originalCode: string;
  example: ExampleInfo;
  spec: Record<string, any>;
  rawDataDeclaration?: string | null;
  algorithmCode?: { name: string; code: string } | null; // Use the object type here
  keyframeDeclaration?: string | null;
  animationLoop?: string | null;
  potentialImports: string[];
  wrapperPath: string;
  tsNoCheck: string;
  g2SpecImport: string;
  algorithmResult: { name: string; code: string } | null; // Pass the result object
}): string {
  const {
    componentName,
    title,
    originalCode,
    example,
    spec,
    rawDataDeclaration,
    // algorithmCode is now part of algorithmResult, use algorithmResult instead
    keyframeDeclaration, // Keep for potential future use or context, though not used in current template
    animationLoop, // Keep for potential future use or context, though not used in current template
    potentialImports,
    wrapperPath, // Note: wrapperPath is not used in this template
    tsNoCheck,
    g2SpecImport,
    algorithmResult // Use this for algorithm details
  } = params;

  // Create a clean spec without animation metadata
  const specString = JSON.stringify(spec, null, 2);

  // Format the raw data declaration or provide a default
  // Add a more generic type or comment, as it might not always be number[]
  const formattedDataDecl = rawDataDeclaration
    ? rawDataDeclaration.replace('const data =', 'const data: any[] =') // Use any[] or add comment
    : 'const data: number[] = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6]; // Default data, adjust type if needed';

  // Determine algorithm code and name based on extraction result
  const algorithmName = algorithmResult ? algorithmResult.name : 'insertionSort'; // Default name
  // Use the extracted code if available, otherwise use the fallback
  const formattedAlgorithmCode = algorithmResult
   ? algorithmResult.code // Use the successfully extracted code
   : `
// Default fallback algorithm (Insertion Sort) - Review and replace if needed
// Define the expected frame structure for type safety if using this fallback
interface SortDatum { value: number; swap: boolean; index?: number; }
type SortFrame = SortDatum[];
type SortAlgorithm = (arr: number[]) => Generator<SortFrame, SortFrame, unknown>;

function* insertionSort(arr: number[]): Generator<SortFrame> {
  const len = arr.length;
  let preIndex: number, current: number;
  const currentFrame = arr.map((value, index) => ({ value, swap: false, index })); // Initial state
  yield currentFrame; // Yield initial state

  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = currentFrame[i].value; // Use value from frame
    let currentItem = currentFrame[i]; // Store the item being inserted

    // Create a snapshot for the start of this iteration
    const iterationStartState = currentFrame.map(d => ({ ...d, swap: false }));
    iterationStartState[i].swap = true; // Highlight the element being considered
    yield iterationStartState;


    while (preIndex >= 0 && currentFrame[preIndex].value > current) {
      currentFrame[preIndex + 1] = currentFrame[preIndex];
      // Mark the shifted element
      const shiftingState = currentFrame.map((d, idx) => ({ ...d, swap: idx === preIndex + 1 || idx === i }));
      yield shiftingState;
      preIndex--;
    }
    currentFrame[preIndex + 1] = currentItem; // Place the item in its sorted position

    // Create a snapshot after insertion
    const iterationEndState = currentFrame.map((d, idx) => ({ ...d, swap: idx === preIndex + 1 }));
    yield iterationEndState;
  }

  // Final state, no elements marked as swap
  const finalState = currentFrame.map(d => ({ ...d, swap: false }));
  yield finalState; // Yield final sorted state
  return finalState; // Return final state
}`;

  // Ensure the entire component string is correctly structured and closed
  const componentCode = `${tsNoCheck}
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';
${potentialImports.length > 0 ? '// Potential external libraries (ensure installed):' : ''}
${potentialImports.map(imp => imp).join('\n')}

/*
  Original G2 Example Code:
  Source: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
  ================================================================================
${originalCode.split('\n').map(line => `  // ${line}`).join('\n')}
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.
// Review the generated code carefully, especially the algorithm and data types.

// --- Data and Algorithm Definitions ---
// TODO: Verify data type and structure
${formattedDataDecl}

// TODO: Verify or replace the algorithm implementation below
// Define the expected frame structure for type safety (adjust if algorithm output differs)
interface AlgorithmDatum {
  value: any; // Use a more specific type if known (e.g., number)
  swap?: boolean; // Optional property for highlighting changes
  index?: number; // Optional index property
  // Add other properties returned by your specific algorithm's generator
  [key: string]: any; // Allow other properties
}
type AlgorithmFrame = AlgorithmDatum[];
// Define the type for the algorithm generator function
// Adjust input (arr: any[]) and output types (AlgorithmFrame) as needed
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

${formattedAlgorithmCode} // Algorithm function definition inserted here

// --- React Component ---
const ${componentName}: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationFrameRef = useRef<number | null>(null); // Use number for requestAnimationFrame ID or NodeJS.Timeout
  const generatorRef = useRef<Generator<AlgorithmFrame, AlgorithmFrame | void, unknown> | null>(null);
  const isMountedRef = useRef<boolean>(false); // Track mount status
  const [errorState, setErrorState] = useState<string | null>(null); // State to hold error messages

  // Function to render chart with current data state
  const renderCurrentState = useCallback((frameData: AlgorithmFrame): void => {
    if (!chartRef.current || !isMountedRef.current) return;

    const chart: Chart = chartRef.current;

    // Prepare data for G2, ensuring 'index' exists if used for encoding
    const chartData = frameData.map((datum, idx) => ({
        index: datum.index ?? idx, // Use provided index or fallback to array index
        ...datum,
    }));

    // Define the spec for the interval mark dynamically
    // Adjust mark type (interval, point, etc.) and encodings based on the example
    const options: G2Spec = {
        type: 'interval', // TODO: Adjust mark type if needed (e.g., 'point', 'cell')
        data: chartData,
        encode: {
            x: 'index', // TODO: Adjust encoding channels as needed
            y: 'value',
            key: 'index', // Use index or a unique ID for animation key
            color: 'swap', // TODO: Adjust color encoding if 'swap' is not used or has a different meaning
        },
        scale: {
            color: { range: ['#4e79a7', '#e15759'] }, // TODO: Adjust color scale/range
        },
        animate: {
            enter: { type: 'fadeIn', duration: 300 }, // Basic enter animation
            update: { type: 'morph', duration: 300 }, // Morph between states
            exit: { type: 'fadeOut', duration: 300 }, // Basic exit animation
        },
        // Add other necessary options like coordinate, axis, legend, style based on parsed 'spec'
        axis: spec.axis ?? {}, // Apply parsed axis config
        coordinate: spec.coordinate ?? {}, // Apply parsed coordinate config
        legend: spec.legend ?? {}, // Apply parsed legend config
        style: spec.style ?? {}, // Apply parsed style config
    };

    // Use chart.options() to update the spec declaratively
    chart.options(options);
    chart.render();

  }, [spec]); // Include spec in dependencies if its properties are used directly

  // Initialize chart and generator
  useEffect(() => {
    isMountedRef.current = true;
    setErrorState(null); // Clear previous errors
    if (!containerRef.current) return;

    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
      // WARNING: Using eval() to get the algorithm function reference.
      // This assumes the function defined by formattedAlgorithmCode (with name algorithmName)
      // is correctly placed in the component's scope and accessible via eval.
      // Eval can be a security risk and may not work in all environments (e.g., strict CSP).
      // Consider refactoring if eval is problematic.
      algorithmFunction = eval(algorithmName) as AlgorithmGenerator;

      if (typeof algorithmFunction !== 'function') {
        // This error occurs if the algorithm function wasn't defined correctly or eval failed.
        throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function in this scope.`);
      }

      // Create generator instance, cloning data to prevent mutation by the algorithm
      generatorRef.current = algorithmFunction([...data]);

    } catch (e: any) {
      console.error(`Failed to initialize algorithm '${algorithmName}':`, e);
      setErrorState(`Failed to load algorithm: ${e.message || 'Unknown error'}`);
      generatorRef.current = null; // Ensure generator is null on error
      // Chart initialization below might still proceed, but controls will be disabled.
    }


    // Create new chart instance
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      // Apply initial chart options from the parsed spec (excluding data/mark type handled by renderCurrentState)
      ...(spec as Partial<G2Spec>),
      // Ensure data/type/encode are not set here if managed by renderCurrentState
      data: undefined,
      type: undefined,
      encode: undefined,
      children: undefined, // Avoid setting children directly if using chart.options() later
    });

    // Render the initial state only if the generator was created successfully
    if (generatorRef.current) {
        try {
            const initialStep = generatorRef.current.next();
            if (!initialStep.done) {
              renderCurrentState(initialStep.value);
            } else if (initialStep.value) { // Handle generators that might return final state on first call or when done
                renderCurrentState(initialStep.value);
            }
        } catch (e: any) {
             console.error(`Error rendering initial state for algorithm '${algorithmName}':`, e);
             setErrorState(`Error rendering initial state: ${e.message || 'Unknown error'}`);
        }
    }


    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current); // Use cancelAnimationFrame if using requestAnimationFrame
        // clearTimeout(animationFrameRef.current); // Use clearTimeout if using setTimeout
      }
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      generatorRef.current = null; // Clear generator ref
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algorithmName, renderCurrentState]); // Dependencies: algorithmName (should be constant), renderCurrentState. Add spec if used directly.

  // Animation loop logic
  useEffect(() => {
    if (!isPlaying || !generatorRef.current) {
      if (animationFrameRef.current) {
         cancelAnimationFrame(animationFrameRef.current); // Or clearTimeout
         animationFrameRef.current = null;
      }
      return;
    }

    let lastFrameTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isPlaying || !generatorRef.current || !isMountedRef.current) { // Check mount status
        animationFrameRef.current = null;
        return; // Stop if paused, generator finished, or unmounted
      }

      const deltaTime = currentTime - lastFrameTime;

      if (deltaTime >= speed) {
        const step = generatorRef.current.next();

        if (step.done) {
          setIsPlaying(false); // Stop playing when generator finishes
          if (step.value) { // Render final state if returned
             renderCurrentState(step.value);
          }
          animationFrameRef.current = null;
          return;
        }

        renderCurrentState(step.value);
        lastFrameTime = currentTime; // Reset timer after rendering frame
      }

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup this effect
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current); // Or clearTimeout
        animationFrameRef.current = null;
      }
    };
  }, [isPlaying, speed, renderCurrentState]); // Rerun effect if isPlaying or speed changes

  // Play/pause the animation
  const togglePlay = (): void => {
    setIsPlaying(prev => !prev);
    if (isPlaying && animationFrameRef.current) { // If stopping
        cancelAnimationFrame(animationFrameRef.current); // Or clearTimeout
        animationFrameRef.current = null;
    }
  };

  // Reset the animation
  const resetAnimation = useCallback((): void => {
    setIsPlaying(false); // Stop playing
    setErrorState(null); // Clear previous errors on reset
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current); // Or clearTimeout
      animationFrameRef.current = null;
    }

    // Re-create the generator and render initial state
    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
       // Re-fetch the algorithm function using eval (same risks as in useEffect)
       algorithmFunction = eval(algorithmName) as AlgorithmGenerator;

       if (typeof algorithmFunction !== 'function') {
           throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function in this scope (on reset).`);
       }

       generatorRef.current = algorithmFunction([...data]); // Create new generator with fresh data copy
       const initialStep = generatorRef.current.next();

       // Render initial state after reset
        if (!initialStep.done) {
            renderCurrentState(initialStep.value);
        } else if (initialStep.value) { // Handle generators returning final state immediately
            renderCurrentState(initialStep.value);
        }


    } catch (e: any) {
        console.error(`Failed to reset algorithm '${algorithmName}':`, e);
        setErrorState(`Failed to reset algorithm: ${e.message || 'Unknown error'}`);
        generatorRef.current = null; // Ensure generatorRef is null on error
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algorithmName, renderCurrentState]); // Dependencies for reset. Add data if it can change.

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      {/* TODO: Add description if available */}
      <div className="flex flex-wrap items-center space-x-2 mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={togglePlay}
          disabled={!generatorRef.current || !!errorState} // Disable if generator failed or error occurred
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
          onClick={resetAnimation}
          disabled={!!errorState} // Allow reset even if generator failed initially, to try again
        >
          Reset
        </button>
        <div className="flex items-center space-x-2">
          <label htmlFor="speed" className="text-sm">Speed:</label>
          <input
            id="speed"
            type="range"
            min="50"  // Adjusted min speed
            max="1500" // Adjusted max speed
            step="50"
            value={speed}
            onChange={handleSpeedChange}
            className="w-32"
            disabled={!generatorRef.current || !!errorState} // Disable if generator failed or error occurred
          />
          <span className="text-sm">{speed}ms</span>
        </div>
      </div>
      {errorState && (
          <div className="mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded">
              <strong>Error:</strong> {errorState}
          </div>
      )}
      <div ref={containerRef} className="h-[400px] w-full border rounded bg-muted/40">
         {/* Placeholder or loading state can be added here */}
         {/* Error message is now shown above the chart area */}
      </div>
    </div>
  );
}; // <-- Ensure this closing brace and semicolon are always present

export default ${componentName};
`;

  return componentCode;
}

async function main() {
  const allExamples: ExampleInfo[] = [];

  console.log(`Scanning ${g2SiteExamplesDir}...`);

  try {
    const categories = await fs.readdir(g2SiteExamplesDir, { withFileTypes: true });

    for (const category of categories) {
      if (category.isDirectory()) {
        const categoryPath = path.join(g2SiteExamplesDir, category.name);
        const types = await fs.readdir(categoryPath, { withFileTypes: true });

        for (const type of types) {
          if (type.isDirectory()) {
            const typePath = path.join(categoryPath, type.name);
            const demosPath = path.join(typePath, 'demo');
            try {
              const demos = await fs.readdir(demosPath, { withFileTypes: true });
              for (const demo of demos) {
                if (demo.isFile() && demo.name.endsWith('.ts')) {
                  const demoName = demo.name.replace('.ts', '');
                  const id = `${category.name}/${type.name}/${demoName}`;
                  const componentName = `${toPascalCase(category.name)}${toPascalCase(type.name)}${toPascalCase(demoName)}Chart`;
                  // Ensure component name is a valid identifier
                  const safeComponentName = componentName.replace(/[^a-zA-Z0-9_]/g, '');
                  const targetFilePath = path.join(targetExamplesDir, category.name, type.name, `${toPascalCase(demoName)}.tsx`);
                  const originalFilePath = path.join(demosPath, demo.name);
                  const originalDemoDir = demosPath;

                  allExamples.push({
                    id,
                    componentName: safeComponentName,
                    filePath: targetFilePath,
                    originalFilePath,
                    originalDemoDir,
                  });
                }
              }
            } catch (err: any) {
              if (err.code !== 'ENOENT') { // Ignore if 'demo' folder doesn't exist
                 console.warn(`Could not read demos in ${demosPath}:`, err);
              }
            }
          }
        }
      }
    }
  } catch (err) {
     console.error(`Error scanning G2 examples directory: ${g2SiteExamplesDir}`, err);
     process.exit(1);
  }


  console.log(`Found ${allExamples.length} examples. Generating components in ${targetExamplesDir}...`);

  // Ensure target base directory exists
  await fs.mkdir(targetExamplesDir, { recursive: true });

  // Generate component files
  let generatedCount = 0;
  let errorCount = 0;
  for (const example of allExamples) {
    try {
      const componentDir = path.dirname(example.filePath);
      await fs.mkdir(componentDir, { recursive: true });
      const content = await generateComponentContent(example);
      await fs.writeFile(example.filePath, content);
      // console.log(`Generated: ${path.relative(targetExamplesDir, example.filePath)}`);
      generatedCount++;
    } catch (err) {
      console.error(`Failed to generate component for ${example.id}:`, err);
      errorCount++;
    }
  }
   console.log(`Generated ${generatedCount} component files.`);
   if (errorCount > 0) {
       console.warn(`${errorCount} components failed to generate.`);
   }

  // Generate index.ts
  const indexContent = allExamples
    .map(ex => {
        const relativePath = `./${path.relative(targetExamplesDir, ex.filePath).replace(/\\/g, '/').replace('.tsx', '')}`;
        // Ensure the component name is valid before exporting
        if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(ex.componentName)) {
             return `export { default as ${ex.componentName} } from '${relativePath}';`;
        } else {
            console.warn(`Skipping export for invalid component name: ${ex.componentName} (from ${ex.id})`);
            return null;
        }
    })
    .filter(line => line !== null) // Filter out skipped exports
    .join('\n');

  const indexFilePath = path.join(targetExamplesDir, 'index.ts');
  try {
    await fs.writeFile(indexFilePath, indexContent + '\n');
    console.log(`Generated: index.ts`);
  } catch (err) {
     console.error(`Failed to generate index.ts:`, err);
  }

  console.log('\nScript finished.');
  console.log(`\nNext Steps:`);
  console.log(`1. Review the generated components in '${targetExamplesDir}'.`);
  console.log(`   - Pay close attention to 'TODO:' comments and manually adjust the G2 spec, data types, encodings, and other options where the automatic parsing might have been incomplete or incorrect.`);
  console.log(`   - For animation/algorithm examples, carefully review the generated React component logic, especially the algorithm function definition and the use of 'eval'. Consider refactoring to avoid 'eval' if possible (e.g., by importing the algorithm).`);
  console.log(`2. Install any detected external dependencies (like d3, lodash, @antv/g2-extension-ava, @antv/g-plugin-a11y) in the 'integration/themex' project if not already present:`);
  console.log(`   cd integration/themex && npm install d3 lodash @antv/g2-extension-ava @antv/g-plugin-a11y @types/d3 @types/lodash`);
  console.log(`   (Add any other specific libraries mentioned in TODOs or detected imports).`);
  console.log(`3. Ensure you have a G2Chart wrapper component (e.g., '${path.basename(wrapperPath)}.tsx') located correctly relative to the generated files (expected at '${wrapperPath}'). This wrapper should handle the basic G2 chart rendering based on the provided spec.`);
  console.log(`4. Implement dynamic routing or a display mechanism in your Next.js app (within 'integration/themex') to import and render these generated components from '${targetExamplesDir}'.`);
  console.log(`5. Test the generated components thoroughly.`);

}

main().catch(console.error);