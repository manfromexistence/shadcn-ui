# ChangeLog

### 4.8.0

- fix: destroy graph and call layout problem, closes: #4126;
- fix: remove duplicated event emit, closes: #4043;
- fix: mousedown on other DOMs and mouseup on canvas, click is triggered unexpectly, closes: #2922;
- fix: mousemove and mouseup are not triggered with drag and dragend, closes: #3086;
- fix: replace DOMMouseScroll and mousewheel with wheel event, closes: #3256;
- perf: refresh item when updateChild, updateChildren, addChild, removeChild for TreeGraph;

### 4.7.17

- fix: expandCombo and the edges of the children are not refreshed, closes: #3250;
- fix: the item param of the afterremoveitem for combo should be data;
- fix: add type to the parameter list of beforeremoveitem event;
- fix: edge update with destroyed end items, closes: #3925;
- perf: take the max value of padding array for circle combo, closes: #4113;
- feat: support top-center for rect combo label position, closes: #3750;
- feat: createCombo and uncombo support stack, closes: #3695, #3323;

### 4.7.16

- feat: allowDragOnItem config for scroll-canvas, closes: #3062;
- feat: allow to setTextWaterMarker and setImageWaterMarker with an undefined parameter to remove the watermarker, closes: #3478;
- feat: hideEdge config for minimap to enhance the performance, closes: #3158;
- fix: minimap has incorrect shape zIndex with keyShape type and delegate type, closes: #3132;
- fix: minimap viewport dragging problem in firefox and safari, closes: #2939;
- docs: add sequence demo to site, closes: #3027;
- perf: unify the formats of shouldBegin, shouldUpdate, and shouldEnd in behaviors, closes: #3028;
- perf: fitView and fitCenter according to the corner ndoes insead of getCanvasBBox to avoid maximum call stack size exceeded, closes: #2447;
- fix: treeGraph changeData with node properties lost, closes: #3215;
- fix: error occurs while calling updateLayout from gpu layout to a cpu layout, closes: #3272;
- fix: error occurs while calling changeData to remove a node in a combo, closes: #3293;

### 4.7.15

- fix: dagre layout for collapsed combos;
- perf: give layout algorithm vedges;

### 4.7.14

- fix: error occurs while dragging combo with drag-node behavior;

### 4.7.13

- fix: unexpected move with fitCenter with animation;
- fix: update modelRect with rendering error, closes: #4041;

### 4.7.12

- fix: drag-canvas incorrectly stopped by right click;
- fix: createCombo with nodes which already has parent combos;
- fix: setItemState on node, related edges's linking positions are not refreshed;
- perf: combo animate inherit from graph's animate config;
- perf: improve the performance of setItemState and active-relations again;
- feat: graph supports optimizeThreshold to control the number threshold of nodes to enable the optimization on rendering and interaction, currently only affects the edges' refresh while the related node state style changed;

### 4.7.11

- perf: improve the performance of setItemState and active-relations;
- perf: keyShape is hiden when a combo is collapsed with collapsedSubstituIcon;
- fix: drag-node incorrectly stopped by right click;
- fix: timebar plugin destroy problem, closes: #3998;
- fix: controllerCfg does not take effect in timebar with tick type, closes: #3843;
- feat: timebar plugin supports config the default time type;
- feat: timebar with play and pause API;
- chore: use addItem and removeItem instead of changeData in timebar;

### 4.7.10

- perf: force layout with animation calls graph refreshPositions instead positionsAnimate while refreshing;

### 4.7.9

- perf: init node positions when the node has no x and y in the origin data;

### 4.7.8

- feat: pointPadding config for loop edges with non-circle nodes, closes: #3974;
- fix: image lost while updating the size for an image node, closes: #3938;

### 4.7.7

- feat: getContentPlaceholder and getTitlePlaceholder for Annotation plugin;

### 4.7.6

- fix: Annotation readData with inexistent item;
- perf: improve the performance for updating;

### 4.7.5

- perf: Annotation support updating positions for outside cards by calling updateOutsideCards;

### 4.7.4

- perf: Annotation min-width and input width;

### 4.7.3

- feat: beforechangedata and afterchagnedata for graph changeData;
- feat: Annotation supports icon events callbacks;
- feat: Annotation supports defaultBegin position configuration for new annotation cards;
- perf: Annotation updated automatically when graph data changed and graph item visibility changed;
- fix: Destroy legend canvas when the plugin is destroyed, closes: #3931;

### 4.7.2

- feat: Annotation plugin supports configuring behaviors for collapse and close icon;
- feat: Annotation plugin supports canvas annotation;
- fix: gForce layout has animation by default;
- fix: createCombo creates vedges asynchronously, closes: #3912;
- fix: strange polyline path edge related to combo, closes: #3913;

#### 4.7.1

- feat: Annotation plugin;
- fix: combo and drag-node with heap maximum problem, closes: #3886;
- fix: combo and graph re-read problem, closes: 3902;
- fix: d3 force layout with default animate;
- perf: bundling plugin ts problem, closes: #3904;

#### 4.7.0

- fix: combo collapsed edge problems, closes: #3839;

#### 4.7.0-beta

- feat: force2 from graphin-force;
- feat: preset for layout;
- feat: tweak incremental layout init for force like layouts;

#### 4.6.18

- feat: updateLayout from no pipes to pipes, closes: #3726;
- fix: relayout with pipes;

#### 4.6.17

- fix: legend changeData problem, closes: #3561;
- fix: redo and undo with an image node, closes: #3782;
- fix: call refreshPositions instead of positionsAnimate while there is no layout configuration;

#### 4.6.16

- feat: ID check;
- feat: fitView with animation;
- feat: findAllByState with additional filter;
- fix: wrong dropped position for drag-combo with enableDelegate, closes: #3810;
- fix: stack for drag-combo with onlyChangeComboSize, closes: #3801;
- fix: stack updateLayout, closes: #3765;
- fix: drag-canvas and zoom-canvas with enableOptimize show a hidden shape which is controlled by state, closes: #3635;
- fix: typing problem for react node;

#### 4.6.15

- fix: fitView does not zoom the graph with animate true;

#### 4.6.14

- perf: optimize the performance of combo graph;

#### 4.6.12

- perf: optimize the performance of combo graph first rendering;

#### 4.6.11

