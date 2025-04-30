// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/link/demo/link-shape.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@observablehq/plot-link?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // [
  //   { x1: 5, y1: 5, x2: 8, y2: 8, shape: 'link' },
  //   { x1: 5, y1: 12, x2: 8, y2: 15, shape: 'smooth' },
  //   { x1: 12, y1: 5, x2: 15, y2: 8, shape: 'vhv' },
  //   { x1: 12, y1: 12, x2: 15, y2: 15, shape: 'arc' },
  // ].forEach((data) => {
  //   chart
  //     .link()
  //     .data([data])
  //     .encode('x', ['x1', 'x2'])
  //     .encode('y', ['y1', 'y2'])
  //     .scale({
  //       x: { domainMin: 2, domainMax: 22 },
  //       y: { domainMin: 4, domainMax: 18 },
  //     })
  //     .style({
  //       arrow: true,
  //       arrowSize: 10,
  //       lineWidth: 5,
  //       stroke: '#1f1aa1',
  //       shape: data.shape,
  //     });
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "link",
  "encode": {}
};

const GeneralLinkLinkShapeChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default GeneralLinkLinkShapeChart;
