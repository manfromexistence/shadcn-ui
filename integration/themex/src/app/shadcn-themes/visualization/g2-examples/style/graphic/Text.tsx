'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "height": 350,
  "type": "render",
  "dataComment": /* TODO: Define chart data (inline or fetched) */
};

const StyleGraphicTextChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default StyleGraphicTextChart;
