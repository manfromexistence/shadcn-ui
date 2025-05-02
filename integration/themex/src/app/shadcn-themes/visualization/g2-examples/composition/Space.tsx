'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/space/demo/space-layer.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const scaleColor = (node) =>
  //   node.scale('color', {
  //     palette: 'cool',
  //     offset: (t) => t * 0.8 + 0.1,
  //   });
  // 
  // const layer = chart.spaceLayer().data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //   format: 'csv',
  // });
  // 
  // layer
  //   .interval()
  //   .transform({ type: 'sortX', reverse: true, by: 'y' })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .encode('color', 'letter')
  //   .call(scaleColor);
  // 
  // layer
  //   .interval()
  //   .attr('x', 300)
  //   .attr('y', 50)
  //   .attr('width', 300)
  //   .attr('height', 300)
  //   .coordinate({ type: 'theta' })
  //   .transform({ type: 'stackY' })
  //   .legend(false)
  //   .scale('color', {
  //     palette: 'cool',
  //     offset: (t) => t * 0.8 + 0.1,
  //   })
  //   .encode('y', 'frequency')
  //   .encode('color', 'letter')
  //   .call(scaleColor);
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
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    format: 'csv',
  },
  encode: {
    x: 'letter',
    y: 'frequency',
    color: 'letter',
  },
  transform: [
    {
      type: 'sortX',
      reverse: true,
      by: 'y',
    },
    {
      type: 'stackY',
    },
  ],
  scale: {},
  legend: false,
  coordinate: {
    type: 'theta',
  },
};

const Space: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Space</h2>
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

export default Space;
