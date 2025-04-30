'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



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

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const GeneralPiePieBaseFacetChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [
  { type: '男性', percent: 56.4, color: '#0a9afe' },
  { type: '女性', percent: 43.6, color: '#f0657d' },
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
      dataComment: "/* TODO: Define chart data (inline or fetched) */",
      scale: {"y":{"zero":true},"color":{"type":"identity"}},
      style: {"fill":"#e8e8e8","textAlign":"center","textBaseline":"middle","fontSize":"/* TODO: Convert style value/expression: 30 */","color":"#000","x":"50%","y":"50%","dy":"/* TODO: Convert style value/expression: 20 */","fontWeight":"/* TODO: Convert style value/expression: 500 */"},
      coordinate: {"type":"theta","innerRadius":0.5,"outerRadius":0.8},
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
