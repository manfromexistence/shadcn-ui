'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/other/demo/chart-index.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart
  //   .line()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/indices.json',
  //   })
  //   .encode('x', (d) => new Date(d.Date))
  //   .encode('y', 'Close')
  //   .encode('color', 'Symbol')
  //   .encode('key', 'Symbol')
  //   .encode('title', (d) => d.Date.toLocaleString())
  //   .axis('y', { title: '↑ Change in price (%)', labelAutoRotate: false })
  //   .scale('y', { type: 'log' })
  //   .label({
  //     text: 'Symbol',
  //     selector: 'last',
  //     fontSize: 10,
  //   });
  // 
  // chart
  //   .interaction('chartIndex', {
  //     ruleStroke: '#aaa',
  //     labelDx: 5,
  //     labelTextAlign: 'center',
  //     labelStroke: '#fff',
  //     labelLineWidth: 5,
  //     labelFormatter: (d) => `${d.toLocaleDateString()}`,
  //   })
  //   .interaction('tooltip', false);
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
  "type": "line",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": /* TODO: Convert encode function/expression: (d */,
    "y": "Close",
    "color": "Symbol",
    "key": "Symbol",
    "title": /* TODO: Convert encode function/expression: (d */
  },
  "scale": {
    "y": {
      "type": "log"
    }
  },
  "axis": {
    "y": {
      "title": "↑ Change in price (%)",
      "labelAutoRotate": false
    }
  },
  "labels": [
    {
      "comment": /* TODO: Manually convert label options: {\n    text: 'Symbol',\n    selector: 'last',\n    fontSize: 10,\n  } */
    }
  ],
  "interaction": {
    "type": "chartIndex",
    "optionsComment": /* TODO: Manually convert interaction options: {\n    ruleStroke: '#aaa',\n    labelDx: 5,\n    labelTextAlign: 'center',\n    labelStroke: '#fff',\n    labelLineWidth: 5,\n    labelFormatter: (d) => `${d.toLocaleDateString()}`,\n  } */
  }
};

const InteractionOtherChartIndexChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">O</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionOtherChartIndexChart;
