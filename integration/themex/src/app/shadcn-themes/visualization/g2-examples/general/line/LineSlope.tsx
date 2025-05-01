// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-slope.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/slope-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/f0bbdcaa-9dbf-4d44-95c1-ac2e26765023.csv',
  //   })
  //   .encode('x', 'year')
  //   .encode('y', 'receipts')
  //   .encode('series', 'country')
  //   .encode('color', '#000')
  //   .scale('x', { type: 'point', padding: 0.25 })
  //   .label({
  //     text: (d) => `${d.country} ${d.receipts}`,
  //     selector: 'first',
  //     transform: [{ type: 'overlapDodgeY' }],
  //     fontSize: 10,
  //     dx: -3,
  //     textAlign: 'end',
  //   })
  //   .label({
  //     text: (d) => `${d.receipts} ${d.country}`,
  //     selector: 'last',
  //     transform: [{ type: 'overlapDodgeY' }],
  //     fontSize: 10,
  //     dx: 3,
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/f0bbdcaa-9dbf-4d44-95c1-ac2e26765023.csv"
  },
  "scale": {
    "x": {
      "type": "point",
      "padding": 0.25
    }
  },
  "labels": [
    null,
    null
  ]
};

const GeneralLineLineSlopeChart: React.FC = () => {
    
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

export default GeneralLineLineSlopeChart;
