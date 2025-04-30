'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-render.ts
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
  //       'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //   })
  //   .transform([{ type: 'sortX', by: 'y', reverse: true }])
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency');
  // 
  // chart.interaction('tooltip', {
  //   render: (event, { title, items }) => `
  //   <div
  //     style="
  //       width: 300px;
  //       background: #f2f2f2;
  //       border-radius: 10px;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: center;
  //       padding: 10px;
  //       margin: -12px;
  //     "
  //   >
  //     <h2
  //       style="
  //         margin-bottom: 9px; 
  //         font-size: 18px; 
  //         line-height: 30px; 
  //         font-weight: 500px"
  //     >
  //       Letter: ${title}
  //     </h2>
  //     ${items
  //       .map(
  //         (item) =>
  //           `<div style="font-size: 16px; color: #666">name: ${item.name}
  //           <br/>
  //           value: 
  //           <div style="width:${
  //             item.value * 1000
  //           }px;height:10px;display:inline-block;background:${item.color}"></div>
  //           ${item.value}
  //         </div>`,
  //       )
  //       .join('')}
  //   </div>
  //   `,
  // });
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
    "x": "letter",
    "y": "frequency"
  },
  "interaction": {
    "type": "tooltip",
    "optionsComment": /* TODO: Manually convert interaction options: {\n  render: (event, { title, items } */
  }
};

const ComponentTooltipTooltipRenderChart: React.FC = () => {
    
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

export default ComponentTooltipTooltipRenderChart;
