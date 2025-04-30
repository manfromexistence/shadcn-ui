'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/geo/geo/demo/london-tube-lines.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_layer_line_london.html
 */
import { Chart } from '@antv/g2';
import { feature } from 'topojson';

Promise.all([
  fetch('https://assets.antv.antgroup.com/g2/londonBoroughs.json').then((res) =>
    res.json(),
  ),
  fetch('https://assets.antv.antgroup.com/g2/londonCentroids.json').then(
    (res) => res.json(),
  ),
  fetch('https://assets.antv.antgroup.com/g2/londonTubeLines.json').then(
    (res) => res.json(),
  ),
]).then((values) => {
  const [londonBoroughs, londonCentroids, londonTubeLines] = values;
  const london = feature(
    londonBoroughs,
    londonBoroughs.objects.boroughs,
  ).features;
  const line = feature(londonTubeLines, londonTubeLines.objects.line).features;

  const chart = new Chart({
    container: 'container',
    autoFit: true,
  });

  const geoView = chart.geoView();

  geoView
    .geoPath()
    .data(london)
    .style('fill', 'lightgray')
    .style('stroke', 'white')
    .style('lineWidth', 2);

  geoView
    .text()
    .data(londonCentroids)
    .encode('x', 'cx')
    .encode('y', 'cy')
    .encode('text', (d) => d.name.split(/\W/)[0])
    .style('fontSize', 8)
    .style('opacity', 0.6);

  geoView
    .geoPath()
    .data(line)
    .encode('color', 'id')
    .encode('shape', 'hollow')
    .scale('color', {
      domain: [
        'Bakerloo',
        'Central',
        'Circle',
        'District',
        'DLR',
        'Hammersmith & City',
        'Jubilee',
        'Metropolitan',
        'Northern',
        'Piccadilly',
        'Victoria',
        'Waterloo & City',
      ],
      range: [
        'rgb(137,78,36)',
        'rgb(220,36,30)',
        'rgb(255,206,0)',
        'rgb(1,114,41)',
        'rgb(0,175,173)',
        'rgb(215,153,175)',
        'rgb(106,114,120)',
        'rgb(114,17,84)',
        'rgb(0,0,0)',
        'rgb(0,24,168)',
        'rgb(0,160,226)',
        'rgb(106,187,170)',
      ],
    });

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

const GeoGeoLondonTubeLinesChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">London tube lines</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeoGeoLondonTubeLinesChart;
