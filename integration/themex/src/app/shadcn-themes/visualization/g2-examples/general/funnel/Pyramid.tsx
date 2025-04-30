'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/funnel/demo/pyramid.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { action: '浏览网站', pv: 50000 },
  //   { action: '放入购物车', pv: 35000 },
  //   { action: '生成订单', pv: 25000 },
  //   { action: '支付订单', pv: 15000 },
  //   { action: '完成交易', pv: 8000 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingRight: 80,
  // });
  // 
  // chart.coordinate({
  //   transform: [{ type: 'transpose' }],
  // });
  // 
  // chart.data({
  //   type: 'inline',
  //   value: data,
  //   transform: [
  //     {
  //       type: 'custom',
  //       callback: (data) => data.map((d) => ({ ...d, rate: d.pv / data[0].pv })),
  //     },
  //   ],
  // });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'action')
  //   .encode('y', 'pv')
  //   .encode('color', 'action')
  //   .encode('shape', 'pyramid')
  //   .transform({ type: 'symmetryY' })
  //   .scale('x', { padding: 0 })
  //   .animate('enter', { type: 'fadeIn' })
  //   .label({
  //     text: (d) => `${d.action} ${d.pv}`,
  //     textAlign: 'left',
  //   })
  //   .label({
  //     text: (d) => `${(d.rate * 100).toFixed(1)}%`,
  //     position: 'inside',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .legend('color', { position: 'bottom' })
  //   .axis(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralFunnelPyramidChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付订单', pv: 15000 },
  { action: '完成交易', pv: 8000 },
];
  
  
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
      paddingRight: 80,
      dataComment: "/* TODO: Data assigned from variable/value: {\n  type: 'inline',\n  value: data,\n  transform: [\n    {\n      type: 'custom',\n      callback: (data - Handle this manually */",
      transform: [{"type":"symmetryY"}],
      scale: {"x":{"padding":0}},
      legend: {"color":{"comment":"/* TODO: Manually convert legend options: { position: 'bottom' } */"}},
      labels: [{"comment":"/* TODO: Manually convert label options: {\n    text: (d) => `${d.action} ${d.pv}`,\n    textAlign: 'left',\n  } */"},{"comment":"/* TODO: Manually convert label options: {\n    text: (d) => `${(d.rate * 100).toFixed(1)}%`,\n    position: 'inside',\n    transform: [{ type: 'contrastReverse' }],\n  } */"}],
      coordinate: {"comment":"/* TODO: Manually convert coordinate options: {\n  transform: [{ type: 'transpose' }],\n} */"},
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
};

export default GeneralFunnelPyramidChart;
