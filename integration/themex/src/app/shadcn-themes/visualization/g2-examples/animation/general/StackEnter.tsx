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
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": [
    {
      "type": "Apple",
      "year": "2001",
      "value": 260
    },
    {
      "type": "Orange",
      "year": "2001",
      "value": 100
    },
    {
      "type": "Banana",
      "year": "2001",
      "value": 90
    },
    {
      "type": "Apple",
      "year": "2002",
      "value": 210
    },
    {
      "type": "Orange",
      "year": "2002",
      "value": 150
    },
    {
      "type": "Banana",
      "year": "2002",
      "value": 30
    }
  ],
  "transform": [
    {
      "type": "stackEnter",
      "groupBy": "x"
    }
  ]
};

const AnimationGeneralStackEnterChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationGeneralStackEnterChart;
