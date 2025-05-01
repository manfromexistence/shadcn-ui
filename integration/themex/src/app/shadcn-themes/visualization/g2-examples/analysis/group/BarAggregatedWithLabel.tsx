// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-aggregated-with-label.ts
  ================================================================================
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
  //     value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json',
  //   })
  //   .transform({
  //     type: 'groupX',
  //     y: 'max',
  //   })
  //   .encode('x', 'clarity')
  //   .encode('y', 'price')
  //   .axis('y', { labelFormatter: '~s' })
  //   .label({ text: (d, i, data, { channel }) => channel.y[i] })
  //   .style('fill', (d, i, data, { channel }) =>
  //     channel.y[i] < 11700 ? '#E49361' : '#4787F7',
  //   )
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
    "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json"
  },
  "transform": [
    {}
  ],
  "style": {},
  "labels": [
    null
  ],
  "tooltip": [
    null
  ]
};

const AnalysisGroupBarAggregatedWithLabelChart: React.FC = () => {
    
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

export default AnalysisGroupBarAggregatedWithLabelChart;
