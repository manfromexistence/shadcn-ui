'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radar/demo/radial-with-background-color.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: 'Design', type: 'a', score: 70 },
  //   { item: 'Design', type: 'b', score: 30 },
  //   { item: 'Development', type: 'a', score: 60 },
  //   { item: 'Development', type: 'b', score: 70 },
  //   { item: 'Marketing', type: 'a', score: 50 },
  //   { item: 'Marketing', type: 'b', score: 60 },
  //   { item: 'Users', type: 'a', score: 40 },
  //   { item: 'Users', type: 'b', score: 50 },
  //   { item: 'Test', type: 'a', score: 60 },
  //   { item: 'Test', type: 'b', score: 70 },
  //   { item: 'Language', type: 'a', score: 70 },
  //   { item: 'Language', type: 'b', score: 50 },
  //   { item: 'Technology', type: 'a', score: 50 },
  //   { item: 'Technology', type: 'b', score: 40 },
  //   { item: 'Support', type: 'a', score: 30 },
  //   { item: 'Support', type: 'b', score: 40 },
  //   { item: 'Sales', type: 'a', score: 60 },
  //   { item: 'Sales', type: 'b', score: 40 },
  //   { item: 'UX', type: 'a', score: 50 },
  //   { item: 'UX', type: 'b', score: 60 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'polar' });
  // 
  // chart
  //   .data(data)
  //   .scale('x', { padding: 0.5, align: 0 })
  //   .scale('y', { tickCount: 5, domainMin: 0, domainMax: 80 })
  //   .axis('x', {
  //     grid: true,
  //     gridLineWidth: 1,
  //     tick: false,
  //     gridLineDash: [0, 0],
  //   })
  //   .axis('y', {
  //     zIndex: 1,
  //     title: false,
  //     gridLineWidth: 1,
  //     gridLineDash: [0, 0],
  //     gridAreaFill: (dataum, index, data) => {
  //       return index % 2 === 1 ? 'rgba(0, 0, 0, 0.04)' : '';
  //     },
  //   });
  // 
  // chart
  //   .line()
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .encode('color', 'type')
  //   .style('lineWidth', 2);
  // 
  // chart
  //   .point()
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .encode('color', 'type')
  //   .encode('shape', 'point')
  //   .encode('size', 3)
  //   .tooltip(null);
  // 
  // chart.interaction('tooltip', { crosshairsLineDash: [4, 4] });
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
  "type": "line",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "item",
    "y": "score",
    "color": "type",
    "shape": "point",
    "size": /* TODO: Convert encode function/expression: 3 */
  },
  "scale": {
    "x": {
      "padding": 0.5,
      "align": 0
    },
    "y": {
      "tickCount": 5,
      "domainMin": 0,
      "domainMax": 80
    }
  },
  "axis": {
    "x": {
      "comment": /* TODO: Manually convert axis options: {\n    grid: true,\n    gridLineWidth: 1,\n    tick: false,\n    gridLineDash: [0, 0],\n  } */
    },
    "y": {
      "comment": /* TODO: Manually convert axis options: {\n    zIndex: 1,\n    title: false,\n    gridLineWidth: 1,\n    gridLineDash: [0, 0],\n    gridAreaFill: (dataum, index, data) => {\n      return index % 2 === 1 ? 'rgba(0, 0, 0, 0.04)' : '';\n    },\n  } */
    }
  },
  "style": {
    "lineWidth": /* TODO: Convert style value/expression: 2 */
  },
  "coordinate": {
    "type": "polar"
  },
  "interaction": {
    "type": "tooltip",
    "optionsComment": /* TODO: Manually convert interaction options: { crosshairsLineDash: [4, 4] } */
  }
};

const GeneralRadarRadialWithBackgroundColorChart: React.FC = () => {
    
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

export default GeneralRadarRadialWithBackgroundColorChart;
