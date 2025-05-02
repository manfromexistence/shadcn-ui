'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/data/demo/bar-normalizeY-element-point-move.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
  //   { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  //   { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
  //   { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
  //   { name: 'London', 月份: 'May', 月均降雨量: 47 },
  //   { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
  //   { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
  //   { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  //   { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
  //   { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
  //   { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
  //   { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
  //   { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
  //   { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
  //   { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
  //   { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .transform({ type: 'stackY' })
  //   .transform({ type: 'normalizeY' })
  //   .transform({ type: 'sortX', by: 'y', reverse: true })
  //   .encode('x', '月份')
  //   .encode('y', '月均降雨量')
  //   .encode('color', 'name')
  //   .encode('key', (d) => d['name'] + d['月份'])
  //   .interaction({
  //     legendFilter: false,
  //     elementPointMove: {
  //       precision: 3,
  //     },
  //   })
  //   .coordinate({ transform: [{ type: 'transpose' }] });
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
  encode: {
    x: '月份',
    y: '月均降雨量',
    color: 'name',
    key: '(d',
  },
  transform: [
    {
      type: 'stackY',
    },
    {
      type: 'normalizeY',
    },
    {
      type: 'sortX',
      by: 'y',
      reverse: true,
    },
  ],
  coordinate: {
    transform: [
      {
        type: 'transpose',
      },
    ],
  },
};

const Data: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Numerical Interaction</h2>
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

export default Data;