- fix: star node with leftBottom linkPoint show and hide problem;
- fix: relayout does not execute onAllLayoutEnd problem;
- fix: combo edge state update problem, closes: #3639;

#### 4.6.10

- feat: maxLength for labelCfg;
- fix: custom layout warning and layout failed problem;
- fix: upgrade layout to fix DagreLayoutOptions type error;
- fix: upgrade layout to fix comboCombined with original node infomations problem;

#### 4.6.8

- fix: spelling error for 'nodeselectChange', closes: #3736;
- fix: update node icon from show false to show true;
- fix: afterrender should be emitted when the layout is not configured;
- perf: update related edges while drag-combo;
- feat: combo supports collapsedSubstituteIcon showing after collapsed;
- feat: remove animations while first rendering with (collapsed)combos;
- refactor: toolbar plugin functions;

#### 4.6.6

- fix: destroyLayout error, closes: #3727;
- fix: drag combo with stack problem, closes: #3699;
- fix: updateLayout does not take effect if update layout with same type as graph instance configuration, closes: #3706;
- fix: legendStateStyles typo, closes: #3705;
- perf: zoom-canvas take the maximum and minimum values instead of return directly;
- perf: minimap cursor move;
- feat: fitView and fitCenter with animation;
- feat: addItems to add multiple items into graph in the same time;
- feat: enable edge selection in click-select;

#### 4.6.4

- chore: improve the types of graph events;
- fix: position animate considers origin attributes;

#### 4.6.3

- feat: shouldDeselect param for lasso-select;
- fix: initial collapsed combos with unexpected size;

#### 4.6.1

- fix: layoutController is null problem;

#### 4.6.0-beta

- feat: comboCombined Layout from @antv/layout;
- feat: combo supports position configurations for any situations;
- fix: run layout promise only when the layout is configured;

#### 4.5.5

- fix: tooltip with wrong duplicated child DOM nodes;

#### 4.5.4

- feat: tooltip plugin supports dynamic dom configurations;
- feat: context menu plugin supports mobile touch event;
- feat: allow enabling stack operations at runtime;
- fix: use origin data when changeData without data param, closes: #3459;
- feat: shouldBegin for canvas click in click-select behavior;

#### 4.5.3

- fix: import G6 in head and call getComputedStyle, the document body is not exist;

#### 4.5.2

- fix: node update from no icon to iconfont icon failed;
- fix: getUpdateType with type error;
- fix: edge label background with clearItemStates problem;
- fix: edge label with autoRotate false and padding problem;
- fix: changeData in the process of create-edge behavior, an error occurs, closes: #3384;
- fix: node update from no icon to iconfont icon failed;

#### 4.5.1

- feat: translate graph with animation;
- feat: zoom graph with animation;
- feat: timebar supports filterItemTypes to configure the types of the graph items to be filtered; only nodes can be filtered before;
- feat: timebar supports to configure the rotate of the tick labels by tickLabelStyle[dot]rotate;
- feat: timebar supports container CSS configuration by containerCSS;
- feat: timebar supports a function getDate to returns the date value according to each node or edge by user;
- feat: timebar supports afunction getValue to returns the value (for trend line of trend timebar) according to each node or edge by user;
- feat: timebar supports to configure a boolean changeData to control the filter way, true means filters by graph[dot]changeData, false means filters by graph[dot]showItem and graph[dot]hideItem;
- feat: timebar supports to configure a function shouldIgnore to return true or false by user to decide whether the node or the edge should be ignored while filtering;
- fix: simple timebar silder text position strategy and expand the lineAppendWidth for the slider;
- fix: edge label padding bug, closes: #3346;
- fix: update node with iconfont icon, the icon is updated to a wrong position, closes: #3348;

#### 4.5.0

- fix: add item type to the parameter of afterremoveitem event;

#### 4.4.1

- feat: zoom with animation, contributed by @Blakko;

#### 4.4.0-beta.1

- fix: drag-combo and drag-node with wrongly calling shouldUpdate;

#### 4.4.0-beta.0

- feat: better performance for item drawing;
- fix: disable the capture of hull shape to enhance the performance of dragging canvas with hulls;
- fix: uncombo an empty combo, fix: #3248;
- fix: upgrade layout to beta 5 to solve proxy problem for IE;

#### 4.3.11

#### 4.3.9

- fix: update edge to be horizontal and the label is on wrong position for min file;

#### 4.3.9

- fix: addBehavior with behavior string name, closes: #3020;
- fix: drag-node shouldEnd does not stop the dragging node behavior, closes: #3173;
- fix: drag-combo fails to merge combo with enableDelegate, closes: #3137;
- fix: uncombo does not trigger afterremoveitem event, closes: #3179;
- fix: error label background position when the edge label has position start, closes: #3129;
- fix: destroyed graph judgement, closes: #3203;
- fix: edge click event will not be triggered when the contextmenu is configure with trigger click, closes: #3201;
- feat: drag-combo with shouldEnd, closes: #3202;
- chore: information for failing to download image, closes: #2980;

#### 4.3.7

- fix: update edge to be horizontal and the label is on wrong position;

#### 4.3.6

- fix: drag-node on mobile, closes: #3127;
- fix: removeBehaviors drag-canvas cause canvas:drag event cannot be listened;
- fix: drag-node with unexpected offseted edge end points, closes: #3118;
- fix: delete node with combo, closes: #3141;
- fix: update node position with wrong position;
- feat: enableStack for drag-node behavior, closes: #3128;

#### 4.3.5

- fix: drag a node without comboId by drag-node with onlyChangeComboSize;
- fix: gpu layout with async;
- fix: minimap with delegate type cannot reach the top of the canvas, closes: #2885;
- feat: improve the performance for updating nodes;
- feat: updateLayout with align and alignPoint;

#### 4.3.4

- fix: when select a node with click-select, selected combos should be deselected;
- fix: contextmenu with click trigger does not show the menu up, closes: #2982;
- fix: layout with collapsed combo, closes: #2988;
- fix: zoom-canvas with optimizeZoom, drag-canvas shows the node shapes hiden by zoom-canvas optimizeZoom, closes: #2996;

#### 4.3.3

- fix: uncombo with id, closes: #2924;
- fix: image node with state changing, closes: #2923;
- fix: mouseentering tooltip DOM hides the DOM;
- feat: moveTo with animate, closes: #2252;

