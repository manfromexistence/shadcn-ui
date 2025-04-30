'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/pattern/demo/custom-pattern-with-g-api.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://g2plot.antv.antgroup.com/examples/plugin/pattern/#heatmap-cookie-pattern
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 550,
  //   height: 500,
  //   paddingBottom: 80,
  // });
  // 
  // // create pattern with G API
  // const createPattern = (
  //   document,
  //   color,
  //   stroke,
  //   cross = false,
  //   density = false,
  // ) => {
  //   const spacing = density ? 3 : 5;
  //   const width = Math.abs(spacing / Math.sin(Math.PI / 4));
  //   const height = spacing / Math.sin(Math.PI / 4);
  // 
  //   const background = document.createElement('rect', {
  //     style: {
  //       width,
  //       height,
  //       fill: color,
  //     },
  //   });
  // 
  //   const line = document.createElement('path', {
  //     style: {
  //       d: `
  //          M 0 ${-height} L ${width * 2} ${height}
  //          M ${-width} ${-height} L ${width} ${height}
  //          M ${-width} 0 L ${width} ${height * 2}`,
  //       stroke,
  //       lineWidth: 1,
  //       strokeOpacity: 0.9,
  //     },
  //   });
  //   background.appendChild(line);
  // 
  //   if (cross) {
  //     const crossLine = document.createElement('path', {
  //       style: {
  //         d: `
  //            M ${-width} ${height} L ${width} ${-height}
  //            M ${-width} ${height * 2} L ${width * 2} ${-height}
  //            M 0 ${height * 2} L ${width * 2} 0`,
  //         stroke,
  //         lineWidth: 1,
  //         strokeOpacity: 0.9,
  //       },
  //     });
  //     background.appendChild(crossLine);
  //   }
  // 
  //   return background;
  // };
  // // create patterns before chart gets rendered
  // let pattern1;
  // let pattern2;
  // let pattern3;
  // chart.on('beforerender', () => {
  //   const { document } = chart.getContext().canvas;
  //   pattern1 = createPattern(document, '#edaa53', '#44120c', true, true);
  //   pattern2 = createPattern(document, '#edaa53', '#44120c', true);
  //   pattern3 = createPattern(document, '#edaa53', '#fff');
  // });
  // 
  // chart
  //   .cell()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json',
  //   })
  //   .encode('x', 'name')
  //   .encode('y', 'country')
  //   .encode('color', '#edaa53')
  //   .style('radius', Infinity)
  //   .style('inset', 1)
  //   .style('shadowBlur', 10)
  //   .style('shadowColor', 'rgba(0,0,0,0.3)')
  //   .style('fill', ({ value }) => {
  //     return {
  //       image:
  //         60 <= value && value < 90
  //           ? pattern1
  //           : value >= 50
  //           ? pattern2
  //           : pattern3,
  //       repetition: 'repeat',
  //     };
  //   })
  //   .animate('enter', { type: 'fadeIn' });
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
  "width": 550,
  "height": 500,
  "paddingBottom": 80,
  "type": "getContext",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "name",
    "y": "country",
    "color": "#edaa53"
  },
  "style": {
    "radius": /* TODO: Convert style value/expression: Infinity */,
    "inset": /* TODO: Convert style value/expression: 1 */,
    "shadowBlur": /* TODO: Convert style value/expression: 10 */,
    "shadowColor": /* TODO: Convert style value/expression: 'rgba(0,0,0,0.3 */,
    "fill": /* TODO: Convert style value/expression: ({ value } */
  }
};

const StylePatternCustomPatternWithGApiChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default StylePatternCustomPatternWithGApiChart;
