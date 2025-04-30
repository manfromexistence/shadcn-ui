'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/legend/demo/custom.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
});

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const colorField = 'genre';

chart
  .interval()
  .data(data)
  .encode('x', 'genre')
  .encode('y', 'sold')
  .encode('color', colorField)
  .legend(false); // Hide built-in legends.

chart.render().then(renderCustomLegend);

function renderCustomLegend(chart) {
  // Get color scale.
  const scale = chart.getScaleByChannel('color');
  const { domain, range } = scale.getOptions();
  const excludedValues = [];

  // Create items from scale domain.
  const items = domain.map((text, i) => {
    const span = document.createElement('span');
    const color = range[i];

    // Items' style.
    span.innerText = text;
    span.style.display = 'inline-block';
    span.style.padding = '0.5em';
    span.style.color = color;
    span.style.cursor = 'pointer';

    span.onclick = () => {
      const index = excludedValues.findIndex((d) => d === text);
      if (index === -1) {
        excludedValues.push(text);
        span.style.color = '#aaa';
      } else {
        excludedValues.splice(index, 1);
        span.style.color = color;
      }
      onChange(excludedValues);
    };

    return span;
  });

  // Mount legend items.
  const container = document.getElementById('container');
  const canvas = container.getElementsByTagName('canvas')[0];
  const legend = document.createElement('legend');
  container.insertBefore(legend, canvas);
  for (const item of items) legend.append(item);

  // Emit legendFilter event.
  function onChange(values) {
    const selectedValues = domain.filter((d) => !values.includes(d));
    const selectedData = data.filter((d) =>
      selectedValues.includes(d[colorField]),
    );
    chart.changeData(selectedData);
  }
}

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

const ComponentLegendCustomChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Custom</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentLegendCustomChart;
