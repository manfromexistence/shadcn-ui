// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/gauge/demo/gauge-custom-color.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .gauge()
  //   .data({
  //     value: {
  //       target: 159,
  //       total: 400,
  //       name: 'score',
  //       thresholds: [100, 200, 400],
  //     },
  //   })
  //   .scale('color', {
  //     range: ['#F4664A', '#FAAD14', 'green'],
  //   })
  //   .style(
  //     'textContent',
  //     (target, total) => `得分：${target}\n占比：${(target / total) * 100}%`,
  //   )
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "gauge",
  "scale": {},
  "style": {}
};

const GeneralGaugeGaugeCustomColorChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralGaugeGaugeCustomColorChart;
