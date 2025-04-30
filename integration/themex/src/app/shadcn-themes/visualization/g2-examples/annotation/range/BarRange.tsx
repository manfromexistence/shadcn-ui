'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/range/demo/bar-range.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { city: '北京', 职业: '教师', 平均年收入: 12 },
  //   { city: '北京', 职业: '医生', 平均年收入: 30 },
  //   { city: '北京', 职业: '销售', 平均年收入: 18 },
  //   { city: '北京', 职业: '公务员', 平均年收入: 15 },
  //   { city: '北京', 职业: '律师', 平均年收入: 40 },
  //   { city: '北京', 职业: '程序员', 平均年收入: 35 },
  //   { city: '上海', 职业: '教师', 平均年收入: 13 },
  //   { city: '上海', 职业: '医生', 平均年收入: 29 },
  //   { city: '上海', 职业: '销售', 平均年收入: 19 },
  //   { city: '上海', 职业: '公务员', 平均年收入: 16 },
  //   { city: '上海', 职业: '律师', 平均年收入: 42 },
  //   { city: '上海', 职业: '程序员', 平均年收入: 36 },
  //   { city: '杭州', 职业: '教师', 平均年收入: 11 },
  //   { city: '杭州', 职业: '医生', 平均年收入: 25 },
  //   { city: '杭州', 职业: '销售', 平均年收入: 16 },
  //   { city: '杭州', 职业: '公务员', 平均年收入: 14 },
  //   { city: '杭州', 职业: '律师', 平均年收入: 35 },
  //   { city: '杭州', 职业: '程序员', 平均年收入: 28 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 500,
  // });
  // 
  // chart
  //   .data([
  //     { y: [0, 25], region: '1' },
  //     { y: [25, 50], region: '2' },
  //   ])
  //   .rangeY()
  //   .encode('y', 'y')
  //   .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  //   .style('fillOpacity', 0.4)
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', '职业')
  //   .encode('y', '平均年收入')
  //   .encode('color', 'city')
  //   .transform({ type: 'dodgeX' })
  //   .axis('y', { title: '平均年收入', labelFormatter: (d) => d + '万' })
  //   .tooltip({
  //     items: [
  //       (d) => ({
  //         name: '平均年收入',
  //         value: d.平均年收入 + '万',
  //         channel: 'y',
  //       }),
  //     ],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const AnnotationRangeBarRangeChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data and algorithm definitions
  const data = [
  { city: '北京', 职业: '教师', 平均年收入: 12 },
  { city: '北京', 职业: '医生', 平均年收入: 30 },
  { city: '北京', 职业: '销售', 平均年收入: 18 },
  { city: '北京', 职业: '公务员', 平均年收入: 15 },
  { city: '北京', 职业: '律师', 平均年收入: 40 },
  { city: '北京', 职业: '程序员', 平均年收入: 35 },
  { city: '上海', 职业: '教师', 平均年收入: 13 },
  { city: '上海', 职业: '医生', 平均年收入: 29 },
  { city: '上海', 职业: '销售', 平均年收入: 19 },
  { city: '上海', 职业: '公务员', 平均年收入: 16 },
  { city: '上海', 职业: '律师', 平均年收入: 42 },
  { city: '上海', 职业: '程序员', 平均年收入: 36 },
  { city: '杭州', 职业: '教师', 平均年收入: 11 },
  { city: '杭州', 职业: '医生', 平均年收入: 25 },
  { city: '杭州', 职业: '销售', 平均年收入: 16 },
  { city: '杭州', 职业: '公务员', 平均年收入: 14 },
  { city: '杭州', 职业: '律师', 平均年收入: 35 },
  { city: '杭州', 职业: '程序员', 平均年收入: 28 },
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
      height: 500,
      dataComment: "/* TODO: Manually define inline data array. Original: [\n    { y: [0, 25], region: '1' },\n    { y: [25, 50], region: '2' },\n  ] */",
      transform: [{"type":"dodgeX"}],
      axis: {"y":{"comment":"/* TODO: Manually convert axis options: { title: '平均年收入', labelFormatter: (d) => d + '万' } */"}},
      style: {"fill":"/* TODO: Convert style value/expression: (d */","fillOpacity":"/* TODO: Convert style value/expression: 0.4 */"},
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

export default AnnotationRangeBarRangeChart;
