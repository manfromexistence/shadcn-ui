// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/circle.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const M = [
  //   'Jan.',
  //   'Feb.',
  //   'Mar.',
  //   'Apr.',
  //   'May',
  //   'Jun.',
  //   'Jul.',
  //   'Aug.',
  //   'Sept.',
  //   'Oct.',
  //   'Nov.',
  //   'Dec.',
  // ];
  // const N = ['A', 'B', 'C', 'D'];
  // const data = M.flatMap((month) =>
  //   N.map((name) => ({
  //     month,
  //     name,
  //     value: Math.random(),
  //   })),
  // );
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 480,
  //   height: 480,
  // });
  // 
  // const facetCircle = chart.facetCircle().data(data).encode('position', 'month');
  // 
  // facetCircle
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('color', 'name');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 480,
  "height": 480,
  "type": "interval"
};

const CompositionFacetCircleChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetCircleChart;
