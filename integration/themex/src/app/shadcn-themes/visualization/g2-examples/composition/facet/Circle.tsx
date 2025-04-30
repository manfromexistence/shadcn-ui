'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/circle.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const M = [
  //   'Jan.',
  //   'Feb.',
  //   'Mar.',
  //   'Apr.',
  //   'May',
  //   'Jun.',
  //   'Jul.',
  //   'Aug.',
  //   'Sept.',
  //   'Oct.',
  //   'Nov.',
  //   'Dec.',
  // ];
  // const N = ['A', 'B', 'C', 'D'];
  // const data = M.flatMap((month) =>
  //   N.map((name) => ({
  //     month,
  //     name,
  //     value: Math.random(),
  //   })),
  // );
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 480,
  //   height: 480,
  // });
  // 
  // const facetCircle = chart.facetCircle().data(data).encode('position', 'month');
  // 
  // facetCircle
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('color', 'name');
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
  "width": 480,
  "height": 480,
  "type": "random",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "position": "month",
    "x": "name",
    "y": "value",
    "color": "name"
  }
};

const CompositionFacetCircleChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetCircleChart;
