// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
  "width": 900,
  "height": 1000,
  "type": "interval",
  "encode": {
    "x": "civilization",
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
    null
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
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarDualAxesChart;
