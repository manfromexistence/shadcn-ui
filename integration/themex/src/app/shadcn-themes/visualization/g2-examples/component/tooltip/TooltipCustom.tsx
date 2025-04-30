'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-custom.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   inset: 6,
  // });
  // 
  // chart
  //   .boxplot()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/morley.json',
  //   })
  //   .encode('x', 'Expt')
  //   .encode('y', 'Speed')
  //   .tooltip({ name: 'min', channel: 'y' })
  //   .tooltip({ name: 'q1', channel: 'y1' })
  //   .tooltip({ name: 'q2', channel: 'y2' })
  //   .tooltip({ name: 'q3', channel: 'y3' })
  //   .tooltip({ name: 'max', color: 'red', channel: 'y4' });
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
  "inset": 6,
  "type": "boxplot",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "Expt",
    "y": "Speed"
  }
};

const ComponentTooltipTooltipCustomChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipCustomChart;
