/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-2 border-b border-border/40 py-8 dark:border-border md:py-10 lg:py-12",
        className
      )}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-balance text-lg font-light text-foreground",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 py-2",
        className
      )}
      {...props}
    />
  )
}

export const metadata: Metadata = {
  title: "Beautiful Visualizations",
  description:
    "Built using AntV. Copy and paste into your apps. Open Source.",
}

export default function VisualizationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader className="relative">
        <Announcement />
        <PageHeaderHeading>Beautiful Visualizations</PageHeaderHeading>
        <PageHeaderDescription>
          Built using AntV. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#Visualizations">Browse Visualizations</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/components/chart">Documentation</Link>
          </Button>
        </PageActions>
        {/* <div className="top-1/2 h-24 w-1/2 translate-y-[-50%] border md:absolute md:right-10">
          <span className="w-full text-xl">There are 500+ blokcs of visualizations blocks!</span>
          <pre className="w-min rounded-md bg-primary-foreground p-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground">npx shadcn@latest add "https://manfromexistence-ui.vercel.app/r/spinner"</pre>
        </div> */}
      </PageHeader>
      <div className="container py-6">
        <section id="Visualizations" className="scroll-mt-20">
          {children}
        </section>
      </div>
    </div>
  )
}
