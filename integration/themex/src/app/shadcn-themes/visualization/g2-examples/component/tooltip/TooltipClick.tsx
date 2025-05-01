// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-click.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // function css(...styles) {
  //   return styles
  //     .map((obj) =>
  //       Object.entries(obj)
  //         .map(([k, v]) => k + ':' + v)
  //         .join(';'),
  //     )
  //     .join(';');
  // }
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  //   })
  //   .encode('x', 'letter')
  //   .encode('y', 'frequency')
  //   .axis('y', { labelFormatter: '.0%' })
  //   .interaction('tooltip', {
  //     disableNative: true, // Disable pointerover and pointerout events.
  //     bounding: {
  //       x: -Infinity,
  //       y: -Infinity,
  //       width: Infinity,
  //       height: Infinity,
  //     },
  //     css: {
  //       '.g2-tooltip': {
  //         background: 'transparent',
  //         'box-shadow': 'none',
  //         transform: 'translate(-50%, -100%)',
  //       },
  //     },
  //     offset: [0, -10],
  //     mount: 'body',
  //     render: (event, { title, items }) => {
  //       const plot = chart
  //         .getContext()
  //         .canvas.document.getElementsByClassName('plot')[0];
  //       const plotBounds = plot.getRenderBounds();
  //       const target = event.target;
  //       const bounds = target.getRenderBounds();
  //       const height = bounds.min[1] - plotBounds.min[1];
  //       return `<div>
  //         <div style="${css({
  //           position: 'relative',
  //           background: '#fff',
  //           'box-shadow': '0 6px 12px 0 rgba(0, 0, 0, 0.12)',
  //           'z-index': 999,
  //           padding: '12px',
  //           'min-width': '120px',
  //         })}">
  //           <h2
  //             style="${css({
  //               'margin-bottom': '9px',
  //               'font-size': '18px',
  //               'line-height': '30px',
  //               'font-weight': '500px',
  //             })}"
  //           >
  //             Letter: ${title}
  //           </h2>
  //           ${items
  //             .map(
  //               (item) =>
  //                 `<div style="font-size: 16px; color: #666">
  //                   <span style="${css({
  //                     height: '10px',
  //                     width: '10px',
  //                     background: item.color,
  //                     display: 'inline-block',
  //                     'border-radius': '50%',
  //                   })}"></span>
  //                   <span>${item.name}</span>
  //                   <span>${item.value}</span>
  //                 </div>`,
  //             )
  //             .join('')}
  //         </div>
  //         <div style="${css({
  //           width: '1px',
  //           height: height + 'px',
  //           background: '#aaa',
  //           position: 'absolute',
  //           left: '50%',
  //           top: '90%',
  //           'z-index': 500,
  //         })}"></div>
  //       </div>`;
  //     },
  //   });
  // 
  // chart.on('element:click', ({ data }) =>
  //   chart.emit('tooltip:show', {
  //     data,
  //     offsetY: 0,
  //   }),
  // );
  // 
  // chart.on('plot:click', () => chart.emit('tooltip:hide'));
  // 
  // chart.render();
  // 
  ================================================================================
*/


// --- Helper Functions Extracted from Original Example --- 
function css(...styles) {
  return styles
    .map((obj) =>
      Object.entries(obj)
        .map(([k, v]) => k + ':' + v)
        .join(';'),
    )
    .join(';');
}
// --- End Helper Functions --- 


// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv"
  },
  "interaction": {}
};

const ComponentTooltipTooltipClickChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipClickChart;
