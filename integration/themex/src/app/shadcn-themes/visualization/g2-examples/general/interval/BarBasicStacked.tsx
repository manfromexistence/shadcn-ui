// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-basic-stacked.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
  //   { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  //   { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
  //   { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
  //   { name: 'London', 月份: 'May', 月均降雨量: 47 },
  //   { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
  //   { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
  //   { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  //   { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
  //   { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
  //   { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
  //   { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
  //   { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
  //   { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
  //   { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
  //   { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', '月份')
  //   .encode('y', '月均降雨量')
  //   .encode('color', 'name')
  //   .transform({ type: 'stackY' })
  //   .interaction('elementHighlight', { background: true });
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "interaction": {}
};

const GeneralIntervalBarBasicStackedChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarBasicStackedChart;
