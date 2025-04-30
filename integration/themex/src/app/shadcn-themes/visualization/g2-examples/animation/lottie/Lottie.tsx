'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/animation/lottie/demo/lottie.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import { loadAnimation } from '@antv/g-lottie-player';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .interval()
  //   .data([
  //     { genre: 'Sports', sold: 275 },
  //     { genre: 'Strategy', sold: 115 },
  //     { genre: 'Action', sold: 120 },
  //     { genre: 'Shooter', sold: 350 },
  //     { genre: 'Other', sold: 150 },
  //   ])
  //   .encode('x', 'genre')
  //   .encode('y', 'sold')
  //   .encode('color', 'genre')
  //   .animate('enter', { type: 'fadeIn', duration: 1000 })
  //   .animate('exit', { type: 'fadeOut', duration: 2000 });
  // 
  // chart.render();
  // 
  // (async () => {
  //   const { canvas } = chart.getContext();
  //   await canvas.ready;
  // 
  //   const lottieJSON = await fetch(
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*C9f6TaadHikAAAAAAAAAAAAADmJ7AQ',
  //   ).then((res) => res.json());
  //   const animation = loadAnimation(lottieJSON, { loop: true, autoplay: true });
  //   const wrapper = animation.render(canvas);
  //   wrapper.scale(0.5);
  //   wrapper.translate(160, 100);
  // })();
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
  "encode": {
    "x": "genre",
    "y": "sold",
    "color": "genre"
  }
};

const AnimationLottieLottieChart: React.FC = () => {
    
    // TODO: Define or load data for the chart. Original data was complex or failed to parse.
    // Original data reference: /* PARSE_ERROR */
    const chartData = []; // Placeholder: Provide actual data here
    const finalSpec = { ...spec, data: chartData };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default AnimationLottieLottieChart;
