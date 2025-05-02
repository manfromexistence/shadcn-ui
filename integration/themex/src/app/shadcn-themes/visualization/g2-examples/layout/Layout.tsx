'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/layout/layout/demo/chart-layout.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container' });
  // 
  // chart.options({
  //   type: 'point',
  //   height: 600,
  //   width: 700,
  //   margin: 100,
  //   padding: 60,
  //   paddingLeft: 100, // 单独设置paddingLeft的优先级比padding高
  //   insetLeft: 30,
  //   insetRight: 30,
  // 
  //   data: {
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/commits.json',
  //   },
  //   encode: {
  //     x: (d) => new Date(d.time).getUTCHours(),
  //     y: (d) => new Date(d.time).getUTCDay(),
  //     size: 'count',
  //     shape: 'point',
  //   },
  //   transform: [{ type: 'group', size: 'sum' }, { type: 'sortY' }],
  //   scale: { y: { type: 'point' } },
  //   style: { shape: 'point', fill: '#76b7b2' },
  //   axis: {
  //     x: { title: 'time (hours)', tickCount: 24 },
  //     y: { title: 'time (day)', grid: true },
  //   },
  //   legend: false,
  //   viewStyle: {
  //     viewFill: '#DCEEFE',
  //     plotFill: '#A2D4F6',
  //     mainFill: '#FFC6A1',
  //     contentFill: '#FF8E72',
  //   },
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
  type: 'point',
};

const Layout: React.FC = () => {
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable 'unknown' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec
    ? { ...spec, data: chartData }
    : { type: 'invalid', data: chartData, error: 'Spec generation failed' };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Chart Layout</h2>
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

export default Layout;
