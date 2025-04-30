// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/general/demo/stack-enter.ts
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
  //     { type: 'Apple', year: '2001', value: 260 },
  //     { type: 'Orange', year: '2001', value: 100 },
  //     { type: 'Banana', year: '2001', value: 90 },
  //     { type: 'Apple', year: '2002', value: 210 },
  //     { type: 'Orange', year: '2002', value: 150 },
  //     { type: 'Banana', year: '2002', value: 30 },
  //   ])
  //   .transform({ type: 'stackEnter', groupBy: 'x' })
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('color', 'type')
  //   .encode('series', 'type')
  //   .encode('enterDuration', 1000);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "year",
    "y": "value",
    "color": "type",
    "series": "type"
  },
  "transform": [
    {
      "type": "stackEnter",
      "groupBy": "x"
    }
  ]
};

const AnimationGeneralStackEnterChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationGeneralStackEnterChart;
