// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/unit/unit/demo/2d.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/titanic2.json',
  //     transform: [
  //       {
  //         type: 'sortBy',
  //         fields: [['Survived', false]],
  //       },
  //     ],
  //   })
  //   .encode('x', 'Class')
  //   .encode('y', 'Sex');
  // 
  // facetRect
  //   .point()
  //   .transform({ type: 'pack' })
  //   .encode('color', 'Survived')
  //   .encode('shape', 'point')
  //   .encode('size', 3)
  //   .tooltip({
  //     title: '',
  //     items: ['pclass', 'survived'],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "facetRect",
  "encode": {
    "x": "Class",
    "y": "Sex",
    "color": "Survived",
    "shape": "point"
  },
  "transform": [
    {
      "type": "pack"
    }
  ]
};

const UnitUnit2dChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">U</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default UnitUnit2dChart;
