// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/candlestick/demo/k-and-column.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // document.getElementById('container').innerHTML = `
  //   <div id="kChart" ></div>
  //   <div id="columnChart"></div>
  // `;
  // 
  // const KChart = new Chart({
  //   container: 'kChart',
  //   autoFit: true,
  //   height: 360,
  //   paddingLeft: 60,
  // });
  // 
  // KChart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/antvdemo/assets/data/candle-sticks.json',
  // })
  //   .encode('x', 'time')
  //   .encode('color', (d) => {
  //     const trend = Math.sign(d.start - d.end);
  //     return trend > 0 ? '下跌' : trend === 0 ? '不变' : '上涨';
  //   })
  //   .scale('x', {
  //     compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  //   })
  //   .scale('color', {
  //     domain: ['下跌', '不变', '上涨'],
  //     range: ['#4daf4a', '#999999', '#e41a1c'],
  //   });
  // 
  // KChart.link()
  //   .encode('y', ['min', 'max'])
  //   .tooltip({
  //     title: 'time',
  //     items: [
  //       { field: 'start', name: '开盘价' },
  //       { field: 'end', name: '收盘价' },
  //       { field: 'min', name: '最低价' },
  //       { field: 'max', name: '最高价' },
  //     ],
  //   });
  // 
  // KChart.interval()
  //   .encode('y', ['start', 'end'])
  //   .style('fillOpacity', 1)
  //   .style('stroke', (d) => {
  //     if (d.start === d.end) return '#999999';
  //   })
  //   .axis('x', {
  //     title: false,
  //   })
  //   .axis('y', {
  //     title: false,
  //   })
  //   .tooltip({
  //     title: 'time',
  //     items: [
  //       { field: 'start', name: '开盘价' },
  //       { field: 'end', name: '收盘价' },
  //       { field: 'min', name: '最低价' },
  //       { field: 'max', name: '最高价' },
  //     ],
  //   });
  // 
  // const ColumnChart = new Chart({
  //   container: 'columnChart',
  //   autoFit: true,
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   height: 180,
  //   paddingLeft: 60,
  // });
  // 
  // ColumnChart.data({
  //   type: 'fetch',
  //   value:
  //     'https://gw.alipayobjects.com/os/antvdemo/assets/data/candle-sticks.json',
  // });
  // 
  // ColumnChart.interval()
  //   .encode('x', 'time')
  //   .encode('y', 'volumn')
  //   .encode('color', (d) => {
  //     const trend = Math.sign(d.start - d.end);
  //     return trend > 0 ? '下跌' : trend === 0 ? '不变' : '上涨';
  //   })
  //   .scale('x', {
  //     compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  //   })
  //   .scale('color', {
  //     domain: ['下跌', '不变', '上涨'],
  //     range: ['#4daf4a', '#999999', '#e41a1c'],
  //   })
  //   .axis('x', false)
  //   .axis('y', {
  //     title: false,
  //   });
  // 
  // KChart.on('legend:filter', (e) => {
  //   const { nativeEvent, data } = e;
  //   if (!nativeEvent) return;
  //   ColumnChart.emit('legend:filter', { data });
  // });
  // 
  // KChart.on('legend:reset', (e) => {
  //   const { nativeEvent, data } = e;
  //   if (!nativeEvent) return;
  //   ColumnChart.emit('legend:reset', { data });
  // });
  // 
  // KChart.render();
  // ColumnChart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "height": 360,
  "type": "link",
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/candle-sticks.json"
  },
  "scale": {},
  "style": {},
  "tooltip": [
    null,
    null
  ]
};

const GeneralCandlestickKAndColumnChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">C</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralCandlestickKAndColumnChart;
