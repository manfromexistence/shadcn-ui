'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/geo/geo/demo/hexjson-usa.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: http://blog.apps.npr.org/2015/05/11/hex-tile-maps.html
 */
import { Chart, register } from '@antv/g2';
import { getGridForHexJSON, renderHexJSON } from 'd3-hexjson';

function processRow(row) {
  row.cx = row.x;
  row.cy = row.y;
  row.x = [];
  row.y = [];
  row.vertices.forEach((v) => {
    row.x.push(v.x + row.cx);
    row.y.push(v.y + row.cy);
  });
  return row;
}

register('data.hexbin', ({ width = 1, height = 1 }) => {
  return (data) => renderHexJSON(data.value, width, height).map(processRow);
});

register('data.hexgird', ({ width = 1, height = 1 }) => {
  return (data) =>
    renderHexJSON(getGridForHexJSON(data.value), width, height).map(processRow);
});

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .data({
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/us-states.hex.json',
  })
  .axis(false);

chart
  .polygon()
  .data({
    transform: [{ type: 'hexgird' }],
  })
  .encode('x', 'x')
  .encode('y', 'y')
  .style('fill', 'grey')
  .style('opacity', 0.2)
  .style('lineWidth', 2)
  .style('stroke', '#fff')
  .style('pointerEvents', 'none')
  .tooltip(false);

chart
  .polygon()
  .data({
    transform: [{ type: 'hexbin' }],
  })
  .encode('x', 'x')
  .encode('y', 'y')
  .style('fill', '#5B8FF9')
  .style('lineWidth', 5)
  .style('stroke', '#fff')
  .label({
    text: 'key',
    fontSize: 16,
    fontWeight: 500,
    position: 'inside',
    pointerEvents: 'none',
  })
  .tooltip({
    field: 'capital',
  })
  .state('active', { fill: 'orange' })
  .state('inactive', { opacity: 0.5 })
  .interaction('elementHighlight', true);

chart.render();

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

const GeoGeoHexjsonUsaChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Hexjson usa</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeoGeoHexjsonUsaChart;
