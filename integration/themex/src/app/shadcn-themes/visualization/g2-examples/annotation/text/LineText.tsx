'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/text/demo/line-text.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: ['blockchain', 'nlp'],
  //         key: 'type',
  //         value: 'value',
  //       },
  //     ],
  //   })
  //   .axis('x', { labelAutoHide: 'greedy' });
  // 
  // chart
  //   .line()
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'value')
  //   .encode('color', 'type');
  // 
  // chart
  //   .text()
  //   .data([new Date('2017-12-17'), 100])
  //   .style({
  //     text: `2017-12-17, 受比特币影响，blockchain 搜索热度达到峰值：100`,
  //     wordWrap: true,
  //     wordWrapWidth: 164,
  //     dx: -174,
  //     dy: 30,
  //     fill: '#2C3542',
  //     fillOpacity: 0.65,
  //     fontSize: 10,
  //     background: true,
  //     backgroundRadius: 2,
  //     connector: true,
  //     startMarker: true,
  //     startMarkerFill: '#2C3542',
  //     startMarkerFillOpacity: 0.65,
  //   })
  //   .tooltip(false);
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
  "type": "line",
  "dataComment": /* TODO: Manually define inline data array. Original: [new Date('2017-12-17'), 100] */,
  "encode": {
    "x": /* TODO: Convert encode function/expression: (d */,
    "y": "value",
    "color": "type"
  },
  "axis": {
    "x": {
      "labelAutoHide": "greedy"
    }
  }
};

const AnnotationTextLineTextChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationTextLineTextChart;
