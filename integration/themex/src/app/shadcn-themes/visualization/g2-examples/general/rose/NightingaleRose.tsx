// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/rose/demo/nightingale-rose.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // const data = [
  //   { year: '2001', population: 41.8 },
  //   { year: '2002', population: 38 },
  //   { year: '2003', population: 33.7 },
  //   { year: '2004', population: 30.7 },
  //   { year: '2005', population: 25.8 },
  //   { year: '2006', population: 31.7 },
  //   { year: '2007', population: 33 },
  //   { year: '2008', population: 46 },
  //   { year: '2009', population: 38.3 },
  //   { year: '2010', population: 28 },
  //   { year: '2011', population: 42.5 },
  //   { year: '2012', population: 30.3 },
  // ];
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   height: 720,
  //   width: 720,
  // });
  // chart.coordinate({ type: 'polar' });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'year')
  //   .encode('y', 'population')
  //   .scale('x', { padding: 0 })
  //   .style({
  //     lineWidth: 1,
  //     stroke: '#fff',
  //   })
  //   .axis(false)
  //   .label({
  //     text: 'year',
  //     fontSize: 16,
  //     fontWeight: 800,
  //     position: 'inside',
  //   })
  //   .state('active', {
  //     fill: '#288AFF',
  //     stroke: 'black',
  //     lineWidth: 1,
  //     zIndex: 101,
  //   })
  //   .state('inactive', { opacity: 0.5, zIndex: 100 });
  // 
  // chart.interaction('elementHighlight', true);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 720,
  "height": 720,
  "type": "interval",
  "scale": {
    "x": {
      "padding": 0
    }
  },
  "axis": false,
  "style": {},
  "labels": [
    null
  ],
  "coordinate": {
    "type": "polar"
  },
  "interaction": {
    "elementHighlight": true
  }
};

const GeneralRoseNightingaleRoseChart: React.FC = () => {
    
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

export default GeneralRoseNightingaleRoseChart;
