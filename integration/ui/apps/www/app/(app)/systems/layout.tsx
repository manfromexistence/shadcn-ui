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
  title: "Systems",
  description: "Things to consider or at least consider at first to not consider anything.",
}

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Manfromexistence Systems</PageHeaderHeading>
        <PageHeaderDescription>
          Beautiful systems to do whatever you like.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#systems">Browse Systems</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/theming">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container py-6">
        <section id="systems" className="scroll-mt-20">
          {children}
        </section>
      </div>
    </div>
  )
}
