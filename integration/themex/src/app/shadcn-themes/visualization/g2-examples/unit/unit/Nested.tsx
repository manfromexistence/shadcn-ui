// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/unit/unit/demo/nested.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingBottom: 60,
  //   paddingLeft: 85,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/titanic.json',
  //     transform: [
  //       {
  //         type: 'sortBy',
  //         fields: ['survived', 'sex'],
  //       },
  //       {
  //         type: 'map',
  //         callback: ({ survived, ...d }) => ({
  //           ...d,
  //           survived: survived + '',
  //         }),
  //       },
  //     ],
  //   })
  //   .encode('y', 'pclass')
  //   .attr('shareSize', true);
  // 
  // const facetRect2 = facetRect
  //   .facetRect()
  //   .encode('x', 'survived')
  //   .axis('y', false)
  //   .axis('x', {
  //     labelFormatter: (d) => (d === '1' ? 'Yes' : 'No'),
  //     position: 'bottom',
  //   })
  //   .attr('shareSize', true);
  // 
  // const facetRect3 = facetRect2
  //   .facetRect()
  //   .encode('y', 'sex')
  //   .attr('shareSize', true)
  //   .axis('x', false)
  //   .axis('y', { position: 'left' });
  // 
  // facetRect3
  //   .point()
  //   .transform({ type: 'pack' })
  //   .legend('color', { labelFormatter: (d) => (d === '1' ? 'Yes' : 'No') })
  //   .encode('color', 'survived')
  //   .encode('shape', 'point')
  //   .encode('size', 3)
  //   .tooltip({
  //     title: '',
  //     items: ['pclass', 'survived', 'sex'],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "paddingBottom": 60,
  "paddingLeft": 85,
  "type": "facetRect",
  "encode": {
    "y": "sex",
    "x": "survived",
    "color": "survived",
    "shape": "point"
  },
  "transform": [
    {
      "type": "pack"
    }
  ],
  "axis": {
    "y": {
      "position": "left"
    },
    "x": false
  },
  "legend": {}
};

const UnitUnitNestedChart: React.FC = () => {
    
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

export default UnitUnitNestedChart;
