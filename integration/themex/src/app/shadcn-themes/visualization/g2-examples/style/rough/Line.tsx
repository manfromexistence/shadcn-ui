// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/rough/demo/line.ts
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
  //       autoFit: true,
  //       plugins: [new Plugin()],
  //     });
  // 
  //     chart
  //       .line()
  //       .data({
  //         type: 'fetch',
  //         value:
  //           'https://gw.alipayobjects.com/os/bmw-prod/cb99c4ab-e0a3-4c76-9586-fe7fa2ff1a8c.csv',
  //       })
  //       .transform({ type: 'groupX', y: 'mean' })
  //       .encode('x', (d) => new Date(d.date).getFullYear())
  //       .encode('y', 'price')
  //       .encode('color', 'symbol')
  //       .label({
  //         text: 'price',
  //         transform: [{ type: 'overlapDodgeY' }],
  //         fontSize: 10,
  //         fontFamily: 'Gaegu',
  //       })
  //       .axis('x', {
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //         labelFontFamily: 'Gaegu',
  //       })
  //       .axis('y', {
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //       })
  //       .legend('color', { itemLabelFontFamily: 'Gaegu' })
  //       .style('roughness', 2);
  // 
  //     chart.render();
  //   },
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "line",
  "encode": {
    "y": "price",
    "color": "symbol"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    }
  ],
  "axis": {},
  "legend": {},
  "style": {},
  "labels": [
    null
  ]
};

const StyleRoughLineChart: React.FC = () => {
    
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

export default StyleRoughLineChart;
