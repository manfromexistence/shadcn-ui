'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-stacked-diverging-rounded.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://nivo.rocks/storybook/?path=/docs/bar--diverging-stacked
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   paddingLeft: 25,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/nivo-gain-lost.json',
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: [
  //           'lost > 100$',
  //           'lost <= 100$',
  //           'gained <= 100$',
  //           'gained > 100$',
  //         ],
  //       },
  //     ],
  //   })
  //   .transform([{ type: 'stackY' }])
  //   .encode('x', 'user')
  //   .encode('y', 'value')
  //   .encode('color', 'key')
  //   .scale('x', { padding: 0.2 })
  //   .scale('y', { domainMin: -100, domainMax: 100 })
  //   .scale('color', {
  //     domain: ['lost > 100$', 'lost <= 100$', 'gained <= 100$', 'gained > 100$'],
  //     range: ['#97e3d5', '#61cdbb', '#e25c3b', '#f47560'],
  //   })
  //   .legend('color', { title: false })
  //   .label({
  //     text: 'value',
  //     position: 'inside',
  //     formatter: (v) => (v ? `${v}%` : ''),
  //     transform: [{ type: 'overlapDodgeY' }],
  //     fill: '#000',
  //     fontSize: 10,
  //   })
  //   .axis('y', {
  //     position: 'right',
  //     title: false,
  //     labelFormatter: (v) => `${v}%`,
  //   })
  //   .style('radius', 10);
  // 
  // chart
  //   .lineY()
  //   .data([0])
  //   .style('lineWidth', 2)
  //   .style('stroke', '#e25c3b')
  //   .style('strokeOpacity', 1);
  // 
  // chart.call(titleLeft, '75%', 'lost', '#61cdbb');
  // chart.call(titleLeft, '20%', 'gain', '#e25c3b');
  // 
  // function titleLeft(node, y, text, fill) {
  //   node
  //     .text()
  //     .style('x', -10)
  //     .style('y', y)
  //     .style('text', text)
  //     .style('fontWeight', 'bold')
  //     .style('dy', -10)
  //     .style('transform', 'rotate(-90)')
  //     .style('fill', fill);
  // }
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "paddingLeft": 25,
  "type": "interval",
  "data": [
    0
  ],
  "encode": {
    "x": "user",
    "y": "value",
    "color": "key"
  },
  "scale": {
    "x": {
      "padding": 0.2
    },
    "y": {
      "domainMin": -100,
      "domainMax": 100
    },
    "color": {
      "comment": /* TODO: Manually convert scale options: {\n    domain: ['lost > 100$', 'lost <= 100$', 'gained <= 100$', 'gained > 100$'],\n    range: ['#97e3d5', '#61cdbb', '#e25c3b', '#f47560'],\n  } */
    }
  },
  "axis": {
    "y": {
      "comment": /* TODO: Manually convert axis options: {\n    position: 'right',\n    title: false,\n    labelFormatter: (v) => `${v}%`,\n  } */
    }
  },
  "legend": {
    "color": {
      "comment": /* TODO: Manually convert legend options: { title: false } */
    }
  },
  "style": {
    "radius": /* TODO: Convert style value/expression: 10 */,
    "lineWidth": /* TODO: Convert style value/expression: 2 */,
    "stroke": "#e25c3b",
    "strokeOpacity": /* TODO: Convert style value/expression: 1 */,
    "x": /* TODO: Convert style value/expression: -10 */,
    "y": /* TODO: Convert style value/expression: y */,
    "text": /* TODO: Convert style value/expression: text */,
    "fontWeight": "bold",
    "dy": /* TODO: Convert style value/expression: -10 */,
    "transform": /* TODO: Convert style value/expression: 'rotate(-90 */,
    "fill": /* TODO: Convert style value/expression: fill */
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'value',\n    position: 'inside',\n    formatter: (v) => (v ? `${v}%` : ''),\n    transform: [{ type: 'overlapDodgeY' }],\n    fill: '#000',\n    fontSize: 10,\n  } */
    }
  ]
};

const GeneralIntervalBarStackedDivergingRoundedChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarStackedDivergingRoundedChart;
