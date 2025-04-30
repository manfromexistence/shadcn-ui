'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/text/demo/poetry.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const words =
  `This Is Just To Say\n// William Carlos Williams, 1934\n// \n// I have eaten\n// the plums\n// that were in\n// the icebox\n// \n// and which\n// you were probably\n// saving\n// for breakfast\n// \n// Forgive me\n// they were delicious\n// so sweet\n// and so cold`
    .split('\n// ')
    .map((d) => ({ text: d }));

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .text()
  .data(words)
  .encode('x', 0.5)
  .encode('y', (_, idx) => idx)
  .encode('text', 'text')
  .encode('color', (_, idx) => idx)
  .encode('opacity', (_, idx) => idx)
  .scale('y', { type: 'point' })
  .style('textAlign', 'center')
  .style('textBaseline', 'middle')
  .style('fontSize', 16)
  .scale('color', { offset: (t) => 1 - t })
  .axis(false)
  .legend(false);

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

const GeneralTextPoetryChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Poetry</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralTextPoetryChart;
