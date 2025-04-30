'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-dual-axes.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const labelFormatter = (d) => Math.abs(d) + (d < 0 ? 'BC' : d > 0 ? 'AC' : '');
  // const left = (d) => d.end > -1500 && d.start > -3000;
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  //   height: 1000,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/world-history.json',
  //   })
  //   .transform({ type: 'sortX', by: 'y' })
  //   .transform({ type: 'sortColor', by: 'y', reducer: 'min' })
  //   .axis('y', [
  //     {
  //       tickCount: 5,
  //       labelFormatter,
  //       grid: null,
  //       title: null,
  //     },
  //     {
  //       position: 'top',
  //       labelFormatter,
  //       title: null,
  //     },
  //   ])
  //   .axis('x', false)
  //   .encode('x', 'civilization')
  //   .encode('y', ['start', 'end'])
  //   .encode('color', 'region')
  //   .scale('color', { palette: 'set2' })
  //   .label({
  //     text: 'civilization',
  //     position: (d) => (left(d) ? 'left' : 'right'),
  //     textAlign: (d) => (left(d) ? 'end' : 'start'),
  //     dx: (d) => (left(d) ? -5 : 5),
  //     fontSize: 10,
  //   })
  //   .tooltip([
  //     { name: 'start', field: 'start', valueFormatter: labelFormatter },
  //     { name: 'end', field: 'end', valueFormatter: labelFormatter },
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
  "width": 900,
  "height": 1000,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "civilization",
    "y": /* TODO: Convert encode function/expression: ['start', 'end'] */,
    "color": "region"
  },
  "transform": [
    {
      "type": "sortX",
      "by": "y"
    },
    {
      "type": "sortColor",
      "by": "y",
      "reducer": "min"
    }
  ],
  "scale": {
    "color": {
      "palette": "set2"
    }
  },
  "axis": {
    "x": false
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    text: 'civilization',\n    position: (d) => (left(d) ? 'left' : 'right'),\n    textAlign: (d) => (left(d) ? 'end' : 'start'),\n    dx: (d) => (left(d) ? -5 : 5),\n    fontSize: 10,\n  } */
  ],
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GeneralIntervalBarDualAxesChart: React.FC = () => {
    
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

export default GeneralIntervalBarDualAxesChart;
