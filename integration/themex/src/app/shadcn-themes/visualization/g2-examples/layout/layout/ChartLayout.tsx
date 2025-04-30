'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/layout/layout/demo/chart-layout.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container' });
  // 
  // chart.options({
  //   type: 'point',
  //   height: 600,
  //   width: 700,
  //   margin: 100,
  //   padding: 60,
  //   paddingLeft: 100, // 单独设置paddingLeft的优先级比padding高
  //   insetLeft: 30,
  //   insetRight: 30,
  // 
  //   data: {
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/commits.json',
  //   },
  //   encode: {
  //     x: (d) => new Date(d.time).getUTCHours(),
  //     y: (d) => new Date(d.time).getUTCDay(),
  //     size: 'count',
  //     shape: 'point',
  //   },
  //   transform: [{ type: 'group', size: 'sum' }, { type: 'sortY' }],
  //   scale: { y: { type: 'point' } },
  //   style: { shape: 'point', fill: '#76b7b2' },
  //   axis: {
  //     x: { title: 'time (hours)', tickCount: 24 },
  //     y: { title: 'time (day)', grid: true },
  //   },
  //   legend: false,
  //   viewStyle: {
  //     viewFill: '#DCEEFE',
  //     plotFill: '#A2D4F6',
  //     mainFill: '#FFC6A1',
  //     contentFill: '#FF8E72',
  //   },
  // });
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
  "type": "getUTCHours"
};

const LayoutLayoutChartLayoutChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default LayoutLayoutChartLayoutChart;
