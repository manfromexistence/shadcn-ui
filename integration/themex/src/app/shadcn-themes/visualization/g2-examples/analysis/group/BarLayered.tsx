// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-layered.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_layered_transparent.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
  //     format: 'csv',
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.year === 2000,
  //       },
  //     ],
  //   })
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .encode('x', 'age')
  //   .encode('y', 'people')
  //   .encode('color', 'sex')
  //   .scale('color', { type: 'ordinal', range: ['#ca8861', '#675193'] })
  //   .axis('y', { labelFormatter: '~s' })
  //   .style('fillOpacity', 0.7)
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv",
    "format": "csv",
    "transform": [
      {
        "type": "filter"
      }
    ]
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    }
  ],
  "scale": {
    "color": {
      "type": "ordinal",
      "range": [
        "#ca8861",
        "#675193"
      ]
    }
  },
  "style": {},
  "tooltip": [
    null
  ]
};

const AnalysisGroupBarLayeredChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisGroupBarLayeredChart;
