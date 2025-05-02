// Formatting or Write failed for general/cell. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/general/cell/demo/cell-heatmap.ts
// Error: Expression expected. (73:3)
[0m [90m 71 |[39m   [90m// chart.render();[39m
 [90m 72 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 73 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m    |[39m   [31m[1m^[22m[39m
 [90m 74 |[39m [33m*[39m[33m/[39m
 [90m 75 |[39m
 [90m 76 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/cell/demo/cell-heatmap.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@mbostock/the-impact-of-vaccines
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 1300,
  //   height: 900,
  // });
  // 
  // chart
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/vaccines.json',
  //   })
  //   .axis('y', { labelAutoRotate: false })
  //   .axis('x', {
  //     tickFilter: (d) => d % 10 === 0,
  //     position: 'top',
  //   })
  //   .scale('color', {
  //     palette: 'puRd',
  //     relations: [
  //       [(d) => d === null, '#eee'],
  //       [0, '#fff'],
  //     ],
  //   });
  // 
  // chart
  //   .cell()
  //   .encode('x', 'year')
  //   .encode('y', 'name')
  //   .encode('color', 'value')
  //   .style('inset', 0.5)
  //   .tooltip({ title: { channel: 'color', valueFormatter: '.2f' } });
  // 
  // chart
  //   .lineX()
  //   .data([1963])
  //   .style('stroke', 'black')
  //   .label({
  //     text: '1963',
  //     position: 'bottom',
  //     textBaseline: 'top',
  //     fontSize: 10,
  //   })
  //   .label({
  //     text: 'Measles vaccine introduced',
  //     position: 'bottom',
  //     textBaseline: 'top',
  //     fontSize: 10,
  //     fontWeight: 'bold',
  //     dy: 10,
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
  width: 1300,
  height: 900,
  type: 'cell',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/vaccines.json',
  },
  encode: {
    x: 'year',
    y: 'name',
    color: 'value',
  },
  scale: {},
  axis: {
    y: {
      labelAutoRotate: false,
    },
  },
  style: {
    inset: '0.5',
    stroke: 'black',
  },
  labels: [
    {
      text: '1963',
      position: 'bottom',
      textBaseline: 'top',
      fontSize: 10,
    },
    {
      text: 'Measles vaccine introduced',
      position: 'bottom',
      textBaseline: 'top',
      fontSize: 10,
      fontWeight: 'bold',
      dy: 10,
    },
  ],
  tooltip: [
    {
      title: {
        channel: 'color',
        valueFormatter: '.2f',
      },
    },
  ],
};;

const Cell: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Cell</h2>
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

export default Cell;
