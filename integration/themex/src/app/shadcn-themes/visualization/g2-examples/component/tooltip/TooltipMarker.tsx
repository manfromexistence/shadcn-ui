// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/tooltip/demo/tooltip-marker.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { item: 'Design', type: 'a', score: 70 },
  //   { item: 'Design', type: 'b', score: 30 },
  //   { item: 'Development', type: 'a', score: 60 },
  //   { item: 'Development', type: 'b', score: 70 },
  //   { item: 'Marketing', type: 'a', score: 50 },
  //   { item: 'Marketing', type: 'b', score: 60 },
  //   { item: 'Users', type: 'a', score: 40 },
  //   { item: 'Users', type: 'b', score: 50 },
  //   { item: 'Test', type: 'a', score: 60 },
  //   { item: 'Test', type: 'b', score: 70 },
  //   { item: 'Language', type: 'a', score: 70 },
  //   { item: 'Language', type: 'b', score: 50 },
  //   { item: 'Technology', type: 'a', score: 50 },
  //   { item: 'Technology', type: 'b', score: 40 },
  //   { item: 'Support', type: 'a', score: 30 },
  //   { item: 'Support', type: 'b', score: 40 },
  //   { item: 'Sales', type: 'a', score: 60 },
  //   { item: 'Sales', type: 'b', score: 40 },
  //   { item: 'UX', type: 'a', score: 50 },
  //   { item: 'UX', type: 'b', score: 60 },
  // ];
  // 
  // const options = {
  //   type: 'view',
  //   coordinate: {
  //     type: 'polar',
  //   },
  //   scale: {
  //     x: { padding: 0.5, align: 0 },
  //     y: { tickCount: 5, domainMax: 80 },
  //   },
  //   autoFit: true,
  //   data,
  //   interaction: {
  //     legendFilter: false,
  //     elementPointMove: true,
  //     tooltip: {
  //       crosshairs: true,
  //       crosshairsStroke: 'red',
  //       crosshairsLineDash: [4, 4],
  //       markerType: 'hollow',
  //     },
  //   },
  //   axis: {
  //     x: {
  //       grid: true,
  //       gridStrokeWidth: 1,
  //       tick: false,
  //       gridLineDash: [0, 0],
  //     },
  //     y: {
  //       zIndex: 1,
  //       title: false,
  //       gridConnect: 'line',
  //       gridStrokeWidth: 1,
  //       gridLineDash: [0, 0],
  //     },
  //   },
  //   children: [
  //     {
  //       type: 'area',
  //       encode: {
  //         x: 'item',
  //         y: 'score',
  //         color: 'type',
  //         key: 'type',
  //       },
  //       style: {
  //         fillOpacity: 0.5,
  //       },
  //     },
  //     {
  //       type: 'line',
  //       encode: {
  //         x: 'item',
  //         y: 'score',
  //         color: 'type',
  //         key: 'type',
  //       },
  //       style: {
  //         lineWidth: 2,
  //       },
  //     },
  //   ],
  // };
  // 
  // const chart = new Chart({
  //   container: 'container',
  // });
  // 
  // chart.options(options);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {};

const ComponentTooltipTooltipMarkerChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">T</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentTooltipTooltipMarkerChart;
