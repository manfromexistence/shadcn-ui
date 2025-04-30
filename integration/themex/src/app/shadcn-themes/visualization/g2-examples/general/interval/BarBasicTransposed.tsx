'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-basic-transposed.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { year: '1951 年', sales: 38 },
  //   { year: '1952 年', sales: 52 },
  //   { year: '1956 年', sales: 61 },
  //   { year: '1957 年', sales: 145 },
  //   { year: '1958 年', sales: 48 },
  //   { year: '1959 年', sales: 38 },
  //   { year: '1960 年', sales: 38 },
  //   { year: '1962 年', sales: 38 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .coordinate({ transform: [{ type: 'transpose' }] })
  //   .data(data)
  //   .encode('x', 'year')
  //   .encode('y', 'sales');
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
  "encode": {
    "x": "year",
    "y": "sales"
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GeneralIntervalBarBasicTransposedChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarBasicTransposedChart;
