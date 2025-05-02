'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/bullet/demo/bullet-datas.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const colors = {
  //   ranges: ['#bfeec8', '#FFe0b0', '#FFbcb8'],
  //   measures: ['#61DDAA', '#5B8FF9'],
  //   target: '#39a3f4',
  // };
  // 
  // const data = [
  //   {
  //     title: '满意度',
  //     ranges: 100,
  //     measures: 60,
  //     target: 90,
  //   },
  //   {
  //     title: '满意度',
  //     ranges: 80,
  //     measures: 10,
  //   },
  //   {
  //     title: '满意度',
  //     ranges: 30,
  //   },
  // ];
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .data(data)
  //   .scale('color', {
  //     range: [colors['ranges'], colors['measures'], colors['target']].flat(),
  //   })
  //   .legend('color', {
  //     itemMarker: (d) => {
  //       return d === '目标' ? 'line' : 'square';
  //     },
  //   });
  // 
  // chart
  //   .interval()
  //   .axis({
  //     y: {
  //       grid: true,
  //       gridLineWidth: 2,
  //     },
  //     x: {
  //       title: false,
  //     },
  //   })
  //   .encode('x', 'title')
  //   .encode('y', 'ranges')
  //   .encode('color', (d, i) => ['优', '良', '差'][i])
  //   .style('maxWidth', 30);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'title')
  //   .encode('y', 'measures')
  //   .encode('color', (d, i) => ['下半年', '上半年'][i] || '下半年')
  //   .style('maxWidth', 20)
  //   .label({
  //     text: 'measures',
  //     position: 'right',
  //     textAlign: 'left',
  //     dx: 5,
  //   });
  // 
  // chart
  //   .point()
  //   .encode('x', 'title')
  //   .encode('y', 'target')
  //   .encode('shape', 'line')
  //   .encode('color', () => '目标')
  //   .encode('size', 8)
  //   .style('lineWidth', 1)
  //   .tooltip({
  //     title: false,
  //     items: [{ channel: 'y' }],
  //   });
  // 
  // chart.interaction('tooltip', { shared: true });
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
    x: 'title',
    y: 'target',
    color: '(',
    shape: 'line',
    size: '8',
  },
  scale: {},
  axis: {
    y: {
      grid: true,
      gridLineWidth: 2,
    },
    x: {
      title: false,
    },
  },
  legend: {},
  style: {
    maxWidth: '20',
    lineWidth: '1',
  },
  labels: [
    {
      text: 'measures',
      position: 'right',
      textAlign: 'left',
      dx: 5,
    },
  ],
  tooltip: [
    {
      title: false,
      items: [
        {
          channel: 'y',
        },
      ],
    },
  ],
  coordinate: {
    transform: [
      {
        type: 'transpose',
      },
    ],
  },
  interaction: {
    tooltip: {
      shared: true,
    },
  },
};

const Bullet: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Bullet</h2>
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

export default Bullet;
