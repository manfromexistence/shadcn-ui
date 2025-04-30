// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/bin/demo/bin-opacity.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .rect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/athletes.json',
  //   })
  //   .encode('x', 'weight')
  //   .encode('y', 'height')
  //   .encode('color', 'sex')
  //   .transform({ type: 'bin', opacity: 'count' })
  //   .legend('opacity', false)
  //   .style('inset', 0.5)
  //   .tooltip({
  //     title: { channel: 'opacity' },
  //     items: [
  //       (d, i, data, column) => ({
  //         name: 'weight',
  //         value: `${column.x.value[i]}, ${column.x1.value[i]}`,
  //       }),
  //       (d, i, data, column) => ({
  //         name: 'height',
  //         value: `${column.y.value[i]}, ${column.y1.value[i]}`,
  //       }),
  //     ],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "rect",
  "encode": {
    "x": "weight",
    "y": "height",
    "color": "sex"
  },
  "transform": [
    {
      "type": "bin",
      "opacity": "count"
    }
  ],
  "legend": {
    "opacity": false
  },
  "style": {}
};

const AnalysisBinBinOpacityChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisBinBinOpacityChart;
