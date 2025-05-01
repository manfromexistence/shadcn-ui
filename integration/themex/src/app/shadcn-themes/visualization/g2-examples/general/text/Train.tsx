// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/text/demo/train.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 600,
  //   height: 300,
  //   paddingLeft: 48,
  // });
  // 
  // const X = new Array(21).fill(0).map((_, idx) => idx + 4);
  // const Y = [-3, -2, -1, 0, 1, 2, 3];
  // 
  // // Time axis
  // chart
  //   .text()
  //   .data(X.slice(1))
  //   .encode('x', (v) => v)
  //   .encode('y', 0)
  //   .encode('text', (v) => (v < 12 ? `${v}a` : `${v - 12}p`))
  //   .scale('x', { domain: X })
  //   .scale('y', { domain: Y })
  //   .style('fill', 'grey')
  //   .axis(false);
  // 
  // // South / North label
  // chart
  //   .text()
  //   .data(['South', 'North'])
  //   .encode('x', 4)
  //   .encode('y', (_, idx) => (idx == 0 ? -1 : 1))
  //   .encode('text', (t) => t)
  //   .scale('x', { domain: X })
  //   .scale('y', { domain: Y })
  //   .style('textAlign', 'right')
  //   .axis(false);
  // 
  // // NLB
  // chart
  //   .text()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/caltrain.json',
  //   })
  //   .transform([{ type: 'stackY' }])
  //   .encode('x', (d) => Number(d.hours))
  //   .encode('y', (d) => (d.orientation === 'S' ? -1 : 1))
  //   .encode('color', 'type')
  //   .encode('text', (d) => d.minutes.padStart(2, '0'))
  //   .scale('x', { domain: X })
  //   .scale('y', { domain: Y })
  //   .scale('color', { range: ['currentColor', 'peru', 'brown'] })
  //   .style('stroke', 'transparent');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 600,
  "height": 300,
  "type": "text",
  "data": [
    "South",
    "North"
  ],
  "scale": {
    "color": {
      "range": [
        "currentColor",
        "peru",
        "brown"
      ]
    }
  },
  "axis": false,
  "style": {
    "fill": "grey",
    "textAlign": "right",
    "stroke": "transparent"
  }
};

const GeneralTextTrainChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralTextTrainChart;
