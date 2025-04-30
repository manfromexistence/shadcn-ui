'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/horizontal-bar-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //     format: 'csv',
  //   })
  //   .transform({ type: 'sortX', reverse: true })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .axis('y', { labelFormatter: '.0%' })
  //   .label({
  //     text: 'frequency',
  //     formatter: '.1%',
  //     textAlign: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),
  //     fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),
  //     dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
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
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "letter",
    "y": "frequency"
  },
  "transform": [
    {
      "type": "sortX",
      "reverse": true
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    text: 'frequency',\n    formatter: '.1%',\n    textAlign: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),\n    fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),\n    dx: (d) => (+d.frequency > 0.008 ? -5 : 5),\n  } */
  ],
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GeneralIntervalBarChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarChart;
