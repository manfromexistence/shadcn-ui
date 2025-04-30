'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/heatmap/demo/mouse-heatmap.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { throttle } from 'lodash';
  // 
  // const data = {};
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 640,
  //   height: 480,
  //   padding: 0,
  // });
  // 
  // chart.style({
  //   viewFill: '#4e79a7',
  // });
  // 
  // chart.data([]);
  // chart.axis(false);
  // 
  // chart
  //   .heatmap()
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', 'v')
  //   .scale('x', { domain: [0, 640] })
  //   .scale('y', { domain: [0, 480], range: [0, 1] })
  //   .style('opacity', 0)
  //   .tooltip(false)
  //   .animate(false);
  // 
  // chart.render();
  // 
  // chart.on(
  //   'plot:pointermove',
  //   throttle((e) => {
  //     const { x, y } = e;
  // 
  //     const kx = Math.floor(x - (x % 8));
  //     const ky = Math.floor(y - (y % 8));
  // 
  //     if (!data[kx]) data[kx] = {};
  //     if (!data[kx][ky]) data[kx][ky] = 0;
  // 
  //     data[kx][ky] += 1;
  // 
  //     const d = transform(data);
  // 
  //     chart.changeData(d);
  //   }),
  // );
  // 
  // function transform(dataMap) {
  //   const arr = [];
  //   Object.keys(dataMap).forEach((x) => {
  //     Object.keys(dataMap[x]).forEach((y) => {
  //       arr.push({ x, y, v: dataMap[x][y] });
  //     });
  //   });
  //   return arr;
  // }
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralHeatmapMouseHeatmapChart: React.FC = () => {
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
      width: 640,
      height: 480,
      padding: 0,
      scale: {"x":{"domain":[0,640]},"y":{"domain":[0,480],"range":[0,1]}},
      style: {"opacity":"/* TODO: Convert style value/expression: 0 */"},
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
      <h2 className="text-xl font-semibold mb-2">H</h2>
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

export default GeneralHeatmapMouseHeatmapChart;
