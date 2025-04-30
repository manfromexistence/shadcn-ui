// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/bin/demo/binx-color.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .rect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/athletes.json',
  //   })
  //   .encode('x', 'weight')
  //   .encode('color', 'sex')
  //   .transform({ type: 'binX', y: 'count' })
  //   .transform({ type: 'stackY', orderBy: 'series' })
  //   .style('inset', 0.5);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "rect",
  "encode": {
    "x": "weight",
    "color": "sex"
  },
  "transform": [
    {
      "type": "binX",
      "y": "count"
    },
    {
      "type": "stackY",
      "orderBy": "series"
    }
  ],
  "style": {}
};

const AnalysisBinBinxColorChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisBinBinxColorChart;
