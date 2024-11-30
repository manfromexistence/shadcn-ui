import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Icons",
  description: "All icons in all formats.",
}

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Manfromexistence Icons</PageHeaderHeading>
        <PageHeaderDescription>
          Beautiful icons in SVG and all the other formarts.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#icons">Browse Icons</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/theming">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container py-6">
        <section id="icons" className="scroll-mt-20">
          {children}
        </section>
      </div>
    </div>
  )
}
