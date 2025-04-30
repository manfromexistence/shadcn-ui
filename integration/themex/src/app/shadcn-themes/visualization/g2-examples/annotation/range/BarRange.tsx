// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/range/demo/bar-range.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { city: '北京', 职业: '教师', 平均年收入: 12 },
  //   { city: '北京', 职业: '医生', 平均年收入: 30 },
  //   { city: '北京', 职业: '销售', 平均年收入: 18 },
  //   { city: '北京', 职业: '公务员', 平均年收入: 15 },
  //   { city: '北京', 职业: '律师', 平均年收入: 40 },
  //   { city: '北京', 职业: '程序员', 平均年收入: 35 },
  //   { city: '上海', 职业: '教师', 平均年收入: 13 },
  //   { city: '上海', 职业: '医生', 平均年收入: 29 },
  //   { city: '上海', 职业: '销售', 平均年收入: 19 },
  //   { city: '上海', 职业: '公务员', 平均年收入: 16 },
  //   { city: '上海', 职业: '律师', 平均年收入: 42 },
  //   { city: '上海', 职业: '程序员', 平均年收入: 36 },
  //   { city: '杭州', 职业: '教师', 平均年收入: 11 },
  //   { city: '杭州', 职业: '医生', 平均年收入: 25 },
  //   { city: '杭州', 职业: '销售', 平均年收入: 16 },
  //   { city: '杭州', 职业: '公务员', 平均年收入: 14 },
  //   { city: '杭州', 职业: '律师', 平均年收入: 35 },
  //   { city: '杭州', 职业: '程序员', 平均年收入: 28 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 500,
  // });
  // 
  // chart
  //   .data([
  //     { y: [0, 25], region: '1' },
  //     { y: [25, 50], region: '2' },
  //   ])
  //   .rangeY()
  //   .encode('y', 'y')
  //   .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  //   .style('fillOpacity', 0.4)
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', '职业')
  //   .encode('y', '平均年收入')
  //   .encode('color', 'city')
  //   .transform({ type: 'dodgeX' })
  //   .axis('y', { title: '平均年收入', labelFormatter: (d) => d + '万' })
  //   .tooltip({
  //     items: [
  //       (d) => ({
  //         name: '平均年收入',
  //         value: d.平均年收入 + '万',
  //         channel: 'y',
  //       }),
  //     ],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const AnnotationRangeBarRangeChart: React.FC = () => {
  // Add types for refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  // Add types for state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions with types
  const data: number[] = [
  { city: '北京', 职业: '教师', 平均年收入: 12 },
  { city: '北京', 职业: '医生', 平均年收入: 30 },
  { city: '北京', 职业: '销售', 平均年收入: 18 },
  { city: '北京', 职业: '公务员', 平均年收入: 15 },
  { city: '北京', 职业: '律师', 平均年收入: 40 },
  { city: '北京', 职业: '程序员', 平均年收入: 35 },
  { city: '上海', 职业: '教师', 平均年收入: 13 },
  { city: '上海', 职业: '医生', 平均年收入: 29 },
  { city: '上海', 职业: '销售', 平均年收入: 19 },
  { city: '上海', 职业: '公务员', 平均年收入: 16 },
  { city: '上海', 职业: '律师', 平均年收入: 42 },
  { city: '上海', 职业: '程序员', 平均年收入: 36 },
  { city: '杭州', 职业: '教师', 平均年收入: 11 },
  { city: '杭州', 职业: '医生', 平均年收入: 25 },
  { city: '杭州', 职业: '销售', 平均年收入: 16 },
  { city: '杭州', 职业: '公务员', 平均年收入: 14 },
  { city: '杭州', 职业: '律师', 平均年收入: 35 },
  { city: '杭州', 职业: '程序员', 平均年收入: 28 },
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
  "height": 500,
  "type": "rangeY",
  "dataComment": "/* TODO: Manually define inline data array. Original: [\n    { y: [0, 25], region: '1' },\n    { y: [25, 50], region: '2' },\n  ] */",
  "encode": {
    "y": "平均年收入",
    "x": "职业",
    "color": "city"
  },
  "transform": [
    {
      "type": "dodgeX"
    }
  ],
  "axis": {
    "y": {
      "comment": "/* TODO: Manually convert axis options: { title: '平均年收入', labelFormatter: (d) => d + '万' } */"
    }
  },
  "style": {
    "fill": "/* TODO: Convert style value/expression: (d */",
    "fillOpacity": "/* TODO: Convert style value/expression: 0.4 */"
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
      <h2 className="text-xl font-semibold mb-2">R</h2>
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

export default AnnotationRangeBarRangeChart;
