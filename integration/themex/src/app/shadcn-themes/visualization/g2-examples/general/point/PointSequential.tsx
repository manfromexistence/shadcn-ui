// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-sequential.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@mbostock/global-temperature-trends
  //  */
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
  //       'https://gw.alipayobjects.com/os/bmw-prod/56b6b137-e04e-4757-8af5-d75bafaef886.csv',
  //   })
  //   .encode('x', 'date')
  //   .encode('y', 'value')
  //   .encode('color', 'value')
  //   .encode('shape', 'point')
  //   .scale('color', {
  //     palette: 'rdBu',
  //     offset: (t) => 1 - t,
  //   })
  //   .style('stroke', '#000')
  //   .style('strokeOpacity', 0.2)
  //   .tooltip([
  //     { channel: 'x', name: 'year', valueFormatter: (d) => d.getFullYear() },
  //     { channel: 'y' },
  //   ]);
  // 
  // chart.lineY().data([0]).style('stroke', '#000').style('strokeOpacity', 0.2);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "point",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/56b6b137-e04e-4757-8af5-d75bafaef886.csv"
  },
  "scale": {},
  "style": {
    "stroke": "#000"
  }
};

const GeneralPointPointSequentialChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPointPointSequentialChart;
