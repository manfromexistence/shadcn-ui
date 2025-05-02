'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/rank-trend-area.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container' });
  // 
  // chart.options({
  //   type: 'view',
  //   autoFit: true,
  //   paddingRight: 10,
  //   data: [
  //     { month: '一月', rank: 200 },
  //     { month: '二月', rank: 160 },
  //     { month: '三月', rank: 100 },
  //     { month: '四月', rank: 80 },
  //     { month: '五月', rank: 99 },
  //     { month: '六月', rank: 36 },
  //     { month: '七月', rank: 40 },
  //     { month: '八月', rank: 20 },
  //     { month: '九月', rank: 12 },
  //     { month: '十月', rank: 15 },
  //     { month: '十一月', rank: 6 },
  //     { month: '十二月', rank: 1 },
  //   ],
  //   scale: {
  //     y: {
  //       nice: true,
  //       tickMethod: () => [0, 50, 100, 170, 199],
  //     },
  //   },
  //   axis: {
  //     y: {
  //       labelFormatter: (d) => `第${200 - d}名`,
  //     },
  //   },
  //   children: [
  //     {
  //       type: 'area',
  //       encode: { x: (d) => d.month, y: (d) => 200 - d.rank, shape: 'smooth' },
  //       style: { opacity: 0.2 },
  //       axis: { y: { labelFormatter: '~s', title: false } },
  //       style: {
  //         fill: 'l(270) 0:#ffffff 0.9:#7ec2f3 1:#1890ff',
  //         fillOpacity: 0.2,
  //       },
  //       tooltip: false,
  //     },
  //     {
  //       type: 'line',
  //       encode: { x: (d) => d.month, y: (d) => 200 - d.rank, shape: 'smooth' },
  //       interaction: {
  //         tooltip: {
  //           render: (event, { title, items }) => `
  // <div style="display: flex; align-items: center;">
  //   <span>${title}：第</span>
  //   <h2
  //     style="
  //         margin-left: 8px;
  //         margin-right: 8px;
  //         margin-top:4px;
  //         font-size: 18px;
  //         line-height: 36px;
  //         font-weight: 500px"
  //   >
  //     ${200 - items[0].value}
  //   </h2>
  //   <span>名</span>
  // </div>
  //           `,
  //         },
  //       },
  //       style: {
  //         lineWidth: 2,
  //       },
  //     },
  //   ],
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'view',
};

const Area: React.FC = () => {
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable 'unknown' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec
    ? { ...spec, data: chartData }
    : { type: 'invalid', data: chartData, error: 'Spec generation failed' };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Area</h2>
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

export default Area;
