// Formatting or Write failed for annotation/line. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/annotation/line/demo/interval-threshold.ts
// Error: Expression expected. (87:3)
[0m [90m 85 |[39m   [90m// }[39m
 [90m 86 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 87 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 88 |[39m [33m*[39m[33m/[39m
 [90m 89 |[39m
 [90m 90 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/line/demo/interval-threshold.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_bar_annotations.html
  //  *
  //  * We use a range mark to highlight the values beyond a threshold
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data([
  //     { Day: 1, Value: 54.8 },
  //     { Day: 2, Value: 112.1 },
  //     { Day: 3, Value: 63.6 },
  //     { Day: 4, Value: 37.6 },
  //     { Day: 5, Value: 79.7 },
  //     { Day: 6, Value: 137.9 },
  //     { Day: 7, Value: 120.1 },
  //     { Day: 8, Value: 103.3 },
  //     { Day: 9, Value: 394.8 },
  //     { Day: 10, Value: 199.5 },
  //     { Day: 11, Value: 72.3 },
  //     { Day: 12, Value: 51.1 },
  //     { Day: 13, Value: 112.0 },
  //     { Day: 14, Value: 174.5 },
  //     { Day: 15, Value: 130.5 },
  //   ])
  //   .axis('y', { title: false });
  // 
  // chart.interval().encode('x', 'Day').encode('y', 'Value');
  // 
  // chart
  //   .range()
  //   .data({
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: (data) => overThreshold(data, 300),
  //       },
  //     ],
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', '#F4664A');
  // 
  // chart
  //   .lineY()
  //   .data([300])
  //   .style('stroke', '#F4664A')
  //   .style('lineDash', [3, 3])
  //   .style('arrow', true)
  //   .label({
  //     text: 'hazardous',
  //     position: 'right',
  //     textBaseline: 'bottom',
  //     fill: '#F4664A',
  //     background: true,
  //     backgroundFill: '#F4664A',
  //     backgroundOpacity: 0.25,
  //   });
  // 
  // chart.render();
  // 
  // // Process data.
  // function overThreshold(data, threshold) {
  //   return data
  //     .filter((d) => d['Value'] >= threshold)
  //     .map(({ Day: x, Value: y }) => ({ x: [x, x], y: [threshold, y] }));
  // }
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'interval',
  data: [
    {
      Day: 1,
      Value: 54.8,
    },
    {
      Day: 2,
      Value: 112.1,
    },
    {
      Day: 3,
      Value: 63.6,
    },
    {
      Day: 4,
      Value: 37.6,
    },
    {
      Day: 5,
      Value: 79.7,
    },
    {
      Day: 6,
      Value: 137.9,
    },
    {
      Day: 7,
      Value: 120.1,
    },
    {
      Day: 8,
      Value: 103.3,
    },
    {
      Day: 9,
      Value: 394.8,
    },
    {
      Day: 10,
      Value: 199.5,
    },
    {
      Day: 11,
      Value: 72.3,
    },
    {
      Day: 12,
      Value: 51.1,
    },
    {
      Day: 13,
      Value: 112,
    },
    {
      Day: 14,
      Value: 174.5,
    },
    {
      Day: 15,
      Value: 130.5,
    },
  ],
  encode: {
    x: 'x',
    y: 'y',
    color: '#F4664A',
  },
  axis: {
    y: {
      title: false,
    },
  },
  style: {
    stroke: '#F4664A',
    lineDash: '[3, 3]',
    arrow: 'true',
  },
  labels: [
    {
      text: 'hazardous',
      position: 'right',
      textBaseline: 'bottom',
      fill: '#F4664A',
      background: true,
      backgroundFill: '#F4664A',
      backgroundOpacity: 0.25,
    },
  ],
};;

const Line: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Line</h2>
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

export default Line;
