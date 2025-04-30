'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/rose/demo/rose-label.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 720,
  //   height: 720,
  // });
  // 
  // chart.coordinate({ type: 'polar', outerRadius: 0.85 });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
  //   })
  //   .encode('x', 'year')
  //   .encode('color', 'year')
  //   .encode('y', 'people')
  //   .scale('y', { type: 'sqrt' })
  //   .scale('x', { padding: 0 })
  //   .axis(false)
  //   .label({
  //     text: 'people',
  //     position: 'outside',
  //     formatter: '~s',
  //     transform: [{ type: 'overlapDodgeY' }],
  //   })
  //   .legend({ color: { length: 400, layout: { justifyContent: 'center' } } })
  //   .animate('enter', { type: 'waveIn' })
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
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
  "width": 720,
  "height": 720,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "year",
    "color": "year",
    "y": "people"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    }
  ],
  "scale": {
    "y": {
      "type": "sqrt"
    },
    "x": {
      "padding": 0
    }
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'people',\n    position: 'outside',\n    formatter: '~s',\n    transform: [{ type: 'overlapDodgeY' }],\n  } */
    }
  ],
  "coordinate": {
    "type": "polar",
    "outerRadius": 0.85
  }
};

const GeneralRoseRoseLabelChart: React.FC = () => {
    
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

export default GeneralRoseRoseLabelChart;
