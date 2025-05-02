'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/text/demo/peak-value-text.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container' });
  // 
  // chart.options({
  //   type: 'view',
  //   autoFit: true,
  //   data: [
  //     { month: 'Jan', city: 'Tokyo', temperature: 7 },
  //     { month: 'Jan', city: 'London', temperature: 3.9 },
  //     { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
  //     { month: 'Feb', city: 'London', temperature: 4.2 },
  //     { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
  //     { month: 'Mar', city: 'London', temperature: 5.7 },
  //     { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
  //     { month: 'Apr', city: 'London', temperature: 8.5 },
  //     { month: 'May', city: 'Tokyo', temperature: 18.4 },
  //     { month: 'May', city: 'London', temperature: 11.9 },
  //     { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
  //     { month: 'Jun', city: 'London', temperature: 15.2 },
  //     { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
  //     { month: 'Jul', city: 'London', temperature: 17 },
  //     { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
  //     { month: 'Aug', city: 'London', temperature: 16.6 },
  //     { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
  //     { month: 'Sep', city: 'London', temperature: 14.2 },
  //     { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
  //     { month: 'Oct', city: 'London', temperature: 10.3 },
  //     { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
  //     { month: 'Nov', city: 'London', temperature: 6.6 },
  //     { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
  //     { month: 'Dec', city: 'London', temperature: 4.8 },
  //   ],
  //   encode: { x: 'month', y: 'temperature', color: 'city' },
  //   scale: { x: { range: [0, 1] }, y: { nice: true } },
  //   axis: { y: { labelFormatter: (d) => d + '°C' } },
  //   children: [
  //     { type: 'line', encode: { shape: 'smooth' } },
  //     {
  //       type: 'text',
  //       encode: {
  //         x: 'month',
  //         y: 'temperature',
  //         text: (d) => `峰值：${d.temperature}`,
  //       },
  //       transform: [
  //         {
  //           type: 'selectY',
  //           groupBy: 'color',
  //           selector: 'max',
  //         },
  //       ],
  //       style: {
  //         fill: 'orange',
  //         fontSize: 16,
  //         dy: -15,
  //       },
  //       tooltip: false,
  //     },
  //     {
  //       type: 'point',
  //       encode: { x: 'month', y: 'temperature' },
  //       transform: [
  //         {
  //           type: 'selectY',
  //           groupBy: 'color',
  //           selector: 'max',
  //         },
  //       ],
  //       tooltip: false,
  //     },
  //   ],
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'view',
};

const Text: React.FC = () => {
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable 'unknown' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec
    ? { ...spec, data: chartData }
    : { type: 'invalid', data: chartData, error: 'Spec generation failed' };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Text</h2>
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

export default Text;
