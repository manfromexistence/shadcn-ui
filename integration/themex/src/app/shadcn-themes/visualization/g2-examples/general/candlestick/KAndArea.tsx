'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/candlestick/demo/k-and-area.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/stock-03.json',
  //   })
  //   .encode('x', 'date')
  //   .scale('color', {
  //     domain: ['down', 'up'],
  //     range: ['#4daf4a', '#e41a1c'],
  //   })
  //   .scale('x', {
  //     compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  //   })
  //   .scale('y', {
  //     domain: [20, 35],
  //   })
  //   .axis('x', {
  //     labelFormatter: (d) => new Date(d).toLocaleDateString(),
  //   });
  // 
  // chart.interaction('tooltip', {
  //   shared: true,
  // });
  // 
  // chart
  //   .area()
  //   .encode('y', 'range')
  //   .style('fillOpacity', 0.3)
  //   .style('fill', '#64b5f6')
  //   .animate(false);
  // 
  // chart
  //   .link()
  //   .encode('y', ['lowest', 'highest'])
  //   .encode('color', 'trend')
  //   .animate('enter', {
  //     type: 'waveIn',
  //   });
  // 
  // chart
  //   .interval()
  //   .encode('y', ['start', 'end'])
  //   .encode('color', 'trend')
  //   .style('fillOpacity', 1)
  //   .axis('y', {
  //     title: false,
  //   })
  //   .tooltip({
  //     title: 'date',
  //     items: [
  //       { field: 'start' },
  //       { field: 'end' },
  //       { field: 'lowest' },
  //       { field: 'highest' },
  //     ],
  //   })
  //   .animate('enter', {
  //     type: 'waveIn',
  //   });
  // 
  // chart.line().encode('x', 'date').encode('y', 'mean').style('stroke', '#FACC14');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralCandlestickKAndAreaChart: React.FC = () => {
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
      dataComment: "/* TODO: Define chart data (inline or fetched) */",
      scale: {"color":{"comment":"/* TODO: Manually convert scale options: {\n    domain: ['down', 'up'],\n    range: ['#4daf4a', '#e41a1c'],\n  } */"},"x":{"comment":"/* TODO: Manually convert scale options: {\n    compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),\n  } */"},"y":{"comment":"/* TODO: Manually convert scale options: {\n    domain: [20, 35],\n  } */"}},
      axis: {"x":{"comment":"/* TODO: Manually convert axis options: {\n    labelFormatter: (d) => new Date(d).toLocaleDateString(),\n  } */"},"y":{"comment":"/* TODO: Manually convert axis options: {\n    title: false,\n  } */"}},
      style: {"fillOpacity":"/* TODO: Convert style value/expression: 1 */","fill":"#64b5f6","stroke":"#FACC14"},
      interaction: {"type":"tooltip","optionsComment":"/* TODO: Manually convert interaction options: {\n  shared: true,\n} */"},
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
      <h2 className="text-xl font-semibold mb-2">C</h2>
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

export default GeneralCandlestickKAndAreaChart;
