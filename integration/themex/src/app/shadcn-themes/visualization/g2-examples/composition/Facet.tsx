'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/circle.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const M = [
  //   'Jan.',
  //   'Feb.',
  //   'Mar.',
  //   'Apr.',
  //   'May',
  //   'Jun.',
  //   'Jul.',
  //   'Aug.',
  //   'Sept.',
  //   'Oct.',
  //   'Nov.',
  //   'Dec.',
  // ];
  // const N = ['A', 'B', 'C', 'D'];
  // const data = M.flatMap((month) =>
  //   N.map((name) => ({
  //     month,
  //     name,
  //     value: Math.random(),
  //   })),
  // );
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 480,
  //   height: 480,
  // });
  // 
  // const facetCircle = chart.facetCircle().data(data).encode('position', 'month');
  // 
  // facetCircle
  //   .interval()
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('color', 'name');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  width: 480,
  height: 480,
  type: 'interval',
  encode: {
    position: 'month',
    x: 'name',
    y: 'value',
    color: 'name',
  },
};

const Facet: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Facet</h2>
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

export default Facet;
