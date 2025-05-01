// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/space/demo/space-flex.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 900,
  // });
  // 
  // const flex = chart
  //   .spaceFlex()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  //   })
  //   .attr('direction', 'col')
  //   .attr('ratio', [1, 2]);
  // 
  // flex
  //   .interval()
  //   .attr('paddingBottom', 0)
  //   .attr('paddingRight', 300)
  //   .transform({ type: 'groupX', y: 'max' })
  //   .axis('x', false)
  //   .encode('x', (d) => new Date(d.date).getUTCDate())
  //   .encode('y', 'temp_max')
  //   .encode('color', 'steelblue');
  // 
  // flex
  //   .spaceFlex()
  //   .attr('ratio', [2, 1])
  //   .call((node) =>
  //     node
  //       .cell()
  //       .attr('paddingRight', 0)
  //       .attr('paddingBottom', 60)
  //       .transform({ type: 'group', color: 'max' })
  //       .encode('x', (d) => new Date(d.date).getUTCDate())
  //       .encode('y', (d) => new Date(d.date).getUTCMonth())
  //       .encode('color', 'temp_max')
  //       .style('inset', 0.5)
  //       .axis('x', { title: 'Date' })
  //       .axis('y', { title: 'Month' })
  //       .legend({ color: false })
  //       .scale('color', { palette: 'gnBu' }),
  //   )
  //   .call((node) =>
  //     node
  //       .attr('paddingBottom', 60)
  //       .interval()
  //       .coordinate({ transform: [{ type: 'transpose' }] })
  //       .transform({ type: 'groupX', y: 'max' })
  //       .axis('x', false)
  //       .encode('x', (d) => new Date(d.date).getUTCMonth())
  //       .encode('y', 'temp_max')
  //       .encode('color', 'steelblue'),
  //   );
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 900,
  "type": "interval",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/seattle-weather.json"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "max"
    },
    {
      "type": "group",
      "color": "max"
    },
    {
      "type": "groupX",
      "y": "max"
    }
  ],
  "scale": {
    "color": {
      "palette": "gnBu"
    }
  },
  "style": {},
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const CompositionSpaceSpaceFlexChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionSpaceSpaceFlexChart;
