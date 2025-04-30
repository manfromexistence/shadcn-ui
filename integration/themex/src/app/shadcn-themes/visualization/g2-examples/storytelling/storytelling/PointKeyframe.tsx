'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/storytelling/storytelling/demo/point-keyframe.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // fetch(
  //   'https://gw.alipayobjects.com/os/bmw-prod/fbe4a8c1-ce04-4ba3-912a-0b26d6965333.json',
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const chart = new Chart({
  //       container: 'container',
  //     });
  // 
  //     const keyframe = chart
  //       .timingKeyframe()
  //       .attr('direction', 'alternate')
  //       .attr('iterationCount', 4);
  // 
  //     keyframe
  //       .interval()
  //       .data(data)
  //       .transform({ type: 'groupX', y: 'mean' })
  //       .encode('x', 'gender')
  //       .encode('y', 'weight')
  //       .encode('color', 'gender')
  //       .encode('key', 'gender');
  // 
  //     keyframe
  //       .point()
  //       .data(data)
  //       .encode('x', 'height')
  //       .encode('y', 'weight')
  //       .encode('color', 'gender')
  //       .encode('groupKey', 'gender')
  //       .encode('shape', 'point');
  // 
  //     chart.render();
  //   });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "json",
  "encode": {
    "x": "height",
    "y": "weight",
    "color": "gender",
    "key": "gender",
    "groupKey": "gender",
    "shape": "point"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "mean"
    }
  ]
};

const StorytellingStorytellingPointKeyframeChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">S</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default StorytellingStorytellingPointKeyframeChart;
