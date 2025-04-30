'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/base.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { year: '1991', value: 3 },
  //   { year: '1992', value: 4 },
  //   { year: '1993', value: 3.5 },
  //   { year: '1994', value: 5 },
  //   { year: '1995', value: 4.9 },
  //   { year: '1996', value: 6 },
  //   { year: '1997', value: 7 },
  //   { year: '1998', value: 9 },
  //   { year: '1999', value: 13 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data(data)
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .scale('x', {
  //     range: [0, 1],
  //   })
  //   .scale('y', {
  //     domainMin: 0,
  //     nice: true,
  //   });
  // 
  // chart.line().label({
  //   text: 'value',
  //   style: {
  //     dx: -10,
  //     dy: -12,
  //   },
  // });
  // 
  // chart.point().style('fill', 'white').tooltip(false);
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
  "type": "line",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "year",
    "y": "value"
  },
  "scale": {
    "x": {
      "comment": /* TODO: Manually convert scale options: {\n    range: [0, 1],\n  } */
    },
    "y": {
      "comment": /* TODO: Manually convert scale options: {\n    domainMin: 0,\n    nice: true,\n  } */
    }
  },
  "style": {
    "fill": "white"
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n  text: 'value',\n  style: {\n    dx: -10,\n    dy: -12,\n  },\n} */
    }
  ]
};

const GeneralLineBaseChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineBaseChart;
