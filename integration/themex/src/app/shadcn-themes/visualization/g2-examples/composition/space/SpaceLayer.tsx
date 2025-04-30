// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/space/demo/space-layer.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const scaleColor = (node) =>
  //   node.scale('color', {
  //     palette: 'cool',
  //     offset: (t) => t * 0.8 + 0.1,
  //   });
  // 
  // const layer = chart.spaceLayer().data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //   format: 'csv',
  // });
  // 
  // layer
  //   .interval()
  //   .transform({ type: 'sortX', reverse: true, by: 'y' })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .encode('color', 'letter')
  //   .call(scaleColor);
  // 
  // layer
  //   .interval()
  //   .attr('x', 300)
  //   .attr('y', 50)
  //   .attr('width', 300)
  //   .attr('height', 300)
  //   .coordinate({ type: 'theta' })
  //   .transform({ type: 'stackY' })
  //   .legend(false)
  //   .scale('color', {
  //     palette: 'cool',
  //     offset: (t) => t * 0.8 + 0.1,
  //   })
  //   .encode('y', 'frequency')
  //   .encode('color', 'letter')
  //   .call(scaleColor);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "spaceLayer",
  "encode": {
    "x": "letter",
    "y": "frequency",
    "color": "letter"
  },
  "transform": [
    {
      "type": "sortX",
      "reverse": true,
      "by": "y"
    },
    {
      "type": "stackY"
    }
  ],
  "scale": {},
  "coordinate": {
    "type": "theta"
  }
};

const CompositionSpaceSpaceLayerChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionSpaceSpaceLayerChart;
