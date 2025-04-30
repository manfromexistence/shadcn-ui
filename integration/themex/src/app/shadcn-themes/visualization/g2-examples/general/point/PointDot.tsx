// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-dot.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/dot-plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 800,
  //   height: 1200,
  // });
  // 
  // const xy = (node) => node.encode('x', 'state').encode('y', 'population');
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/b6f2ff26-b232-447d-a613-0df5e30104a0.csv',
  // });
  // 
  // chart
  //   .link()
  //   .scale('y', { labelFormatter: '.0%' })
  //   .transform({ type: 'groupX', y: 'min', y1: 'max' })
  //   .call(xy)
  //   .style('stroke', '#000')
  //   .tooltip(false);
  // 
  // chart
  //   .point()
  //   .scale('color', { palette: 'spectral' })
  //   .call(xy)
  //   .encode('shape', 'point')
  //   .encode('color', 'age')
  //   .tooltip({
  //     title: 'state',
  //     items: ['population'],
  //   });
  // 
  // chart.interaction('tooltip', { shared: true });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "width": 800,
  "height": 1200,
  "type": "link",
  "encode": {
    "x": "state",
    "y": "population",
    "shape": "point",
    "color": "age"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "min",
      "y1": "max"
    }
  ],
  "scale": {
    "y": {
      "labelFormatter": ".0%"
    },
    "color": {
      "palette": "spectral"
    }
  },
  "style": {
    "stroke": "#000"
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  },
  "interaction": {
    "type": "tooltip"
  }
};

const GeneralPointPointDotChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default GeneralPointPointDotChart;
