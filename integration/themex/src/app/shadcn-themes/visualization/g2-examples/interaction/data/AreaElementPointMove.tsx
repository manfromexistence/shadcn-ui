// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/data/demo/area-element-point-move.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .area()
  //   .data([
  //     { year: '1991', value: 3, type: 'type1' },
  //     { year: '1992', value: 4, type: 'type1' },
  //     { year: '1993', value: 3.5, type: 'type1' },
  //     { year: '1994', value: 5, type: 'type1' },
  //     { year: '1995', value: 4.9, type: 'type1' },
  //     { year: '1996', value: 2, type: 'type1' },
  //     { year: '1997', value: 7, type: 'type1' },
  //     { year: '1998', value: 11, type: 'type1' },
  //     { year: '1999', value: 13, type: 'type1' },
  //     { year: '1991', value: 6, type: 'type2' },
  //     { year: '1992', value: 1, type: 'type2' },
  //     { year: '1993', value: 4, type: 'type2' },
  //     { year: '1994', value: 9, type: 'type2' },
  //     { year: '1995', value: 1.9, type: 'type2' },
  //     { year: '1996', value: 5, type: 'type2' },
  //     { year: '1997', value: 4, type: 'type2' },
  //     { year: '1998', value: 6, type: 'type2' },
  //     { year: '1999', value: 15, type: 'type2' },
  //   ])
  //   .interaction({
  //     legendFilter: false,
  //     elementPointMove: {
  //       selection: [1, 4],
  //     },
  //   })
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('key', 'type')
  //   .encode('color', 'type');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "area",
  "data": [
    {
      "year": "1991",
      "value": 3,
      "type": "type1"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "type1"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "type1"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "type1"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "type1"
    },
    {
      "year": "1996",
      "value": 2,
      "type": "type1"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "type1"
    },
    {
      "year": "1998",
      "value": 11,
      "type": "type1"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "type1"
    },
    {
      "year": "1991",
      "value": 6,
      "type": "type2"
    },
    {
      "year": "1992",
      "value": 1,
      "type": "type2"
    },
    {
      "year": "1993",
      "value": 4,
      "type": "type2"
    },
    {
      "year": "1994",
      "value": 9,
      "type": "type2"
    },
    {
      "year": "1995",
      "value": 1.9,
      "type": "type2"
    },
    {
      "year": "1996",
      "value": 5,
      "type": "type2"
    },
    {
      "year": "1997",
      "value": 4,
      "type": "type2"
    },
    {
      "year": "1998",
      "value": 6,
      "type": "type2"
    },
    {
      "year": "1999",
      "value": 15,
      "type": "type2"
    }
  ]
};

const InteractionDataAreaElementPointMoveChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">N</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionDataAreaElementPointMoveChart;
