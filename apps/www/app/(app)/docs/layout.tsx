import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container-wrapper">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
        <ScrollArea className="h-full pr-6">
          <DocsNav config={docsConfig} />
        </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
