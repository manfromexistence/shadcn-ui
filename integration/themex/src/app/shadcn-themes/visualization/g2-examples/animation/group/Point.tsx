'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/group/demo/point.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://canisjs.github.io/canis-editor/index.html?exmp=polio_1
  //  */
  // import { Chart } from '@antv/g2';
  // import { interpolateHcl } from 'd3-interpolate';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.style('plotFill', '#000');
  // 
  // chart
  //   .point()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/polio.json',
  //   })
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('color', 'Polio Cases')
  //   .encode('shape', 'point')
  //   .transform({
  //     type: 'stackEnter',
  //     groupBy: ['x', 'y'],
  //     orderBy: 'color',
  //     duration: 2000,
  //   })
  //   .legend('color', false)
  //   .scale('y', { range: [0, 1] })
  //   .scale('color', {
  //     type: 'sqrt',
  //     range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
  //     interpolate: interpolateHcl,
  //   })
  //   .attr('padding', 0)
  //   .axis(false);
  // 
  // chart
  //   .text()
  //   .style('text', 'Polio incidence rates')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('textAlign', 'center')
  //   .style('fontSize', 24)
  //   .style('fill', '#666')
  //   .animate('enter', { delay: 2000 });
  // 
  // chart
  //   .text()
  //   .style('text', 'United States, 1950s')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('textAlign', 'center')
  //   .style('fontSize', 18)
  //   .style('fill', '#666')
  //   .style('dy', '30')
  //   .animate('enter', { delay: 2400 });
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
  "type": "point",
  "encode": {
    "x": "x",
    "y": "y",
    "color": "Polio Cases",
    "shape": "point"
  },
  "transform": [
    null
  ],
  "scale": {
    "y": {
      "range": [
        0,
        1
      ]
    }
  },
  "legend": {
    "color": false
  },
  "style": {
    "plotFill": "#000",
    "text": "United States, 1950s",
    "x": "50%",
    "y": "50%",
    "textAlign": "center",
    "fill": "#666",
    "dy": "30"
  }
};

const AnimationGroupPointChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationGroupPointChart;
