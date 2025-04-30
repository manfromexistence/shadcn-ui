'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/legend/demo/category.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   insetTop: 30,
  // });
  // 
  // const logo = [
  //   [
  //     '抖音',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8IXHQLvx9QkAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '快手',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*swueRrrKvbcAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '小米',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*79G3TIt3mBoAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '微信',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_ELBTJLp0dQAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Keep',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JzbKRpFhR14AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Chrome',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*xLnYTaZfdh8AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'QQ',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*AbGNTpA5JLwAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '优酷',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*UL6lS4jw9lUAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '百度地图',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I6nrTITAxcoAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '腾讯视频',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*zwVvT5OFnuYAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '哔哩哔哩',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*6jkAQayTiMMAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Word',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*FbkXT6K6mVEAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Excel',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*CKb-R6ZAFpYAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'PowerPoint',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*K7-FT4RYRqIAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '腾讯会议',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*xbPXR7snu44AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '网易云音乐',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*upKlRJ9QB4cAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Safari',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kjDHRbiW734AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '地图',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tl-2QIB8LKIAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'Docker',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*iJ4dS49yrJ4AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     'VSCode',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*rR6nRInEcz4AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '百度网盘',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*futaTbIAkG4AAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  //   [
  //     '印象笔记',
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Skh1S4BfL9oAAAAAAAAAAAAADmJ7AQ/original',
  //   ],
  // ];
  // 
  // chart
  //   .interval()
  //   .data(logo)
  //   .encode('x', (d) => d[0])
  //   .encode('y', () => Math.random())
  //   .encode('color', (d) => d[1])
  //   .scale('y', { nice: true })
  //   .legend({
  //     color: {
  //       itemMarker: (_, index) => () => {
  //         const { document } = chart.getContext().canvas;
  //         const image = document.createElement('image', {
  //           style: {
  //             width: 20,
  //             height: 20,
  //             transform: `translate(-10, -10)`,
  //             src: logo[index][1],
  //           },
  //         });
  //         return image;
  //       },
  //       itemMarkerSize: 40,
  //       itemLabelText: (_, index) => logo[index][0],
  //       maxRows: 1,
  //     },
  //   })
  //   .tooltip(false);
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
  "insetTop": 30,
  "type": "interval",
  "encode": {},
  "scale": {
    "y": {
      "nice": true
    }
  }
};

const ComponentLegendCategoryChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

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

export default ComponentLegendCategoryChart;
