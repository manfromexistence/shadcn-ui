// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/step-area.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { year: '1991', value: 15468 },
  //   { year: '1992', value: 16100 },
  //   { year: '1993', value: 15900 },
  //   { year: '1994', value: 17409 },
  //   { year: '1995', value: 17000 },
  //   { year: '1996', value: 31056 },
  //   { year: '1997', value: 31982 },
  //   { year: '1998', value: 32040 },
  //   { year: '1999', value: 33233 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart
  //   .area()
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('shape', 'hvh') // 'area', 'smooth', 'hvh', 'vh', 'hv'
  //   .label({
  //     text: 'value',
  //     fontSize: 10,
  //     textAlign: (_, idx, arr) => {
  //       if (idx === 0) return 'left';
  //       if (idx === arr.length - 1) return 'right';
  //       return 'center';
  //     },
  //   })
  //   .style('opacity', 0.4)
  //   .axis('y', { labelFormatter: '~s' });
  // 
  // chart.line().encode('x', 'year').encode('y', 'value').encode('shape', 'hvh'); // 'line', 'smooth', 'vh', 'hv', 'hvh'
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "area",
  "encode": {
    "x": "year",
    "y": "value",
    "shape": "hvh"
  },
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "style": {},
  "labels": [
    null
  ]
};

const GeneralAreaStepAreaChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaStepAreaChart;
