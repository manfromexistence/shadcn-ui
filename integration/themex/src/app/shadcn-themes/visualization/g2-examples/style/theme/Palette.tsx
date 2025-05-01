// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/style/theme/demo/palette.ts
  ================================================================================
  // import { Chart, register } from '@antv/g2';
  // 
  // register('palette.customPalette', () => [
  //   '#1677FF',
  //   '#39C8AE',
  //   '#C7B1FB',
  //   '#F58773',
  //   '#FEAA4A',
  //   '#ED6DC6',
  //   '#00875B',
  //   '#765CE7',
  //   '#65799B',
  //   '#C4CD2A',
  // ]);
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.theme({
  //   defaultCategory10: 'customPalette',
  //   defaultCategory20: 'customPalette',
  // });
  // 
  // chart
  //   .area()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json',
  //   })
  //   .transform({ type: 'stackY', orderBy: 'value' })
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'unemployed')
  //   .encode('color', 'industry')
  //   .encode('shape', 'smooth')
  //   .scale('x', { utc: true })
  //   .axis('x', { title: 'Date' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .legend('color', { size: 72, autoWrap: true, maxRows: 3, cols: 6 });
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
    "value": "https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json"
  },
  "transform": [
    {
      "type": "stackY",
      "orderBy": "value"
    }
  ],
  "scale": {
    "x": {
      "utc": true
    }
  }
};

const StyleThemePaletteChart: React.FC = () => {
    
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

export default StyleThemePaletteChart;
