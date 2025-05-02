'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y';

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/rough/demo/interval.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { Plugin } from '@antv/g-plugin-rough-canvas-renderer';
  // import WebFont from 'webfontloader';
  // 
  // WebFont.load({
  //   google: {
  //     families: ['Gaegu'],
  //   },
  //   active: () => {
  //     const chart = new Chart({
  //       container: 'container',
  //       autoFit: true,
  //       paddingLeft: 60,
  //       plugins: [new Plugin()],
  //     });
  // 
  //     chart
  //       .interval()
  //       .data([
  //         { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
  //         { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
  //         { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
  //         { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
  //         { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
  //         { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
  //         { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
  //         { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
  //         { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
  //         { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
  //         { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
  //         { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
  //         { month: 'Total', start: 0, end: 3164946 },
  //       ])
  //       .encode('x', 'month')
  //       .encode('y', ['end', 'start'])
  //       .encode('color', (d) =>
  //         d.month === 'Total' ? 'Total' : d.profit > 0 ? 'Increase' : 'Decrease',
  //       )
  //       .style('lineWidth', 2)
  //       .style('fillStyle', 'zigzag')
  //       .axis('x', {
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //       })
  //       .axis('y', {
  //         labelFormatter: '~s',
  //         titleFontSize: 15,
  //         titleFontFamily: 'Gaegu',
  //         labelFontFamily: 'Gaegu',
  //         tickStroke: '#cdcdcd',
  //         gridStroke: '#efefef',
  //       })
  //       .legend('color', { itemLabelFontFamily: 'Gaegu' });
  // 
  //     chart.render();
  //   },
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'interval',
  data: [
    {
      month: 'Jan.',
      profit: 387264,
      start: 0,
      end: 387264,
    },
    {
      month: 'Feb.',
      profit: 772096,
      start: 387264,
      end: 1159360,
    },
    {
      month: 'Mar.',
      profit: 638075,
      start: 1159360,
      end: 1797435,
    },
    {
      month: 'Apr.',
      profit: -211386,
      start: 1797435,
      end: 1586049,
    },
    {
      month: 'May',
      profit: -138135,
      start: 1586049,
      end: 1447914,
    },
    {
      month: 'Jun',
      profit: -267238,
      start: 1447914,
      end: 1180676,
    },
    {
      month: 'Jul.',
      profit: 431406,
      start: 1180676,
      end: 1612082,
    },
    {
      month: 'Aug.',
      profit: 363018,
      start: 1612082,
      end: 1975100,
    },
    {
      month: 'Sep.',
      profit: -224638,
      start: 1975100,
      end: 1750462,
    },
    {
      month: 'Oct.',
      profit: -299867,
      start: 1750462,
      end: 1450595,
    },
    {
      month: 'Nov.',
      profit: 607365,
      start: 1450595,
      end: 2057960,
    },
    {
      month: 'Dec.',
      profit: 1106986,
      start: 2057960,
      end: 3164946,
    },
    {
      month: 'Total',
      start: 0,
      end: 3164946,
    },
  ],
  encode: {
    x: 'month',
    y: ['end', 'start'],
    color: '(d',
  },
  axis: {
    x: {
      titleFontSize: 15,
      titleFontFamily: 'Gaegu',
      labelFontFamily: 'Gaegu',
      tickStroke: '#cdcdcd',
    },
    y: {
      labelFormatter: '~s',
      titleFontSize: 15,
      titleFontFamily: 'Gaegu',
      labelFontFamily: 'Gaegu',
      tickStroke: '#cdcdcd',
      gridStroke: '#efefef',
    },
  },
  legend: {
    color: {
      itemLabelFontFamily: 'Gaegu',
    },
  },
  style: {
    lineWidth: '2',
    fillStyle: 'zigzag',
  },
  plugins: [
    {
      type: 'A11yPlugin',
    },
  ],
};

const Rough: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Rough</h2>
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

export default Rough;
