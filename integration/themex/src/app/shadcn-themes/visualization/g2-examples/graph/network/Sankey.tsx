'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/network/demo/sankey.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { schemeTableau10 } from 'd3-scale-chromatic';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  //   height: 600,
  // });
  // 
  // chart
  //   .sankey()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/energy.json',
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: (data) => ({ links: data }),
  //       },
  //     ],
  //   })
  //   .layout({
  //     nodeAlign: 'center',
  //     nodePadding: 0.03,
  //   })
  //   .scale('color', { range: schemeTableau10 })
  //   .style('labelSpacing', 3)
  //   .style('labelFontWeight', 'bold')
  //   .style('nodeLineWidth', 1.2)
  //   .style('linkFillOpacity', 0.4);
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
  "width": 900,
  "height": 600,
  "type": "sankey",
  "scale": {},
  "style": {
    "labelFontWeight": "bold"
  }
};

const GraphNetworkSankeyChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">图</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphNetworkSankeyChart;
