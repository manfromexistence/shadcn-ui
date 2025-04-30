'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/line/demo/point-point.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 180,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/penguins.json',
  //   transform: [
  //     {
  //       type: 'map',
  //       callback: (d) => ({ ...d, body_mass_g: +d.body_mass_g }),
  //     },
  //   ],
  // });
  // 
  // chart
  //   .point()
  //   .encode('x', 'body_mass_g')
  //   .encode('y', 'species')
  //   .style('stroke', '#000')
  //   .tooltip({ channel: 'x' });
  // 
  // chart
  //   .link()
  //   .transform({ type: 'groupY', x: 'min', x1: 'max' })
  //   .encode('x', 'body_mass_g')
  //   .encode('y', 'species')
  //   .style('stroke', '#000')
  //   .tooltip(false);
  // 
  // chart
  //   .point()
  //   .transform({ type: 'groupY', x: 'median' })
  //   .encode('y', 'species')
  //   .encode('x', 'body_mass_g')
  //   .encode('shape', 'line')
  //   .encode('size', 12)
  //   .style('stroke', 'red')
  //   .tooltip({ channel: 'x' });
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
  "height": 180,
  "type": "point",
  "encode": {
    "x": "body_mass_g",
    "y": "species",
    "shape": "line"
  },
  "transform": [
    {
      "type": "groupY",
      "x": "min",
      "x1": "max"
    },
    {
      "type": "groupY",
      "x": "median"
    }
  ],
  "style": {
    "stroke": "red"
  }
};

const AnnotationLinePointPointChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/penguins.json',
    transform: [
      {
        type: 'map',
        callback: (d */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationLinePointPointChart;
