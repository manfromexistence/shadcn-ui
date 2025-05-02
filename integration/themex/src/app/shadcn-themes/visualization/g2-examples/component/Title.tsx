'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/title/demo/title-style.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.title({
  //   align: 'right',
  //   title: 'Sold by genre, sorted by sold',
  //   titleFontSize: 15,
  //   subtitle: 'It shows the sales volume of genre, sored by sold.',
  //   subtitleFill: 'red',
  //   subtitleFontSize: 12,
  //   subtitleShadowColor: 'yellow',
  //   subtitleShadowBlur: 5,
  //   subtitleFontStyle: 'italic',
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { genre: 'Sports', sold: 0 },
  //     { genre: 'Strategy', sold: 115 },
  //     { genre: 'Action', sold: 120 },
  //     { genre: 'Shooter', sold: 350 },
  //     { genre: 'Other', sold: 150 },
  //   ])
  //   .encode('x', 'genre')
  //   .encode('y', 'sold')
  //   .encode('color', 'genre')
  //   .style('minHeight', 50);
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
  data: [
    {
      genre: 'Sports',
      sold: 0,
    },
    {
      genre: 'Strategy',
      sold: 115,
    },
    {
      genre: 'Action',
      sold: 120,
    },
    {
      genre: 'Shooter',
      sold: 350,
    },
    {
      genre: 'Other',
      sold: 150,
    },
  ],
  encode: {
    x: 'genre',
    y: 'sold',
    color: 'genre',
  },
  style: {
    minHeight: '50',
  },
};

const Title: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">图表标题</h2>
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

export default Title;
