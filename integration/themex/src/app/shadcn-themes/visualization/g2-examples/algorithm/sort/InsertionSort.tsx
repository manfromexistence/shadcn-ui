'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
// External libraries:
// Chart animation detected - G2 animation API will be used

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/algorithm/sort/demo/insertion-sort.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];
  // 
  // function* insertionSort(arr) {
  //   const len = arr.length;
  //   let preIndex, current;
  //   for (let i = 1; i < len; i++) {
  //     preIndex = i - 1;
  //     current = arr[i];
  //     while (preIndex >= 0 && arr[preIndex] > current) {
  //       arr[preIndex + 1] = arr[preIndex];
  //       preIndex--;
  //     }
  //     arr[preIndex + 1] = current;
  //     yield arr.map((a, index) => ({
  //       value: a,
  //       swap: index === preIndex + 1 || index === i,
  //     }));
  //   }
  //   return arr;
  // }
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const keyframe = chart.timingKeyframe();
  // 
  // for (const frame of insertionSort(data)) {
  //   keyframe
  //     .interval()
  //     .data(frame.map((datum, index) => ({ index, ...datum })))
  //     .encode('x', 'index')
  //     .encode('y', 'value')
  //     .encode('key', 'value')
  //     .encode('color', 'swap');
  // }
  // 
  // chart.render();
  // 
  ================================================================================
*/

// This example contains animations/algorithms that require direct chart manipulation
// A standard declarative G2Chart component won't work for this type of example

const AlgorithmSortInsertionSortChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // animation frame interval in ms
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Data and algorithm definitions
  const data = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];

  function* insertionSort(arr: number[]): Generator<Array<{ value: number; swap: boolean }>> {
    const len = arr.length;
    let preIndex: number, current: number;
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

  // Function to render chart with current data state
  const renderCurrentState = (frameData: Array<{ value: number; swap: boolean }>) => {
    if (!chartRef.current) return;

    // Clear previous chart content
    chartRef.current.options({
      type: 'interval',
      data: frameData.map((datum, index) => ({ index, ...datum })),
      encode: {
        x: 'index',
        y: 'value',
        key: 'value',
        color: 'swap',
      },
      axis: {
        x: { title: 'Index' },
        y: { title: 'Value' },
      },
      legend: false,
      tooltip: true,
      animate: true,
    });
    chartRef.current.render();
  };

  // Cleanup on unmount
  useEffect(() => {
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

  // Setup chart when component mounts
  useEffect(() => {
    if (!containerRef.current) return;
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
    chartRef.current = new Chart({
      container: containerRef.current as HTMLElement,
      autoFit: true,
      height: 400,
    });
    renderCurrentState(data.map((value) => ({ value, swap: false })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  // Play/pause the animation
  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
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
      setIsPlaying(false);
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
      <h2 className="text-xl font-semibold mb-2">Insertion Sort</h2>
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
          <label htmlFor="speed" className="text-sm">
            Speed:
          </label>
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

export default AlgorithmSortInsertionSortChart;
