// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/nav-style.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container', height: 350 });
  // 
  // chart.options({
  //   type: 'interval',
  //   data: [
  //     { genre: 'Sports', sold: 50 },
  //     { genre: 'Strategy', sold: 115 },
  //     { genre: 'Action', sold: 120 },
  //     { genre: 'Shooter', sold: 350 },
  //     { genre: 'Other', sold: 150 },
  //   ],
  //   encode: { x: 'genre', y: 'sold', color: 'genre' },
  //   legend: {
  //     color: {
  //       itemWidth: 160,
  //       navEffect: 'cubic-bezier',
  //       navDuration: 400,
  //       navOrientation: 'vertical',
  //       navDefaultPage: 2,
  //       navLoop: true,
  // 
  //       //配置navPageNum的绘图属性
  //       navPageNumFontSize: 16,
  //       navPageNumFontFamily: 'sans-serif',
  //       navPageNumFontWeight: 500,
  //       navPageNumLineHeight: 20,
  //       navPageNumTextAlign: 'center',
  //       navPageNumTextBaseline: 'middle',
  //       navPageNumFill: '#2989FF',
  //       navPageNumFillOpacity: 0.9,
  //       navPageNumStroke: '#DAF5EC',
  //       navPageNumStrokeOpacity: 0.9,
  //       navPageNumLineWidth: 2,
  //       navPageNumLineDash: [4, 8],
  //       navPageNumOpacity: 1,
  //       navPageNumShadowColor: '#d3d3d3',
  //       navPageNumShadowBlur: 10,
  //       navPageNumShadowOffsetX: 10,
  //       navPageNumShadowOffsetY: 10,
  //       navPageNumCursor: 'pointer',
  // 
  //       // 配置navButton的绘图属性
  //       navButtonFill: '#2989FF',
  //       navButtonFillOpacity: 0.7,
  //       navButtonStroke: '#DAF5EC',
  //       navButtonStrokeOpacity: 0.9,
  //       navButtonLineWidth: 2,
  //       navButtonLineDash: [4, 8],
  //       navButtonOpacity: 0.9,
  //       navButtonShadowColor: '#d3d3d3',
  //       navButtonShadowBlur: 10,
  //       navButtonShadowOffsetX: 10,
  //       navButtonShadowOffsetY: 10,
  //       navButtonCursor: 'pointer',
  // 
  //       navFormatter: (current, total) => `第${current}页/共${total}页`,
  //     },
  //   },
  // });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "height": 350,
  "type": "render"
};

const ComponentLegendNavStyleChart: React.FC = () => {
    
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

export default ComponentLegendNavStyleChart;
