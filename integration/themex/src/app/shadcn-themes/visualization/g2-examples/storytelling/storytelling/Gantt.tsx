'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/storytelling/storytelling/demo/gantt.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://canisjs.github.io/canis-editor/index.html?exmp=gantt_1
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const events = [
  //   { name: 'event planning', startTime: 1, endTime: 4 },
  //   { name: 'layout logistics', startTime: 3, endTime: 13 },
  //   { name: 'select vendors', startTime: 5, endTime: 8 },
  //   { name: 'hire venue', startTime: 9, endTime: 13 },
  //   { name: 'hire caterer', startTime: 10, endTime: 14 },
  //   { name: 'hire event decorators', startTime: 12, endTime: 17 },
  //   { name: 'rehearsal', startTime: 14, endTime: 16 },
  //   { name: 'event celebration', startTime: 17, endTime: 18 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .interval()
  //   .data(events)
  //   .encode('x', 'name')
  //   .encode('y', ['endTime', 'startTime'])
  //   .encode('color', 'name')
  //   .encode('enterDuration', (d) => d.endTime - d.startTime)
  //   .encode('enterDelay', 'startTime')
  //   .scale('enterDuration', {
  //     zero: true,
  //     range: [0, 3000],
  //   });
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
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "name",
    "y": /* TODO: Convert encode function/expression: ['endTime', 'startTime'] */,
    "color": "name",
    "enterDuration": /* TODO: Convert encode function/expression: (d */,
    "enterDelay": "startTime"
  },
  "scale": {
    "enterDuration": /* TODO: Manually convert scale options: {\n    zero: true,\n    range: [0, 3000],\n  } */
  },
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
};

const StorytellingStorytellingGanttChart: React.FC = () => {
    
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

export default StorytellingStorytellingGanttChart;