#### 4.3.2

- fix: upgrade the layout package to 0.1.14 to solve the different results from gpu and cpu problem in gForce layout, closes: #2902;
- fix: auto fitting container without width and height for graph problem, closes: #2901;
- fix: minimap with zoomingproblem, closes: #2863
- feat: fx and fy for fruchterman and gForce layout in both gpu and cpu version;
- feat: barWidth for interval bar chart for TimeBar plugin, closes: #2989;
- feat: click trigger for context munu, closes: #2686;

#### 4.3.0

- fix: empty object for TreeGraph data;
- fix: combo edge arrow error with state styles;
- fix: depth problem for addItem with comboId, closes: #2888;
- feat: focus edge item;
- feat: legend plugin;
- feat: allow to new a tree layout independently;

#### 4.2.7

- fix: edges disappear when collapsing combo, closes: #2816;
- fix: drag-node with edge key, closes: #2819;
- fix: failed to update startArrow to be false, closes #2814;
- fix: createCombo and add combId or parentId to the related nodes or combos, closes #2815;
- feat: no animation when first rendering with collapsed combos, closes: #2826;

#### 4.2.6

- feat: scroll-canvas behavior;
- feat: iconfont for node icon;
- feat: percentage of scalable range for drag-canvas;
- fix: missing brushStyle in type ModeOption;
- fix: the comboId remains in the node after uncombo(), closes #2801;
- fix: disappearing edges when combos are expanded/collapsed, closes #2798;
- fix: invisible nodes and edges should not be selected by brush-select and lasso-select, closes #2810;

#### 4.2.5

- feat: donut node;
- feat: downloadImage with watermarker;
- fix: multiple layout calling error;
- fix: combo collapse and related edges diappearing;
- fix: forceAtlas2 with descrete node error;

#### 4.2.4

- fix: change data with dulplicated name between nodes and combos;
- fix: pixelRatio for graph types;

#### 4.2.3

- fix: layout with fitView;

#### 4.2.2

- feat: pipe layouts for subgraphs;

#### 4.2.1

- fix: circle combo edge linking position problem;
- fix: drag minimap viewport with forbidden icon in chrome on windows;
- fix: show node without node position problem;
- fix: addItem and getNodeDgree with wrong result problem;
- fix: timebar data filtering problem;
- fix: update endArrow to be false and set state problem;
- feat: pass comb and comboEdge data for layout;
- feat: tooltip with fixToItem to avoid following the mouse when moving;
- feat: getViewPortCenterPoint and getGraphCenterPoint API;
- feat: tooltip with trigger configuration, supports mouseenter and click;

#### 4.2.0

#### 4.1.14

- fix: combo edge link position problem;
- fix: activate-relations with combo and combo edges problem;
- feat: support config TimeBar handler, background, foreground, tick label, tick line style;

#### 4.1.16

- fix: webworker in dist;

#### 4.1.15

- fix: cubic-x problem, closes: #2698;

#### 4.1.14

- fix: gridSize for polyline;
- fix: create-edge undo problem;
- fix: tslib spreadArray problem;
- fix: rect combo position with state problem;
- feat: simple polyline for better performance;
- fix: gridSize for polyline;
- fix: cubic-x problem, closes: #2698;
- fix: create-edge undo problem;
- fix: tslib spreadArray problem;
- fix: rect combo position with state problem;
- feat: simple polyline for better performance;

#### 4.1.13

- fix: getHulls with error type;
- fix: createHull with destroyed hullMap problem;
- fix: refining TimeBar minor problems;
- fix: tooltip with display none to avoid enlarging graph container;
- feat: TimeBar supports controller style configuration;
- feat: TimeBar supports filtering edges;
- feat: dagre with nested combo;

#### 4.1.13-beta

- chore: update layout and register in G6;
- fix: performance problem in create-edge with polyline;
- fix: performance for polyline;
- fix: debounce updating the polyline edges in drag-node behavior;
- fix: toolbar redo undo max clone in drag-node behavior;
- feat: dagre layout with combo;
- feat: cubic-vertical and cubic-horizontal with curveOffset and minCurveOffset

#### 4.1.12

- chore: update layout with alpha gwebgpu;
- chore: update algorithm with fixed publicPath problem;

#### 4.1.11

- chore: link correct core;

#### 4.1.10

- chore: update algorithm;

#### 4.1.9

- feat: allowDragOnItem for drag-canvas behavior;
- fix: drag-canvas with two fingers on mobile affects zoom-canvas;

#### 4.1.8

- fix: shouldBegin false for zoom-canvas behavior;
- fix: shouldBegin originScale from graph zoom;
- fix: error in collapse-expand with touch on canvas;

#### 4.1.7

- fix: polyline with negative endpoints;
- fix: polyline direction when linkCenter;
- fix: remove g6-core browser since it has no umd output;
- feat: custom texts for the time range and time point text in timeBar plugin;
- chore: types for strict mode;

#### 4.1.6

- fix: webworker problem after removing broswer in pc and g6;

#### 4.1.5

- fix: wrong style for modelRect after updating and state changing, closes: #2613;
- fix: drag-canvas with shouldBegin false, closes: #2571;
- fix: pack plugin with es module, closes: #2577;
- feat: dijkstra with multiple shortest paths, closes: #2297;
- fix: setMode while the delegates of brush-select and drag-node is on the canvas, closes: #2607;
- docs: update the english TimeBar docs, closes: #2597;
- fix: TimeBar time point switch text configurable, closes: #2597;

#### 4.1.4

- fix: drag-canvas with touch on mobile;

#### 4.1.2

- fix: registerBehavior export problem;
- fix: shouldEnd of create-edge with groupByTypes as false;
- fix: collapse and expand a combo with an empty sub combo error;
- fix: update padding of rect combo;
- fix: the graph in the minimap with circular layout is not centered, closes: #2555;
- fix: edge background displays on a wrong place when autoRotate is true;

#### 4.1.1

- fix: soomth-convex hull with one line nodes leads to unshift problem;
- fix: zoom-canvas to optimizeZoom and hide the label, the label will not show up any more problem;
- fix: the ts type for parameter of timing event listener, closes: #2499;

#### 4.1.0

