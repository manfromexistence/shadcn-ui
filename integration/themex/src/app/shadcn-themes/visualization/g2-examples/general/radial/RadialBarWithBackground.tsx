// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/radial/demo/radial-bar-with-background.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { type: '1-3秒', value: 0.16 },
  //   { type: '4-10秒', value: 0.125 },
  //   { type: '11-30秒', value: 0.2 },
  //   { type: '1-3分', value: 0.2 },
  //   { type: '3-10分', value: 0.05 },
  //   { type: '10-30分', value: 0.01 },
  //   { type: '30+分', value: 0.015 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   theme: 'dark',
  // });
  // 
  // chart.data(data).coordinate({ type: 'radial', innerRadius: 0.35 });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'type')
  //   .encode('y', 0.2)
  //   .style('fill', '#202020')
  //   .state({
  //     active: { strokeWidth: 0 },
  //   })
  //   .tooltip(false);
  // 
  // chart
  //   .interval()
  //   .encode('x', 'type')
  //   .encode('y', 'value')
  //   .encode('color', [
  //     (val) => (val.type === '10-30分' || val.type === '30+分' ? 'high' : 'low'),
  //   ])
  //   .scale('color', { range: ['#5B8FF9', '#ff4d4f'] })
  //   .style('radius', 20)
  //   .tooltip([
  //     (item) => ({
  //       name: item.type,
  //       value: item.value,
  //     }),
  //   ])
  //   .axis(false)
  //   .legend(false)
  //   .state({
  //     active: { stroke: '#fff', strokeWidth: 1 },
  //   })
  //   .interaction('elementHighlight');
  // 
  // chart
  //   .image()
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('width', 100)
  //   .style('height', 80)
  //   .encode(
  //     'src',
  //     'https://gw.alipayobjects.com/mdn/rms_ef85c6/afts/img/A*0DYiQKP08cQAAAAAAAAAAAAAARQnAQ',
  //   )
  //   .tooltip(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "theme": "dark",
  "type": "interval",
  "encode": {
    "x": "type",
    "y": "value"
  },
  "scale": {
    "color": {
      "range": [
        "#5B8FF9",
        "#ff4d4f"
      ]
    }
  },
  "style": {
    "fill": "#202020",
    "x": "50%",
    "y": "50%"
  },
  "coordinate": {
    "type": "radial",
    "innerRadius": 0.35
  },
  "interaction": {
    "type": "elementHighlight"
  }
};

const GeneralRadialRadialBarWithBackgroundChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRadialRadialBarWithBackgroundChart;
