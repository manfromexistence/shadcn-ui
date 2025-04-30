'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/composition/facet/demo/rect-col.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of one of these demos: https://observablehq.com/@observablehq/plot-facets?collection=@observablehq/plot
 */
import { Chart } from '@antv/g2';
import { groupSort, median } from 'd3-array';

fetch('https://assets.antv.antgroup.com/g2/barley.json')
  .then((res) => res.json())
  .then((data) => {
    const chart = new Chart({
      container: 'container',
      height: 800,
      paddingLeft: 140,
      paddingRight: 130,
      paddingBottom: 60,
    });

    const facetRect = chart
      .facetRect()
      .data(data)
      .encode('y', 'site')
      .scale('y', {
        domain: groupSort(
          data,
          (g) => -median(g, (d) => d.yield),
          (d) => d.site,
        ),
      });

    facetRect
      .point()
      .attr('insetLeft', 5)
      .attr('insetRight', 5)
      .scale('color', { type: 'ordinal' })
      .scale('y', {
        domain: groupSort(
          data,
          (g) => -median(g, (d) => d.yield),
          (d) => d.variety,
        ),
      })
      .encode('x', 'yield')
      .encode('y', 'variety')
      .encode('color', 'year')
      .encode('shape', 'hollow')
      .axis('y', { labelAutoRotate: false });

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

const CompositionFacetRectColChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Rect col</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default CompositionFacetRectColChart;
