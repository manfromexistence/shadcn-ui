// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-jitter.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/point_offset_random.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/2c813e2d-2276-40b9-a9af-cf0a0fb7e942.csv',
  //   })
  //   .transform({ type: 'sortX', channel: 'x' })
  //   .transform({ type: 'jitterX' })
  //   .encode('y', 'Horsepower')
  //   .encode('x', 'Cylinders')
  //   .encode('shape', 'hollow')
  //   .encode('color', 'Cylinders')
  //   .scale('x', { type: 'point' })
  //   .scale('color', { type: 'ordinal' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "point",
  "encode": {
    "y": "Horsepower",
    "x": "Cylinders",
    "shape": "hollow",
    "color": "Cylinders"
  },
  "transform": [
    {
      "type": "sortX",
      "channel": "x"
    },
    {
      "type": "jitterX"
    }
  ],
  "scale": {
    "x": {
      "type": "point"
    },
    "color": {
      "type": "ordinal"
    }
  }
};

const GeneralPointPointJitterChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPointPointJitterChart;
