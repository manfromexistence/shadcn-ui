'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/symbol.ts
  ================================================================================
  // import { Chart, register, type SymbolFactor } from '@antv/g2';
  // 
  // const customSquare = Object.assign<SymbolFactor, Partial<SymbolFactor>>(
  //   (x, y, r) => {
  //     const radius = r / 2;
  // 
  //     return [
  //       ['M', x + radius, y - r],
  //       ['L', x - radius, y - r],
  //       ['A', radius, radius, 0, 0, 0, x - r, y - radius],
  //       ['L', x - r, y + radius],
  //       ['A', radius, radius, 0, 0, 0, x - radius, y + r],
  //       ['L', x + radius, y + r],
  //       ['A', radius, radius, 0, 0, 0, x + r, y + radius],
  //       ['L', x + r, y - radius],
  //       ['A', radius, radius, 0, 0, 0, x + radius, y - r],
  //       ['Z'],
  //     ];
  //   },
  //   {
  //     // 空心请设置为 ['stroke', 'lineWidth']
  //     style: ['fill']
  //   },
  // );
  // 
  // register('symbol.customSquare', customSquare);
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const data = [
  //   { genre: 'Sports', sold: 275 },
  //   { genre: 'Strategy', sold: 115 },
  //   { genre: 'Action', sold: 120 },
  //   { genre: 'Shooter', sold: 350 },
  //   { genre: 'Other', sold: 150 },
  // ];
  // 
  // const colorField = 'genre';
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'genre')
  //   .encode('y', 'sold')
  //   .encode('color', colorField)
  //   .legend({
  //     color: {
  //       itemMarker: 'customSquare',
  //     },
  //   });
  // 
  // chart.render();
  // 
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
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "genre",
    "y": "sold",
    "color": /* TODO: Convert encode function/expression: colorField */
  }
};

const ComponentLegendSymbolChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLegendSymbolChart;
