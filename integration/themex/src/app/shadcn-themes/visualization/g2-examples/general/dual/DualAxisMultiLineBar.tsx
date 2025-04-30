'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/dual/demo/dual-axis-multi-line-bar.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const data = [
  //   { time: '10:10', call: 4, waiting: 2, people: 2, mock: 3 },
  //   { time: '10:15', call: 2, waiting: 6, people: 3, mock: 4 },
  //   { time: '10:20', call: 13, waiting: 2, people: 5, mock: 1 },
  //   { time: '10:25', call: 9, waiting: 9, people: 1, mock: 2 },
  //   { time: '10:30', call: 5, waiting: 2, people: 3, mock: 5 },
  //   { time: '10:35', call: 8, waiting: 2, people: 1, mock: 3 },
  //   { time: '10:40', call: 13, waiting: 1, people: 2, mock: 2 },
  // ];
  // 
  // chart.data(data);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'waiting')
  //   .encode('color', () => 'waiting')
  //   .encode('series', () => 'waiting')
  //   .axis('y', { title: null })
  //   .scale('y', { nice: true });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'time')
  //   .encode('y', 'people')
  //   .encode('color', () => 'people')
  //   .encode('series', () => 'people')
  //   .scale('y', { key: '2' })
  //   .axis('y', { position: 'right', grid: null, title: null });
  // 
  // chart
  //   .line()
  //   .encode('x', 'time')
  //   .encode('y', 'call')
  //   .encode('color', () => 'call')
  //   .scale('series', { independent: true });
  // 
  // chart
  //   .line()
  //   .encode('x', 'time')
  //   .encode('y', 'mock')
  //   .encode('color', () => 'mock')
  //   .scale('y', { key: '2' })
  //   .scale('series', { independent: true });
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
  "dataComment": /* TODO: Data assigned from variable/value: data - Handle this manually */,
  "encode": {
    "x": "time",
    "y": "mock",
    "color": /* TODO: Convert encode function/expression: ( */,
    "series": /* TODO: Convert encode function/expression: ( */
  },
  "scale": {
    "y": {
      "key": "2"
    },
    "series": {
      "independent": true
    }
  },
  "axis": {
    "y": {
      "position": "right",
      "grid": null,
      "title": null
    }
  }
};

const GeneralDualDualAxisMultiLineBarChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* data */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">D</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralDualDualAxisMultiLineBarChart;
