'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/pie.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/pie-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 640,
  // });
  // 
  // chart.coordinate({ type: 'theta' });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'stackY' })
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/79fd9317-d2af-4bc4-90fa-9d07357398fd.csv',
  //   })
  //   .encode('y', 'value')
  //   .encode('color', 'name')
  //   .style('stroke', 'white')
  //   .scale('color', {
  //     palette: 'spectral',
  //     offset: (t) => t * 0.8 + 0.1,
  //   })
  //   .label({
  //     text: 'name',
  //     radius: 0.8,
  //     fontSize: 10,
  //     fontWeight: 'bold',
  //   })
  //   .label({
  //     text: (d, i, data) => (i < data.length - 3 ? d.value : ''),
  //     radius: 0.8,
  //     fontSize: 9,
  //     dy: 12,
  //   })
  //   .animate('enter', { type: 'waveIn' })
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
  "height": 640,
  "type": "interval",
  "encode": {
    "y": "value",
    "color": "name"
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {},
  "style": {
    "stroke": "white"
  },
  "labels": [
    null,
    null
  ],
  "coordinate": {
    "type": "theta"
  }
};

const GeneralPiePieChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPiePieChart;
