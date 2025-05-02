// Formatting or Write failed for interesting/interesting. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/interesting/interesting/demo/messi.ts
// Error: Expression expected. (117:3)
[0m [90m 115 |[39m   [90m// }[39m
 [90m 116 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 117 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m     |[39m   [31m[1m^[22m[39m
 [90m 118 |[39m [33m*[39m[33m/[39m
 [90m 119 |[39m
 [90m 120 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interesting/interesting/demo/messi.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const FW = 600;
  // const FH = 400;
  // const P = 50;
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: FW + P * 2,
  //   height: FH + P * 2,
  //   padding: P,
  // });
  // 
  // // Draw football field.
  // chart.shape().style('x', '0%').style('y', '0%').style('render', football);
  // 
  // // Analysis messi's shoot data.
  // chart
  //   .rect()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://mdn.alipayobjects.com/afts/file/A*FCRjT4NGENEAAAAAAAAAAAAADrd2AQ/messi.json',
  //   })
  //   .transform({
  //     type: 'bin',
  //     opacity: 'count',
  //     thresholdsX: 15,
  //     thresholdsY: 15,
  //   })
  //   .encode('x', (d) => Number(d.X))
  //   .encode('y', (d) => Number(d.Y))
  //   .scale('x', { domain: [0, 1] })
  //   .scale('y', { domain: [0, 1] })
  //   .axis(false)
  //   .legend(false);
  // 
  // chart.render();
  // 
  // /**
  //  * Draw a football field.
  //  */
  // function football(_, context) {
  //   const { document } = context;
  // 
  //   const g = document.createElement('g');
  //   const r = document.createElement('rect', {
  //     style: {
  //       x: 0,
  //       y: 0,
  //       width: FW,
  //       height: FH,
  //       fill: 'green',
  //       fillOpacity: 0.2,
  //       stroke: 'grey',
  //       lineWidth: 1,
  //     },
  //   });
  // 
  //   const r1 = document.createElement('rect', {
  //     style: {
  //       x: FW - FH * 0.6 * 0.45,
  //       y: (FH - FH * 0.6) / 2,
  //       width: FH * 0.6 * 0.45,
  //       height: FH * 0.6,
  //       strokeOpacity: 0.5,
  //       stroke: 'grey',
  //       lineWidth: 1,
  //     },
  //   });
  // 
  //   const r2 = document.createElement('rect', {
  //     style: {
  //       x: FW - FH * 0.3 * 0.45,
  //       y: (FH - FH * 0.3) / 2,
  //       width: FH * 0.3 * 0.45,
  //       height: FH * 0.3,
  //       strokeOpacity: 0.5,
  //       stroke: 'grey',
  //       lineWidth: 1,
  //     },
  //   });
  // 
  //   const l = document.createElement('line', {
  //     style: {
  //       x1: FW / 2,
  //       y1: 0,
  //       x2: FW / 2,
  //       y2: FH,
  //       strokeOpacity: 0.4,
  //       stroke: 'grey',
  //       lineWidth: 2,
  //     },
  //   });
  // 
  //   g.append(r);
  //   g.append(r1);
  //   g.append(r2);
  //   g.append(l);
  // 
  //   return g;
  // }
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'shape',
  data: {
    type: 'fetch',
    value:
      'https://mdn.alipayobjects.com/afts/file/A*FCRjT4NGENEAAAAAAAAAAAAADrd2AQ/messi.json',
  },
  encode: {
    x: '(d',
    y: '(d',
  },
  transform: [
    {
      type: 'bin',
      opacity: 'count',
      thresholdsX: 15,
      thresholdsY: 15,
    },
  ],
  scale: {
    x: {
      domain: [0, 1],
    },
    y: {
      domain: [0, 1],
    },
  },
  axis: false,
  legend: false,
  style: {
    x: '0%',
    y: '0%',
    render: 'football',
  },
};;

const Interesting: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Interesting</h2>
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

export default Interesting;
