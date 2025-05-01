// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/image/demo/icon.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const dataXO = [
  //   {
  //     x: 0,
  //     y: 0.241,
  //     type: 'x',
  //   },
  //   {
  //     x: 1,
  //     y: 0.367,
  //     type: 'x',
  //   },
  //   {
  //     x: 2,
  //     y: 0.036,
  //     type: 'x',
  //   },
  //   {
  //     x: 3,
  //     y: 0.112,
  //     type: 'o',
  //   },
  //   {
  //     x: 4,
  //     y: 0.382,
  //     type: 'x',
  //   },
  //   {
  //     x: 5,
  //     y: 0.594,
  //     type: 'o',
  //   },
  //   {
  //     x: 6,
  //     y: 0.516,
  //     type: 'o',
  //   },
  //   {
  //     x: 7,
  //     y: 0.634,
  //     type: 'x',
  //   },
  //   {
  //     x: 8,
  //     y: 0.612,
  //     type: 'x',
  //   },
  //   {
  //     x: 9,
  //     y: 0.271,
  //     type: 'o',
  //   },
  //   {
  //     x: 10,
  //     y: 0.241,
  //     type: 'o',
  //   },
  //   {
  //     x: 11,
  //     y: 0.955,
  //     type: 'o',
  //   },
  //   {
  //     x: 12,
  //     y: 0.336,
  //     type: 'x',
  //   },
  //   {
  //     x: 13,
  //     y: 0.307,
  //     type: 'x',
  //   },
  //   {
  //     x: 14,
  //     y: 0.747,
  //     type: 'x',
  //   },
  // ];
  // 
  // const x =
  //   'https://gw.alipayobjects.com/zos/antfincdn/xYAYJ3T969/94c968a3f33eac63c63b87b2f0f6cd97e2db624c65646d6839a5eb4d9c1b5543e922befd040cc5d55deaaa1c7e57c0075a186aa25874490616f2652d11f08592.svg';
  // const o =
  //   'https://gw.alipayobjects.com/zos/antfincdn/JtFvbgBbjN/3917899b7468c526a5bfe18f94d3cf1cfedf7a7c808976870a866d71d4a322af778ffb34fd3c06783be80ff60b10be3279d5dbc82f07a7201f4978130bc8edd6.svg';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .image()
  //   .data(dataXO)
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('size', 'y')
  //   .encode('src', ({ type }) => (type === 'x' ? x : o))
  //   .scale('x', { type: 'band' })
  //   .scale('y', { domain: [0, 1] })
  //   .scale('size', { type: 'linear', range: [12, 32] })
  //   .legend('size', false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "image",
  "scale": {
    "x": {
      "type": "band"
    },
    "y": {
      "domain": [
        0,
        1
      ]
    },
    "size": {
      "type": "linear",
      "range": [
        12,
        32
      ]
    }
  }
};

const GeneralImageIconChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralImageIconChart;
