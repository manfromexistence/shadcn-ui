// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/funnel/demo/mirror-funnel.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { action: '访问', visitor: 500, site: '站点1' },
  //   { action: '浏览', visitor: 400, site: '站点1' },
  //   { action: '交互', visitor: 300, site: '站点1' },
  //   { action: '下单', visitor: 200, site: '站点1' },
  //   { action: '完成', visitor: 100, site: '站点1' },
  //   { action: '访问', visitor: 550, site: '站点2' },
  //   { action: '浏览', visitor: 420, site: '站点2' },
  //   { action: '交互', visitor: 280, site: '站点2' },
  //   { action: '下单', visitor: 150, site: '站点2' },
  //   { action: '完成', visitor: 80, site: '站点2' },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart.scale('x', { padding: 0 });
  // chart.scale('color', {
  //   range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'],
  // });
  // chart.axis(false);
  // 
  // chart.coordinate({
  //   transform: [{ type: 'transpose' }],
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.site === '站点1',
  //       },
  //     ],
  //   })
  //   .encode('x', 'action')
  //   .encode('y', 'visitor')
  //   .encode('color', 'action')
  //   .encode('shape', 'funnel')
  //   .label({
  //     text: 'visitor',
  //     position: 'inside',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .label({
  //     text: 'action',
  //     position: 'right',
  //     dx: (d) => {
  //       return d.action === '完成' ? 48 : 16;
  //     },
  //   })
  //   .style('stroke', '#FFF')
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .interval()
  //   .data({
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.site === '站点2',
  //       },
  //     ],
  //   })
  //   .encode('x', 'action')
  //   .encode('y', (d) => -d.visitor)
  //   .encode('color', 'action')
  //   .encode('shape', 'funnel')
  //   .label({
  //     text: 'visitor',
  //     position: 'inside',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .style('stroke', '#FFF')
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const GeneralFunnelMirrorFunnelChart: React.FC = () => {
  // Add types for refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  // Add types for state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions with types
  const data: number[] = [
  { action: '访问', visitor: 500, site: '站点1' },
  { action: '浏览', visitor: 400, site: '站点1' },
  { action: '交互', visitor: 300, site: '站点1' },
  { action: '下单', visitor: 200, site: '站点1' },
  { action: '完成', visitor: 100, site: '站点1' },
  { action: '访问', visitor: 550, site: '站点2' },
  { action: '浏览', visitor: 420, site: '站点2' },
  { action: '交互', visitor: 280, site: '站点2' },
  { action: '下单', visitor: 150, site: '站点2' },
  { action: '完成', visitor: 80, site: '站点2' },
];

  
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
  "type": "interval",
  "dataComment": "/* TODO: Data assigned from variable/value: data - Handle this manually */",
  "encode": {
    "x": "action",
    "y": "/* TODO: Convert encode function/expression: (d */",
    "color": "action",
    "shape": "funnel"
  },
  "scale": {
    "x": {
      "padding": 0
    },
    "color": {
      "comment": "/* TODO: Manually convert scale options: {\n  range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'],\n} */"
    }
  },
  "style": {
    "stroke": "#FFF"
  },
  "labels": [
    {
      "comment": "/* TODO: Manually convert label options: {\n    text: 'visitor',\n    position: 'inside',\n    transform: [{ type: 'contrastReverse' }],\n  } */"
    },
    {
      "comment": "/* TODO: Manually convert label options: {\n    text: 'action',\n    position: 'right',\n    dx: (d) => {\n      return d.action === '完成' ? 48 : 16;\n    },\n  } */"
    },
    {
      "comment": "/* TODO: Manually convert label options: {\n    text: 'visitor',\n    position: 'inside',\n    transform: [{ type: 'contrastReverse' }],\n  } */"
    }
  ],
  "coordinate": {
    "comment": "/* TODO: Manually convert coordinate options: {\n  transform: [{ type: 'transpose' }],\n} */"
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
      <h2 className="text-xl font-semibold mb-2">F</h2>
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

export default GeneralFunnelMirrorFunnelChart;
