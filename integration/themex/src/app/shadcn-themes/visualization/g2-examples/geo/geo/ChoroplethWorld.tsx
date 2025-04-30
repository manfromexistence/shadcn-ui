// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/choropleth-world.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/world-choropleth
  //  */
  // import { Chart } from '@antv/g2';
  // import { feature, mesh } from 'topojson';
  // 
  // Promise.all([
  //   fetch('https://assets.antv.antgroup.com/g2/countries-50m.json').then((res) =>
  //     res.json(),
  //   ),
  //   fetch('https://assets.antv.antgroup.com/g2/hale.json').then((res) =>
  //     res.json(),
  //   ),
  // ]).then((values) => {
  //   const [world, hale] = values;
  //   const countries = feature(world, world.objects.countries).features;
  //   const coutriesmesh = mesh(world, world.objects.countries);
  // 
  //   const chart = new Chart({
  //     container: 'container',
  //     autoFit: true,
  //   });
  // 
  //   const geoView = chart.geoView();
  // 
  //   geoView
  //     .geoPath()
  //     .data({
  //       value: countries,
  //       transform: [
  //         {
  //           type: 'join',
  //           join: hale,
  //           on: [(d) => d.properties.name, 'name'],
  //           select: ['hale'],
  //         },
  //       ],
  //     })
  //     .scale('color', {
  //       type: 'sequential',
  //       palette: 'ylGnBu',
  //       unknown: '#ccc',
  //     })
  //     .encode('color', 'hale');
  // 
  //   geoView.geoPath().data([coutriesmesh]).style('stroke', '#fff');
  // 
  //   geoView.geoPath().data({ type: 'sphere' }).style('stroke', '#000');
  // 
  //   chart.render();
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "json",
  "encode": {
    "color": "hale"
  },
  "scale": {},
  "style": {
    "stroke": "#000"
  }
};

const GeoGeoChoroplethWorldChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default GeoGeoChoroplethWorldChart;
