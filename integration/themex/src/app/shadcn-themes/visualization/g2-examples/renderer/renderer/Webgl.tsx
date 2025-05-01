// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/renderer/renderer/demo/webgl.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Renderer } from '@antv/g-webgl';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   renderer: new Renderer(),
  // });
  // 
  // const flex = chart
  //   .spaceFlex()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  //   })
  //   .attr('direction', 'col')
  //   .attr('ratio', [1, 1]);
  // 
  // const flex1 = flex.spaceFlex().attr('direction', 'row').attr('ratio', [1, 1]);
  // 
  // flex1
  //   .interval()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', 'precipitation');
  // 
  // flex1
  //   .line()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', 'wind')
  //   .encode('shape', 'smooth');
  // 
  // const flex2 = flex.spaceFlex().attr('direction', 'row').attr('ratio', [1, 1]);
  // 
  // flex2
  //   .area()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', ['temp_min', 'temp_max'])
  //   .encode('shape', 'smooth');
  // 
  // flex2
  //   .point()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', 'temp_min')
  //   .encode('y', 'temp_max')
  //   .encode('shape', 'point');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/seattle-weather.json"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    },
    {
      "type": "groupX",
      "y": "mean"
    },
    {
      "type": "groupX",
      "y": "mean"
    },
    {
      "type": "groupX",
      "y": "mean"
    }
  ]
};

const RendererRendererWebglChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default RendererRendererWebglChart;
