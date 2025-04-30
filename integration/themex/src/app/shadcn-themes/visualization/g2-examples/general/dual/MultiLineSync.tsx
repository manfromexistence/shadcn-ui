'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/dual/demo/multi-line-sync.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

function syncTicksOfDomainsFromZero(scales) {
  scales.forEach((scale) => scale.update({ nice: true }));
  const normalize = (d) => d / Math.pow(10, Math.ceil(Math.log(d) / Math.LN10));
  const maxes = scales.map((scale) => scale.getOptions().domain[1]);
  const normalized = maxes.map(normalize);
  const normalizedMax = Math.max(...normalized);
  for (let i = 0; i < scales.length; i++) {
    const scale = scales[i];
    const domain = scale.getOptions().domain;
    const t = maxes[i] / normalized[i];
    const newDomainMax = normalizedMax * t;
    scale.update({ domain: [domain[0], newDomainMax] });
  }
}

const data = [
  {
    Month: 'Jan',
    Evaporation: 2,
    Precipitation: 2.6,
    Temperature: 2,
  },
  {
    Month: 'Feb',
    Evaporation: 4.9,
    Precipitation: 5.9,
    Temperature: 2.2,
  },
  {
    Month: 'Mar',
    Evaporation: 7,
    Precipitation: 9,
    Temperature: 3.3,
  },
  {
    Month: 'Apr',
    Evaporation: 23.2,
    Precipitation: 26.4,
    Temperature: 4.5,
  },
  {
    Month: 'May',
    Evaporation: 25.6,
    Precipitation: 28.7,
    Temperature: 6.3,
  },
  {
    Month: 'Jun',
    Evaporation: 76.7,
    Precipitation: 70.7,
    Temperature: 10.2,
  },
  {
    Month: 'Jul',
    Evaporation: 135.6,
    Precipitation: 175.6,
    Temperature: 20.3,
  },
  {
    Month: 'Aug',
    Evaporation: 162.2,
    Precipitation: 182.2,
    Temperature: 23.4,
  },
  {
    Month: 'Sep',
    Evaporation: 32.6,
    Precipitation: 48.7,
    Temperature: 23,
  },
  {
    Month: 'Oct',
    Evaporation: 20,
    Precipitation: 18.8,
    Temperature: 16.5,
  },
  {
    Month: 'Nov',
    Evaporation: 6.4,
    Precipitation: 6,
    Temperature: 12,
  },
  {
    Month: 'Dec',
    Evaporation: 3.3,
    Precipitation: 2.3,
    Temperature: 6.2,
  },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(data);

chart
  .line()
  .encode('x', 'Month')
  .encode('y', 'Temperature')
  .encode('color', '#EE6666')
  .encode('shape', 'smooth')
  .scale('y', {
    independent: true,
    groupTransform: syncTicksOfDomainsFromZero,
  })
  .axis('y', {
    title: 'Temperature (°C)',
    grid: null,
    titleFill: '#EE6666',
  });

chart
  .interval()
  .encode('x', 'Month')
  .encode('y', 'Evaporation')
  .encode('color', '#5470C6')
  .scale('y', { independent: true })
  .style('fillOpacity', 0.8)
  .axis('y', {
    position: 'right',
    title: 'Evaporation (ml)',
    titleFill: '#5470C6',
  });

chart
  .line()
  .encode('x', 'Month')
  .encode('y', 'Precipitation')
  .encode('color', '#91CC75')
  .scale('y', { independent: true })
  .style('lineWidth', 2)
  .style('lineDash', [2, 2])
  .axis('y', {
    position: 'right',
    title: 'Precipitation (ml)',
    grid: null,
    titleFill: '#91CC75',
  });

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

const GeneralDualMultiLineSyncChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Multi line sync</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralDualMultiLineSyncChart;
