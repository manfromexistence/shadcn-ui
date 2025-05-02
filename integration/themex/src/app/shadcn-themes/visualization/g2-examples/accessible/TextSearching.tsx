'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y';

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/accessible/text-searching/demo/text-search.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Plugin } from '@antv/g-plugin-a11y';
  // 
  // const plugin = new Plugin({ enableExtractingText: true });
  // 
  // const labelFormatter = (d) => Math.abs(d) + (d < 0 ? 'BC' : d > 0 ? 'AC' : '');
  // const left = (d) => d.end > -1500 && d.start > -3000;
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  //   height: 1000,
  //   plugins: [plugin],
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/world-history.json',
  //   })
  //   .transform({ type: 'sortX', by: 'y' })
  //   .transform({ type: 'sortColor', by: 'y', reducer: 'min' })
  //   .axis('x', false)
  //   .encode('x', 'civilization')
  //   .encode('y', ['start', 'end'])
  //   .encode('color', 'region')
  //   .scale('color', { palette: 'set2' })
  //   .label({
  //     text: 'civilization',
  //     position: (d) => (left(d) ? 'left' : 'right'),
  //     textAlign: (d) => (left(d) ? 'end' : 'start'),
  //     dx: (d) => (left(d) ? -5 : 5),
  //     fontSize: 10,
  //   })
  //   .tooltip([
  //     { name: 'start', field: 'start', valueFormatter: labelFormatter },
  //     { name: 'end', field: 'end', valueFormatter: labelFormatter },
  //   ]);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  width: 900,
  height: 1000,
  type: 'interval',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/world-history.json',
  },
  encode: {
    x: 'civilization',
    y: ['start', 'end'],
    color: 'region',
  },
  transform: [
    {
      type: 'sortX',
      by: 'y',
    },
    {
      type: 'sortColor',
      by: 'y',
      reducer: 'min',
    },
  ],
  scale: {
    color: {
      palette: 'set2',
    },
  },
  axis: {
    x: false,
  },
  labels: [null],
  coordinate: {
    transform: [
      {
        type: 'transpose',
      },
    ],
  },
  plugins: [null],
};

const TextSearching: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Search</h2>
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

export default TextSearching;
