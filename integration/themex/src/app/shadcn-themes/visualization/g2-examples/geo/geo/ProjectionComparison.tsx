// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/projection-comparison.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/projection-comparison
  //  */
  // import { Chart, register } from '@antv/g2';
  // import { feature } from 'topojson';
  // import { geoPolyconic, geoRectangularPolyconic } from 'd3-geo-projection';
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
  // chart
  //   .spaceLayer()
  //   .call(worldMap, geoPolyconic, '#f00')
  //   .call(worldMap, geoRectangularPolyconic, '#00f');
  // 
  // chart.render();
  // 
  // function worldMap(node, projection, color, opacity = 0.7) {
  //   const geoView = node.geoView().coordinate({
  //     type: projection,
  //     size: 'fitWidth',
  //   });
  // 
  //   geoView
  //     .geoPath()
  //     .data({
  //       type: 'fetch',
  //       value: 'https://assets.antv.antgroup.com/g2/countries-50m.json',
  //       transform: [{ type: 'feature', name: 'land' }],
  //     })
  //     .style('fill', color)
  //     .style('opacity', opacity);
  // 
  //   geoView
  //     .geoPath()
  //     .data({ type: 'graticule10' })
  //     .style('stroke', color)
  //     .style('strokeOpacity', 0.3)
  //     .style('fill', 'none');
  // 
  //   geoView
  //     .geoPath()
  //     .data({ type: 'sphere' })
  //     .style('stroke', color)
  //     .style('fill', 'none');
  // }
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "spaceLayer",
  "style": {
    "fill": "none"
  }
};

const GeoGeoProjectionComparisonChart: React.FC = () => {
    
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

export default GeoGeoProjectionComparisonChart;
