'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/box/demo/grouped-box.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   {
  //     Species: 'I. setosa',
  //     type: 'SepalLength',
  //     value: 5.1,
  //     bin: [4.3, 4.8, 5, 5.2, 5.8],
  //   },
  //   {
  //     Species: 'I. setosa',
  //     type: 'SepalWidth',
  //     value: 3.5,
  //     bin: [2.3, 3.2, 3.4, 3.7, 4.4],
  //   },
  //   {
  //     Species: 'I. setosa',
  //     type: 'PetalLength',
  //     value: 1.4,
  //     bin: [1, 1.4, 1.5, 1.6, 1.9],
  //   },
  //   {
  //     Species: 'I. setosa',
  //     type: 'PetalWidth',
  //     value: 0.2,
  //     bin: [0.1, 0.2, 0.2, 0.3, 0.6],
  //   },
  //   {
  //     Species: 'I. versicolor',
  //     type: 'SepalLength',
  //     value: 7,
  //     bin: [4.9, 5.6, 5.9, 6.3, 7],
  //   },
  //   {
  //     Species: 'I. versicolor',
  //     type: 'SepalWidth',
  //     value: 3.2,
  //     bin: [2, 2.5, 2.8, 3, 3.4],
  //   },
  //   {
  //     Species: 'I. versicolor',
  //     type: 'PetalLength',
  //     value: 4.7,
  //     bin: [3, 4, 4.35, 4.6, 5.1],
  //   },
  //   {
  //     Species: 'I. versicolor',
  //     type: 'PetalWidth',
  //     value: 1.4,
  //     bin: [1, 1.2, 1.3, 1.5, 1.8],
  //   },
  //   {
  //     Species: 'I. virginica',
  //     type: 'SepalLength',
  //     value: 6.3,
  //     bin: [4.9, 6.2, 6.5, 6.9, 7.9],
  //   },
  //   {
  //     Species: 'I. virginica',
  //     type: 'SepalWidth',
  //     value: 3.3,
  //     bin: [2.2, 2.8, 3, 3.2, 3.8],
  //   },
  //   {
  //     Species: 'I. virginica',
  //     type: 'PetalLength',
  //     value: 6,
  //     bin: [4.5, 5.1, 5.55, 5.9, 6.9],
  //   },
  //   {
  //     Species: 'I. virginica',
  //     type: 'PetalWidth',
  //     value: 2.5,
  //     bin: [1.4, 1.8, 2, 2.3, 2.5],
  //   },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .box()
  //   .data(data)
  //   .encode('x', 'type')
  //   .encode('y', 'bin')
  //   .encode('series', 'Species')
  //   .encode('color', 'Species')
  //   .scale('x', { paddingInner: 0.2, paddingOuter: 0.1 })
  //   .scale('y', { zero: true })
  //   .scale('series', { paddingInner: 0.3, paddingOuter: 0.1 })
  //   .style('stroke', 'black')
  //   .tooltip([
  //     { name: 'min', channel: 'y' },
  //     { name: 'q1', channel: 'y1' },
  //     { name: 'q2', channel: 'y2' },
  //     { name: 'q3', channel: 'y3' },
  //     { name: 'max', channel: 'y4' },
  //   ]);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'box',
  encode: {
    x: 'type',
    y: 'bin',
    series: 'Species',
    color: 'Species',
  },
  scale: {
    x: {
      paddingInner: 0.2,
      paddingOuter: 0.1,
    },
    y: {
      zero: true,
    },
    series: {
      paddingInner: 0.3,
      paddingOuter: 0.1,
    },
  },
  style: {
    stroke: 'black',
  },
};

const Box: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Box</h2>
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

export default Box;
