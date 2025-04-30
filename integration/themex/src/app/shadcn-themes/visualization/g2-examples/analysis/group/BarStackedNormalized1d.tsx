'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-stacked-normalized-1d.ts
  ================================================================================
  // /**
  //  * A recreation of one of these demos: https://observablehq.com/@observablehq/plot-group?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 120,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/penguins.json',
  //   })
  //   .transform({ type: 'groupColor', y: 'count' })
  //   .transform({ type: 'stackY' })
  //   .transform({ type: 'normalizeY' })
  //   .axis('y', { labelFormatter: '.0%' })
  //   .encode('color', 'sex')
  //   .label({ text: 'sex', position: 'inside' })
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
  "height": 120,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "color": "sex"
  },
  "transform": [
    {
      "type": "groupColor",
      "y": "count"
    },
    {
      "type": "stackY"
    },
    {
      "type": "normalizeY"
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: { text: 'sex', position: 'inside' } */
    }
  ],
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const AnalysisGroupBarStackedNormalized1dChart: React.FC = () => {
    
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

export default AnalysisGroupBarStackedNormalized1dChart;
