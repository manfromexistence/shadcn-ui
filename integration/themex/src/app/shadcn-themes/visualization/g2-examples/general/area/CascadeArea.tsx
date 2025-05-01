// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/area/demo/cascade-area.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json',
  // });
  // 
  // chart
  //   .area()
  //   .transform({ type: 'stackY', orderBy: 'maxIndex', reverse: true })
  //   .encode('x', (d) => new Date(d.year))
  //   .encode('y', 'revenue')
  //   .encode('series', 'format')
  //   .encode('color', 'group')
  //   .encode('shape', 'smooth')
  //   .axis('y', { labelFormatter: '~s' })
  //   .tooltip({ channel: 'y', valueFormatter: '.2f' });
  // 
  // chart
  //   .line()
  //   .transform({ type: 'stackY', orderBy: 'maxIndex', reverse: true, y: 'y1' })
  //   .encode('x', (d) => new Date(d.year))
  //   .encode('y', 'revenue')
  //   .encode('series', 'format')
  //   .encode('shape', 'smooth')
  //   .encode('color', 'group') // For legendFilter.
  //   .style('stroke', 'white')
  //   .tooltip(false);
  // 
  // chart.interaction('tooltip', { filter: (d) => parseInt(d.value) > 0 });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "area",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json"
  },
  "transform": [
    {
      "type": "stackY",
      "orderBy": "maxIndex",
      "reverse": true
    },
    {
      "type": "stackY",
      "orderBy": "maxIndex",
      "reverse": true,
      "y": "y1"
    }
  ],
  "style": {
    "stroke": "white"
  },
  "tooltip": [
    null
  ],
  "interaction": {}
};

const GeneralAreaCascadeAreaChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaCascadeAreaChart;
