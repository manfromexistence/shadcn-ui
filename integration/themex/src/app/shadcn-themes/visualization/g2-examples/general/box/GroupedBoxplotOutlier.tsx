'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/box/demo/grouped-boxplot-outlier.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .boxplot()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/penguins.json',
  //   })
  //   .encode('x', 'species')
  //   .encode('y', 'flipper_length_mm')
  //   .encode('color', 'sex')
  //   .encode('series', 'sex');
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
  "type": "boxplot",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "species",
    "y": "flipper_length_mm",
    "color": "sex",
    "series": "sex"
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const GeneralBoxGroupedBoxplotOutlierChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralBoxGroupedBoxplotOutlierChart;
