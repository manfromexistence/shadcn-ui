// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
  "type": "interval",
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
    "type": "tooltip"
  }
};

const ComponentTooltipTooltipStyleChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipStyleChart;
