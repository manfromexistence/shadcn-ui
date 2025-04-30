'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/storytelling/storytelling/demo/stocks-keyframe.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

fetch('https://assets.antv.antgroup.com/g2/stocks2.json')
  .then((res) => res.json())
  .then((data) => {
    const keyframes = [
      facetLine,
      facetArea,
      stackArea,
      layerArea,
      streamgraph,
      normalizeArea,
      normalizeBar,
      groupBar,
      stackBar,
      bar,
      pie,
      rose,
    ];

    const chart = new Chart({ container: 'container' });

    chart.options({
      type: 'timingKeyframe',
      width: 800,
      children: keyframes.map((plot) => {
        const { children, ...options } = plot(data);
        return {
          theme: 'dark',
          paddingLeft: 40,
          paddingBottom: 50,
          paddingRight: 50,
          ...options,
          ...(children && {
            children: children.map((d) => ({ ...d, theme: 'dark' })),
          }),
        };
      }),
    });

    chart.render();
  });

function facetLine(data) {
  return {
    type: 'facetRect',
    data,
    encode: { y: 'symbol' },
    axis: { y: { title: false } },
    children: [
      {
        type: 'line',
        key: 'line',
        encode: {
          x: (d) => new Date(d.date),
          y: 'price',
          color: 'symbol',
          key: 'symbol',
        },
        frame: false,
        scale: { y: { zero: true, tickCount: 3 } },
        axis: { x: { title: false }, y: { title: false } },
        animate: { enter: { type: 'pathIn' } },
        style: { shape: 'smooth' },
      },
    ],
  };
}

function facetArea(data) {
  return {
    type: 'facetRect',
    data,
    encode: { y: 'symbol' },
    axis: { y: { title: false } },
    children: [
      {
        type: 'line',
        key: 'line',
        frame: false,
        encode: {
          x: (d) => new Date(d.date),
          y: 'price',
          color: 'symbol',
          key: 'symbol',
        },
        style: { shape: 'smooth' },
        axis: { x: { title: false }, y: { title: false } },
        scale: { y: { zero: true, facet: false, tickCount: 3 } },
      },
      {
        type: 'area',
        key: 'area',
        class: 'area',
        frame: false,
        encode: {
          x: (d) => new Date(d.date),
          y: 'price',
          color: 'symbol',
          key: 'symbol',
        },
        style: { shape: 'smooth' },
        scale: { y: { facet: false, zero: true, tickCount: 3 } },
        axis: { x: { title: false }, y: { title: false } },
        animate: { exit: { type: 'fadeOut' } },
      },
    ],
  };
}

function stackArea(data) {
  return {
    type: 'area',
    data,
    key: 'area',
    class: 'area',
    transform: [{ type: 'stackY', reverse: true }],
    axis: { y: { title: false } },
    encode: {
      x: (d) => new Date(d.date),
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    style: { shape: 'smooth' },
  };
}

function layerArea(data) {
  return {
    type: 'area',
    key: 'area',
    class: 'area',
    data,
    axis: { y: { title: false } },
    encode: {
      x: (d) => new Date(d.date),
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    style: { fillOpacity: 0.5, shape: 'smooth' },
  };
}

function streamgraph(data) {
  return {
    type: 'area',
    key: 'area',
    class: 'area',
    data,
    axis: { y: { title: false } },
    transform: [{ type: 'stackY', reverse: true }, { type: 'symmetryY' }],
    encode: {
      x: (d) => new Date(d.date),
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    style: { fillOpacity: 1, shape: 'smooth' },
  };
}

function normalizeArea(data) {
  return {
    type: 'area',
    key: 'area',
    class: 'area',
    data,
    axis: { y: { title: false } },
    transform: [{ type: 'stackY', reverse: true }, { type: 'normalizeY' }],
    encode: {
      x: (d) => new Date(d.date),
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    style: { fillOpacity: 1, shape: 'smooth' },
  };
}

function normalizeBar(data) {
  return {
    type: 'interval',
    data,
    encode: {
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    transform: [
      { type: 'groupColor', y: 'sum' },
      { type: 'stackY', reverse: true },
      { type: 'normalizeY' },
    ],
    scale: { x: { padding: 0 } },
    axis: { y: { title: false }, x: { title: false } },
  };
}

function groupBar(data) {
  return {
    type: 'interval',
    data,
    transform: [{ type: 'dodgeX' }],
    encode: {
      x: 'date',
      y: 'price',
      color: 'symbol',
      groupKey: 'symbol',
      key: (_, i) => i,
    },
    scale: { y: { nice: true } },
    axis: { x: false, y: { title: false } },
  };
}

function stackBar(data) {
  return {
    type: 'interval',
    data,
    transform: [{ type: 'stackY' }],
    encode: {
      x: 'date',
      y: 'price',
      color: 'symbol',
      groupKey: 'symbol',
      key: (_, i) => i,
    },
    axis: { x: false, y: { title: false } },
  };
}

function bar(data) {
  return {
    type: 'interval',
    data,
    transform: [{ type: 'groupX', y: 'sum' }],
    encode: {
      x: 'symbol',
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    axis: {
      y: { labelFormatter: '~s', title: false },
      x: { title: false },
    },
  };
}

function pie(data) {
  return {
    type: 'interval',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    data,
    transform: [{ type: 'groupX', y: 'sum' }, { type: 'stackY' }],
    coordinate: { type: 'theta' },
    encode: {
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    legend: { color: { layout: { justifyContent: 'center' } } },
    style: { radius: 10 },
  };
}

function rose(data) {
  return {
    type: 'interval',
    data,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    transform: [{ type: 'groupX', y: 'sum' }],
    coordinate: { type: 'polar' },
    encode: {
      x: 'symbol',
      y: 'price',
      color: 'symbol',
      key: 'symbol',
    },
    scale: { x: { padding: 0 } },
    style: { radius: 10 },
    legend: { color: { layout: { justifyContent: 'center' } } },
    axis: { y: false },
  };
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

const StorytellingStorytellingStocksKeyframeChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Stocks keyframe</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default StorytellingStorytellingStocksKeyframeChart;
