'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/hierarchy/demo/treemap-drill-down.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 600,
  //   height: 400,
  // });
  // 
  // const data = {
  //   name: '商品',
  //   children: [
  //     {
  //       name: '文具',
  //       children: [
  //         {
  //           name: '笔',
  //           children: [
  //             { name: '铅笔', value: 430 },
  //             { name: '圆珠笔', value: 530 },
  //             { name: '钢笔', value: 80 },
  //             { name: '水彩', value: 130 },
  //           ],
  //         },
  //         { name: '铅笔盒', value: 30 },
  //         { name: '直尺', value: 60 },
  //         { name: '笔记本', value: 160 },
  //         { name: '其他', value: 80 },
  //       ],
  //     },
  //     {
  //       name: '零食',
  //       children: [
  //         { name: '饼干', value: 280 },
  //         { name: '辣条', value: 150 },
  //         { name: '牛奶糖', value: 210 },
  //         { name: '泡泡糖', value: 80 },
  //         {
  //           name: '饮品',
  //           children: [
  //             { name: '可乐', value: 122 },
  //             { name: '矿泉水', value: 244 },
  //             { name: '果汁', value: 49 },
  //             { name: '牛奶', value: 82 },
  //           ],
  //         },
  //         { name: '其他', value: 40 },
  //       ],
  //     },
  //     { name: '其他', value: 450 },
  //   ],
  // };
  // 
  // chart
  //   .treemap()
  //   .data({
  //     value: data,
  //   })
  //   .layout({
  //     tile: 'treemapBinary',
  //     paddingInner: 5,
  //   })
  //   .encode('value', 'value')
  //   .interaction({
  //     treemapDrillDown: {
  //       breadCrumbY: 12,
  //       activeFill: '#873bf4',
  //     },
  //   })
  //   .style({
  //     labelFill: '#000',
  //     labelStroke: '#fff',
  //     labelLineWidth: 1.5,
  //     labelFontSize: 14,
  //     labelPosition: 'top-left',
  //     labelDx: 5,
  //     labelDy: 5,
  //   });
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
  "width": 600,
  "height": 400,
  "type": "treemap",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "value": "value"
  }
};

const GraphHierarchyTreemapDrillDownChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">H</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphHierarchyTreemapDrillDownChart;
