// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/hierarchy/demo/tree.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 1500,
  //   width: 800,
  //   insetRight: 80,
  //   insetLeft: 15,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .tree()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/flare.json',
  //   })
  //   .layout({
  //     sortBy: (a, b) => a.value - b.value,
  //   })
  //   .style('nodeFill', (d) => (d.height === 0 ? '#999' : '#000'))
  //   .style('linkStroke', '#999')
  //   .style('labelText', (d) => d.data.name || '-')
  //   .style('labelFontSize', (d) => (d.height === 0 ? 7 : 12))
  //   .style('labelTextAlign', (d) => (d.height === 0 ? 'start' : 'end'))
  //   .style('labelPosition', (d) => (d.height !== 0 ? 'left' : 'right'))
  //   .style('labelDx', (d) => (d.height === 0 ? 5 : -5))
  //   .style('labelBackground', true)
  //   .style('labelBackgroundFill', '#fff');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 1500,
  "width": 800,
  "insetRight": 80,
  "insetLeft": 15,
  "type": "tree",
  "style": {
    "linkStroke": "#999",
    "labelBackgroundFill": "#fff"
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GraphHierarchyTreeChart: React.FC = () => {
    
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

export default GraphHierarchyTreeChart;
