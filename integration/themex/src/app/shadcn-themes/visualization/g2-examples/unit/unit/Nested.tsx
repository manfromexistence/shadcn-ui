'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "paddingBottom": 60,
  "paddingLeft": 85,
  "type": "facetRect",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "y": "sex",
    "x": "survived",
    "color": "survived",
    "shape": "point",
    "size": /* TODO: Convert encode function/expression: 3 */
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
  "legend": {
    "color": {
      "comment": /* TODO: Manually convert legend options: { labelFormatter: (d) => (d === '1' ? 'Yes' : 'No') } */
    }
  }
};

const UnitUnitNestedChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">U</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default UnitUnitNestedChart;
