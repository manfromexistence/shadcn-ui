// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/area-difference.ts
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
  //   value: 'https://assets.antv.antgroup.com/g2/temperature-compare.json',
  // });
  // 
  // chart
  //   .area()
  //   .data({
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: ['New York', 'San Francisco'],
  //         key: 'city',
  //         value: 'temperature',
  //       },
  //     ],
  //   })
  //   .transform([{ type: 'diffY' }]) // Diff the 2 area shape.
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'temperature')
  //   .encode('color', 'city')
  //   .encode('shape', 'hvh');
  // // .scale('color', { range: ['#67a9cf', '#ef8a62'] });
  // 
  // chart
  //   .line()
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'San Francisco')
  //   .encode('shape', 'hvh')
  //   .style('stroke', '#000')
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "area",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/temperature-compare.json"
  },
  "scale": {
    "color": {
      "range": [
        "#67a9cf",
        "#ef8a62"
      ]
    }
  },
  "style": {
    "stroke": "#000"
  },
  "tooltip": false
};

const GeneralAreaAreaDifferenceChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaAreaDifferenceChart;
