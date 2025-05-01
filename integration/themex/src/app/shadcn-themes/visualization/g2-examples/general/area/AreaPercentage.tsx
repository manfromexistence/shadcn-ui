// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/area-percentage.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { country: 'Asia', year: '1750', value: 502 },
  //   { country: 'Asia', year: '1800', value: 635 },
  //   { country: 'Asia', year: '1850', value: 809 },
  //   { country: 'Asia', year: '1900', value: 947 },
  //   { country: 'Asia', year: '1950', value: 1402 },
  //   { country: 'Asia', year: '1999', value: 3634 },
  //   { country: 'Asia', year: '2050', value: 5268 },
  //   { country: 'Africa', year: '1750', value: 106 },
  //   { country: 'Africa', year: '1800', value: 107 },
  //   { country: 'Africa', year: '1850', value: 111 },
  //   { country: 'Africa', year: '1900', value: 133 },
  //   { country: 'Africa', year: '1950', value: 221 },
  //   { country: 'Africa', year: '1999', value: 767 },
  //   { country: 'Africa', year: '2050', value: 1766 },
  //   { country: 'Europe', year: '1750', value: 163 },
  //   { country: 'Europe', year: '1800', value: 203 },
  //   { country: 'Europe', year: '1850', value: 276 },
  //   { country: 'Europe', year: '1900', value: 408 },
  //   { country: 'Europe', year: '1950', value: 547 },
  //   { country: 'Europe', year: '1999', value: 729 },
  //   { country: 'Europe', year: '2050', value: 628 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data(data)
  //   .transform([{ type: 'stackY' }, { type: 'normalizeY' }])
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('color', 'country')
  //   .axis('x', { title: false })
  //   .axis('y', { title: false, labelFormatter: '.0%' });
  // 
  // chart
  //   .area()
  //   .tooltip({ channel: 'y0', valueFormatter: '.0%' })
  //   .style('fillOpacity', 0.3);
  // 
  // chart.line().tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "area",
  "style": {},
  "tooltip": [
    null
  ]
};

const GeneralAreaAreaPercentageChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaAreaPercentageChart;
