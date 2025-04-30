'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-dual-axes.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@mbostock/mareys-trains
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // fetch('https://assets.antv.antgroup.com/g2/train.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const chart = new Chart({
  //       container: 'container',
  //       width: 800,
  //       height: 1000,
  //       paddingLeft: 60,
  //       paddingTop: 120,
  //       paddingBottom: 120,
  //     });
  //     const distanceName = new Map(data.map((d) => [d.distance, d.name]));
  //     const xAxis = {
  //       tickMethod: () => Array.from(distanceName.keys()),
  //       labelFormatter: (d) => distanceName.get(d),
  //       title: null,
  //     };
  // 
  //     chart
  //       .line()
  //       .data(data)
  //       .encode('x', 'distance')
  //       .encode('y', (d) => new Date(d.time))
  //       .encode('color', 'type')
  //       .encode('series', 'number')
  //       .scale('color', {
  //         domain: ['N', 'L', 'B'],
  //         range: ['rgb(34, 34, 34)', 'rgb(183, 116, 9)', 'rgb(192, 62, 29)'],
  //       })
  //       .scale('y', {
  //         range: [0, 1],
  //         tickCount: 15,
  //         utc: true,
  //       })
  //       .legend(false)
  //       .axis('x', [
  //         { ...xAxis, position: 'top' },
  //         { ...xAxis, position: 'bottom' },
  //       ]);
  // 
  //     chart.render();
  //   });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "width": 800,
  "height": 1000,
  "paddingLeft": 60,
  "paddingTop": 120,
  "paddingBottom": 120,
  "type": "json",
  "encode": {
    "x": "distance",
    "color": "type",
    "series": "number"
  },
  "scale": {}
};

const GeneralLineLineDualAxesChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineDualAxesChart;
