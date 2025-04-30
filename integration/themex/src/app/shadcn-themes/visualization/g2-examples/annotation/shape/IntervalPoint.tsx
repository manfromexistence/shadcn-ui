// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/shape/demo/interval-point.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingRight: 30,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart.data([
  //   { x: 'Jan', tick: 9.3, value: 11.5 },
  //   { x: 'Feb', tick: 10.5, value: 12 },
  //   { x: 'Mar', tick: 11.2, value: 11.7 },
  //   { x: 'Apr', tick: 11.2, value: 12.4 },
  //   { x: 'May', tick: 12.7, value: 13.5 },
  //   { x: 'Jun', tick: 13.1, value: 11.9 },
  //   { x: 'Jul', tick: 12.2, value: 14.6 },
  //   { x: 'Aug', tick: 12.2, value: 17.2 },
  //   { x: 'Sep', tick: 10.1, value: 16.9 },
  //   { x: 'Oct', tick: 14.5, value: 15.4 },
  //   { x: 'Nov', tick: 14.5, value: 16.9 },
  //   { x: 'Dec', tick: 15.5, value: 17.2 },
  // ]);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'x')
  //   .encode('y', 'value')
  //   .encode('size', 20)
  //   .axis('x', { title: false })
  //   .style('fillOpacity', 0.65)
  //   .style('lineWidth', 1)
  //   .label({
  //     text: 'value',
  //     position: 'right',
  //     formatter: (v) => `${v}min`,
  //     dx: 4,
  //     textAlign: 'start',
  //   });
  // 
  // chart
  //   .point()
  //   .encode('x', 'x')
  //   .encode('y', 'tick')
  //   .encode('shape', 'line')
  //   .encode('size', 15)
  //   .style('stroke', 'red')
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "paddingRight": 30,
  "type": "interval",
  "encode": {
    "x": "x",
    "y": "tick",
    "shape": "line"
  },
  "axis": {
    "x": {
      "title": false
    }
  },
  "style": {
    "stroke": "red"
  },
  "labels": [
    null
  ],
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const AnnotationShapeIntervalPointChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationShapeIntervalPointChart;
