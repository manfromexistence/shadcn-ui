// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/gauge/demo/gauge-custom-shape.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Path } from '@antv/g';
  // 
  // const chart = new Chart({ container: 'container' });
  // 
  // function getOrigin(points) {
  //   if (points.length === 1) return points[0];
  //   const [[x0, y0, z0 = 0], [x2, y2, z2 = 0]] = points;
  //   return [(x0 + x2) / 2, (y0 + y2) / 2, (z0 + z2) / 2];
  // }
  // // 自定义指针形状
  // const customShape = (style) => {
  //   return (points, value, coordinate, theme) => {
  //     // 获取几何点中心坐标
  //     const [x, y] = getOrigin(points);
  //     const [cx, cy] = coordinate.getCenter();
  //     // 计算指针方向角度
  //     const angle = Math.atan2(y - cy, x - cx);
  //     const length = 100; // 指针长度
  //     const width = 8; // 指针底部宽度
  //     // 构造指针三角形路径
  //     return new Path({
  //       style: {
  //         d: [
  //           ['M', cx + Math.cos(angle) * length, cy + Math.sin(angle) * length], // 顶点
  //           [
  //             'L',
  //             cx + Math.cos(angle + Math.PI / 2) * width,
  //             cy + Math.sin(angle + Math.PI / 2) * width,
  //           ], // 底部左点
  //           [
  //             'L',
  //             cx + Math.cos(angle - Math.PI / 2) * width,
  //             cy + Math.sin(angle - Math.PI / 2) * width,
  //           ], // 底部右点
  //           ['Z'], // 闭合路径
  //         ],
  //         fill: '#30BF78', // 填充色
  //       },
  //     });
  //   };
  // };
  // 
  // chart.options({
  //   type: 'gauge',
  //   data: {
  //     value: {
  //       target: 159,
  //       total: 424,
  //       name: 'score',
  //     },
  //   },
  //   style: {
  //     pointerShape: customShape,
  //     pinShape: false,
  //     textContent: (target, total) => {
  //       return `得分：${target}\n占比：${(target / total) * 100}%`;
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
  "type": "getCenter"
};

const GeneralGaugeGaugeCustomShapeChart: React.FC = () => {
    
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

export default GeneralGaugeGaugeCustomShapeChart;
