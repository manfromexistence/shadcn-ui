'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/unit/unit/demo/share-data.ts
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
  //     value: 'https://assets.antv.antgroup.com/g2/titanic.json',
  //     transform: [
  //       {
  //         type: 'sortBy',
  //         fields: ['survived'],
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
  //   .encode('x', 'pclass')
  //   .attr('shareData', true);
  // 
  // facetRect
  //   .point()
  //   .transform({ type: 'pack' })
  //   .legend('color', { labelFormatter: (d) => (d === '1' ? 'Yes' : 'No') })
  //   .encode('color', 'survived')
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "facetRect",
  "encode": {
    "x": "pclass",
    "color": "survived",
    "shape": "point"
  },
  "transform": [
    {
      "type": "pack"
    }
  ],
  "legend": {}
};

const UnitUnitShareDataChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">U</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default UnitUnitShareDataChart;