- chore: ts lint;
- feat: getEdgeConfig for create-edge behavior;
- fix: uniqueId with timestamp and random;
- fix: fix zoom-canvas and drag-canvas with enableOptimize conflict problem shrink the settimeout;

#### 4.1.0-beta.1

- chore: unpack the g6 into core, pc, element, plugin, mobile, and exported by g6;
- feat: layout with onLayoutEnd and custom layout with tag;
- feat: emit beforecollapseexpandcombo and aftercollapseexpandcombo;
- fix: toolbar for firefox and other browsers;
- fix: edge label position with state problem;
- fix: set item state to false at the first time;
- fix: hull with one node;
- fix: combo state size problem;
- fix: state with fontSize changed problem;
- fix: edge label with background when the two end nodes are overlapped;
- fix: text rasidual of timebar;
- fix: maximum stack size problem for image node type, fix: #2383;

#### 4.0.3

- fix: state style restore for non-circle shapes;

#### 4.0.2

- fix: node and edge state style with update problem;
- fix: import lib problem;
- fix: import node module problem;
- fix: hidden shapes show up after zoom-canvas or drag-canvas with enableOptimize;
- fix: tooltip for combo;
- fix: update edge with false endArrow and startArrow;

#### 4.0.1

- fix: glslang problem;

#### 4.0.0-beta.0

- feat: fruchterman and gforce layout with gpu;
- feat: gforce;
- feat: updateChildren API for TreeGraph;
- feat: louvain clustering algorithm;
- feat: container of plugins with dom id;
- feat: label propagation clustering algorithm;
- feat: get color sets by subject color array;
- feat: canvas context menu;
- feat: stop gforce;
- feat: dark rules for colors;
- fix: text redidual problem, closes: #2045 #2193;
- fix: graph on callback parameter type problem, closes: #2250;
- fix: combo zIndex problem;
- fix: webworker updateLayoutCfg problem;
- fix: drag-canvas and click node on mobile;

#### 3.8.5

- fix: get fontFamily of the window in global leads to DOM depending when using bigfish;

#### 3.8.4

- feat: new version of basic styles for light version;
- feat: shortcuts-call behavior for calling a Graph function by shortcuts;
- feat: color generate util function getColorsWithSubjectColor;
- fix: drag-canvas on mobile problem;
- fix: style update problem with stateStyles in the options of registerNode;

#### 3.8.3

- feat: drag the viewport of the minimap out of the the view;
- fix: extend modelRect with description problem, closes: #2235;

#### 3.8.2

- feat: graph.setImageWaterMarker, graph.setTextWaterMarker API;
- feat: zoom-canvas support mobile;
- fix: drag-canvas behavior support scalable range, closes: #2136;
- fix: TreeGraph changeData clear all states, closes: #2173;
- chore: auto zoom tooltip & contextMenu component when zoom-canvas;
- chore: upgrade @antv/g-canvas;
- feat: destroyLayout API for graph, closes: #2140;
- feat: clustering for force layout, closes: #2196;
- fix: svg renderer minimap hidden elements probem, closes: #2174;
- feat: add extra parameter graph for menu plugin, closes: #2204;
- fix: tooltip plugin, crossing different shape cant execute the getContent function, closes: #2153;
- feat: add edgeConfig for create-edge behavior, closes: #2195;
- fix: remove the source node while creat-edge;
- feat: create-edge for combo, closes: #2211;
- fix: update the typings for G6Event;

#### 3.8.1

- fix: update edge states with updateItem problem, closes: #2142;
- fix: create-edge behavior with polyline problem, closes: #2165;
- fix: console.warn show duplicate ID, closes: #2163;
- feat: support the drag-canvas behavior on the mobile device, closes: #816;
- chore: timeBar component docs;

#### 3.8.0

- fix: treeGraph render with addItem and stack problem, closes: #2084;
- feat: G6 Interactive Document GraphMarker;
- feat: registerNode with jsx support afterDraw and setState;
- feat: edge filter lens plugin;
- feat: timebar plugin;

#### 3.7.3

- fix: update G to fix the shape disappear when it has been dragged out of the view port problem, closes: #2078, #2030, #2007;
- fix: redo undo with treeGraph problem;
- fix: remove item with itemType problem, closes: #2096.

#### 3.7.2

- fix: toolbar redo undo addItem with type problem, closes #2043;
- fix: optimized drag-canvas with hidden items;
- fix: state style with 0 value problem, closes: #2039;
- fix: layout with webworker leads to twice beforelayout, closes: #2052;
- fix: context menu with sibling doms of graph container leads to position problem, closes: #2053;
- fix: changeData with combos problem, closes: #2064;
- fix: improve the position of the context menu before showing up;
- feat: fisheye allows user to config the trigger of scaling range(r) and magnify factor(d) by scaleRBy and scaleDBy respectively;
- feat: add the percent text of magnify factor(d) for fisheye and users are allowed to configure it by show showDPercent.

#### 3.7.1

- fix: hide the tooltip plugin when drag node and contextmenu, closes #1975;
- fix: processParellelEdges without edge id problem;
- fix: label background with left, right position problem, closes #1861;
- fix: create-edge and redo undo problem, #1976;
- fix: tooltip plugin with shouldBegin problem, closes #2006;
- fix: tooltip behavior with shouldBegin problem, closes #2016;
- fix: the position of grid plugins when there is something on the top of the canvas, closes: #2012;
- fix: fisheye destroy and new problem, closes: #2018;
- fix: node event with wrong canvasX and canvasY problem, closes: #2027;
- fix: drag combo and drag node to drop on canvas/combo/node problem;
- feat: improve the performance on the combos;
- fix: redo and undo problem when update item after additem, closes #2019;
- feat: hide shapes beside keyShape while zooming;
- feat: improve the performance on the combos.

#### 3.7.0

- feat: chart node;
- feat: bubble set;
- feat: custom node with JSX;
- feat: minimum spanning tree algorithm;
- feat: path finding algorithm;
- feat: cycle finding algorithm;
- chore: update antv/hierarchy to fix indented tree with dropCap problem.

#### 3.6.2

- feat: find all paths and the shortest path between two nodes;
- feat: fisheye with dragging;
- feat: fisheye with scaling range and d;
- feat: click and drag to create an edge by create-edge behavior;
- feat: process multiple parallel edges to quadratic with proper curveOffset;
- fix: polyline with rect and radius=0 problem;
- fix: arrow state & linkpoint;
- fix: the position of the tooltip plugin;
- fix: drop a node onto a sub node of a combo;
- chore: update hierarchy to solve the children ordering problem for indented tree layout;
- chore: extract the public calculation to enhance the performance of fisheye.

