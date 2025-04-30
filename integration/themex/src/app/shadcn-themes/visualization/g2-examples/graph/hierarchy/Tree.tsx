'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "height": 1500,
  "width": 800,
  "insetRight": 80,
  "insetLeft": 15,
  "type": "tree",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "style": {
    "nodeFill": /* TODO: Convert style value/expression: (d */,
    "linkStroke": "#999",
    "labelText": /* TODO: Convert style value/expression: (d */,
    "labelFontSize": /* TODO: Convert style value/expression: (d */,
    "labelTextAlign": /* TODO: Convert style value/expression: (d */,
    "labelPosition": /* TODO: Convert style value/expression: (d */,
    "labelDx": /* TODO: Convert style value/expression: (d */,
    "labelBackground": /* TODO: Convert style value/expression: true */,
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
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">H</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GraphHierarchyTreeChart;
