'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/range/demo/point-range.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://www.anychart.com/zh/products/anychart/gallery/Quadrant_Charts/Top_30_Countries_by_Quality_of_Life.php
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://assets.antv.antgroup.com/g2/top-30-countries-by-quality-of-life.json',
  //   })
  //   .axis('x', false)
  //   .axis('y', false)
  //   .style('mainStroke', '#5B8FF9')
  //   .style('mainLineWidth', 2);
  // 
  // chart
  //   .range()
  //   .data([
  //     { x: [0, 0.5], y: [0, 0.5] },
  //     { x: [0.5, 1], y: [0.5, 1] },
  //   ])
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .scale('x', { independent: true, domain: [0, 1] })
  //   .scale('y', { independent: true, domain: [0, 1] })
  //   .style('stroke', '#5B8FF9')
  //   .style('lineWidth', 1)
  //   .style('fillOpacity', 0.15)
  //   .animate(false)
  //   .tooltip(false);
  // 
  // chart
  //   .point()
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('shape', 'point')
  //   .scale('x', { domain: [137.5, 212] })
  //   .scale('y', { domain: [0, 80] })
  //   .label({ text: 'name', fontSize: 10, dy: 6 });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const AnnotationRangePointRangeChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];
  
  
function* insertionSort(arr) {
  const len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
    yield arr.map((a, index) => ({
      value: a,
      swap: index === preIndex + 1 || index === i,
    }));
  }
  return arr;
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
    
    // Create new chart
    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      // Apply other chart options from the original example
      dataComment: "/* TODO: Manually define inline data array. Original: [\n    { x: [0, 0.5], y: [0, 0.5] },\n    { x: [0.5, 1], y: [0.5, 1] },\n  ] */",
      scale: {"x":{"domain":[137.5,212]},"y":{"domain":[0,80]}},
      axis: {"x":false,"y":false},
      style: {"mainStroke":"#5B8FF9","mainLineWidth":"/* TODO: Convert style value/expression: 2 */","stroke":"#5B8FF9","lineWidth":"/* TODO: Convert style value/expression: 1 */","fillOpacity":"/* TODO: Convert style value/expression: 0.15 */"},
      labels: [{"comment":"/* TODO: Manually convert label options: { text: 'name', fontSize: 10, dy: 6 } */"}],
    });
    
    // Initial visualization setup
    renderCurrentState(data);
  }, []);
  
  // Function to render chart with current data state
  const renderCurrentState = (frameData) => {
    if (!chartRef.current) return;
    
    const chart = chartRef.current;
    
    // Create keyframe for animation
    const keyframe = chart.timingKeyframe();
    
    keyframe
      .interval()
      .data(frameData.map((datum, index) => ({ index, ...datum })))
      .encode('x', 'index')
      .encode('y', 'value')
      .encode('key', 'value')
      .encode('color', 'swap');
    
    chart.render();
  };
  
  // Play/pause the animation
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      // Start playing
      let generator = insertionSort([...data]);
      let step = generator.next();
      
      const animate = () => {
        if (step.done) {
          setIsPlaying(false);
          return;
        }
        
        renderCurrentState(step.value);
        step = generator.next();
        
        if (!step.done) {
          animationRef.current = setTimeout(animate, speed);
        } else {
          setIsPlaying(false);
        }
      };
      
      animate();
    } else {
      // Stop playing
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    }
  };
  
  // Reset animation
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

export default AnnotationRangePointRangeChart;
