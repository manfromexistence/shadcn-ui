'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/graph/hierarchy/demo/tree.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   height: 1500,
  //   width: 800,
  //   insetRight: 80,
  //   insetLeft: 15,
  // });
  // 
  // chart.coordinate({ transform: [{ type: 'transpose' }] });
  // 
  // chart
  //   .tree()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/flare.json',
  //   })
  //   .layout({
  //     sortBy: (a, b) => a.value - b.value,
  //   })
  //   .style('nodeFill', (d) => (d.height === 0 ? '#999' : '#000'))
  //   .style('linkStroke', '#999')
  //   .style('labelText', (d) => d.data.name || '-')
  //   .style('labelFontSize', (d) => (d.height === 0 ? 7 : 12))
  //   .style('labelTextAlign', (d) => (d.height === 0 ? 'start' : 'end'))
  //   .style('labelPosition', (d) => (d.height !== 0 ? 'left' : 'right'))
  //   .style('labelDx', (d) => (d.height === 0 ? 5 : -5))
  //   .style('labelBackground', true)
  //   .style('labelBackgroundFill', '#fff');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  width: 800,
  height: 1500,
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/flare.json',
  },
  style: {
    nodeFill: '(d',
    linkStroke: '#999',
    labelText: '(d',
    labelFontSize: '(d',
    labelTextAlign: '(d',
    labelPosition: '(d',
    labelDx: '(d',
    labelBackground: 'true',
    labelBackgroundFill: '#fff',
  },
  coordinate: {
    transform: [
      {
        type: 'transpose',
      },
    ],
  },
};

const Hierarchy: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Hierarchy</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background">
        {' '}
        {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {finalSpec && finalSpec.type !== 'invalid' ? (
          <G2Chart config={finalSpec} />
        ) : (
          <div className="p-4 text-center text-red-600">
            Chart specification is invalid or missing.
          </div>
        )}
      </div>
    </div>
  );
};

export default Hierarchy;
