'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/theme/theme/demo/default-color.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_grouped_repeated.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   paddingBottom: 150,
  // });
  // 
  // chart.theme({
  //   defaultColor: '#ED6DC6',
  // });
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/movies.json',
  //   })
  //   .transform({ type: 'bin', size: 'count', thresholdsX: 10, thresholdsY: 10 })
  //   .encode('x', 'IMDB Rating')
  //   .encode('y', 'Rotten Tomatoes Rating')
  //   .encode('shape', 'point')
  //   .axis('x', { title: false })
  //   .axis('y', { title: false });
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
  "paddingBottom": 150,
  "type": "point",
  "encode": {
    "x": "IMDB Rating",
    "y": "Rotten Tomatoes Rating",
    "shape": "point"
  },
  "transform": [
    {
      "type": "bin",
      "size": "count",
      "thresholdsX": 10,
      "thresholdsY": 10
    }
  ],
  "axis": {
    "x": {
      "title": false
    },
    "y": {
      "title": false
    }
  }
};

const ThemeThemeDefaultColorChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">default color</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ThemeThemeDefaultColorChart;
