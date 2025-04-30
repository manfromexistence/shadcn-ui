'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-crosshairs.ts
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
  //   .transform({ type: 'normalizeY', basis: 'first', groupBy: 'color' })
  //   .encode('x', (d) => new Date(d.Date))
  //   .encode('y', 'Close')
  //   .encode('color', 'Symbol')
  //   .axis('y', { title: '↑ Change in price (%)' })
  //   .interaction('tooltip', {
  //     crosshairs: true,
  //     crosshairsXStroke: 'red',
  //     crosshairsYStroke: 'blue',
  //   })
  //   .tooltip({
  //     title: (d) => new Date(d.Date).toUTCString(),
  //     items: [
  //       (d, i, data, column) => ({
  //         name: 'Close',
  //         value: column.y.value[i].toFixed(1),
  //       }),
  //     ],
  //   })
  //   .label({
  //     text: 'Symbol',
  //     selector: 'last',
  //     fontSize: 10,
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
  "type": "line",
  "encode": {
    "y": "Close",
    "color": "Symbol"
  },
  "transform": [
    {
      "type": "normalizeY",
      "basis": "first",
      "groupBy": "color"
    }
  ],
  "axis": {
    "y": {
      "title": "↑ Change in price (%)"
    }
  },
  "labels": [
    null
  ],
  "interaction": {
    "type": "tooltip"
  }
};

const ComponentTooltipTooltipCrosshairsChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipCrosshairsChart;
