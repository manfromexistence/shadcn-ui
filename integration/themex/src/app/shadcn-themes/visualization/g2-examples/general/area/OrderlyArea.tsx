'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/orderly-area.ts
  ================================================================================
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
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json',
  //   })
  //   .transform({ type: 'stackY', orderBy: 'value' })
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'unemployed')
  //   .encode('color', 'industry')
  //   .encode('shape', 'smooth')
  //   .scale('x', { utc: true })
  //   .axis('x', { title: 'Date' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .legend('color', { size: 72, autoWrap: true, maxRows: 3, cols: 6 });
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
    "y": "unemployed",
    "color": "industry",
    "shape": "smooth"
  },
  "transform": [
    {
      "type": "stackY",
      "orderBy": "value"
    }
  ],
  "scale": {
    "x": {
      "utc": true
    }
  },
  "axis": {
    "x": {
      "title": "Date"
    },
    "y": {
      "labelFormatter": "~s"
    }
  },
  "legend": {}
};

const GeneralAreaOrderlyAreaChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaOrderlyAreaChart;
