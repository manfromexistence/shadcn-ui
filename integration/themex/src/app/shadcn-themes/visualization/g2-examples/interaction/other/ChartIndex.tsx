// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/other/demo/chart-index.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/indices.json',
  //   })
  //   .encode('x', (d) => new Date(d.Date))
  //   .encode('y', 'Close')
  //   .encode('color', 'Symbol')
  //   .encode('key', 'Symbol')
  //   .encode('title', (d) => d.Date.toLocaleString())
  //   .axis('y', { title: '↑ Change in price (%)', labelAutoRotate: false })
  //   .scale('y', { type: 'log' })
  //   .label({
  //     text: 'Symbol',
  //     selector: 'last',
  //     fontSize: 10,
  //   });
  // 
  // chart
  //   .interaction('chartIndex', {
  //     ruleStroke: '#aaa',
  //     labelDx: 5,
  //     labelTextAlign: 'center',
  //     labelStroke: '#fff',
  //     labelLineWidth: 5,
  //     labelFormatter: (d) => `${d.toLocaleDateString()}`,
  //   })
  //   .interaction('tooltip', false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/indices.json"
  },
  "scale": {
    "y": {
      "type": "log"
    }
  },
  "labels": [
    null
  ],
  "interaction": {
    "tooltip": false
  }
};

const InteractionOtherChartIndexChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">O</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionOtherChartIndexChart;
