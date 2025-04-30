'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/radial-stacked.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { State: 'WY', 小于5岁: 25635, '5至13岁': 1890, '14至17岁': 9314 },
  //   { State: 'DC', 小于5岁: 30352, '5至13岁': 20439, '14至17岁': 10225 },
  //   { State: 'VT', 小于5岁: 38253, '5至13岁': 42538, '14至17岁': 15757 },
  //   { State: 'ND', 小于5岁: 51896, '5至13岁': 67358, '14至17岁': 18794 },
  //   { State: 'AK', 小于5岁: 72083, '5至13岁': 85640, '14至17岁': 22153 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'radial' });
  // 
  // chart
  //   .interval()
  //   .data({
  //     value: data,
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: ['小于5岁', '5至13岁', '14至17岁'],
  //         key: '年龄段',
  //         value: '人口数量',
  //         retains: ['State'],
  //       },
  //     ],
  //   })
  //   .encode('x', 'State')
  //   .encode('y', '人口数量')
  //   .encode('color', '年龄段')
  //   .scale('y', { domainMax: 200000 })
  //   .scale('color', { range: ['#6395FA', '#62DAAB', '#657798'] })
  //   .transform({ type: 'stackY' })
  //   .axis({
  //     x: {
  //       title: false,
  //       line: true,
  //     },
  //     y: {
  //       line: true,
  //       grid: true,
  //       gridLineDash: [4, 4],
  //       tickCount: 10,
  //       tickFilter: (datum) => datum != 200000,
  //     },
  //   })
  //   .legend({
  //     color: {
  //       position: 'bottom',
  //       layout: { justifyContent: 'center' },
  //     },
  //   })
  //   .interaction('elementHighlightByX')
  //   .interaction('tooltip', {
  //     shared: true,
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
  "type": "interval",
  "encode": {
    "x": "State",
    "y": "人口数量",
    "color": "年龄段"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {
    "y": {
      "domainMax": 200000
    },
    "color": {
      "range": [
        "#6395FA",
        "#62DAAB",
        "#657798"
      ]
    }
  },
  "coordinate": {
    "type": "radial"
  },
  "interaction": {
    "type": "elementHighlightByX"
  }
};

const GeneralRadialRadialStackedChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRadialRadialStackedChart;
