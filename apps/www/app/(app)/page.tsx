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

export default function IndexPage() {

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
        <div className="h-full w-full border-b  border-r p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Components</h1>
          <span className="text-muted-foreground">Building Blocks for your software.</span>
        </div>
        <div className="h-full w-full border-b  border-r p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Icons</h1>
          <span className="text-muted-foreground">Icons for everyone.</span>
        </div>
        <div className="h-full w-full border-b  p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Animations</h1>
          <span className="text-muted-foreground">Animations for everyone.</span>
        </div>
        <div className="h-full w-full border-b  border-r p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Systems</h1>
          <span className="text-muted-foreground">Make it yours.</span>
        </div>
        <div className="h-full w-full border-b  border-r p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
          <h1 className="text-primary">Fonts</h1>
          <span className="text-muted-foreground">Fonts for everyone.</span>
        </div>
        <div className="h-full w-full border-b  p-8 text-muted-foreground hover:bg-primary-foreground hover:text-primary ">
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
