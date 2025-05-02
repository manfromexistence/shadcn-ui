// Formatting or Write failed for general/interval. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/general/interval/demo/bar.ts
// Error: Expression expected. (48:3)
[0m [90m 46 |[39m   [90m// chart.render();[39m
 [90m 47 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 48 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 49 |[39m [33m*[39m[33m/[39m
 [90m 50 |[39m
 [90m 51 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/horizontal-bar-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //     format: 'csv',
  //   })
  //   .transform({ type: 'sortX', reverse: true })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .axis('y', { labelFormatter: '.0%' })
  //   .label({
  //     text: 'frequency',
  //     formatter: '.1%',
  //     textAlign: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),
  //     fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),
  //     dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'interval',
  data: {
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    format: 'csv',
  },
  encode: {
    x: 'letter',
    y: 'frequency',
  },
  transform: [
    {
      type: 'sortX',
      reverse: true,
    },
  ],
  axis: {
    y: {
      labelFormatter: '.0%',
    },
  },
  labels: [null],
  coordinate: {
    transform: [
      {
        type: 'transpose',
      },
    ],
  },
};;

const Interval: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Interval</h2>
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

export default Interval;
