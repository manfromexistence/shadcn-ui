// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-shape.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/scatterplot-with-shapes
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
  //       'https://gw.alipayobjects.com/os/bmw-prod/bd73a175-4417-4749-8b88-bc04d955e899.csv',
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('shape', 'category')
  //   .encode('color', 'category')
  //   .encode('size', 5)
  //   .scale('shape', { range: ['point', 'plus', 'diamond'] });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "point",
  "encode": {
    "x": "x",
    "y": "y",
    "shape": "category",
    "color": "category"
  },
  "scale": {
    "shape": {
      "range": [
        "point",
        "plus",
        "diamond"
      ]
    }
  }
};

const GeneralPointPointShapeChart: React.FC = () => {
    
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

export default GeneralPointPointShapeChart;
