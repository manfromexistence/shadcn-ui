// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/bullet/demo/bullet-datas.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const colors = {
  //   ranges: ['#bfeec8', '#FFe0b0', '#FFbcb8'],
  //   measures: ['#61DDAA', '#5B8FF9'],
  //   target: '#39a3f4',
  // };
  // 
  // const data = [
  //   {
  //     title: '满意度',
  //     ranges: 100,
  //     measures: 60,
  //     target: 90,
  //   },
  //   {
  //     title: '满意度',
  //     ranges: 80,
  //     measures: 10,
  //   },
  //   {
  //     title: '满意度',
  //     ranges: 30,
  //   },
  // ];
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .data(data)
  //   .scale('color', {
  //     range: [colors['ranges'], colors['measures'], colors['target']].flat(),
  //   })
  //   .legend('color', {
  //     itemMarker: (d) => {
  //       return d === '目标' ? 'line' : 'square';
  //     },
  //   });
  // 
  // chart
  //   .interval()
  //   .axis({
  //     y: {
  //       grid: true,
  //       gridLineWidth: 2,
  //     },
  //     x: {
  //       title: false,
  //     },
  //   })
  //   .encode('x', 'title')
  //   .encode('y', 'ranges')
  //   .encode('color', (d, i) => ['优', '良', '差'][i])
  //   .style('maxWidth', 30);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'title')
  //   .encode('y', 'measures')
  //   .encode('color', (d, i) => ['下半年', '上半年'][i] || '下半年')
  //   .style('maxWidth', 20)
  //   .label({
  //     text: 'measures',
  //     position: 'right',
  //     textAlign: 'left',
  //     dx: 5,
  //   });
  // 
  // chart
  //   .point()
  //   .encode('x', 'title')
  //   .encode('y', 'target')
  //   .encode('shape', 'line')
  //   .encode('color', () => '目标')
  //   .encode('size', 8)
  //   .style('lineWidth', 1)
  //   .tooltip({
  //     title: false,
  //     items: [{ channel: 'y' }],
  //   });
  // 
  // chart.interaction('tooltip', { shared: true });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "scale": {},
  "style": {},
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
  },
  "interaction": {}
};

const GeneralBulletBulletDatasChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralBulletBulletDatasChart;
