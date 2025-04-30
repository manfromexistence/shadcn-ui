// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/graphic/demo/text.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 350,
  // });
  // 
  // chart.options({
  //   type: 'liquid',
  //   autoFit: true,
  //   data: 0.581,
  //   style: {
  //     waveLength: 50,
  //     contentText: 'center text',
  //     outlineBorder: 4,
  //     outlineDistance: 8,
  //     // 绘图属性
  //     contentFontSize: 30,
  //     contentFontFamily: 'sans-serif',
  //     contentFontWeight: 500,
  //     contentLineHeight: 20,
  //     contentTextAlign: 'center',
  //     contentTextBaseline: 'middle',
  //     contentFill: '#fff',
  //     contentFillOpacity: 0.9,
  //     contentStroke: 'yellow',
  //     contentStrokeOpacity: 0.9,
  //     contentLineWidth: 2,
  //     contentLineDash: [4, 8],
  //     contentOpacity: 1,
  //     contentShadowColor: '#d3d3d3',
  //     contentShadowBlur: 10,
  //     contentShadowOffsetX: 10,
  //     contentShadowOffsetY: 10,
  //     contentCursor: 'pointer',
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

const StyleGraphicTextChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default StyleGraphicTextChart;
