'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/apple-activity.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 244,
  //   height: 244,
  // });
  // 
  // chart
  //   .data([
  //     {
  //       name: 'activity1',
  //       percent: 0.6,
  //       color: '#1ad5de',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
  //     },
  //     {
  //       name: 'activity2',
  //       percent: 0.2,
  //       color: '#a0ff03',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
  //     },
  //     {
  //       name: 'activity3',
  //       percent: 0.3,
  //       color: '#e90b3a',
  //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
  //     },
  //   ])
  //   .coordinate({ type: 'radial', innerRadius: 0.2 });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 1)
  //   .encode('size', 52)
  //   .encode('color', 'color')
  //   .scale('color', { type: 'identity' })
  //   .style('fillOpacity', 0.25)
  //   .animate(false);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 'percent')
  //   .encode('color', 'color')
  //   .encode('size', 52)
  //   .style('radius', 26)
  //   .style('shadowColor', 'rgba(0,0,0,0.45)')
  //   .style('shadowBlur', 20)
  //   .style('shadowOffsetX', -2)
  //   .style('shadowOffsetY', -5)
  //   .axis(false)
  //   .animate('enter', {
  //     type: 'waveIn',
  //     easing: 'easing-out-bounce',
  //     duration: 1000,
  //   });
  // 
  // chart
  //   .image()
  //   .encode('x', 'name')
  //   .encode('y', 0)
  //   .encode('src', (d) => d.icon)
  //   .encode('size', 12)
  //   .style('transform', 'translateX(10)');
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
  "width": 244,
  "height": 244,
  "type": "interval",
  "dataComment": /* TODO: Manually define inline data array. Original: [\n    {\n      name: 'activity1',\n      percent: 0.6,\n      color: '#1ad5de',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',\n    },\n    {\n      name: 'activity2',\n      percent: 0.2,\n      color: '#a0ff03',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',\n    },\n    {\n      name: 'activity3',\n      percent: 0.3,\n      color: '#e90b3a',\n      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',\n    },\n  ] */,
  "encode": {
    "x": "name",
    "y": /* TODO: Convert encode function/expression: 0 */,
    "size": /* TODO: Convert encode function/expression: 12 */,
    "color": "color",
    "src": /* TODO: Convert encode function/expression: (d */
  },
  "scale": {
    "color": {
      "type": "identity"
    }
  },
  "style": {
    "fillOpacity": /* TODO: Convert style value/expression: 0.25 */,
    "radius": /* TODO: Convert style value/expression: 26 */,
    "shadowColor": /* TODO: Convert style value/expression: 'rgba(0,0,0,0.45 */,
    "shadowBlur": /* TODO: Convert style value/expression: 20 */,
    "shadowOffsetX": /* TODO: Convert style value/expression: -2 */,
    "shadowOffsetY": /* TODO: Convert style value/expression: -5 */,
    "transform": /* TODO: Convert style value/expression: 'translateX(10 */
  },
  "coordinate": {
    "type": "radial",
    "innerRadius": 0.2
  }
};

const GeneralRadialAppleActivityChart: React.FC = () => {
    
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

export default GeneralRadialAppleActivityChart;
