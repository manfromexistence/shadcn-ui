'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/box/demo/box.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { x: 'Oceania', y: [1, 9, 16, 22, 24] },
  //   { x: 'East Europe', y: [1, 5, 8, 12, 16] },
  //   { x: 'Australia', y: [1, 8, 12, 19, 26] },
  //   { x: 'South America', y: [2, 8, 12, 21, 28] },
  //   { x: 'North Africa', y: [1, 8, 14, 18, 24] },
  //   { x: 'North America', y: [3, 10, 17, 28, 30] },
  //   { x: 'West Europe', y: [1, 7, 10, 17, 22] },
  //   { x: 'West Africa', y: [1, 6, 8, 13, 16] },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .box()
  //   .data(data)
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', 'x')
  //   .scale('x', { paddingInner: 0.6, paddingOuter: 0.3 })
  //   .scale('y', { zero: true })
  //   .legend(false)
  //   .style('stroke', 'black')
  //   .tooltip([
  //     { name: 'min', channel: 'y' },
  //     { name: 'q1', channel: 'y1' },
  //     { name: 'q2', channel: 'y2' },
  //     { name: 'q3', channel: 'y3' },
  //     { name: 'max', channel: 'y4' },
  //   ]);
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
  "type": "box",
  "encode": {
    "x": "x",
    "y": "y",
    "color": "x"
  },
  "scale": {
    "x": {
      "paddingInner": 0.6,
      "paddingOuter": 0.3
    },
    "y": {
      "zero": true
    }
  },
  "style": {
    "stroke": "black"
  }
};

const GeneralBoxBoxChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralBoxBoxChart;
