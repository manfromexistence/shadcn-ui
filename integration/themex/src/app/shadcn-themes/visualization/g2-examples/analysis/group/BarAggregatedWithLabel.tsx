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
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "clarity",
    "y": "price"
  },
  "transform": [
    null
  ],
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "style": {},
  "labels": [
    null
  ]
};

const AnalysisGroupBarAggregatedWithLabelChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisGroupBarAggregatedWithLabelChart;
