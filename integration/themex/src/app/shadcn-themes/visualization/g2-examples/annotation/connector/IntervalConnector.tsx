'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/connector/demo/interval-connector.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://www.anychart.com/products/anychart/gallery/Waterfall_Charts/Waterfall_Arrows.php
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   insetTop: 30,
  // });
  // 
  // chart
  //   .data([
  //     { x: 'Net Sales', value: 5085000, start: 0, end: 5085000 },
  //     { x: 'Cost of Sales', value: -1250450, start: 5085000, end: 3834550 },
  //     { x: 'Operating Expenses', value: -2350050, start: 3834550, end: 1484500 },
  //     { x: 'Other Income', value: 750000, start: 1484500, end: 2234500 },
  //     { x: 'Extraordinary Gain', value: -230050, start: 2234500, end: 2004450 },
  //     { x: 'Interest Expense', value: -500000, start: 2004450, end: 1504450 },
  //     { x: 'Taxes', value: 490000, start: 1504450, end: 1994450 },
  //     { x: 'Net Income', isTotal: true, value: 1994450, start: 0, end: 1994450 },
  //   ])
  //   .axis('x', { title: false, labelTransform: 'rotate(-90)' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .legend(null);
  // 
  // chart
  //   .link()
  //   .data({ transform: [{ type: 'custom', callback: linkData }] })
  //   .encode('x', ['x1', 'x2'])
  //   .encode('y', 'value')
  //   .style('stroke', '#697474')
  //   .style('lineDash', [4, 2])
  //   .tooltip(false);
  // 
  // chart
  //   .connector()
  //   .data({ transform: [{ type: 'custom', callback: connectorData }] })
  //   .encode('x', ['x1', 'x2'])
  //   .encode('y', ['y1', 'y2'])
  //   .label({
  //     text: (d) => `${d.y2 - d.y1}`,
  //     formatter: '~s',
  //     fontSize: 10,
  //     dy: 2,
  //   })
  //   .style({ stroke: '#697474', offset: 16 })
  //   .tooltip(false);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'x')
  //   .encode('y', ['start', 'end'])
  //   .encode('color', (d, idx) =>
  //     idx === 0 || d.isTotal ? 'D' : d.value > 0 ? 'P' : 'N',
  //   )
  //   .scale('color', {
  //     domain: ['P', 'N', 'D'],
  //     range: ['#64b5f6', '#ef6c00', '#96a6a6'],
  //   })
  //   .encode('size', 24)
  //   .style('stroke', '#697474')
  //   .label({
  //     text: 'value',
  //     formatter: '~s',
  //     position: (d) => (d.value > 0 ? 'top' : 'bottom'),
  //     textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),
  //     fontSize: 10,
  //     dy: (d) => (d.value > 0 ? -4 : 4),
  //   })
  //   .tooltip({ channel: 'y', valueFormatter: '~s' })
  //   .tooltip({ channel: 'y1', valueFormatter: '~s' });
  // 
  // chart.render();
  // 
  // // Process data.
  // function linkData(data) {
  //   return data.reduce((r, d, idx) => {
  //     if (idx > 0) {
  //       return r.concat({
  //         x1: data[idx - 1].x,
  //         x2: d.x,
  //         value: d.isTotal ? d.end : d.start,
  //       });
  //     }
  //     return r;
  //   }, []);
  // }
  // 
  // function connectorData(data) {
  //   return [
  //     {
  //       x1: data[0].x,
  //       y1: data[0].end,
  //       x2: data[data.length - 1].x,
  //       y2: data[data.length - 1].end,
  //     },
  //   ];
  // }
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "insetTop": 30,
  "type": "link",
  "dataComment": /* TODO: Manually define inline data array */,
  "encode": {
    "x": "x",
    "y": /* TODO: Convert encode function/expression: ['start', 'end'] */,
    "color": /* TODO: Convert encode function/expression: (d, idx */,
    "size": /* TODO: Convert encode function/expression: 24 */
  },
  "scale": {
    "color": {
      "comment": /* TODO: Manually convert scale options: {\n    domain: ['P', 'N', 'D'],\n    range: ['#64b5f6', '#ef6c00', '#96a6a6'],\n  } */
    }
  },
  "axis": {
    "x": {
      "title": false,
      "labelTransform": "rotate(-90)"
    },
    "y": {
      "labelFormatter": "~s"
    }
  },
  "style": {
    "stroke": "#697474",
    "lineDash": /* TODO: Convert style value/expression: [4, 2] */
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: (d) => `${d.y2 - d.y1}`,\n    formatter: '~s',\n    fontSize: 10,\n    dy: 2,\n  } */
    },
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'value',\n    formatter: '~s',\n    position: (d) => (d.value > 0 ? 'top' : 'bottom'),\n    textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),\n    fontSize: 10,\n    dy: (d) => (d.value > 0 ? -4 : 4),\n  } */
    }
  ]
};

const AnnotationConnectorIntervalConnectorChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationConnectorIntervalConnectorChart;
