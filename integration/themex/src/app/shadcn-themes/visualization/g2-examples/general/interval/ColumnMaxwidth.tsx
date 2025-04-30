// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/column-maxwidth.ts
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
  //   .data([{ letter: 'A', frequency: 120 }])
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .scale('x', { padding: 0.5 })
  //   // .style('minWidth', 500)
  //   .style('maxWidth', 200);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "data": [
    {
      "letter": "A",
      "frequency": 120
    }
  ],
  "encode": {
    "x": "letter",
    "y": "frequency"
  },
  "scale": {
    "x": {
      "padding": 0.5
    }
  },
  "style": {}
};

const GeneralIntervalColumnMaxwidthChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

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

export default GeneralIntervalColumnMaxwidthChart;
