// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import G2 Chart type for better type safety
import { Chart, type G2Spec } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/pie-base-facet.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { type: '男性', percent: 56.4, color: '#0a9afe' },
  //   { type: '女性', percent: 43.6, color: '#f0657d' },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data(data)
  //   .encode('x', 'type')
  //   .axis(false)
  //   .legend(false)
  //   .view()
  //   .attr('frame', false)
  //   .coordinate({ type: 'theta', innerRadius: 0.5, outerRadius: 0.8 });
  // 
  // facetRect
  //   .interval()
  //   .encode('y', 100)
  //   .scale('y', { zero: true })
  //   .style('fill', '#e8e8e8')
  //   .tooltip(false)
  //   .animate(false);
  // 
  // facetRect
  //   .interval()
  //   .encode('y', 'percent')
  //   .encode('color', 'color')
  //   .scale('color', { type: 'identity' })
  //   .tooltip((data) => ({
  //     name: data.type,
  //     value: data.percent,
  //   }))
  //   .animate('enter', { type: 'waveIn', duration: 1000 });
  // 
  // facetRect
  //   .text()
  //   .encode('text', 'type')
  //   .style('textAlign', 'center')
  //   .style('textBaseline', 'middle')
  //   .style('fontSize', 20)
  //   .style('color', '#8c8c8c')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', -20);
  // 
  // facetRect
  //   .text()
  //   .encode('text', 'percent')
  //   .style('textAlign', 'center')
  //   .style('textBaseline', 'middle')
  //   .style('fontSize', 30)
  //   .style('fontWeight', 500)
  //   .style('color', '#000')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', 20);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation.

// Define the expected frame structure for type safety
type SortFrame = Array<{ value: number; swap: boolean; index?: number }>;

const GeneralPiePieBaseFacetChart: React.FC = () => {
  // Add types for refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  // Add types for state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions with types
  const data: number[] = [
  { type: '男性', percent: 56.4, color: '#0a9afe' },
  { type: '女性', percent: 43.6, color: '#f0657d' },
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
  "type": "facetRect",
  "dataComment": "/* TODO: Define chart data (inline or fetched) */",
  "encode": {
    "x": "type",
    "y": "percent",
    "color": "color",
    "text": "percent"
  },
  "scale": {
    "y": {
      "zero": true
    },
    "color": {
      "type": "identity"
    }
  },
  "style": {
    "fill": "#e8e8e8",
    "textAlign": "center",
    "textBaseline": "middle",
    "fontSize": "/* TODO: Convert style value/expression: 30 */",
    "color": "#000",
    "x": "50%",
    "y": "50%",
    "dy": "/* TODO: Convert style value/expression: 20 */",
    "fontWeight": "/* TODO: Convert style value/expression: 500 */"
  },
  "coordinate": {
    "type": "theta",
    "innerRadius": 0.5,
    "outerRadius": 0.8
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
      <h2 className="text-xl font-semibold mb-2">P</h2>
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

export default GeneralPiePieBaseFacetChart;
