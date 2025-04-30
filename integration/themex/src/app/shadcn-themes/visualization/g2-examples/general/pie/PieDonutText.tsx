// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/pie-donut-text.ts
  ================================================================================
  // /**
  //  * A recreation of this demo:
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 640,
  //   padding: 0,
  //   inset: 50,
  // });
  // 
  // chart.coordinate({ type: 'theta', innerRadius: 0.6 });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/79fd9317-d2af-4bc4-90fa-9d07357398fd.csv',
  //   })
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'value')
  //   .encode('color', 'name')
  //   .scale('color', {
  //     palette: 'spectral',
  //     offset: (t) => t * 0.8 + 0.1,
  //   })
  //   .legend(false);
  // 
  // chart
  //   .text()
  //   .style('text', 'Donut')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('fontSize', 40)
  //   .style('fontWeight', 'bold')
  //   .style('textAlign', 'center');
  // 
  // chart
  //   .text()
  //   .style('text', 'chart')
  //   // Absolute position
  //   .style('x', 640 / 2 - 16)
  //   .style('y', 360)
  //   .style('fontSize', 20)
  //   .style('fontWeight', 'bold')
  //   .style('textAlign', 'center');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 640,
  "padding": 0,
  "inset": 50,
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
    "text": "chart",
    "fontWeight": "bold",
    "textAlign": "center"
  },
  "coordinate": {
    "type": "theta",
    "innerRadius": 0.6
  }
};

const GeneralPiePieDonutTextChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPiePieDonutTextChart;
