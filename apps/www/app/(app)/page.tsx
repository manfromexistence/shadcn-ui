import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ThemeCustomizer } from "@/components/theme-customizer-1"
import { ThemeWrapper } from "@/components/theme-wrapper"
import CardsNewYork from "@/registry/new-york/example/cards"

import "public/registry/themes.css"

export default function ThemesPage() {
  return (
    <div className="relative">
      <ThemeWrapper
        defaultTheme="zinc"
        className="relative flex w-full flex-col items-start md:flex-row"
      >
        <PageHeader className="w-full">
          <Announcement />
          <PageHeaderHeading className="hidden md:block">
            Add colors. Make it yours.
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">
            Make it yours
          </PageHeaderHeading>
          <PageHeaderDescription>
            Hand-picked themes that you can copy and paste into your apps.
          </PageHeaderDescription>
          <PageActions>
            <ThemeCustomizer />
          </PageActions>
        </PageHeader>
      </ThemeWrapper>
      <div className="container py-6">
        <section id="themes" className="scroll-mt-20">
        <div className="space-y-8">
      <ThemeWrapper>
        <CardsNewYork />
      </ThemeWrapper>
    </div>
        </section>
      </div>
    </div>
  )
}
