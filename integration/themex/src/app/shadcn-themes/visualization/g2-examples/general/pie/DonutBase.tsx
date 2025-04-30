'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/donut-base.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: '事例一', count: 40, percent: 0.4 },
  //   { item: '事例二', count: 21, percent: 0.21 },
  //   { item: '事例三', count: 17, percent: 0.17 },
  //   { item: '事例四', count: 13, percent: 0.13 },
  //   { item: '事例五', count: 9, percent: 0.09 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'percent')
  //   .encode('color', 'item')
  //   .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
  //   .label({
  //     position: 'outside',
  //     text: (data) => `${data.item}: ${data.percent * 100}%`,
  //   })
  //   .tooltip((data) => ({
  //     name: data.item,
  //     value: `${data.percent * 100}%`,
  //   }));
  // 
  // chart
  //   .text()
  //   .style('text', '主机')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', -25)
  //   .style('fontSize', 34)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
  // 
  // chart
  //   .text()
  //   .style('text', '200')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dx', -25)
  //   .style('dy', 25)
  //   .style('fontSize', 44)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
  // 
  // chart
  //   .text()
  //   .style('text', '台')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dx', 35)
  //   .style('dy', 25)
  //   .style('fontSize', 34)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
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
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "y": "percent",
    "color": "item"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "legend": {
    "color": /* TODO: Manually convert legend options: { position: 'bottom', layout: { justifyContent: 'center' } } */
  },
  "style": {
    "text": "台",
    "x": "50%",
    "y": "50%",
    "dy": /* TODO: Convert style value/expression: 25 */,
    "fontSize": /* TODO: Convert style value/expression: 34 */,
    "fill": "#8c8c8c",
    "textAlign": "center",
    "dx": /* TODO: Convert style value/expression: 35 */
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    position: 'outside',\n    text: (data) => `${data.item}: ${data.percent * 100}%`,\n  } */
  ],
  "coordinate": {
    "type": "theta",
    "outerRadius": 0.8,
    "innerRadius": 0.5
  }
};

const GeneralPieDonutBaseChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPieDonutBaseChart;