#### 3.6.1-beta

- chore: update g-canvas to support quickHit and pruning the rendering of the graph outside the viewport;
- feat: add statistical chart nodes;
- feat: add hull for create smooth contour to include specific items;
- fix: clear combos before render;
- fix: menu plugin with clickHandler problem.

#### 3.6.1

- feat: image minimap;
- feat: visible can be controlled in the data;
- feat: item type for tooltip plugin;
- feat: menu plugin with shouldUpdate;
- fix: tooltip plugin position and hidden by removeItem;
- fix: tooltip behavior hidden by removeItem;
- fix: menu plugin with clicking on canvas problem;
- fix: menu plugin with clickHandler problem;
- fix: createCombo with double nodes problem.

#### 3.6.0

- feat: fisheye lens plugin;
- feat: lasso-select behavior;
- feat: TimeBar plugin;
- feat: ToolBar plugin.

#### 3.5.12

- fix: node:click is triggered twice while clicking a node;
- fix: update combo edge when drag node out of it problem;
- feat: animate configuration for combo, true by default;
- fix: calling canvas.on('\*', ...) instead of origin way in event controller leads to malposition while dragging nodes with zoomed graph.

#### 3.5.11

- feat: graph.priorityState api;
- feat: graph.on support name:event mode.
- fix: combo edge with uncorrect end points;
- fix: combo polyline edge with wrong path;
- fix: getViewCenter with padding problem;
- fix: cannot read property 'getModel' of null problem on contextmenu when the target is not an item;
- feat: allow user to configure the initial positions for empty combos;
- feat: optimize by hiding edges and shapes which are not keyShape while dragging canvas;
- feat: fix the initial positions by equably distributing for layout to produce similar result.

#### 3.5.10

- fix: fitView and fitCenter with animate in the initial state;
- fix: dulplicated edges in nodeselectchange event of brush-select;
- fix: triple click and drag canvas problem;
- fix: sync the minZoom and maxZoom in drag-canvas and graph;
- fix: integrate getSourceNeighbors and getTargetNeighbors to getNeighbors(node, type);
- feat: initial x and y for combo data;
- feat: dagre layout supports sortByCombo;
- feat: allow user to disable relayout in collapse-expand-combo behavior;
- feat: dijkstra shortest path lenght algorithm.

#### 3.5.9

- fix: multiple animate update shape for combo;
- fix: removeItem from a combo.

#### 3.5.8

- fix: combo edge problem, issues #1722;
- feat: adjacency matrix algorithm;
- feat: Floyd Warshall shortest path algorithm;
- feat: built-in arrows;
- feat: built-in markers;
- fix: force layout with addItem and relayout;
- fix: create combo with parentId problem;
- feat: allow user to configure the pixelRatio for Canvas;
- chore: update G to resolve the blur canvas problem.

#### 3.5.7

- feat: shouldBegin for click-select behavior;
- feat: graph.getGroup, graph.getContainer, graph.getMinZoom, graph.setMinZoom, graph.getMaxZoom, graph.setMaxZoom, graph.getWidth, graph.getHeight API;
- fix: combo edge dashLine attribute;
- fix: combo collapse and expand with edges problem;
- fix: destroy the tooltip DOMs when destroy the graph;
- fix: unify the shape names for custom node and extended node;
- fix: update the edges after first render with collapsed combos.

#### 3.5.6

- feat: dropCap for indented TreeGraph layout.

#### 3.5.5

- fix: custom node with setState problem;
- fix: validationCombo in drag-combo and drag-node.

#### 3.5.3

- feat: focusItem with animation;
- feat: generate the image url of the full graph by graph.toFullDataUrl;
- fix: graph dispears after being dragged out of the canvas and back;
- fix: the graph cannot be dragged back if it is already out of the view;
- fix: size and radius of the linkPoints problem;
- fix: combo graph with unused state name in comboStateStyles;
- fix: preventDefault in drag-canvas behavior.

#### 3.5.2

- feat: degree algorithm;
- feat: graph.getNodeDegree;
- fix: downloadFullImage changes the matrix of the graph problem;
- fix: circular layout modifies the origin data with infinite hierarchy problem.

#### 3.5.1

- feat: graph.fitCenter to align the graph center to canvas center;
- fix: getType is not a function error occurs when addItem with point;
- fix: checking comboTrees avaiability;
- fix: error occurs when createCombo into the graph without any combos;
- fix: endPoint and startPoint are missing in modelConfig type;
- fix: edge background leads to empty canvas when the autoRotate is false;
- fix: combo state style bug.

#### 3.5.0

