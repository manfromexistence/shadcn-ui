// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/link/demo/link.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@observablehq/plot-link?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .link()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antfincdn/SM13%24lHuYH/metros.json',
  //   })
  //   .encode('x', ['POP_1980', 'POP_2015'])
  //   .encode('y', ['R90_10_1980', 'R90_10_2015'])
  //   .encode('color', (d) => d.R90_10_2015 - d.R90_10_1980)
  //   .scale('x', { type: 'log' })
  //   .style('arrow', true)
  //   .style('arrowSize', 6)
  //   .axis('x', {
  //     labelFormatter: '~s',
  //     labelTransform: 'rotate(90)',
  //   })
  //   .legend(false)
  //   .tooltip({ title: { channel: 'color', valueFormatter: '.1f' } });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "link",
  "encode": {},
  "scale": {
    "x": {
      "type": "log"
    }
  },
  "axis": {},
  "style": {}
};

const GeneralLinkLinkChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLinkLinkChart;
