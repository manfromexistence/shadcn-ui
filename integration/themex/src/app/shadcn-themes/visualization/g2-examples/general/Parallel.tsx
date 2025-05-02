// Formatting or Write failed for general/parallel. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/general/parallel/demo/line-parallel-vertical.ts
// Error: Expression expected. (82:3)
[0m [90m 80 |[39m   [90m// chart.render();[39m
 [90m 81 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 82 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 83 |[39m [33m*[39m[33m/[39m
 [90m 84 |[39m
 [90m 85 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



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
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'line',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/cars3.json',
  },
  encode: {
    position: "[\n    'economy (mpg",
    color: "'weight (lb",
  },
  scale: {},
  axis: {
    position: 'axis',
    position1: 'axis',
    position2: 'axis',
    position3: 'axis',
    position4: 'axis',
    position5: 'axis',
    position6: 'axis',
    position7: 'axis',
  },
  legend: {
    color: {
      length: 400,
      layout: {
        justifyContent: 'center',
      },
    },
  },
  style: {
    lineWidth: '1.5',
    strokeOpacity: '0.4',
  },
  coordinate: {
    type: 'parallel',
  },
  interaction: {
    tooltip: {
      series: false,
    },
  },
};;

const Parallel: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Parallel</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background"> {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {(finalSpec && finalSpec.type !== 'invalid') ? (
            <G2Chart config={finalSpec} />
        ) : (
            <div className="p-4 text-center text-red-600">Chart specification is invalid or missing.</div>
        )}
      </div>
    </div>
  );
};

export default Parallel;
