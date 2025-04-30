// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/label/demo/contrastReverse.ts
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
  //     value: 'https://assets.antv.antgroup.com/g2/alphabet.json',
  //   })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .encode('color', 'letter')
  //   .label({
  //     text: 'frequency',
  //     position: 'inside',
  //     formatter: '.0%',
  //     fill: '#000',
  //     transform: [
  //       {
  //         type: 'contrastReverse',
  //         threshold: 21,
  //         palette: ['#000', '#fff'], // Use full color string to avoid screenshot error.
  //       },
  //     ],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "letter",
    "y": "frequency",
    "color": "letter"
  },
  "labels": [
    null
  ]
};

const ComponentLabelContrastReverseChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLabelContrastReverseChart;
