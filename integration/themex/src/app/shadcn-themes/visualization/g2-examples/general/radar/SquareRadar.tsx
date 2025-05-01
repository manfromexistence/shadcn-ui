// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radar/demo/square-radar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({
  //   type: 'polar',
  //   startAngle: (-Math.PI * 3) / 4,
  //   endAngle: (Math.PI * 5) / 4,
  // });
  // 
  // chart
  //   .line()
  //   .data([
  //     { item: 'Design', type: 'a', score: 70 },
  //     { item: 'Development', type: 'a', score: 60 },
  //     { item: 'Marketing', type: 'a', score: 50 },
  //     { item: 'Users', type: 'a', score: 40 },
  //   ])
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .scale('x', {
  //     padding: 0.5,
  //     align: 0,
  //   })
  //   .scale('y', {
  //     domainMin: 0,
  //     domainMax: 80,
  //   })
  //   .style({
  //     zIndex: 0,
  //     lineWidth: 5,
  //     lineJoin: 'round',
  //   })
  //   .axis('x', {
  //     grid: true,
  //     zIndex: 1,
  //     title: false,
  //     gridLineWidth: 1,
  //     gridLineDash: null,
  //   })
  //   .axis('y', {
  //     titleOpacity: '0',
  //     gridConnect: 'line',
  //     gridLineWidth: 1,
  //     gridLineDash: [0, 0],
  //     gridAreaFill: 'rgba(0, 0, 0, 0.04)',
  //   });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
  "data": [
    {
      "item": "Design",
      "type": "a",
      "score": 70
    },
    {
      "item": "Development",
      "type": "a",
      "score": 60
    },
    {
      "item": "Marketing",
      "type": "a",
      "score": 50
    },
    {
      "item": "Users",
      "type": "a",
      "score": 40
    }
  ],
  "scale": {},
  "style": {}
};

const GeneralRadarSquareRadarChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRadarSquareRadarChart;
