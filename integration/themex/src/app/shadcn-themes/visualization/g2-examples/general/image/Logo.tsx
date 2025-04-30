// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/image/demo/logo.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   {
  //     name: 'Internet Explorer',
  //     value: 26,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png',
  //   },
  //   {
  //     name: 'Chrome',
  //     value: 40,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/dWJWRLWfpOEbwCyxmZwu.png',
  //   },
  //   {
  //     name: 'Firefox',
  //     value: 30,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/ZEPeDluKmAoTioCABBTc.png',
  //   },
  //   {
  //     name: 'Safari',
  //     value: 24,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/eZYhlLzqWLAYwOHQAXmc.png',
  //   },
  //   {
  //     name: 'Opera',
  //     value: 15,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/vXiGOWCGZNKuVVpVYQAw.png',
  //   },
  //   {
  //     name: 'Undetectable',
  //     value: 8,
  //     url: 'https://gw.alipayobjects.com/zos/rmsportal/NjApYXminrnhBgOXyuaK.png',
  //   },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart
  //   .link()
  //   .encode('x', ['name', 'name'])
  //   .encode('y', (d) => [0, d.value])
  //   .style('stroke', '#dfdfdf')
  //   .style('lineDash', [2, 2]);
  // 
  // chart
  //   .line()
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('shape', 'smooth')
  //   .scale('x', { type: 'band' })
  //   .scale('y', { domain: [0, 50] })
  //   .style('opacity', 0.5);
  // 
  // chart
  //   .image()
  //   .encode('x', 'name')
  //   .encode('y', 'value')
  //   .encode('src', 'url')
  //   .scale('x', { type: 'band' })
  //   .scale('y', { domain: [0, 50] })
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "link",
  "encode": {
    "x": "name",
    "y": "value",
    "shape": "smooth",
    "src": "url"
  },
  "scale": {
    "x": {
      "type": "band"
    },
    "y": {
      "domain": [
        0,
        50
      ]
    }
  },
  "style": {
    "stroke": "#dfdfdf"
  }
};

const GeneralImageLogoChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralImageLogoChart;
