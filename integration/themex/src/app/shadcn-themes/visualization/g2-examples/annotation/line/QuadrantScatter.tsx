'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/line/demo/quadrant-scatter.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json',
  //   transform: [
  //     { type: 'filter', callback: (d) => d['change in male rate'] !== 'NA' },
  //   ],
  // });
  // 
  // chart.lineX().data([0]);
  // chart.lineY().data([0]);
  // 
  // chart
  //   .range()
  //   .data([
  //     { x: [-25, 0], y: [-30, 0], region: '1' },
  //     { x: [-25, 0], y: [0, 20], region: '2' },
  //     { x: [0, 5], y: [-30, 0], region: '2' },
  //     { x: [0, 5], y: [0, 20], region: '1' },
  //   ])
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  //   .style('fillOpacity', 0.2)
  //   .animate('enter', { type: 'fadeIn' });
  // 
  // chart
  //   .point()
  //   .encode('x', 'change in female rate')
  //   .encode('y', 'change in male rate')
  //   .encode('size', 'pop')
  //   .encode('color', 'continent')
  //   .encode('shape', 'point')
  //   .scale('color', {
  //     range: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
  //   })
  //   .scale('size', { range: [4, 30] })
  //   .style('stroke', '#bbb')
  //   .style('fillOpacity', 0.8)
  //   .axis('x', { title: 'Female' })
  //   .axis('y', { title: 'Male' })
  //   .legend('size', false)
  //   .slider('x', { labelFormatter: (d) => d.toFixed(1) })
  //   .slider('y', { labelFormatter: (d) => d.toFixed(1) })
  //   .tooltip([
  //     { channel: 'x', valueFormatter: '.1f' },
  //     { channel: 'y', valueFormatter: '.1f' },
  //   ]);
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
  "type": "lineX",
  "data": [
    0
  ],
  "encode": {
    "x": "change in female rate",
    "y": "change in male rate",
    "size": "pop",
    "color": "continent",
    "shape": "point"
  },
  "scale": {
    "size": {
      "range": [
        4,
        30
      ]
    }
  },
  "axis": {
    "x": {
      "title": "Female"
    },
    "y": {
      "title": "Male"
    }
  },
  "legend": {
    "size": false
  },
  "style": {
    "stroke": "#bbb"
  }
};

const AnnotationLineQuadrantScatterChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

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

export default AnnotationLineQuadrantScatterChart;
