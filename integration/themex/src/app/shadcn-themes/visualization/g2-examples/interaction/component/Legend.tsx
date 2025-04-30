// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/component/demo/legend.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
  //     { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
  //     { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
  //     { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
  //     { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
  //     { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
  //     { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
  //     { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
  //     { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
  //     { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
  //     { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
  //     { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
  //     { month: 'Total', start: 0, end: 3164946 },
  //   ])
  //   .encode('x', 'month')
  //   .encode('y', ['end', 'start'])
  //   .encode('color', (d) =>
  //     d.month === 'Total' ? 'Total' : d.profit > 0 ? 'Increase' : 'Decrease',
  //   )
  //   .axis('y', { labelFormatter: '~s' })
  //   .interaction('legendFilter', true);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "month"
  },
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "interaction": {
    "type": "legendFilter"
  }
};

const InteractionComponentLegendChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionComponentLegendChart;
