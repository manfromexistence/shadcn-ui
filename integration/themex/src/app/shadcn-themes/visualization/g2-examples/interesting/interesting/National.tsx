// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interesting/interesting/demo/national.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const SIZE = 256;
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: SIZE,
  //   height: SIZE,
  // });
  // 
  // const FLAG_TEMPLATE = [
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*FpxcQI7WEusAAAAAAAAAAAAADmJ7AQ/original',
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*rx6ST7V6cA0AAAAAAAAAAAAADmJ7AQ/original',
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7rKcTJiP1rMAAAAAAAAAAAAADmJ7AQ/original',
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_GUISa64kgYAAAAAAAAAAAAADmJ7AQ/original',
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Wwy8TJAoCeUAAAAAAAAAAAAADmJ7AQ/original',
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DphFRIpOYWQAAAAAAAAAAAAADmJ7AQ/original',
  // ];
  // 
  // // 换成你自己的，可以使用远程 CDN 地址，也可以使用 Base64 编码
  // const MY_PHOTO =
  //   'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*vYY6RrxEWKwAAAAAAAAAAAAADmJ7AQ/original';
  // 
  // chart
  //   .image()
  //   .data([{ x: 0.5, y: 0.5 }])
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('src', MY_PHOTO)
  //   .encode('size', SIZE)
  //   .axis(false)
  //   .tooltip(false);
  // 
  // chart
  //   .image()
  //   .data([{ x: 0.5, y: 0.5 }])
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode(
  //     'src',
  //     () => FLAG_TEMPLATE[Math.floor(Math.random() * FLAG_TEMPLATE.length)],
  //   )
  //   .encode('size', SIZE)
  //   .axis(false)
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "image",
  "data": [
    {
      "x": 0.5,
      "y": 0.5
    }
  ],
  "axis": false,
  "tooltip": false
};

const InterestingInterestingNationalChart: React.FC = () => {
    
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

export default InterestingInterestingNationalChart;
