// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
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
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">V</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralVectorWindChart;
