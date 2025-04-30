'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/text/demo/poetry.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const words =
  //   `This Is Just To Say\nWilliam Carlos Williams, 1934\n\nI have eaten\nthe plums\nthat were in\nthe icebox\n\nand which\nyou were probably\nsaving\nfor breakfast\n\nForgive me\nthey were delicious\nso sweet\nand so cold`
  //     .split('\n')
  //     .map((d) => ({ text: d }));
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .text()
  //   .data(words)
  //   .encode('x', 0.5)
  //   .encode('y', (_, idx) => idx)
  //   .encode('text', 'text')
  //   .encode('color', (_, idx) => idx)
  //   .encode('opacity', (_, idx) => idx)
  //   .scale('y', { type: 'point' })
  //   .style('textAlign', 'center')
  //   .style('textBaseline', 'middle')
  //   .style('fontSize', 16)
  //   .scale('color', { offset: (t) => 1 - t })
  //   .axis(false)
  //   .legend(false);
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
  "type": "text",
  "encode": {
    "text": "text"
  },
  "scale": {
    "y": {
      "type": "point"
    }
  },
  "style": {
    "textAlign": "center",
    "textBaseline": "middle"
  }
};

const GeneralTextPoetryChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralTextPoetryChart;
