// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-variable-color.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/variable-color-line
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/temperatures1.json',
  //   })
  //   .scale('y', { nice: true })
  //   .scale('color', {
  //     domain: ['CLR', 'FEW', 'SCT', 'BKN', 'OVC', 'VV '],
  //     range: [
  //       'deepskyblue',
  //       'lightskyblue',
  //       'lightblue',
  //       '#aaaaaa',
  //       '#666666',
  //       '#666666',
  //     ],
  //   })
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'value')
  //   .encode('shape', 'hvh')
  //   .encode('color', 'condition')
  //   .encode('series', () => 'a')
  //   .style('gradient', 'x')
  //   .style('lineWidth', 2)
  //   .axis('x', { title: 'date' });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/temperatures1.json"
  },
  "scale": {
    "y": {
      "nice": true
    }
  },
  "style": {
    "gradient": "x"
  }
};

const GeneralLineLineVariableColorChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineVariableColorChart;
