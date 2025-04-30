'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/cell/demo/cell-heatmap.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@mbostock/the-impact-of-vaccines
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 1300,
  //   height: 900,
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/vaccines.json',
  //   })
  //   .axis('y', { labelAutoRotate: false })
  //   .axis('x', {
  //     tickFilter: (d) => d % 10 === 0,
  //     position: 'top',
  //   })
  //   .scale('color', {
  //     palette: 'puRd',
  //     relations: [
  //       [(d) => d === null, '#eee'],
  //       [0, '#fff'],
  //     ],
  //   });
  // 
  // chart
  //   .cell()
  //   .encode('x', 'year')
  //   .encode('y', 'name')
  //   .encode('color', 'value')
  //   .style('inset', 0.5)
  //   .tooltip({ title: { channel: 'color', valueFormatter: '.2f' } });
  // 
  // chart
  //   .lineX()
  //   .data([1963])
  //   .style('stroke', 'black')
  //   .label({
  //     text: '1963',
  //     position: 'bottom',
  //     textBaseline: 'top',
  //     fontSize: 10,
  //   })
  //   .label({
  //     text: 'Measles vaccine introduced',
  //     position: 'bottom',
  //     textBaseline: 'top',
  //     fontSize: 10,
  //     fontWeight: 'bold',
  //     dy: 10,
  //   })
  //   .tooltip(false);
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
  "width": 1300,
  "height": 900,
  "type": "cell",
  "data": [
    1963
  ],
  "encode": {
    "x": "year",
    "y": "name",
    "color": "value"
  },
  "scale": {
    "color": /* TODO: Manually convert scale options: {\n    palette: 'puRd',\n    relations: [\n      [(d) => d === null, '#eee'],\n      [0, '#fff'],\n    ],\n  } */
  },
  "axis": {
    "y": {
      "labelAutoRotate": false
    },
    "x": /* TODO: Manually convert axis options: {\n    tickFilter: (d) => d % 10 === 0,\n    position: 'top',\n  } */
  },
  "style": {
    "inset": /* TODO: Convert style value/expression: 0.5 */,
    "stroke": "black"
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    text: '1963',\n    position: 'bottom',\n    textBaseline: 'top',\n    fontSize: 10,\n  } */,
    /* TODO: Manually convert label options: {\n    text: 'Measles vaccine introduced',\n    position: 'bottom',\n    textBaseline: 'top',\n    fontSize: 10,\n    fontWeight: 'bold',\n    dy: 10,\n  } */
  ]
};

const GeneralCellCellHeatmapChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralCellCellHeatmapChart;
