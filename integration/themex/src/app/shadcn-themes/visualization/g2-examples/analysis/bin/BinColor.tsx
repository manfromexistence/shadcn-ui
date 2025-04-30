// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/bin/demo/bin-color.ts
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
  //     value: 'https://assets.antv.antgroup.com/g2/movies.json',
  //   })
  //   .encode('x', 'IMDB Rating')
  //   .encode('y', 'Rotten Tomatoes Rating')
  //   .transform({ type: 'bin', color: 'count', thresholdsX: 30, thresholdsY: 20 })
  //   .scale('color', { palette: 'ylGnBu' })
  //   .tooltip({
  //     title: { channel: 'color' },
  //     items: [
  //       (d, i, data, column) => ({
  //         name: 'IMDB Rating',
  //         value: `${column.x.value[i]}, ${column.x1.value[i]}`,
  //       }),
  //       (d, i, data, column) => ({
  //         name: 'Rotten Tomatoes Rating',
  //         value: `${column.y.value[i]}, ${column.y1.value[i]}`,
  //       }),
  //     ],
  //     render: () => '1',
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
    "x": "IMDB Rating",
    "y": "Rotten Tomatoes Rating"
  },
  "transform": [
    {
      "type": "bin",
      "color": "count",
      "thresholdsX": 30,
      "thresholdsY": 20
    }
  ],
  "scale": {
    "color": {
      "palette": "ylGnBu"
    }
  }
};

const AnalysisBinBinColorChart: React.FC = () => {
    
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

export default AnalysisBinBinColorChart;
