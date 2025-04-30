// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/point/demo/point-aggregated.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/circle_github_punchcard.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 360,
  //   inset: 10,
  // });
  // 
  // chart.style('mainStroke', 'black');
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/commits.json',
  //   })
  //   .transform({ type: 'group', size: 'sum' })
  //   .transform({ type: 'sortY' })
  //   .axis('x', { title: 'time (hours)', tickCount: 24 })
  //   .axis('y', { title: 'time (day)', grid: true })
  //   .scale('y', { type: 'point' })
  //   .encode('x', (d) => new Date(d.time).getUTCHours())
  //   .encode('y', (d) => new Date(d.time).getUTCDay())
  //   .encode('size', 'count')
  //   .encode('color', 'count')
  //   .encode('shape', 'point');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 360,
  "inset": 10,
  "type": "point",
  "encode": {
    "size": "count",
    "color": "count",
    "shape": "point"
  },
  "transform": [
    {
      "type": "group",
      "size": "sum"
    },
    {
      "type": "sortY"
    }
  ],
  "scale": {
    "y": {
      "type": "point"
    }
  },
  "axis": {
    "x": {
      "title": "time (hours)",
      "tickCount": 24
    },
    "y": {
      "title": "time (day)",
      "grid": true
    }
  },
  "style": {
    "mainStroke": "black"
  }
};

const GeneralPointPointAggregatedChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPointPointAggregatedChart;
