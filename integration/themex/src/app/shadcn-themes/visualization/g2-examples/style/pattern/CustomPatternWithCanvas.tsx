'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/pattern/demo/custom-pattern-with-canvas.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://g2plot.antv.antgroup.com/examples/plugin/pattern/#heatmap-cookie-pattern
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 550,
  //   height: 500,
  //   paddingBottom: 80,
  // });
  // 
  // function applyStyle(ctx, style) {
  //   return Object.entries(style).forEach(([k, v]) => (ctx[k] = v));
  // }
  // 
  // function createCanvas(w, h) {
  //   const canvas = document.createElement('canvas');
  //   const dpr = window.devicePixelRatio;
  //   canvas.width = w * dpr;
  //   canvas.height = h * dpr;
  //   canvas.style.width = `${w}px`;
  //   canvas.style.height = `${h}px`;
  //   canvas.getContext('2d').scale(dpr, dpr);
  // 
  //   return canvas;
  // }
  // 
  // function drawRect(ctx, w, h, fill) {
  //   applyStyle(ctx, { fillStyle: fill });
  //   ctx.fillRect(0, 0, w, h);
  // }
  // 
  // function drawLinePattern(ctx, color, width, height, cross = false) {
  //   applyStyle(ctx, { globalAlpha: 1, strokeStyle: color, strokeOpacity: 0.9 });
  //   applyStyle(ctx, { lineWidth: 0.5, lineCap: 'square' });
  // 
  //   const d = `
  //        M 0 ${-height} L ${width * 2} ${height}
  //        M ${-width} ${-height} L ${width} ${height}
  //        M ${-width} 0 L ${width} ${height * 2}`;
  //   ctx.stroke(new Path2D(d));
  // 
  //   if (cross) {
  //     const d1 = `
  //          M ${-width} ${height} L ${width} ${-height}
  //          M ${-width} ${height * 2} L ${width * 2} ${-height}
  //          M 0 ${height * 2} L ${width * 2} 0`;
  //     ctx.stroke(new Path2D(d1));
  //   }
  // }
  // 
  // // create pattern with raw Canvas API
  // const createPattern = (color, stroke, cross = false, density = false) => {
  //   const spacing = density ? 3 : 5;
  //   const width = Math.abs(spacing / Math.sin(Math.PI / 4));
  //   const height = spacing / Math.sin(Math.PI / 4);
  // 
  //   const canvas = createCanvas(width, height);
  //   const ctx = canvas.getContext('2d');
  // 
  //   drawRect(ctx, width, height, color);
  //   drawLinePattern(ctx, stroke, width, height, cross);
  // 
  //   return canvas;
  // };
  // 
  // const pattern1 = createPattern('#edaa53', '#44120c', true, true);
  // const pattern2 = createPattern('#edaa53', '#44120c', true);
  // const pattern3 = createPattern('#edaa53', '#fff');
  // 
  // chart
  //   .cell()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json',
  //   })
  //   .encode('x', 'name')
  //   .encode('y', 'country')
  //   .encode('color', '#edaa53')
  //   .style('radius', Infinity)
  //   .style('inset', 1)
  //   .style('shadowBlur', 10)
  //   .style('shadowColor', 'rgba(0,0,0,0.3)')
  //   .style('fill', ({ value }) => {
  //     return {
  //       image:
  //         60 <= value && value < 90
  //           ? pattern1
  //           : value >= 50
  //           ? pattern2
  //           : pattern3,
  //       repetition: 'repeat',
  //     };
  //   })
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const StylePatternCustomPatternWithCanvasChart: React.FC = () => {
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
      width: 550,
      height: 500,
      paddingBottom: 80,
      dataComment: "/* TODO: Define chart data (inline or fetched) */",
      style: {"radius":"/* TODO: Convert style value/expression: Infinity */","inset":"/* TODO: Convert style value/expression: 1 */","shadowBlur":"/* TODO: Convert style value/expression: 10 */","shadowColor":"/* TODO: Convert style value/expression: 'rgba(0,0,0,0.3 */","fill":"/* TODO: Convert style value/expression: ({ value } */"},
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

export default StylePatternCustomPatternWithCanvasChart;
