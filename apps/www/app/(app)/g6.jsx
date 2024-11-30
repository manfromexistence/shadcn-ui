/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import G6 from '@antv/g6';

const G6Chart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const data = {
      nodes: [
        { id: 'node1', style: { x: 150, y: 250 } },
        { id: 'node2', style: { x: 350, y: 250 } },
      ],
      edges: [{ source: 'node1', target: 'node2' }],
    };

    const graph = new G6.Graph({
      container: containerRef.current,
      data,
      behaviors: [{ type: 'click-select', multiple: true, trigger: ['shift'] }, 'drag-element'],
      width: 500,
      height: 500,
    });

    graph.render();
  }, []); // Empty dependency array to run only once

  return <>
    <span>G6</span>
    <div ref={containerRef} />
  </>;
};

export default G6Chart;