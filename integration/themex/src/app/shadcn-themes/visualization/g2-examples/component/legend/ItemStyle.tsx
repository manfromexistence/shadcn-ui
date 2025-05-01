// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/item-style.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container', height: 350 });
  // const shapeList = ['bowtie', 'smooth', 'hv', 'rect', 'hollowPoint'];
  // const data = [
  //   { genre: 'Sports', sold: 50 },
  //   { genre: 'Strategy', sold: 115 },
  //   { genre: 'Action', sold: 120 },
  //   { genre: 'Shooter', sold: 350 },
  //   { genre: 'Other', sold: 150 },
  // ];
  // chart.options({
  //   type: 'interval',
  //   data,
  //   encode: { x: 'genre', y: 'sold', color: 'genre' },
  //   legend: {
  //     color: {
  //       size: 100,
  //       itemWidth: 120,
  //       // itemMarker
  //       itemMarker: (d, index) => shapeList[index],
  //       // itemLabel
  //       itemLabelFill: 'red',
  //       // itemValue
  //       itemValueText: (d, index) => data[index]['sold'],
  //       // itemBackground
  //       itemBackgroundFill: (d) => d.color,
  //       itemBackgroundFillOpacity: 0.2,
  //     },
  //   },
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "height": 350,
  "type": "interval"
};

const ComponentLegendItemStyleChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLegendItemStyleChart;
