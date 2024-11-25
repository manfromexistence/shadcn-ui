"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import CardsNewYork from "@/registry/new-york/example/cards"
import { Button } from "@/registry/new-york/ui/button"
import { ConfigProvider, FloatButton, theme } from "antd"

export default function IndexPage() {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container py-6">
        <ConfigProvider
          theme={{
            // 1. Use dark algorithm
            algorithm: theme.darkAlgorithm,

            // 2. Combine dark algorithm and compact algorithm
            // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
          }}>
          <FloatButton />
        </ConfigProvider>

        {/* <ExamplesNav className="[&>a:first-child]:text-primary" />
        <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
          <Image
            src="/examples/cards-light.png"
            width={1280}
            height={1214}
            alt="Cards"
            className="block dark:hidden"
          />
          <Image
            src="/examples/cards-dark.png"
            width={1280}
            height={1214}
            alt="Cards"
            className="hidden dark:block"
          />
        </section>
        <section className="hidden md:block [&>div]:p-0">
          <CardsNewYork />
        </section> */}
      </div>
    </div>
  )
}

// import { Announcement } from "@/components/announcement"
// import {
//   PageActions,
//   PageHeader,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from "@/components/page-header"
// import { ThemeCustomizer } from "@/components/theme-customizer-1"
// import { ThemeWrapper } from "@/components/theme-wrapper"
// import CardsNewYork from "@/registry/new-york/example/cards"

// import "public/registry/themes.css"

// export default function ThemesPage() {

//   return (
//     <div className="relative">
//       <ThemeWrapper
//         defaultTheme="zinc"
//         className="relative flex w-full flex-col items-start md:flex-row"
//       >
//         <PageHeader className="w-full">
//           <Announcement />
//           <PageHeaderHeading className="hidden md:block">
//             Add colors. Make it yours.
//           </PageHeaderHeading>
//           <PageHeaderHeading className="md:hidden">
//             Make it yours
//           </PageHeaderHeading>
//           <PageHeaderDescription>
//             Hand-picked themes that you can copy and paste into your apps.
//           </PageHeaderDescription>
//           <PageActions>
//             <ThemeCustomizer />
//           </PageActions>
//         </PageHeader>
//       </ThemeWrapper>
//       <div className="container py-6">
//         <section id="themes" className="scroll-mt-20">
//           <div className="space-y-8">
//             <ThemeWrapper>
//               <CardsNewYork />
//             </ThemeWrapper>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
