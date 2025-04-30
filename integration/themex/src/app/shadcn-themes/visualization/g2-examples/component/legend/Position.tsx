// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/position.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 350,
  // });
  // 
  // chart.options({
  //   type: 'interval',
  //   data: [
  //     { genre: 'Sports', sold: 50 },
  //     { genre: 'Strategy', sold: 115 },
  //     { genre: 'Action', sold: 120 },
  //     { genre: 'Shooter', sold: 350 },
  //     { genre: 'Other', sold: 150 },
  //   ],
  //   encode: { x: 'genre', y: 'sold', color: 'genre' },
  //   legend: {
  //     color: {
  //       // 图例显示位置 可选 top ｜ bottom | right | left
  //       position: 'top',
  //       layout: {
  //         // 主轴对齐方式 可选 flex-start | flex-end | center
  //         justifyContent: 'flex-start',
  //         // 交叉轴对齐方式 可选 flex-start | flex-end | center
  //         alignItems: 'flex-start',
  //         // 主轴方向 可选 row | column
  //         flexDirection: 'row',
  //       },
  //     },
  //   },
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

const ComponentLegendPositionChart: React.FC = () => {
    
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

export default ComponentLegendPositionChart;
