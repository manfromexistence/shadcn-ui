'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-style.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
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
  //   .axis('y', { labelFormatter: '~s' })
  //   .interaction('tooltip', {
  //     shared: true,
  //     css: {
  //       '.g2-tooltip': {
  //         background: '#eee',
  //         'border-radius': ' 0.25em !important',
  //       },
  //       '.g2-tooltip-title': {
  //         'font-size': '20px',
  //         'font-weight': 'bold',
  //         'padding-bottom': '0.25em',
  //       },
  //       '.g2-tooltip-list-item': {
  //         background: '#ccc',
  //         padding: '0.25em',
  //         margin: '0.25em',
  //         'border-radius': '0.25em',
  //       },
  //       '.g2-tooltip-list-item-name-label': {
  //         'font-weight': 'bold',
  //         'font-size': '16px',
  //       },
  //       'g2-tooltip-list-item-marker': {
  //         'border-radius': '0.25em',
  //         width: '15px',
  //         height: '15px',
  //       },
  //       '.g2-tooltip-list-item-value': {
  //         'font-weight': 'bold',
  //         'font-size': '16px',
  //       },
  //     },
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
    "optionsComment": /* TODO: Manually convert interaction options: {\n    shared: true,\n    css: {\n      '.g2-tooltip': {\n        background: '#eee',\n        'border-radius': ' 0.25em !important',\n      },\n      '.g2-tooltip-title': {\n        'font-size': '20px',\n        'font-weight': 'bold',\n        'padding-bottom': '0.25em',\n      },\n      '.g2-tooltip-list-item': {\n        background: '#ccc',\n        padding: '0.25em',\n        margin: '0.25em',\n        'border-radius': '0.25em',\n      },\n      '.g2-tooltip-list-item-name-label': {\n        'font-weight': 'bold',\n        'font-size': '16px',\n      },\n      'g2-tooltip-list-item-marker': {\n        'border-radius': '0.25em',\n        width: '15px',\n        height: '15px',\n      },\n      '.g2-tooltip-list-item-value': {\n        'font-weight': 'bold',\n        'font-size': '16px',\n      },\n    },\n  } */
  }
};

const ComponentTooltipTooltipStyleChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipStyleChart;
