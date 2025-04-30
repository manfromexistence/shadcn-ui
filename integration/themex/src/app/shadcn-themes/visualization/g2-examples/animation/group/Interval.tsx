'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/group/demo/interval.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const fruits = [
  //   { type: 'Apple', year: '2001', value: 260 },
  //   { type: 'Orange', year: '2001', value: 100 },
  //   { type: 'Banana', year: '2001', value: 90 },
  //   { type: 'Apple', year: '2002', value: 210 },
  //   { type: 'Orange', year: '2002', value: 150 },
  //   { type: 'Banana', year: '2002', value: 30 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .interval()
  //   .data(fruits)
  //   .transform({ type: 'stackEnter', groupBy: 'color' })
  //   .transform({ type: 'dodgeX' })
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('color', 'type')
  //   .encode('color', 'type')
  //   .animate('enter', { duration: 500 });
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
  "type": "interval",
  "encode": {
    "x": "year",
    "y": "value",
    "color": "type"
  },
  "transform": [
    {
      "type": "stackEnter",
      "groupBy": "color"
    },
    {
      "type": "dodgeX"
    }
  ]
};

const AnimationGroupIntervalChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationGroupIntervalChart;
