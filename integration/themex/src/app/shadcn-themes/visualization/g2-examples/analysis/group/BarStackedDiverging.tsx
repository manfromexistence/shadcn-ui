'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-stacked-diverging.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_diverging_stack_transform.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const types = [
  //   'Strongly disagree',
  //   'Disagree',
  //   'Neither agree nor disagree',
  //   'Agree',
  //   'Strongly agree',
  // ];
  // const colors = ['#c30d24', '#f3a583', '#cccccc', '#94c6da', '#1770ab'];
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/82c97016-0f99-433b-ab21-9ecf14244610.csv',
  //   })
  //   .transform({ type: 'stackY' })
  //   .encode('x', 'question')
  //   .encode('color', 'type')
  //   .encode('y', (d) =>
  //     d.type === 'Disagree' || d.type === 'Strongly disagree'
  //       ? -d.percentage
  //       : d.type === 'Neither agree nor disagree'
  //       ? -d.percentage / 2
  //       : +d.percentage,
  //   )
  //   .scale('y', { nice: true })
  //   .scale('color', { domain: types, range: colors });
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
    "x": "question",
    "color": "type"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {
    "y": {
      "nice": true
    }
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const AnalysisGroupBarStackedDivergingChart: React.FC = () => {
    
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

export default AnalysisGroupBarStackedDivergingChart;
