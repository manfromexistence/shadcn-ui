// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "height": 120,
  "type": "interval",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/penguins.json"
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
  "labels": [
    null
  ],
  "tooltip": [
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

const AnalysisGroupBarStackedNormalized1dChart: React.FC = () => {
    
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

export default AnalysisGroupBarStackedNormalized1dChart;
