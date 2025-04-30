'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/sunburst/demo/sunburst-interaction.ts
  ================================================================================
  // import { plotlib } from '@antv/g2-extension-plot';
  // import { Runtime, corelib, extend } from '@antv/g2';
  // 
  // const Chart = extend(Runtime, { ...corelib(), ...plotlib() });
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .sunburst()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json',
  //   })
  //   .encode('value', 'sum')
  //   .label({
  //     text: 'name',
  //     transform: [
  //       {
  //         type: 'overflowHide',
  //       },
  //     ],
  //   })
  //   .interaction({
  //     treemapDrillDown: {
  //       breadCrumb: {
  //         rootText: '起始',
  //         style: {
  //           fontSize: '18px',
  //           fill: '#333',
  //         },
  //         active: {
  //           fill: 'red',
  //         },
  //       },
  //       // FixedColor default: true, true -> treemapDrillDown update scale, false -> scale keep.
  //       fixedColor: false,
  //     },
  //   })
  //   .state({
  //     active: { zIndex: 2, stroke: 'red' },
  //     inactive: { zIndex: 1, stroke: '#fff' },
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
  "type": "corelib",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "value": "sum"
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'name',\n    transform: [\n      {\n        type: 'overflowHide',\n      },\n    ],\n  } */
    }
  ]
};

const GeneralSunburstSunburstInteractionChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralSunburstSunburstInteractionChart;
