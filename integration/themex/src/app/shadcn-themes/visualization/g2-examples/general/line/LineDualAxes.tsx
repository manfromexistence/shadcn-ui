// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 800,
  "height": 1000,
  "type": "line",
  "scale": {},
  "legend": false
};

const GeneralLineLineDualAxesChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineDualAxesChart;
