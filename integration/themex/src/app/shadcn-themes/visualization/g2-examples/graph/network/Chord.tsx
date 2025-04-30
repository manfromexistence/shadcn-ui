// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/network/demo/chord.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { schemeTableau10 } from 'd3-scale-chromatic';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  //   height: 600,
  // });
  // 
  // const data = [
  //   {
  //     source: '北京',
  //     target: '天津',
  //     value: 30,
  //   },
  //   {
  //     source: '北京',
  //     target: '上海',
  //     value: 80,
  //   },
  //   {
  //     source: '北京',
  //     target: '河北',
  //     value: 46,
  //   },
  //   {
  //     source: '北京',
  //     target: '辽宁',
  //     value: 49,
  //   },
  //   {
  //     source: '北京',
  //     target: '黑龙江',
  //     value: 69,
  //   },
  //   {
  //     source: '北京',
  //     target: '吉林',
  //     value: 19,
  //   },
  //   {
  //     source: '天津',
  //     target: '河北',
  //     value: 62,
  //   },
  //   {
  //     source: '天津',
  //     target: '辽宁',
  //     value: 82,
  //   },
  //   {
  //     source: '天津',
  //     target: '上海',
  //     value: 16,
  //   },
  //   {
  //     source: '上海',
  //     target: '黑龙江',
  //     value: 16,
  //   },
  //   {
  //     source: '河北',
  //     target: '黑龙江',
  //     value: 76,
  //   },
  //   {
  //     source: '河北',
  //     target: '内蒙古',
  //     value: 24,
  //   },
  //   {
  //     source: '内蒙古',
  //     target: '北京',
  //     value: 32,
  //   },
  // ];
  // 
  // chart
  //   .chord()
  //   .data({
  //     value: { links: data },
  //   })
  //   .layout({
  //     nodeWidthRatio: 0.05,
  //   })
  //   .scale('color', { range: schemeTableau10 })
  //   .style('labelFontSize', 15)
  //   .style('linkFillOpacity', 0.6);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "width": 900,
  "height": 600,
  "type": "chord",
  "scale": {},
  "style": {}
};

const GraphNetworkChordChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">图</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphNetworkChordChart;
