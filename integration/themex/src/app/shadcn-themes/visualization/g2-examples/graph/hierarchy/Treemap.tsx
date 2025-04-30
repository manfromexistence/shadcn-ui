// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
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
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">H</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphHierarchyTreemapChart;
