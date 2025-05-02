'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/radial-bar-with-background.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { type: '1-3秒', value: 0.16 },
  //   { type: '4-10秒', value: 0.125 },
  //   { type: '11-30秒', value: 0.2 },
  //   { type: '1-3分', value: 0.2 },
  //   { type: '3-10分', value: 0.05 },
  //   { type: '10-30分', value: 0.01 },
  //   { type: '30+分', value: 0.015 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   theme: 'dark',
  // });
  // 
  // chart.data(data).coordinate({ type: 'radial', innerRadius: 0.35 });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'type')
  //   .encode('y', 0.2)
  //   .style('fill', '#202020')
  //   .state({
  //     active: { strokeWidth: 0 },
  //   })
  //   .tooltip(false);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'type')
  //   .encode('y', 'value')
  //   .encode('color', [
  //     (val) => (val.type === '10-30分' || val.type === '30+分' ? 'high' : 'low'),
  //   ])
  //   .scale('color', { range: ['#5B8FF9', '#ff4d4f'] })
  //   .style('radius', 20)
  //   .tooltip([
  //     (item) => ({
  //       name: item.type,
  //       value: item.value,
  //     }),
  //   ])
  //   .axis(false)
  //   .legend(false)
  //   .state({
  //     active: { stroke: '#fff', strokeWidth: 1 },
  //   })
  //   .interaction('elementHighlight');
  // 
  // chart
  //   .image()
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('width', 100)
  //   .style('height', 80)
  //   .encode(
  //     'src',
  //     'https://gw.alipayobjects.com/mdn/rms_ef85c6/afts/img/A*0DYiQKP08cQAAAAAAAAAAAAAARQnAQ',
  //   )
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
  type: 'interval',
  data: [
    {
      type: '1-3秒',
      value: 0.16,
    },
    {
      type: '4-10秒',
      value: 0.125,
    },
    {
      type: '11-30秒',
      value: 0.2,
    },
    {
      type: '1-3分',
      value: 0.2,
    },
    {
      type: '3-10分',
      value: 0.05,
    },
    {
      type: '10-30分',
      value: 0.01,
    },
    {
      type: '30+分',
      value: 0.015,
    },
  ],
  encode: {
    x: 'type',
    y: 'value',
    color: '[\n    (val',
    src: "'https://gw.alipayobjects.com/mdn/rms_ef85c6/afts/img/A*0DYiQKP08cQAAAAAAAAAAAAAARQnAQ',",
  },
  scale: {
    color: {
      range: ['#5B8FF9', '#ff4d4f'],
    },
  },
  axis: false,
  legend: false,
  style: {
    fill: '#202020',
    radius: '20',
    x: '50%',
    y: '50%',
    width: '100',
    height: '80',
  },
  tooltip: false,
  coordinate: {
    type: 'radial',
    innerRadius: 0.35,
  },
  interaction: {
    elementHighlight: true,
  },
};

const Radial: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Radial</h2>
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

export default Radial;
