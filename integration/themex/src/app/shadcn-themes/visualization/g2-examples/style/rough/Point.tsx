'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/rough/demo/point.ts
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
  //       .point()
  //       .data({
  //         type: 'fetch',
  //         value:
  //           'https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json',
  //       })
  //       .encode('x', 'height')
  //       .encode('y', 'weight')
  //       .encode('color', 'gender')
  //       .axis('x', {
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //       })
  //       .axis('y', {
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //       })
  //       .legend('color', { itemLabelFontFamily: 'Gaegu' });
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
  "type": "point",
  "encode": {
    "x": "height",
    "y": "weight",
    "color": "gender"
  },
  "axis": {},
  "legend": {}
};

const StyleRoughPointChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default StyleRoughPointChart;
