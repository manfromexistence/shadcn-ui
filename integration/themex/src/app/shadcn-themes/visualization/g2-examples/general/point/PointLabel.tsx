// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-label.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/scatterplot
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
  //       ' https://gw.alipayobjects.com/os/bmw-prod/474e51c8-b47b-4bb6-b3ed-87813a960df2.csv',
  //   })
  //   .scale('x', { nice: true, domainMax: 38 })
  //   .scale('y', { nice: true })
  //   .encode('x', 'mpg')
  //   .encode('y', 'hp')
  //   .label({
  //     text: 'name',
  //     stroke: '#fff',
  //     textAlign: 'start',
  //     textBaseline: 'middle',
  //     dx: 10,
  //     position: 'left',
  //     fontSize: 10,
  //     lineWidth: 2,
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "point",
  "encode": {
    "x": "mpg",
    "y": "hp"
  },
  "scale": {
    "x": {
      "nice": true,
      "domainMax": 38
    },
    "y": {
      "nice": true
    }
  },
  "labels": [
    null
  ]
};

const GeneralPointPointLabelChart: React.FC = () => {
    
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

export default GeneralPointPointLabelChart;
