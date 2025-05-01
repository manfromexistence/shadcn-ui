// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
// Import G2 Chart object and potentially other types/functions if needed
import { Chart, type G2Spec, type G2ViewTree } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/text/demo/wordCloud-english.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: // https://www.jasondavies.com/wordcloud/
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const Word = {
  //   '32': 2,
  //   word: 10,
  //   cloud: 1,
  //   generator: 1,
  //   works: 1,
  //   layout: 4,
  //   algorithm: 4,
  //   positioning: 1,
  //   words: 8,
  //   without: 3,
  //   overlap: 1,
  //   available: 1,
  //   github: 1,
  //   open: 1,
  //   source: 1,
  //   license: 1,
  //   d3cloud: 1,
  //   note: 1,
  //   code: 1,
  //   converting: 1,
  //   text: 1,
  //   rendering: 1,
  //   final: 1,
  //   output: 1,
  //   requires: 1,
  //   additional: 1,
  //   development: 1,
  //   placement: 2,
  //   quite: 1,
  //   slow: 1,
  //   hundred: 1,
  //   run: 1,
  //   asynchronously: 1,
  //   configurable: 1,
  //   time: 2,
  //   step: 3,
  //   size: 1,
  //   makes: 1,
  //   possible: 2,
  //   animate: 1,
  //   placed: 5,
  //   stuttering: 1,
  //   recommended: 1,
  //   always: 1,
  //   use: 1,
  //   even: 2,
  //   animations: 1,
  //   prevents: 1,
  //   browsers: 1,
  //   event: 1,
  //   loop: 1,
  //   blocking: 1,
  //   placing: 1,
  //   incredibly: 1,
  //   simple: 2,
  //   starting: 2,
  //   important: 1,
  //   attempt: 1,
  //   place: 1,
  //   point: 1,
  //   usually: 1,
  //   near: 1,
  //   middle: 1,
  //   somewhere: 1,
  //   central: 1,
  //   horizontal: 1,
  //   line: 1,
  //   intersects: 1,
  //   previously: 2,
  //   move: 2,
  //   one: 1,
  //   along: 1,
  //   increasing: 1,
  //   spiral: 1,
  //   repeat: 1,
  //   intersections: 1,
  //   found: 1,
  //   hard: 1,
  //   part: 1,
  //   making: 1,
  //   perform: 2,
  //   efficiently: 1,
  //   according: 1,
  //   jonathan: 1,
  //   feinberg: 1,
  //   wordle: 1,
  //   uses: 1,
  //   combination: 1,
  //   hierarchical: 2,
  //   bounding: 3,
  //   boxes: 1,
  //   quadtrees: 1,
  //   achieve: 1,
  //   reasonable: 1,
  //   speeds: 1,
  //   glyphs: 1,
  //   javascript: 1,
  //   isnt: 1,
  //   way: 1,
  //   retrieve: 3,
  //   precise: 1,
  //   glyph: 1,
  //   shapes: 1,
  //   via: 1,
  //   dom: 1,
  //   except: 1,
  //   perhaps: 1,
  //   svg: 1,
  //   fonts: 1,
  //   instead: 1,
  //   draw: 2,
  //   hidden: 1,
  //   canvas: 1,
  //   element: 1,
  //   pixel: 2,
  //   data: 2,
  //   retrieving: 1,
  //   separately: 2,
  //   expensive: 2,
  //   many: 1,
  //   pixels: 2,
  //   batch: 1,
  //   operation: 3,
  //   sprites: 1,
  //   masks: 2,
  //   initial: 1,
  //   implementation: 2,
  //   performed: 1,
  //   collision: 3,
  //   detection: 2,
  //   using: 1,
  //   sprite: 7,
  //   doesnt: 1,
  //   copy: 1,
  //   appropriate: 1,
  //   position: 1,
  //   larger: 2,
  //   representing: 1,
  //   whole: 2,
  //   area: 4,
  //   advantage: 1,
  //   involves: 1,
  //   comparing: 2,
  //   candidate: 3,
  //   relevant: 1,
  //   rather: 1,
  //   previous: 1,
  //   somewhat: 1,
  //   surprisingly: 1,
  //   lowlevel: 1,
  //   hack: 1,
  //   made: 1,
  //   tremendous: 1,
  //   difference: 1,
  //   constructing: 1,
  //   compressed: 1,
  //   blocks: 1,
  //   '1bit': 1,
  //   '32bit': 1,
  //   integers: 1,
  //   thus: 1,
  //   reducing: 1,
  //   number: 1,
  //   checks: 1,
  //   memory: 1,
  //   times: 1,
  //   fact: 1,
  //   turned: 1,
  //   beat: 1,
  //   box: 2,
  //   quadtree: 1,
  //   everything: 1,
  //   tried: 1,
  //   large: 2,
  //   areas: 1,
  //   font: 1,
  //   sizes: 1,
  //   think: 2,
  //   primarily: 1,
  //   version: 2,
  //   needs: 1,
  //   single: 2,
  //   test: 1,
  //   per: 1,
  //   whereas: 1,
  //   compare: 1,
  //   every: 1,
  //   overlaps: 1,
  //   slightly: 1,
  //   another: 1,
  //   possibility: 1,
  //   merge: 1,
  //   tree: 2,
  //   fairly: 1,
  //   though: 1,
  //   compared: 1,
  //   analagous: 1,
  //   mask: 1,
  //   essentially: 1,
  //   oring: 1,
  //   block: 1,
  // };
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .wordCloud()
  //   .data(Object.entries(Word).map(([text, value]) => ({ text, value })))
  //   .layout({
  //     fontSize: [20, 100],
  //   })
  //   .encode('color', 'text')
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms requiring direct chart manipulation.
// Review the generated code carefully, especially data, algorithm, and rendering logic.



// --- Data and Algorithm Definitions ---
// TODO: Verify data type and structure
const data: any[] = [/* TODO: Define initial data array/object */];

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


// TODO: Define your algorithm generator function here.
// Example structure:
/*
interface AlgorithmDatum { value: number; swap?: boolean; index?: number; [key: string]: any; }
type AlgorithmFrame = AlgorithmDatum[];
type AlgorithmGenerator = (arr: any[]) => Generator<AlgorithmFrame, AlgorithmFrame | void, unknown>;

function* yourAlgorithm(arr: any[]): Generator<AlgorithmFrame> {
  // Algorithm logic yielding frames...
  const initialState = arr.map((value, index) => ({ value, index }));
  yield initialState;
  // ... more steps ...
  const finalState = [...initialState]; // Modify as needed
  yield finalState;
  return finalState;
}
*/ // Algorithm function definition inserted here

// --- React Component ---
const GeneralTextWordCloudEnglishChart: React.FC = () => {
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
        setErrorState(`Chart render error: ${e.message}`);
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
          console.warn(`Algorithm '${algorithmName}' not found globally, attempting dynamic creation. Consider defining it directly in the component.`);
          algorithmFunction = new Function(`return (${formattedAlgorithmCode})`)() as AlgorithmGenerator;
      }


      if (typeof algorithmFunction !== 'function') {
        throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function.`);
      }
      // Create generator instance, cloning data
      const dataCopy = JSON.parse(JSON.stringify(data)); // Simple deep clone for arrays/objects
      generatorRef.current = algorithmFunction(dataCopy);

    } catch (e: any) {
      console.error(`Failed to initialize algorithm '${algorithmName}':`, e);
      setErrorState(`Failed to load algorithm: ${e.message || 'Unknown error'}`);
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
              console.error(`Error rendering initial state for algorithm '${algorithmName}':`, e);
              setErrorState(`Error rendering initial state: ${e.message || 'Unknown error'}`);
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
             setErrorState(`Animation error: ${e.message}`);
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
          algorithmFunction = new Function(`return (${formattedAlgorithmCode})`)() as AlgorithmGenerator;
      }

      if (typeof algorithmFunction !== 'function') {
          throw new Error(`Algorithm named '${algorithmName}' is not defined or not a function (on reset).`);
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
         console.error(`Failed to reset algorithm '${algorithmName}':`, e);
         setErrorState(`Failed to reset algorithm: ${e.message || 'Unknown error'}`);
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
      <h2 className="text-xl font-semibold mb-2">T</h2>
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

export default GeneralTextWordCloudEnglishChart;
