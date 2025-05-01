// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/dual/demo/dual-aggregated-line-area.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_dual_axis.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/weather.json',
  //   transform: [
  //     {
  //       type: 'filter',
  //       callback: (d) => d.location === 'Seattle',
  //     },
  //   ],
  // });
  // 
  // chart
  //   .area()
  //   .transform({ type: 'groupX', y: 'mean', y1: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', ['temp_max', 'temp_min'])
  //   .scale('y', { nice: true })
  //   .axis('y', {
  //     title: 'Avg. Temperature (°C)',
  //     titleFill: '#85C5A6',
  //   })
  //   .style('fill', '#85c5A6')
  //   .style('fillOpacity', 0.3)
  //   .tooltip({ channel: 'y', valueFormatter: '.1f' })
  //   .tooltip({ channel: 'y1', valueFormatter: '.1f' });
  // 
  // chart
  //   .line()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getMonth())
  //   .encode('y', 'precipitation')
  //   .encode('shape', 'smooth')
  //   .style('stroke', 'steelblue')
  //   .scale('y', { independent: true })
  //   .axis('y', {
  //     position: 'right',
  //     grid: null,
  //     title: 'Precipitation (inches)',
  //     titleFill: 'steelblue',
  //   })
  //   .tooltip({ channel: 'y', valueFormatter: '.1f' });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "area",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/weather.json",
    "transform": [
      {
        "type": "filter"
      }
    ]
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean",
      "y1": "mean"
    },
    {
      "type": "groupX",
      "y": "mean"
    }
  ],
  "scale": {
    "y": {
      "independent": true
    }
  },
  "style": {
    "fill": "#85c5A6",
    "stroke": "steelblue"
  },
  "tooltip": [
    null,
    null,
    null
  ]
};

const GeneralDualDualAggregatedLineAreaChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">D</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralDualDualAggregatedLineAreaChart;
