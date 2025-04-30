'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/axis/demo/axis-multi.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //   })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .axis('y', { labelFormatter: '.0%' });
  // 
  // chart
  //   .axisY()
  //   .attr('position', 'right')
  //   .scale('y', {
  //     type: 'linear',
  //     independent: true,
  //     domain: [0, 10],
  //     range: [1, 0],
  //   })
  //   .style('grid', false);
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
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "letter",
    "y": "frequency"
  },
  "scale": {
    "y": {
      "comment": /* TODO: Manually convert scale options: {\n    type: 'linear',\n    independent: true,\n    domain: [0, 10],\n    range: [1, 0],\n  } */
    }
  },
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "style": {
    "grid": /* TODO: Convert style value/expression: false */
  }
};

const ComponentAxisAxisMultiChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentAxisAxisMultiChart;
