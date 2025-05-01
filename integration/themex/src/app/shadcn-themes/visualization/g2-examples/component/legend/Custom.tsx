// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/custom.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // const data = [
  //   { genre: 'Sports', sold: 275 },
  //   { genre: 'Strategy', sold: 115 },
  //   { genre: 'Action', sold: 120 },
  //   { genre: 'Shooter', sold: 350 },
  //   { genre: 'Other', sold: 150 },
  // ];
  // 
  // const colorField = 'genre';
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'genre')
  //   .encode('y', 'sold')
  //   .encode('color', colorField)
  //   .legend(false); // Hide built-in legends.
  // 
  // chart.render().then(renderCustomLegend);
  // 
  // function renderCustomLegend(chart) {
  //   // Get color scale.
  //   const scale = chart.getScaleByChannel('color');
  //   const { domain, range } = scale.getOptions();
  //   const excludedValues = [];
  // 
  //   // Create items from scale domain.
  //   const items = domain.map((text, i) => {
  //     const span = document.createElement('span');
  //     const color = range[i];
  // 
  //     // Items' style.
  //     span.innerText = text;
  //     span.style.display = 'inline-block';
  //     span.style.padding = '0.5em';
  //     span.style.color = color;
  //     span.style.cursor = 'pointer';
  // 
  //     span.onclick = () => {
  //       const index = excludedValues.findIndex((d) => d === text);
  //       if (index === -1) {
  //         excludedValues.push(text);
  //         span.style.color = '#aaa';
  //       } else {
  //         excludedValues.splice(index, 1);
  //         span.style.color = color;
  //       }
  //       onChange(excludedValues);
  //     };
  // 
  //     return span;
  //   });
  // 
  //   // Mount legend items.
  //   const container = document.getElementById('container');
  //   const canvas = container.getElementsByTagName('canvas')[0];
  //   const legend = document.createElement('legend');
  //   container.insertBefore(legend, canvas);
  //   for (const item of items) legend.append(item);
  // 
  //   // Emit legendFilter event.
  //   function onChange(values) {
  //     const selectedValues = domain.filter((d) => !values.includes(d));
  //     const selectedData = data.filter((d) =>
  //       selectedValues.includes(d[colorField]),
  //     );
  //     chart.changeData(selectedData);
  //   }
  // }
  // 
  ================================================================================
*/


// --- Helper Functions Extracted from Original Example --- 
function onChange(values) {
    const selectedValues = domain.filter((d) => !values.includes(d));
    const selectedData = data.filter((d) =>
      selectedValues.includes(d[colorField]),
    );
    chart.changeData(selectedData);
  }
// --- End Helper Functions --- 


// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "legend": false
};

const ComponentLegendCustomChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLegendCustomChart;
