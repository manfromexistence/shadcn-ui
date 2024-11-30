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
  title: "Fonts",
  description: "All fonts.",
}

export default function FontsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Manfromexistence Fonts</PageHeaderHeading>
        <PageHeaderDescription>
          Beautiful fonts all in one place.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#fonts">Browse Fonts</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/theming">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container py-6">
        <section id="fonts" className="scroll-mt-20">
          {children}
        </section>
      </div>
    </div>
  )
}
