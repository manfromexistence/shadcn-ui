import { Announcement } from "@/components/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { THEMES } from "@/lib/themes"
import { ChartDisplay } from "@/components/chart-display"
import { ChartsNav } from "@/components/charts-nav"
import { ThemesSwitcher } from "@/components/themes-selector"
import { ThemesStyle } from "@/components/themes-styles"
import { Separator } from "@/registry/new-york/ui/separator"
import * as Charts from "@/app/(app)/charts/charts"

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
            <ChartsNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
            <ThemesStyle />
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
            </div>
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
