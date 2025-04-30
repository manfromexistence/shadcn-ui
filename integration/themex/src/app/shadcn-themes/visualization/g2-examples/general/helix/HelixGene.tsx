'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/helix/demo/helix-gene.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // // 模拟数据
  // const data = [];
  // const groups = ['WT', 'KO'];
  // const hours = 72;
  // const baseValues = {
  //   WT: 2.0,
  //   KO: 2.3,
  // };
  // 
  // for (let i = 0; i < hours; i++) {
  //   const time = `${i}h`;
  //   groups.forEach((group) => {
  //     const fluctuation = Math.random() * 0.4 - 0.2;
  //     data.push({
  //       time,
  //       group,
  //       logFPKM: baseValues[group] + Math.sin(i / 10) * 0.3 + fluctuation, // 模拟趋势变化
  //     });
  //   });
  // }
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 600,
  //   padding: [50, 50, 50, 50],
  // });
  // 
  // chart.data(data);
  // 
  // chart.coordinate({
  //   type: 'helix',
  //   startAngle: 0.2 * Math.PI,
  //   endAngle: 6.5 * Math.PI,
  //   innerRadius: 0.1,
  // });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'group')
  //   .encode('color', 'logFPKM')
  //   .scale('color', {
  //     type: 'linear',
  //     range: ['#fff', '#ec4839'],
  //   })
  //   .tooltip({
  //     title: 'time',
  //     items: [
  //       { field: 'group', name: '组别' },
  //       {
  //         field: 'logFPKM',
  //         name: 'log(FPKM)',
  //         valueFormatter: (value) => value.toFixed(2),
  //       },
  //     ],
  //   })
  //   .animate('enter', {
  //     type: 'fadeIn',
  //     duration: 1000,
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
  "height": 600,
  "padding": [
    50,
    50,
    50,
    50
  ],
  "type": "random",
  "dataComment": /* TODO: Data assigned from variable/value: data - Handle this manually */,
  "encode": {
    "x": "time",
    "y": "group",
    "color": "logFPKM"
  },
  "scale": {
    "color": {
      "comment": /* TODO: Manually convert scale options: {\n    type: 'linear',\n    range: ['#fff', '#ec4839'],\n  } */
    }
  },
  "coordinate": {
    "comment": /* TODO: Manually convert coordinate options: {\n  type: 'helix',\n  startAngle: 0.2 * Math.PI,\n  endAngle: 6.5 * Math.PI,\n  innerRadius: 0.1,\n} */
  }
};

const GeneralHelixHelixGeneChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* data */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

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

export default GeneralHelixHelixGeneChart;
