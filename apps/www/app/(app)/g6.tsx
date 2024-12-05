import React, { useEffect, useState } from 'react';
import { Graph } from './G6Graph';
import type { GraphOptions } from '@antv/g6';

export default function G6() {
  const [graphData, setGraphData] = useState<GraphOptions | null>(null);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await fetch('https://assets.antv.antgroup.com/g6/cluster.json');
        const data = await response.json();

        setGraphData({
          width: 800,
          height: 600,
          data,
          node: {
            style: {
              labelText: (d) => d.id,
              ports: [],
            },
            palette: {
              type: 'group',
              field: 'cluster',
            },
          },
          layout: {
            type: 'force',
            linkDistance: 50,
            clustering: true,
            nodeClusterBy: 'cluster',
            clusterNodeStrength: 70,
          },
          modes: {
            default: ['zoom-canvas', 'drag-canvas']
          }
        });
      } catch (error) {
        console.error('Graph data fetch error:', error);
      }
    };

    fetchGraphData();
  }, []);

  const handleRender = () => {
    console.log('Graph rendered successfully');
  };

  return (
    <div>
      <h1>G6 Graph</h1>
      {graphData && (
        <Graph 
          options={graphData}
          onRender={handleRender}
        />
      )}
    </div>
  );
}