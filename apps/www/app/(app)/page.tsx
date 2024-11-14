import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/examples-nav";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { siteConfig } from "@/config/site";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { THEMES } from "@/lib/themes"
import { ChartDisplay } from "@/components/chart-display"
import { ChartsNav } from "@/components/charts-nav"
import { ThemesSwitcher } from "@/components/themes-selector"
import { ThemesStyle } from "@/components/themes-styles"
import { Separator } from "@/registry/new-york/ui/separator"
import * as Charts from "@/app/(app)/charts/charts"
import { VarientsNav } from "@/components/varients-nav";
import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
// import PageHeader from "@/demo/page-header";

const inputDir = "inputs";
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  // "input-16",
  // "input-17",
  // "input-18",
  // "input-19",
  // "input-20",
  // "input-21",
  // "input-22",
  // "input-23",
  // "input-24",
  // "input-25",
  // "input-26",
  // "input-27",
  // "input-28",
  // "input-29",
  // "input-30",
  // "input-31",
  // "input-32",
  // "input-33",
  // "input-34",
  // "input-35",
  // "input-36",
  // "input-37",
  // "input-38",
  // "input-39",
  // "input-40",
  // "input-41",
  // "input-42",
  // "input-43",
  // "input-44",
  // "input-45",
  // "input-46",
  // "input-47",
  // "input-48",
  // "input-49",
  // "input-50",
  // "input-51",
  // "input-52",
  // "input-53",
  // "input-54",
  // "input-55",
  // "input-56",
  // "input-57",
];

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  // "textarea-06",
  // "textarea-07",
  // "textarea-08",
  // "textarea-09",
  // "textarea-10",
  // "textarea-11",
  // "textarea-12",
  // "textarea-13",
  // "textarea-14",
  // "textarea-15",
  // "textarea-16",
  // "textarea-17",
  // "textarea-18",
  // "textarea-19",
];

const files = [...inputFiles, ...textareaFiles];

