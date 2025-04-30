'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-dodged.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/grouped-bar-chart
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.title({
  //   title: 'Population by age and state',
  //   subtitle: 'It shows the population of U.S. by age and state.',
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
  //     format: 'csv',
  //   })
  //   .transform({ type: 'sortX', by: 'y', reverse: true, slice: 6 })
  //   .transform({ type: 'dodgeX' })
  //   .encode('x', 'state')
  //   .encode('y', 'population')
  //   .encode('color', 'age')
  //   .scale('y', { nice: true })
  //   .axis('y', { labelFormatter: '~s' });
  // 
  // chart
  //   .interaction('tooltip', { shared: true })
  //   .interaction('elementHighlightByColor', { background: true });
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
    "x": "state",
    "y": "population",
    "color": "age"
  },
  "transform": [
    {
      "type": "sortX",
      "by": "y",
      "reverse": true,
      "slice": 6
    },
    {
      "type": "dodgeX"
    }
  ],
  "scale": {
    "y": {
      "nice": true
    }
  },
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "interaction": {
    "type": "tooltip",
    "optionsComment": /* TODO: Manually convert interaction options: { shared: true } */
  }
};

const GeneralIntervalBarDodgedChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarDodgedChart;
