'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/line/demo/interval-mean-line.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_precipitation_mean.html
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
  //   value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  // });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'mean' })
  //   .encode('x', (d) => new Date(d.date).getUTCMonth())
  //   .encode('y', 'precipitation')
  //   .scale('y', { tickCount: 5, domainMax: 6 })
  //   .tooltip({ channel: 'y', valueFormatter: '.2f' });
  // 
  // chart
  //   .lineY()
  //   .transform({ type: 'groupX', y: 'mean' }) // groupX 为分组并对指定的通道进行聚合，可以理解为把数据通过 y 通道的数据聚合， 然后取平均值(mean) 变更为一条数据。
  //   .encode('y', 'precipitation')
  //   .style('stroke', '#F4664A')
  //   .style('strokeOpacity', 1)
  //   .style('lineWidth', 2)
  //   .style('lineDash', [3, 3]);
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
  "type": "interval",
  "encode": {
    "y": "precipitation"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    },
    {
      "type": "groupX",
      "y": "mean"
    }
  ],
  "scale": {
    "y": {
      "tickCount": 5,
      "domainMax": 6
    }
  },
  "style": {
    "stroke": "#F4664A"
  }
};

const AnnotationLineIntervalMeanLineChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
  } */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationLineIntervalMeanLineChart;
