// Formatting or Write failed for style/pattern. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/style/pattern/demo/lines-pattern.ts
// Error: Expression expected. (66:3)
[0m [90m 64 |[39m   [90m// chart.render();[39m
 [90m 65 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 66 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 67 |[39m [33m*[39m[33m/[39m
 [90m 68 |[39m
 [90m 69 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/pattern/demo/lines-pattern.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://nivo.rocks/pie/
  //  */
  // import { Chart } from '@antv/g2';
  // import { lines } from '@antv/g-pattern';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 500,
  //   height: 400,
  // });
  // 
  // chart.coordinate({ type: 'theta', innerRadius: 0.25, outerRadius: 0.8 });
  // 
  // const colors = ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'];
  // 
  // chart
  //   .interval()
  //   .data([
  //     { id: 'c', value: 526 },
  //     { id: 'sass', value: 220 },
  //     { id: 'php', value: 325 },
  //     { id: 'elixir', value: 561 },
  //     { id: 'rust', value: 54 },
  //   ])
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'value')
  //   .label({
  //     text: 'id',
  //     position: 'outside',
  //     fontWeight: 'bold',
  //   })
  //   .style('radius', 6)
  //   .style('stroke', '#fff')
  //   .style('lineWidth', 4)
  //   .style('fill', (_, idx) => {
  //     return {
  //       image: lines({
  //         backgroundColor: colors[idx],
  //         backgroundOpacity: 0.65,
  //         stroke: colors[idx],
  //         lineWidth: 4,
  //         spacing: 5,
  //       }),
  //       repetition: 'repeat',
  //       transform: 'rotate(30deg)',
  //     };
  //   })
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  width: 500,
  height: 400,
  type: 'interval',
  data: [
    {
      id: 'c',
      value: 526,
    },
    {
      id: 'sass',
      value: 220,
    },
    {
      id: 'php',
      value: 325,
    },
    {
      id: 'elixir',
      value: 561,
    },
    {
      id: 'rust',
      value: 54,
    },
  ],
  encode: {
    y: 'value',
  },
  transform: [
    {
      type: 'stackY',
    },
  ],
  legend: false,
  style: {
    radius: '6',
    stroke: '#fff',
    lineWidth: '4',
    fill: '(_, idx',
  },
  labels: [
    {
      text: 'id',
      position: 'outside',
      fontWeight: 'bold',
    },
  ],
  coordinate: {
    type: 'theta',
    innerRadius: 0.25,
    outerRadius: 0.8,
  },
};;

const Pattern: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Pattern</h2>
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

export default Pattern;
