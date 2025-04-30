// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-normalized.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   insetRight: 10,
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/indices.json',
  //   })
  //   .transform({ type: 'normalizeY', basis: 'first', groupBy: 'color' })
  //   .encode('x', (d) => new Date(d.Date))
  //   .encode('y', 'Close')
  //   .encode('color', 'Symbol')
  //   .scale('y', { type: 'log' })
  //   .axis('y', { title: '↑ Change in price (%)' })
  //   .label({
  //     text: 'Symbol',
  //     selector: 'last',
  //     fontSize: 10,
  //   })
  //   .tooltip({ channel: 'y', valueFormatter: '.1f' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "insetRight": 10,
  "type": "line",
  "encode": {
    "y": "Close",
    "color": "Symbol"
  },
  "transform": [
    {
      "type": "normalizeY",
      "basis": "first",
      "groupBy": "color"
    }
  ],
  "scale": {
    "y": {
      "type": "log"
    }
  },
  "axis": {
    "y": {
      "title": "↑ Change in price (%)"
    }
  },
  "labels": [
    null
  ]
};

const GeneralLineLineNormalizedChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

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

export default GeneralLineLineNormalizedChart;
