// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
  "width": 900,
  "height": 600,
  "type": "sankey",
  "scale": {},
  "style": {
    "labelFontWeight": "bold"
  }
};

const GraphNetworkSankeyChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">图</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphNetworkSankeyChart;
