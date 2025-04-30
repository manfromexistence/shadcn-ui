'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/data/demo/pie-element-point-move.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: '事例一', count: 40, percent: 0.4 },
  //   { item: '事例二', count: 21, percent: 0.21 },
  //   { item: '事例三', count: 17, percent: 0.17 },
  //   { item: '事例四', count: 13, percent: 0.13 },
  //   { item: '事例五', count: 9, percent: 0.09 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'theta', outerRadius: 0.8 });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .transform({ type: 'stackY' })
  //   .interaction({
  //     legendFilter: false,
  //     elementPointMove: {
  //       pathLineDash: [2, 4],
  //       pathStroke: '#fff',
  //       pathLineWidth: 2,
  //     },
  //   })
  //   .encode('y', 'count')
  //   .encode('color', 'item')
  //   .encode('key', 'item')
  //   .tooltip((data) => ({
  //     name: data.item,
  //     value: `${data.percent * 100}%`,
  //   }));
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
  "type": "interval",
  "encode": {
    "y": "count",
    "color": "item",
    "key": "item"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "coordinate": {
    "type": "theta",
    "outerRadius": 0.8
  }
};

const InteractionDataPieElementPointMoveChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">N</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionDataPieElementPointMoveChart;
