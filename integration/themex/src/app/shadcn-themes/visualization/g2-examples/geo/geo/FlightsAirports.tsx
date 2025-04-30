'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/geo/geo/demo/flights-airports.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_rule.html
 */
import { Chart } from '@antv/g2';
import { feature } from 'topojson';

Promise.all([
  fetch('https://assets.antv.antgroup.com/g2/us-10m.json').then((res) =>
    res.json(),
  ),
  fetch('https://assets.antv.antgroup.com/g2/airports.json').then((res) =>
    res.json(),
  ),
  fetch('https://assets.antv.antgroup.com/g2/flights-airport.json').then(
    (res) => res.json(),
  ),
]).then((values) => {
  const [us, airports, flights] = values;
  const states = feature(us, us.objects.states).features;

  const chart = new Chart({
    container: 'container',
    autoFit: true,
  });

  const geoView = chart.geoView().coordinate({ type: 'albersUsa' });

  geoView
    .geoPath()
    .data(states)
    .style('fill', 'lightgray')
    .style('stroke', 'white');

  geoView
    .point()
    .data(airports)
    .encode('x', 'longitude')
    .encode('y', 'latitude')
    .encode('color', 'gray')
    .encode('shape', 'point')
    .encode('size', 1);

  geoView
    .link()
    .data({
      value: flights,
      transform: [
        {
          type: 'filter',
          callback: (d) => d.origin === 'SEA',
        },
        {
          type: 'join',
          join: airports,
          on: ['origin', 'iata'],
          select: ['latitude', 'longitude'],
          as: ['origin_latitude', 'origin_longitude'],
        },
        {
          type: 'join',
          join: airports,
          on: ['destination', 'iata'],
          select: ['latitude', 'longitude'],
          as: ['dest_latitude', 'dest_longitude'],
        },
      ],
    })
    .encode('x', ['origin_longitude', 'dest_longitude'])
    .encode('y', ['origin_latitude', 'dest_latitude'])
    .style('stroke', 'black');

  chart.render();
});

--------------------------------------------------------------------------------
*/

// TODO: Convert the imperative Dumi code above into a declarative G2 spec object.
// This often involves:
// 1. Replacing chart.interval().data(...).encode(...) with { type: 'interval', data: ..., encode: ... }
// 2. Handling data loading (inline, fetch, or useEffect)
// 3. Replacing global variables (like d3) with imports
// 4. Adapting any complex logic or interactions.
const spec = {
  // type: 'interval', // Example type
  // data: [...], // Example data
  // encode: { x: '...', y: '...' }, // Example encoding
};

const GeoGeoFlightsAirportsChart: React.FC = () => {
  // TODO: If data needs fetching or processing, use useState and useEffect here.
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch('...')
  //     .then(res => res.json())
  //     .then(setData);
  // }, []);
  //
  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  //
  // const finalSpec = { ...spec, data }; // Combine spec with fetched data

  return (
     <div>
        {/* TODO: Maybe use a more dynamic title */}
        <h2 className="text-xl font-semibold mb-2">Flights airports</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeoGeoFlightsAirportsChart;
