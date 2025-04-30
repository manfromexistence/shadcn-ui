'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/apple-activity.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 244,
  //   height: 244,
  // });
  // 
  // chart
  //   .data([
  //     {
  //       name: 'activity1',
  //       percent: 0.6,
  //       color: '#1ad5de',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
  //     },
  //     {
  //       name: 'activity2',
  //       percent: 0.2,
  //       color: '#a0ff03',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
  //     },
  //     {
  //       name: 'activity3',
  //       percent: 0.3,
  //       color: '#e90b3a',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
  //     },
  //   ])
  //   .coordinate({ type: 'radial', innerRadius: 0.2 });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 1)
  //   .encode('size', 52)
  //   .encode('color', 'color')
  //   .scale('color', { type: 'identity' })
  //   .style('fillOpacity', 0.25)
  //   .animate(false);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 'percent')
  //   .encode('color', 'color')
  //   .encode('size', 52)
  //   .style('radius', 26)
  //   .style('shadowColor', 'rgba(0,0,0,0.45)')
  //   .style('shadowBlur', 20)
  //   .style('shadowOffsetX', -2)
  //   .style('shadowOffsetY', -5)
  //   .axis(false)
  //   .animate('enter', {
  //     type: 'waveIn',
  //     easing: 'easing-out-bounce',
  //     duration: 1000,
  //   });
  // 
  // chart
  //   .image()
  //   .encode('x', 'name')
  //   .encode('y', 0)
  //   .encode('src', (d) => d.icon)
  //   .encode('size', 12)
  //   .style('transform', 'translateX(10)');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralRadialAppleActivityChart: React.FC = () => {
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
      width: 244,
      height: 244,
      dataComment: "/* TODO: Manually define inline data array. Original: [\n    {\n      name: 'activity1',\n      percent: 0.6,\n      color: '#1ad5de',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',\n    },\n    {\n      name: 'activity2',\n      percent: 0.2,\n      color: '#a0ff03',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',\n    },\n    {\n      name: 'activity3',\n      percent: 0.3,\n      color: '#e90b3a',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',\n    },\n  ] */",
      scale: {"color":{"type":"identity"}},
      style: {"fillOpacity":"/* TODO: Convert style value/expression: 0.25 */","radius":"/* TODO: Convert style value/expression: 26 */","shadowColor":"/* TODO: Convert style value/expression: 'rgba(0,0,0,0.45 */","shadowBlur":"/* TODO: Convert style value/expression: 20 */","shadowOffsetX":"/* TODO: Convert style value/expression: -2 */","shadowOffsetY":"/* TODO: Convert style value/expression: -5 */","transform":"/* TODO: Convert style value/expression: 'translateX(10 */"},
      coordinate: {"type":"radial","innerRadius":0.2},
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

export default GeneralRadialAppleActivityChart;
