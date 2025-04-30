// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-aggregated-stacked.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/stacked_bar_weather.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/3ed6f372-5362-4861-a33b-a16a9efbc922.csv',
  //   })
  //   .transform({ type: 'groupX', y: 'count' })
  //   .transform({ type: 'stackY', reverse: true, orderBy: 'series' })
  //   .encode('x', (d) => new Date(d.date).getMonth())
  //   .encode('color', 'weather')
  //   .scale('color', {
  //     domain: ['sun', 'fog', 'drizzle', 'rain', 'snow'],
  //     range: ['#e7ba52', '#c7c7c7', '#aec7e8', '#1f77b4', '#9467bd'],
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "color": "weather"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "count"
    },
    {
      "type": "stackY",
      "reverse": true,
      "orderBy": "series"
    }
  ],
  "scale": {}
};

const AnalysisGroupBarAggregatedStackedChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisGroupBarAggregatedStackedChart;
