'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/violin/demo/violin-polar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({
  //   type: 'polar',
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/species.json',
  // });
  // 
  // chart
  //   .density()
  //   .data({
  //     transform: [
  //       {
  //         type: 'kde',
  //         field: 'y',
  //         groupBy: ['x', 'species'],
  //       },
  //     ],
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('series', 'species')
  //   .encode('color', 'species')
  //   .encode('size', 'size')
  //   .tooltip(false);
  // 
  // chart
  //   .boxplot()
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('series', 'species')
  //   .encode('color', 'species')
  //   .encode('shape', 'violin')
  //   .style('opacity', 0.5)
  //   .style('strokeOpacity', 0.5)
  //   .style('point', false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'density',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/species.json',
  },
  encode: {
    x: 'x',
    y: 'y',
    series: 'species',
    color: 'species',
    size: 'size',
    shape: 'violin',
  },
  style: {
    opacity: '0.5',
    strokeOpacity: '0.5',
    point: 'false',
  },
  tooltip: false,
  coordinate: {
    type: 'polar',
  },
};

const Violin: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Violin</h2>
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

export default Violin;
