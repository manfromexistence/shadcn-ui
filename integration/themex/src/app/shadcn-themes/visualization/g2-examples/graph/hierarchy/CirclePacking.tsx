'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/hierarchy/demo/circle-packing.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { interpolateHcl } from 'd3-interpolate';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 1000,
  //   height: 1000,
  // });
  // 
  // chart
  //   .pack()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/flare.json',
  //   })
  //   .layout({
  //     padding: 5,
  //   })
  //   .encode('value', 'value')
  //   .encode('color', 'depth')
  //   .scale('color', {
  //     domain: [0, 5],
  //     range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
  //     interpolate: interpolateHcl,
  //   })
  //   .legend(false)
  //   .style('labelText', (d) =>
  //     d.r >= 10 && d.height === 0 ? `${d.data.name}` : '',
  //   );
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
  "width": 1000,
  "height": 1000,
  "type": "pack",
  "encode": {
    "value": "value",
    "color": "depth"
  },
  "scale": {},
  "style": {}
};

const GraphHierarchyCirclePackingChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">H</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphHierarchyCirclePackingChart;
