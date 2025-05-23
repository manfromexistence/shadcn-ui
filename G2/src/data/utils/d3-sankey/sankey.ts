import { sum, max, min } from '@antv/vendor/d3-array';
import { justify } from './align';
import { constant } from './constant';

function ascendingSourceBreadth(a, b) {
  return ascendingBreadth(a.source, b.source) || a.index - b.index;
}

function ascendingTargetBreadth(a, b) {
  return ascendingBreadth(a.target, b.target) || a.index - b.index;
}

function ascendingBreadth(a, b) {
  return a.y0 - b.y0;
}

function value(d) {
  return d.value;
}

function defaultId(d) {
  return d.index;
}

function defaultNodes(graph) {
  return graph.nodes;
}

function defaultLinks(graph) {
  return graph.links;
}

function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error('missing: ' + id);
  return node;
}

function computeLinkBreadths({ nodes }) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

export function Sankey() {
  let x0 = 0,
    y0 = 0,
    x1 = 1,
    y1 = 1; // extent
  let dx = 24; // nodeWidth
  let dy = 8,
    py; // nodePadding
  let id = defaultId;
  let align = justify;
  let depth;
  let sort;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;

  function sankey(arg) {
    const graph = {
      nodes: nodes(arg),
      links: links(arg),
    };
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }

  sankey.update = function (graph) {
    computeLinkBreadths(graph);
    return graph;
  };

  sankey.nodeId = function (_) {
    return arguments.length
      ? ((id = typeof _ === 'function' ? _ : constant(_)), sankey)
      : id;
  };

  sankey.nodeAlign = function (_) {
    return arguments.length
      ? ((align = typeof _ === 'function' ? _ : constant(_)), sankey)
      : align;
  };

  sankey.nodeDepth = function (_) {
    return arguments.length
      ? ((depth = typeof _ === 'function' ? _ : _), sankey)
      : depth;
  };

  sankey.nodeSort = function (_) {
    return arguments.length ? ((sort = _), sankey) : sort;
  };

  sankey.nodeWidth = function (_) {
    return arguments.length ? ((dx = +_), sankey) : dx;
  };

  sankey.nodePadding = function (_) {
    return arguments.length ? ((dy = py = +_), sankey) : dy;
  };

  sankey.nodes = function (_) {
    return arguments.length
      ? ((nodes = typeof _ === 'function' ? _ : constant(_)), sankey)
      : nodes;
  };

  sankey.links = function (_) {
    return arguments.length
      ? ((links = typeof _ === 'function' ? _ : constant(_)), sankey)
      : links;
  };

  sankey.linkSort = function (_) {
    return arguments.length ? ((linkSort = _), sankey) : linkSort;
  };

  sankey.size = function (_) {
    return arguments.length
      ? ((x0 = y0 = 0), (x1 = +_[0]), (y1 = +_[1]), sankey)
      : [x1 - x0, y1 - y0];
  };

  sankey.extent = function (_) {
    return arguments.length
      ? ((x0 = +_[0][0]),
        (x1 = +_[1][0]),
        (y0 = +_[0][1]),
        (y1 = +_[1][1]),
        sankey)
      : [
          [x0, y0],
          [x1, y1],
        ];
  };

  sankey.iterations = function (_) {
    return arguments.length ? ((iterations = +_), sankey) : iterations;
  };

  function computeNodeLinks({ nodes, links }) {
    nodes.forEach((node, idx) => {
      node.index = idx;
      node.sourceLinks = [];
      node.targetLinks = [];
    });

    const nodeById = new Map(nodes.map((d) => [id(d), d]));

    links.forEach((link, idx) => {
      link.index = idx;
      let { source, target } = link;
      if (typeof source !== 'object')
        source = link.source = find(nodeById, source);
      if (typeof target !== 'object')
        target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });

    if (linkSort != null) {
      for (const { sourceLinks, targetLinks } of nodes) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }

  function computeNodeValues({ nodes }) {
    for (const node of nodes) {
      node.value =
        node.fixedValue === undefined
          ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value))
          : node.fixedValue;
    }
  }

  function computeNodeDepths({ nodes }) {
    const n = nodes.length;
    let current = new Set<any>(nodes);
    let next = new Set();
    let x = 0;
    while (current.size) {
      current.forEach((node) => {
        node.depth = x;
        for (const { target } of node.sourceLinks) {
          next.add(target);
        }
      });
      if (++x > n) throw new Error('circular link');
      current = next;
      next = new Set();
    }

    // 如果配置了 depth，则设置自定义 depth
    if (depth) {
      const maxDepth = Math.max(
        max(nodes, (d: { depth: number }) => d.depth) + 1,
        0,
      );

      let node;
      for (let i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.depth = depth.call(null, node, maxDepth);
      }
    }
  }

  function computeNodeHeights({ nodes }) {
    const n = nodes.length;
    let current = new Set<any>(nodes);
    let next = new Set();
    let x = 0;
    while (current.size) {
      current.forEach((node) => {
        node.height = x;
        for (const { source } of node.targetLinks) {
          next.add(source);
        }
      });
      if (++x > n) throw new Error('circular link');
      current = next;
      next = new Set();
    }
  }

  function computeNodeLayers({ nodes }) {
    const x = Math.max(max(nodes, (d: { depth: number }) => d.depth) + 1, 0);
    const kx = (x1 - x0 - dx) / (x - 1);
    const columns = new Array(x).fill(0).map(() => []);
    for (const node of nodes) {
      const i = Math.max(
        0,
        Math.min(x - 1, Math.floor(align.call(null, node, x))),
      );
      node.layer = i;
      node.x0 = x0 + i * kx;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort)
      for (const column of columns) {
        column.sort(sort);
      }
    return columns;
  }

  function initializeNodeBreadths(columns) {
    const ky = min(
      columns,
      (c: any[]) => (y1 - y0 - (c.length - 1) * py) / sum(c, value),
    ) as any as number;
    for (const nodes of columns) {
      let y = y0;
      for (const node of nodes) {
        node.y0 = y;
        node.y1 = y + node.value * ky;
        y = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky;
        }
      }
      y = (y1 - y + py) / (nodes.length + 1);
      for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        node.y0 += y * (i + 1);
        node.y1 += y * (i + 1);
      }
      reorderLinks(nodes);
    }
  }

  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(
      dy,
      (y1 - y0) / ((max(columns, (c: any[]) => c.length) as any as number) - 1),
    );
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }

  // Reposition each node based on its incoming (target) links.
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y = 0;
        let w = 0;
        for (const { source, value } of target.targetLinks) {
          const v = value * (target.layer - source.layer);
          y += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        const dy = (y / w - target.y0) * alpha;
        target.y0 += dy;
        target.y1 += dy;
        reorderNodeLinks(target);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      if (column.length) resolveCollisions(column, beta);
    }
  }

  // Reposition each node based on its outgoing (source) links.
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y = 0;
        let w = 0;
        for (const { target, value } of source.sourceLinks) {
          const v = value * (target.layer - source.layer);
          y += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        const dy = (y / w - source.y0) * alpha;
        source.y0 += dy;
        source.y1 += dy;
        reorderNodeLinks(source);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      if (column.length) resolveCollisions(column, beta);
    }
  }

  function resolveCollisions(nodes, alpha) {
    const i = nodes.length >> 1;
    const subject = nodes[i];
    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
  }

  // Push any overlapping nodes down.
  function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
    for (; i < nodes.length; ++i) {
      const node = nodes[i];
      const dy = (y - node.y0) * alpha;
      if (dy > 1e-6) (node.y0 += dy), (node.y1 += dy);
      y = node.y1 + py;
    }
  }

  // Push any overlapping nodes up.
  function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes[i];
      const dy = (node.y1 - y) * alpha;
      if (dy > 1e-6) (node.y0 -= dy), (node.y1 -= dy);
      y = node.y0 - py;
    }
  }

  function reorderNodeLinks({ sourceLinks, targetLinks }) {
    if (linkSort === undefined) {
      for (const {
        source: { sourceLinks },
      } of targetLinks) {
        sourceLinks.sort(ascendingTargetBreadth);
      }
      for (const {
        target: { targetLinks },
      } of sourceLinks) {
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  function reorderLinks(nodes) {
    if (linkSort === undefined) {
      for (const { sourceLinks, targetLinks } of nodes) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  // Returns the target.y0 that would produce an ideal link from source to target.
  function targetTop(source, target) {
    let y = source.y0 - ((source.sourceLinks.length - 1) * py) / 2;
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break;
      y += width + py;
    }
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break;
      y -= width;
    }
    return y;
  }

  // Returns the source.y0 that would produce an ideal link from source to target.
  function sourceTop(source, target) {
    let y = target.y0 - ((target.targetLinks.length - 1) * py) / 2;
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break;
      y += width + py;
    }
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break;
      y -= width;
    }
    return y;
  }

  return sankey;
}
