// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/shape/demo/line-badge.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   insetTop: 50,
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: ['blockchain', 'nlp'],
  //         key: 'type',
  //         value: 'value',
  //       },
  //     ],
  //   })
  //   .axis('x', { labelAutoHide: 'greedy' });
  // 
  // chart
  //   .line()
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'value')
  //   .encode('color', 'type');
  // 
  // chart
  //   .text()
  //   .data([new Date('2017-12-17'), 100])
  //   .encode('shape', 'badge')
  //   .style({
  //     text: '100',
  //     dy: -1,
  //     markerSize: 24,
  //     markerFill: '#6395FA',
  //     markerFillOpacity: 0.55,
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json",
    "transform": [
      {
        "type": "fold",
        "fields": [
          "blockchain",
          "nlp"
        ],
        "key": "type",
        "value": "value"
      }
    ]
  },
  "style": {}
};

const AnnotationShapeLineBadgeChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationShapeLineBadgeChart;
