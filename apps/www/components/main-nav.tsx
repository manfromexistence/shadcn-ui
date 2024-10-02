"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="flex items-center lg:mr-6">
        <Image className="invert dark:invert-0" src="/ui.png" height={40} width={40} alt="ui" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>

        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/fluids"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/fluids")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Fluids
        </Link>
        <Link
          href="/swithcers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/swithcers")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Swithcers
        </Link>
        <Link
          href="/visualizers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/visualizers")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Visualizers
        </Link>
        <Link
          href="/templates"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/templates")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Templates
        </Link>
      </nav>
    </div>
  )
}
