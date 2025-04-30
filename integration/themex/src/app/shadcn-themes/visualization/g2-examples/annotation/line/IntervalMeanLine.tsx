// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
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
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationLineIntervalMeanLineChart;
