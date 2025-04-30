// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/annotation/range/demo/line-range.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_falkensee.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 360,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/year-population.json',
  // });
  // 
  // chart
  //   .rangeX()
  //   .data([
  //     { year: [new Date('1933'), new Date('1945')], event: 'Nazi Rule' },
  //     { year: [new Date('1948'), new Date('1989')], event: 'GDR (East Germany)' },
  //   ])
  //   .encode('x', 'year')
  //   .encode('color', 'event')
  //   .scale('color', { independent: true, range: ['#FAAD14', '#30BF78'] })
  //   .style('fillOpacity', 0.75)
  //   .tooltip(false);
  // 
  // chart
  //   .line()
  //   .encode('x', (d) => new Date(d.year))
  //   .encode('y', 'population')
  //   .encode('color', '#333');
  // 
  // chart
  //   .point()
  //   .encode('x', (d) => new Date(d.year))
  //   .encode('y', 'population')
  //   .encode('color', '#333')
  //   .style('lineWidth', 1.5)
  //   .tooltip(false);
  // 
  // chart.interaction('legendFilter', false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 360,
  "type": "rangeX",
  "encode": {
    "color": "#333",
    "y": "population"
  },
  "scale": {
    "color": {
      "independent": true,
      "range": [
        "#FAAD14",
        "#30BF78"
      ]
    }
  },
  "style": {}
};

const AnnotationRangeLineRangeChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnnotationRangeLineRangeChart;
