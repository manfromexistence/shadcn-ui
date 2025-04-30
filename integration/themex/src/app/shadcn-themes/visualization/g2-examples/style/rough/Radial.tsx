'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "chartOptionsComment": /* TODO: Manually convert Chart constructor options: {\n      container: 'container',\n      height: 480,\n      plugins: [new Plugin()],\n    } */,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "y": "value",
    "color": "name"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {
    "color": /* TODO: Manually convert scale options: {\n        range: [\n          'hachure',\n          'solid',\n          'zigzag',\n          'cross-hatch',\n          'dots',\n          'dashed',\n          'zigzag-line',\n        ],\n      } */
  },
  "style": {
    "fill": "black",
    "stroke": "black",
    "lineWidth": "4",
    "colorAttribute": "fillStyle"
  },
  "labels": [
    /* TODO: Manually convert label options: {\n        text: 'name',\n        radius: 0.8,\n        fontSize: 10,\n        fontWeight: 'bold',\n        fontFamily: 'Gaegu',\n        fill: 'black',\n        stroke: 'white',\n      } */,
    /* TODO: Manually convert label options: {\n        text: (d, i, data) => (i < data.length - 3 ? d.value : ''),\n        radius: 0.8,\n        fontSize: 12,\n        fontFamily: 'Gaegu',\n        fill: 'black',\n        stroke: 'white',\n        dy: 8,\n      } */
  ],
  "coordinate": {
    "type": "theta"
  }
};

const StyleRoughRadialChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default StyleRoughRadialChart;
