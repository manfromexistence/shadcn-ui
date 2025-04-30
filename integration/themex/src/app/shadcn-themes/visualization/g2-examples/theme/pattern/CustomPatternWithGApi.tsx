// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/theme/pattern/demo/custom-pattern-with-g-api.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://g2plot.antv.antgroup.com/examples/plugin/pattern/#heatmap-cookie-pattern
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 550,
  //   height: 500,
  //   paddingBottom: 80,
  // });
  // 
  // // create pattern with G API
  // const createPattern = (
  //   document,
  //   color,
  //   stroke,
  //   cross = false,
  //   density = false,
  // ) => {
  //   const spacing = density ? 3 : 5;
  //   const width = Math.abs(spacing / Math.sin(Math.PI / 4));
  //   const height = spacing / Math.sin(Math.PI / 4);
  // 
  //   const background = document.createElement('rect', {
  //     style: {
  //       width,
  //       height,
  //       fill: color,
  //     },
  //   });
  // 
  //   const line = document.createElement('path', {
  //     style: {
  //       d: `
  //          M 0 ${-height} L ${width * 2} ${height}
  //          M ${-width} ${-height} L ${width} ${height}
  //          M ${-width} 0 L ${width} ${height * 2}`,
  //       stroke,
  //       lineWidth: 1,
  //       strokeOpacity: 0.9,
  //     },
  //   });
  //   background.appendChild(line);
  // 
  //   if (cross) {
  //     const crossLine = document.createElement('path', {
  //       style: {
  //         d: `
  //            M ${-width} ${height} L ${width} ${-height}
  //            M ${-width} ${height * 2} L ${width * 2} ${-height}
  //            M 0 ${height * 2} L ${width * 2} 0`,
  //         stroke,
  //         lineWidth: 1,
  //         strokeOpacity: 0.9,
  //       },
  //     });
  //     background.appendChild(crossLine);
  //   }
  // 
  //   return background;
  // };
  // // create patterns before chart gets rendered
  // let pattern1;
  // let pattern2;
  // let pattern3;
  // chart.on('beforerender', () => {
  //   const { document } = chart.getContext().canvas;
  //   pattern1 = createPattern(document, '#edaa53', '#44120c', true, true);
  //   pattern2 = createPattern(document, '#edaa53', '#44120c', true);
  //   pattern3 = createPattern(document, '#edaa53', '#fff');
  // });
  // 
  // chart
  //   .cell()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json',
  //   })
  //   .encode('x', 'name')
  //   .encode('y', 'country')
  //   .encode('color', '#edaa53')
  //   .style('radius', '50%')
  //   .style('inset', 1)
  //   .style('shadowBlur', 10)
  //   .style('shadowColor', 'rgba(0,0,0,0.3)')
  //   .style('fill', ({ value }) => {
  //     return {
  //       image:
  //         60 <= value && value < 90
  //           ? pattern1
  //           : value >= 50
  //           ? pattern2
  //           : pattern3,
  //       repetition: 'repeat',
  //     };
  //   })
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const ThemePatternCustomPatternWithGApiChart: React.FC = () => {
  // Add types for refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  // Add types for state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions with types
  const data: number[] = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];

  
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
}

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
      ...({
  "width": 550,
  "height": 500,
  "paddingBottom": 80,
  "type": "getContext",
  "dataComment": "/* TODO: Define chart data (inline or fetched) */",
  "encode": {
    "x": "name",
    "y": "country",
    "color": "#edaa53"
  },
  "style": {
    "radius": "50%",
    "inset": "/* TODO: Convert style value/expression: 1 */",
    "shadowBlur": "/* TODO: Convert style value/expression: 10 */",
    "shadowColor": "/* TODO: Convert style value/expression: 'rgba(0,0,0,0.3 */",
    "fill": "/* TODO: Convert style value/expression: ({ value } */"
  }
} as Partial<G2Spec>),
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
          if (animationRef.current) { // Clear timeout if it exists
             clearTimeout(animationRef.current);
             animationRef.current = null;
          }
          // Ensure isPlaying is false if animation stopped naturally or was paused
          setIsPlaying(false);
          return;
        }

        renderCurrentState(step.value);
        step = generator.next();

        // Schedule next frame only if still playing
        if (isPlaying) { // Double check isPlaying before setting timeout
           animationRef.current = setTimeout(animate, speed);
        }
      };

      animate(); // Start the animation loop
    }
  };

  const resetAnimation = () => {
    // ... (reset logic remains the same)
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
    // Reset to initial state using the original data, including index
    renderCurrentState(data.map((value, index) => ({ value, swap: false, index })));
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">custom pattern with g api</h2>
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
}; // <-- Ensure this closing brace and semicolon are always present

export default ThemePatternCustomPatternWithGApiChart;
