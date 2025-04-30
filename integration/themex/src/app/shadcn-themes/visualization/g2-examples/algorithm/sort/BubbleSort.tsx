'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// Potential external libraries detected:
// // Chart animation detected - G2 animation API will be used
// TODO: Ensure these libraries are installed (e.g., npm install d3 @types/d3) and imported correctly.

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/algorithm/sort/demo/bubble-sort.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [43, 2, 5, 24, 53, 78, 82, 63, 49, 6];
  // 
  // function* bubbleSort(arr) {
  //   const n = arr.length;
  //   for (let i = 0; i < n - 1; i++) {
  //     for (let j = 0; j <= n - i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       }
  //       yield arr.map((a, i) => ({
  //         value: a,
  //         swap: i === j || i === j + 1,
  //       }));
  //     }
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
  // for (const frame of bubbleSort(data)) {
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

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "timingKeyframe",
  "encode": {
    "x": "index",
    "y": "value",
    "key": "value",
    "color": "swap"
  }
};

const AlgorithmSortBubbleSortChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AlgorithmSortBubbleSortChart;
