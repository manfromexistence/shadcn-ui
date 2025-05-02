'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/brush/demo/brush.ts
  ================================================================================
  // import { Chart, MASK_CLASS_NAME } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const [render, remove] = useTip({
  //   container: document.getElementById('container'),
  //   onRemove: () => chart.emit('brush:remove', {}),
  // });
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
  //   })
  //   .encode('x', 'weight')
  //   .encode('y', 'height')
  //   .encode('color', 'gender')
  //   .encode('shape', 'point')
  //   .style({
  //     fillOpacity: 0.2,
  //     lineWidth: 1,
  //     transform: 'scale(1, 1)',
  //     transformOrigin: 'center center',
  //   })
  //   .state('inactive', {
  //     fill: 'black',
  //     fillOpacity: 0.5,
  //     transform: 'scale(0.5, 0.5)',
  //   })
  //   .interaction('brushHighlight', true);
  // 
  // chart.on('brush:start', onStart);
  // chart.on('brush:end', onUpdate);
  // chart.on('brush:remove', onRemove);
  // 
  // chart.render();
  // 
  // function onStart() {
  //   chart.emit('tooltip:disable');
  //   remove();
  // }
  // 
  // async function onUpdate(e) {
  //   const data = await fetch(
  //     'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
  //   ).then((res) => res.json());
  // 
  //   const { canvas } = chart.getContext();
  //   const [mask] = canvas.document.getElementsByClassName(MASK_CLASS_NAME);
  //   const bounds = mask.getBounds();
  //   const x = bounds.max[0];
  //   const y = bounds.center[1];
  //   const [X, Y] = e.data.selection;
  // 
  //   const filtered = data.filter(({ weight, height }) => {
  //     return weight >= X[0] && weight <= X[1] && height >= Y[0] && height <= Y[1];
  //   });
  // 
  //   render(filtered, [x, y]);
  // }
  // 
  // function onRemove(e) {
  //   const { nativeEvent } = e;
  //   if (nativeEvent) remove();
  //   chart.emit('tooltip:enable');
  // }
  // 
  // function useTip({ container, onRemove = () => {}, offsetX = 20, offsetY = 0 }) {
  //   let div;
  // 
  //   const render = (data, [x, y]) => {
  //     if (div) remove();
  //     div = document.createElement('div');
  //     div.innerHTML = `
  //     Select a node:
  //     <ul>${data.map((d) => `<li>x:${d.weight},y:${d.height}</li>`).join('')}</ul>
  //     `;
  //     div.style.position = 'absolute';
  //     div.style.background = '#eee';
  //     div.style.padding = '0.5em';
  //     div.style.left = x + offsetX + 'px';
  //     div.style.top = y + offsetY + 'px';
  //     div.onclick = () => {
  //       remove();
  //       onRemove();
  //     };
  //     container.append(div);
  //   };
  // 
  //   const remove = () => {
  //     if (div) div.remove();
  //     div = null;
  //   };
  // 
  //   return [render, remove];
  // }
  // 
  ================================================================================
*/

// --- Helper Functions Extracted from Original Example ---
function onStart() {
  chart.emit('tooltip:disable');
  remove();
}

const remove = () => {
  if (div) div.remove();
  div = null;
};
// --- End Helper Functions ---

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'point',
  data: {
    type: 'fetch',
    value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
  },
  encode: {
    x: 'weight',
    y: 'height',
    color: 'gender',
    shape: 'point',
  },
  style: {
    fillOpacity: 0.2,
    lineWidth: 1,
    transform: 'scale(1, 1)',
    transformOrigin: 'center center',
  },
  interaction: {
    brushHighlight: true,
  },
};

const Brush: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Brush</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background">
        {' '}
        {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {finalSpec && finalSpec.type !== 'invalid' ? (
          <G2Chart config={finalSpec} />
        ) : (
          <div className="p-4 text-center text-red-600">
            Chart specification is invalid or missing.
          </div>
        )}
      </div>
    </div>
  );
};

export default Brush;
