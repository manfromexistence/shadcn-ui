// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/rough/demo/radial.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Plugin } from '@antv/g-plugin-rough-canvas-renderer';
  // import WebFont from 'webfontloader';
  // 
  // WebFont.load({
  //   google: {
  //     families: ['Gaegu'],
  //   },
  //   active: () => {
  //     const chart = new Chart({
  //       container: 'container',
  //       height: 480,
  //       plugins: [new Plugin()],
  //     });
  // 
  //     chart.coordinate({ type: 'theta' });
  // 
  //     chart
  //       .interval()
  //       .transform({ type: 'stackY' })
  //       .data({
  //         type: 'fetch',
  //         value:
  //           'https://gw.alipayobjects.com/os/bmw-prod/79fd9317-d2af-4bc4-90fa-9d07357398fd.csv',
  //       })
  //       .encode('y', 'value')
  //       .encode('color', 'name')
  //       .scale('color', {
  //         range: [
  //           'hachure',
  //           'solid',
  //           'zigzag',
  //           'cross-hatch',
  //           'dots',
  //           'dashed',
  //           'zigzag-line',
  //         ],
  //       })
  //       .style('fill', 'black')
  //       .style('stroke', 'black')
  //       .style('lineWidth', '4')
  //       .style('colorAttribute', 'fillStyle')
  //       .legend(false)
  //       .label({
  //         text: 'name',
  //         radius: 0.8,
  //         fontSize: 10,
  //         fontWeight: 'bold',
  //         fontFamily: 'Gaegu',
  //         fill: 'black',
  //         stroke: 'white',
  //       })
  //       .label({
  //         text: (d, i, data) => (i < data.length - 3 ? d.value : ''),
  //         radius: 0.8,
  //         fontSize: 12,
  //         fontFamily: 'Gaegu',
  //         fill: 'black',
  //         stroke: 'white',
  //         dy: 8,
  //       });
  // 
  //     chart.render();
  //   },
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "y": "value",
    "color": "name"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {},
  "style": {
    "fill": "black",
    "stroke": "black",
    "lineWidth": "4",
    "colorAttribute": "fillStyle"
  },
  "labels": [
    null,
    null
  ],
  "coordinate": {
    "type": "theta"
  }
};

const StyleRoughRadialChart: React.FC = () => {
    
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

export default StyleRoughRadialChart;
