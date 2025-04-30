// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/other/demo/fisheye.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json',
  //   })
  //   .encode('x', 'GDP')
  //   .encode('y', 'LifeExpectancy')
  //   .encode('size', 'Population')
  //   .encode('color', 'continent')
  //   .encode('shape', 'point')
  //   .legend('size', false)
  //   .scale('size', { type: 'log', range: [4, 20] })
  //   .style('fillOpacity', 0.3)
  //   .style('lineWidth', 1);
  // 
  // chart.interaction('fisheye');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "point",
  "encode": {
    "x": "GDP",
    "y": "LifeExpectancy",
    "size": "Population",
    "color": "continent",
    "shape": "point"
  },
  "scale": {
    "size": {
      "type": "log",
      "range": [
        4,
        20
      ]
    }
  },
  "legend": {
    "size": false
  },
  "style": {},
  "interaction": {
    "type": "fisheye"
  }
};

const InteractionOtherFisheyeChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">O</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionOtherFisheyeChart;
