// Formatting or Write failed for theme/theme. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/theme/theme/demo/academy.ts
// Error: Expression expected. (49:3)
[0m [90m 47 |[39m   [90m// chart.render();[39m
 [90m 48 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 49 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 50 |[39m [33m*[39m[33m/[39m
 [90m 51 |[39m
 [90m 52 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/theme/theme/demo/academy.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/stacked-horizontal-bar-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // // Apply academy theme.
  // chart.theme({ type: 'academy' });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
  //     format: 'csv',
  //   })
  //   .transform({ type: 'sortX', by: 'y', reverse: true, slice: 6 })
  //   .transform({ type: 'dodgeX' })
  //   .encode('x', 'state')
  //   .encode('y', 'population')
  //   .encode('color', 'age')
  //   .axis('y', { labelFormatter: '~s' })
  //   .axis('x', { zIndex: 1 });
  // 
  // chart
  //   .interaction('tooltip', { shared: true })
  //   .interaction('elementHighlight', { background: true });
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
      'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
    format: 'csv',
  },
  encode: {
    x: 'state',
    y: 'population',
    color: 'age',
  },
  transform: [
    {
      type: 'sortX',
      by: 'y',
      reverse: true,
      slice: 6,
    },
    {
      type: 'dodgeX',
    },
  ],
  axis: {
    y: {
      labelFormatter: '~s',
    },
    x: {
      zIndex: 1,
    },
  },
  interaction: {
    tooltip: {
      shared: true,
    },
    elementHighlight: {
      background: true,
    },
  },
};;

const Theme: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">theme</h2>
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

export default Theme;
