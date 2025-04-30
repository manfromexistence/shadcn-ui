// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/area-stacked-basic.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { country: 'Asia', year: '1750', value: 502 },
  //   { country: 'Asia', year: '1800', value: 635 },
  //   { country: 'Asia', year: '1850', value: 809 },
  //   { country: 'Asia', year: '1900', value: 5268 },
  //   { country: 'Asia', year: '1950', value: 4400 },
  //   { country: 'Asia', year: '1999', value: 3634 },
  //   { country: 'Asia', year: '2050', value: 947 },
  //   { country: 'Africa', year: '1750', value: 106 },
  //   { country: 'Africa', year: '1800', value: 107 },
  //   { country: 'Africa', year: '1850', value: 111 },
  //   { country: 'Africa', year: '1900', value: 1766 },
  //   { country: 'Africa', year: '1950', value: 221 },
  //   { country: 'Africa', year: '1999', value: 767 },
  //   { country: 'Africa', year: '2050', value: 133 },
  //   { country: 'Europe', year: '1750', value: 163 },
  //   { country: 'Europe', year: '1800', value: 203 },
  //   { country: 'Europe', year: '1850', value: 276 },
  //   { country: 'Europe', year: '1900', value: 628 },
  //   { country: 'Europe', year: '1950', value: 547 },
  //   { country: 'Europe', year: '1999', value: 729 },
  //   { country: 'Europe', year: '2050', value: 408 },
  //   { country: 'Oceania', year: '1750', value: 200 },
  //   { country: 'Oceania', year: '1800', value: 200 },
  //   { country: 'Oceania', year: '1850', value: 200 },
  //   { country: 'Oceania', year: '1900', value: 460 },
  //   { country: 'Oceania', year: '1950', value: 230 },
  //   { country: 'Oceania', year: '1999', value: 300 },
  //   { country: 'Oceania', year: '2050', value: 300 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .data(data)
  //   .encode('x', 'year')
  //   .encode('y', 'value')
  //   .encode('color', 'country')
  //   .axis('x', { title: false })
  //   .axis('y', { title: false });
  // 
  // chart.area().style('fillOpacity', 0.3);
  // 
  // chart.line().style('strokeWidth', 2).tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "area",
  "encode": {
    "x": "year",
    "y": "value",
    "color": "country"
  },
  "axis": {
    "x": {
      "title": false
    },
    "y": {
      "title": false
    }
  },
  "style": {}
};

const GeneralAreaAreaStackedBasicChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaAreaStackedBasicChart;
