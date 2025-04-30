'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/helix/demo/helix.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // // mock data
  // const data = [];
  // const n = 31;
  // for (let i = 0; i < 372; i++) {
  //   const now = new Date();
  //   const currentTime = new Date(now.getTime() + i * 1000 * 3600 * 24);
  //   const formattedTime = `${currentTime.getFullYear()}.${String(
  //     currentTime.getMonth() + 1,
  //   ).padStart(2, '0')}.${String(currentTime.getDate()).padStart(2, '0')}`;
  // 
  //   data[i] = {};
  //   data[i].time = formattedTime;
  // 
  //   const random = Math.floor(Math.random() * 10);
  //   if ((i % n > 2 && i % n < 4) || (i % n >= 6 && i % n < 7)) {
  //     data[i].value = 30 + random * 7;
  //   } else if (i % n >= 4 && i % n < 6) {
  //     data[i].value = 60 + random * 8;
  //   } else {
  //     data[i].value = 10 + random * 5;
  //   }
  // }
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 500,
  // });
  // 
  // chart.data({
  //   value: data,
  // });
  // 
  // chart.coordinate({
  //   type: 'helix',
  //   startAngle: 0.5 * Math.PI,
  //   endAngle: 12.5 * Math.PI,
  // });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'value')
  //   .encode('color', 'value')
  //   .scale('color', {
  //     type: 'linear',
  //     range: ['#ffffff', '#1890FF'],
  //   })
  //   .tooltip({
  //     title: 'time',
  //   })
  //   .animate('enter', {
  //     type: 'fadeIn',
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralHelixHelixChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [];
  
  
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
      height: 500,
      dataComment: "/* TODO: Data assigned from variable/value: {\n  value: data,\n} - Handle this manually */",
      scale: {"color":{"comment":"/* TODO: Manually convert scale options: {\n    type: 'linear',\n    range: ['#ffffff', '#1890FF'],\n  } */"}},
      coordinate: {"comment":"/* TODO: Manually convert coordinate options: {\n  type: 'helix',\n  startAngle: 0.5 * Math.PI,\n  endAngle: 12.5 * Math.PI,\n} */"},
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

export default GeneralHelixHelixChart;
