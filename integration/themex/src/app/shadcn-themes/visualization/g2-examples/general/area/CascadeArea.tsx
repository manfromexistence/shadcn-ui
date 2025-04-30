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
const spec: G2Spec = {
  "type": "area",
  "encode": {
    "y": "revenue",
    "series": "format",
    "color": "group",
    "shape": "smooth"
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
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "style": {
    "stroke": "white"
  },
  "interaction": {
    "type": "tooltip"
  }
};

const GeneralAreaCascadeAreaChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">A</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralAreaCascadeAreaChart;
