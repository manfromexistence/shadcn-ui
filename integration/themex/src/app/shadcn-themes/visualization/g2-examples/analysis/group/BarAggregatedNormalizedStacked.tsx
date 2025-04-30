'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-aggregated-normalized-stacked.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/stacked_bar_h_normalized_labeled.html
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
  //       'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.year === 2000,
  //       },
  //     ],
  //   })
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .transform({ type: 'stackY' })
  //   .transform({ type: 'normalizeY' })
  //   .encode('x', 'age')
  //   .encode('y', 'people')
  //   .encode('color', 'sex')
  //   .scale('color', { type: 'ordinal', range: ['#ca8861', '#675193'] })
  //   .axis('y', { labelFormatter: '.0%' })
  //   .label({ text: 'people', position: 'inside', fill: 'white' })
  //   .tooltip({ channel: 'y', valueFormatter: '.0%' });
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
    "x": "age",
    "y": "people",
    "color": "sex"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    },
    {
      "type": "stackY"
    },
    {
      "type": "normalizeY"
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
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
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

const AnalysisGroupBarAggregatedNormalizedStackedChart: React.FC = () => {
    
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

export default AnalysisGroupBarAggregatedNormalizedStackedChart;
