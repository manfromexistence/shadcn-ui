'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/interaction/brush/demo/brush.ts
--------------------------------------------------------------------------------
// import { Chart, MASK_CLASS_NAME } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

const [render, remove] = useTip({
  container: document.getElementById('container'),
  onRemove: () => chart.emit('brush:remove', {}),
});

chart
  .point()
  .data({
    type: 'fetch',
    value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
  })
  .encode('x', 'weight')
  .encode('y', 'height')
  .encode('color', 'gender')
  .encode('shape', 'point')
  .style({
    fillOpacity: 0.2,
    lineWidth: 1,
    transform: 'scale(1, 1)',
    transformOrigin: 'center center',
  })
  .state('inactive', {
    fill: 'black',
    fillOpacity: 0.5,
    transform: 'scale(0.5, 0.5)',
  })
  .interaction('brushHighlight', true);

chart.on('brush:start', onStart);
chart.on('brush:end', onUpdate);
chart.on('brush:remove', onRemove);

chart.render();

function onStart() {
  chart.emit('tooltip:disable');
  remove();
}

async function onUpdate(e) {
  const data = await fetch(
    'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
  ).then((res) => res.json());

  const { canvas } = chart.getContext();
  const [mask] = canvas.document.getElementsByClassName(MASK_CLASS_NAME);
  const bounds = mask.getBounds();
  const x = bounds.max[0];
  const y = bounds.center[1];
  const [X, Y] = e.data.selection;

  const filtered = data.filter(({ weight, height }) => {
    return weight >= X[0] && weight <= X[1] && height >= Y[0] && height <= Y[1];
  });

  render(filtered, [x, y]);
}

function onRemove(e) {
  const { nativeEvent } = e;
  if (nativeEvent) remove();
  chart.emit('tooltip:enable');
}

function useTip({ container, onRemove = () => {}, offsetX = 20, offsetY = 0 }) {
  let div;

  const render = (data, [x, y]) => {
    if (div) remove();
    div = document.createElement('div');
    div.innerHTML = `
    Select a node:
    <ul>${data.map((d) => `<li>x:${d.weight},y:${d.height}</li>`).join('')}</ul>
    `;
    div.style.position = 'absolute';
    div.style.background = '#eee';
    div.style.padding = '0.5em';
    div.style.left = x + offsetX + 'px';
    div.style.top = y + offsetY + 'px';
    div.onclick = () => {
      remove();
      onRemove();
    };
    container.append(div);
  };

  const remove = () => {
    if (div) div.remove();
    div = null;
  };

  return [render, remove];
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

const InteractionBrushBrushChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Brush</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default InteractionBrushBrushChart;
