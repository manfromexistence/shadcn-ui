// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/repeat/demo/matrix-col.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 300,
  //   height: 720,
  //   paddingLeft: 60,
  //   paddingBottom: 60,
  // });
  // 
  // const repeatMatrix = chart
  //   .repeatMatrix()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/weather.json',
  //     transform: [
  //       {
  //         type: 'map',
  //         callback: ({ date, ...d }) => ({
  //           ...d,
  //           date: new Date(date).getMonth() + '',
  //         }),
  //       },
  //     ],
  //   })
  //   .encode('y', ['temp_max', 'precipitation', 'wind'])
  //   .encode('x', 'date');
  // 
  // repeatMatrix
  //   .line()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('color', 'location')
  //   .scale('y', { zero: true });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "width": 300,
  "height": 720,
  "paddingLeft": 60,
  "paddingBottom": 60,
  "type": "repeatMatrix",
  "encode": {
    "x": "date",
    "color": "location"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    }
  ],
  "scale": {
    "y": {
      "zero": true
    }
  }
};

const CompositionRepeatMatrixColChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionRepeatMatrixColChart;
