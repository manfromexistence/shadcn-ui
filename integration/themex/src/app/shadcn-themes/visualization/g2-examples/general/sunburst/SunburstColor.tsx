// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/sunburst/demo/sunburst-color.ts
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
  //   .encode('color', 'label');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json"
  }
};

const GeneralSunburstSunburstColorChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralSunburstSunburstColorChart;
