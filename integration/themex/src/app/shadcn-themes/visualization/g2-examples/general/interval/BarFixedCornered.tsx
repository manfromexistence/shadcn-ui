// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-fixed-cornered.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { name: 'MODIFY', value: 138, washaway: 0.21014492753623193 },
  //     { name: 'PRERELEASE', value: 109, washaway: 0.5596330275229358 },
  //     { name: 'RELEASING', value: 48, washaway: 0 },
  //   ])
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('color', 'name')
  //   .encode('size', 80)
  //   .style('radiusTopLeft', 10)
  //   .style('radiusTopRight', 20)
  //   .style('radiusBottomRight', 30)
  //   .style('radiusBottomLeft', 40);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "name",
    "y": "value",
    "color": "name"
  },
  "style": {}
};

const GeneralIntervalBarFixedCorneredChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarFixedCorneredChart;
