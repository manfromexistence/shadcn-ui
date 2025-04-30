'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/dual/demo/multi-line.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   {
  //     Month: 'Jan',
  //     Evaporation: 2,
  //     Precipitation: 2.6,
  //     Temperature: 2,
  //   },
  //   {
  //     Month: 'Feb',
  //     Evaporation: 4.9,
  //     Precipitation: 5.9,
  //     Temperature: 2.2,
  //   },
  //   {
  //     Month: 'Mar',
  //     Evaporation: 7,
  //     Precipitation: 9,
  //     Temperature: 3.3,
  //   },
  //   {
  //     Month: 'Apr',
  //     Evaporation: 23.2,
  //     Precipitation: 26.4,
  //     Temperature: 4.5,
  //   },
  //   {
  //     Month: 'May',
  //     Evaporation: 25.6,
  //     Precipitation: 28.7,
  //     Temperature: 6.3,
  //   },
  //   {
  //     Month: 'Jun',
  //     Evaporation: 76.7,
  //     Precipitation: 70.7,
  //     Temperature: 10.2,
  //   },
  //   {
  //     Month: 'Jul',
  //     Evaporation: 135.6,
  //     Precipitation: 175.6,
  //     Temperature: 20.3,
  //   },
  //   {
  //     Month: 'Aug',
  //     Evaporation: 162.2,
  //     Precipitation: 182.2,
  //     Temperature: 23.4,
  //   },
  //   {
  //     Month: 'Sep',
  //     Evaporation: 32.6,
  //     Precipitation: 48.7,
  //     Temperature: 23,
  //   },
  //   {
  //     Month: 'Oct',
  //     Evaporation: 20,
  //     Precipitation: 18.8,
  //     Temperature: 16.5,
  //   },
  //   {
  //     Month: 'Nov',
  //     Evaporation: 6.4,
  //     Precipitation: 6,
  //     Temperature: 12,
  //   },
  //   {
  //     Month: 'Dec',
  //     Evaporation: 3.3,
  //     Precipitation: 2.3,
  //     Temperature: 6.2,
  //   },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data);
  // 
  // chart
  //   .line()
  //   .encode('x', 'Month')
  //   .encode('y', 'Temperature')
  //   .encode('color', '#EE6666')
  //   .encode('shape', 'smooth')
  //   .scale('y', { independent: true, domainMax: 30 })
  //   .axis('y', {
  //     title: 'Temperature (°C)',
  //     grid: null,
  //     titleFill: '#EE6666',
  //   });
  // 
  // chart
  //   .interval()
  //   .encode('x', 'Month')
  //   .encode('y', 'Evaporation')
  //   .encode('color', '#5470C6')
  //   .scale('y', { independent: true, domainMax: 200 })
  //   .style('fillOpacity', 0.8)
  //   .axis('y', {
  //     position: 'right',
  //     title: 'Evaporation (ml)',
  //     titleFill: '#5470C6',
  //   });
  // 
  // chart
  //   .line()
  //   .encode('x', 'Month')
  //   .encode('y', 'Precipitation')
  //   .encode('color', '#91CC75')
  //   .scale('y', { independent: true })
  //   .style('lineWidth', 2)
  //   .style('lineDash', [2, 2])
  //   .axis('y', {
  //     position: 'right',
  //     title: 'Precipitation (ml)',
  //     grid: null,
  //     titleFill: '#91CC75',
  //   });
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
  "type": "line",
  "dataComment": /* TODO: Data assigned from variable/value: data - Handle this manually */,
  "encode": {
    "x": "Month",
    "y": "Precipitation",
    "color": "#91CC75",
    "shape": "smooth"
  },
  "scale": {
    "y": {
      "independent": true
    }
  },
  "axis": {
    "y": {
      "comment": /* TODO: Manually convert axis options: {\n    position: 'right',\n    title: 'Precipitation (ml)',\n    grid: null,\n    titleFill: '#91CC75',\n  } */
    }
  },
  "style": {
    "fillOpacity": /* TODO: Convert style value/expression: 0.8 */,
    "lineWidth": /* TODO: Convert style value/expression: 2 */,
    "lineDash": /* TODO: Convert style value/expression: [2, 2] */
  }
};

const GeneralDualMultiLineChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* data */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">D</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralDualMultiLineChart;
