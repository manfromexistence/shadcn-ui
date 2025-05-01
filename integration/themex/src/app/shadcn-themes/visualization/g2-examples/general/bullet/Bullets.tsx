// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/bullet/demo/bullets.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const data = [
  //   {
  //     title: '5🌟',
  //     ranges: 100,
  //     measures: 40,
  //     target: 85,
  //   },
  //   {
  //     title: '4🌟',
  //     ranges: 100,
  //     measures: 80,
  //     target: 40,
  //   },
  //   {
  //     title: '3🌟',
  //     ranges: 100,
  //     measures: 20,
  //     target: 22,
  //   },
  //   {
  //     title: '0-2🌟',
  //     ranges: 100,
  //     measures: 30,
  //     target: 10,
  //   },
  // ];
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart.data(data);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'title')
  //   .encode('y', 'ranges')
  //   .encode('color', '#f0efff')
  //   .style('maxWidth', 30)
  //   .axis({
  //     y: {
  //       grid: true,
  //       gridLineWidth: 2,
  //     },
  //     x: {
  //       title: false,
  //     },
  //   });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'title')
  //   .encode('y', 'measures')
  //   .encode('color', '#5B8FF9')
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
  //   .encode('size', 15)
  //   .encode('x', 'title')
  //   .encode('y', 'target')
  //   .encode('shape', 'line')
  //   .encode('color', 'red')
  //   .tooltip({
  //     title: false,
  //     items: [{ channel: 'y' }],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": [
    {
      "title": "5🌟",
      "ranges": 100,
      "measures": 40,
      "target": 85
    },
    {
      "title": "4🌟",
      "ranges": 100,
      "measures": 80,
      "target": 40
    },
    {
      "title": "3🌟",
      "ranges": 100,
      "measures": 20,
      "target": 22
    },
    {
      "title": "0-2🌟",
      "ranges": 100,
      "measures": 30,
      "target": 10
    }
  ],
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
  }
};

const GeneralBulletBulletsChart: React.FC = () => {
    
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

export default GeneralBulletBulletsChart;
