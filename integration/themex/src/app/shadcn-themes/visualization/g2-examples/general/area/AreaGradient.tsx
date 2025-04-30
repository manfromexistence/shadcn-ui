// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/area-gradient.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/area_gradient.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/stocks.json',
  //   transform: [
  //     {
  //       type: 'filter',
  //       callback: (d) => d.symbol === 'GOOG',
  //     },
  //   ],
  // });
  // 
  // chart
  //   .area()
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'price')
  //   .style('fill', 'linear-gradient(-90deg, white 0%, darkgreen 100%)');
  // 
  // chart
  //   .line()
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'price')
  //   .style('stroke', 'darkgreen')
  //   .style('lineWidth', 2);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "area",
  "encode": {
    "y": "price"
  },
  "style": {
    "stroke": "darkgreen"
  }
};

const GeneralAreaAreaGradientChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default GeneralAreaAreaGradientChart;