export default function IndexPage() {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Beautiful Varients</PageHeaderHeading>
        <PageHeaderDescription>
          Explore some varients. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#charts">Browse Varients</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/components/chart">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container py-6">
        <section id="charts" className="scroll-mt-20">
          <div className="grid gap-4">
            <VarientsNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
            <div className="px-1">
              <div className="w-full">
                <div className="grid w-full grid-cols-1 gap-2 overflow-hidden pb-4 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {inputFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        key={componentName}
                        directory={inputDir}
                        componentName={componentName}
                      />
                    );
                  })}
                  {textareaFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        key={componentName}
                        directory={textareaDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>
                {/* <Link className="absolute bottom-2 left-1/2 translate-x-[-50%] rounded-full border px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href="/varients/inputs">See more Input Varients</Link> */}
              </div>
              <Separator />

            </div>
            {/* <ThemesStyle />
            <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
              <ThemesSwitcher
                themes={THEMES}
                className="fixed inset-x-0 bottom-0 z-40 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:sticky lg:bottom-auto lg:top-20"
              />
              <div className="grid flex-1 gap-12">
                <h2 className="sr-only">Examples</h2>
                <div
                  id="examples"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-area-stacked">
                    <Charts.ChartAreaStacked />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-multiple">
                    <Charts.ChartBarMultiple />
                  </ChartDisplay>
                  <ChartDisplay
                    name="chart-pie-donut-text"
                    className="[&_[data-chart]]:xl:max-h-[243px]"
                  >
                    <Charts.ChartPieDonutText />
                  </ChartDisplay>
                </div>
                <Separator />
                <div
                  id="area-chart"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-area-default">
                    <Charts.ChartAreaDefault />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-linear">
                    <Charts.ChartAreaLinear />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-step">
                    <Charts.ChartAreaStep />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-stacked">
                    <Charts.ChartAreaStacked />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-stacked-expand">
                    <Charts.ChartAreaStackedExpand />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-legend">
                    <Charts.ChartAreaLegend />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-icons">
                    <Charts.ChartAreaIcons />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-gradient">
                    <Charts.ChartAreaGradient />
                  </ChartDisplay>
                  <ChartDisplay name="chart-area-axes">
                    <Charts.ChartAreaAxes />
                  </ChartDisplay>
                  <div className="md:col-span-2 lg:col-span-3">
                    <ChartDisplay name="chart-area-interactive">
                      <Charts.ChartAreaInteractive />
                    </ChartDisplay>
                  </div>
                </div>
                <Separator />
                <div
                  id="bar-chart"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-bar-default">
                    <Charts.ChartBarDefault />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-horizontal">
                    <Charts.ChartBarHorizontal />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-multiple">
                    <Charts.ChartBarMultiple />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-label">
                    <Charts.ChartBarLabel />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-label-custom">
                    <Charts.ChartBarLabelCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-mixed">
                    <Charts.ChartBarMixed />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-stacked">
                    <Charts.ChartBarStacked />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-active">
                    <Charts.ChartBarActive />
                  </ChartDisplay>
                  <ChartDisplay name="chart-bar-negative">
                    <Charts.ChartBarNegative />
                  </ChartDisplay>
                  <div className="md:col-span-2 lg:col-span-3">
                    <ChartDisplay name="chart-bar-interactive">
                      <Charts.ChartBarInteractive />
                    </ChartDisplay>
                  </div>
                </div>
                <Separator />
                <div
                  id="line-chart"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-line-default">
                    <Charts.ChartLineDefault />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-linear">
                    <Charts.ChartLineLinear />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-step">
                    <Charts.ChartLineStep />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-multiple">
                    <Charts.ChartLineMultiple />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-dots">
                    <Charts.ChartLineDots />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-dots-custom">
                    <Charts.ChartLineDotsCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-dots-colors">
                    <Charts.ChartLineDotsColors />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-label">
                    <Charts.ChartLineLabel />
                  </ChartDisplay>
                  <ChartDisplay name="chart-line-label-custom">
                    <Charts.ChartLineLabelCustom />
                  </ChartDisplay>
                  <div className="md:col-span-2 lg:col-span-3">
                    <ChartDisplay name="chart-line-interactive">
                      <Charts.ChartLineInteractive />
                    </ChartDisplay>
                  </div>
                </div>
                <Separator />
                <div
                  id="pie-chart"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-pie-simple">
                    <Charts.ChartPieSimple />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-separator-none">
                    <Charts.ChartPieSeparatorNone />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-label">
                    <Charts.ChartPieLabel />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-label-custom">
                    <Charts.ChartPieLabelCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-label-list">
                    <Charts.ChartPieLabelList />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-legend">
                    <Charts.ChartPieLegend />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-donut">
                    <Charts.ChartPieDonut />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-donut-active">
                    <Charts.ChartPieDonutActive />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-donut-text">
                    <Charts.ChartPieDonutText />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-stacked">
                    <Charts.ChartPieStacked />
                  </ChartDisplay>
                  <ChartDisplay name="chart-pie-interactive">
                    <Charts.ChartPieInteractive />
                  </ChartDisplay>
                </div>
                <Separator />
                <div
                  id="radar-chart"
                  className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-radar-default">
                    <Charts.ChartRadarDefault />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-dots">
                    <Charts.ChartRadarDots />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-multiple">
                    <Charts.ChartRadarMultiple />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-lines-only">
                    <Charts.ChartRadarLinesOnly />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-label-custom">
                    <Charts.ChartRadarLabelCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-radius">
                    <Charts.ChartRadarRadius />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-custom">
                    <Charts.ChartRadarGridCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-fill">
                    <Charts.ChartRadarGridFill />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-none">
                    <Charts.ChartRadarGridNone />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-circle">
                    <Charts.ChartRadarGridCircle />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-circle-no-lines">
                    <Charts.ChartRadarGridCircleNoLines />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-grid-circle-fill">
                    <Charts.ChartRadarGridCircleFill />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-legend">
                    <Charts.ChartRadarLegend />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radar-icons">
                    <Charts.ChartRadarIcons />
                  </ChartDisplay>
                </div>
                <Separator />
                <div
                  id="radial-chart"
                  className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-radial-simple">
                    <Charts.ChartRadialSimple />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radial-label">
                    <Charts.ChartRadialLabel />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radial-grid">
                    <Charts.ChartRadialGrid />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radial-text">
                    <Charts.ChartRadialText />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radial-shape">
                    <Charts.ChartRadialShape />
                  </ChartDisplay>
                  <ChartDisplay name="chart-radial-stacked">
                    <Charts.ChartRadialStacked />
                  </ChartDisplay>
                </div>
                <Separator />
                <div
                  id="tooltip"
                  className="chart-wrapper grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <ChartDisplay name="chart-tooltip-default">
                    <Charts.ChartTooltipDefault />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-indicator-line">
                    <Charts.ChartTooltipIndicatorLine />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-indicator-none">
                    <Charts.ChartTooltipIndicatorNone />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-label-custom">
                    <Charts.ChartTooltipLabelCustom />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-label-formatter">
                    <Charts.ChartTooltipLabelFormatter />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-label-none">
                    <Charts.ChartTooltipLabelNone />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-formatter">
                    <Charts.ChartTooltipFormatter />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-icons">
                    <Charts.ChartTooltipIcons />
                  </ChartDisplay>
                  <ChartDisplay name="chart-tooltip-advanced">
                    <Charts.ChartTooltipAdvanced />
                  </ChartDisplay>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
    //   <div className="relative">
    //   <PageHeader>
    //     <Announcement />
    //     <PageHeaderHeading>Build your component library</PageHeaderHeading>
    //     <PageHeaderDescription>
    //       Beautifully designed components that you can copy and paste into your
    //       apps. Made with Tailwind CSS. Open source.
    //     </PageHeaderDescription>
    //     <PageActions>
    //       <Button asChild size="sm">
    //         <Link href="/docs">Get Started</Link>
    //       </Button>
    //       <Button asChild size="sm" variant="ghost">
    //         <Link
    //           target="_blank"
    //           rel="noreferrer"
    //           href={siteConfig.links.github}
    //         >
    //           GitHub
    //         </Link>
    //       </Button>
    //     </PageActions>
    //   </PageHeader>
    //   <div className="container py-6">
    //     <section>
    //       <ExamplesNav />
    //     </section>
    //   </div>
    // </div>
    // <div className="relative flex min-h-[500px] items-center justify-center">
    //   <PageHeader className="border-none">
    //     <PageHeaderHeading className="text-center ">Explore Varients</PageHeaderHeading>
    //     <PageHeaderDescription>
    //       See some varients. Copy and paste into your apps. Open Source.
    //     </PageHeaderDescription>
    //     <section className="mx-auto mt-4 h-[250px] w-full space-y-1">
    //       <div className="top flex items-center justify-center space-x-1">
    //         <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-tl-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
    //           <h3>Power Modes</h3>
    //           <span className="flex h-8 w-8 items-center justify-center rounded-full border">3</span>
    //         </div>
    //         <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-tr-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
    //           <h3>Fluids</h3>
    //           <span className="flex h-8 w-8 items-center justify-center rounded-full border">10</span>
    //         </div>
    //       </div>
    //       <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-b-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
    //         <h3>Switchers</h3>
    //         <span className="flex h-8 w-8 items-center justify-center rounded-full border">13</span>
    //       </div>
    //     </section>

    //     {/* <PageActions>
    //       <Button asChild size="sm">
    //         <a href="#charts">Browse Charts</a>
    //       </Button>
    //       <Button asChild variant="ghost" size="sm">
    //         <Link href="/docs/components/chart">Documentation</Link>
    //       </Button>
    //     </PageActions> */}
    //   </PageHeader>
    // </div>
  )
}
