'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/label/demo/overflowHide.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 800,
  //   autoFit: false,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/alphabet.json',
  //   })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .encode('color', 'steelblue')
  //   .axis('y', { labelFormatter: '.0%' })
  //   .label({
  //     text: 'frequency',
  //     position: 'inside',
  //     formatter: '.0%',
  //     transform: [{ type: 'overflowHide' }],
  //   });
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
  "width": 800,
  "autoFit": false,
  "type": "interval",
  "encode": {
    "x": "letter",
    "y": "frequency",
    "color": "steelblue"
  },
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "labels": [
    null
  ]
};

const ComponentLabelOverflowHideChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLabelOverflowHideChart;
