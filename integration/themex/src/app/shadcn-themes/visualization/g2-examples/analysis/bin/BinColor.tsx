'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
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
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisBinBinColorChart;
