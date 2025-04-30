// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radar/demo/radar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: 'Design', type: 'a', score: 70 },
  //   { item: 'Design', type: 'b', score: 30 },
  //   { item: 'Development', type: 'a', score: 60 },
  //   { item: 'Development', type: 'b', score: 70 },
  //   { item: 'Marketing', type: 'a', score: 50 },
  //   { item: 'Marketing', type: 'b', score: 60 },
  //   { item: 'Users', type: 'a', score: 40 },
  //   { item: 'Users', type: 'b', score: 50 },
  //   { item: 'Test', type: 'a', score: 60 },
  //   { item: 'Test', type: 'b', score: 70 },
  //   { item: 'Language', type: 'a', score: 70 },
  //   { item: 'Language', type: 'b', score: 50 },
  //   { item: 'Technology', type: 'a', score: 50 },
  //   { item: 'Technology', type: 'b', score: 40 },
  //   { item: 'Support', type: 'a', score: 30 },
  //   { item: 'Support', type: 'b', score: 40 },
  //   { item: 'Sales', type: 'a', score: 60 },
  //   { item: 'Sales', type: 'b', score: 40 },
  //   { item: 'UX', type: 'a', score: 50 },
  //   { item: 'UX', type: 'b', score: 60 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ type: 'polar' });
  // 
  // chart
  //   .data(data)
  //   .scale('x', { padding: 0.5, align: 0 })
  //   .scale('y', { tickCount: 5 })
  //   .axis('x', { grid: true })
  //   .axis('y', { zIndex: 1, title: false });
  // 
  // chart
  //   .area()
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .encode('color', 'type')
  //   .encode('shape', 'smooth')
  //   .style('fillOpacity', 0.5)
  //   .scale('y', { domainMax: 80 });
  // 
  // chart
  //   .line()
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .encode('color', 'type')
  //   .encode('shape', 'smooth')
  //   .style('lineWidth', 2);
  // 
  // chart.interaction('tooltip', { crosshairsLineDash: [4, 4] });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "area",
  "encode": {
    "x": "item",
    "y": "score",
    "color": "type",
    "shape": "smooth"
  },
  "scale": {
    "x": {
      "padding": 0.5,
      "align": 0
    },
    "y": {
      "domainMax": 80
    }
  },
  "axis": {
    "x": {
      "grid": true
    },
    "y": {
      "zIndex": 1,
      "title": false
    }
  },
  "style": {},
  "coordinate": {
    "type": "polar"
  },
  "interaction": {
    "type": "tooltip"
  }
};

const GeneralRadarRadarChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRadarRadarChart;
