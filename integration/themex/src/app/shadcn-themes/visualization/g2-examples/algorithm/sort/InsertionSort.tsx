'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




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

const AlgorithmSortInsertionSortChart: React.FC = () => {
    
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

export default AlgorithmSortInsertionSortChart;
