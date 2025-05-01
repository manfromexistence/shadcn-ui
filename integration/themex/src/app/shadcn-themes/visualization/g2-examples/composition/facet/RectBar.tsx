// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/rect-bar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 800,
  //   paddingLeft: 40,
  //   paddingBottom: 40,
  // });
  // 
  // const days = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
  // const mockData = () => {
  //   const names = ['Eat', 'Play', 'Sleep'];
  //   const week = (date) => {
  //     const currentDate = date.getDate();
  //     const newDate = new Date(date);
  //     const firstDay = new Date(newDate.setDate(1)).getDay();
  //     return Math.ceil((currentDate + firstDay) / 7);
  //   };
  //   const day = (date) => date.getDay();
  //   return Array.from({ length: 30 }, (_, i) => {
  //     const date = new Date(2022, 5, i + 1);
  //     return names.map((name) => ({
  //       activity: name,
  //       value: Math.random(),
  //       week: `${week(date)}`,
  //       day: days[day(date)],
  //     }));
  //   }).flat(Infinity);
  // };
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data(mockData())
  //   .encode('x', 'day')
  //   .encode('y', 'week')
  //   .scale('x', { domain: days })
  //   .legend('color', { position: 'right' })
  //   .attr('paddingRight', 100);
  // 
  // facetRect
  //   .interval()
  //   .transform({ type: 'stackY' })
  //   .axis('x', { labelAutoRotate: false })
  //   .encode('x', 'activity')
  //   .encode('y', 'value')
  //   .encode('color', 'activity');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 800,
  "type": "interval",
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "scale": {}
};

const CompositionFacetRectBarChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetRectBarChart;
