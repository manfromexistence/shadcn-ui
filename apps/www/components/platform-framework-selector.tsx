"use client"

import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/registry/new-york/ui/dropdown-menu"
import { Separator } from "@/registry/new-york/ui/separator"
import { Icons } from "@/components/icons"
import { Input } from "@/registry/new-york/ui/input"

const PLATFORMS = [
  { label: "Website / Web App", value: "website", icon: <Icons.logo className="h-4 w-4" /> },
  { label: "Mobile App", value: "mobile", icon: <Icons.apple className="h-4 w-4" /> },
  { label: "Desktop App", value: "desktop", icon: <Icons.gitHub className="h-4 w-4" /> },
  { label: "Game", value: "game", icon: <Icons.react className="h-4 w-4" /> },
  { label: "AR/VR App", value: "arvr", icon: <Icons.radix className="h-4 w-4" /> },
  { label: "Data Science Tool", value: "datasci", icon: <Icons.npm className="h-4 w-4" /> },
]

const FRAMEWORKS = [
  { label: "React", value: "react", icon: <Icons.react className="h-4 w-4" /> },
  { label: "Angular", value: "angular", icon: <Icons.aria className="h-4 w-4" /> },
  { label: "Vue.js", value: "vue", icon: <Icons.yarn className="h-4 w-4" /> },
  { label: "Django", value: "django", icon: <Icons.gitHub className="h-4 w-4" /> },
  { label: "Express.js", value: "express", icon: <Icons.npm className="h-4 w-4" /> },
  { label: "Flutter", value: "flutter", icon: <Icons.apple className="h-4 w-4" /> },
  { label: "Unity", value: "unity", icon: <Icons.react className="h-4 w-4" /> },
  { label: "Unreal Engine", value: "unreal", icon: <Icons.gitHub className="h-4 w-4" /> },
  { label: "Streamlit", value: "streamlit", icon: <Icons.npm className="h-4 w-4" /> },
]

export function PlatformFrameworkSelector() {
  const [platform, setPlatform] = React.useState(PLATFORMS[0].value)
  const [framework, setFramework] = React.useState(FRAMEWORKS[0].value)
  const [search, setSearch] = React.useState("")

  const filteredFrameworks = FRAMEWORKS.filter(f =>
    f.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex items-center gap-2">
      {/* Platform Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            {PLATFORMS.find(p => p.value === platform)?.icon}
            <span className="sr-only">Select platform</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Platform</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {PLATFORMS.map(p => (
            <DropdownMenuItem
              key={p.value}
              onClick={() => setPlatform(p.value)}
              className={platform === p.value ? "font-semibold" : ""}
            >
              {p.icon}
              {p.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Separator */}
      <Separator orientation="vertical" className="mx-1 h-6" />
      {/* Framework Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            {FRAMEWORKS.find(f => f.value === framework)?.icon}
            <span className="sr-only">Select framework</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuLabel>Framework</DropdownMenuLabel>
          <div className="px-2 py-1">
            <Input
              placeholder="Search framework..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="h-7 text-xs"
            />
          </div>
          <DropdownMenuSeparator />
          {filteredFrameworks.length === 0 ? (
            <div className="px-2 py-2 text-xs text-muted-foreground">No results</div>
          ) : (
            filteredFrameworks.map(f => (
              <DropdownMenuItem
                key={f.value}
                onClick={() => setFramework(f.value)}
                className={framework === f.value ? "font-semibold" : ""}
              >
                {f.icon}
                {f.label}
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
