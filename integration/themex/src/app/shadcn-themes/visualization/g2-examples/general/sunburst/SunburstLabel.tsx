// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/sunburst/demo/sunburst-label.ts
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
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "corelib",
  "encode": {
    "value": "sum"
  },
  "labels": [
    null
  ]
};

const GeneralSunburstSunburstLabelChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralSunburstSunburstLabelChart;
