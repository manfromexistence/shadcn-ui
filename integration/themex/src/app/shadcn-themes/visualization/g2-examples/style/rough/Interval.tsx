'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/rough/demo/interval.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Plugin } from '@antv/g-plugin-rough-canvas-renderer';
  // import WebFont from 'webfontloader';
  // 
  // WebFont.load({
  //   google: {
  //     families: ['Gaegu'],
  //   },
  //   active: () => {
  //     const chart = new Chart({
  //       container: 'container',
  //       autoFit: true,
  //       paddingLeft: 60,
  //       plugins: [new Plugin()],
  //     });
  // 
  //     chart
  //       .interval()
  //       .data([
  //         { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
  //         { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
  //         { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
  //         { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
  //         { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
  //         { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
  //         { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
  //         { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
  //         { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
  //         { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
  //         { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
  //         { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
  //         { month: 'Total', start: 0, end: 3164946 },
  //       ])
  //       .encode('x', 'month')
  //       .encode('y', ['end', 'start'])
  //       .encode('color', (d) =>
  //         d.month === 'Total' ? 'Total' : d.profit > 0 ? 'Increase' : 'Decrease',
  //       )
  //       .style('lineWidth', 2)
  //       .style('fillStyle', 'zigzag')
  //       .axis('x', {
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //       })
  //       .axis('y', {
  //         labelFormatter: '~s',
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //       })
  //       .legend('color', { itemLabelFontFamily: 'Gaegu' });
  // 
  //     chart.render();
  //   },
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "chartOptionsComment": /* TODO: Manually convert Chart constructor options: {\n      container: 'container',\n      autoFit: true,\n      paddingLeft: 60,\n      plugins: [new Plugin()],\n    } */,
  "type": "interval",
  "dataComment": /* TODO: Manually define inline data array. Original: [\n        { month: 'Jan.', profit: 387264, start: 0, end: 387264 },\n        { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },\n        { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },\n        { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },\n        { month: 'May', profit: -138135, start: 1586049, end: 1447914 },\n        { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },\n        { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },\n        { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },\n        { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },\n        { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },\n        { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },\n        { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },\n        { month: 'Total', start: 0, end: 3164946 },\n      ] */,
  "encode": {
    "x": "month",
    "y": /* TODO: Convert encode function/expression: ['end', 'start'] */,
    "color": /* TODO: Convert encode function/expression: (d */
  },
  "axis": {
    "x": /* TODO: Manually convert axis options: {\n        titleFontSize: 15,\n        titleFontFamily: 'Gaegu',\n        labelFontFamily: 'Gaegu',\n        tickStroke: '#cdcdcd',\n      } */,
    "y": /* TODO: Manually convert axis options: {\n        labelFormatter: '~s',\n        titleFontSize: 15,\n        titleFontFamily: 'Gaegu',\n        labelFontFamily: 'Gaegu',\n        tickStroke: '#cdcdcd',\n        gridStroke: '#efefef',\n      } */
  },
  "legend": {
    "color": /* TODO: Manually convert legend options: { itemLabelFontFamily: 'Gaegu' } */
  },
  "style": {
    "lineWidth": /* TODO: Convert style value/expression: 2 */,
    "fillStyle": "zigzag"
  }
};

const StyleRoughIntervalChart: React.FC = () => {
    
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

export default StyleRoughIntervalChart;
