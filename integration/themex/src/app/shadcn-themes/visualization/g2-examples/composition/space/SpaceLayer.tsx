'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "spaceLayer",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
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
  "scale": {
    "color": {
      "comment": /* TODO: Manually convert scale options: {\n    palette: 'cool',\n    offset: (t) => t * 0.8 + 0.1,\n  } */
    }
  },
  "coordinate": {
    "type": "theta"
  }
};

const CompositionSpaceSpaceLayerChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionSpaceSpaceLayerChart;
