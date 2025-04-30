'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/range/demo/bar-range.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { city: '北京', 职业: '教师', 平均年收入: 12 },
  //   { city: '北京', 职业: '医生', 平均年收入: 30 },
  //   { city: '北京', 职业: '销售', 平均年收入: 18 },
  //   { city: '北京', 职业: '公务员', 平均年收入: 15 },
  //   { city: '北京', 职业: '律师', 平均年收入: 40 },
  //   { city: '北京', 职业: '程序员', 平均年收入: 35 },
  //   { city: '上海', 职业: '教师', 平均年收入: 13 },
  //   { city: '上海', 职业: '医生', 平均年收入: 29 },
  //   { city: '上海', 职业: '销售', 平均年收入: 19 },
  //   { city: '上海', 职业: '公务员', 平均年收入: 16 },
  //   { city: '上海', 职业: '律师', 平均年收入: 42 },
  //   { city: '上海', 职业: '程序员', 平均年收入: 36 },
  //   { city: '杭州', 职业: '教师', 平均年收入: 11 },
  //   { city: '杭州', 职业: '医生', 平均年收入: 25 },
  //   { city: '杭州', 职业: '销售', 平均年收入: 16 },
  //   { city: '杭州', 职业: '公务员', 平均年收入: 14 },
  //   { city: '杭州', 职业: '律师', 平均年收入: 35 },
  //   { city: '杭州', 职业: '程序员', 平均年收入: 28 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 500,
  // });
  // 
  // chart
  //   .data([
  //     { y: [0, 25], region: '1' },
  //     { y: [25, 50], region: '2' },
  //   ])
  //   .rangeY()
  //   .encode('y', 'y')
  //   .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  //   .style('fillOpacity', 0.4)
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', '职业')
  //   .encode('y', '平均年收入')
  //   .encode('color', 'city')
  //   .transform({ type: 'dodgeX' })
  //   .axis('y', { title: '平均年收入', labelFormatter: (d) => d + '万' })
  //   .tooltip({
  //     items: [
  //       (d) => ({
  //         name: '平均年收入',
  //         value: d.平均年收入 + '万',
  //         channel: 'y',
  //       }),
  //     ],
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
  "height": 500,
  "type": "rangeY",
  "dataComment": /* TODO: Manually define inline data array. Original: [\n    { y: [0, 25], region: '1' },\n    { y: [25, 50], region: '2' },\n  ] */,
  "encode": {
    "y": "平均年收入",
    "x": "职业",
    "color": "city"
  },
  "transform": [
    {
      "type": "dodgeX"
    }
  ],
  "axis": {
    "y": /* TODO: Manually convert axis options: { title: '平均年收入', labelFormatter: (d) => d + '万' } */
  },
  "style": {
    "fill": /* TODO: Convert style value/expression: (d */,
    "fillOpacity": /* TODO: Convert style value/expression: 0.4 */
  }
};

const AnnotationRangeBarRangeChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationRangeBarRangeChart;
