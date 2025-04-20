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
  // Website (over 40 options)
  { label: "React", value: "react", platform: "website" },
  { label: "Next.js", value: "nextjs", platform: "website" },
  { label: "Angular", value: "angular", platform: "website" },
  { label: "Vue.js", value: "vue", platform: "website" },
  { label: "Nuxt.js", value: "nuxtjs", platform: "website" },
  { label: "Svelte", value: "svelte", platform: "website" },
  { label: "SvelteKit", value: "sveltekits", platform: "website" },
  { label: "Ember.js", value: "ember", platform: "website" },
  { label: "Backbone.js", value: "backbone", platform: "website" },
  { label: "Knockout.js", value: "knockout", platform: "website" },
  { label: "Alpine.js", value: "alpine", platform: "website" },
  { label: "LitElement", value: "litelement", platform: "website" },
  { label: "Solid.js", value: "solid", platform: "website" },
  { label: "Stencil", value: "stencil", platform: "website" },
  { label: "Marko", value: "marko", platform: "website" },
  { label: "Mithril", value: "mithril", platform: "website" },
  { label: "Hyperapp", value: "hyperapp", platform: "website" },
  { label: "Inferno", value: "inferno", platform: "website" },
  { label: "Aurelia", value: "aurelia", platform: "website" },
  { label: "Polymer", value: "polymer", platform: "website" },
  { label: "Dojo", value: "dojo", platform: "website" },
  { label: "Sencha Ext JS", value: "sencha", platform: "website" },
  { label: "Qwik", value: "qwik", platform: "website" },
  { label: "Nue", value: "nue", platform: "website" },
  { label: "Astro", value: "astro", platform: "website" },
  { label: "Hono", value: "hono", platform: "website" },
  { label: "Express.js", value: "express", platform: "website" },
  { label: "Koa.js", value: "koa", platform: "website" },
  { label: "Nest.js", value: "nest", platform: "website" },
  { label: "Fastify", value: "fastify", platform: "website" },
  { label: "Hapi", value: "hapi", platform: "website" },
  { label: "Django", value: "django", platform: "website" },
  { label: "Flask", value: "flask", platform: "website" },
  { label: "FastAPI", value: "fastapi", platform: "website" },
  { label: "Ruby on Rails", value: "rails", platform: "website" },
  { label: "Laravel", value: "laravel", platform: "website" },
  { label: "Spring Boot", value: "springboot", platform: "website" },
  { label: "ASP.NET Core", value: "aspnetcore", platform: "website" },
  { label: "Phoenix", value: "phoenix", platform: "website" },
  { label: "CakePHP", value: "cakephp", platform: "website" },
  { label: "Symfony", value: "symfony", platform: "website" },
  { label: "Zend Framework", value: "zend", platform: "website" },
  { label: "Yii", value: "yii", platform: "website" },
  { label: "CodeIgniter", value: "codeigniter", platform: "website" },
  { label: "Slim", value: "slim", platform: "website" },
  { label: "Lumen", value: "lumen", platform: "website" },
  { label: "Meteor", value: "meteor", platform: "website" },
  { label: "AdonisJS", value: "adonisjs", platform: "website" },
  { label: "FeathersJS", value: "feathersjs", platform: "website" },
  { label: "Strapi", value: "strapi", platform: "website" },
  { label: "LoopBack", value: "loopback", platform: "website" },

  // Mobile App
  { label: "Flutter", value: "flutter", platform: "mobile" },
  { label: "React Native", value: "reactnative", platform: "mobile" },
  { label: "Ionic", value: "ionic", platform: "mobile" },
  { label: "Xamarin", value: "xamarin", platform: "mobile" },
  { label: "NativeScript", value: "nativescript", platform: "mobile" },
  { label: "SwiftUI", value: "swiftui", platform: "mobile" },
  { label: "Jetpack Compose", value: "jetpackcompose", platform: "mobile" },
  { label: "Framework7", value: "framework7", platform: "mobile" },
  { label: "Vue Native", value: "vuenative", platform: "mobile" },
  { label: "Apache Cordova", value: "cordova", platform: "mobile" },
  { label: "jQuery Mobile", value: "jquerymobile", platform: "mobile" },
  { label: "Mobile Angular UI", value: "mobileangularui", platform: "mobile" },
  { label: "Corona SDK", value: "coronasdk", platform: "mobile" },
  { label: "Swiftic", value: "swiftic", platform: "mobile" },
  { label: "Onsen UI", value: "onsenui", platform: "mobile" },

  // Desktop App
  { label: "Electron", value: "electron", platform: "desktop" },
  { label: ".NET MAUI", value: "dotnetmaui", platform: "desktop" },
  { label: "WinUI", value: "winui", platform: "desktop" },
  { label: "WPF", value: "wpf", platform: "desktop" },
  { label: "UWP", value: "uwp", platform: "desktop" },
  { label: "Qt", value: "qt", platform: "desktop" },
  { label: "GTK", value: "gtk", platform: "desktop" },
  { label: "JavaFX", value: "javafx", platform: "desktop" },
  { label: "Tauri", value: "tauri", platform: "desktop" },
  { label: "Flutter for Desktop", value: "flutterdesktop", platform: "desktop" },
  { label: "React Native for Windows", value: "reactnativewindows", platform: "desktop" },
  { label: "NW.js", value: "nwjs", platform: "desktop" },
  { label: "Proton Native", value: "protonnative", platform: "desktop" },

  // Game
  { label: "Unity", value: "unity", platform: "game" },
  { label: "Unreal Engine", value: "unreal", platform: "game" },
  { label: "Godot", value: "godot", platform: "game" },
  { label: "Cocos2d", value: "cocos2d", platform: "game" },
  { label: "Phaser", value: "phaser", platform: "game" },
  { label: "Construct", value: "construct", platform: "game" },
  { label: "GameMaker Studio", value: "gamemaker", platform: "game" },
  { label: "Defold", value: "defold", platform: "game" },
  { label: "MonoGame", value: "monogame", platform: "game" },
  { label: "Love2D", value: "love2d", platform: "game" },

  // AR/VR App
  { label: "Unity", value: "unity", platform: "arvr" },
  { label: "Unreal Engine", value: "unreal", platform: "arvr" },
  { label: "ARKit", value: "arkit", platform: "arvr" },
  { label: "ARCore", value: "arcore", platform: "arvr" },
  { label: "Vuforia", value: "vuforia", platform: "arvr" },
  { label: "A-Frame", value: "aframe", platform: "arvr" },
  { label: "Three.js", value: "threejs", platform: "arvr" },
  { label: "Babylon.js", value: "babylonjs", platform: "arvr" },
  { label: "Spark AR", value: "sparkar", platform: "arvr" },
  { label: "Lens Studio", value: "lensstudio", platform: "arvr" },

  // Data Science Tool
  { label: "Streamlit", value: "streamlit", platform: "datasci" },
  { label: "Jupyter", value: "jupyter", platform: "datasci" },
  { label: "Dash", value: "dash", platform: "datasci" },
  { label: "Gradio", value: "gradio", platform: "datasci" },
  { label: "Panel", value: "panel", platform: "datasci" },
  { label: "Voila", value: "voila", platform: "datasci" },
  { label: "Bokeh", value: "bokeh", platform: "datasci" },
  { label: "Plotly", value: "plotly", platform: "datasci" },
  { label: "Matplotlib", value: "matplotlib", platform: "datasci" },
  { label: "Seaborn", value: "seaborn", platform: "datasci" },
];

export function PlatformFrameworkSelector() {
  const [platform, setPlatform] = React.useState(PLATFORMS[0].value)
  const [framework, setFramework] = React.useState(FRAMEWORKS[0].value)
  const [search, setSearch] = React.useState("")

  const filteredFrameworks = FRAMEWORKS.filter(f =>
    f.platform === platform &&
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
            <Icons.logo className="h-4 w-4" />
            <span className="sr-only">Select framework</span>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={8} className="w-[360px] p-0">
        {/* Platform Tabs */}
        <div className="flex space-x-4 border-b px-4 pt-3">
          {PLATFORMS.map(p => (
            <button
              key={p.value}
              onClick={() => setPlatform(p.value)}
              className={`pb-2 text-sm ${platform === p.value ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            >
              {p.label}
            </button>
          ))}
        </div>
        {/* Framework List */}
        <div className="p-4 flex flex-col h-64">
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
                    <span className="text-sm">{f.label}</span>
                  </button>
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  )
}
