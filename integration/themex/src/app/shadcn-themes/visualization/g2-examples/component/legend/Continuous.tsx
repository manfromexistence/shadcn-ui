// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/continuous.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 360,
  // });
  // 
  // chart
  //   .cell()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  //   })
  //   .transform({ type: 'group', color: 'max' })
  //   .encode('x', (d) => new Date(d.date).getUTCDate())
  //   .encode('y', (d) => new Date(d.date).getUTCMonth())
  //   .encode('color', 'temp_max')
  //   .style('inset', 0.5)
  //   .scale('color', { palette: 'rainbow' })
  //   .legend({
  //     color: {
  //       position: 'bottom',
  //       ribbonType: 'size',
  //       indicator: true,
  //       title: false,
  //       tick: false,
  //       layout: {
  //         justifyContent: 'center',
  //       },
  //     },
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 360,
  "type": "cell",
  "encode": {
    "color": "temp_max"
  },
  "transform": [
    {
      "type": "group",
      "color": "max"
    }
  ],
  "scale": {
    "color": {
      "palette": "rainbow"
    }
  },
  "style": {}
};

const ComponentLegendContinuousChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLegendContinuousChart;
