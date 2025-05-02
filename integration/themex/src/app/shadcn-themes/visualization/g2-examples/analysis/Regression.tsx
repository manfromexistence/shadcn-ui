// Formatting or Write failed for analysis/regression. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/analysis/regression/demo/linear-regression.ts
// Error: Expression expected. (64:3)
[0m [90m 62 |[39m   [90m// chart.render();[39m
 [90m 63 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 64 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 65 |[39m [33m*[39m[33m/[39m
 [90m 66 |[39m
 [90m 67 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/regression/demo/linear-regression.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://echarts.apache.org/examples/zh/editor.html?c=scatter-linear-regression
  //  */
  // import { Chart } from '@antv/g2';
  // import { regressionLinear } from 'd3-regression';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/linear-regression.json',
  // });
  // 
  // chart
  //   .point()
  //   .encode('x', (d) => d[0])
  //   .encode('y', (d) => d[1])
  //   .encode('shape', 'point')
  //   .scale('x', { domain: [0, 1] })
  //   .scale('y', { domain: [0, 5] })
  //   .style('fillOpacity', 0.75);
  // 
  // chart
  //   .line()
  //   .data({
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: regressionLinear(),
  //       },
  //     ],
  //   })
  //   .encode('x', (d) => d[0])
  //   .encode('y', (d) => d[1])
  //   .style('stroke', '#30BF78')
  //   .style('lineWidth', 2)
  //   .label({
  //     text: 'y = 1.7x+3.01',
  //     selector: 'last',
  //     position: 'right',
  //     textAlign: 'end',
  //     dy: -8,
  //   })
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'point',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/linear-regression.json',
  },
  encode: {
    x: '(d',
    y: '(d',
    shape: 'point',
  },
  scale: {
    x: {
      domain: [0, 1],
    },
    y: {
      domain: [0, 5],
    },
  },
  style: {
    fillOpacity: '0.75',
    stroke: '#30BF78',
    lineWidth: '2',
  },
  labels: [
    {
      text: 'y = 1.7x+3.01',
      selector: 'last',
      position: 'right',
      textAlign: 'end',
      dy: -8,
    },
  ],
  tooltip: false,
};;

const Regression: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Regression</h2>
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

export default Regression;
