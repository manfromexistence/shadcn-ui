// Formatting or Write failed for general/venn. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/general/venn/demo/venn.ts
// Error: Expression expected. (54:3)
[0m [90m 52 |[39m   [90m// chart.render();[39m
 [90m 53 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 54 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 55 |[39m [33m*[39m[33m/[39m
 [90m 56 |[39m
 [90m 57 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/venn/demo/venn.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: http://benfred.github.io/venn.js/examples/intersection_tooltip.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .path()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/lastfm.json',
  //     transform: [
  //       {
  //         type: 'venn',
  //         padding: 8,
  //         sets: 'sets',
  //         size: 'size',
  //         as: ['key', 'path'],
  //       },
  //     ],
  //   })
  //   .encode('d', 'path')
  //   .encode('color', 'key')
  //   .label({
  //     position: 'inside',
  //     text: (d) => d.label || '',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .style('opacity', (d) => (d.sets.length > 1 ? 0.001 : 0.5))
  //   .state('inactive', { opacity: 0.2 })
  //   .state('active', { opacity: 0.8 })
  //   .interaction('elementHighlight', true)
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
  type: 'path',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/lastfm.json',
    transform: [
      {
        type: 'venn',
        padding: 8,
        sets: 'sets',
        size: 'size',
        as: ['key', 'path'],
      },
    ],
  },
  encode: {
    d: 'path',
    color: 'key',
  },
  legend: false,
  style: {
    opacity: '(d',
  },
  labels: [null],
  interaction: {
    elementHighlight: true,
  },
};;

const Venn: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Venn</h2>
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

export default Venn;
