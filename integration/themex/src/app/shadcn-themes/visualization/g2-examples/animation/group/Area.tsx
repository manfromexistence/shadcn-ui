'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/group/demo/area.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://canisjs.github.io/canis-editor/index.html?exmp=os_1
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .area()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/os.json',
  //   })
  //   .encode('x', 'Year')
  //   .encode('y', 'Share')
  //   .encode('color', 'OperatingSystem')
  //   .encode('shape', 'smooth')
  //   .transform({ type: 'stackEnter', groupBy: 'color', duration: 5000 })
  //   .transform({ type: 'stackY', orderBy: 'value' })
  //   .animate('enter', { type: 'growInX' });
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
  "type": "area",
  "encode": {
    "x": "Year",
    "y": "Share",
    "color": "OperatingSystem",
    "shape": "smooth"
  },
  "transform": [
    {
      "type": "stackEnter",
      "groupBy": "color",
      "duration": 5000
    },
    {
      "type": "stackY",
      "orderBy": "value"
    }
  ]
};

const AnimationGroupAreaChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationGroupAreaChart;
