'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/renderer/renderer/demo/svg.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Renderer } from '@antv/g-svg';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   renderer: new Renderer(),
  // });
  // 
  // const flex = chart
  //   .spaceFlex()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  //   })
  //   .attr('direction', 'col')
  //   .attr('ratio', [1, 1]);
  // 
  // const flex1 = flex.spaceFlex().attr('direction', 'row').attr('ratio', [1, 1]);
  // 
  // flex1
  //   .interval()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', 'precipitation');
  // 
  // flex1
  //   .line()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', 'wind')
  //   .encode('shape', 'smooth');
  // 
  // const flex2 = flex.spaceFlex().attr('direction', 'row').attr('ratio', [1, 1]);
  // 
  // flex2
  //   .area()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', ['temp_min', 'temp_max'])
  //   .encode('shape', 'smooth');
  // 
  // flex2
  //   .point()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', 'temp_min')
  //   .encode('y', 'temp_max')
  //   .encode('shape', 'point');
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
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  },
  encode: {
    x: 'temp_min',
    y: 'temp_max',
    shape: 'point',
  },
  transform: [
    {
      type: 'groupX',
      y: 'mean',
    },
    {
      type: 'groupX',
      y: 'mean',
    },
    {
      type: 'groupX',
      y: 'mean',
    },
    {
      type: 'groupX',
      y: 'mean',
    },
  ],
};

const Renderer: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Renderer</h2>
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

export default Renderer;
