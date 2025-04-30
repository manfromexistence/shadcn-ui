'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/parallel/demo/line-parallel-vertical.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/parallel-coordinates
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const axis = {
  //   zIndex: 1,
  //   titlePosition: 'right',
  //   line: true,
  //   labelStroke: '#fff',
  //   labelLineWidth: 5,
  //   labelFontSize: 10,
  //   labelStrokeLineJoin: 'round',
  //   titleStroke: '#fff',
  //   titleFontSize: 10,
  //   titleLineWidth: 5,
  //   titleStrokeLineJoin: 'round',
  //   titleTransform: 'translate(-50%, 0) rotate(-90)',
  //   lineStroke: 'black',
  //   tickStroke: 'black',
  //   lineLineWidth: 1,
  // };
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'parallel' });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/cars3.json',
  //   })
  //   .encode('position', [
  //     'economy (mpg)',
  //     'cylinders',
  //     'displacement (cc)',
  //     'power (hp)',
  //     'weight (lb)',
  //     '0-60 mph (s)',
  //     'year',
  //   ])
  //   .encode('color', 'weight (lb)')
  //   .style('lineWidth', 1.5)
  //   .style('strokeOpacity', 0.4)
  //   .scale('color', {
  //     palette: 'brBG',
  //     offset: (t) => 1 - t,
  //   })
  //   .legend({
  //     color: { length: 400, layout: { justifyContent: 'center' } },
  //   })
  //   .axis('position', axis)
  //   .axis('position1', axis)
  //   .axis('position2', axis)
  //   .axis('position3', axis)
  //   .axis('position4', axis)
  //   .axis('position5', axis)
  //   .axis('position6', axis)
  //   .axis('position7', axis);
  // 
  // chart.interaction('tooltip', { series: false });
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
    "position": /* TODO: Convert encode function/expression: [\n    'economy (mpg */,
    "color": /* TODO: Convert encode function/expression: 'weight (lb */
  },
  "scale": {
    "color": /* TODO: Manually convert scale options: {\n    palette: 'brBG',\n    offset: (t) => 1 - t,\n  } */
  },
  "style": {
    "lineWidth": /* TODO: Convert style value/expression: 1.5 */,
    "strokeOpacity": /* TODO: Convert style value/expression: 0.4 */
  },
  "coordinate": {
    "type": "parallel"
  },
  "interaction": {
    "type": "tooltip",
    "optionsComment": /* TODO: Manually convert interaction options: { series: false } */
  }
};

const GeneralParallelLineParallelVerticalChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralParallelLineParallelVerticalChart;
