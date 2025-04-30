// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/scrollbar/demo/scrollbar.ts
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
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
  //   })
  //   .encode('x', 'date')
  //   .encode('y', 'close')
  //   // 开启 X 轴方向上的滚动条
  //   .scrollbar('x', {})
  //   .scrollbar('y', { value: 0.2 });
  // 
  // chart.on('afterrender', () => {
  //   const { canvas } = chart.getContext();
  //   const { document } = canvas;
  //   document
  //     .querySelector('.g2-scrollbar')
  //     .addEventListener('valuechange', (evt) => {
  //       console.info(evt.detail);
  //     });
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "line",
  "encode": {
    "x": "date",
    "y": "close"
  },
  "interaction": {
    "scrollbar": {}
  }
};

const ComponentScrollbarScrollbarChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">滚</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentScrollbarScrollbarChart;
