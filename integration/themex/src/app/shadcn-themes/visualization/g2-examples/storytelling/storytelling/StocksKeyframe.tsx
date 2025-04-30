'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
// External libraries:
// Chart animation detected - G2 animation API will be used

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/storytelling/storytelling/demo/stocks-keyframe.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // fetch('https://assets.antv.antgroup.com/g2/stocks2.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const keyframes = [
  //       facetLine,
  //       facetArea,
  //       stackArea,
  //       layerArea,
  //       streamgraph,
  //       normalizeArea,
  //       normalizeBar,
  //       groupBar,
  //       stackBar,
  //       bar,
  //       pie,
  //       rose,
  //     ];
  // 
  //     const chart = new Chart({ container: 'container' });
  // 
  //     chart.options({
  //       type: 'timingKeyframe',
  //       width: 800,
  //       children: keyframes.map((plot) => {
  //         const { children, ...options } = plot(data);
  //         return {
  //           theme: 'dark',
  //           paddingLeft: 40,
  //           paddingBottom: 50,
  //           paddingRight: 50,
  //           ...options,
  //           ...(children && {
  //             children: children.map((d) => ({ ...d, theme: 'dark' })),
  //           }),
  //         };
  //       }),
  //     });
  // 
  //     chart.render();
  //   });
  // 
  // function facetLine(data) {
  //   return {
  //     type: 'facetRect',
  //     data,
  //     encode: { y: 'symbol' },
  //     axis: { y: { title: false } },
  //     children: [
  //       {
  //         type: 'line',
  //         key: 'line',
  //         encode: {
  //           x: (d) => new Date(d.date),
  //           y: 'price',
  //           color: 'symbol',
  //           key: 'symbol',
  //         },
  //         frame: false,
  //         scale: { y: { zero: true, tickCount: 3 } },
  //         axis: { x: { title: false }, y: { title: false } },
  //         animate: { enter: { type: 'pathIn' } },
  //         style: { shape: 'smooth' },
  //       },
  //     ],
  //   };
  // }
  // 
  // function facetArea(data) {
  //   return {
  //     type: 'facetRect',
  //     data,
  //     encode: { y: 'symbol' },
  //     axis: { y: { title: false } },
  //     children: [
  //       {
  //         type: 'line',
  //         key: 'line',
  //         frame: false,
  //         encode: {
  //           x: (d) => new Date(d.date),
  //           y: 'price',
  //           color: 'symbol',
  //           key: 'symbol',
  //         },
  //         style: { shape: 'smooth' },
  //         axis: { x: { title: false }, y: { title: false } },
  //         scale: { y: { zero: true, facet: false, tickCount: 3 } },
  //       },
  //       {
  //         type: 'area',
  //         key: 'area',
  //         class: 'area',
  //         frame: false,
  //         encode: {
  //           x: (d) => new Date(d.date),
  //           y: 'price',
  //           color: 'symbol',
  //           key: 'symbol',
  //         },
  //         style: { shape: 'smooth' },
  //         scale: { y: { facet: false, zero: true, tickCount: 3 } },
  //         axis: { x: { title: false }, y: { title: false } },
  //         animate: { exit: { type: 'fadeOut' } },
  //       },
  //     ],
  //   };
  // }
  // 
  // function stackArea(data) {
  //   return {
  //     type: 'area',
  //     data,
  //     key: 'area',
  //     class: 'area',
  //     transform: [{ type: 'stackY', reverse: true }],
  //     axis: { y: { title: false } },
  //     encode: {
  //       x: (d) => new Date(d.date),
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     style: { shape: 'smooth' },
  //   };
  // }
  // 
  // function layerArea(data) {
  //   return {
  //     type: 'area',
  //     key: 'area',
  //     class: 'area',
  //     data,
  //     axis: { y: { title: false } },
  //     encode: {
  //       x: (d) => new Date(d.date),
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     style: { fillOpacity: 0.5, shape: 'smooth' },
  //   };
  // }
  // 
  // function streamgraph(data) {
  //   return {
  //     type: 'area',
  //     key: 'area',
  //     class: 'area',
  //     data,
  //     axis: { y: { title: false } },
  //     transform: [{ type: 'stackY', reverse: true }, { type: 'symmetryY' }],
  //     encode: {
  //       x: (d) => new Date(d.date),
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     style: { fillOpacity: 1, shape: 'smooth' },
  //   };
  // }
  // 
  // function normalizeArea(data) {
  //   return {
  //     type: 'area',
  //     key: 'area',
  //     class: 'area',
  //     data,
  //     axis: { y: { title: false } },
  //     transform: [{ type: 'stackY', reverse: true }, { type: 'normalizeY' }],
  //     encode: {
  //       x: (d) => new Date(d.date),
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     style: { fillOpacity: 1, shape: 'smooth' },
  //   };
  // }
  // 
  // function normalizeBar(data) {
  //   return {
  //     type: 'interval',
  //     data,
  //     encode: {
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     transform: [
  //       { type: 'groupColor', y: 'sum' },
  //       { type: 'stackY', reverse: true },
  //       { type: 'normalizeY' },
  //     ],
  //     scale: { x: { padding: 0 } },
  //     axis: { y: { title: false }, x: { title: false } },
  //   };
  // }
  // 
  // function groupBar(data) {
  //   return {
  //     type: 'interval',
  //     data,
  //     transform: [{ type: 'dodgeX' }],
  //     encode: {
  //       x: 'date',
  //       y: 'price',
  //       color: 'symbol',
  //       groupKey: 'symbol',
  //       key: (_, i) => i,
  //     },
  //     scale: { y: { nice: true } },
  //     axis: { x: false, y: { title: false } },
  //   };
  // }
  // 
  // function stackBar(data) {
  //   return {
  //     type: 'interval',
  //     data,
  //     transform: [{ type: 'stackY' }],
  //     encode: {
  //       x: 'date',
  //       y: 'price',
  //       color: 'symbol',
  //       groupKey: 'symbol',
  //       key: (_, i) => i,
  //     },
  //     axis: { x: false, y: { title: false } },
  //   };
  // }
  // 
  // function bar(data) {
  //   return {
  //     type: 'interval',
  //     data,
  //     transform: [{ type: 'groupX', y: 'sum' }],
  //     encode: {
  //       x: 'symbol',
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     axis: {
  //       y: { labelFormatter: '~s', title: false },
  //       x: { title: false },
  //     },
  //   };
  // }
  // 
  // function pie(data) {
  //   return {
  //     type: 'interval',
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //     paddingBottom: 10,
  //     data,
  //     transform: [{ type: 'groupX', y: 'sum' }, { type: 'stackY' }],
  //     coordinate: { type: 'theta' },
  //     encode: {
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     legend: { color: { layout: { justifyContent: 'center' } } },
  //     style: { radius: 10 },
  //   };
  // }
  // 
  // function rose(data) {
  //   return {
  //     type: 'interval',
  //     data,
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //     paddingBottom: 10,
  //     transform: [{ type: 'groupX', y: 'sum' }],
  //     coordinate: { type: 'polar' },
  //     encode: {
  //       x: 'symbol',
  //       y: 'price',
  //       color: 'symbol',
  //       key: 'symbol',
  //     },
  //     scale: { x: { padding: 0 } },
  //     style: { radius: 10 },
  //     legend: { color: { layout: { justifyContent: 'center' } } },
  //     axis: { y: false },
  //   };
  // }
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const StorytellingStorytellingStocksKeyframeChart: React.FC = () => {
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
      <h2 className="text-xl font-semibold mb-2">S</h2>
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

export default StorytellingStorytellingStocksKeyframeChart;
