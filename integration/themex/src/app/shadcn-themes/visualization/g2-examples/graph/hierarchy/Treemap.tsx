'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/hierarchy/demo/treemap.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { schemeTableau10 } from 'd3-scale-chromatic';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 900,
  //   width: 1100,
  // });
  // 
  // chart
  //   .treemap()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/flare-treemap.json',
  //   })
  //   .layout({
  //     path: (d) => d.name.replace(/\./g, '/'),
  //     tile: 'treemapBinary',
  //     paddingInner: 1,
  //   })
  //   .encode('value', 'size')
  //   .scale('color', { range: schemeTableau10 })
  //   .style(
  //     'labelText',
  //     (d) =>
  //       d.data.name
  //         .split('.')
  //         .pop()
  //         .split(/(?=[A-Z][a-z])/g)[0],
  //   )
  //   .style('labelFill', '#000')
  //   .style('labelPosition', 'top-left')
  //   .style('fillOpacity', 0.5);
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
  "height": 900,
  "width": 1100,
  "type": "treemap",
  "encode": {
    "value": "size"
  },
  "scale": {},
  "style": {
    "labelFill": "#000",
    "labelPosition": "top-left"
  }
};

const GraphHierarchyTreemapChart: React.FC = () => {
    
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

export default GraphHierarchyTreemapChart;
