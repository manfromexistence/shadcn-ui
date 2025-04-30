'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/graph/hierarchy/demo/circle-packing.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';
import { interpolateHcl } from 'd3-interpolate';

const chart = new Chart({
  container: 'container',
  width: 1000,
  height: 1000,
});

chart
  .pack()
  .data({
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/flare.json',
  })
  .layout({
    padding: 5,
  })
  .encode('value', 'value')
  .encode('color', 'depth')
  .scale('color', {
    domain: [0, 5],
    range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
    interpolate: interpolateHcl,
  })
  .legend(false)
  .style('labelText', (d) =>
    d.r >= 10 && d.height === 0 ? `${d.data.name}` : '',
  );

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

const GraphHierarchyCirclePackingChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Circle packing</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GraphHierarchyCirclePackingChart;
