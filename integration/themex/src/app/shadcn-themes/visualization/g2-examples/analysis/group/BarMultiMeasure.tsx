'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-multi-measure.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_grouped_repeated.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/movies.json',
  // });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .axis('x', { labelTransform: 'rotate(90)' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'Worldwide Gross')
  //   .encode('series', () => 'Worldwide Gross')
  //   .encode('color', () => 'Worldwide Gross')
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'US Gross')
  //   .encode('color', () => 'US Gross')
  //   .encode('series', () => 'US Gross')
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "interval",
  "dataComment": /* TODO: Data assigned from variable/value: {\n  type: 'fetch',\n  value: 'https://assets.antv.antgroup.com/g2/movies.json',\n} - Handle this manually */,
  "encode": {
    "x": "Major Genre",
    "y": "US Gross",
    "series": /* TODO: Convert encode function/expression: ( */,
    "color": /* TODO: Convert encode function/expression: ( */
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    },
    {
      "type": "groupX",
      "y": "sum"
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": "~s"
    },
    "x": {
      "labelTransform": "rotate(90)"
    }
  }
};

const AnalysisGroupBarMultiMeasureChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/movies.json',
  } */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default AnalysisGroupBarMultiMeasureChart;
