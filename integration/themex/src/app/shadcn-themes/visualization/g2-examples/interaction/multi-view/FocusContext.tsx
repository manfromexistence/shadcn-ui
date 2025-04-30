// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/multi-view/demo/focus-context.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // document.getElementById('container').innerHTML = `
  // <div id="focus" ></div>
  // <div id="context"></div>
  // `;
  // 
  // // Render focus View.
  // const focus = new Chart({
  //   container: 'focus',
  //   height: 360,
  //   paddingLeft: 60,
  // });
  // 
  // focus
  //   .area()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
  //   })
  //   .encode('x', 'date')
  //   .encode('y', 'close')
  //   .animate(false)
  //   .axis('x', { grid: false, title: false, tickCount: 5 })
  //   .axis('y', { grid: false, tickCount: 5 })
  //   .interaction('tooltip', false)
  //   .interaction('brushXFilter', true);
  // 
  // focus.render();
  // 
  // // Render context View.
  // const context = new Chart({
  //   container: 'context',
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   height: 90,
  //   paddingLeft: 60,
  // });
  // 
  // context
  //   .area()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
  //   })
  //   .encode('x', 'date')
  //   .encode('y', 'close')
  //   .animate(false)
  //   .axis(false)
  //   .interaction('tooltip', false)
  //   .interaction('brushXHighlight', {
  //     series: true,
  //     maskOpacity: 0.3,
  //     maskFill: '#777',
  //     maskHandleWRender: createPathRender((x, y, width, height) => ({
  //       d: 'M-0.5,31.5c-2.5,0,-4.5,2,-4.5,4.5v30c0,2.5,2,4.5,4.5,4.5V31.5z',
  //       transform: `translate(${x + width / 2}, ${y - height / 2})`,
  //     })),
  //     maskHandleERender: createPathRender((x, y, width, height) => ({
  //       d: 'M0.5,31.5c2.5,0,4.5,2,4.5,4.5v30c0,2.5,-2,4.5,-4.5,4.5V31.5z',
  //       transform: `translate(${x + width / 2}, ${y - height / 2})`,
  //     })),
  //     maskHandleEFill: '#D3D8E0',
  //     maskHandleWFill: '#D3D8E0',
  //   });
  // 
  // context.render();
  // 
  // function createPathRender(compute) {
  //   return (group, options, document) => {
  //     if (!group.handle) {
  //       const path = document.createElement('path');
  //       group.handle = path;
  //       group.appendChild(group.handle);
  //     }
  //     const { handle } = group;
  //     const { x, y, width, height, ...rest } = options;
  //     if (width === undefined || height === undefined) return handle;
  //     handle.attr({ ...compute(x, y, width, height), ...rest });
  //     return handle;
  //   };
  // }
  // 
  // // Add event listeners  to communicate.
  // focus.on('brush:filter', (e) => {
  //   const { nativeEvent } = e;
  //   if (!nativeEvent) return;
  //   const { selection } = e.data;
  //   const { x: scaleX } = focus.getScale();
  //   const [[x1, x2]] = selection;
  //   const domainX = scaleX.getOptions().domain;
  //   if (x1 === domainX[0] && x2 === domainX[1]) {
  //     context.emit('brush:remove', {});
  //   } else {
  //     context.emit('brush:highlight', { data: { selection } });
  //   }
  // });
  // 
  // context.on('brush:highlight', (e) => {
  //   const { nativeEvent, data } = e;
  //   if (!nativeEvent) return;
  //   const { selection } = data;
  //   focus.emit('brush:filter', { data: { selection } });
  // });
  // 
  // context.on('brush:remove', (e) => {
  //   const { nativeEvent } = e;
  //   if (!nativeEvent) return;
  //   const { x: scaleX, y: scaleY } = context.getScale();
  //   const selection = [scaleX.getOptions().domain, scaleY.getOptions().domain];
  //   focus.emit('brush:filter', { data: { selection } });
  // });
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const InteractionMultiViewFocusContextChart: React.FC = () => {
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
  "height": 360,
  "paddingLeft": 60,
  "type": "area",
  "dataComment": "/* TODO: Define chart data (inline or fetched) */",
  "encode": {
    "x": "date",
    "y": "close"
  },
  "axis": {
    "x": {
      "grid": false,
      "title": false,
      "tickCount": 5
    },
    "y": {
      "grid": false,
      "tickCount": 5
    }
  },
  "interaction": {
    "type": "brushXFilter"
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

  // Reset the animation
  const resetAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
    // Reset to initial state using the original data
    renderCurrentState(data.map((value, index) => ({ value, swap: false, index })));
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">M</h2>
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

export default InteractionMultiViewFocusContextChart;
