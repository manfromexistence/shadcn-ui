'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/style/pattern/demo/custom-pattern-with-canvas.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://g2plot.antv.antgroup.com/examples/plugin/pattern/#heatmap-cookie-pattern
 */
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  width: 550,
  height: 500,
  paddingBottom: 80,
});

function applyStyle(ctx, style) {
  return Object.entries(style).forEach(([k, v]) => (ctx[k] = v));
}

function createCanvas(w, h) {
  const canvas = document.createElement('canvas');
  const dpr = window.devicePixelRatio;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  canvas.getContext('2d').scale(dpr, dpr);

  return canvas;
}

function drawRect(ctx, w, h, fill) {
  applyStyle(ctx, { fillStyle: fill });
  ctx.fillRect(0, 0, w, h);
}

function drawLinePattern(ctx, color, width, height, cross = false) {
  applyStyle(ctx, { globalAlpha: 1, strokeStyle: color, strokeOpacity: 0.9 });
  applyStyle(ctx, { lineWidth: 0.5, lineCap: 'square' });

  const d = `
       M 0 ${-height} L ${width * 2} ${height}
       M ${-width} ${-height} L ${width} ${height}
       M ${-width} 0 L ${width} ${height * 2}`;
  ctx.stroke(new Path2D(d));

  if (cross) {
    const d1 = `
         M ${-width} ${height} L ${width} ${-height}
         M ${-width} ${height * 2} L ${width * 2} ${-height}
         M 0 ${height * 2} L ${width * 2} 0`;
    ctx.stroke(new Path2D(d1));
  }
}

// create pattern with raw Canvas API
const createPattern = (color, stroke, cross = false, density = false) => {
  const spacing = density ? 3 : 5;
  const width = Math.abs(spacing / Math.sin(Math.PI / 4));
  const height = spacing / Math.sin(Math.PI / 4);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  drawRect(ctx, width, height, color);
  drawLinePattern(ctx, stroke, width, height, cross);

  return canvas;
};

const pattern1 = createPattern('#edaa53', '#44120c', true, true);
const pattern2 = createPattern('#edaa53', '#44120c', true);
const pattern3 = createPattern('#edaa53', '#fff');

chart
  .cell()
  .data({
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json',
  })
  .encode('x', 'name')
  .encode('y', 'country')
  .encode('color', '#edaa53')
  .style('radius', Infinity)
  .style('inset', 1)
  .style('shadowBlur', 10)
  .style('shadowColor', 'rgba(0,0,0,0.3)')
  .style('fill', ({ value }) => {
    return {
      image:
        60 <= value && value < 90
          ? pattern1
          : value >= 50
          ? pattern2
          : pattern3,
      repetition: 'repeat',
    };
  })
  .animate('enter', { type: 'fadeIn' });

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

const StylePatternCustomPatternWithCanvasChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Custom pattern with canvas</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default StylePatternCustomPatternWithCanvasChart;
