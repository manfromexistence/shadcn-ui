// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/world-map.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/world-map
  //  */
  // import { Chart, register } from '@antv/g2';
  // import { feature } from 'topojson';
  // 
  // register('data.feature', ({ name }) => {
  //   return (data) => feature(data, data.objects[name]).features;
  // });
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const geoView = chart.geoView().coordinate({ type: 'orthographic' });
  // 
  // geoView
  //   .geoPath()
  //   .data({ type: 'graticule10' })
  //   .style('stroke', '#ccc')
  //   .style('fill', 'none');
  // 
  // geoView
  //   .geoPath()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/countries-50m.json',
  //     transform: [{ type: 'feature', name: 'land' }],
  //   })
  //   .style('fill', 'black');
  // 
  // geoView
  //   .geoPath()
  //   .data({ type: 'sphere' })
  //   .style('stroke', 'black')
  //   .style('fill', 'none');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "geoView",
  "style": {
    "stroke": "black",
    "fill": "none"
  },
  "coordinate": {
    "type": "orthographic"
  }
};

const GeoGeoWorldMapChart: React.FC = () => {
    
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

export default GeoGeoWorldMapChart;
