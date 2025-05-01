import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';
import { type G2Spec, Chart } from '@antv/g2'; // Import G2 types/objects needed
import {
    ExampleInfo,
    ParseResult,
    HelperFunction,
    AnimationAlgorithmComponentParams,
    AlgorithmFrame,
    AlgorithmGenerator,
    InitialChartOptions,
    RenderOptions
} from './types';
import { extractFrontmatterData } from './utils';
import { detectImports } from './code-analysis';
import { parseG2Code } from './g2-parser';

// Function to generate component content
export async function generateComponentContent(example: ExampleInfo, wrapperPath: string): Promise<string> {
  let originalCode = '// Original file could not be read.';
  let title = example.id.split('/').pop()?.replace(/-/g, ' ') || 'Example'; // Default title
  let description: string | null = null;
  let potentialImports: string[] = [];
  let parsedResult: ParseResult | null = null;

  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
    potentialImports = detectImports(originalCode);
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
      rawDataDeclaration: complexDetails.rawDataDeclaration,
      algorithmCode: complexDetails.algorithmCode ? { name: 'extractedAlgorithm', code: complexDetails.algorithmCode } : null,
      keyframeDeclaration: complexDetails.keyframeDeclaration,
      animationLoop: complexDetails.animationLoop,
      potentialImports,
      wrapperPath, // Pass wrapperPath through
      g2SpecImport: "import { type G2Spec, type G2ViewTree, Chart } from '@antv/g2';",
      helperFunctions,
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
export function generateAnimationAlgorithmComponent(params: AnimationAlgorithmComponentParams): string {
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
// Import shared types
import { AlgorithmFrame, AlgorithmGenerator, InitialChartOptions, RenderOptions } from '../types'; // Adjust path as needed

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
// WARNING: The following code assumes the algorithm function is available globally or can be evaluated.
// This might not be reliable or secure. Consider defining algorithms within the component or using imports.
${formattedAlgorithmCode} // Algorithm function definition inserted here

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
            setErrorState(\`Chart render error: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
                console.warn(\`Algorithm function \${algorithmName} not found globally. Attempting eval(). This is potentially unsafe.\`); // Escaped inner template literal
                const func: unknown = eval(\`(typeof \${algorithmName} !== 'undefined' ? \${algorithmName} : undefined)\`); // Escaped inner template literal
                if (typeof func === 'function') {
                        return func as AlgorithmGenerator;
                }

                throw new Error(\`Algorithm named \${algorithmName} is not defined or not a function.\`); // Escaped inner template literal
        } catch (e: any) {
                console.error(\`Failed to get algorithm function \${algorithmName}:\`, e); // Escaped inner template literal
                setErrorState(\`Failed to load algorithm: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
                setErrorState(\`Failed to load initial data: \${e.message || 'Data variable not found'}\`); // Escaped inner template literal
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
            console.error(\`Error initializing generator for algorithm \${algorithmName}:\`, e); // Escaped inner template literal
            setErrorState(\`Algorithm initialization error: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
                         console.error(\`Error rendering initial state for algorithm \${algorithmName}:\`, e); // Escaped inner template literal
                         setErrorState(\`Error rendering initial state: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
                    setErrorState(\`Animation error: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
            setErrorState(\`Failed to reset: \${e.message || 'Unknown error'}\`); // Escaped inner template literal
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
        <h2 className="text-xl font-semibold mb-2">\${title}</h2> {/* Escaped inner template literal */}
        \${description ? \`<p className="text-sm text-muted-foreground mb-4">\${description}</p>\` : '{/* TODO: Add description if available */}'} {/* Escaped inner template literals */}
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

export default \${componentName}; // Escaped inner template literal
`;

return componentCode;
}

