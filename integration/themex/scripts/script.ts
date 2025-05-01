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
        const match = mdContent.match(/^---\s*[\s\S]*?title:\s*(?:['"]?)(.+?)(?:['"]?)\s*[\s\S]*?---/);
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
        hasAlgorithms: /function\s*\*|sort|cluster|layout|force|tree|graph|hierarchy|pack|partition|treemap|interpolate|regression|kernel|density|bin|quantile|threshold|geoPath|geoGraticule|geoCircle|geoDistance|geoContains|geoCentroid|geoBounds|geoArea|geoLength|voronoi|delaunay|convexHull|polygonContains|polygonArea|polygonCentroid|polygonHull|polygonLength|path/.test(code),
        hasAnimations: /\.animate\(/.test(code) || /keyframe/.test(code),
        hasTimingKeyframe: /timingKeyframe\(/.test(code),
        algorithmCode: null as string | null,
        dataTransformCode: null as string | null
    };
    
    // Try to extract generator function if exists
    const generatorMatch = code.match(/function\s*\*\s*([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{([\s\S]*?)\}/);
    if (generatorMatch) {
        // Basic brace balancing check
        const funcBody = generatorMatch[2];
        const openBraces = (funcBody.match(/\{/g) || []).length;
        const closeBraces = (funcBody.match(/\}/g) || []).length;
        if (openBraces === closeBraces) {
            result.algorithmCode = `function* ${generatorMatch[1]}${generatorMatch[0].substring(generatorMatch[0].indexOf('('))}`;
        } else {
            console.warn(`Algorithm extraction produced unbalanced braces for ${generatorMatch[1]}. Code might be incomplete.`);
            result.algorithmCode = `/* TODO: Review extracted algorithm with unbalanced braces:\nfunction* ${generatorMatch[1]}${generatorMatch[0].substring(generatorMatch[0].indexOf('('))}\n*/`;
        }
    }
    
    // Try to extract common data transformation patterns (map, filter, reduce)
    // This is very basic and might miss complex transformations
    const dataTransformMatch = code.match(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*([^;]*?(\.map\(|\.filter\(|\.reduce\()[^;]*)/);
    if (dataTransformMatch) {
        result.dataTransformCode = `// Potential data transformation detected:\nconst ${dataTransformMatch[1]} = ${dataTransformMatch[2]};`;
    }
    
    return result;
}

// Extract raw data declaration if there is one
function extractRawDataDeclaration(code: string): string | null {
  // Look for variable declarations that look like data arrays or objects
  // Improved regex to handle different spacings and potential trailing commas
  const dataVarMatch = code.match(/(?:const|let|var)\s+data\s*=\s*(\[[\s\S]*?\]|{[^}]*});?/);
  if (dataVarMatch) {
    return dataVarMatch[0]; // Return the full declaration statement
  }
  return null;
}

// Extract helper functions defined in the script
function extractHelperFunctions(code: string): { name: string; code: string }[] {
    const functions: { name: string; code: string }[] = [];
    // Match `function funcName(...) { ... }` or `const funcName = (...) => { ... }` or `const funcName = function(...) { ... }`
    const funcRegex = /(?:function\s+([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{[\s\S]*?\}|const\s+([a-zA-Z0-9_]+)\s*=\s*(?:\([^)]*\)\s*=>\s*\{[\s\S]*?\}|\(?function\)?\s*\([^)]*\)\s*\{[\s\S]*?\}));?/g;
    let match;
    while ((match = funcRegex.exec(code)) !== null) {
        const funcCode = match[0];
        const funcName = match[1] || match[2]; // Get name from correct capture group

        // Basic check for balanced braces - very naive
        const openBraces = (funcCode.match(/\{/g) || []).length;
        const closeBraces = (funcCode.match(/\}/g) || []).length;

        if (funcName && openBraces === closeBraces && openBraces > 0) {
            // Avoid extracting the main chart rendering logic if it's wrapped in a function
            if (!funcCode.includes('new Chart') && !funcCode.includes('.render()')) {
                 functions.push({ name: funcName, code: funcCode });
            }
        } else if (funcName) {
            console.warn(`Helper function extraction produced unbalanced braces (${openBraces} open vs ${closeBraces} close) for ${funcName}. Skipping.`);
        }
    }
    return functions;
}


// Extract animation-related code sections
function extractAnimationCode(code: string): {
  hasAnimation: boolean;
  keyframeDeclaration: string | null;
  animationLoop: string | null;
} {
  const result = {
    hasAnimation: /\.animate\(/.test(code) || /keyframe/.test(code),
    keyframeDeclaration: null as string | null,
    animationLoop: null as string | null,
  };

  // Get keyframe declaration (e.g., chart.timingKeyframe())
  const keyframeMatch = code.match(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*chart\.timingKeyframe\(\);?/);
  if (keyframeMatch) {
    result.keyframeDeclaration = keyframeMatch[0];
  }

  // Get animation loop (e.g., for (const frame of ...)) - very basic
  const animLoopMatch = code.match(/for\s*\(\s*(?:const|let)\s+frame\s+of\s+[^)]*\)\s*\{[\s\S]*?\}/);
  if (animLoopMatch) {
    result.animationLoop = animLoopMatch[0];
  }

  return result;
}

// Basic parser for G2 imperative code (using Regex - limited capability)
// Tries to convert imperative calls to a declarative G2Spec object
function parseG2Code(code: string): {
    spec: Record<string, any>;
    needsFetching: boolean;
    fetchUrl: string | null;
    originalData: any; // Can be array, object, number, or null/error string
    helperFunctions: { name: string; code: string }[];
    isComplex: boolean; // Indicates animation, algorithm, or complex setup
    complexDetails: {
        hasAnimation: boolean;
        hasAlgorithm: boolean;
        algorithmCode: string | null;
        rawDataDeclaration: string | null;
        keyframeDeclaration: string | null;
        animationLoop: string | null;
    };
} {
    const complexLogic = detectComplexLogic(code);
    const spec: Record<string, any> = {};
    let data: any = null;
    let needsFetching = false;
    let fetchUrl = null;
    let chartType: string | null = null;
    const encodes: Record<string, any> = {}; // Allow arrays for channels like y
    const transforms: any[] = [];
    const scales: Record<string, any> = {};
    const axes: Record<string, any> = {};
    const legends: Record<string, any> = {};
    const styles: Record<string, any> = {};
    const labels: any[] = []; // G2 v5 uses array for labels
    const tooltips: any[] = []; // G2 v5 uses array for tooltips
    let coordinate: any = null;
    const interactions: Record<string, any> = {}; // Store multiple interactions
    let plugins: any[] = []; // Store plugins

    // Extract helper functions first
    const helperFunctions = extractHelperFunctions(code);

    // Check for complex animations, algorithms, etc.
    const isAnimationExample = complexLogic.hasAnimations;
    const hasKeyframe = complexLogic.hasTimingKeyframe;
    const isAlgorithm = complexLogic.hasGenerators || complexLogic.hasAlgorithms; // Broaden definition

    // Extract raw data if any
    const rawDataDecl = extractRawDataDeclaration(code);

    // Extract any algorithms (generator functions)
    const algorithmCode = complexLogic.algorithmCode; // Use the one from detectComplexLogic

    // Extract animation code
    const animationDetails = extractAnimationCode(code);

    const isComplex = isAnimationExample || isAlgorithm || hasKeyframe;

    const complexDetails = {
        hasAnimation: isAnimationExample,
        hasAlgorithm: isAlgorithm,
        algorithmCode: algorithmCode,
        rawDataDeclaration: rawDataDecl,
        keyframeDeclaration: animationDetails.keyframeDeclaration,
        animationLoop: animationDetails.animationLoop,
    };

    // --- Chart Initialization ---
    const chartInitMatch = code.match(/new Chart\(\s*(\{[\s\S]*?\})\s*\)/);
    if (chartInitMatch) {
        const optionsStrRaw = chartInitMatch[1];
        // Attempt to parse basic options, focusing on width, height, plugins
        try {
            // Extract width/height directly if possible
            const widthMatch = optionsStrRaw.match(/width:\s*(\d+)/);
            if (widthMatch) spec.width = parseInt(widthMatch[1], 10);
            const heightMatch = optionsStrRaw.match(/height:\s*(\d+)/);
            if (heightMatch) spec.height = parseInt(heightMatch[1], 10);

            // Extract plugins (very basic, assumes simple array)
            const pluginsMatch = optionsStrRaw.match(/plugins:\s*(\[.*?\])/);
            if (pluginsMatch) {
                plugins.push({ comment: `/* TODO: Manually convert plugins from Chart constructor: ${pluginsMatch[1]} */` });
            }
            // Add comment for other options
            spec.chartOptionsComment = `/* TODO: Review Chart constructor options: ${optionsStrRaw} */`;

        } catch (e) {
            spec.chartOptionsComment = `/* TODO: Manually convert Chart constructor options (parse failed): ${optionsStrRaw} */`;
        }
    }

    // --- Chart Type (Mark) ---
    // Look for the first mark type call (interval, line, point, etc.)
    // Improved regex to handle potential options object: .interval({...})
    const markMatch = code.match(/\.(interval|line|point|cell|area|path|polygon|image|link|vector|rect|text|box|shape|density|heatmap|liquid|wordCloud)\s*\(/);
    if (markMatch) {
        chartType = markMatch[1];
        spec.type = chartType; // Set top-level type for simple charts
    } else {
        // Check for chart.options({ type: '...', children: [...] }) structure
        const optionsTypeMatch = code.match(/chart\.options\(\s*(\{[\s\S]*?type:\s*['"]([^'"]+)['"][\s\S]*?\})\s*\)/);
        if (optionsTypeMatch) {
            spec.type = optionsTypeMatch[2]; // e.g., spaceLayer, facetRect
            // Check for children specifically
            const childrenMatch = optionsTypeMatch[1].match(/children:\s*(\[[\s\S]*?\])/);
            if (childrenMatch) {
                spec.childrenComment = `/* TODO: Manually convert children array from chart.options(): ${childrenMatch[1]} */`;
            } else {
                 spec.optionsComment = `/* TODO: Review chart.options() content: ${optionsTypeMatch[1]} */`;
            }
        } else {
           spec.typeComment = "/* TODO: Determine chart type (e.g., interval, line, point) */";
        }
    }

    // --- Data ---
    const dataFetchMatch = code.match(/\.data\(\s*\{\s*type:\s*['"]fetch['"],\s*value:\s*['"]([^'"]+)['"]\s*\}\s*\)/);
    const dataInlineMatch = code.match(/\.data\(\s*(\[[\s\S]*?\]|\{[\s\S]*?\})\s*\)/); // Match inline array or object data
    const dataDirectMatch = code.match(/chart\.data\(([^)]+)\)/); // Match direct variable or value

    if (dataFetchMatch) {
        needsFetching = true;
        fetchUrl = dataFetchMatch[1];
        spec.data = { type: 'fetch', value: fetchUrl }; // Add to spec directly
    } else if (dataInlineMatch) {
        const dataStrRaw = dataInlineMatch[1];
        try {
            // Attempt to parse inline data - very fragile, use Function constructor for safety
            // This is safer than eval but still has limitations.
            data = new Function(`return ${dataStrRaw}`)();
            spec.data = data;
        } catch (e) {
            spec.dataComment = `/* TODO: Manually define inline data. Parse failed. Original: ${dataStrRaw} */`;
            data = "/* PARSE_ERROR */";
        }
    } else if (dataDirectMatch) {
         const dataArg = dataDirectMatch[1].trim();
         // Check if it's a number (e.g., for liquid chart)
         if (!isNaN(parseFloat(dataArg)) && isFinite(Number(dataArg))) {
             spec.data = parseFloat(dataArg);
             data = spec.data;
         } else if (/^['"].*['"]$/.test(dataArg)) { // Check if it's a string literal (e.g., URL)
             const url = dataArg.slice(1, -1);
             // Assume it might be a fetch URL if it looks like one
             if (url.startsWith('http') || url.endsWith('.json') || url.endsWith('.csv')) {
                 needsFetching = true;
                 fetchUrl = url;
                 spec.data = { type: 'fetch', value: fetchUrl };
             } else {
                 // Treat as simple string data if not URL-like
                 spec.data = url;
                 data = url;
             }
         } else {
             // Assume it's a variable name
             spec.dataComment = `/* TODO: Data assigned from variable: ${dataArg}. Ensure this variable is defined or data is fetched/provided. */`;
             data = `/* ${dataArg} */`; // Placeholder
             // If we extracted a raw data declaration with this name, use it
             if (rawDataDecl && new RegExp(`(?:const|let|var)\\s+${dataArg}\\s*=`).test(rawDataDecl)) {
                 spec.dataComment += ` Potential source found: ${rawDataDecl}`;
                 // Try parsing the extracted raw data
                 try {
                     const rawDataMatch = rawDataDecl.match(/=\s*(\[[\s\S]*?\]|{[^}]*});?/);
                     if (rawDataMatch) {
                         data = new Function(`return ${rawDataMatch[1]}`)();
                         spec.data = data; // Use parsed raw data
                         delete spec.dataComment; // Remove TODO if successful
                     }
                 } catch (e) {
                     spec.dataComment += ` (Parsing raw data failed)`;
                 }
             }
         }
    } else {
        // Check if data was defined in chart.options()
        const optionsDataMatch = code.match(/chart\.options\(\s*(\{[\s\S]*?data:\s*([\s\S]*?)[\s\S]*?\})\s*\)/);
        if (optionsDataMatch) {
            const dataStrRaw = optionsDataMatch[2].split(/,(?!\s*[\w]+:)/)[0].trim(); // Try to get data part
             spec.dataComment = `/* TODO: Data defined within chart.options(). Review and convert: ${dataStrRaw} */`;
             data = `/* options.data: ${dataStrRaw} */`;
        } else {
            spec.dataComment = "/* TODO: Define chart data (inline, fetched, or from variable) */";
        }
    }

    // --- Encodings ---
    // Match .encode('channel', value) or .encode({ channel: value, ... })
    const encodeMatches = code.matchAll(/\.encode\(([^)]+)\)/g);
    for (const match of encodeMatches) {
        const argsStr = match[1].trim();
        if (argsStr.startsWith('{')) { // Object syntax: .encode({ x: '...', y: '...' })
            try {
                // Very basic parsing, might fail on functions/complex values
                const objStr = argsStr.replace(/([a-zA-Z0-9_]+):/g, '"$1":').replace(/'/g, '"');
                const parsedEncodes = JSON.parse(objStr);
                Object.assign(encodes, parsedEncodes);
            } catch (e) {
                encodes.comment = `/* TODO: Manually convert encode object: ${argsStr} */`;
             }
         } else { // Argument syntax: .encode('channel', value)
             const parts = argsStr.split(/,([\s\S]*)/); // Split only on the first comma, match any char including newline
             if (parts.length === 2) {
                 const channel = parts[0].trim().replace(/['"]/g, '');
                let value = parts[1].trim();
                // Remove quotes if it's a simple string field name
                if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
                    value = value.slice(1, -1);
                } else if (value.startsWith('[') && value.endsWith(']')) {
                    // Handle array values like ['start', 'end']
                    try {
                        value = JSON.parse(value.replace(/'/g, '"'));
                    } catch (e) {
                         value = `/* TODO: Convert encode array: ${value} */`;
                    }
                } else {
                    // It might be a function, variable, or complex expression
                    value = `/* TODO: Convert encode function/expression: ${value} */`;
                }
                encodes[channel] = value;
            }
        }
    }
    if (Object.keys(encodes).length > 0) {
        spec.encode = encodes;
    }

    // --- Transforms ---
     const transformMatches = code.matchAll(/\.transform\(\s*(\{[\s\S]*?\})\s*\)/g);
     for (const match of transformMatches) {
         const transformStrRaw = match[1];
         try {
             // Basic parsing attempt - will fail on functions
             const transformStr = transformStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             transforms.push(JSON.parse(transformStr));
         } catch (e) {
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
             // Basic parsing attempt
             const scaleStr = scaleStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
             scales[channel] = JSON.parse(scaleStr);
         } catch (e) {
             scales[channel] = { comment: `/* TODO: Manually convert scale options (may contain functions): ${scaleStrRaw} */` };
         }
     }
      if (Object.keys(scales).length > 0) {
         spec.scale = scales;
     }

     // --- Axes ---
     // Match .axis('channel', options) or .axis(false) or .axis({ channel: options, ... })
     const axisMatches = code.matchAll(/\.axis\(([^)]+)\)/g);
     for (const match of axisMatches) {
         const argsStr = match[1].trim();
         if (argsStr === 'false') {
             spec.axis = false; // Disable all axes
             break; // Stop processing further axis calls if all are disabled
         } else if (argsStr.startsWith('{')) { // Object syntax: .axis({ x: {...}, y: false })
             try {
                 // Basic parsing, functions will cause issues
                 const objStr = argsStr.replace(/([a-zA-Z0-9_]+):/g, '"$1":').replace(/'/g, '"');
                 const parsedAxes = JSON.parse(objStr);
                 Object.assign(axes, parsedAxes); // Merge into existing axes object
             } catch (e) {
                 axes.comment = `/* TODO: Manually convert axis object: ${argsStr} */`;
             }
         } else { // Argument syntax: .axis('channel', options | false)
             const parts = argsStr.split(/,([\s\S]*)/);
             if (parts.length === 2) {
                 const channel = parts[0].trim().replace(/['"]/g, '');
                 const optionsStrRaw = parts[1].trim();
                 if (optionsStrRaw === 'false') {
                     axes[channel] = false;
                 } else if (optionsStrRaw.startsWith('{')) {
                     try {
                         const axisStr = optionsStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
                         axes[channel] = JSON.parse(axisStr);
                     } catch (e) {
                         axes[channel] = { comment: `/* TODO: Manually convert axis options (may contain functions): ${optionsStrRaw} */` };
                     }
                 } else {
                      axes[channel] = { comment: `/* TODO: Unknown axis options format: ${optionsStrRaw} */` };
                 }
             }
         }
     }
     if (Object.keys(axes).length > 0 || spec.axis === false) {
         if (spec.axis !== false) spec.axis = axes; // Assign object only if not globally false
     }


     // --- Legends ---
     // Match .legend('channel', options) or .legend(false) or .legend({ channel: options, ... })
     const legendMatches = code.matchAll(/\.legend\(([^)]+)\)/g);
     for (const match of legendMatches) {
         const argsStr = match[1].trim();
         if (argsStr === 'false') {
             spec.legend = false; // Disable all legends
             break;
         } else if (argsStr.startsWith('{')) { // Object syntax
             legends.comment = `/* TODO: Manually convert legend object: ${argsStr} */`; // Always add comment due to potential functions
         } else { // Argument syntax
             const parts = argsStr.split(/,([\s\S]*)/);
             if (parts.length === 2) {
                 const channel = parts[0].trim().replace(/['"]/g, '');
                 const optionsStrRaw = parts[1].trim();
                 if (optionsStrRaw === 'false') {
                     legends[channel] = false;
                 } else {
                     legends[channel] = { comment: `/* TODO: Manually convert legend options (may contain functions): ${optionsStrRaw} */` };
                 }
             }
         }
     }
     if (Object.keys(legends).length > 0 || spec.legend === false) {
         if (spec.legend !== false) spec.legend = legends;
     }

     // --- Styles --- (Less common in declarative spec, often part of encode/mark)
      const styleMatches = code.matchAll(/\.style\(\s*(\{[\s\S]*?\}|['"]([^'"]+)['"],\s*([^)]+))\s*\)/g);
      for (const match of styleMatches) {
          if (match[1].startsWith('{')) { // Object syntax .style({...})
              styles.objectComment = `/* TODO: Manually convert style object: ${match[1]} */`;
          } else { // Argument syntax .style('key', value)
              const key = match[2];
              let value = match[3].trim();
              if (value.startsWith("'") && value.endsWith("'") || value.startsWith('"') && value.endsWith('"')) {
                  value = value.slice(1, -1);
              } else {
                   value = `/* TODO: Convert style value/expression: ${value} */`;
              }
              styles[key] = value;
          }
      }
      if (Object.keys(styles).length > 0) {
         spec.style = styles; // Add styles, but might need manual integration into marks/encodes
         spec.styleComment = `/* TODO: Review '.style()' calls. Styles might need to be applied to specific marks or encodes in declarative spec. */`;
      }

      // --- Labels --- (G2 v5 uses labels array)
      const labelMatches = code.matchAll(/\.label\(\s*(\{[\s\S]*?\})\s*\)/g);
      for (const match of labelMatches) {
          const labelStrRaw = match[1];
          // Labels often contain functions, always add comment.
          labels.push({ comment: `/* TODO: Manually convert label options (may contain functions): ${labelStrRaw} */` });
      }
       if (labels.length > 0) {
          spec.labels = labels; // Use 'labels' (plural) for G2 v5
      }

      // --- Tooltips --- (G2 v5 uses tooltip array/object)
      // Match .tooltip({...}) or .tooltip(false)
      const tooltipMatches = code.matchAll(/\.tooltip\(([^)]+)\)/g);
      for (const match of tooltipMatches) {
          const argsStr = match[1].trim();
          if (argsStr === 'false') {
              spec.tooltip = false;
              break;
          } else if (argsStr.startsWith('{')) {
              // Tooltips often contain functions (formatter), always add comment.
              tooltips.push({ comment: `/* TODO: Manually convert tooltip options (may contain functions): ${argsStr} */` });
          }
      }
      if (tooltips.length > 0) {
          // If only one tooltip config, can be object. If multiple, must be array.
          // For simplicity, always use array if we found any.
          spec.tooltip = tooltips;
      } else if (spec.tooltip === undefined && code.includes('.tooltip(')) {
          // If .tooltip() was called but not parsed as false or object, add general comment
          spec.tooltipComment = `/* TODO: Review .tooltip() calls and convert configuration. */`;
      }


      // --- Coordinate ---
      const coordinateMatch = code.match(/\.coordinate\(\s*(\{[\s\S]*?\})\s*\)/);
      if (coordinateMatch) {
          const coordStrRaw = coordinateMatch[1];
          try {
              // Basic parsing
              const coordStr = coordStrRaw.replace(/'/g, '"').replace(/([a-zA-Z0-9_]+):/g, '"$1":');
              coordinate = JSON.parse(coordStr);
              spec.coordinate = coordinate;
          } catch (e) {
              spec.coordinate = { comment: `/* TODO: Manually convert coordinate options: ${coordStrRaw} */` };
          }
      }

       // --- Interaction ---
       // Match .interaction('type', options | true | false)
       const interactionMatches = code.matchAll(/\.interaction\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\}|true|false))?\s*\)/g);
       for (const match of interactionMatches) {
           const type = match[1];
           const optionsPart = match[2]; // Includes comma if present
           let options: any = true; // Default to enabled if no options specified

           if (optionsPart) {
               const optionsStrRaw = optionsPart.trim().substring(1).trim(); // Remove leading comma
               if (optionsStrRaw === 'false') {
                   options = false;
               } else if (optionsStrRaw === 'true') {
                   options = true;
               } else if (optionsStrRaw.startsWith('{')) {
                   // Interactions often have complex options, add comment.
                   options = { comment: `/* TODO: Manually convert interaction options for '${type}': ${optionsStrRaw} */` };
               } else {
                   options = { comment: `/* TODO: Unknown interaction options format for '${type}': ${optionsStrRaw} */` };
               }
           }
           interactions[type] = options;
       }
       if (Object.keys(interactions).length > 0) {
           spec.interaction = interactions;
       }

        // --- Scrollbar --- (Often part of interaction in v5)
        const scrollbarMatch = code.match(/\.scrollbar\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\}|true|false))?\s*\)/);
        if (scrollbarMatch) {
            if (!spec.interaction) spec.interaction = {};
            if (!spec.interaction.scrollbar) spec.interaction.scrollbar = {};
            const channel = scrollbarMatch[1];
            const optionsPart = scrollbarMatch[2];
            let options: any = true;

            if (optionsPart) {
                const optionsStrRaw = optionsPart.trim().substring(1).trim();
                if (optionsStrRaw === 'false') options = false;
                else if (optionsStrRaw === 'true') options = true;
                else if (optionsStrRaw.startsWith('{')) options = { comment: `/* TODO: Manually convert scrollbar options: ${optionsStrRaw} */` };
                else options = { comment: `/* TODO: Unknown scrollbar options format: ${optionsStrRaw} */` };
            }
            spec.interaction.scrollbar[channel] = options;
        }

        // --- Plugins --- (Check for .plugin() calls)
        const pluginMatches = code.matchAll(/\.plugin\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\})?)?\s*\)/g);
        for (const match of pluginMatches) {
            const type = match[1];
            const optionsPart = match[2];
            let optionsComment = `/* TODO: Manually convert plugin options for '${type}' */`;
            if (optionsPart) {
                const optionsStrRaw = optionsPart.trim().substring(1).trim();
                if (optionsStrRaw.startsWith('{')) {
                    optionsComment = `/* TODO: Manually convert plugin options for '${type}': ${optionsStrRaw} */`;
                }
            }
            plugins.push({ type: type, comment: optionsComment });
        }
        if (plugins.length > 0) {
            spec.plugins = plugins;
        }


    return { spec, needsFetching, fetchUrl, originalData: data, helperFunctions, isComplex, complexDetails };
}


// Function to generate component content
async function generateComponentContent(example: ExampleInfo): Promise<string> {
  let originalCode = '// Original file could not be read.';
  let title = example.id.split('/').pop()?.replace(/-/g, ' ') || 'Example'; // Default title
  let potentialImports: string[] = [];
  let parsedResult: ReturnType<typeof parseG2Code> | null = null;

  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
    potentialImports = detectImports(originalCode);
    parsedResult = parseG2Code(originalCode);
  } catch (err) {
    console.error(`Could not read or parse original file: ${example.originalFilePath}`, err);
    // Create a fallback parsedResult
    parsedResult = {
        spec: { error: `Failed to read/parse ${example.originalFilePath}` },
        needsFetching: false,
        fetchUrl: null,
        originalData: null,
        helperFunctions: [],
        isComplex: false,
        complexDetails: { /* initialize complexDetails fields */ hasAnimation: false, hasAlgorithm: false, algorithmCode: null, rawDataDeclaration: null, keyframeDeclaration: null, animationLoop: null }
    };
  }

  // Try to read the index.en.md file for the title
  const extractedTitle = await extractTitleFromMarkdown(example.originalDemoDir);
  if (extractedTitle) {
      title = extractedTitle;
  } else {
      // console.warn(`Could not extract title for: ${example.id}. Using default.`);
  }

  const componentName = example.componentName;
  const { spec, needsFetching, fetchUrl, originalData, helperFunctions, isComplex, complexDetails } = parsedResult;

  // If it's complex (animation/algorithm), use the specialized generator
  if (isComplex) {
    // Pass necessary details to the specialized generator
    return generateAnimationAlgorithmComponent({
      componentName,
      title,
      originalCode,
      example,
      spec, // Pass the partially parsed spec
      rawDataDeclaration: complexDetails.rawDataDeclaration,
      algorithmCode: complexDetails.algorithmCode ? { name: 'extractedAlgorithm', code: complexDetails.algorithmCode } : null, // Adapt structure if needed
      keyframeDeclaration: complexDetails.keyframeDeclaration,
      animationLoop: complexDetails.animationLoop,
      potentialImports,
      wrapperPath,
      tsNoCheck: '// @ts-nocheck', // Add ts-nocheck here
      g2SpecImport: "import { type G2Spec } from '@antv/g2';",
      helperFunctions, // Pass helper functions
      // algorithmResult might need adjustment based on how algorithms are extracted now
      algorithmResult: complexDetails.algorithmCode ? { name: 'extractedAlgorithm', code: complexDetails.algorithmCode } : null,
    });
  }

  // --- Standard Component Generation ---

  // Clean up spec for stringification (remove comments, handle functions)
  const specString = JSON.stringify(spec, (key, value) => {
      // Remove comment objects or specific comment keys
      if (
        (typeof value === 'object' && value !== null && value.comment && Object.keys(value).length === 1) ||
        key.endsWith('Comment') || key === 'comment'
      ) {
        return undefined; // Remove the comment object/key entirely
      }
      // Remove values that are placeholder comments
      if (typeof value === 'string' && (value.startsWith('/* TODO:') || value.startsWith('/* PARSE_ERROR */') || value.startsWith('/* options.data:'))) {
          return undefined;
      }
      return value;
  }, 2)
  // Add placeholders for functions extracted as comments
  .replace(/"\/\* TODO: Convert (encode|style|axis|scale|legend|tooltip|label|coordinate|interaction|plugin) (function|expression|value|options|array): (.*?)\s*\*\/"/g, (match, type, subtype, content) => {
      // Attempt to make the comment content more readable as a placeholder
      // Remove excessive escaping from JSON.stringify
      const cleanedContent = content.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      return `undefined /* TODO: Manually convert ${type} ${subtype}: ${cleanedContent} */`;
  });


  // Add TypeScript type import and ts-nocheck to all generated files
  const tsNoCheck = '// @ts-nocheck'; // Keep ts-nocheck for now
  const g2SpecImport = "import { type G2Spec } from '@antv/g2';";

  const helperFunctionsCode = helperFunctions.length > 0
    ? `\n// --- Helper Functions Extracted from Original Example --- \n${helperFunctions.map(f => f.code).join('\n\n')}\n// --- End Helper Functions --- \n`
    : '';

  const dataHandlingCode = needsFetching
    ? `
  const [chartData, setChartData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let isMounted = true;
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
        if (isMounted) {
          setChartData(data);
          setLoading(false);
        }
      })
      .catch((e: Error) => {
         if (isMounted) {
           console.error("Failed to fetch chart data:", e);
           setError(e.message || 'Failed to load data');
           setLoading(false);
         }
      });
      return () => { isMounted = false }; // Cleanup function
  }, []); // Fetch only once on mount

  if (loading) {
    return <div className="p-4 text-center">Loading Chart Data...</div>;
  }

  if (error) {
      return <div className="p-4 text-center text-red-600">Error loading data: {error}</div>;
  }

  // Combine fetched data with the rest of the spec
  const finalSpec: G2Spec = { ...spec, data: chartData };
`
    : originalData === "/* PARSE_ERROR */" || (typeof originalData === 'string' && originalData.startsWith('/*'))
    ? `
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable '${String(originalData).match(/\/\*\s*(\w+)\s*\*\//)?.[1] || 'unknown'}' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = { ...spec, data: chartData };
`
    : `
  // Use the spec directly (data might be inline or handled elsewhere)
  const finalSpec: G2Spec = spec;
`;

  return `${tsNoCheck}
'use client';

import React from 'react';
${g2SpecImport}
import G2Chart from '${wrapperPath}';
${potentialImports.length > 0 ? '// Potential external libraries detected (ensure installed):' : ''}
${potentialImports.map(imp => `// ${imp}`).join('\n')}

/*
  Original G2 Example Code:
  Source: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
  ================================================================================
${originalCode.split('\n').map(line => `  // ${line}`).join('\n')}
  ================================================================================
*/

${helperFunctionsCode}

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = ${specString};

const ${componentName}: React.FC = () => {
  ${dataHandlingCode.split('\n').map(line => `  ${line}`).join('\n')}

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
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
  spec: Record<string, any>; // Parsed spec (might be incomplete)
  rawDataDeclaration?: string | null;
  algorithmCode?: { name: string; code: string } | null;
  keyframeDeclaration?: string | null;
  animationLoop?: string | null;
  potentialImports: string[];
  wrapperPath: string; // Not used here, as we need direct Chart access
  tsNoCheck: string;
  g2SpecImport: string; // Might need more than just G2Spec
  helperFunctions: { name: string; code: string }[];
  algorithmResult: { name: string; code: string } | null; // Keep for potential use
}): string {
  const {
    componentName,
    title,
    originalCode,
    example,
    spec, // Use the parsed spec as a base for initial options
    rawDataDeclaration,
    algorithmCode,
    keyframeDeclaration,
    animationLoop,
    potentialImports,
    // wrapperPath, // Not using the wrapper here
    tsNoCheck,
    // g2SpecImport, // Need full Chart import
    helperFunctions,
    algorithmResult
  } = params;

  // Clean up base spec for initial chart options (remove things handled dynamically)
  const initialSpecOptions = { ...spec };
  delete initialSpecOptions.data;
  delete initialSpecOptions.type; // Mark type is often set dynamically
  delete initialSpecOptions.encode; // Encoding is often set dynamically
  delete initialSpecOptions.labels; // Labels might depend on dynamic data
  delete initialSpecOptions.tooltip; // Tooltip might depend on dynamic data
  delete initialSpecOptions.animate; // Animation handled by loop/keyframe

  const initialSpecString = JSON.stringify(initialSpecOptions, (key, value) => {
       // Remove comment objects or specific comment keys
      if (
        (typeof value === 'object' && value !== null && value.comment && Object.keys(value).length === 1) ||
        key.endsWith('Comment') || key === 'comment'
      ) {
        return undefined; // Remove the comment object/key entirely
      }
      // Remove values that are placeholder comments
      if (typeof value === 'string' && (value.startsWith('/* TODO:') || value.startsWith('/* PARSE_ERROR */'))) {
          return undefined;
      }
      return value;
  }, 2)
   .replace(/"\/\* TODO: Convert (encode|style|axis|scale|legend|tooltip|label|coordinate|interaction|plugin) (function|expression|value|options|array): (.*?)\s*\*\/"/g, (match, type, subtype, content) => {
      const cleanedContent = content.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      return `undefined /* TODO: Manually convert ${type} ${subtype}: ${cleanedContent} */`;
  });


  // Format the raw data declaration or provide a default
  const formattedDataDecl = rawDataDeclaration
    ? rawDataDeclaration.replace(/^(const|let|var)\s+data\s*=/, 'const data: any[] =') // Use any[] or add comment
    : 'const data: any[] = [/* TODO: Define initial data array/object */];';

  // Determine algorithm code and name
  const finalAlgorithmResult = algorithmResult || algorithmCode; // Prefer algorithmResult if available
  const algorithmName = finalAlgorithmResult ? finalAlgorithmResult.name : 'yourAlgorithm'; // Use extracted name or placeholder
  const formattedAlgorithmCode = finalAlgorithmResult
   ? finalAlgorithmResult.code
   : `
// TODO: Define your algorithm generator function here.
// Example structure:
/*
interface AlgorithmDatum { value: number; swap?: boolean; index?: number; [key: string]: any; }
type AlgorithmFrame = AlgorithmDatum[];
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

function* ${algorithmName}(arr: any[]): Generator<AlgorithmFrame> {
  // Algorithm logic yielding frames...
  const initialState = arr.map((value, index) => ({ value, index }));
  yield initialState;
  // ... more steps ...
  const finalState = [...initialState]; // Modify as needed
  yield finalState;
  return finalState;
}
*/`;

  const helperFunctionsCode = helperFunctions.length > 0
    ? `\n// --- Helper Functions Extracted from Original Example --- \n${helperFunctions.map(f => f.code).join('\n\n')}\n// --- End Helper Functions --- \n`
    : '';

  // Component structure using direct Chart manipulation
  const componentCode = `${tsNoCheck}
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
// Import G2 Chart object and potentially other types/functions if needed
import { Chart, type G2Spec, type G2ViewTree } from '@antv/g2';
${potentialImports.length > 0 ? '// Potential external libraries (ensure installed):' : ''}
${potentialImports.map(imp => `// ${imp}`).join('\n')}

/*
  Original G2 Example Code:
  Source: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
  ================================================================================
${originalCode.split('\n').map(line => `  // ${line}`).join('\n')}
  ================================================================================
*/

// This example contains animations/algorithms requiring direct chart manipulation.
// Review the generated code carefully, especially data, algorithm, and rendering logic.

${helperFunctionsCode}

// --- Data and Algorithm Definitions ---
// TODO: Verify data type and structure
${formattedDataDecl}

// TODO: Verify or replace the algorithm implementation below
// Define the expected frame structure for type safety (adjust if algorithm output differs)
interface AlgorithmDatum {
  value: any; // Use a more specific type if known (e.g., number)
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
  const animationFrameRef = useRef<number | null>(null);
  const generatorRef = useRef<Generator<AlgorithmFrame, AlgorithmFrame | void, unknown> | null>(null);
  const isMountedRef = useRef<boolean>(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  // Function to render chart with current data state
  // This function needs to be adapted based on the specific example's rendering logic
  const renderCurrentState = useCallback((frameData: AlgorithmFrame): void => {
    if (!chartRef.current || !isMountedRef.current) return;
    const chart: Chart = chartRef.current;

    try {
        // --- TODO: Adapt the rendering logic below based on the original example ---
        // This is a generic template. You'll likely need to modify the 'options'
        // object to match the specific marks, encodings, scales, etc., used in
        // the original G2 code for this animation/algorithm.
        // Use the 'spec' object parsed earlier as a reference for initial settings.

        // Example: Define the view/mark structure dynamically
        const options: G2ViewTree = { // Use G2ViewTree for chart.options
            // type: 'interval', // Set mark type if needed, or define children
            data: frameData, // Update data
            // Define encodes based on frameData structure and original example
            encode: {
                x: 'index', // Example encoding
                y: 'value', // Example encoding
                key: 'id', // Example key for animation (ensure 'id' exists in frameData)
                color: 'value', // Example encoding
                // Add other encodings as needed...
            },
            // Define scales if necessary
            scale: {
                // x: { type: 'linear' },
                // y: { domain: [0, Math.max(...frameData.map(d => d.value))] },
                // color: { palette: 'spectral' },
            },
            // Define axes
            axis: {
                // x: { title: 'Index' },
                // y: { title: 'Value' },
            },
            // Define animation behavior
            animate: {
                enter: { type: 'fadeIn', duration: Math.min(300, speed / 2) },
                update: { type: 'morph', duration: Math.min(300, speed / 2) },
                exit: { type: 'fadeOut', duration: Math.min(300, speed / 2) },
            },
            // Add other options like coordinate, legend, style based on parsed 'spec'
            coordinate: spec.coordinate,
            legend: spec.legend,
            style: spec.style,
            // --- End TODO ---
        };

        // Use chart.options() to update the spec declaratively
        chart.options(options);
        chart.render();

    } catch (e: any) {
        console.error("Error during chart render/update:", e);
        setErrorState(\`Chart render error: \${e.message}\`);
        setIsPlaying(false); // Stop animation on error
    }

  }, [spec, speed]); // Include spec and speed in dependencies

  // Initialize chart and generator
  useEffect(() => {
    isMountedRef.current = true;
    setErrorState(null);
    if (!containerRef.current) return;

    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
      // Attempt to get the algorithm function reference.
      // Using 'new Function' is slightly safer than eval but still has limitations.
      // It requires the algorithm code to be self-contained or rely on global scope.
      // Best practice: Define the algorithm directly in the component scope if possible.
      if (typeof window !== 'undefined' && (window as any)[algorithmName]) {
          algorithmFunction = (window as any)[algorithmName] as AlgorithmGenerator;
      } else {
          // Fallback: Try to create function (might fail with complex closures/imports)
          console.warn(\`Algorithm '\${algorithmName}' not found globally, attempting dynamic creation. Consider defining it directly in the component.\`);
          algorithmFunction = new Function(\`return (\${formattedAlgorithmCode})\`)() as AlgorithmGenerator;
      }


      if (typeof algorithmFunction !== 'function') {
        throw new Error(\`Algorithm named '\${algorithmName}' is not defined or not a function.\`);
      }
      // Create generator instance, cloning data
      const dataCopy = JSON.parse(JSON.stringify(data)); // Simple deep clone for arrays/objects
      generatorRef.current = algorithmFunction(dataCopy);

    } catch (e: any) {
      console.error(\`Failed to initialize algorithm '\${algorithmName}':\`, e);
      setErrorState(\`Failed to load algorithm: \${e.message || 'Unknown error'}\`);
      generatorRef.current = null;
    }

    // Create new chart instance with initial options from parsed spec
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      // Apply base options (width, height, coordinate, etc.)
      ...initialSpecOptions, // Use the cleaned initial options
    });

    // Render the initial state if generator is ready
    if (generatorRef.current) {
        try {
            const initialStep = generatorRef.current.next();
            if (!initialStep.done && initialStep.value) {
              renderCurrentState(initialStep.value);
            } else if (initialStep.done && initialStep.value) { // Handle immediate completion
                 renderCurrentState(initialStep.value);
             }
         } catch (e: any) {
              console.error(\`Error rendering initial state for algorithm '\${algorithmName}':\`, e);
              setErrorState(\`Error rendering initial state: \${e.message || 'Unknown error'}\`);
         }
     } else {
         // If generator failed, render the chart without data or with placeholder
         chartRef.current.options({ data: [] }); // Clear data
         chartRef.current.render();
     }

    // Cleanup
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = null;
      generatorRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algorithmName, formattedAlgorithmCode, renderCurrentState]); // Dependencies

  // Animation loop logic (remains largely the same)
  useEffect(() => {
    if (!isPlaying || !generatorRef.current || errorState) { // Stop if error occurs
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
      return;
    }

    let lastFrameTime = performance.now();
    const animate = (currentTime: number) => {
      if (!isPlaying || !generatorRef.current || !isMountedRef.current || errorState) {
        animationFrameRef.current = null;
        return;
      }
      const deltaTime = currentTime - lastFrameTime;
      if (deltaTime >= speed) {
        try {
            const step = generatorRef.current.next();
            if (step.done) {
              setIsPlaying(false);
              if (step.value) renderCurrentState(step.value); // Render final state
              animationFrameRef.current = null;
              return;
            }
            if (step.value) renderCurrentState(step.value);
            lastFrameTime = currentTime;
        } catch (e: any) {
             console.error("Error during animation step:", e);
             setErrorState(\`Animation error: \${e.message}\`);
             setIsPlaying(false); // Stop animation on error
             animationFrameRef.current = null;
             return;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    };
  }, [isPlaying, speed, renderCurrentState, errorState]);

  // Play/pause handler
  const togglePlay = (): void => {
    if (errorState) return; // Don't allow play if there's an error
    setIsPlaying(prev => !prev);
    if (isPlaying && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
    }
  };

  // Reset handler
  const resetAnimation = useCallback((): void => {
    setIsPlaying(false);
    setErrorState(null); // Clear errors on reset
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;

    let algorithmFunction: AlgorithmGenerator | null = null;
    try {
      // Re-get the algorithm function
       if (typeof window !== 'undefined' && (window as any)[algorithmName]) {
          algorithmFunction = (window as any)[algorithmName] as AlgorithmGenerator;
      } else {
          algorithmFunction = new Function(\`return (\${formattedAlgorithmCode})\`)() as AlgorithmGenerator;
      }

      if (typeof algorithmFunction !== 'function') {
          throw new Error(\`Algorithm named '\${algorithmName}' is not defined or not a function (on reset).\`);
      }
      // Create new generator with fresh data copy
      const dataCopy = JSON.parse(JSON.stringify(data));
      generatorRef.current = algorithmFunction(dataCopy);
       const initialStep = generatorRef.current.next();
       if (!initialStep.done && initialStep.value) {
           renderCurrentState(initialStep.value);
       } else if (initialStep.done && initialStep.value) {
           renderCurrentState(initialStep.value);
       } else if (chartRef.current) {
           // If generator finishes immediately with no value, clear chart data
           chartRef.current.options({ data: [] });
           chartRef.current.render();
       }

     } catch (e: any) {
         console.error(\`Failed to reset algorithm '\${algorithmName}':\`, e);
         setErrorState(\`Failed to reset algorithm: \${e.message || 'Unknown error'}\`);
         generatorRef.current = null;
         // Clear chart on reset error
         if (chartRef.current) {
             chartRef.current.options({ data: [] });
             chartRef.current.render();
         }
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [algorithmName, formattedAlgorithmCode, renderCurrentState]); // Dependencies

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      {/* TODO: Add description if available */}
      <div className="flex flex-wrap items-center space-x-2 mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={togglePlay}
          disabled={!generatorRef.current || !!errorState}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={resetAnimation}
          // Allow reset even if generator failed initially, to try again
        >
          Reset
        </button>
        <div className="flex items-center space-x-2">
          <label htmlFor="speed" className="text-sm">Speed:</label>
          <input
            id="speed" type="range" min="50" max="1500" step="50"
            value={speed} onChange={handleSpeedChange} className="w-32"
            disabled={!generatorRef.current || !!errorState}
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
         {/* Chart is rendered here */}
      </div>
    </div>
  );
};

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