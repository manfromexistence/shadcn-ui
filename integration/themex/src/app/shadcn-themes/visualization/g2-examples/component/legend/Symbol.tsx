// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "genre",
    "y": "sold"
  }
};

const ComponentLegendSymbolChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLegendSymbolChart;
