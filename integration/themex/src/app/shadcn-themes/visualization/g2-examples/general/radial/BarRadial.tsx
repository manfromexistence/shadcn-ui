'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/bar-radial.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'radial', innerRadius: 0.1, endAngle: Math.PI });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { question: '问题 1', percent: 0.21 },
  //     { question: '问题 2', percent: 0.4 },
  //     { question: '问题 3', percent: 0.49 },
  //     { question: '问题 4', percent: 0.52 },
  //     { question: '问题 5', percent: 0.53 },
  //     { question: '问题 6', percent: 0.84 },
  //     { question: '问题 7', percent: 1.0 },
  //     { question: '问题 8', percent: 1.2 },
  //   ])
  //   .encode('x', 'question')
  //   .encode('y', 'percent')
  //   .encode('color', 'percent')
  //   .style('stroke', 'white')
  //   .scale('color', {
  //     range: '#BAE7FF-#1890FF-#0050B3',
  //   })
  //   .axis('y', { tickFilter: (d, i) => i !== 0 })
  //   .legend({
  //     color: {
  //       length: 400,
  //       position: 'bottom',
  //       layout: { justifyContent: 'center' },
  //     },
  //   })
  //   .animate('enter', { type: 'waveIn', duration: 800 });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralRadialBarRadialChart: React.FC = () => {
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
      dataComment: "/* TODO: Manually define inline data array. Original: [\n    { question: '问题 1', percent: 0.21 },\n    { question: '问题 2', percent: 0.4 },\n    { question: '问题 3', percent: 0.49 },\n    { question: '问题 4', percent: 0.52 },\n    { question: '问题 5', percent: 0.53 },\n    { question: '问题 6', percent: 0.84 },\n    { question: '问题 7', percent: 1.0 },\n    { question: '问题 8', percent: 1.2 },\n  ] */",
      scale: {"color":{"comment":"/* TODO: Manually convert scale options: {\n    range: '#BAE7FF-#1890FF-#0050B3',\n  } */"}},
      axis: {"y":{"comment":"/* TODO: Manually convert axis options: { tickFilter: (d, i) => i !== 0 } */"}},
      style: {"stroke":"white"},
      coordinate: {"comment":"/* TODO: Manually convert coordinate options: { type: 'radial', innerRadius: 0.1, endAngle: Math.PI } */"},
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

export default GeneralRadialBarRadialChart;
