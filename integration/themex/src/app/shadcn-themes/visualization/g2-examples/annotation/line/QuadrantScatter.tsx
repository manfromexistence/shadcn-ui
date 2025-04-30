'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/line/demo/quadrant-scatter.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json',
  //   transform: [
  //     { type: 'filter', callback: (d) => d['change in male rate'] !== 'NA' },
  //   ],
  // });
  // 
  // chart.lineX().data([0]);
  // chart.lineY().data([0]);
  // 
  // chart
  //   .range()
  //   .data([
  //     { x: [-25, 0], y: [-30, 0], region: '1' },
  //     { x: [-25, 0], y: [0, 20], region: '2' },
  //     { x: [0, 5], y: [-30, 0], region: '2' },
  //     { x: [0, 5], y: [0, 20], region: '1' },
  //   ])
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  //   .style('fillOpacity', 0.2)
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .point()
  //   .encode('x', 'change in female rate')
  //   .encode('y', 'change in male rate')
  //   .encode('size', 'pop')
  //   .encode('color', 'continent')
  //   .encode('shape', 'point')
  //   .scale('color', {
  //     range: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
  //   })
  //   .scale('size', { range: [4, 30] })
  //   .style('stroke', '#bbb')
  //   .style('fillOpacity', 0.8)
  //   .axis('x', { title: 'Female' })
  //   .axis('y', { title: 'Male' })
  //   .legend('size', false)
  //   .slider('x', { labelFormatter: (d) => d.toFixed(1) })
  //   .slider('y', { labelFormatter: (d) => d.toFixed(1) })
  //   .tooltip([
  //     { channel: 'x', valueFormatter: '.1f' },
  //     { channel: 'y', valueFormatter: '.1f' },
  //   ]);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const AnnotationLineQuadrantScatterChart: React.FC = () => {
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
      scale: {"color":{"comment":"/* TODO: Manually convert scale options: {\n    range: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],\n  } */"},"size":{"range":[4,30]}},
      axis: {"x":{"title":"Female"},"y":{"title":"Male"}},
      legend: {"size":false},
      style: {"fill":"/* TODO: Convert style value/expression: (d */","fillOpacity":"/* TODO: Convert style value/expression: 0.8 */","stroke":"#bbb"},
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
      <h2 className="text-xl font-semibold mb-2">L</h2>
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

export default AnnotationLineQuadrantScatterChart;
