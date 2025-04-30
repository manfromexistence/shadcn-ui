'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/interaction/brush/demo/brush-emit.ts
  ================================================================================
  // import { Chart, MASK_CLASS_NAME } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const [render, remove] = useTip({
  //   container: document.getElementById('container'),
  //   onRemove: () => chart.emit('brush:remove', {}),
  // });
  // 
  // const data = [
  //   { date: '2007-04-23', close: 93.24 },
  //   { date: '2007-04-24', close: 95.35 },
  //   { date: '2007-04-25', close: 98.84 },
  //   { date: '2007-04-26', close: 99.92 },
  //   { date: '2007-04-29', close: 99.8 },
  //   { date: '2007-05-01', close: 99.47 },
  //   { date: '2007-05-02', close: 100.39 },
  //   { date: '2007-05-03', close: 100.4 },
  //   { date: '2007-05-04', close: 100.81 },
  //   { date: '2007-05-07', close: 103.92 },
  // ];
  // 
  // chart
  //   .line()
  //   .data(data)
  //   .encode('x', (d) => new Date(d.date))
  //   .encode('y', 'close')
  //   .scale('y', { nice: true })
  //   .interaction('brushXHighlight', true);
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
  // function onUpdate(e) {
  //   const { canvas } = chart.getContext();
  //   const [mask] = canvas.document.getElementsByClassName(MASK_CLASS_NAME);
  //   const bounds = mask.getBounds();
  //   const x = bounds.max[0];
  //   const y = bounds.center[1];
  //   const [X] = e.data.selection;
  //   const filtered = data.filter(
  //     ({ date }) => new Date(date) >= X[0] && new Date(date) <= X[1],
  //   );
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
  //     <ul>${data.map((d) => `<li>${d.date}</li>`).join('')}</ul>
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

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "line",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": /* TODO: Convert encode function/expression: (d */,
    "y": "close"
  },
  "scale": {
    "y": {
      "nice": true
    }
  },
  "interaction": {
    "type": "brushXHighlight"
  }
};

const InteractionBrushBrushEmitChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default InteractionBrushBrushEmitChart;
