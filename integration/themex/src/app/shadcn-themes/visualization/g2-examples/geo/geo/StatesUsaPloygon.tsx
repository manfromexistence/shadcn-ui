// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/States-usa-ploygon.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // // import rewind from '@mapbox/geojson-rewind';
  // 
  // const layout = (data) => {
  //   data.features = data.features.filter((item) => {
  //     const geometry = item.geometry;
  //     return (
  //       item != null &&
  //       geometry &&
  //       geometry.type &&
  //       geometry.coordinates &&
  //       geometry.coordinates.length > 0
  //     );
  //   });
  // 
  //   // rewind(data, true);
  // 
  //   return data.features.map((feature) => {
  //     const { id, geometry, properties } = feature;
  //     const ploygonData = {
  //       id,
  //       x: [],
  //       y: [],
  //       ...properties,
  //     };
  // 
  //     geometry?.coordinates.forEach((item) => {
  //       item.forEach((v, i) => {
  //         ploygonData.y.push(v[1]);
  //         ploygonData.x.push(v[0]);
  //       });
  //     });
  // 
  //     return ploygonData;
  //   });
  // };
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   paddingLeft: 0,
  //   paddingRight: 0,
  //   paddingTop: 0,
  //   paddingBottom: 0,
  // });
  // 
  // chart
  //   .polygon()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json',
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: layout,
  //       },
  //     ],
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', (d) => d?.density)
  //   .scale('x', { domain: [-130, -60] })
  //   .scale('y', { domain: [10, 50] })
  //   .axis(false)
  //   .style('stroke', 'red')
  //   .style('fillOpacity', 0.65);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "paddingLeft": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "paddingBottom": 0,
  "type": "polygon",
  "encode": {
    "x": "x",
    "y": "y"
  },
  "scale": {
    "x": {
      "domain": [
        -130,
        -60
      ]
    },
    "y": {
      "domain": [
        10,
        50
      ]
    }
  },
  "style": {
    "stroke": "red"
  }
};

const GeoGeoStatesUsaPloygonChart: React.FC = () => {
    
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

export default GeoGeoStatesUsaPloygonChart;
