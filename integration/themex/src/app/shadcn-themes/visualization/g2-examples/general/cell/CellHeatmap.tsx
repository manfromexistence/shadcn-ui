// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
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
  "scale": {},
  "axis": {
    "y": {
      "labelAutoRotate": false
    }
  },
  "style": {
    "stroke": "black"
  },
  "labels": [
    null,
    null
  ]
};

const GeneralCellCellHeatmapChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralCellCellHeatmapChart;
