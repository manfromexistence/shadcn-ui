// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/theme/pattern/demo/squares-pattern.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://nivo.rocks/pie/
  //  */
  // import { Chart } from '@antv/g2';
  // import { squares } from '@antv/g-pattern';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 500,
  //   height: 400,
  // });
  // 
  // chart.coordinate({ type: 'theta', innerRadius: 0.25, outerRadius: 0.8 });
  // 
  // const colors = ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'];
  // 
  // chart
  //   .interval()
  //   .data([
  //     { id: 'c', value: 526 },
  //     { id: 'sass', value: 220 },
  //     { id: 'php', value: 325 },
  //     { id: 'elixir', value: 561 },
  //     { id: 'rust', value: 54 },
  //   ])
  //   .transform({ type: 'stackY' })
  //   .encode('y', 'value')
  //   .label({
  //     text: 'id',
  //     position: 'outside',
  //     fontWeight: 'bold',
  //   })
  //   .style('radius', 6)
  //   .style('stroke', '#fff')
  //   .style('lineWidth', 4)
  //   .style('fill', (_, idx) => {
  //     return {
  //       image: squares({
  //         fill: colors[idx],
  //         size: 6,
  //         padding: 0,
  //       }),
  //       repetition: 'repeat',
  //       transform: 'rotate(30)',
  //     };
  //   })
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 500,
  "height": 400,
  "type": "interval",
  "data": [
    {
      "id": "c",
      "value": 526
    },
    {
      "id": "sass",
      "value": 220
    },
    {
      "id": "php",
      "value": 325
    },
    {
      "id": "elixir",
      "value": 561
    },
    {
      "id": "rust",
      "value": 54
    }
  ],
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "legend": false,
  "style": {
    "stroke": "#fff"
  },
  "labels": [
    null
  ],
  "coordinate": {
    "type": "theta",
    "innerRadius": 0.25,
    "outerRadius": 0.8
  }
};

const ThemePatternSquaresPatternChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">squares pattern</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ThemePatternSquaresPatternChart;
