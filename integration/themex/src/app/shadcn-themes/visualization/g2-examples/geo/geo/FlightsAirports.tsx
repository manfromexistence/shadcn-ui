// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/flights-airports.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_rule.html
  //  */
  // import { Chart } from '@antv/g2';
  // import { feature } from 'topojson';
  // 
  // Promise.all([
  //   fetch('https://assets.antv.antgroup.com/g2/us-10m.json').then((res) =>
  //     res.json(),
  //   ),
  //   fetch('https://assets.antv.antgroup.com/g2/airports.json').then((res) =>
  //     res.json(),
  //   ),
  //   fetch('https://assets.antv.antgroup.com/g2/flights-airport.json').then(
  //     (res) => res.json(),
  //   ),
  // ]).then((values) => {
  //   const [us, airports, flights] = values;
  //   const states = feature(us, us.objects.states).features;
  // 
  //   const chart = new Chart({
  //     container: 'container',
  //     autoFit: true,
  //   });
  // 
  //   const geoView = chart.geoView().coordinate({ type: 'albersUsa' });
  // 
  //   geoView
  //     .geoPath()
  //     .data(states)
  //     .style('fill', 'lightgray')
  //     .style('stroke', 'white');
  // 
  //   geoView
  //     .point()
  //     .data(airports)
  //     .encode('x', 'longitude')
  //     .encode('y', 'latitude')
  //     .encode('color', 'gray')
  //     .encode('shape', 'point')
  //     .encode('size', 1);
  // 
  //   geoView
  //     .link()
  //     .data({
  //       value: flights,
  //       transform: [
  //         {
  //           type: 'filter',
  //           callback: (d) => d.origin === 'SEA',
  //         },
  //         {
  //           type: 'join',
  //           join: airports,
  //           on: ['origin', 'iata'],
  //           select: ['latitude', 'longitude'],
  //           as: ['origin_latitude', 'origin_longitude'],
  //         },
  //         {
  //           type: 'join',
  //           join: airports,
  //           on: ['destination', 'iata'],
  //           select: ['latitude', 'longitude'],
  //           as: ['dest_latitude', 'dest_longitude'],
  //         },
  //       ],
  //     })
  //     .encode('x', ['origin_longitude', 'dest_longitude'])
  //     .encode('y', ['origin_latitude', 'dest_latitude'])
  //     .style('stroke', 'black');
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
    "color": "gray",
    "shape": "point"
  },
  "style": {
    "fill": "lightgray",
    "stroke": "black"
  },
  "coordinate": {
    "type": "albersUsa"
  }
};

const GeoGeoFlightsAirportsChart: React.FC = () => {
    
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

export default GeoGeoFlightsAirportsChart;
