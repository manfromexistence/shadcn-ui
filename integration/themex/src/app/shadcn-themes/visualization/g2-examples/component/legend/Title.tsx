// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/title.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({ container: 'container', height: 300 });
  // 
  // chart.options({
  //   type: 'legends',
  //   title: '图例标题',
  //   titleSpacing: 0,
  //   titleInset: 0,
  //   titlePosition: 't',
  //   titleFontSize: 16,
  //   titleFontFamily: 'sans-serif',
  //   titleFontWeight: 500,
  //   titleLineHeight: 20,
  //   titleTextAlign: 'center',
  //   titleTextBaseline: 'middle',
  //   titleFill: '#000',
  //   titleFillOpacity: 0.9,
  //   titleStroke: '#DAF5EC',
  //   titleStrokeOpacity: 0.9,
  //   titleLineWidth: 2,
  //   titleLineDash: [4, 8],
  //   titleOpacity: 1,
  //   titleShadowColor: '#d3d3d3',
  //   titleShadowBlur: 10,
  //   titleShadowOffsetX: 10,
  //   titleShadowOffsetY: 10,
  //   titleCursor: 'pointer',
  //   scale: {
  //     size: {
  //       type: 'linear',
  //       domain: [0, 10],
  //       range: [0, 100],
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
  "height": 300,
  "type": "render"
};

const ComponentLegendTitleChart: React.FC = () => {
    
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

export default ComponentLegendTitleChart;
