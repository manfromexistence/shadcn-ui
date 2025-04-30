'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/vector/demo/wind.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .vector()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antfincdn/F5VcgnqRku/wind.json',
  //   })
  //   .encode('x', 'longitude')
  //   .encode('y', 'latitude')
  //   .encode('rotate', ({ u, v }) => (Math.atan2(v, u) * 180) / Math.PI)
  //   .encode('size', ({ u, v }) => Math.hypot(v, u))
  //   .encode('color', ({ u, v }) => Math.hypot(v, u))
  //   .scale('size', { range: [6, 20] })
  //   .scale('color', { palette: 'viridis' })
  //   .axis('x', { grid: false })
  //   .axis('y', { grid: false })
  //   .legend(false)
  //   .tooltip({ title: { channel: 'color', valueFormatter: '.1f' } });
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
  "type": "vector",
  "encode": {
    "x": "longitude",
    "y": "latitude"
  },
  "scale": {
    "size": {
      "range": [
        6,
        20
      ]
    },
    "color": {
      "palette": "viridis"
    }
  },
  "axis": {
    "x": {
      "grid": false
    },
    "y": {
      "grid": false
    }
  }
};

const GeneralVectorWindChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">V</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralVectorWindChart;
