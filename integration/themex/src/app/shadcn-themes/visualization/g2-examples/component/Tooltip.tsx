'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-crosshairs.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/indices.json',
  //   })
  //   .transform({ type: 'normalizeY', basis: 'first', groupBy: 'color' })
  //   .encode('x', (d) => new Date(d.Date))
  //   .encode('y', 'Close')
  //   .encode('color', 'Symbol')
  //   .axis('y', { title: '↑ Change in price (%)' })
  //   .interaction('tooltip', {
  //     crosshairs: true,
  //     crosshairsXStroke: 'red',
  //     crosshairsYStroke: 'blue',
  //   })
  //   .tooltip({
  //     title: (d) => new Date(d.Date).toUTCString(),
  //     items: [
  //       (d, i, data, column) => ({
  //         name: 'Close',
  //         value: column.y.value[i].toFixed(1),
  //       }),
  //     ],
  //   })
  //   .label({
  //     text: 'Symbol',
  //     selector: 'last',
  //     fontSize: 10,
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
  type: 'line',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/indices.json',
  },
  encode: {
    x: '(d',
    y: 'Close',
    color: 'Symbol',
  },
  transform: [
    {
      type: 'normalizeY',
      basis: 'first',
      groupBy: 'color',
    },
  ],
  axis: {},
  labels: [
    {
      text: 'Symbol',
      selector: 'last',
      fontSize: 10,
    },
  ],
  tooltip: [null],
  interaction: {
    tooltip: {
      crosshairs: true,
      crosshairsXStroke: 'red',
      crosshairsYStroke: 'blue',
    },
  },
};

const Tooltip: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Tooltip</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background">
        {' '}
        {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {finalSpec && finalSpec.type !== 'invalid' ? (
          <G2Chart config={finalSpec} />
        ) : (
          <div className="p-4 text-center text-red-600">
            Chart specification is invalid or missing.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
