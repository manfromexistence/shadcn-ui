// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/venn/demo/venn.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: http://benfred.github.io/venn.js/examples/intersection_tooltip.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .path()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/lastfm.json',
  //     transform: [
  //       {
  //         type: 'venn',
  //         padding: 8,
  //         sets: 'sets',
  //         size: 'size',
  //         as: ['key', 'path'],
  //       },
  //     ],
  //   })
  //   .encode('d', 'path')
  //   .encode('color', 'key')
  //   .label({
  //     position: 'inside',
  //     text: (d) => d.label || '',
  //     transform: [{ type: 'contrastReverse' }],
  //   })
  //   .style('opacity', (d) => (d.sets.length > 1 ? 0.001 : 0.5))
  //   .state('inactive', { opacity: 0.2 })
  //   .state('active', { opacity: 0.8 })
  //   .interaction('elementHighlight', true)
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "path",
  "encode": {
    "d": "path",
    "color": "key"
  },
  "style": {},
  "labels": [
    null
  ],
  "interaction": {
    "type": "elementHighlight"
  }
};

const GeneralVennVennChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">V</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralVennVennChart;
