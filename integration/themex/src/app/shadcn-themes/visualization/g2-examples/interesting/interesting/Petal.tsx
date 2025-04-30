'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interesting/interesting/demo/petal.ts
  ================================================================================
  // import { Chart, register } from '@antv/g2';
  // 
  // // 注册自定义图形，代码在下面
  // register('shape.interval.petal', petal);
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'theta' });
  // 
  // chart.data([
  //   { type: '分类一', value: 27 },
  //   { type: '分类二', value: 25 },
  //   { type: '分类三', value: 18 },
  //   { type: '分类四', value: 15 },
  //   { type: '分类五', value: 10 },
  //   { type: 'Other', value: 5 },
  // ]);
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'value')
  //   .encode('color', 'type')
  //   .encode('shape', 'petal')
  //   .style('offset', 0.5) // 👈🏻 在这里配置属性
  //   .style('ratio', 0.2) // 👈🏻 在这里配置属性
  //   .label({
  //     text: (d, i, data) => d.type + '\n' + d.value,
  //     radius: 0.9,
  //     fontSize: 9,
  //     dy: 12,
  //   })
  //   .animate('enter', { type: 'fadeIn' })
  //   .legend(false);
  // 
  // chart.render();
  // 
  // /** Functions for custom shape. */
  // 
  // function getPoint(p0, p1, ratio) {
  //   return [p0[0] + (p1[0] - p0[0]) * ratio, p0[1] + (p1[1] - p0[1]) * ratio];
  // }
  // 
  // function sub(p1, p2) {
  //   const [x1, y1] = p1;
  //   const [x2, y2] = p2;
  //   return [x1 - x2, y1 - y2];
  // }
  // 
  // function dist(p0, p1) {
  //   const [x0, y0] = p0;
  //   const [x1, y1] = p1;
  //   return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
  // }
  // 
  // function getAngle(p) {
  //   const [x, y] = p;
  //   return Math.atan2(y, x);
  // }
  // 
  // function getXY(angle, center, radius) {
  //   return [
  //     Math.cos(angle) * radius + center[0],
  //     Math.sin(angle) * radius + center[1],
  //   ];
  // }
  // 
  // /**
  //  * Custom shape for petal.
  //  */
  // function petal({ offset = 1, ratio = 0.5 }, context) {
  //   const { coordinate } = context;
  //   return (points, value, defaults) => {
  //     // 圆形坐标
  //     const center = coordinate.getCenter();
  //     // 1° 的偏移
  //     const offsetAngle = (Math.PI / 180) * offset;
  //     // eslint-disable-next-line
  //     let [p0, p1, p2, p3] = points;
  //     // 半径
  //     const radius = dist(center, p0);
  //     const qRadius = radius * ratio;
  //     const angleQ1 = getAngle(sub(p3, center)) + offsetAngle;
  //     const angleQ2 = getAngle(sub(p0, center)) - offsetAngle;
  // 
  //     // 偏移 1° 后的 q1, q2
  //     const q1 = getXY(angleQ1, center, qRadius);
  //     const q2 = getXY(angleQ2, center, qRadius);
  // 
  //     // 偏移 1° 后的 p3, p0
  //     p3 = getXY(angleQ1, center, radius);
  //     p0 = getXY(angleQ2, center, radius);
  // 
  //     // mid 对应的角度为 p0 和 p3 中点的夹角
  //     const angle = getAngle(sub(getPoint(p0, p3, 0.5), center));
  //     const mid = getXY(angle, center, radius);
  // 
  //     const path = [
  //       ['M', ...p1],
  //       ['L', ...q1],
  //       ['Q', ...p3, ...mid],
  //       ['Q', ...p0, ...q2],
  //       ['L', ...p2],
  //       ['Z'],
  //     ];
  // 
  //     const { document } = chart.getContext().canvas;
  //     const g = document.createElement('g', {});
  //     const p = document.createElement('path', {
  //       style: {
  //         d: path,
  //         inset: 1,
  //         fill: value.color,
  //       },
  //     });
  //     g.appendChild(p);
  // 
  //     return g;
  //   };
  // }
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const InterestingInterestingPetalChart: React.FC = () => {
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
      dataComment: "/* TODO: Manually define inline data array. Original: [\n  { type: '分类一', value: 27 },\n  { type: '分类二', value: 25 },\n  { type: '分类三', value: 18 },\n  { type: '分类四', value: 15 },\n  { type: '分类五', value: 10 },\n  { type: 'Other', value: 5 },\n] */",
      transform: [{"type":"stackY"}],
      style: {"offset":"/* TODO: Convert style value/expression: 0.5 */","ratio":"/* TODO: Convert style value/expression: 0.2 */"},
      labels: [{"comment":"/* TODO: Manually convert label options: {\n    text: (d, i, data) => d.type + '\\n' + d.value,\n    radius: 0.9,\n    fontSize: 9,\n    dy: 12,\n  } */"}],
      coordinate: {"type":"theta"},
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
      <h2 className="text-xl font-semibold mb-2">I</h2>
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

export default InterestingInterestingPetalChart;
