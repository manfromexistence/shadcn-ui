'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/unit/unit/demo/nested.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingBottom: 60,
  //   paddingLeft: 85,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/titanic.json',
  //     transform: [
  //       {
  //         type: 'sortBy',
  //         fields: ['survived', 'sex'],
  //       },
  //       {
  //         type: 'map',
  //         callback: ({ survived, ...d }) => ({
  //           ...d,
  //           survived: survived + '',
  //         }),
  //       },
  //     ],
  //   })
  //   .encode('y', 'pclass')
  //   .attr('shareSize', true);
  // 
  // const facetRect2 = facetRect
  //   .facetRect()
  //   .encode('x', 'survived')
  //   .axis('y', false)
  //   .axis('x', {
  //     labelFormatter: (d) => (d === '1' ? 'Yes' : 'No'),
  //     position: 'bottom',
  //   })
  //   .attr('shareSize', true);
  // 
  // const facetRect3 = facetRect2
  //   .facetRect()
  //   .encode('y', 'sex')
  //   .attr('shareSize', true)
  //   .axis('x', false)
  //   .axis('y', { position: 'left' });
  // 
  // facetRect3
  //   .point()
  //   .transform({ type: 'pack' })
  //   .legend('color', { labelFormatter: (d) => (d === '1' ? 'Yes' : 'No') })
  //   .encode('color', 'survived')
  //   .encode('shape', 'point')
  //   .encode('size', 3)
  //   .tooltip({
  //     title: '',
  //     items: ['pclass', 'survived', 'sex'],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'point',
  encode: {
    y: 'sex',
    x: 'survived',
    color: 'survived',
    shape: 'point',
    size: '3',
  },
  transform: [
    {
      type: 'pack',
    },
  ],
  axis: {
    y: {
      position: 'left',
    },
    x: false,
  },
  legend: {},
  tooltip: [
    {
      title: '',
      items: ['pclass', 'survived', 'sex'],
    },
  ],
};

const Unit: React.FC = () => {
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable 'PARSE_ERROR' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec
    ? { ...spec, data: chartData }
    : { type: 'invalid', data: chartData, error: 'Spec generation failed' };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Unit Visualization</h2>
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

export default Unit;
