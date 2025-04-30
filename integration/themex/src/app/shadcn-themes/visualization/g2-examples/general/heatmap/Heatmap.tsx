'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/heatmap/demo/heatmap.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   padding: 0,
  // });
  // 
  // chart.axis(false);
  // 
  // chart
  //   .image()
  //   .style(
  //     'src',
  //     'https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png',
  //   )
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('width', '100%')
  //   .style('height', '100%')
  //   .tooltip(false);
  // 
  // chart
  //   .heatmap()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/heatmap.json',
  //   })
  //   .encode('x', 'g')
  //   .encode('y', 'l')
  //   .encode('color', 'tmp')
  //   .style('opacity', 0)
  //   .tooltip(false);
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
  "padding": 0,
  "type": "image",
  "encode": {
    "x": "g",
    "y": "l",
    "color": "tmp"
  },
  "style": {
    "x": "50%",
    "y": "50%",
    "width": "100%",
    "height": "100%"
  }
};

const GeneralHeatmapHeatmapChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">H</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralHeatmapHeatmapChart;
