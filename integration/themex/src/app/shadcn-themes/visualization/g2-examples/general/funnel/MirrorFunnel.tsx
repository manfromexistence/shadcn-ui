'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/funnel/demo/mirror-funnel.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { action: '访问', visitor: 500, site: '站点1' },
  //   { action: '浏览', visitor: 400, site: '站点1' },
  //   { action: '交互', visitor: 300, site: '站点1' },
  //   { action: '下单', visitor: 200, site: '站点1' },
  //   { action: '完成', visitor: 100, site: '站点1' },
  //   { action: '访问', visitor: 550, site: '站点2' },
  //   { action: '浏览', visitor: 420, site: '站点2' },
  //   { action: '交互', visitor: 280, site: '站点2' },
  //   { action: '下单', visitor: 150, site: '站点2' },
  //   { action: '完成', visitor: 80, site: '站点2' },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart.scale('x', { padding: 0 });
  // chart.scale('color', {
  //   range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'],
  // });
  // chart.axis(false);
  // 
  // chart.coordinate({
  //   transform: [{ type: 'transpose' }],
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.site === '站点1',
  //       },
  //     ],
  //   })
  //   .encode('x', 'action')
  //   .encode('y', 'visitor')
  //   .encode('color', 'action')
  //   .encode('shape', 'funnel')
  //   .label({
  //     text: 'visitor',
  //     position: 'inside',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .label({
  //     text: 'action',
  //     position: 'right',
  //     dx: (d) => {
  //       return d.action === '完成' ? 48 : 16;
  //     },
  //   })
  //   .style('stroke', '#FFF')
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .interval()
  //   .data({
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.site === '站点2',
  //       },
  //     ],
  //   })
  //   .encode('x', 'action')
  //   .encode('y', (d) => -d.visitor)
  //   .encode('color', 'action')
  //   .encode('shape', 'funnel')
  //   .label({
  //     text: 'visitor',
  //     position: 'inside',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .style('stroke', '#FFF')
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralFunnelMirrorFunnelChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [
  { action: '访问', visitor: 500, site: '站点1' },
  { action: '浏览', visitor: 400, site: '站点1' },
  { action: '交互', visitor: 300, site: '站点1' },
  { action: '下单', visitor: 200, site: '站点1' },
  { action: '完成', visitor: 100, site: '站点1' },
  { action: '访问', visitor: 550, site: '站点2' },
  { action: '浏览', visitor: 420, site: '站点2' },
  { action: '交互', visitor: 280, site: '站点2' },
  { action: '下单', visitor: 150, site: '站点2' },
  { action: '完成', visitor: 80, site: '站点2' },
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
      dataComment: "/* TODO: Data assigned from variable/value: data - Handle this manually */",
      scale: {"x":{"padding":0},"color":{"comment":"/* TODO: Manually convert scale options: {\n  range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'],\n} */"}},
      style: {"stroke":"#FFF"},
      labels: [{"comment":"/* TODO: Manually convert label options: {\n    text: 'visitor',\n    position: 'inside',\n    transform: [{ type: 'contrastReverse' }],\n  } */"},{"comment":"/* TODO: Manually convert label options: {\n    text: 'action',\n    position: 'right',\n    dx: (d) => {\n      return d.action === '完成' ? 48 : 16;\n    },\n  } */"},{"comment":"/* TODO: Manually convert label options: {\n    text: 'visitor',\n    position: 'inside',\n    transform: [{ type: 'contrastReverse' }],\n  } */"}],
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

export default GeneralFunnelMirrorFunnelChart;
