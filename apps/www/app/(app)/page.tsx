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
import { Tooltip } from 'antd';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
import { Anchor, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader, Flex, Switch } from 'antd';
import CascaderDemo from "@/antd/cascader"
import InputNumberDemo from "@/antd/input-number"
import ColorPickerDemo from "@/antd/color-picker"
import RateDemo from "@/antd/rate"
import TranferDemo from "@/antd/transfer"
import MentionsDemo from "@/antd/mentions"
import TreeSelectDemo from "@/antd/treeselect"
import BadgeDemo from "@/antd/badge"
import QRCodeDemo from "@/antd/qr-code"
import SegmentedDemo from "@/antd/segmented"
import TimelineDemo from "@/antd/timeline"
import TourDemo from "@/antd/tour"
import TabsDemo from "@/antd/tabs"
import TreeDemo from "@/antd/tree"
import FloatButtonDemo from "@/antd/float-button"
import G2 from "./g2"
import X6 from "./x6"

import dynamic from 'next/dynamic';
import G6 from "./g6"
import { cn } from "@/lib/utils"
import { Copy, List, ShieldEllipsis, UserPlus } from "lucide-react"


const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
}
const CardBody = ({ className = "p-4" }) => (
  <div className={cn("text-left", className)}>
    <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">
      {cardContent.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300">
      {cardContent.description}
    </p>
  </div>
)

export default function IndexPage() {
  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        {...rest}
        className={cn("absolute size-6 text-black dark:text-white", className)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    )
  }
  const [bgBackground, setBgBackground] = useState<string>('');
  const [bgForeground, setBgForeground] = useState<string>('');

  const chartData = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];


  useEffect(() => {
    // Get the computed style of the root element
    const rootStyles = getComputedStyle(document.documentElement);

    // Extract the bg-background CSS variable value
    const bgBackgroundValue = rootStyles.getPropertyValue('--bg-background').trim();
    const bgForegroundValue = rootStyles.getPropertyValue('--bg-foreground').trim();

    // Set the value in state
    setBgBackground(bgBackgroundValue);
    setBgForeground(bgForegroundValue);
  }, []);

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
      {/* <div className="container py-6">
        <ConfigProvider
          theme={{
            "token": {
              "colorBgBase": `"hsl(240 10% 3.9%)"`,
              "colorBgSpotlight": `"hsl(240 3.7% 15.9%)"`,
              "colorTextBase": `"hsl(0 0% 98%)"`,
              "colorPrimary": "0 0% 98%",
              "borderRadius": 11
            }
          }}>
          <Tooltip title="prompt text">
            <Button variant="outline">Hover</Button>
          </Tooltip>
          <BadgeDemo />
          <SegmentedDemo />
          <QRCodeDemo />
          <InputNumberDemo />
          <TreeSelectDemo />
          <MentionsDemo />
          <RateDemo />
          <ColorPickerDemo />
          <TranferDemo />
          <CascaderDemo />
          <TimelineDemo />
          <TourDemo />
          <TabsDemo />
          <TreeDemo />
          <FloatButtonDemo />
        </ConfigProvider>
        <div>
          <h1 className="text-primary">G2</h1>
          <G2 data={chartData} />
        </div>
        <X6 />
      </div> */}
      <div className="grid h-[500px] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-full w-full flex-col items-start justify-between border-b border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="h-24 w-full space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex w-full items-center justify-between rounded-md border bg-primary-foreground p-3">
                <span className="text-sm">$ npx manfromeixtence-ui init</span>
                <Copy className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-center rounded-md border bg-primary-foreground p-3 text-sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Collabrators
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex rounded-md border bg-primary-foreground p-3">
                <ShieldEllipsis className="h-5 w-5" />
              </div>
              <div className="flex rounded-md border p-1.5">
                <div className="flex items-center justify-center rounded-md border bg-secondary p-1.5">
                  <List className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-center rounded-md p-1.5">
                  <List className="h-5 w-5" />
                </div>
              </div>
              <div className="flex h-12 w-full rounded-md border bg-primary-foreground text-sm">
                <span className="flex h-full items-center justify-center rounded-l-md bg-background px-3">
                  Label
                </span>
                <span className="flex h-full w-full flex-1 items-center border-l p-3">
                  Value
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-primary">Components</h1>
            <span className="text-muted-foreground">Building Blocks for your software.</span>
          </div>
        </div>
        <div className="h-full w-full border-b  border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Icons</h1>
          <span className="text-muted-foreground">Icons for everyone.</span>
        </div>
        <div className="h-full w-full border-b  p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Animations</h1>
          <span className="text-muted-foreground">Animations for everyone.</span>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-between border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="relative grid h-24 w-full grid-cols-9 border">
            <Icon className="absolute -left-5 -top-5 h-10 w-10" />
            <Icon className="absolute -bottom-5 -right-5 h-10 w-10" />

            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b border-r"></span>
            <span className="h-full w-full border-b"></span>

            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full border-r"></span>
            <span className="h-full w-full"></span>
          </div>
          <div>
            <h1 className="text-primary">Systems</h1>
            <span className="text-muted-foreground">Make it yours.</span>
          </div>
        </div>
        <div className="h-full w-full border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Fonts</h1>
          <span className="text-muted-foreground">Fonts for everyone.</span>
        </div>
        <div className="h-full w-full p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Colors</h1>
          <span className="text-muted-foreground">Colors for everyone.</span>
        </div>
      </div>

    </div>
  )
}


// import FormBuilder from '@/screens/form-builder'
// import React from 'react'

// export default function Renderers() {
//   return <FormBuilder />
// }

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
