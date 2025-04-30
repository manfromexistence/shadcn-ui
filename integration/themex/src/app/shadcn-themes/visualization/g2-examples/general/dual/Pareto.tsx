// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/dual/demo/pareto.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { x: 'Parking Difficult', value: 95 },
  //   { x: 'Sales Rep was Rude', value: 60 },
  //   { x: 'Poor Lighting', value: 45 },
  //   { x: 'Layout Confusing', value: 37 },
  //   { x: 'Sizes Limited', value: 30 },
  //   { x: 'Clothing Faded', value: 27 },
  //   { x: 'Clothing Shrank', value: 18 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.title('Pareto Chart of Customer Complaints');
  // 
  // chart.data({
  //   type: 'inline',
  //   value: data,
  //   transform: [
  //     {
  //       type: 'custom',
  //       // calucate accumulate and percentage fields.
  //       callback: (data) => {
  //         const sum = data.reduce((r, curr) => r + curr.value, 0);
  //         return data
  //           .map((d) => ({ ...d, percentage: d.value / sum }))
  //           .reduce((r, curr) => {
  //             const v = r.length ? r[r.length - 1].accumulate : 0;
  //             const accumulate = v + curr.percentage;
  //             r.push({ ...curr, accumulate });
  //             return r;
  //           }, []);
  //       },
  //     },
  //   ],
  // });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'x')
  //   .encode('y', 'value')
  //   .style('fill', (d) => (d.percentage < 0.1 ? '#E24B26' : '#78B3F0'))
  //   .scale('x', { padding: 1 / 2 })
  //   .scale('y', { domainMax: 312, tickCount: 5 })
  //   .axis('x', { title: null })
  //   .axis('y', { title: 'Defect frequency' })
  //   .label({
  //     text: (d) => `${(d.percentage * 100).toFixed(1)}%`,
  //     textBaseline: 'bottom',
  //   });
  // 
  // chart
  //   .line()
  //   .encode('x', 'x')
  //   .encode('y', 'accumulate')
  //   .scale('y', { independent: true, domainMin: 0, tickCount: 5 })
  //   .axis('y', {
  //     position: 'right',
  //     title: 'Cumulative Percentage',
  //     grid: null,
  //     labelFormatter: (d) => `${(d * 100).toFixed(0)}%`,
  //   })
  //   .tooltip({
  //     channel: 'y',
  //     valueFormatter: (d) => `${(d * 100).toFixed(2)}%`,
  //   });
  // 
  // chart
  //   .point()
  //   .encode('x', 'x')
  //   .encode('y', 'accumulate')
  //   .encode('shape', 'diamond')
  //   .scale('y', { independent: true, domainMin: 0 })
  //   .axis('y', null)
  //   .tooltip(null);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "x",
    "y": "accumulate",
    "shape": "diamond"
  },
  "scale": {
    "y": {
      "independent": true,
      "domainMin": 0
    }
  },
  "axis": {
    "x": {
      "title": null
    }
  },
  "style": {},
  "labels": [
    null
  ]
};

const GeneralDualParetoChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">D</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralDualParetoChart;
