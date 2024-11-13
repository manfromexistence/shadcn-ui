import { Announcement } from "@/components/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="relative flex min-h-[500px] items-center justify-center">
      {/* <h1 className="">Hello manfromexistence/ui</h1> */}
      <PageHeader className="border-none">
        {/* <Announcement /> */}
        <PageHeaderHeading className="text-center ">Explore Varients</PageHeaderHeading>
        <PageHeaderDescription>
          See some varients. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <section className="mx-auto mt-4 h-[250px] w-full space-y-1">
          <div className="top flex items-center justify-center space-x-1">
            <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-tl-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
              <h3>Power Modes</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border">3</span>
            </div>
            <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-tr-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
              <h3>Fluids</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border">10</span>
            </div>
          </div>
          <div className="flex h-[125px] w-full flex-col items-center justify-center space-y-1 rounded-b-lg border text-primary/70 hover:bg-primary-foreground hover:text-primary">
            <h3>Switchers</h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border">13</span>
          </div>
        </section>

        {/* <PageActions>
          <Button asChild size="sm">
            <a href="#charts">Browse Charts</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/components/chart">Documentation</Link>
          </Button>
        </PageActions> */}
      </PageHeader>
    </div>
  )
}
