'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/rose/demo/donut-rose.ts
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
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   width: 720,
  //   height: 720,
  // });
  // 
  // chart.coordinate({ type: 'polar', innerRadius: 0.2 });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'year')
  //   .encode('y', 'population')
  //   .encode('color', 'year')
  //   .scale('x', { padding: 0 })
  // 
  //   .axis(false)
  //   .tooltip({
  //     title: (d) => d.year,
  //     items: [
  //       (d, i, data, column) => ({
  //         name: d.year,
  //         value: d.population,
  //         channel: 'y',
  //       }),
  //     ],
  //   })
  //   .legend({
  //     color: {
  //       position: 'right',
  //       layout: {
  //         justifyContent: 'center',
  //       },
  //     },
  //   })
  //   .state('active', { stroke: 'black', lineWidth: 1, zIndex: 101 })
  //   .state('inactive', { opacity: 0.5, zIndex: 100 })
  //   .style({
  //     lineWidth: 1,
  //     stroke: '#fff',
  //   });
  // 
  // chart.interaction('elementHighlight', true);
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
  "width": 720,
  "height": 720,
  "type": "interval",
  "encode": {
    "x": "year",
    "y": "population",
    "color": "year"
  },
  "scale": {
    "x": {
      "padding": 0
    }
  },
  "coordinate": {
    "type": "polar",
    "innerRadius": 0.2
  },
  "interaction": {
    "type": "elementHighlight"
  }
};

const GeneralRoseDonutRoseChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRoseDonutRoseChart;
