"use client"

import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/new-york/ui/popover"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"
import { Icons } from "@/components/icons"
import { Input } from "@/registry/new-york/ui/input"

const PLATFORMS = [
  { label: "Website", value: "website", icon: <Icons.logo className="h-4 w-4" /> },
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
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            {PLATFORMS.find(p => p.value === platform)?.icon}
            <span className="sr-only">Select platform</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            {FRAMEWORKS.find(f => f.value === framework)?.icon}
            <span className="sr-only">Select framework</span>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[450px] p-0">
        <div className="flex">
          {/* Platform Sidebar */}
          <div className="w-1/2 border-r p-4 space-y-2">
            {PLATFORMS.map(p => (
              <button
                key={p.value}
                onClick={() => setPlatform(p.value)}
                className={`flex items-center gap-2 w-full text-left ${platform === p.value ? 'font-semibold' : ''}`}
              >
                {p.icon}
                <span className="text-sm">{p.label}</span>
              </button>
            ))}
          </div>
          {/* Framework List with Search and ScrollArea */}
          <div className="w-1/2 p-4 flex flex-col">
            <Input
              placeholder="Search framework..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="mb-2 h-8 text-sm"
            />
            <ScrollArea className="flex-1">
              <div className="space-y-2">
                {filteredFrameworks.length === 0 ? (
                  <div className="text-xs text-muted-foreground">No results</div>
                ) : (
                  filteredFrameworks.map(f => (
                    <button
                      key={f.value}
                      onClick={() => setFramework(f.value)}
                      className={`flex items-center gap-2 w-full text-left ${framework === f.value ? 'font-semibold' : ''}`}
                    >
                      {f.icon}
                      <span className="text-sm">{f.label}</span>
                    </button>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
