'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/geo/geo/demo/choropleth-usa.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_choropleth.html
 */
import { Chart, register } from '@antv/g2';
import { feature } from 'topojson';

register('data.feature', ({ name }) => {
  return (data) => feature(data, data.objects[name]).features;
});

fetch('https://assets.antv.antgroup.com/g2/unemployment2.json')
  .then((res) => res.json())
  .then((data) => {
    const chart = new Chart({
      container: 'container',
      autoFit: true,
    });

    chart
      .geoPath()
      .coordinate({ type: 'albersUsa' })
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/us-10m.json',
        transform: [
          { type: 'feature', name: 'counties' },
          {
            type: 'join',
            join: data,
            on: ['id', 'id'],
            select: ['rate'],
          },
        ],
      })
      .scale('color', {
        palette: 'ylGnBu',
        unknown: '#fff',
      })
      .encode('color', 'rate')
      .legend({ color: { layout: { justifyContent: 'center' } } });

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

const GeoGeoChoroplethUsaChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Choropleth usa</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeoGeoChoroplethUsaChart;
