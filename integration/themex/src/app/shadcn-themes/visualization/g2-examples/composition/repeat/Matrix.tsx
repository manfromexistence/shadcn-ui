'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/repeat/demo/matrix.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/interactive_splom.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const toNaN = (d) => (d === 'NaN' ? NaN : d);
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 800,
  //   height: 800,
  //   paddingLeft: 70,
  //   paddingBottom: 70,
  // });
  // 
  // const repeatMatrix = chart
  //   .repeatMatrix()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/penguins.json',
  //     transform: [
  //       {
  //         type: 'map',
  //         callback: ({
  //           culmen_depth_mm: cdepth,
  //           culmen_length_mm: clength,
  //           flipper_length_mm: flength,
  //           body_mass_g: bmass,
  //           ...d
  //         }) => ({
  //           ...d,
  //           culmen_depth_mm: toNaN(cdepth),
  //           culmen_length_mm: toNaN(clength),
  //           flipper_length_mm: toNaN(flength),
  //           body_mass_g: toNaN(bmass),
  //         }),
  //       },
  //     ],
  //   })
  //   .encode('position', [
  //     'culmen_length_mm',
  //     'culmen_depth_mm',
  //     'flipper_length_mm',
  //     'body_mass_g',
  //   ]);
  // 
  // repeatMatrix.point().encode('color', 'species');
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
  "width": 800,
  "height": 800,
  "paddingLeft": 70,
  "paddingBottom": 70,
  "type": "repeatMatrix",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "position": /* TODO: Convert encode function/expression: [\n    'culmen_length_mm',\n    'culmen_depth_mm',\n    'flipper_length_mm',\n    'body_mass_g',\n  ] */,
    "color": "species"
  }
};

const CompositionRepeatMatrixChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionRepeatMatrixChart;
