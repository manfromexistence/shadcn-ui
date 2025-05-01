import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier'; // Import prettier for formatting

// ... (keep existing imports) ...

interface ExampleInfo {
  id: string;
  componentName: string;
  filePath: string;
  originalFilePath: string;
  originalDemoDir: string; // Directory containing the original demo.ts and index.en.md
}

// Helper function to convert kebab-case/slash-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split(/[-/]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to extract title and description from frontmatter and body
async function extractFrontmatterData(dirPath: string): Promise<{ title: string | null; description: string | null }> {
    const mdFilePath = path.join(dirPath, '../index.en.md'); // Assuming English markdown for title/desc
    let title: string | null = null;
    let description: string | null = null;
    try {
        const mdContent = await fs.readFile(mdFilePath, 'utf-8');
        // Extract frontmatter
        const frontmatterMatch = mdContent.match(/^---\s*([\s\S]*?)\s*---/);
        if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(?:['"]?)(.+?)(?:['"]?)\s*(?:\n|$)/);
            if (titleMatch) {
                title = titleMatch[1].trim();
            }
            // Extract description from the body (content after frontmatter)
            const bodyContent = mdContent.substring(frontmatterMatch[0].length).trim();
            // Use the first paragraph as description, or a snippet
            const firstParagraphMatch = bodyContent.match(/^(.+?)(\n\n|$)/);
            if (firstParagraphMatch) {
                description = firstParagraphMatch[1].trim().replace(/`/g, ''); // Remove backticks if any
            } else if (bodyContent) {
                description = bodyContent.substring(0, 150).trim() + (bodyContent.length > 150 ? '...' : ''); // Fallback to snippet
            }
        } else {
            // If no frontmatter, maybe use the first line as title? Less reliable.
            // console.warn(`No frontmatter found in: ${mdFilePath}`);
        }
    } catch (err) {
        // console.warn(`Could not read or parse markdown file: ${mdFilePath}`);
    }
    return { title, description };
}


// Function to detect common imports and G2 extensions
function detectImports(code: string): string[] {
  const imports: string[] = [];
  const detected = new Set<string>();

  if (/\bimport\s+\*\s+as\s+d3\b/.test(code) || /\bd3\./.test(code)) {
    if (!detected.has('d3')) { imports.push("import * as d3 from 'd3';"); detected.add('d3'); }
  }
  if (/\bimport\s+_\s+from\s+'lodash'\b/.test(code) || /\b_\./.test(code)) {
    if (!detected.has('lodash')) { imports.push("import _ from 'lodash';"); detected.add('lodash'); }
  }
  if (/\bimport\s+\{[^}]*Insight[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
    if (!detected.has('ava')) { imports.push("import { Insight } from '@antv/g2-extension-ava'; // Or other exports"); detected.add('ava'); }
  }
  if (/\bimport\s+\{[^}]*Auto[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
    if (!detected.has('ava')) { imports.push("import { Auto } from '@antv/g2-extension-ava'; // Or other exports"); detected.add('ava'); }
  }
  // Corrected A11yPlugin import detection and addition
  if (/\bimport\s+\{[^}]*Plugin[^}]*\}\s+from\s+'@antv\/g-plugin-a11y'/.test(code) || /new\s+Plugin\(/.test(code)) {
    if (!detected.has('a11y')) { imports.push("import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y';"); detected.add('a11y'); }
  }
  // Detect animation/keyframe related imports
  if (/\btimingKeyframe\b/.test(code) || /\bstaggeredKeyframe\b/.test(code)) {
     if (!detected.has('g2-animations')) { imports.push("// Animation functions like timingKeyframe might need direct G2 import or definition"); detected.add('g2-animations'); }
  }
  // Add more common libraries or G2 extensions if needed
  return imports;
}

// Placeholder for detectComplexLogic - Implement based on actual requirements
// Add rawDataDeclaration to the return type details
function detectComplexLogic(code: string): {
    isComplex: boolean;
    details: {
        hasAnimation: boolean;
        hasAlgorithm: boolean;
        algorithmCode: string | null;
        rawDataDeclaration: string | null; // Added property
        keyframeDeclaration: string | null;
        animationLoop: string | null;
    };
} {
    const hasAnimation = /\.animate\(/.test(code) || /keyframe/.test(code);
    const hasAlgorithm = /function\s*\*/.test(code) || /yield/.test(code) || /requestAnimationFrame/.test(code);
    const isComplex = hasAnimation || hasAlgorithm;
    const rawDataDecl = extractRawDataDeclaration(code); // Extract data declaration here

    return {
        isComplex,
        details: {
            hasAnimation,
            hasAlgorithm,
            algorithmCode: null, // Placeholder
            rawDataDeclaration: rawDataDecl, // Assign extracted data
            keyframeDeclaration: null, // Placeholder
            animationLoop: null, // Placeholder
        },
    };
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
    // Improved regex to better capture arrow functions and handle spacing
    const funcRegex = /(?:function\s+([a-zA-Z0-9_$]+)\s*\([^)]*\)\s*\{[\s\S]*?\}|const\s+([a-zA-Z0-9_$]+)\s*=\s*(?:\(?\s*\([^)]*\)\s*\)?\s*=>\s*\{[\s\S]*?\}|\(?function\)?\s*\([^)]*\)\s*\{[\s\S]*?\}));?/g;
    let match;
    while ((match = funcRegex.exec(code)) !== null) {
        const funcCode = match[0];
        const funcName = match[1] || match[2]; // Get name from correct capture group

        // Basic check for balanced braces - very naive
        const openBraces = (funcCode.match(/\{/g) || []).length;
        const closeBraces = (funcCode.match(/\}/g) || []).length;

        if (funcName && openBraces === closeBraces && openBraces > 0) {
            // Avoid extracting the main chart rendering logic if it's wrapped in a function
            if (!funcCode.includes('new Chart') && !funcCode.includes('.render()') && !funcCode.includes('chart\.options')) {
                 functions.push({ name: funcName, code: funcCode });
            }
        } else if (funcName) {
            console.warn(`Helper function extraction produced unbalanced braces (${openBraces} open vs ${closeBraces} close) for ${funcName}. Skipping.`);
        }
    }
    return functions;
}

// ... (keep extractAnimationCode) ...

// Function to attempt parsing a string as JSON or return a placeholder
function tryParseJson(jsonString: string, context: string): any {
    try {
        // Handle potential trailing commas before parsing
        const cleanedString = jsonString.replace(/,\s*([\]}])/g, '$1');
        return JSON.parse(cleanedString);
    } catch (e) {
        // If parsing fails, return a placeholder object indicating manual conversion is needed
        return { comment: `/* TODO: Manually convert ${context} options (JSON parse failed): ${jsonString} */` };
    }
}

// Function to convert simple JS object/array string to JSON-like string
// Handles simple cases, may fail on complex structures or functions
function jsToJsonLike(jsString: string): string {
    // Add quotes around keys, handle single quotes, remove trailing commas
    return jsString
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/([a-zA-Z0-9_$]+)\s*:/g, '"$1":') // Add quotes around keys
        .replace(/,\s*([\]}])/g, '$1'); // Remove trailing commas
}

// Function to represent functions/variables found in spec options
function handleFunctionOrVariable(valueStr: string, helperFunctionNames: Set<string>): string {
    valueStr = valueStr.trim();
    // Check if it's a known helper function name
    if (helperFunctionNames.has(valueStr)) {
        return `%%HELPER_FUNCTION:${valueStr}%%`; // Placeholder for helper function
    }
    // Check if it looks like an inline function (arrow or traditional)
    if ((valueStr.startsWith('(') && valueStr.includes('=>')) || valueStr.startsWith('function')) {
        return `%%FUNCTION:${valueStr}%%`; // Placeholder for inline function
    }
    // Assume it's a variable or constant - keep as is for now, might need manual check
    // Could add a placeholder like %%VARIABLE:valueStr%% if needed
    return valueStr;
}


// Basic parser for G2 imperative code (using Regex - limited capability)
// Update return type to match detectComplexLogic details type
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
        rawDataDeclaration: string | null; // Ensure property exists here
        keyframeDeclaration: string | null;
        animationLoop: string | null;
    };
} {
    // Get isComplex and complexDetails (including rawDataDeclaration) from detectComplexLogic
    const { isComplex, details: complexDetails } = detectComplexLogic(code);
    const spec: Record<string, any> = {};
    let data: any = null;
    let needsFetching = false;
    let fetchUrl = null;
    let chartType: string | null = null;
    const encodes: Record<string, any> = {};
    const transforms: any[] = [];
    const scales: Record<string, any> = {};
    const axes: Record<string, any> = {};
    const legends: Record<string, any> = {};
    const styles: Record<string, any> = {};
    const labels: any[] = []; // G2 v5 uses array for labels
    const tooltips: any[] = []; // G2 v5 uses array for tooltips
    let coordinate: any = null;
    const interactions: Record<string, any> = {};
    let plugins: any[] = [];

    // Extract helper functions and raw data declaration first
    const helperFunctions = extractHelperFunctions(code);
    const helperFunctionNames = new Set(helperFunctions.map(f => f.name));
    // rawDataDecl is now part of complexDetails from detectComplexLogic

    // --- Chart Initialization ---
    const chartInitMatch = code.match(/new Chart\(\s*(\{[\s\S]*?\})\s*\)/);
    if (chartInitMatch) {
        const optionsStrRaw = chartInitMatch[1];
        try {
            // Extract width/height directly if possible
            const widthMatch = optionsStrRaw.match(/width:\s*(\d+)/);
            if (widthMatch) spec.width = parseInt(widthMatch[1], 10);
            const heightMatch = optionsStrRaw.match(/height:\s*(\d+)/);
            if (heightMatch) spec.height = parseInt(heightMatch[1], 10);

            // Extract plugins (very basic, assumes simple array of `new Plugin(...)`)
            const pluginsMatch = optionsStrRaw.match(/plugins:\s*(\[.*?\])/);
            if (pluginsMatch) {
                // Try to identify known plugins like A11yPlugin
                if (pluginsMatch[1].includes('new Plugin')) { // Assuming 'Plugin' is the A11yPlugin
                     plugins.push({ type: 'A11yPlugin', optionsComment: `/* TODO: Verify A11yPlugin options from Chart constructor: ${pluginsMatch[1]} */` });
                } else {
                    plugins.push({ comment: `/* TODO: Manually convert plugins from Chart constructor: ${pluginsMatch[1]} */` });
                }
            }
            // Add comment for other options if they exist beyond width/height/plugins
            const otherOptions = optionsStrRaw.replace(/width:\s*\d+,?/, '').replace(/height:\s*\d+,?/, '').replace(/plugins:\s*\[.*?\]/, '').replace(/,\s*,/g, ',').replace(/^\s*,|,\s*$/g, '').trim();
            if (otherOptions && otherOptions !== '{' && otherOptions !== '}') {
                spec.chartOptionsComment = `/* TODO: Review other Chart constructor options: ${otherOptions} */`;
            }

        } catch (e) {
            spec.chartOptionsComment = `/* TODO: Manually convert Chart constructor options (parse failed): ${optionsStrRaw} */`;
        }
    }

    // --- Chart Type (Mark) ---
    const markMatch = code.match(/\.(interval|line|point|cell|area|path|polygon|image|link|vector|rect|text|box|shape|density|heatmap|liquid|wordCloud)\s*\(/);
    if (markMatch) {
        chartType = markMatch[1];
        spec.type = chartType;
    } else {
        const optionsTypeMatch = code.match(/chart\.options\(\s*(\{[\s\S]*?type:\s*['"]([^'"]+)['"][\s\S]*?\})\s*\)/);
        if (optionsTypeMatch) {
            spec.type = optionsTypeMatch[2];
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
    // Use complexDetails.rawDataDeclaration if needed, or parse data calls
    const dataFetchMatch = code.match(/\.data\(\s*\{\s*type:\s*['"]fetch['"],\s*value:\s*['"]([^'"]+)['"]\s*\}\s*\)/);
    const dataInlineMatch = code.match(/\.data\(\s*(\[[\s\S]*?\]|\{[\s\S]*?\})\s*\)/);
    const dataDirectMatch = code.match(/chart\.data\(([^)]+)\)/);

    if (dataFetchMatch) {
        needsFetching = true;
        fetchUrl = dataFetchMatch[1];
        spec.data = { type: 'fetch', value: fetchUrl };
    } else if (dataInlineMatch) {
        const dataStrRaw = dataInlineMatch[1];
        try {
            data = new Function(`return ${dataStrRaw}`)();
            spec.data = data;
        } catch (e) {
            spec.dataComment = `/* TODO: Manually define inline data. Parse failed. Original: ${dataStrRaw} */`;
            data = "/* PARSE_ERROR */";
        }
    } else if (dataDirectMatch) {
         const dataArg = dataDirectMatch[1].trim();
         if (!isNaN(parseFloat(dataArg)) && isFinite(Number(dataArg))) {
             spec.data = parseFloat(dataArg);
             data = spec.data;
         } else if (/^['"].*['"]$/.test(dataArg)) {
             const url = dataArg.slice(1, -1);
             if (url.startsWith('http') || url.endsWith('.json') || url.endsWith('.csv')) {
                 needsFetching = true;
                 fetchUrl = url;
                 spec.data = { type: 'fetch', value: fetchUrl };
             } else {
                 spec.data = url;
                 data = url;
             }
         } else {
             spec.dataComment = `/* TODO: Data assigned from variable: ${dataArg}. Ensure this variable is defined or data is fetched/provided. */`;
             data = `/* ${dataArg} */`;
             if (complexDetails.rawDataDeclaration && new RegExp(`(?:const|let|var)\\s+${dataArg}\\s*=`).test(complexDetails.rawDataDeclaration)) {
                 spec.dataComment += ` Potential source found: ${complexDetails.rawDataDeclaration}`;
                 try {
                     const rawDataMatch = complexDetails.rawDataDeclaration.match(/=\s*(\[[\s\S]*?\]|{[^}]*});?/);
                     if (rawDataMatch) {
                         data = new Function(`return ${rawDataMatch[1]}`)();
                         spec.data = data;
                         delete spec.dataComment;
                     }
                 } catch (e) {
                     spec.dataComment += ` (Parsing raw data failed)`;
                 }
             }
         }
    } else {
        const optionsDataMatch = code.match(/chart\.options\(\s*(\{[\s\S]*?data:\s*([\s\S]*?)[\s\S]*?\})\s*\)/);
        if (optionsDataMatch) {
            const dataStrRaw = optionsDataMatch[2].split(/,(?!\s*[\w]+:)/)[0].trim();
             spec.dataComment = `/* TODO: Data defined within chart.options(). Review and convert: ${dataStrRaw} */`;
             data = `/* options.data: ${dataStrRaw} */`;
        } else {
            spec.dataComment = "/* TODO: Define chart data (inline, fetched, or from variable) */";
        }
    }

    // --- Encodings ---
    const encodeMatches = code.matchAll(/\.encode\(([^)]+)\)/g);
    for (const match of encodeMatches) {
        const argsStr = match[1].trim();
        if (argsStr.startsWith('{')) {
            try {
                // More robust parsing attempt for object syntax
                const objStr = jsToJsonLike(argsStr);
                const parsedEncodes = tryParseJson(objStr, 'encode');
                if (parsedEncodes.comment) {
                    encodes.comment = parsedEncodes.comment; // Propagate parse error
                } else {
                    Object.assign(encodes, parsedEncodes);
                }
            } catch (e) {
                encodes.comment = `/* TODO: Manually convert encode object (complex structure?): ${argsStr} */`;
            }
        } else {
            // Split by the first comma only
            const commaIndex = argsStr.indexOf(',');
            if (commaIndex !== -1) {
                const channel = argsStr.substring(0, commaIndex).trim().replace(/['"]/g, '');
                let value = argsStr.substring(commaIndex + 1).trim();
                if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
                    value = value.slice(1, -1);
                } else if (value.startsWith('[') && value.endsWith(']')) {
                    try {
                        // Handle array values like ['start', 'end']
                        const arrStr = value.replace(/'/g, '"');
                        value = JSON.parse(arrStr);
                    } catch (e) {
                         value = `/* TODO: Convert encode array: ${value} */`;
                    }
                } else {
                    // Handle potential functions or variables
                    value = handleFunctionOrVariable(value, helperFunctionNames);
                }
                encodes[channel] = value;
            } else {
                 // Handle case with only one argument (e.g., .encode('x')) - less common
                 const channel = argsStr.replace(/['"]/g, '');
                 encodes[channel] = undefined; // Or handle as needed
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
             const transformStr = jsToJsonLike(transformStrRaw);
             const parsedTransform = tryParseJson(transformStr, 'transform');
             transforms.push(parsedTransform);
         } catch (e) {
             transforms.push({ type: "/* PARSE_ERROR */", comment: `/* TODO: Manually convert transform options (complex structure?): ${transformStrRaw} */` });
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
             const scaleStr = jsToJsonLike(scaleStrRaw);
             const parsedScale = tryParseJson(scaleStr, `scale.${channel}`);
             // Check for functions within the parsed scale options
             for (const key in parsedScale) {
                 if (typeof parsedScale[key] === 'string') {
                     parsedScale[key] = handleFunctionOrVariable(parsedScale[key], helperFunctionNames);
                 }
             }
             scales[channel] = parsedScale;
         } catch (e) {
             scales[channel] = { comment: `/* TODO: Manually convert scale options (complex structure?): ${scaleStrRaw} */` };
         }
     }
      if (Object.keys(scales).length > 0) {
         spec.scale = scales;
     }

     // --- Axes ---
     const axisMatches = code.matchAll(/\.axis\(([^)]+)\)/g);
     for (const match of axisMatches) {
         const argsStr = match[1].trim();
         if (argsStr === 'false') {
             spec.axis = false;
             break;
         } else if (argsStr.startsWith('{')) {
             try {
                 const objStr = jsToJsonLike(argsStr);
                 const parsedAxes = tryParseJson(objStr, 'axis object');
                 // Check for functions within parsed axes
                 for (const channel in parsedAxes) {
                     if (typeof parsedAxes[channel] === 'object' && parsedAxes[channel] !== null) {
                         for (const key in parsedAxes[channel]) {
                             if (typeof parsedAxes[channel][key] === 'string') {
                                 parsedAxes[channel][key] = handleFunctionOrVariable(parsedAxes[channel][key], helperFunctionNames);
                             }
                         }
                     }
                 }
                 Object.assign(axes, parsedAxes);
             } catch (e) {
                 axes.comment = `/* TODO: Manually convert axis object (complex structure?): ${argsStr} */`;
             }
         } else {
             // Split by the first comma only
             const commaIndex = argsStr.indexOf(',');
             if (commaIndex !== -1) {
                 const channel = argsStr.substring(0, commaIndex).trim().replace(/['"]/g, '');
                 const optionsStrRaw = argsStr.substring(commaIndex + 1).trim();
                 if (optionsStrRaw === 'false') {
                     axes[channel] = false;
                 } else if (optionsStrRaw.startsWith('{')) {
                     try {
                         const axisStr = jsToJsonLike(optionsStrRaw);
                         const parsedAxis = tryParseJson(axisStr, `axis.${channel}`);
                         // Check for functions within parsed axis options
                         for (const key in parsedAxis) {
                             if (typeof parsedAxis[key] === 'string') {
                                 parsedAxis[key] = handleFunctionOrVariable(parsedAxis[key], helperFunctionNames);
                             }
                         }
                         axes[channel] = parsedAxis;
                     } catch (e) {
                         axes[channel] = { comment: `/* TODO: Manually convert axis options (complex structure?): ${optionsStrRaw} */` };
                     }
                 } else {
                      // Handle potential function/variable for the whole axis config
                      axes[channel] = handleFunctionOrVariable(optionsStrRaw, helperFunctionNames);
                 }
             } else {
                 // Handle axis(false) or axis('channel') cases if needed
                 if (argsStr.replace(/['"]/g, '') !== 'false') {
                     axes[argsStr.replace(/['"]/g, '')] = true; // Default to true if only channel specified
                 }
             }
         }
     }
     if (Object.keys(axes).length > 0 || spec.axis === false) {
         if (spec.axis !== false) spec.axis = axes;
     }


     // --- Legends ---
     const legendMatches = code.matchAll(/\.legend\(([^)]+)\)/g);
     for (const match of legendMatches) {
         const argsStr = match[1].trim();
         if (argsStr === 'false') {
             spec.legend = false;
             break;
         } else if (argsStr.startsWith('{')) {
             try {
                 const objStr = jsToJsonLike(argsStr);
                 const parsedLegends = tryParseJson(objStr, 'legend object');
                 // Check for functions
                 for (const channel in parsedLegends) {
                     if (typeof parsedLegends[channel] === 'object' && parsedLegends[channel] !== null) {
                         for (const key in parsedLegends[channel]) {
                             if (typeof parsedLegends[channel][key] === 'string') {
                                 parsedLegends[channel][key] = handleFunctionOrVariable(parsedLegends[channel][key], helperFunctionNames);
                             }
                         }
                     }
                 }
                 Object.assign(legends, parsedLegends);
             } catch (e) {
                 legends.comment = `/* TODO: Manually convert legend object (complex structure?): ${argsStr} */`;
             }
         } else {
             // Split by the first comma only
             const commaIndex = argsStr.indexOf(',');
             if (commaIndex !== -1) {
                 const channel = argsStr.substring(0, commaIndex).trim().replace(/['"]/g, '');
                 const optionsStrRaw = argsStr.substring(commaIndex + 1).trim();
                 if (optionsStrRaw === 'false') {
                     legends[channel] = false;
                 } else if (optionsStrRaw.startsWith('{')) {
                     try {
                         const legendStr = jsToJsonLike(optionsStrRaw);
                         const parsedLegend = tryParseJson(legendStr, `legend.${channel}`);
                         // Check for functions
                         for (const key in parsedLegend) {
                             if (typeof parsedLegend[key] === 'string') {
                                 parsedLegend[key] = handleFunctionOrVariable(parsedLegend[key], helperFunctionNames);
                             }
                         }
                         legends[channel] = parsedLegend;
                     } catch (e) {
                         legends[channel] = { comment: `/* TODO: Manually convert legend options (complex structure?): ${optionsStrRaw} */` };
                     }
                 } else {
                     legends[channel] = handleFunctionOrVariable(optionsStrRaw, helperFunctionNames);
                 }
             } else {
                 // Handle legend(false) or legend('channel') cases if needed
                 if (argsStr.replace(/['"]/g, '') !== 'false') {
                     legends[argsStr.replace(/['"]/g, '')] = true; // Default to true if only channel specified
                 }
             }
         }
     }
     if (Object.keys(legends).length > 0 || spec.legend === false) {
         if (spec.legend !== false) spec.legend = legends;
     }

     // --- Styles --- (Less common, often part of encode/mark)
      const styleMatches = code.matchAll(/\.style\(\s*(\{[\s\S]*?\}|['"]([^'"]+)['"],\s*([^)]+))\s*\)/g);
      for (const match of styleMatches) {
          if (match[1].startsWith('{')) {
              try {
                  const objStr = jsToJsonLike(match[1]);
                  const parsedStyles = tryParseJson(objStr, 'style object');
                  // Check for functions
                  for (const key in parsedStyles) {
                      if (typeof parsedStyles[key] === 'string') {
                          parsedStyles[key] = handleFunctionOrVariable(parsedStyles[key], helperFunctionNames);
                      }
                  }
                  Object.assign(styles, parsedStyles);
              } catch (e) {
                  styles.objectComment = `/* TODO: Manually convert style object (complex structure?): ${match[1]} */`;
              }
          } else {
              const key = match[2];
              let value = match[3].trim();
              if (value.startsWith("'") && value.endsWith("'") || value.startsWith('"') && value.endsWith('"')) {
                  value = value.slice(1, -1);
              } else {
                   value = handleFunctionOrVariable(value, helperFunctionNames);
              }
              styles[key] = value;
          }
      }
      if (Object.keys(styles).length > 0) {
         spec.style = styles;
         spec.styleComment = `/* TODO: Review '.style()' calls. Styles might need to be applied to specific marks or encodes in declarative spec. */`;
      }

      // --- Labels --- (G2 v5 uses labels array)
      const labelMatches = code.matchAll(/\.label\(\s*(\{[\s\S]*?\})\s*\)/g);
      for (const match of labelMatches) {
          const labelStrRaw = match[1];
          try {
              const labelStr = jsToJsonLike(labelStrRaw);
              const parsedLabel = tryParseJson(labelStr, 'label');
              // Check for functions within label options
              for (const key in parsedLabel) {
                  if (typeof parsedLabel[key] === 'string') {
                      parsedLabel[key] = handleFunctionOrVariable(parsedLabel[key], helperFunctionNames);
                  }
              }
              labels.push(parsedLabel);
          } catch (e) {
              labels.push({ comment: `/* TODO: Manually convert label options (complex structure?): ${labelStrRaw} */` });
          }
      }
       if (labels.length > 0) {
          spec.labels = labels; // Use 'labels' (plural) for G2 v5
      }

      // --- Tooltips --- (G2 v5 uses tooltip array/object)
      const tooltipMatches = code.matchAll(/\.tooltip\(([^)]+)\)/g);
      for (const match of tooltipMatches) {
          const argsStr = match[1].trim();
          if (argsStr === 'false') {
              spec.tooltip = false;
              break;
          } else if (argsStr.startsWith('{')) {
              try {
                  const tooltipStr = jsToJsonLike(argsStr);
                  const parsedTooltip = tryParseJson(tooltipStr, 'tooltip');
                  // Check for functions (like valueFormatter)
                  for (const key in parsedTooltip) {
                      if (typeof parsedTooltip[key] === 'string') {
                          parsedTooltip[key] = handleFunctionOrVariable(parsedTooltip[key], helperFunctionNames);
                      }
                  }
                  // If it's an array of items, check functions within items too
                  if (Array.isArray(parsedTooltip.items)) {
                      parsedTooltip.items = parsedTooltip.items.map((item: any) => {
                          if (typeof item === 'object' && item !== null) {
                              for (const itemKey in item) {
                                  if (typeof item[itemKey] === 'string') {
                                      item[itemKey] = handleFunctionOrVariable(item[itemKey], helperFunctionNames);
                                  }
                              }
                          }
                          return item;
                      });
                  }
                  tooltips.push(parsedTooltip);
              } catch (e) {
                  tooltips.push({ comment: `/* TODO: Manually convert tooltip options (complex structure?): ${argsStr} */` });
              }
          }
      }
      if (tooltips.length > 0) {
          // If only one tooltip config, can be object. If multiple, must be array.
          // Use array for consistency, similar to TextSearch.tsx
          spec.tooltip = tooltips;
      } else if (spec.tooltip === undefined && code.includes('.tooltip(')) {
          spec.tooltipComment = `/* TODO: Review .tooltip() calls and convert configuration. */`;
      }


      // --- Coordinate ---
      const coordinateMatch = code.match(/\.coordinate\(\s*(\{[\s\S]*?\})\s*\)/);
      if (coordinateMatch) {
          const coordStrRaw = coordinateMatch[1];
          try {
              const coordStr = jsToJsonLike(coordStrRaw);
              coordinate = tryParseJson(coordStr, 'coordinate');
              spec.coordinate = coordinate;
          } catch (e) {
              spec.coordinate = { comment: `/* TODO: Manually convert coordinate options (complex structure?): ${coordStrRaw} */` };
          }
      }

       // --- Interaction ---
       const interactionMatches = code.matchAll(/\.interaction\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\}|true|false))?\s*\)/g);
       for (const match of interactionMatches) {
           const type = match[1];
           const optionsPart = match[2];
           let options: any = true;

           if (optionsPart) {
               const optionsStrRaw = optionsPart.trim().substring(1).trim();
               if (optionsStrRaw === 'false') {
                   options = false;
               } else if (optionsStrRaw === 'true') {
                   options = true;
               } else if (optionsStrRaw.startsWith('{')) {
                   try {
                       const interactionStr = jsToJsonLike(optionsStrRaw);
                       options = tryParseJson(interactionStr, `interaction.${type}`);
                       // Check for functions within options
                       for (const key in options) {
                           if (typeof options[key] === 'string') {
                               options[key] = handleFunctionOrVariable(options[key], helperFunctionNames);
                           }
                       }
                   } catch (e) {
                       options = { comment: `/* TODO: Manually convert interaction options for '${type}' (complex structure?): ${optionsStrRaw} */` };
                   }
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
                else if (optionsStrRaw.startsWith('{')) {
                    try {
                        const scrollbarStr = jsToJsonLike(optionsStrRaw);
                        options = tryParseJson(scrollbarStr, `scrollbar.${channel}`);
                    } catch (e) {
                        options = { comment: `/* TODO: Manually convert scrollbar options: ${optionsStrRaw} */` };
                    }
                } else options = { comment: `/* TODO: Unknown scrollbar options format: ${optionsStrRaw} */` };
            }
            spec.interaction.scrollbar[channel] = options;
        }

        // --- Plugins --- (Check for .plugin() calls)
        const pluginMatches = code.matchAll(/\.plugin\(\s*['"]([^'"]+)['"](,\s*(\{[\s\S]*?\})?)?\s*\)/g);
        for (const match of pluginMatches) {
            const type = match[1];
            const optionsPart = match[2];
            let optionsComment = `/* TODO: Manually convert plugin options for '${type}' */`;
            let parsedOptions: any = {};
            if (optionsPart) {
                const optionsStrRaw = optionsPart.trim().substring(1).trim();
                if (optionsStrRaw.startsWith('{')) {
                    try {
                        const pluginStr = jsToJsonLike(optionsStrRaw);
                        parsedOptions = tryParseJson(pluginStr, `plugin.${type}`);
                        optionsComment = `/* TODO: Review plugin options for '${type}': ${optionsStrRaw} */`;
                    } catch (e) {
                         optionsComment = `/* TODO: Manually convert plugin options for '${type}' (complex structure?): ${optionsStrRaw} */`;
                    }
                }
            }
            // Try to identify known plugins
            if (type === 'a11y') { // Assuming 'a11y' is the identifier used in .plugin()
                 plugins.push({ type: 'A11yPlugin', options: parsedOptions, comment: optionsComment });
            } else {
                plugins.push({ type: type, options: parsedOptions, comment: optionsComment });
            }
        }
        if (plugins.length > 0) {
            // Merge with plugins found in constructor
            if (spec.plugins) {
                spec.plugins = [...spec.plugins, ...plugins];
            } else {
                spec.plugins = plugins;
            }
        }

    // Assign complexDetails based on parsing results if needed (e.g., find animation code)
    complexDetails.hasAnimation = complexDetails.hasAnimation || !!spec.animate; // Update based on spec
    // TODO: Refine complexDetails extraction based on parsed spec/code

    // Return the structure matching the defined return type
    return { spec, needsFetching, fetchUrl, originalData: data, helperFunctions, isComplex, complexDetails };
}


// Function to generate component content
// ... (keep function signature)
async function generateComponentContent(example: ExampleInfo, wrapperPath: string): Promise<string> {
  let originalCode = '// Original file could not be read.';
  let title = example.id.split('/').pop()?.replace(/-/g, ' ') || 'Example'; // Default title
  let description: string | null = null;
  let potentialImports: string[] = [];
  let parsedResult: ReturnType<typeof parseG2Code> | null = null;

  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
    potentialImports = detectImports(originalCode);
    // Call parseG2Code which now returns the correct structure
    parsedResult = parseG2Code(originalCode);
  } catch (err) {
    console.error(`Could not read or parse original file: ${example.originalFilePath}`, err);
    parsedResult = {
        spec: { error: `Failed to read/parse ${example.originalFilePath}` },
        needsFetching: false, fetchUrl: null, originalData: null, helperFunctions: [], isComplex: false,
        complexDetails: { hasAnimation: false, hasAlgorithm: false, algorithmCode: null, rawDataDeclaration: null, keyframeDeclaration: null, animationLoop: null }
    };
  }

  // Extract title and description from markdown
  const frontmatter = await extractFrontmatterData(example.originalDemoDir);
  if (frontmatter.title) {
      title = frontmatter.title;
  }
  description = frontmatter.description;

  const componentName = example.componentName;
  // Ensure parsedResult is not null before destructuring
  if (!parsedResult) {
      return `// Failed to parse G2 code for ${example.id}\nexport default () => <div>Error parsing component ${example.id}</div>;`;
  }
  // Destructure, complexDetails now includes rawDataDeclaration
  const { spec, needsFetching, fetchUrl, originalData, helperFunctions, isComplex, complexDetails } = parsedResult;

  // If it's complex (animation/algorithm), use the specialized generator
  if (isComplex) {
    return generateAnimationAlgorithmComponent({
      componentName,
      title,
      description,
      originalCode,
      example,
      spec,
      // Pass rawDataDeclaration from complexDetails
      rawDataDeclaration: complexDetails.rawDataDeclaration,
      algorithmCode: complexDetails.algorithmCode ? { name: 'extractedAlgorithm', code: complexDetails.algorithmCode } : null,
      keyframeDeclaration: complexDetails.keyframeDeclaration,
      animationLoop: complexDetails.animationLoop,
      potentialImports,
      wrapperPath, // Pass wrapperPath through
      g2SpecImport: "import { type G2Spec, type G2ViewTree, Chart } from '@antv/g2';",
      helperFunctions,
      // Pass algorithmCode details if available
      algorithmResult: complexDetails.algorithmCode ? { name: 'extractedAlgorithm', code: complexDetails.algorithmCode } : null,
    });
  }

  // --- Standard Component Generation ---

  // Stringify spec, replacing placeholders for functions/helpers
  let specString = JSON.stringify(spec, (key, value) => {
      if (
        (typeof value === 'object' && value !== null && value.comment && Object.keys(value).length === 1) ||
        key.endsWith('Comment') || key === 'comment'
      ) {
        return undefined;
      }
      if (typeof value === 'string' && (value.startsWith('/* TODO:') || value.startsWith('/* PARSE_ERROR */') || value.startsWith('/* options.data:'))) {
          return undefined;
      }
      // Keep function/helper placeholders as strings for replacement step
      if (typeof value === 'string' && (value.startsWith('%%FUNCTION:') || value.startsWith('%%HELPER_FUNCTION:'))) {
          return value;
      }
      return value;
  }, 2);

  // Replace placeholders with actual function code or references
  specString = specString.replace(/"%%FUNCTION:(.*?)%%"/g, (match, funcCode) => {
      // Unescape the function code captured from JSON string
      const unescapedFunc = funcCode.replace(/\\\\"/g, '"').replace(/\\\\'/g, "'").replace(/\\\\n/g, '\\n').replace(/\\\\t/g, '\\t').replace(/\\\\\\\\/g, '\\\\');
      return unescapedFunc || 'undefined /* TODO: Failed to unescape function */';
  });
  specString = specString.replace(/"%%HELPER_FUNCTION:(.*?)%%"/g, (match, helperName) => {
      return helperName || 'undefined /* TODO: Failed to find helper function name */';
  });

  // Format the spec string using Prettier for better readability
  try {
      // Await the format result before calling replace
      const formattedSpec = await format(`const spec: G2Spec = ${specString};`, {
          parser: 'typescript',
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
      });
      // Remove the variable declaration part added for formatting
      specString = formattedSpec.replace(/^const spec: G2Spec = /, '').replace(/;$/, '').trim();
  } catch (formatError) {
      console.warn(`Prettier formatting failed for ${example.id}, using raw stringified spec.`);
      // Fallback to the unformatted string if prettier fails
  }


  // Add G2Spec type import
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
        // Attempt to parse as JSON, fall back to text if needed
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return res.json();
        } else {
            return res.text(); // Handle CSV or other text formats
        }
      })
      .then((data: any) => {
        if (isMounted) {
          // TODO: Add data transformation/parsing here if fetched data is not directly usable (e.g., CSV)
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
  // Ensure spec is defined before spreading
  const finalSpec: G2Spec = spec ? { ...spec, data: chartData } : { type: 'invalid', data: chartData, error: 'Spec generation failed' };
`
    : originalData === "/* PARSE_ERROR */" || (typeof originalData === 'string' && originalData.startsWith('/*'))
    ? `
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable '${String(originalData).match(/\/\*\s*(\w+)\s*\*\//)?.[1] || 'unknown'}' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec ? { ...spec, data: chartData } : { type: 'invalid', data: chartData, error: 'Spec generation failed' };
`
    : `
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
`;

  // Handle potential plugin imports (like A11yPlugin)
  const a11yPluginImport = potentialImports.find(imp => imp.includes('@antv/g-plugin-a11y')) || '';
  const otherImports = potentialImports.filter(imp => !imp.includes('@antv/g-plugin-a11y')).map(imp => `// ${imp}`).join('\n');

  // Use wrapperPath passed as argument
  return `'use client';

import React from 'react';
${g2SpecImport}
import G2Chart from '${wrapperPath}';
${a11yPluginImport ? a11yPluginImport : '// No A11yPlugin detected'}
${otherImports.length > 0 ? '// Other potential external libraries (ensure installed):' : ''}
${otherImports}

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
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = ${specString};

const ${componentName}: React.FC = () => {
  ${dataHandlingCode.split('\n').map(line => `  ${line}`).join('\n')}

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2>
      ${description ? `<p className="text-sm text-muted-foreground mb-4">${description}</p>` : '{/* TODO: Add description if available */}'}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background"> {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {(finalSpec && finalSpec.type !== 'invalid') ? (
            <G2Chart config={finalSpec} />
        ) : (
            <div className="p-4 text-center text-red-600">Chart specification is invalid or missing.</div>
        )}
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
  description: string | null; // Add description
  originalCode: string;
  example: ExampleInfo;
  spec: Record<string, any>;
  rawDataDeclaration: string | null;
  algorithmCode?: { name: string; code: string } | null;
  keyframeDeclaration?: string | null;
  animationLoop?: string | null;
  potentialImports: string[];
  wrapperPath: string;
  g2SpecImport: string;
  helperFunctions: { name: string; code: string }[];
  algorithmResult: { name: string; code: string } | null;
}): any {
  const {
    componentName,
    title,
    description, // Get description
    originalCode,
    example,
    spec,
    rawDataDeclaration,
    algorithmCode,
    keyframeDeclaration,
    animationLoop,
    potentialImports,
    g2SpecImport, // Includes Chart, G2Spec, G2ViewTree
    helperFunctions,
    algorithmResult
  } = params;

  // Initialize initialSpecOptions from the spec parameter
  const initialSpecOptions = { ...spec };
  // Remove properties not suitable for initial Chart constructor (like data, type, encode, etc.)
  delete initialSpecOptions.data;
  delete initialSpecOptions.type;
  delete initialSpecOptions.encode;
  delete initialSpecOptions.transform;
  delete initialSpecOptions.labels;
  delete initialSpecOptions.tooltip;
  delete initialSpecOptions.animate; // Animation handled separately
  // Keep width, height, coordinate, scale, axis, legend, style, interaction, plugins etc.

  // Stringify and format initialSpecOptions similar to standard component
  let initialSpecString = JSON.stringify(initialSpecOptions, (key, value) => {
      // Remove comment properties
      if (
        (typeof value === 'object' && value !== null && value.comment && Object.keys(value).length === 1) ||
        key.endsWith('Comment') || key === 'comment'
      ) {
        return undefined;
      }
      if (typeof value === 'string' && (value.startsWith('/* TODO:') || value.startsWith('/* PARSE_ERROR */') || value.startsWith('/* options.data:'))) {
          return undefined;
      }
      // Keep function/helper placeholders as strings for replacement step
      if (typeof value === 'string' && (value.startsWith('%%FUNCTION:') || value.startsWith('%%HELPER_FUNCTION:'))) {
          return value;
      }
      return value;
  }, 2);

  // Replace placeholders
  initialSpecString = initialSpecString.replace(/"%%FUNCTION:(.*?)%%"/g, (match, funcCode) => {
      // Unescape the function code captured from JSON string
      const unescapedFunc = funcCode.replace(/\\\\"/g, '"').replace(/\\\\'/g, "'").replace(/\\\\n/g, '\\n').replace(/\\\\t/g, '\\t').replace(/\\\\\\\\/g, '\\\\');
      return unescapedFunc || 'undefined /* TODO: Failed to unescape function */';
  });
  initialSpecString = initialSpecString.replace(/"%%HELPER_FUNCTION:(.*?)%%"/g, (match, helperName) => {
      return helperName || 'undefined /* TODO: Failed to find helper function name */';
  });

  // Format the initial spec string (No await needed here as format is not called)
  try {
      // Format the string directly if needed, but it's already stringified
      // initialSpecString = format(...) // If formatting is desired, await here
  } catch (formatError) {
      console.warn(`Prettier formatting failed for initial options of ${componentName}.`);
  }

  // Define helperFunctionsCode
  const helperFunctionsCode = helperFunctions.length > 0
    ? `\n// --- Helper Functions Extracted from Original Example --- \n${helperFunctions.map(f => f.code).join('\n\n')}\n// --- End Helper Functions --- \n`
    : '';

  // Define formattedDataDecl using the passed rawDataDeclaration
  const formattedDataDecl = rawDataDeclaration
    ? `// Raw data declaration found in original code:\n${rawDataDeclaration}\n// TODO: Ensure 'data' variable is correctly defined and typed.`
    : `// No raw data declaration found, assuming data is fetched or defined elsewhere.\nconst data: any[] = []; // Placeholder`;

  // Define algorithmName and formattedAlgorithmCode
  const algorithmName = algorithmResult?.name || '/* TODO: Define Algorithm Name */';
  const formattedAlgorithmCode = algorithmResult?.code
    ? `// Algorithm extracted from original code:\n${algorithmResult.code}`
    : `// TODO: Define the algorithm function (e.g., ${algorithmName}) here\nfunction* ${algorithmName}(arr: any[]): Generator<AlgorithmFrame, AlgorithmFrame | void, unknown> { yield arr; }`;

  // Handle potential plugin imports
  const a11yPluginImport = potentialImports.find(imp => imp.includes('@antv/g-plugin-a11y')) || '';
  const otherImports = potentialImports.filter(imp => !imp.includes('@antv/g-plugin-a11y')).map(imp => `// ${imp}`).join('\n');

  // Component structure using direct Chart manipulation
const componentCode = `'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo, FC, ChangeEvent } from 'react';
// Import G2 Chart object and types
${g2SpecImport} // Assumes this imports Chart, G2Spec, G2ViewTree
${a11yPluginImport ? a11yPluginImport : '// No A11yPlugin detected'}
${otherImports.length > 0 ? '// Other potential external libraries (ensure installed):' : ''}
${otherImports}

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
// TODO: Verify data type and structure. Ensure 'data' is correctly defined and accessible.
${formattedDataDecl}

// TODO: Verify or replace the algorithm implementation below
// Define the expected frame structure for type safety (adjust if algorithm output differs)
interface AlgorithmDatum {
// TODO: Replace 'any' with a more specific type if the data structure is known
value: any;
[key: string]: any; // Allow other properties
}
type AlgorithmFrame = AlgorithmDatum[];
// TODO: Ensure the generator yields AlgorithmFrame and optionally returns AlgorithmFrame | void
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

// WARNING: The following code assumes the algorithm function is available globally or can be evaluated.
// This might not be reliable or secure. Consider defining algorithms within the component or using imports.
${formattedAlgorithmCode} // Algorithm function definition inserted here

// Interface for the initial chart options passed to the constructor
// Based on G2Spec but potentially a subset used for initialization
interface InitialChartOptions {
    width?: number;
    height?: number;
    autoFit?: boolean;
    container?: HTMLElement | string;
    scale?: G2Spec['scale'];
    coordinate?: G2Spec['coordinate'];
    axis?: G2Spec['axis'];
    legend?: G2Spec['legend'];
    style?: G2Spec['style'];
    interaction?: G2Spec['interaction'];
    plugins?: G2Spec['plugins'];
    theme?: G2Spec['theme'];
    // Add other relevant constructor options if needed
    [key: string]: any; // Allow other properties from parsed spec
}

// Interface for the options passed to chart.options() in renderCurrentState
// Based on G2ViewTree
interface RenderOptions extends G2ViewTree {
    data: AlgorithmFrame;
    // Add other properties from G2ViewTree as needed
}

// --- React Component ---
const ${componentName}: FC = () => {
const containerRef = useRef<HTMLDivElement | null>(null);
const chartRef = useRef<Chart | null>(null);
const [isPlaying, setIsPlaying] = useState<boolean>(false);
const [speed, setSpeed] = useState<number>(500); // Default speed
const animationFrameRef = useRef<number | null>(null);
const generatorRef = useRef<Generator<AlgorithmFrame, AlgorithmFrame | void, unknown> | null>(null);
const isMountedRef = useRef<boolean>(false);
const [errorState, setErrorState] = useState<string | null>(null);

// Memoize initial chart options derived from parsed spec
const initialChartOptions: InitialChartOptions = useMemo(() => {
        try {
                const options: InitialChartOptions = JSON.parse(${initialSpecString || "'{}'"});
                // TODO: Review these options. Ensure they are valid G2Spec properties for Chart constructor.
                return options;
        } catch (e: any) {
                console.error("Failed to parse initial chart options:", e);
                setErrorState("Failed to parse initial chart options.");
                return {}; // Return empty object on error
        }
}, []); // Empty dependency array means this runs once

// Function to render chart with current data state
const renderCurrentState = useCallback((frameData: AlgorithmFrame): void => {
    if (!chartRef.current || !isMountedRef.current) return;
    const chart: Chart = chartRef.current;

    try {
            // --- TODO: Adapt the rendering logic below based on the original example ---
            // This is a generic template. You MUST modify the 'options' object
            // to match the specific marks, encodings, scales, axes, etc., required by the visualization.
            const options: RenderOptions = {
                    // type: 'interval', // Example: Set mark type if needed
                    data: frameData,
                    // TODO: Define encodings based on frameData structure (e.g., x: 'category', y: 'value')
                    encode: { x: 'x', y: 'y' /* Replace with actual encoding */ },
                    // TODO: Define scales if needed (e.g., scale: { y: { domain: [0, 100] } })
                    scale: initialChartOptions.scale || {},
                    // TODO: Define axes if needed (e.g., axis: { y: { title: 'Value' } })
                    axis: initialChartOptions.axis || {},
                    // Basic animation configuration - adjust as needed
                    animate: {
                            enter: { type: 'fadeIn', duration: Math.min(300, speed / 2) },
                            update: { type: 'morph', duration: Math.min(300, speed / 2) },
                            exit: { type: 'fadeOut', duration: Math.min(300, speed / 2) },
                    },
                    // Merge other relevant initial options
                    ...(initialChartOptions.coordinate && { coordinate: initialChartOptions.coordinate }),
                    ...(initialChartOptions.legend && { legend: initialChartOptions.legend }),
                    ...(initialChartOptions.style && { style: initialChartOptions.style }),
                    // Add other necessary spec properties here
                    // --- End TODO ---
            };
            chart.options(options);
            chart.render();
    } catch (e: any) {
            console.error("Error during chart render/update:", e);
            setErrorState(`Chart render error: ${e.message || 'Unknown error'}`); // Escaped inner template literal
            setIsPlaying(false); // Stop playback on error
    }
}, [speed, initialChartOptions]); // Dependencies for rendering logic

// Function to safely get the algorithm function
const getAlgorithmFunction = useCallback((): AlgorithmGenerator | null => {
        try {
                // Priority 1: Check if defined globally (on window)
                if (typeof window !== 'undefined' && typeof (window as any)[algorithmName] === 'function') {
                        return (window as any)[algorithmName] as AlgorithmGenerator;
                }

                // Priority 2: Attempt to evaluate the formatted code string (Use with extreme caution!)
                // WARNING: eval is a security risk and can execute arbitrary code.
                // Avoid if possible. Ensure the source code is trusted.
                console.warn(`Algorithm function ${algorithmName} not found globally. Attempting eval(). This is potentially unsafe.`); // Escaped inner template literal
                const func: unknown = eval(`(typeof ${algorithmName} !== 'undefined' ? ${algorithmName} : undefined)`); // Escaped inner template literal
                if (typeof func === 'function') {
                        return func as AlgorithmGenerator;
                }

                throw new Error(`Algorithm named ${algorithmName} is not defined or not a function.`); // Escaped inner template literal
        } catch (e: any) {
                console.error(`Failed to get algorithm function ${algorithmName}:`, e); // Escaped inner template literal
                setErrorState(`Failed to load algorithm: ${e.message || 'Unknown error'}`); // Escaped inner template literal
                return null;
        }
}, [algorithmName]); // Depends only on algorithmName

// Function to safely get the initial data
const getInitialData = useCallback((): any[] | null => {
        try {
                // WARNING: This assumes 'data' is defined in the scope where this component code runs.
                // This might rely on the 'formattedDataDecl' string being executed correctly.
                // Declare 'data' here for type checking, assuming it's globally available or injected
                declare const data: any[];
                if (typeof data === 'undefined') {
                        throw new Error("The 'data' variable is not defined in the current scope. Check rawDataDeclaration or provide data.");
                }
                // Return a deep copy to avoid modifying the original data during algorithm execution
                return JSON.parse(JSON.stringify(data));
        } catch (e: any) {
                console.error("Failed to get initial data:", e);
                setErrorState(`Failed to load initial data: ${e.message || 'Data variable not found'}`); // Escaped inner template literal
                return null;
        }
}, []); // No dependencies, assumes 'data' is stable in the outer scope

// Initialize chart and generator
useEffect(() => {
    isMountedRef.current = true;
    setErrorState(null); // Clear previous errors on mount/re-init
    if (!containerRef.current) {
            console.error("Container ref is not available.");
            setErrorState("Chart container element not found.");
            return;
    }

    const algorithmFunction: AlgorithmGenerator | null = getAlgorithmFunction();
    const initialData: any[] | null = getInitialData();

    if (!algorithmFunction || !initialData) {
            // Error state is already set by helper functions
            // Render an empty chart or placeholder if initialization fails
            if (chartRef.current) chartRef.current.destroy(); // Clean up previous instance if any
            chartRef.current = new Chart({
                    container: containerRef.current,
                    autoFit: true,
                    ...initialChartOptions, // Use memoized options
                    data: [], // Ensure data is empty
            });
            chartRef.current.options({ /* TODO: Define placeholder view if needed */ });
            chartRef.current.render();
            return; // Stop initialization
    }

    try {
            generatorRef.current = algorithmFunction(initialData); // Pass the data copy
    } catch (e: any) {
            console.error(`Error initializing generator for algorithm ${algorithmName}:`, e); // Escaped inner template literal
            setErrorState(`Algorithm initialization error: ${e.message || 'Unknown error'}`); // Escaped inner template literal
            generatorRef.current = null;
    }

    // Create new chart instance
    if (chartRef.current) chartRef.current.destroy(); // Clean up previous instance if any
    chartRef.current = new Chart({
        container: containerRef.current,
        autoFit: true,
        ...initialChartOptions, // Apply memoized base options
    });

    // Render initial state from the generator
    if (generatorRef.current) {
            try {
                    const initialStep: IteratorResult<AlgorithmFrame, AlgorithmFrame | void> = generatorRef.current.next();
                    if (!initialStep.done && initialStep.value) {
                        renderCurrentState(initialStep.value);
                    } else if (initialStep.done && initialStep.value) {
                             // Render final state if generator finishes immediately
                             renderCurrentState(initialStep.value);
                     } else {
                             // Handle case where generator yields nothing initially
                             console.warn("Algorithm generator did not yield an initial state.");
                             // Render empty state or default view
                             if (chartRef.current) {
                                     chartRef.current.options({ data: [], /* TODO: Define empty view */ });
                                     chartRef.current.render();
                             }
                        }
                } catch (e: any) {
                         console.error(`Error rendering initial state for algorithm ${algorithmName}:`, e); // Escaped inner template literal
                         setErrorState(`Error rendering initial state: ${e.message || 'Unknown error'}`); // Escaped inner template literal
                         // Render empty state on error
                         if (chartRef.current) {
                                 chartRef.current.options({ data: [], /* TODO: Define error view */ });
                                 chartRef.current.render();
                         }
             }
     } else {
             // Render empty chart if generator failed to initialize
             if (chartRef.current) {
                     chartRef.current.options({ data: [], /* TODO: Define empty/error view */ });
                     chartRef.current.render();
             }
     }

    // Cleanup function
    return (): void => {
        isMountedRef.current = false;
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (chartRef.current) {
                try {
                        chartRef.current.destroy();
                } catch (destroyError: any) {
                        console.error("Error destroying chart:", destroyError);
                }
        }
        chartRef.current = null;
        generatorRef.current = null; // Clear generator ref
    };
// Dependencies: Re-initialize if algorithm name changes or initial options change.
// getAlgorithmFunction and getInitialData are stable due to useCallback.
}, [algorithmName, initialChartOptions, getAlgorithmFunction, getInitialData, renderCurrentState]);

// Animation loop logic
useEffect(() => {
    let lastTime: number = 0;
    const loop = (currentTime: number): void => {
        // Ensure component is still mounted and playback is active
        if (!isPlaying || !generatorRef.current || !isMountedRef.current) {
            animationFrameRef.current = null; // Clear ref if loop stops
            return;
        }

        // Throttle updates based on speed
        if (currentTime - lastTime >= speed) {
            try {
                    const step: IteratorResult<AlgorithmFrame, AlgorithmFrame | void> = generatorRef.current.next();
                    if (step.done) {
                            setIsPlaying(false); // Stop playback when generator finishes
                            if (step.value) renderCurrentState(step.value); // Render final state if provided
                            generatorRef.current = null; // Clear generator when done
                    } else {
                            if (step.value) {
                                    renderCurrentState(step.value); // Render the yielded frame
                                    lastTime = currentTime; // Update last time only after successful render
                            } else {
                                    console.warn("Generator yielded undefined value.");
                            }
                    }
            } catch (e: any) {
                    console.error("Error during animation step:", e);
                    setErrorState(`Animation error: ${e.message || 'Unknown error'}`); // Escaped inner template literal
                    setIsPlaying(false); // Stop playback on error
            }
        }
        // Request next frame if still playing
        if (isPlaying && isMountedRef.current) {
                animationFrameRef.current = requestAnimationFrame(loop);
        } else {
                animationFrameRef.current = null;
        }
    };

    // Start or stop the animation loop based on isPlaying state
    if (isPlaying && generatorRef.current) {
            // Prevent multiple loops from starting
            if (!animationFrameRef.current) {
                    lastTime = performance.now(); // Reset timer when starting
                    animationFrameRef.current = requestAnimationFrame(loop);
            }
    } else {
        // Cancel animation frame if paused or stopped
        if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
        }
    }

    // Cleanup function for the loop effect
    return (): void => {
        if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
        }
    };
}, [isPlaying, speed, renderCurrentState]); // Loop depends on play state, speed, and render function

// Toggle play/pause state
const togglePlay = (): void => {
    // Prevent starting if there's an error or generator is finished/null
    if (errorState || !generatorRef.current) return;
    setIsPlaying(!isPlaying);
};

// Reset animation to the beginning
const resetAnimation = useCallback((): void => {
    setIsPlaying(false); // Ensure playback is stopped
    setErrorState(null); // Clear any previous errors

    // Cancel any ongoing animation frame
    if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
    }

    const algorithmFunction: AlgorithmGenerator | null = getAlgorithmFunction();
    const initialData: any[] | null = getInitialData();

    if (!algorithmFunction || !initialData) {
            // Error state already set by helpers
            if (chartRef.current) {
                    chartRef.current.options({ data: [], /* TODO: Define error/empty view */ });
                    chartRef.current.render();
            }
            generatorRef.current = null; // Ensure generator is null
            return;
    }

    try {
            // Re-initialize the generator with a fresh copy of data
            generatorRef.current = algorithmFunction(initialData);
            const initialStep: IteratorResult<AlgorithmFrame, AlgorithmFrame | void> = generatorRef.current.next();

            // Render the initial state
            if (!initialStep.done && initialStep.value) {
                    renderCurrentState(initialStep.value);
            } else if (initialStep.done && initialStep.value) {
                    // Handle case where generator finishes immediately on reset
                    renderCurrentState(initialStep.value);
                    generatorRef.current = null; // Generator is already done
            } else {
                     console.warn("Algorithm generator did not yield an initial state on reset.");
                     if (chartRef.current) {
                             chartRef.current.options({ data: [], /* TODO: Define empty view */ });
                             chartRef.current.render();
                     }
            }
    } catch (e: any) {
            console.error("Failed to reset algorithm:", e);
            setErrorState(`Failed to reset: ${e.message || 'Unknown error'}`); // Escaped inner template literal
            generatorRef.current = null; // Ensure generator is null on error
            if (chartRef.current) {
                    chartRef.current.options({ data: [], /* TODO: Define error view */ });
                    chartRef.current.render();
            }
    }
}, [getAlgorithmFunction, getInitialData, renderCurrentState]); // Dependencies for reset logic

// Handle speed slider change
const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(event.target.value));
};

return (
    <div>
        <h2 className="text-xl font-semibold mb-2">${title}</h2> {/* Escaped inner template literal */}
        ${description ? `<p className="text-sm text-muted-foreground mb-4">${description}</p>` : '{/* TODO: Add description if available */}'} {/* Escaped inner template literals */}
        {/* Controls */}
        <div className="flex flex-wrap items-center space-x-2 mb-4">
            <button
                onClick={togglePlay}
                disabled={!!errorState || !generatorRef.current} // Disable if error or generator finished/null
                className="px-3 py-1 border rounded bg-secondary hover:bg-secondary/80 text-secondary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
                onClick={resetAnimation}
                disabled={!getAlgorithmFunction() || !getInitialData()} // Disable if algorithm/data cannot be loaded
                className="px-3 py-1 border rounded bg-secondary hover:bg-secondary/80 text-secondary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Reset
            </button>
            <label htmlFor="speedControl" className="text-sm">Speed: {speed}ms</label>
            <input
                id="speedControl"
                type="range"
                min="50"  // Faster speed limit
                max="2000" // Slower speed limit
                step="50"
                value={speed}
                onChange={handleSpeedChange}
                className="w-32 align-middle" // Use align-middle for better vertical alignment
            />
        </div>
        {/* Error Display */}
        {errorState && (
                <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded shadow-sm">
                        <strong>Error:</strong> {errorState}
                        <p className="text-xs mt-1">Playback disabled. Please check the console for details and review the component's data and algorithm logic.</p>
                </div>
        )}
        {/* Chart Container */}
        <div ref={containerRef} className="h-[600px] w-full overflow-auto border rounded p-2 bg-background relative">
             {/* Chart is rendered here by useEffect */}
             {/* Optional: Add a loading or placeholder state */}
             {!chartRef.current && !errorState && (
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Initializing Chart...</div>
             )}
        </div>
    </div>
);
};

export default ${componentName}; // Escaped inner template literal
`;

return componentCode;
}}`); // Escaped inner template literal
        setIsPlaying(false); // Stop playback on error
    }
  }, [speed, initialChartOptions]); // Dependencies for rendering logic

  // Function to safely get the algorithm function
  const getAlgorithmFunction = useCallback((): AlgorithmGenerator | null => {
      try {
          // Priority 1: Check if defined globally (on window)
          if (typeof window !== 'undefined' && typeof (window as any)[algorithmName] === 'function') {
              return (window as any)[algorithmName] as AlgorithmGenerator;
          }

          // Priority 2: Attempt to evaluate the formatted code string (Use with extreme caution!)
          // WARNING: eval is a security risk and can execute arbitrary code.
          // Avoid if possible. Ensure the source code is trusted.
          console.warn(`Algorithm function \${algorithmName} not found globally. Attempting eval(). This is potentially unsafe.`); // Escaped inner template literal
          const func = eval(`(typeof \${algorithmName} !== 'undefined' ? \${algorithmName} : undefined)`); // Escaped inner template literal
          if (typeof func === 'function') {
              return func as AlgorithmGenerator;
          }

          throw new Error(`Algorithm named \${algorithmName} is not defined or not a function.`); // Escaped inner template literal
      } catch (e: any) {
          console.error(`Failed to get algorithm function \${algorithmName}:`, e); // Escaped inner template literal
          setErrorState(`Failed to load algorithm: \${e.message || 'Unknown error'}`); // Escaped inner template literal
          return null;
      }
  }, [algorithmName]); // Depends only on algorithmName

  // Function to safely get the initial data
  const getInitialData = useCallback((): any[] | null => {
      try {
          // WARNING: This assumes 'data' is defined in the scope where this component code runs.
          // This might rely on the 'formattedDataDecl' string being executed correctly.
          if (typeof data === 'undefined') {
              throw new Error("The 'data' variable is not defined in the current scope. Check rawDataDeclaration or provide data.");
          }
          // Return a deep copy to avoid modifying the original data during algorithm execution
          return JSON.parse(JSON.stringify(data));
      } catch (e: any) {
          console.error("Failed to get initial data:", e);
          setErrorState(`Failed to load initial data: \${e.message || 'Data variable not found'}`); // Escaped inner template literal
          return null;
      }
  }, []); // No dependencies, assumes 'data' is stable in the outer scope

  // Initialize chart and generator
  useEffect(() => {
    isMountedRef.current = true;
    setErrorState(null); // Clear previous errors on mount/re-init
    if (!containerRef.current) {
        console.error("Container ref is not available.");
        setErrorState("Chart container element not found.");
        return;
    }

    const algorithmFunction = getAlgorithmFunction();
    const initialData = getInitialData();

    if (!algorithmFunction || !initialData) {
        // Error state is already set by helper functions
        // Render an empty chart or placeholder if initialization fails
        if (chartRef.current) chartRef.current.destroy(); // Clean up previous instance if any
        chartRef.current = new Chart({
            container: containerRef.current,
            autoFit: true,
            ...initialChartOptions, // Use memoized options
            data: [], // Ensure data is empty
        });
        chartRef.current.options({ /* TODO: Define placeholder view if needed */ });
        chartRef.current.render();
        return; // Stop initialization
    }

    try {
        generatorRef.current = algorithmFunction(initialData); // Pass the data copy
    } catch (e: any) {
        console.error(`Error initializing generator for algorithm \${algorithmName}:`, e); // Escaped inner template literal
        setErrorState(`Algorithm initialization error: \${e.message || 'Unknown error'}`); // Escaped inner template literal
        generatorRef.current = null;
    }

    // Create new chart instance
    if (chartRef.current) chartRef.current.destroy(); // Clean up previous instance if any
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      ...initialChartOptions, // Apply memoized base options
    });

    // Render initial state from the generator
    if (generatorRef.current) {
        try {
            const initialStep = generatorRef.current.next();
            if (!initialStep.done && initialStep.value) {
              renderCurrentState(initialStep.value);
            } else if (initialStep.done && initialStep.value) {
                 // Render final state if generator finishes immediately
                 renderCurrentState(initialStep.value);
             } else {
                 // Handle case where generator yields nothing initially
                 console.warn("Algorithm generator did not yield an initial state.");
                 // Render empty state or default view
                 chartRef.current.options({ data: [], /* TODO: Define empty view */ });
                  chartRef.current.render();
              }
          } catch (e: any) {
               console.error(`Error rendering initial state for algorithm \${algorithmName}:`, e); // Escaped inner template literal
               setErrorState(`Error rendering initial state: \${e.message || 'Unknown error'}`); // Escaped inner template literal
               // Render empty state on error
               chartRef.current.options({ data: [], /* TODO: Define error view */ });
              chartRef.current.render();
         }
     } else {
         // Render empty chart if generator failed to initialize
         if (chartRef.current) {
             chartRef.current.options({ data: [], /* TODO: Define empty/error view */ });
             chartRef.current.render();
         }
     }

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (chartRef.current) {
          try {
              chartRef.current.destroy();
          } catch (destroyError) {
              console.error("Error destroying chart:", destroyError);
          }
      }
      chartRef.current = null;
      generatorRef.current = null; // Clear generator ref
    };
  // Dependencies: Re-initialize if algorithm name changes or initial options change.
  // getAlgorithmFunction and getInitialData are stable due to useCallback.
  }, [algorithmName, initialChartOptions, getAlgorithmFunction, getInitialData, renderCurrentState]);

  // Animation loop logic
  useEffect(() => {
    let lastTime = 0;
    const loop = (currentTime: number) => {
      // Ensure component is still mounted and playback is active
      if (!isPlaying || !generatorRef.current || !isMountedRef.current) {
        animationFrameRef.current = null; // Clear ref if loop stops
        return;
      }

      // Throttle updates based on speed
      if (currentTime - lastTime >= speed) {
        try {
            const step = generatorRef.current.next();
            if (step.done) {
                setIsPlaying(false); // Stop playback when generator finishes
                if (step.value) renderCurrentState(step.value); // Render final state if provided
                generatorRef.current = null; // Clear generator when done
            } else {
                if (step.value) {
                    renderCurrentState(step.value); // Render the yielded frame
                    lastTime = currentTime; // Update last time only after successful render
                } else {
                    console.warn("Generator yielded undefined value.");
                }
            }
        } catch (e: any) {
            console.error("Error during animation step:", e);
            setErrorState(`Animation error: \${e.message || 'Unknown error'}`); // Escaped inner template literal
            setIsPlaying(false); // Stop playback on error
        }
      }
      // Request next frame if still playing
      if (isPlaying && isMountedRef.current) {
          animationFrameRef.current = requestAnimationFrame(loop);
      } else {
          animationFrameRef.current = null;
      }
    };

    // Start or stop the animation loop based on isPlaying state
    if (isPlaying && generatorRef.current) {
        // Prevent multiple loops from starting
        if (!animationFrameRef.current) {
            lastTime = performance.now(); // Reset timer when starting
            animationFrameRef.current = requestAnimationFrame(loop);
        }
    } else {
      // Cancel animation frame if paused or stopped
      if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
      }
    }

    // Cleanup function for the loop effect
    return () => {
      if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
      }
    };
  }, [isPlaying, speed, renderCurrentState]); // Loop depends on play state, speed, and render function

  // Toggle play/pause state
  const togglePlay = () => {
    // Prevent starting if there's an error or generator is finished/null
    if (errorState || !generatorRef.current) return;
    setIsPlaying(!isPlaying);
  };

  // Reset animation to the beginning
  const resetAnimation = useCallback(() => {
    setIsPlaying(false); // Ensure playback is stopped
    setErrorState(null); // Clear any previous errors

    // Cancel any ongoing animation frame
    if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
    }

    const algorithmFunction = getAlgorithmFunction();
    const initialData = getInitialData();

    if (!algorithmFunction || !initialData) {
        // Error state already set by helpers
        if (chartRef.current) {
            chartRef.current.options({ data: [], /* TODO: Define error/empty view */ });
            chartRef.current.render();
        }
        generatorRef.current = null; // Ensure generator is null
        return;
    }

    try {
        // Re-initialize the generator with a fresh copy of data
        generatorRef.current = algorithmFunction(initialData);
        const initialStep = generatorRef.current.next();

        // Render the initial state
        if (!initialStep.done && initialStep.value) {
            renderCurrentState(initialStep.value);
        } else if (initialStep.done && initialStep.value) {
            // Handle case where generator finishes immediately on reset
            renderCurrentState(initialStep.value);
            generatorRef.current = null; // Generator is already done
        } else {
             console.warn("Algorithm generator did not yield an initial state on reset.");
             if (chartRef.current) {
                 chartRef.current.options({ data: [], /* TODO: Define empty view */ });
                 chartRef.current.render();
             }
        }
    } catch (e: any) {
        console.error("Failed to reset algorithm:", e);
        setErrorState(`Failed to reset: \${e.message || 'Unknown error'}`); // Escaped inner template literal
        generatorRef.current = null; // Ensure generator is null on error
        if (chartRef.current) {
            chartRef.current.options({ data: [], /* TODO: Define error view */ });
            chartRef.current.render();
        }
    }
  }, [getAlgorithmFunction, getInitialData, renderCurrentState]); // Dependencies for reset logic

  // Handle speed slider change
  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">${title}</h2> {/* Escaped inner template literal */}
      ${description ? `<p className="text-sm text-muted-foreground mb-4">${description}</p>` : '{/* TODO: Add description if available */}'} {/* Escaped inner template literals */}
      {/* Controls */}
      <div className="flex flex-wrap items-center space-x-2 mb-4">
        <button
          onClick={togglePlay}
          disabled={!!errorState || !generatorRef.current} // Disable if error or generator finished/null
          className="px-3 py-1 border rounded bg-secondary hover:bg-secondary/80 text-secondary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={resetAnimation}
          disabled={!getAlgorithmFunction() || !getInitialData()} // Disable if algorithm/data cannot be loaded
          className="px-3 py-1 border rounded bg-secondary hover:bg-secondary/80 text-secondary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
        <label htmlFor="speedControl" className="text-sm">Speed: {speed}ms</label>
        <input
          id="speedControl"
          type="range"
          min="50"  // Faster speed limit
          max="2000" // Slower speed limit
          step="50"
          value={speed}
          onChange={handleSpeedChange}
          className="w-32 align-middle" // Use align-middle for better vertical alignment
        />
      </div>
      {/* Error Display */}
      {errorState && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded shadow-sm">
              <strong>Error:</strong> {errorState}
              <p className="text-xs mt-1">Playback disabled. Please check the console for details and review the component's data and algorithm logic.</p>
          </div>
      )}
      {/* Chart Container */}
      <div ref={containerRef} className="h-[600px] w-full overflow-auto border rounded p-2 bg-background relative">
         {/* Chart is rendered here by useEffect */}
         {/* Optional: Add a loading or placeholder state */}
         {!chartRef.current && !errorState && (
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Initializing Chart...</div>
         )}
      </div>
    </div>
  );
};

export default ${componentName}; // Escaped inner template literal
`;

  return componentCode;
}

// Helper function to walk directory recursively
async function* walk(dir: string): AsyncGenerator<string> {
    for await (const d of await fs.opendir(dir)) {
        const entryPath = path.join(dir, d.name);
        if (d.isDirectory()) {
            yield* walk(entryPath);
        } else if (d.isFile()) {
            yield entryPath;
        }
    }
}

async function main() {
  const allExamples: ExampleInfo[] = [];
  const g2SiteExamplesDir = path.resolve(__dirname, '../../../G2/site/examples');
  const targetExamplesDir = path.resolve(__dirname, '../src/app/shadcn-themes/visualization/g2-examples');
  const wrapperPath = '../../../g2-wrapper'; // Relative path from generated component to wrapper

  console.log(`Scanning ${g2SiteExamplesDir}...`);

  // Use the walk generator function
  for await (const originalFilePath of walk(g2SiteExamplesDir)) {
      if (path.basename(originalFilePath) === 'demo.ts') {
          const relativePath = path.relative(g2SiteExamplesDir, originalFilePath);
          // Fix regex for replacing backslashes and the demo.ts suffix
          const id = relativePath.replace(/\\/g, '/').replace(/\/demo\.ts$/, '');
          const originalDemoDir = path.dirname(originalFilePath);

          // Skip if id is empty or invalid
          if (!id) continue;

          // Construct target path
          const targetFileName = `${toPascalCase(id)}.tsx`;
          const targetFilePath = path.join(targetExamplesDir, id, targetFileName);

          // Create safe component name
          const safeComponentName = toPascalCase(id);

          // Check if component name is valid
          if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(safeComponentName)) {
              console.warn(`Skipping invalid component name generated for ID '${id}': ${safeComponentName}`);
              continue;
          }

          allExamples.push({
              id,
              componentName: safeComponentName,
              filePath: targetFilePath,
              originalFilePath,
              originalDemoDir,
          });
      }
  }

  console.log(`Found ${allExamples.length} examples. Generating components in ${targetExamplesDir}...`);

  // Ensure target base directory exists
  await fs.mkdir(targetExamplesDir, { recursive: true });

  // Generate component files
  let generatedCount = 0;
  let errorCount = 0;
  const generatedList: { name: string; path: string; description: string | null }[] = [];

  for (const example of allExamples) {
    try {
      const componentDir = path.dirname(example.filePath);
      await fs.mkdir(componentDir, { recursive: true });
      // Pass wrapperPath to generateComponentContent
      const content = await generateComponentContent(example, wrapperPath);
      // Format the generated content using Prettier
      const formattedContent = await format(content, {
          parser: 'typescript',
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          jsxSingleQuote: false,
      });
      await fs.writeFile(example.filePath, formattedContent);
      generatedCount++;

      // Add to list for JSON output, including description
      const relativePath = path.relative(targetExamplesDir, example.filePath).replace(/\\/g, '/');
      const { title, description } = await extractFrontmatterData(example.originalDemoDir);
      const displayName = title || example.id.split('/').pop()?.replace(/-/g, ' ') || example.id;
      generatedList.push({ name: displayName, path: relativePath, description });

    } catch (err) {
      console.error(`Failed to generate or format component for ${example.id}:`, err);
      // Write error placeholder if generation/formatting failed
      try {
          const errorContent = `// Failed to generate component for ${example.id}\n// Error: ${err instanceof Error ? err.message : String(err)}\nexport default () => <div>Error generating component ${example.id}</div>;`;
          await fs.writeFile(example.filePath, errorContent);
      } catch (writeErr) {
          console.error(`Failed to write error placeholder for ${example.id}:`, writeErr);
      }
      errorCount++;
    }
  }
   console.log(`Generated and formatted ${generatedCount} component files.`);
   if (errorCount > 0) {
       console.warn(`${errorCount} components failed to generate/format or encountered errors.`);
   }

  // Sort the generated list alphabetically by name

  generatedList.sort((a, b) => a.name.localeCompare(b.name));

  // Generate g2-generated-example-list.json
  const listFilePath = path.resolve(__dirname, '../src/app/shadcn-themes/visualization/g2-generated-example-list.json');
  try {
      await fs.writeFile(listFilePath, JSON.stringify(generatedList, null, 2));
      console.log(`Generated example list: ${path.basename(listFilePath)}`);
  } catch (err) {
      console.error(`Failed to generate ${path.basename(listFilePath)}:`, err);
  }


  // Remove index.ts generation as dynamic imports are preferred
  // const indexFilePath = path.join(targetExamplesDir, 'index.ts');
  // try {
  //   await fs.unlink(indexFilePath); // Remove if exists
  //   console.log(`Removed index.ts (using dynamic imports)`);
  // } catch (err: any) {
  //   if (err.code !== 'ENOENT') { // Ignore if file doesn't exist
  //       console.warn(`Could not remove index.ts:`, err);
  //   }
  // }

  console.log('\nScript finished.');
  console.log(`\nNext Steps:`);
  console.log(`1. Review the generated components in '${targetExamplesDir}'.`);
  console.log(`   - Focus on files with 'TODO:' comments.`);
  console.log(`   - Manually convert/verify functions/expressions in specs (labels, tooltips, scales, etc.), especially those marked with '/* FUNCTION:...' or referencing helper functions.`);
  console.log(`   - Verify data handling (fetching, inline data, variables, CSV parsing if needed).`);
  console.log(`   - For animation/algorithm examples, carefully review the React component logic, data structures, algorithm implementation, and rendering within 'renderCurrentState'.`);
  console.log(`2. Install any detected external dependencies (like d3, lodash, @antv/g2-extension-ava, @antv/g-plugin-a11y) in the 'integration/themex' project if not already present:`);
  console.log(`   cd integration/themex && npm install d3 lodash @antv/g2-extension-ava @antv/g-plugin-a11y @types/d3 @types/lodash`);
  console.log(`3. Ensure you have a G2Chart wrapper component ('${path.basename(wrapperPath)}.tsx') at '${wrapperPath}' relative to generated files for standard examples.`);
  console.log(`4. Update your visualization page ('visualization/page.tsx') to use dynamic imports based on the generated '${path.basename(listFilePath)}'.`);
  console.log(`5. Test the generated components thoroughly.`);

}

main().catch(console.error);