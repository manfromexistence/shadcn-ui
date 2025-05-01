import { ParseResult } from './types';
import { detectComplexLogic, extractHelperFunctions } from './code-analysis';
import { jsToJsonLike, tryParseJson, handleFunctionOrVariable } from './utils';

// Basic parser for G2 imperative code (using Regex - limited capability)
export function parseG2Code(code: string): ParseResult {
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
