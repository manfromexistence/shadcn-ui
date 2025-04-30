'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/shape/demo/line-badge.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   insetTop: 50,
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
  //   .encode('shape', 'badge')
  //   .style({
  //     text: '100',
  //     dy: -1,
  //     markerSize: 24,
  //     markerFill: '#6395FA',
  //     markerFillOpacity: 0.55,
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
  "insetTop": 50,
  "type": "line",
  "encode": {
    "y": "value",
    "color": "type",
    "shape": "badge"
  },
  "axis": {
    "x": {
      "labelAutoHide": "greedy"
    }
  }
};

const AnnotationShapeLineBadgeChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationShapeLineBadgeChart;
