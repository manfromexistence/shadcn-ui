"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"

const links = [
  {
    name: "Buttons",
    href: "/varients#buttons",
  },
  {
    name: "Inputs",
    href: "/varients#inputs",
  },
  {
    name: "Selects",
    href: "/varients#selects",
  },
  {
    name: "Checkboxes",
    href: "/varients#checkboxes",
  },
  {
    name: "Radios",
    href: "/varients#radios",
  },
  {
    name: "Switches",
    href: "/varients#switches",
  },
]

export function VarientsNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname()

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn("flex items-center", className)} {...props}>
        {links.map((example, index) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              pathname?.startsWith(example.href) ||
                (index === 0 && pathname === "/")
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground"
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  )
}
