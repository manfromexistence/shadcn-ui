'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/axis/demo/axis.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data([
  //   {
  //     pos: 1,
  //     no: 1,
  //     driver: 'Max Verstappen',
  //     car: 'RED BULL RACING HONDA RBPT',
  //     laps: 57,
  //     time: '1:33:56.736',
  //     pts: 25,
  //   },
  //   {
  //     pos: 2,
  //     no: 11,
  //     driver: 'Sergio Perez',
  //     car: 'RED BULL RACING HONDA RBPT',
  //     laps: 57,
  //     time: '+11.987s',
  //     pts: 18,
  //   },
  //   {
  //     pos: 3,
  //     no: 14,
  //     driver: 'Fernando Alonso',
  //     car: 'ASTON MARTIN ARAMCO MERCEDES',
  //     laps: 57,
  //     time: '+38.637s',
  //     pts: 15,
  //   },
  //   {
  //     pos: 4,
  //     no: 55,
  //     driver: 'Carlos Sainz',
  //     car: 'FERRARI',
  //     laps: 57,
  //     time: '+48.052s',
  //     pts: 12,
  //   },
  //   {
  //     pos: 5,
  //     no: 44,
  //     driver: 'Lewis Hamilton',
  //     car: 'MERCEDES',
  //     laps: 57,
  //     time: '+50.977s',
  //     pts: 10,
  //   },
  // ]);
  // 
  // function medal(ranking) {
  //   if (ranking > 2) return `第${ranking + 1}名`;
  //   const { document } = chart.getContext().canvas!;
  //   const group = document.createElement('g', {});
  //   const size = ranking === 0 ? 20 : 15;
  //   const icon = document.createElement('image', {
  //     style: {
  //       src: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1NiMRKb2sfMAAAAAAAAAAAAADmJ7AQ/original',
  //       width: size,
  //       height: size,
  //       transform: `translate(-${size / 2}, -${size / 2})`,
  //     },
  //   });
  //   const text = ['冠军🏆', '亚军🥈', '季军🥉'][ranking];
  //   const label = document.createElement('text', {
  //     style: {
  //       text,
  //       fill: 'gray',
  //       textAlign: 'center',
  //       transform: `translate(0, 35)`,
  //     },
  //   });
  // 
  //   group.appendChild(icon);
  //   group.appendChild(label);
  //   return group;
  // }
  // 
  // chart
  //   .interval()
  //   .encode('x', 'pos')
  //   .encode('y', 'pts')
  //   .encode('color', 'pts')
  //   .axis({
  //     x: {
  //       title: 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023 - RACE RESULT',
  //       size: 80,
  //       labelFormatter: (datum, index) => medal(index),
  //     },
  //     y: false,
  //   })
  //   .label({
  //     text: 'driver',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .label({
  //     text: 'time',
  //     transform: [{ type: 'contrastReverse' }],
  //     dy: 20,
  //     fontStyle: 'italic',
  //   })
  //   .tooltip({ title: 'car' })
  //   .legend(false);
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
  "type": "getContext",
  "dataComment": /* TODO: Manually define inline data array */,
  "encode": {
    "x": "pos",
    "y": "pts",
    "color": "pts"
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'driver',\n    transform: [{ type: 'contrastReverse' }],\n  } */
    },
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'time',\n    transform: [{ type: 'contrastReverse' }],\n    dy: 20,\n    fontStyle: 'italic',\n  } */
    }
  ]
};

const ComponentAxisAxisChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentAxisAxisChart;
