'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// Potential external libraries detected:
// // Chart animation detected - G2 animation API will be used
// TODO: Ensure these libraries are installed (e.g., npm install d3 @types/d3) and imported correctly.

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/storytelling/storytelling/demo/interval-keyframe.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const sex = [
  //   { city: 'A', sex: '男', value: 52 },
  //   { city: 'A', sex: '女', value: 48 },
  //   { city: 'B', sex: '男', value: 130 },
  //   { city: 'B', sex: '女', value: 70 },
  // ];
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const keyframe = chart.timingKeyframe();
  // 
  // keyframe
  //   .interval()
  //   .data(sex)
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .encode('x', 'city')
  //   .encode('y', 'value')
  //   .encode('key', 'city');
  // 
  // keyframe
  //   .interval()
  //   .data(sex)
  //   .transform({ type: 'dodgeX' })
  //   .encode('x', 'city')
  //   .encode('y', 'value')
  //   .encode('color', 'sex')
  //   .encode('groupKey', 'city');
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
  "type": "timingKeyframe",
  "encode": {
    "x": "city",
    "y": "value",
    "key": "city",
    "color": "sex",
    "groupKey": "city"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    },
    {
      "type": "dodgeX"
    }
  ]
};

const StorytellingStorytellingIntervalKeyframeChart: React.FC = () => {
    
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

export default StorytellingStorytellingIntervalKeyframeChart;
