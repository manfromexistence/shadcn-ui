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
    if (/\bimport\s+\{[^}]*Plugin[^}]*\}\s+from\s+'@antv\/g-plugin-a11y'/.test(code)) {
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
function extractAlgorithms(code: string): string | null {
  // Look for generator functions
  const genFuncMatch = code.match(/function\s*\*\s*([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{[\s\S]*?\}/);
  if (genFuncMatch) {
    return genFuncMatch[0];
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

  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
    potentialImports = detectImports(originalCode);
    parsedResult = parseG2Code(originalCode);
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
      g2SpecImport
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
  algorithmCode?: string | null;
  keyframeDeclaration?: string | null;
  animationLoop?: string | null;
  potentialImports: string[];
  wrapperPath: string;
  tsNoCheck: string;
  g2SpecImport: string;
}): string {
  const {
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
    wrapperPath, // Note: wrapperPath is not used in this template
    tsNoCheck,
    g2SpecImport
  } = params;

  // Create a clean spec without animation metadata
  const specString = JSON.stringify(spec, null, 2);

  // Format the raw data declaration or provide a default
  // Add type annotation for data
  const formattedDataDecl = rawDataDeclaration
    ? rawDataDeclaration.replace('const data =', 'const data: number[] =')
    : 'const data: number[] = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];';

  // Format the algorithm code - Add types for generator
  const formattedAlgorithmCode = algorithmCode
   ? algorithmCode.replace('function* insertionSort(arr)', 'function* insertionSort(arr: number[]): Generator<Array<{ value: number; swap: boolean; index?: number }>>')
                 .replace('yield arr.map((a, index) => ({', 'yield arr.map((a: number, index: number) => ({')
   : `
// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

function* insertionSort(arr: number[]): Generator<SortFrame> {
  const len = arr.length;
  let preIndex: number, current: number;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
    // Yield a copy of the array with swap information
    yield arr.map((a: number, index: number): { value: number; swap: boolean } => ({
      value: a,
      swap: index === preIndex + 1 || index === i,
    }));
  }
  // Optionally yield the final sorted state if needed, though the loop handles it
  // yield arr.map((a, index) => ({ value: a, swap: false, index }));
  return arr.map((a, index) => ({ value: a, swap: false, index })); // Return final state
}`;

  return `${tsNoCheck}
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';
${potentialImports.length > 0 ? '// External libraries:' : ''}
${potentialImports.map(imp => imp).join('\n')}

/*
  Original G2 Example Code:
  Source: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
  ================================================================================
${originalCode.split('\n').map(line => `  // ${line}`).join('\n')}
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const ${componentName}: React.FC = () => {
  // Add types for refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  // Add types for state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions with types
  ${formattedDataDecl}

  ${formattedAlgorithmCode}

  useEffect(() => {
    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  // Setup chart when component mounts or container changes
  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart with type safety
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      // Apply other chart options from the original example
      // Cast the parsed spec part to G2Spec for better type checking, though it might be partial
      ...(${JSON.stringify(spec, null, 2)} as Partial<G2Spec>),
    });

    // Initial visualization setup - map data to SortFrame structure
    renderCurrentState(data.map((value, index) => ({ value, swap: false, index })));

  }, []); // Rerun effect if containerRef changes (though unlikely)

  // Function to render chart with current data state - Add type for frameData
  const renderCurrentState = (frameData: SortFrame) => {
    if (!chartRef.current) return;

    const chart = chartRef.current;

    // Clear previous marks before rendering new frame
    chart.clear();

    // Define the spec for the interval mark within the keyframe logic
    // Note: G2's timingKeyframe API is imperative and doesn't directly use a full declarative spec here.
    // We define the mark properties directly.
    chart
      .interval() // Create an interval mark
      .data(frameData.map((datum, index) => ({ index, ...datum }))) // Use the current frame's data
      .encode('x', 'index') // Encode x-axis based on index
      .encode('y', 'value') // Encode y-axis based on value
      .encode('key', 'value') // Use value as key for animation continuity
      .encode('color', 'swap') // Color based on swap status
      .scale('color', { range: ['#4e79a7', '#e15759'] }); // Define color scale for swap status

    chart.render();
  };

  // Play/pause the animation
  const togglePlay = () => {
    if (isPlaying) {
      // Stop playing
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start playing
      setIsPlaying(true);
      // Ensure data is reset before starting generator
      let generator = insertionSort([...data]); // Use a copy of the original data
      let step = generator.next();

      const animate = () => {
        if (step.done || !isPlaying) { // Check isPlaying flag in case stop was pressed
          clearTimeout(animationRef.current);
          animationRef.current = null;
          return;
        }

        renderCurrentState(step.value);
        step = generator.next();

        // Schedule next frame
        animationRef.current = setTimeout(animate, speed);
      };

      animate(); // Start the animation loop
    }
  };

  // Reset the animation
  const resetAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
    renderCurrentState(data.map((value) => ({ value, swap: false })));
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      <div className="flex space-x-2 mb-4">
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={togglePlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          className="px-3 py-1 bg-gray-500 text-white rounded"
          onClick={resetAnimation}
        >
          Reset
        </button>
        <div className="flex items-center space-x-2">
          <label htmlFor="speed" className="text-sm">Speed:</label>
          <input 
            id="speed" 
            type="range" 
            min="100" 
            max="1000" 
            step="100" 
            value={speed} 
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-32"
          />
          <span className="text-sm">{speed}ms</span>
        </div>
      </div>
      <div ref={containerRef} className="h-[400px] w-full border rounded"></div>
    </div>
  );
};

export default ${componentName};
`;
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
  console.log(`1. Review the generated components in '${targetExamplesDir}'. Pay close attention to TODO comments and manually adjust the G2 spec object where needed.`);
  console.log(`2. Install any detected external dependencies (like d3, lodash, @antv/g2-extension-ava) in the 'integration/themex' project:`);
  console.log(`   cd integration/themex && npm install d3 lodash @antv/g2-extension-ava @antv/g-plugin-a11y @types/d3 @types/lodash ...`);
  console.log(`3. Ensure you have a G2Chart wrapper component at '${wrapperPath}' relative to the generated files.`);
  console.log(`4. Implement dynamic routing or a display mechanism in your Next.js app to load and render these components.`);

}

main().catch(console.error);