'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/hexbin-china.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import DataSet from '@antv/data-set';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .polygon()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/hexbin-china.json',
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: (data) => {
  //           const dv = new DataSet.View().source(data).transform({
  //             type: 'bin.hexagon',
  //             fields: ['longitude', 'latitude'],
  //             binWidth: [2, 3],
  //             as: ['longitude', 'latitude', 'count'],
  //           });
  //           return dv.rows;
  //         },
  //       },
  //     ],
  //   })
  //   .encode('x', 'longitude')
  //   .encode('y', 'latitude')
  //   .encode('color', 'count')
  //   .scale('color', {
  //     range: '#BAE7FF-#1890FF-#0050B3',
  //   })
  //   .style('lineWidth', 5)
  //   .style('stroke', '#fff')
  //   .axis(false)
  //   .legend(false)
  //   .tooltip({
  //     field: 'count',
  //   })
  //   .state('active', { fill: 'orange' })
  //   .state('inactive', { opacity: 0.8 })
  //   .interaction('elementHighlight', true);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'polygon',
  encode: {
    x: 'longitude',
    y: 'latitude',
    color: 'count',
  },
  transform: [
    {
      type: 'bin.hexagon',
      fields: ['longitude', 'latitude'],
      binWidth: [2, 3],
      as: ['longitude', 'latitude', 'count'],
    },
  ],
  scale: {
    color: {
      range: '#BAE7FF-#1890FF-#0050B3',
    },
  },
  axis: false,
  legend: false,
  style: {
    lineWidth: '5',
    stroke: '#fff',
  },
  tooltip: [
    {
      field: 'count',
    },
  ],
  interaction: {
    elementHighlight: true,
  },
};

const Geo: React.FC = () => {
  // Data was assigned from a variable or failed to parse.
  // TODO: Provide data manually or ensure the variable 'PARSE_ERROR' is available.
  const chartData: any[] = []; // Defaulting to empty array
  const finalSpec: G2Spec = spec
    ? { ...spec, data: chartData }
    : { type: 'invalid', data: chartData, error: 'Spec generation failed' };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Geo</h2>
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

export default Geo;
