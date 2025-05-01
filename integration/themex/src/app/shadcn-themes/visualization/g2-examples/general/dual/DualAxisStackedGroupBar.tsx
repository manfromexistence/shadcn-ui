// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/dual/demo/dual-axis-stacked-group-bar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const data = [
  //   { time: '10:10', call: 4, waiting: 2, people: 2, mock: 3 },
  //   { time: '10:15', call: 2, waiting: 6, people: 3, mock: 4 },
  //   { time: '10:20', call: 13, waiting: 2, people: 5, mock: 1 },
  //   { time: '10:25', call: 9, waiting: 9, people: 1, mock: 2 },
  //   { time: '10:30', call: 5, waiting: 2, people: 3, mock: 5 },
  //   { time: '10:35', call: 8, waiting: 2, people: 1, mock: 3 },
  //   { time: '10:40', call: 13, waiting: 1, people: 2, mock: 2 },
  // ];
  // 
  // chart.data(data);
  // 
  // chart
  //   .interval()
  //   .data({
  //     transform: [{ type: 'fold', fields: ['call', 'waiting'] }],
  //   })
  //   .encode('x', 'time')
  //   .encode('y', 'value')
  //   .encode('color', 'key')
  //   .encode('series', () => 'a')
  //   .transform({ type: 'stackY' })
  //   .scale('y', { nice: true })
  //   .axis('y', { title: null });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'people')
  //   .encode('color', () => 'people')
  //   .encode('series', () => 'b');
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'mock')
  //   .encode('color', () => 'mock')
  //   .encode('series', () => 'c')
  //   .scale('y', { independent: true })
  //   .axis('y', { position: 'right' });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": {
    "transform": [
      {
        "type": "fold",
        "fields": [
          "call",
          "waiting"
        ]
      }
    ]
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {
    "y": {
      "independent": true
    }
  }
};

const GeneralDualDualAxisStackedGroupBarChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">D</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralDualDualAxisStackedGroupBarChart;
