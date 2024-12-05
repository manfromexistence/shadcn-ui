import { useEffect } from 'react';
import { Graph, treeToGraphData } from '@antv/g6';

const getNodeSide = (graph: Graph, datum: any): string => {
  const parentData = graph.getParent(datum.id, 'tree');
  if (!parentData) return 'center';
  return datum.style.x > parentData.style.x ? 'right' : 'left';
};

const fetchDataAndRenderGraph = async () => {
  const response = await fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json');
  const data = await response.json();
  const graph = new Graph({
    container: 'container',
    autoFit: true,
    data: treeToGraphData(data),
    defaultNode: {
      style: {
        labelText: (d: any) => d.id,
        labelBackground: true,
        labelPlacement: (d: any) => {
          const side = getNodeSide(graph, d);
          return side === 'center' ? 'right' : side;
        },
        ports: [{ placement: 'right' }, { placement: 'left' }],
      },
      animation: {
        enter: false,
      },
    },
    defaultEdge: {
      type: 'cubic-horizontal',
      animation: {
        enter: false,
      },
    },
    layout: {
      type: 'mindmap',
      direction: 'H',
      getHeight: () => 32,
      getWidth: () => 32,
      getVGap: () => 4,
      getHGap: () => 64,
    },
    modes: {
      default: ['collapse-expand', 'drag-canvas', 'zoom-canvas'],
    },
  });

  graph.render();
};

const MindMap = () => {
  useEffect(() => {
    fetchDataAndRenderGraph();
  }, []);

  return <div id="container" style={{ width: '100%', height: '500px' }} />;
};

export default MindMap;
