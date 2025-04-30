'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "chartOptionsComment": /* TODO: Manually convert Chart constructor options: {\n      container: 'container',\n      autoFit: true,\n      plugins: [new Plugin()],\n    } */,
  "type": "line",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": /* TODO: Convert encode function/expression: (d */,
    "y": "price",
    "color": "symbol"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    }
  ],
  "axis": {
    "x": /* TODO: Manually convert axis options: {\n        tickStroke: '#cdcdcd',\n        gridStroke: '#efefef',\n        labelFontFamily: 'Gaegu',\n      } */,
    "y": /* TODO: Manually convert axis options: {\n        tickStroke: '#cdcdcd',\n        gridStroke: '#efefef',\n        titleFontFamily: 'Gaegu',\n        labelFontFamily: 'Gaegu',\n      } */
  },
  "legend": {
    "color": /* TODO: Manually convert legend options: { itemLabelFontFamily: 'Gaegu' } */
  },
  "style": {
    "roughness": /* TODO: Convert style value/expression: 2 */
  },
  "labels": [
    /* TODO: Manually convert label options: {\n        text: 'price',\n        transform: [{ type: 'overlapDodgeY' }],\n        fontSize: 10,\n        fontFamily: 'Gaegu',\n      } */
  ]
};

const StyleRoughLineChart: React.FC = () => {
    
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

export default StyleRoughLineChart;
