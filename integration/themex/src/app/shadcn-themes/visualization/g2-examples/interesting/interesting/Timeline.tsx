'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/interesting/interesting/demo/timeline.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  paddingLeft: 60,
  paddingRight: 60,
  width: 1000,
  height: 300,
});

const data = [
  {
    year: 1788,
    composition: 'Symphony No. 41 "Jupiter"',
    composer: 'Wolfgang Amadeus Mozart',
    link: 'https://en.wikipedia.org/wiki/Symphony_No._41_(Mozart)',
  },
  {
    year: 1894,
    composition: 'Prelude to the Afternoon of a Faun',
    composer: 'Claude Debussy',
    link: 'https://en.wikipedia.org/wiki/Pr%C3%A9lude_%C3%A0_l%27apr%C3%A8s-midi_d%27un_faune',
  },
  {
    year: 1805,
    composition: 'Symphony No. 3 "Eroica"',
    composer: 'Ludwig van Beethoven',
    link: 'https://en.wikipedia.org/wiki/Symphony_No._3_(Beethoven)',
  },
  {
    year: 1913,
    composition: 'Rite of Spring',
    composer: 'Igor Stravinsky',
    link: 'https://en.wikipedia.org/wiki/The_Rite_of_Spring',
  },
  {
    year: 1741,
    composition: 'Goldberg Variations',
    composer: 'Johann Sebastian Bach',
    link: 'https://en.wikipedia.org/wiki/Goldberg_Variations',
  },
  {
    year: 1881,
    composition: 'Piano Concerto No. 2',
    composer: 'Johannes Brahms',
    link: 'https://en.wikipedia.org/wiki/Piano_Concerto_No._2_(Brahms)',
  },
  {
    year: 1826,
    composition: 'A Midsummer Night\'s Dream "Overture"',
    composer: 'Felix Mendelssohn',
    link: 'https://en.wikipedia.org/wiki/A_Midsummer_Night%27s_Dream_(Mendelssohn)',
  },
];

chart.data(data);

chart
  .line()
  .encode('x', 'year')
  .encode('y', 1)
  .style('lineWidth', 1)
  .style('stroke', '#000')
  .attr('zIndex', 1)
  .label({
    text: 'year',
    dy: (d) => (d.year % 2 === 1 ? 8 : -4),
    textAlign: 'center',
    textBaseline: (d) => (d.year % 2 === 1 ? 'top' : 'bottom'),
  })
  .label({
    text: (d) =>
      d.composition + ` (${d.composer.slice(d.composer.lastIndexOf(' '))})`,
    dy: (d) => (d.year % 2 === 0 ? 28 : -28),
    textAlign: 'center',
    textBaseline: (d) => (d.year % 2 === 0 ? 'top' : 'bottom'),
    wordWrap: true,
    wordWrapWidth: 120,
    connector: true,
  })
  .axis(false);

chart
  .point()
  .encode('x', 'year')
  .encode('y', 1)
  .attr('zIndex', 1)
  .style('lineWidth', 1.5)
  .style('stroke', '#000')
  .style('fill', '#fff');

chart.interaction('tooltip', false);

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

const InterestingInterestingTimelineChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Timeline</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default InterestingInterestingTimelineChart;
