// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/radial-line.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { term: 'Zombieland', count: 9 },
  //   { term: 'Wieners', count: 8 },
  //   { term: 'Toy Story', count: 8 },
  //   { term: 'trashkannon', count: 7 },
  //   { term: 'the GROWLERS', count: 6 },
  //   { term: 'mudweiser', count: 6 },
  //   { term: 'ThunderCats', count: 4 },
  //   { term: 'The Taqwacores - Motion Picture', count: 4 },
  //   { term: 'The Shawshank Redemption', count: 2 },
  //   { term: 'The Olivia Experiment', count: 1 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   padding: 50,
  // });
  // 
  // chart
  //   .data(data)
  //   .coordinate({ type: 'radial', innerRadius: 0.2, endAngle: Math.PI });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'term')
  //   .encode('y', 'count')
  //   .encode('size', 5)
  //   .axis({
  //     y: false,
  //     x: {
  //       title: false,
  //     },
  //   });
  // 
  // chart
  //   .point()
  //   .encode('x', 'term')
  //   .encode('y', 'count')
  //   .encode('shape', 'point')
  //   .encode('size', 4)
  //   .tooltip({
  //     title: (item) => item.term,
  //     items: [
  //       (item) => ({
  //         name: 'count',
  //         value: item.count,
  //       }),
  //     ],
  //   });
  // 
  // chart
  //   .text()
  //   .style('text', 'Music')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('textAlign', 'center')
  //   .style('fontSize', 24);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "padding": 50,
  "type": "interval",
  "encode": {
    "x": "term",
    "y": "count",
    "shape": "point"
  },
  "style": {
    "text": "Music",
    "x": "50%",
    "y": "50%",
    "textAlign": "center"
  }
};

const GeneralRadialRadialLineChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

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

export default GeneralRadialRadialLineChart;
