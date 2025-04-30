// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/graphic/demo/area.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/area_gradient.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 350,
  // });
  // 
  // chart.options({
  //   type: 'view',
  //   autoFit: true,
  //   data: {
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/stocks.json',
  //     transform: [{ type: 'filter', callback: (d) => d.symbol === 'GOOG' }],
  //   },
  //   children: [
  //     {
  //       type: 'area',
  //       encode: { x: (d) => new Date(d.date), y: 'price' },
  //       style: { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' },
  //       // style: { fill: "linear-gradient(270deg, #ffffff 0%, #7ec2f3 50%, #1890ff 100%)" },
  //     },
  //   ],
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 350,
  "type": "render"
};

const StyleGraphicAreaChart: React.FC = () => {
    
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

export default StyleGraphicAreaChart;
