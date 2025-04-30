'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-bubble.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/circle_natural_disasters.html
  //  */
  // 
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
  //       'https://gw.alipayobjects.com/os/bmw-prod/2b48887c-56fb-437e-a91c-6f48e80e5a91.csv',
  //     transform: [
  //       {
  //         type: 'filter',
  //         callback: (d) => d.Entity !== 'All natural disasters',
  //       },
  //     ],
  //   })
  //   .encode('x', 'Year')
  //   .encode('y', 'Entity')
  //   .encode('size', 'Deaths')
  //   .encode('color', 'Entity')
  //   .encode('shape', 'point')
  //   .scale('size', { rangeMax: 35 })
  //   .legend(false)
  //   .style({
  //     stroke: 'black',
  //     strokeOpacity: 0.1,
  //     opacity: 0.8,
  //     lineWidth: 1,
  //   });
  // 
  // chart.render();
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
    "x": "Year",
    "y": "Entity",
    "size": "Deaths",
    "color": "Entity",
    "shape": "point"
  },
  "scale": {
    "size": {
      "rangeMax": 35
    }
  }
};

const GeneralPointPointBubbleChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPointPointBubbleChart;
