'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/label/demo/htmlLabel.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const data = [
  //   { repo: 'G', star: 918 },
  //   { repo: 'G2', star: 11688 },
  //   { repo: 'G6', star: 10045 },
  //   { repo: 'L7', star: 3125 },
  //   { repo: 'F2', star: 7820 },
  //   { repo: 'S2', star: 1231 },
  //   { repo: 'X6', star: 4755 },
  // ];
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'repo')
  //   .encode('y', 'star')
  //   .encode('color', 'repo')
  //   .label({
  //     text: 'star',
  //     render: (text, datum) => {
  //       return `
  //         <div style="left:-50%;top:-20px;position:relative;font-size:14px;">
  //           <span>${datum.repo}</span>
  //           :
  //           <a href="https://github.com/antvis/${datum.repo}" target="_blank">${datum.star}</a>
  //         </div>
  //       `;
  //     },
  //   })
  //   .legend(false);
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
    x: 'repo',
    y: 'star',
    color: 'repo',
  },
  legend: false,
  labels: [null],
};

const Label: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Label</h2>
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

export default Label;
