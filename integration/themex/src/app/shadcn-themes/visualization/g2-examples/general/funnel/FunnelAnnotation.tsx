'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/funnel/demo/funnel-annotation.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const r = (start, end) => `${(((start - end) / start) * 100).toFixed(2)} %`;
  // 
  // const data = [
  //   { text: 'A', value: 12000 },
  //   { text: 'B', value: 9800 },
  //   { text: 'C', value: 6789 },
  //   { text: 'D', value: 4569 },
  // ];
  // const encodeX = 'text';
  // const encodeY = 'value';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingRight: 60,
  // });
  // 
  // chart.coordinate({
  //   transform: [{ type: 'transpose' }],
  // });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .transform({ type: 'symmetryY' })
  //   .axis(false)
  //   .legend(false)
  //   .encode('x', encodeX)
  //   .encode('y', encodeY)
  //   .encode('color', encodeX)
  //   .encode('shape', 'funnel')
  //   .scale('x', { paddingOuter: 0, paddingInner: 0 })
  //   .label({
  //     text: (d) => `${d[encodeX]} ${d[encodeY]}`,
  //     position: 'inside',
  //     fontSize: 20,
  //   })
  //   .label({
  //     text: '',
  //     // Use div to mock a line.
  //     render: (d, data, i) =>
  //       i !== 0
  //         ? `<div style="height:1px;width:30px;background:#aaa;margin:0 20px;"></div>`
  //         : '',
  //     position: 'top-right',
  //   })
  //   .label({
  //     text: (d, i) => (i !== 0 ? '转换率' : ''),
  //     position: 'top-right',
  //     textAlign: 'left',
  //     textBaseline: 'middle',
  //     fill: '#aaa',
  //     dx: 60,
  //   })
  //   .label({
  //     text: (d, i, data) =>
  //       i !== 0 ? r(data[i - 1][encodeY], data[i][encodeY]) : '',
  //     position: 'top-right',
  //     textAlign: 'left',
  //     textBaseline: 'middle',
  //     dx: 60,
  //     dy: 15,
  //   });
  // 
  // chart
  //   .connector()
  //   .data([
  //     {
  //       startX: data[0][encodeX],
  //       startY: data[data.length - 1][encodeX],
  //       endX: 0,
  //       endY: (data[0][encodeY] - data[data.length - 1][encodeY]) / 2,
  //     },
  //   ])
  //   .encode('x', 'startX')
  //   .encode('x1', 'startY')
  //   .encode('y', 'endX')
  //   .encode('y1', 'endY')
  //   .label({
  //     text: '转换率',
  //     position: 'left',
  //     textAlign: 'start',
  //     textBaseline: 'middle',
  //     fill: '#aaa',
  //     dx: 10,
  //   })
  //   .label({
  //     text: r(data[0][encodeY], data[data.length - 1][encodeY]),
  //     position: 'left',
  //     textAlign: 'start',
  //     dy: 15,
  //     dx: 10,
  //     fill: '#000',
  //   })
  //   .style('stroke', '#aaa')
  //   .style('markerEnd', false)
  //   .style('connectLength1', -12)
  //   .style('offset2', -20);
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
  "paddingRight": 60,
  "type": "interval",
  "encode": {
    "x": "startX",
    "y": "endX",
    "shape": "funnel",
    "x1": "startY",
    "y1": "endY"
  },
  "transform": [
    {
      "type": "symmetryY"
    }
  ],
  "scale": {
    "x": {
      "paddingOuter": 0,
      "paddingInner": 0
    }
  },
  "style": {
    "stroke": "#aaa"
  },
  "labels": [
    null,
    null,
    null,
    null,
    null,
    null
  ]
};

const GeneralFunnelFunnelAnnotationChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralFunnelFunnelAnnotationChart;
