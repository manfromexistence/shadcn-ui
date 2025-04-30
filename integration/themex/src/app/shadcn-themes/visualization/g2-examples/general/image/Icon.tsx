'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "image",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "x",
    "y": "y",
    "size": "y",
    "src": /* TODO: Convert encode function/expression: ({ type } */
  },
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
  },
  "legend": {
    "size": false
  }
};

const GeneralImageIconChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralImageIconChart;
