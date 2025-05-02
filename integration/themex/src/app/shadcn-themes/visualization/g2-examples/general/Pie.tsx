'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/donut-base.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: '事例一', count: 40, percent: 0.4 },
  //   { item: '事例二', count: 21, percent: 0.21 },
  //   { item: '事例三', count: 17, percent: 0.17 },
  //   { item: '事例四', count: 13, percent: 0.13 },
  //   { item: '事例五', count: 9, percent: 0.09 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'percent')
  //   .encode('color', 'item')
  //   .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
  //   .label({
  //     position: 'outside',
  //     text: (data) => `${data.item}: ${data.percent * 100}%`,
  //   })
  //   .tooltip((data) => ({
  //     name: data.item,
  //     value: `${data.percent * 100}%`,
  //   }));
  // 
  // chart
  //   .text()
  //   .style('text', '主机')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', -25)
  //   .style('fontSize', 34)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
  // 
  // chart
  //   .text()
  //   .style('text', '200')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dx', -25)
  //   .style('dy', 25)
  //   .style('fontSize', 44)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
  // 
  // chart
  //   .text()
  //   .style('text', '台')
  //   // Relative position
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dx', 35)
  //   .style('dy', 25)
  //   .style('fontSize', 34)
  //   .style('fill', '#8c8c8c')
  //   .style('textAlign', 'center');
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
    y: 'percent',
    color: 'item',
  },
  transform: [
    {
      type: 'stackY',
    },
  ],
  legend: {
    color: {
      position: 'bottom',
      layout: {
        justifyContent: 'center',
      },
    },
  },
  style: {
    text: '台',
    x: '50%',
    y: '50%',
    dy: '25',
    fontSize: '34',
    fill: '#8c8c8c',
    textAlign: 'center',
    dx: '35',
  },
  labels: [null],
  coordinate: {
    type: 'theta',
    outerRadius: 0.8,
    innerRadius: 0.5,
  },
};

const Pie: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Pie</h2>
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

export default Pie;
