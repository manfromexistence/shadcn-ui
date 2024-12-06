"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { AlarmClock, Apple, Axe, Ban, Beer, Bell, Bluetooth, Bookmark, BookMarked, BookOpenText, Box, Braces, Brain, Brush, Bug, Cable, Calendar, Carrot, CircleDashed, CircleSlash2, Citrus, Clapperboard, CloudSnow, CodeXml, Cog, Command, Copy, LayoutGrid, List, PartyPopper, PawPrint, ShieldEllipsis, UserPlus } from "lucide-react"

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

  const PlusIcon = ({ className, ...rest }: any) => {
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
        <PageHeaderHeading>A Ui space for everyone.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed Ui blocks that you can copy and paste into your
          apps. Made with Ant Design, Shadcn Ui, Tailwind CSS and Framer Motion. Open source.
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
      <div className="grid h-[500px] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/docs/components/dock" className="flex h-full w-full flex-col items-start justify-between border-b border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
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
                  <LayoutGrid className="h-5 w-5" />
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
        </Link>
        <Link href="/icons" className="flex h-full w-full flex-col justify-between border-b border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="grid h-24 w-full grid-cols-8 grid-rows-3 place-content-center items-center justify-center gap-8">
            <PartyPopper />
            <PawPrint />
            <AlarmClock />
            <Apple />
            <Axe />
            <Bell />
            <Beer />
            <BookOpenText />
            <Braces />
            <Box />
            <BookMarked />
            <Brush />
            <Bug />
            <Calendar />
            <Cable />
            <Carrot />
            <CircleDashed />
            <Citrus />
            <Clapperboard />
            <CircleSlash2 />
            <CloudSnow />
            <Cog />
            <Command />
            <CodeXml />
          </div>
          <div>
            <h1 className="text-primary">Icons</h1>
            <span className="text-muted-foreground">Icons for everyone.</span>
          </div>
        </Link>
        <Link href="/animations" className="flex h-full w-full  flex-col justify-between border-b p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="flex h-24 w-full justify-between">
            <div className="h-24 w-24 rounded-full border bg-secondary"></div>
            <div className="h-24 w-24 rounded-full border bg-secondary"></div>
            <div className="h-24 w-24 rounded-full border bg-secondary"></div>
            <div className="h-24 w-24 rounded-full border bg-secondary"></div>
          </div>
          <div>
            <h1 className="text-primary">Animations</h1>
            <span className="text-muted-foreground">Animations for everyone.</span>
          </div>
        </Link>
        <Link href="/systems" className="flex h-full w-full flex-col items-start justify-between border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="relative grid h-24 w-full grid-cols-9 border">
            <PlusIcon className="absolute -left-5 -top-5 h-10 w-10" />
            <PlusIcon className="absolute -bottom-5 -right-5 h-10 w-10" />

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
        </Link>
        <Link href="/fonts" className="flex h-full w-full flex-col justify-between border-r p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="flex h-24 w-full rounded-md border border-dashed">
            <span className="flex h-full w-full items-center justify-center border-r border-dashed text-2xl font-bold italic">Fonts Sans</span>
            <span className="flex h-full w-full items-center justify-center text-2xl font-bold">Fonts Mono</span>
          </div>
          <div>
            <h1 className="text-primary">Fonts</h1>
            <span className="text-muted-foreground">Fonts for everyone.</span>
          </div>
        </Link>
        <Link href="/colors" className="flex h-full w-full flex-col justify-between p-9 text-muted-foreground hover:bg-primary-foreground hover:text-primary">
          <div className="flex h-24 w-full justify-between">
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-red-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-green-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-yellow-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-teal-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-purple-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-fuchsia-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-blue-500" />
            </div>
            <div className="flex h-full w-8 items-center justify-center rounded-full border p-3">
              <div className="h-full w-2 rounded-full bg-orange-500" />
            </div>
          </div>
          <div>
            <h1 className="text-primary">Colors</h1>
            <span className="text-muted-foreground">Colors for everyone.</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
