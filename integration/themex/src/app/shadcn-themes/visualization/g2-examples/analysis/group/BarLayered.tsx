'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "age",
    "y": "people",
    "color": "sex"
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
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "style": {
    "fillOpacity": /* TODO: Convert style value/expression: 0.7 */
  }
};

const AnalysisGroupBarLayeredChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisGroupBarLayeredChart;
