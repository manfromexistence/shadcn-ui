// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-range-micro.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const floatTimestamp = (s) => +new Date(s) + +`0.${s.slice(s.length - 3)}`;
  // 
  // const format = (n) => {
  //   const x = Math.floor(n);
  //   const s = n + '';
  //   const d = new Date(x);
  //   const Y = d.getFullYear();
  //   const M = d.getMonth() + 1;
  //   const D = d.getDate();
  //   const H = d.getHours();
  //   const MN = d.getMinutes();
  //   const S = d.getSeconds();
  //   const MS = d.getMilliseconds();
  //   const MCM = s.slice(s.length - 3);
  //   return `${Y}-${M}-${D} ${H}:${MN}:${S}.${MS}${MCM}`;
  // };
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     {
  //       task: 'task0',
  //       startTime: '2023-06-28 03:30:33.900123', // micro seconds
  //       endTime: '2023-06-28 03:30:33.900678', // micro seconds
  //       status: '0',
  //     },
  //     {
  //       task: 'task0',
  //       startTime: '2023-06-28 03:30:33.901123',
  //       endTime: '2023-06-28 03:30:33.902678',
  //       status: '1',
  //     },
  //   ])
  //   .encode('x', 'task')
  //   // Add float part to distinguish y and y1
  //   .encode('y', (d) => floatTimestamp(d.startTime))
  //   .encode('y1', (d) => floatTimestamp(d.endTime))
  //   .encode('color', 'status')
  //   .scale('y', {
  //     type: 'time',
  //     domain: [
  //       new Date('2023-06-28 03:30:33.900'),
  //       new Date('2023-06-28 03:30:33.903'),
  //     ],
  //   })
  //   .coordinate({ transform: [{ type: 'transpose' }] })
  //   .tooltip({ channel: 'y', valueFormatter: format })
  //   .tooltip({ channel: 'y1', valueFormatter: format });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": [
    {
      "task": "task0",
      "startTime": "2023-06-28 03:30:33.900123",
      "endTime": "2023-06-28 03:30:33.900678",
      "status": "0"
    },
    {
      "task": "task0",
      "startTime": "2023-06-28 03:30:33.901123",
      "endTime": "2023-06-28 03:30:33.902678",
      "status": "1"
    }
  ],
  "scale": {},
  "tooltip": [
    null,
    null
  ],
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GeneralIntervalBarRangeMicroChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarRangeMicroChart;
