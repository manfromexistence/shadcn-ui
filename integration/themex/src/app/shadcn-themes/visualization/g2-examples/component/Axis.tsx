'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/axis/demo/axis-xy.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .scale('x', {
  //     type: 'linear',
  //     domain: [5, 10],
  //     range: [0, 1],
  //   })
  //   .scale('y', {
  //     type: 'linear',
  //     domain: [5, 10],
  //     range: [0, 1],
  //   });
  // 
  // chart.axisX().attr('title', 'AxisX');
  // 
  // chart
  //   .axisY()
  //   .attr('title', 'AxisY')
  //   .attr('tickCount', 10)
  //   .style('labelFontSize', 14)
  //   .style('gridLineWidth', 10)
  //   .style('gridStroke', 'red');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  scale: {
    x: {
      type: 'linear',
      domain: [5, 10],
      range: [0, 1],
    },
    y: {
      type: 'linear',
      domain: [5, 10],
      range: [0, 1],
    },
  },
  style: {
    labelFontSize: '14',
    gridLineWidth: '10',
    gridStroke: 'red',
  },
};

const Axis: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Axis</h2>
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

export default Axis;
