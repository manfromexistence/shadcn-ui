// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-multi-measure.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_grouped_repeated.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/movies.json',
  // });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .axis('x', { labelTransform: 'rotate(90)' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'Worldwide Gross')
  //   .encode('series', () => 'Worldwide Gross')
  //   .encode('color', () => 'Worldwide Gross')
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'US Gross')
  //   .encode('color', () => 'US Gross')
  //   .encode('series', () => 'US Gross')
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
    "value": "https://assets.antv.antgroup.com/g2/movies.json"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    },
    {
      "type": "groupX",
      "y": "sum"
    }
  ],
  "tooltip": [
    null,
    null
  ]
};

const AnalysisGroupBarMultiMeasureChart: React.FC = () => {
    
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

export default AnalysisGroupBarMultiMeasureChart;
