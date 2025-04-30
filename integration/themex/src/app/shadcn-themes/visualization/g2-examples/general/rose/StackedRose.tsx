'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/rose/demo/stacked-rose.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/radial-stacked-bar-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 800,
  //   height: 800,
  // });
  // 
  // const colors = [
  //   '#98abc5',
  //   '#8a89a6',
  //   '#7b6888',
  //   '#6b486b',
  //   '#a05d56',
  //   '#d0743c',
  //   '#ff8c00',
  // ];
  // 
  // chart.coordinate({ type: 'polar', innerRadius: 0.4 });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/d582a447-2057-4a74-97ed-1d73a5459ea4.csv',
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: [
  //           'Under 5 Years',
  //           '5 to 13 Years',
  //           '14 to 17 Years',
  //           '18 to 24 Years',
  //           '25 to 44 Years',
  //           '45 to 64 Years',
  //           '65 Years and Over',
  //         ],
  //         key: 'Age',
  //         value: 'Population',
  //       },
  //     ],
  //   })
  //   .transform({ type: 'stackY' })
  //   .encode('x', 'State')
  //   .encode('y', 'Population')
  //   .encode('color', 'Age')
  //   .scale('color', { range: colors })
  //   .legend('color', { position: 'center', display: 'grid', gridCol: 1 })
  //   .scale('y', { type: 'sqrt' })
  //   .axis('y', {
  //     labelFormatter: '~s',
  //     tickFilter: (_, i) => i !== 0,
  //     direction: 'center',
  //   })
  //   .axis('x', { position: 'inner' })
  //   .animate('enter', { type: 'waveIn' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralRoseStackedRoseChart: React.FC = () => {
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
      width: 800,
      height: 800,
      dataComment: "/* TODO: Define chart data (inline or fetched) */",
      transform: [{"type":"stackY"}],
      scale: {"color":{"comment":"/* TODO: Manually convert scale options: { range: colors } */"},"y":{"type":"sqrt"}},
      axis: {"y":{"comment":"/* TODO: Manually convert axis options: {\n    labelFormatter: '~s',\n    tickFilter: (_, i) => i !== 0,\n    direction: 'center',\n  } */"},"x":{"position":"inner"}},
      legend: {"color":{"comment":"/* TODO: Manually convert legend options: { position: 'center', display: 'grid', gridCol: 1 } */"}},
      coordinate: {"type":"polar","innerRadius":0.4},
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

export default GeneralRoseStackedRoseChart;