- feat: combo and combo layout;
- feat: graph algorithms: DFS, BFS and circle detection;
- feat: add `getNeighbors`, `getSourceNeighbors`, `getTargetNeighbors` methods on Graph and Node;
- feat: add `getID` method on Item;
- fix: All Configuration type declarations are migrated to types folder, refer [here](https://github.com/antvis/G6/commit/3691cb51264df8529f75222147ac3f248b71f2f6?diff=unified#diff-76cf0eb5e3d8032945f1ac79ffc5e815R6);
- fix: Some configuration type declarations have removed the `I` prefix, refer [here](https://github.com/antvis/G6/commit/3691cb51264df8529f75222147ac3f248b71f2f6?diff=unified#diff-aa582974831cee2972b8c96cfcce503aR16);
- feat: Util.getLetterWidth and Util.getTextSize.

#### 3.4.10

- fix: TreeGraphData type with style and stateStyles;
- fix: wrong controlpoint position for bezier curves with getControlPoint.

#### 3.4.9

- fix: transplie d3-force to support IE11.

#### 3.4.8

- feat: update the keyShape type minimap when the node or edge's style is updated;
- fix: problem about switching to another applications or browser menu and then switch back, the drag-canvas does not take effect;
- fix: fix the problem about fail to render the graph when the animate and fitView are true by turn off the animate for rendering temporary;
- fix: curveOffset for arc, quadratic, cubic edge.

#### 3.4.7

- feat: downloadFullImage when the (part of) graph is out of the screen;
- feat: With pre-graph has no layout configurations and no positions in data, calling changeData to change into a new data with positions, results in show the node with positions in data;
- feat: allow user to assign curveOffset and curvePostion for Bezier curves;
- fix: moveTo wrong logic problem;
- fix: removeItem to update the minimap.

#### 3.4.6

- same as 3.4.5, published wrongly.

#### 3.4.5

- feat: background of the label on node or edge;
- feat: better performance of minimap;
- fix: minimap viewport displace problem;
- feat: offset of tooltip;
- fix: the length of the node's name affects the tree layout;
- fix: toFront does not work for svg renderer;
- fix: error occurs when the fontSize is smaller than 12 with svg renderer;
- fix: changeData clears states;
- fix: state does not work when default labelCfg is not assigned.

#### 3.4.4

- feat: background color for downloadImage and toDataURL;
- feat: support configure image for grid plugin;
- fix: initial position for fruchterman layout;
- refactor: clip for image node.
- fix: cubic with only one controlPoint error;
- fix: polyline without L attributes.

#### 3.4.3

- fix: support extends BehaviorOption;
- fix: click-select Behavior support multiple selection using ctrl key.

#### 3.4.2

- feat: zoom-canvas behavior supports hiding non-keyshape elements when scaling canvas;
- refactor: when the second parameter is null, clearItemStates will clear all states of the item;
- fix: [changeData bug](https://github.com/antvis/G6/issues/1323);
- fix: update antv/hierarchy to fix fixedRoot for TreeGraph;
- fix: problem of a graph has multiple polyline edges;
- fix: problem of dagre with controlPoints and loop edges.

#### 3.4.1

- feat: force layout clone original data model to allow the customized properties;
- fix: BehaviorOptions type error;
- fix: fitView the graph with data whose nodes and edges are empty arrays;
- fix: rect node positions are changed after calling graph.changeData;
- fix: drag behavior is disabled when the keys are released invalidly;
- refactor: update G and the fill of custom arrow should be assigned by user.

#### 3.4.0

- feat: SVG renderer;
- refactor: new state mechanism with multiple values, sub graphics shape style settings.

#### 3.3.7

- feat: beforeaddchild and afteraddchild emit for TreeGraph;
- feat: built-in nodes' labels can be captured;
- fix: drag shadow caused by localRefresh, update the g-canvas version;
- fix: abnormal polyline bendding;
- fix: collapse-expand trigger problem;
- fix: update nodes with empty string label;
- fix: abnormal rendering when a graph has image nodes and other type nodes.

#### 3.3.6

- feat: support edge weight for dagre layout;
- feat: automatically add draggable to keyShape, users do not need to assign it when custom a node or an edge;
- fix: cannot read 0 or null problem in getPointByCanvas;
- fix: brush-select bug;
- fix: set autoDraw to canvas when graph's setAutoPaint is called;
- fix: modify the usage of bbox in view controller since the interface is chagned by G;
- fix: the shape.attr error in updateShapeStyle;
- fix: local refresh influence on changeData;
- refactor: upgrade g-canvas to 0.3.23 to solve lacking of removeChild function;
- doc: update the demo fo custom behavior doc;
- doc: add plugin demos and cases for site;
- doc: fix shouldUpdate problem in treeWithLargeData demo on the site.

#### 3.3.5

- fix: 3.3.4 is not published successfully;

#### 3.3.4

- fix: 3.3.3 is not published successfully;
- fix: delegate or keyShape type minimap does not display bug;
- fix: dragging bug on minimap with a graph whose bbox is nagtive;
- fix: null matrix bug, create a unit matrix for null.

#### 3.3.3

- fix: delegate or keyShape type minimap does not display bug;
- fix: null matrix in focus() and getLoopCfgs() bug.

#### 3.3.2

- fix: ts type export problem;
- fix: edge with endArrow and autoRotate label bug;
- fix: code prettier;
- fix: line with control points bug;
- fix: matrix null bug.

#### 3.3.1

- fix: resolve 3.3.0 compatibility problem.

#### 3.3.0

- Graph API
  - refactor: delete removeEvent function, use off;
- refactor: parameters of Shape animate changed, shape.animate(toAttrs, animateCfg) or shape.animate(onFrame, animateCfg);
- feat: descriptionCfg for modelRect to define the style of description by user;
- feat: update a node from without some shapes to with them, such as linkPoints, label, logo icon and state icon for modelRect;
- feat: the callback paramter of event nodeselectchange is changed to { target, selectedItems, ... };
- feat: support stateStyles in node and edge data;
- feat: calculate pixelRatio by G automatically, user do not need to assign it to graph instance;
- chore: G 4.0
- refactor: refreshLayout of TreeGraph is renamed as layout
- fix: no fan shape in G any more
- feat: recommand to assign name for each shape when addShape
- fix: do not support SVG renderer anymore. no renderer for graph configuration anymore
- refactor: plugins usage is changed into new G6.PluginName()

#### 3.2.7

- feat: supports create the group without nodes in node-group;
- fix: supports destoryed properties and fix issue 1094;

#### 3.2.6

- feat: supports sort the nodes on one circle according to the data ordering or some attribute in radial layout
- fix: grid layout with cols and rows
- feat: fix the nodes with position information in their original data and random the positions of others when the layout is not defined for graph

#### 3.2.5

- fix: click-select trigger error
- fix: solved position problem for minimap

#### 3.2.4

- fix: typescript compile error
- fix: delete sankey lib

#### 3.2.3

- fix: group position error
- fix: supports not set layout type

#### 3.1.5

- feat: supports g6 types file
- fix: set brush-select trigger param to ctrl not work
- fix: when set fitView to true, drag-group Behavior not get desired positon

#### 3.1.3

- feat: radial layout nonoverlap iterations can be controlled by user
- feat: add lock, unlock and hasLocked function, supports lock and unlock node
- fix: mds with discrete points problem
- fix: fruchterman-group layout title position for rect groups

#### 3.1.2

- feat: default behavior supports configuration trigger mode
- feat: node combining supports configuration title
- fix: update demo state styles

#### 3.1.1

- fix: update node use custom config
- fix: update demo
- feat: default node implement getShapeStyle function

#### 3.1.0

- feat: support for rich layouts：random, radial, mds, circular, fruchterman, force, dagre
- feat: more flexible configuration for shape
- feat: build-in rich default nodes
- feat: cases that provide layout and default nodes

#### 3.0.7-beta.1

`2019-09-11`

- fix: zoom-canvas support IE and Firefox

#### 3.0.6

`2019-09-11`

- fix: group data util function use module.exports
- feat: update @antv/hierarchy version

#### 3.0.5

`2019-09-10`

- feat: support add and remove group
- feat: support collapse and expand group
- feat: add graph api: collapseGroup and expandGroup

#### 3.0.5-beta.12

- feat: add rect group
- feat: add rect group demo
- feat: add chart node

---

#### 3.0.5-beta.10

- feat: add 5 chart node
- feat: collapse-expand tree support click and dblclick by trigger option
- fix: drag group bug fix

#### 3.0.5-beta.10

- feat: support render group
- feat: support drag group, collapse and expand group, drag node in/out group
- feat: add drag-group、collapse-expand-group and drag-node-with-group behavior
- feat: add drag-group and collapse-expand-group demo
- feat: add register list node demo

#### 3.0.5-beta.8

`2019-07-19`

- feat: add five demos
- refactor: update three behaviors

#### 2.2.5

`2018-12-20`

- feat: add saveimage limitRatio

#### 2.2.4

`2018-12-20`

- fix: bug fix

#### 2.2.3

`2018-12-10`

- fix: bug fix

#### 2.2.2

`2018-11-30`

- fix: tree remove guide will not getEdges.closes #521

#### 2.2.1

`2018-11-25`

- fix: Compatible with MOUSEWHEEL
- fix: fadeIn aniamtion
- fix: fix wheelZoom behaviour by removing the deprecated mousewheel event

#### 2.2.0

`2018-11-22`

- fix: Graph read zIndex
- refactor: Animation

#### 2.1.5

`2018-10-26`

- fix: svg pixelRatio bug
- feat: add wheel event

#### 2.1.4

`2018-10-06`

- fix: custom math.sign to compatible with ie browser.Closes #516.
- fix: legend component from @antv/component
- feat: update svg minimap && fix svg dom event

#### 2.1.3

`2018-09-27`

- feat: add label rotate
- feat: if there is no items the graph box equal canvas size

#### 2.1.2

`2018-09-19`

- fix: dom getShape bug.Closes #472
- fix: template.maxSpanningForest bug

#### 2.1.1

`2018-09-17`

- fix: tool.highlightSubgraph calculate box bug
- fix: plugin.grid.Closes #479
- chore(dev): upgrade babel & torchjs

#### 2.1.0

`2018-09-03`

- feat: svg render
- feat: plugin.layout.forceAtlas2
- feat: plugin.tool.fisheye
- feat: plugin.tool.textDisplay
- feat: plugin.tool.grid
- feat: plugin.template.tableSankey
- feat: plugin.edge.polyline

#### 2.0.5

`2018-07-12`

- improve: add g6 arrow

#### 2.0.4

`2018-07-12`

- feat: layout export group.Closes #355
- feat(plugin): add tool.tooltip. Closes #360.
- style: change the calling way of forceAtlas2 on template.maxSpanningForest
- fix: origin tree data collapsed is true tree edge visible bug.Closes #357
- fix: remove the forceAtlas.js in template.maxSpanningForest, use forceAtlas from layout.forceAtlas2
- fix: add demos: plugin-fisheye, plugin-forceAtlas2, gallery-graphanalyzer
- fix: add demos: plugin-forceAtlas2, plugin-fisheye

#### 2.0.3

`2018-06-29`

- feat: update g to 3.0.x. Closes #346
- fix: group should use rect intersect box. Close #297
- fix(plugin): dagre edge controlpoints remove start point and end point
- style: remove some annotations
- chore: update torchjs && improve demo name

#### 2.0.2

`2018-06-13`

- chore(plugin): require g6 by src/index
- chore(dev test): remove useless test script
- fix(plugin) minimap destroy Closes #308
- fix(saveImage) saveImage bug
- fix(event): fix dom coord. Closes #305

#### 2.0.1

`2018-06-11`

- fix: reDraw edge after layout
- feat: add quadraticCurve config cpd
- feat: add beforelayout && afterlayout event
- chore: .travis.yml add add Node.js
- chore: .travis.yml cache node_modules

#### 2.0.0

`2018-06-06`

- refactor: refactor architecture && code

#### 1.2.1

`2018-03-15`

- feat: layout interface

#### 1.2.0

`2018-01-15`

- fix: nodeActivedBoxStyle spelling error
- fix: error when deleting a circle
- fix: trigger dragstart while right clicking and moveing
- feat: Unify Layout mechanism
- feat: Plugin mechanism
- feat: Data filter mechanism
- feat: Activated interface
- feat: Action wheelZoomAutoLabel
- feat: configuration of graph -- preciseAnchor
- remove: Global.preciseAnchor
- remove: Layout.Flow、Layout.Force
- improve: html container strategy

#### 1.1.6

`2017-10-15`

- fix: pack problem in layout algorithm

#### 1.1.5

`2017-09-15`

- fix: dragCanvas is effective while mousemove, prevent it from affecting click events
- fix: unactivate pick-up in activeRectBox of node

#### 1.1.4

`2017-08-15`

- feat: graph.invertPoint()
- feat: third configuration of anchor to support style setting, float style, connection
- feat: item.getGroup()
- feat: events -- afteritemrender、itemremove、itemadd
- feat: behaviourSignal
- improve: mouseWheel is affective after focusing the canvas

#### 1.1.3

`2017-08-8`

- feat: Graph configuration -- useNodeSortGroup
- feat: Global.nodeDelegationStyle, Global.edgeDelegationStyle, isolate the delegation of edge and node on graph
- fix: itemremove is triggered before destroying a graph

#### 1.1.2

`2017-08-01`

- feat: dragBlankX dragBlankY

#### 1.1.1

`2017-07-18`

- improve: dragNode protect mechanism

#### 1.1.0

`2017-07-05`

- feat: HTML node
- feat: mapper support callback function
- feat: Graph interfaces -- updateMatrix、changeSize、showAnchor、hideAnchor、updataNodesPosition
- feat: tool functions -- Util.isNode()、Util.isEdge()
- feat: Shape polyLineFlow
- feat: dragEdgeEndHideAnchor、dragNodeEndHideAnchor、hoverAnchorSetActived、hoverNodeShowAnchor

#### 1.0.7

`2017-06-21`

- fix: draw one more time in 16ms after first draw
- improve: add zoom by scroll in edit mode

#### 1.0.6

`2017-06-15`

- fix: compatible in chrome in windows. triggering mousemove after first click leads to wrong click event.
- feat: support fix size graphics
- feat: analysis mode
- feat: updateNodesPositon update a set of nodes' position
- improve: change useAnchor to be a configuration of edge

#### 1.0.5

`2017-06-01`

- feat: downloadImage support saving with name
- feat: automatically detect tooltip padding
- improve: stop the action while mouse dragging out of the canvas

#### 1.0.4

`2017-05-20`

- fix: tree changeData Bug
- fix: when getAnchorPoints returns auto, anchor is the intersection of edge and the bounding box
- fix: generate node label according to isNull
- feat: viewport parameters -- tl、tc、tr、rc、br、bc、bl、lc、cc
- improve: reduce tolerance to improve the accuracy of interception
- improve: improve tooltip event mechanisom to enhance performance

#### 1.0.3

`2017-05-10`

- feat: graph.guide().link()

#### 1.0.2

`2017-05-10`

- fix: Object.values => Util.getObjectValues
- fix: when anchorPoints is auto, there is only anchorpoint on edge, it will also return the intersection
- fix: tree update interface Bug
- improve: represent positions information by group.transfrom()

#### 1.0.1

`2017-04-22`

- fix: copy and paste bug
- feat: draw once in 16ms
- feat: itemactived itemunactived itemhover itemupdate itemmouseenter itemmouseleave
- improve: be clear the status of graphics before activating graphics by frame selection
- improve: dragAddEdge, linkable to anchor
- improve: performance of animation

#### 1.0.0

`2017-03-31`

- feat: fitView configurations
- feat: graph.zoom()
- feat: wheelZoomHideEdges hide the edges while zooming by wheel
- feat: dragHideEdges hide the edge while dragging edge
- feat: graph.filterBehaviour()
- feat: graph.addBehaviour()
- feat: graph.changeLayout()
- feat: read interface, re-define save interface
- feat: graph.snapshot, graph.downloadImage
- feat: graph.autoSize()
- feat: graph.focusPoint()
- feat: tree graph、net graph
- feat: interaction mechanism -- event => action => mode
- feat: animation mechanism
- feat: itemmouseleave、itemmouseenter
- remove: graph.refresh()
- remove: graph.changeNodes()
- remove: graph attributes -- zoomable、draggable、resizeable、selectable
- improve: anchor mechanism
- improve: hide G6.GraphUtil functions, unified in G6.Util
- improve: replace g-canvas-core to g-canvas to improve performance
- improve: Global.nodeAcitveBoxStyle instead of Global.nodeBoxStyle
- improve: afterAdd => afteradd
- improve: G6.Graph to be an abstract class

#### 0.2.3

`2017-03-2`

- fix: draggable for controlling draggable under default mode
- feat: graph.converPoint()
- feat: graph.autoSize()
- feat: rightmousedown leftmousedown wheeldown
- improve: use try catch to prevent the length of getPoint of path equals zero

#### 0.2.2

`2017-02-24`

- fix: add px totooltip css padding
- fix: tooltip mapping error
- fix: accurate intersection
- fix: zoom error on double accuracy screen
- fix: buonding box extended from keyShape
- feat: afterAdd
- feat: dblclick
- improve: width、height default null
- improve: remove hovershape on node
- improve: tooltip defense mechanism

#### 0.2.1

`2017-02-14`

- fix: rollback when add node
- fix: apply tranformation of parent container while calculating bounding box
- feat: waterPath
- feat: tooltip tip information
- feat: mouseover
- feat: multiSelectable, default false
- feat: set forceFit to true while width is undefined
- improve: zoomable、draggable、resizeable、selectable default true

#### 0.2.0

`2017-02-07`

- feat: accurate anchor mechanism
- feat: GraphUtil.getEllipsePath
- feat: GraphUtil.pointsToPolygon
- feat: GraphUtil.pointsToBezier
- feat: GraphUtil.snapPreciseAnchor
- feat: GraphUtil.arrowTo
- feat: GraphUtil.drawEdge
- feat: bezierQuadratic
- feat: node.show
- feat: node.hide
- feat: node.getLinkNodes
- feat: node.getUnLinkNodes
- feat: node.getRelativeItems
- feat: node.getUnRelativeItems
- feat: edge.show
- feat: edge.hide
- feat: Shape afterDraw
- improve: the controlling point positions of Bezier Curve 改进贝塞尔曲线控制点位置
- improve: grpah.delete => graph.del
- improve: error when adding id

#### 0.1.4

`2017-01-17`

- fix: delegator of dragging a node is the center of bbox
- fix: use cardinality sort for all the sorting algorithm
- fix: random id on edges
- feat: level sort on edges, edge labels on the top level
- feat: while extending shape is undefined when register an edge, find the extending shaoe automatically

#### 0.1.3

`2017-01-15`

- fix: judge the existance of the object while operating assistGrid
- feat: rollback judgement, default unactivate
- feat: style mapping channel
- feat: return the intersections while getAnchorPoints is null or returns false
- feat: bezierHorizontal、bezierVertical
- improve: 'eventEnd'

#### 0.1.2

`2017-01-12`

- fix: judge the configuration before updating grid
- fix: the size of graphContainer in unsetable, setted by inner canvas
- fix: will not add an edge if the target or source is undefined
- fix: changeSize() maximum tolerance for error
- feat: graph.get('el') to get canvas DOM
- feat: event exposures shape

#### 0.1.1

`2017-01-09`

- feat: entrance of graph is G6.Graph

#### 0.1.0

`2017-01-07`

- feat: color calculation library
- feat: hot key
- feat: updo, redo
- feat: copy, paste
- feat: reset zoom, auto zoom
- feat: tree graph, linear graph, sankey graph, flow laout
- feat: flow chart package
- feat: timing diagram package
- feat: single selection, frame selection
- feat: node deformation
- feat: edge deformation
- feat: drag node and edge
- feat: link edge and node
- feat: drag canvas
- feat: zoom
- feat: select mode
- feat: integrate g-graph