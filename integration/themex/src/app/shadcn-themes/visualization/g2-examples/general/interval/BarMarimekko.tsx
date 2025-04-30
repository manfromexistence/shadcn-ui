'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-marimekko.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/marimekko-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  //   height: 800,
  //   paddingLeft: 0,
  //   paddingRight: 0,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/3041da62-1bf4-4849-aac3-01a387544bf4.csv',
  //   })
  //   .transform({ type: 'flexX', reducer: 'sum' })
  //   .transform({ type: 'stackY' })
  //   .transform({ type: 'normalizeY' })
  //   .encode('x', 'market')
  //   .encode('y', 'value')
  //   .encode('color', 'segment')
  //   .axis('y', false)
  //   .scale('x', { paddingOuter: 0, paddingInner: 0.01 })
  //   .tooltip('value')
  //   .label({
  //     text: 'segment',
  //     x: 5,
  //     y: 5,
  //     textAlign: 'start',
  //     textBaseline: 'top',
  //     fontSize: 10,
  //     fill: '#fff',
  //   })
  //   .label({
  //     text: 'value',
  //     x: 5,
  //     y: 5,
  //     textAlign: 'start',
  //     dy: 15,
  //     fontSize: 10,
  //     fill: '#fff',
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
  "width": 900,
  "height": 800,
  "paddingLeft": 0,
  "paddingRight": 0,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "market",
    "y": "value",
    "color": "segment"
  },
  "transform": [
    {
      "type": "flexX",
      "reducer": "sum"
    },
    {
      "type": "stackY"
    },
    {
      "type": "normalizeY"
    }
  ],
  "scale": {
    "x": {
      "paddingOuter": 0,
      "paddingInner": 0.01
    }
  },
  "axis": {
    "y": false
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    text: 'segment',\n    x: 5,\n    y: 5,\n    textAlign: 'start',\n    textBaseline: 'top',\n    fontSize: 10,\n    fill: '#fff',\n  } */,
    /* TODO: Manually convert label options: {\n    text: 'value',\n    x: 5,\n    y: 5,\n    textAlign: 'start',\n    dy: 15,\n    fontSize: 10,\n    fill: '#fff',\n  } */
  ]
};

const GeneralIntervalBarMarimekkoChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarMarimekkoChart;
