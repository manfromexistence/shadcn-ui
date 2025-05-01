// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/lottie/demo/lottie.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { loadAnimation } from '@antv/g-lottie-player';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { genre: 'Sports', sold: 275 },
  //     { genre: 'Strategy', sold: 115 },
  //     { genre: 'Action', sold: 120 },
  //     { genre: 'Shooter', sold: 350 },
  //     { genre: 'Other', sold: 150 },
  //   ])
  //   .encode('x', 'genre')
  //   .encode('y', 'sold')
  //   .encode('color', 'genre')
  //   .animate('enter', { type: 'fadeIn', duration: 1000 })
  //   .animate('exit', { type: 'fadeOut', duration: 2000 });
  // 
  // chart.render();
  // 
  // (async () => {
  //   const { canvas } = chart.getContext();
  //   await canvas.ready;
  // 
  //   const lottieJSON = await fetch(
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*C9f6TaadHikAAAAAAAAAAAAADmJ7AQ',
  //   ).then((res) => res.json());
  //   const animation = loadAnimation(lottieJSON, { loop: true, autoplay: true });
  //   const wrapper = animation.render(canvas);
  //   wrapper.scale(0.5);
  //   wrapper.translate(160, 100);
  // })();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.
// Review the generated code carefully, especially the algorithm and data types.

// --- Data and Algorithm Definitions ---
// TODO: Verify data type and structure
const data: number[] = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6]; // Default data, adjust type if needed

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
} // Algorithm function definition inserted here

// --- React Component ---
const AnimationLottieLottieChart: React.FC = () => {
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
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      generatorRef.current = null; // Clear generator ref
    };
  }, [algorithmName, renderCurrentState]); // Dependencies: algorithmName, renderCurrentState

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
   }, [algorithmName, renderCurrentState]); // Dependencies for reset. Add data if it can change.

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
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
};

export default AnimationLottieLottieChart;
