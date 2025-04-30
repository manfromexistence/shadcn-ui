// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/violin/demo/density.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/species.json',
  //   transform: [
  //     {
  //       type: 'kde',
  //       field: 'y',
  //       groupBy: ['x'],
  //       size: 20,
  //     },
  //   ],
  // });
  // 
  // chart
  //   .density()
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', 'x')
  //   .encode('size', 'size')
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "density",
  "encode": {
    "x": "x",
    "y": "y",
    "color": "x",
    "size": "size"
  }
};

const GeneralViolinDensityChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default GeneralViolinDensityChart;
