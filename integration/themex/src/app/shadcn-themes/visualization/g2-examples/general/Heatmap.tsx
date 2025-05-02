'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/heatmap/demo/heatmap-density.ts
  ================================================================================
  // import DataSet from '@antv/data-set';
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/diamond.json',
  // });
  // 
  // chart.scale('x', { nice: true, domainMin: -0.5 });
  // chart.scale('y', { nice: true, domainMin: -2000 });
  // chart.scale('color', { nice: true });
  // 
  // chart
  //   .heatmap()
  //   .data({
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: (data) => {
  //           const dv = new DataSet.View().source(data);
  //           dv.transform({
  //             type: 'kernel-smooth.density',
  //             fields: ['carat', 'price'],
  //             as: ['carat', 'price', 'density'],
  //           });
  //           return dv.rows;
  //         },
  //       },
  //     ],
  //   })
  //   .encode('x', 'carat')
  //   .encode('y', 'price')
  //   .encode('color', 'density')
  //   .style({
  //     opacity: 0.3,
  //     gradient: [
  //       [0, 'white'],
  //       [0.2, 'blue'],
  //       [0.4, 'cyan'],
  //       [0.6, 'lime'],
  //       [0.8, 'yellow'],
  //       [0.9, 'red'],
  //     ],
  //   });
  // 
  // chart.point().encode('x', 'carat').encode('y', 'price');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'heatmap',
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/diamond.json',
  },
  encode: {
    x: 'carat',
    y: 'price',
    color: 'density',
  },
  transform: [
    {
      type: 'kernel-smooth.density',
      fields: ['carat', 'price'],
      as: ['carat', 'price', 'density'],
    },
  ],
  scale: {
    x: {
      nice: true,
      domainMin: -0.5,
    },
    y: {
      nice: true,
      domainMin: -2000,
    },
    color: {
      nice: true,
    },
  },
  style: {
    opacity: 0.3,
    gradient: [
      [0, 'white'],
      [0.2, 'blue'],
      [0.4, 'cyan'],
      [0.6, 'lime'],
      [0.8, 'yellow'],
      [0.9, 'red'],
    ],
  },
};

const Heatmap: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Heatmap</h2>
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

export default Heatmap;
