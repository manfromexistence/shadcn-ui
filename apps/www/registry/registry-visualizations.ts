import { Registry } from "@/registry/schema"

export const visualizations: Registry = [
    {
        name: "area",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/area/demo/area.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Area Chart",
    },
    {
        name: "with-negative",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/area/demo/with-negative.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Area Chart With Negative Values",
    },
    {
        name: "with-negative-not-start-on-zero",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/area/demo/with-negative-not-start-on-zero.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Area Chart With Negative Values ​​(x Baseline Not 0)",
    },
    {
        name: "gradient",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/area/demo/gradient.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Gradient Filled Area Chart",
    },
    {
        name: "stacked",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/stacked/demo/stacked.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Stacked Area Chart",
    },
    {
        name: "area-none",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/stacked/demo/area-none.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Area Chart (with Null Values)",
    },
    {
        name: "percent",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/area/stacked/demo/percent.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Percent Stacked Area Chart",
    },
    {
        name: "bar",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/bar/demo/bar.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Bar Chart",
    },
    {
        name: "range",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/bar/demo/range.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Range Bar Chart",
    },
    {
        name: "dodge",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/dodge/demo/dodge.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Grouped Bar Chart",
    },
    {
        name: "negetive",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/dodge/demo/negetive.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "With Negative Values",
    },
    {
        name: "stack",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/stack/demo/stack.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Stacked Bar Chart",
    },
    {
        name: "percent",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/bar/stack/demo/percent.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Percent Stacked Bar Chart",
    },
    {
        name: "base",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/basic/demo/base.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Demo",
    },
    {
        name: "base",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/candlestick/candlestick/demo/base.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic K-line Chart",
    },
    {
        name: "column",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/column.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Column Chart",
    },
    {
        name: "pictorial",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/pictorial.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Custom Column Chart",
    },
    {
        name: "selection",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/selection.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Column Chart Selection",
    },
    {
        name: "pan",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/pan.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Column Chart Panning",
    },
    {
        name: "ranged",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/ranged.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Range Column Chart",
    },
    {
        name: "gradient",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/gradient.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Gradient Column Chart",
    },
    {
        name: "pattern",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/column/demo/pattern.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Patterned Column Chart",
    },
    {
        name: "dodge",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/dodge/demo/dodge.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Grouped Column Chart",
    },
    {
        name: "negetive",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/dodge/demo/negetive.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Grouped Column Chart With Negative Values",
    },
    {
        name: "stack",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/stack/demo/stack.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Stacked Column Chart",
    },
    {
        name: "percent",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/column/stack/demo/percent.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Percent Stacked Column Chart",
    },
    {
        name: "text",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/text.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Text Annotation",
    },
    {
        name: "point",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/point.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Point Label",
    },
    {
        name: "image",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/image.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Picture",
    },
    {
        name: "line",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/line.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Auxiliary Line",
    },
    {
        name: "lottie",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/lottie.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Lottie Label",
    },
    {
        name: "linestep",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/linestep.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Polyline Annotation",
    },
    {
        name: "custom",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/guide/demo/custom.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Customize",
    },
    {
        name: "custom",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/legend/demo/custom.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Custom Legend",
    },
    {
        name: "shape",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/shape/demo/shape.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Graphic Label",
    },
    {
        name: "event",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/component/shape/demo/event.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Graphic Label Interaction",
    },
    {
        name: "timeline",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/timeline.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Changes In Each Chart",
    },
    {
        name: "interval-timeline",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/interval-timeline.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Histogram Series Changes",
    },
    {
        name: "pie-timeline",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/pie-timeline.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Pie Chart Series Changes",
    },
    {
        name: "race-country",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/race-country.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Histogram Dynamic Sorting",
    },
    {
        name: "line-race",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/line-race.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Line Chart Dynamic Sorting",
    },
    {
        name: "player",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/player.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Line Chart Animation",
    },
    {
        name: "apple-watch",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/apple-watch.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Apple Watch Activity Log",
    },
    {
        name: "radar",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/radar.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Radar Chart Animation",
    },
    {
        name: "landscape",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/case/demo/landscape.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Horizontal Display",
    },
    {
        name: "rough",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/creative/plugin/demo/rough.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Hand Drawn Style",
    },
    {
        name: "funnel",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/funnel/funnel/demo/funnel.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Funnel Chart",
    },
    {
        name: "stroke",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/funnel/funnel/demo/stroke.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "There Is Spacing",
    },
    {
        name: "pyramid",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/funnel/pyramid/demo/pyramid.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Pyramid Diagram",
    },
    {
        name: "stroke",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/funnel/pyramid/demo/stroke.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "There Is Spacing",
    },
    {
        name: "scale",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/funnel/pyramid/demo/scale.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Rotate Down",
    },
    {
        name: "gold",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/dynamic/demo/gold.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "A Certain Gold Real-time Gold Price Trend Chart",
    },
    {
        name: "dynamic",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/dynamic/demo/dynamic.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Real-time Polyline",
    },
    {
        name: "line",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/line/demo/line.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Base",
    },
    {
        name: "with-point",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/line/demo/with-point.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "With Some",
    },
    {
        name: "smooth",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/line/demo/smooth.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Curve",
    },
    {
        name: "step",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/line/demo/step.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Ladder",
    },
    {
        name: "pan",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/line/demo/pan.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Line Chart Pan",
    },
    {
        name: "series",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/multiple/demo/series.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Trend Comparison",
    },
    {
        name: "shapes",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/multiple/demo/shapes.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Comparison Between Dashed And Solid Lines",
    },
    {
        name: "customize-tootlip",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/multiple/demo/customize-tootlip.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Polyline Drawing Points",
    },
    {
        name: "null",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/other/demo/null.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Null Value Exists",
    },
    {
        name: "connect-null",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/line/other/demo/connect-null.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Join Null Data",
    },
    {
        name: "gauge",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/other/area/demo/gauge.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Dashboard",
    },
    {
        name: "custom-gauge",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/other/area/demo/custom-gauge.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Custom Dashboard",
    },
    {
        name: "donut",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/donut/demo/donut.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Donut Chart",
    },
    {
        name: "donut-radius",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/donut/demo/donut-radius.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Rounded Donut Chart",
    },
    {
        name: "double-donut",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/donut/demo/double-donut.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Double Donut Chart",
    },
    {
        name: "cascade",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/donut/demo/cascade.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Nested Ring Graph",
    },
    {
        name: "progress-bar",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/donut/demo/progress-bar.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Circular Progress Bar",
    },
    {
        name: "pie",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/pie/demo/pie.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Basic Pie Chart",
    },
    {
        name: "labelline-pie",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/pie/demo/labelline-pie.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "With Label",
    },
    {
        name: "pie-with-label",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/pie/demo/pie-with-label.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Pie Chart With Legend, Text",
    },
    {
        name: "selection",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/pie/demo/selection.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Pie Chart Selected",
    },
    {
        name: "rose",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/pie/rose/demo/rose.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Rose Diagram",
    },
    {
        name: "scatter",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/point/scatter/demo/scatter.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Scatter Plot",
    },
    {
        name: "bubble",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/point/scatter/demo/bubble.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Bubble Chart",
    },
    {
        name: "ordered-bubble",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/point/scatter/demo/ordered-bubble.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Usage Comparison",
    },
    {
        name: "roam",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/point/scatter/demo/roam.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Bubble Chart Zoom Pan",
    },
    {
        name: "radar",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/radar/radar/demo/radar.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Radar Chart",
    },
    {
        name: "area",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/radar/radar/demo/area.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Radar Area Chart",
    },
    {
        name: "radar-grid",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/radar/radar/demo/radar-grid.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Radar Chart - Grid Lines",
    },
    {
        name: "radar-fill",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/radar/radar/demo/radar-fill.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Radar Chart - Grid Background",
    },
    {
        name: "flamegraph",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/relation/flamegraph/demo/flamegraph.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Flame Graph",
    },
    {
        name: "sunburst",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/relation/sunburst/demo/sunburst.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Sunburst",
    },
    {
        name: "treemap",
        type: "registry:block",
        registryDependencies: [],
        dependencies: ["@antv/f2"],
        files: [
            {
                path: "visualizations/relation/treemap/demo/treemap.tsx",
                type: "registry:block",
            },
        ],
        category: "Charts",
        subcategory: "Rectangular Tree Diagram",
    },
]
