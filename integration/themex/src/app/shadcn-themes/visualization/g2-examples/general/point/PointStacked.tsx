// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-stacked.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@mbostock/global-temperature-trends
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 360,
  // });
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/88c601cd-c1ff-4c9b-90d5-740d0b710b7e.json',
  //   })
  //   .transform({ type: 'stackY', y1: 'y' })
  //   .encode('x', (d) => 2021 - d.birth)
  //   .encode('y', (d) => (d.gender === 'M' ? 1 : -1))
  //   .encode('color', 'gender')
  //   .encode('shape', 'point')
  //   .scale('x', { nice: true })
  //   .axis('y', {
  //     title: '← Women · Men →',
  //     labelFormatter: (d) => `${Math.abs(+d)}`,
  //   })
  //   .axis('x', { title: 'Age →' })
  //   .legend('color', { title: 'Gender' })
  //   .tooltip({ channel: 'x', name: 'age' });
  // 
  // chart.lineY().data([0]).style('stroke', 'black');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 360,
  "type": "point",
  "data": [
    0
  ],
  "encode": {
    "color": "gender",
    "shape": "point"
  },
  "transform": [
    {
      "type": "stackY",
      "y1": "y"
    }
  ],
  "scale": {
    "x": {
      "nice": true
    }
  },
  "axis": {
    "x": {
      "title": "Age →"
    }
  },
  "legend": {},
  "style": {
    "stroke": "black"
  }
};

const GeneralPointPointStackedChart: React.FC = () => {
    
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

export default GeneralPointPointStackedChart;
