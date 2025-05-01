// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interesting/interesting/demo/25d-column.ts
  ================================================================================
  // import { Chart, register } from '@antv/g2';
  // 
  // register('shape.interval.column25d', myColumn);
  // 
  // const data = [
  //   { year: '1951 年', sales: 38 },
  //   { year: '1952 年', sales: 52 },
  //   { year: '1956 年', sales: 61 },
  //   { year: '1957 年', sales: 145 },
  //   { year: '1958 年', sales: 48 },
  //   { year: '1959 年', sales: 38 },
  //   { year: '1960 年', sales: 38 },
  //   { year: '1962 年', sales: 38 },
  //   { year: '1963 年', sales: 65 },
  //   { year: '1964 年', sales: 122 },
  //   { year: '1967 年', sales: 132 },
  //   { year: '1968 年', sales: 144 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'year')
  //   .encode('y', 'sales')
  //   .style('shape', 'column25d')
  //   .scale('x', { padding: 0.3 });
  // 
  // chart.legend('year', {
  //   width: 10,
  // });
  // 
  // chart.render();
  // 
  // /**
  //  * Draw 2.5d column shape.
  //  */
  // function myColumn({ fill, stroke }, context) {
  //   return (points) => {
  //     const x3 = points[1][0] - points[0][0];
  //     const x4 = x3 / 2 + points[0][0];
  //     const { document } = context;
  //     const g = document.createElement('g', {});
  // 
  //     const r = document.createElement('polygon', {
  //       style: {
  //         points: [
  //           [points[0][0], points[0][1]],
  //           [x4, points[1][1] + 8],
  //           [x4, points[3][1] + 8],
  //           [points[3][0], points[3][1]],
  //         ],
  //         fill: 'rgba(114, 177, 207, 0.5)',
  //         stroke: 'rgba(0,0,0,0.1)',
  //         strokeOpacity: 0.1,
  //         inset: 30,
  //       },
  //     });
  // 
  //     const p = document.createElement('polygon', {
  //       style: {
  //         points: [
  //           [x4, points[1][1] + 8],
  //           [points[1][0], points[1][1]],
  //           [points[2][0], points[2][1]],
  //           [x4, points[2][1] + 8],
  //         ],
  //         fill: 'rgba(126, 212, 236, 0.5)',
  //         stroke: 'rgba(0,0,0,0.3)',
  //         strokeOpacity: 0.1,
  //       },
  //     });
  // 
  //     const t = document.createElement('polygon', {
  //       style: {
  //         points: [
  //           [points[0][0], points[0][1]],
  //           [x4, points[1][1] - 8],
  //           [points[1][0], points[1][1]],
  //           [x4, points[1][1] + 8],
  //         ],
  //         fill: 'rgba(173, 240, 255, 0.65)',
  //       },
  //     });
  // 
  //     g.appendChild(r);
  //     g.appendChild(p);
  //     g.appendChild(t);
  // 
  //     return g;
  //   };
  // }
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": [
    {
      "year": "1951 年",
      "sales": 38
    },
    {
      "year": "1952 年",
      "sales": 52
    },
    {
      "year": "1956 年",
      "sales": 61
    },
    {
      "year": "1957 年",
      "sales": 145
    },
    {
      "year": "1958 年",
      "sales": 48
    },
    {
      "year": "1959 年",
      "sales": 38
    },
    {
      "year": "1960 年",
      "sales": 38
    },
    {
      "year": "1962 年",
      "sales": 38
    },
    {
      "year": "1963 年",
      "sales": 65
    },
    {
      "year": "1964 年",
      "sales": 122
    },
    {
      "year": "1967 年",
      "sales": 132
    },
    {
      "year": "1968 年",
      "sales": 144
    }
  ],
  "scale": {
    "x": {
      "padding": 0.3
    }
  },
  "style": {
    "shape": "column25d"
  }
};

const InterestingInteresting25dColumnChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InterestingInteresting25dColumnChart;
