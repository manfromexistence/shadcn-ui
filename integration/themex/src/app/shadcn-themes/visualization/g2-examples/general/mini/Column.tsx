// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/mini/demo/column.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
  //   546, 983, 340, 539, 243, 226, 192,
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 480,
  //   height: 80,
  // });
  // 
  // chart.data(data);
  // 
  // chart
  //   .interval()
  //   .encode('x', (_, idx) => idx)
  //   .encode('y', (d) => d)
  //   .axis(false);
  // 
  // chart
  //   .lineY()
  //   .data([700])
  //   .style('arrow', true)
  //   .style('stroke', 'red')
  //   .style('lineDash', [2, 2])
  //   .style('arrow', true)
  //   .label({
  //     text: 'value = 700',
  //     position: 'right',
  //     dx: -10,
  //     textBaseline: 'bottom',
  //   });
  // 
  // chart.interaction('tooltip', {
  //   render: (e, { title, items }) => items[0].value,
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "width": 480,
  "height": 80,
  "type": "interval",
  "data": [
    700
  ],
  "encode": {},
  "style": {
    "stroke": "red"
  },
  "labels": [
    null
  ],
  "interaction": {
    "type": "tooltip"
  }
};

const GeneralMiniColumnChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">M</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralMiniColumnChart;
