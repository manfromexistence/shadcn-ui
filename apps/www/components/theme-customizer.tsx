"use client"

import * as React from "react"
import template from "lodash/template"
import { Check, Copy, Moon, Repeat, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { Button } from "@/registry/new-york/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/registry/new-york/ui/drawer"
import { Label } from "@/registry/new-york/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { Skeleton } from "@/registry/new-york/ui/skeleton"
import { BaseColor, baseColors } from "@/registry/registry-base-colors"
import "@/styles/mdx.css"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [config1] = useConfig()
  const activeTheme = baseColors.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm" className="md:hidden">
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"outline"} className="md:hidden">
            Config
          </Button>
        </DrawerTrigger>
        <DialogContent className="max-w-2xl outline-none">
          <DialogHeader>
            <DialogTitle>Configure</DialogTitle>
            <DialogDescription>
              Import or Export your Themes. (Coming Soon...)
            </DialogDescription>
          </DialogHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative">
            <CustomizerCode />
            {activeTheme && (
              <Button
                size="sm"
                onClick={() => {
                  copyToClipboardWithMeta(
                    getThemeCode(activeTheme, config1.radius),
                    {
                      name: "copy_theme_code",
                      properties: {
                        theme: activeTheme.name,
                        radius: config1.radius,
                      },
                    }
                  )
                  setHasCopied(true)
                }}
                className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              >
                {hasCopied ? <Check /> : <Copy />}
                Copy
              </Button>
            )}
          </ThemeWrapper>
        </DialogContent>
      </Drawer>
      <div className="hidden items-center space-x-2 md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">Customize</Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"outline"} className="">
              Config
            </Button>
          </DrawerTrigger>
          <DialogContent className="max-w-2xl outline-none">
            <DialogHeader>
              <DialogTitle>Configure</DialogTitle>
              <DialogDescription>
                Import or Export your Themes. (Coming Soon...)
              </DialogDescription>
            </DialogHeader>
            <ThemeWrapper defaultTheme="zinc" className="relative">
              <CustomizerCode />
              {activeTheme && (
                <Button
                  size="sm"
                  onClick={() => {
                    copyToClipboardWithMeta(
                      getThemeCode(activeTheme, config1.radius),
                      {
                        name: "copy_theme_code",
                        properties: {
                          theme: activeTheme.name,
                          radius: config1.radius,
                        },
                      }
                    )
                    setHasCopied(true)
                  }}
                  className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
                >
                  {hasCopied ? <Check /> : <Copy />}
                  Copy
                </Button>
              )}
            </ThemeWrapper>
          </DialogContent>
        </Drawer>
      </div>
    </div>
  )
}

function Customizer() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme: setMode, resolvedTheme: mode } = useTheme()
  const [config, setConfig] = useConfig()
  const [config1] = useConfig()
  const activeTheme = baseColors.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeWrapper
      defaultTheme="zinc"
      className="flex flex-col space-y-4 md:space-y-6"
    >
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Theme Customizer
          </div>
          <div className="text-xs text-muted-foreground">
            Customize your components colors.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            })
          }}
        >
          <Repeat />
          <span className="sr-only">Reset</span>
        </Button>
        {activeTheme && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              copyToClipboardWithMeta(
                getThemeCode(activeTheme, config1.radius),
                {
                  name: "copy_theme_code",
                  properties: {
                    theme: activeTheme.name,
                    radius: config1.radius,
                  },
                }
              )
              setHasCopied(true)
            }}
            className="ml-auto hidden h-9 w-9 rounded-[0.5rem] md:flex"
          >
            {hasCopied ? <Check /> : <Copy />}
          </Button>
        )}
        {/* <CopyCodeButton variant="ghost" size="sm" /> */}
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <div className="flex w-full items-center">
            <Label className="text-xs">Designs</Label>
            <Popover>
              <PopoverTrigger>
                <InfoCircledIcon className="ml-1 h-3 w-3" />
                <span className="sr-only">About designs</span>
              </PopoverTrigger>
              <PopoverContent
                className="space-y-3 rounded-[0.5rem] text-sm"
                side="right"
                align="start"
                alignOffset={-20}
              >
                <p className="font-medium">
                  What is the difference between the Science and Magic designs?
                </p>
                <p>
                  A design that you see in everyday software.
                </p>
                <p>
                  The <span className="font-medium">Science</span> design all
                  the things that you see usually.
                </p>
                <p>
                  The <span className="font-medium">Magic</span> design is a something
                  that is not same old software ui Design.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={"outline"}
              size="sm"
              onClick={() => setConfig({ ...config, style: "default" })}
              className={cn(
                config.style === "default" && "border-2 border-primary"
              )}
            >
              Science
            </Button>
            <Button
              variant={"outline"}
              disabled={true}
              size="sm"
              onClick={() => setConfig({ ...config, style: "new-york" })}
              className={cn(
                config.style === "new-york" && "border-2 border-primary"
              )}
            >
              Magic
            </Button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {baseColors
              .filter(
                (theme) =>
                  !["slate", "stone", "gray", "neutral"].includes(theme.name)
              )
              .map((theme) => {
                const isActive = config.theme === theme.name

                return mounted ? (
                  <Button
                    variant={"outline"}
                    size="sm"
                    key={theme.name}
                    onClick={() => {
                      setConfig({
                        ...config,
                        theme: theme.name,
                      })
                    }}
                    className={cn(
                      "justify-start",
                      isActive && "border-2 border-primary"
                    )}
                    style={
                      {
                        "--theme-primary": `hsl(${theme?.activeColor[mode === "dark" ? "dark" : "light"]
                          })`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                      )}
                    >
                      {isActive && <Check className="h-4 w-4 text-white" />}
                    </span>
                    {theme.label}
                  </Button>
                ) : (
                  <Skeleton className="h-8 w-full" key={theme.name} />
                )
              })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    })
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                    "border-2 border-primary"
                  )}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <Sun className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <Moon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}

// function Config() {
//   const [mounted, setMounted] = React.useState(false)
//   const { setTheme: setMode, resolvedTheme: mode } = useTheme()
//   const [config, setConfig] = useConfig()

//   const handleChange = () => {
//     setCode(code);
//     console.log('New code:', code);
//   };
//   const [code, setCode] = React.useState(`<header class="site-header">
//   <div class="container">
//     <h1>Example #2</h1>
//     <nav role="navigation" class="site-navigation">
//       <ul>
//         <li><a href="#">Link</a></li>
//         <li><a href="#">Link</a></li>
//         <li><a href="#">Link</a></li>
//       </ul>
//     </nav>
//   </div>
// </header>
// <section role="main" class="container"><img src="http://placehold.it/1400x400/ff694d/f6f2eb" class="banner-image" />
//   <div class="grid-row col-3">
//     <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
//       <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
//     </div>
//     <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
//       <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
//     </div>
//     <div class="grid-unit"><img src="http://placehold.it/650x300/ff694d/f6f2eb" />
//       <p>Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>
//     </div>
//   </div>
// </section>`);

//   React.useEffect(() => {
//     setMounted(true)
//   }, [])

//   return (
//     <ThemeWrapper
//       defaultTheme="zinc"
//       className="flex flex-col space-y-4 md:space-y-6"
//     >
//       <div className="flex items-start pt-4 md:pt-0">
//         <div className="space-y-1 pr-2">
//           <div className="font-semibold leading-none tracking-tight">
//             Config
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Import of Export your config.
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="ml-auto rounded-[0.5rem]"
//           onClick={() => {
//             setConfig({
//               ...config,
//               theme: "zinc",
//               radius: 0.5,
//             })
//           }}
//         >
//           <Repeat />
//           <span className="sr-only">Reset</span>
//         </Button>
//         {/* <CopyCodeButton variant="ghost" size="sm" /> */}
//       </div>
//       {/* <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
//         <div className="space-y-1.5">
//           <Label className="text-xs">Color</Label>
//           <div className="grid grid-cols-3 gap-2">
//             {baseColors
//               .filter(
//                 (theme) =>
//                   !["slate", "stone", "gray", "neutral"].includes(theme.name)
//               )
//               .map((theme) => {
//                 const isActive = config.theme === theme.name

//                 return mounted ? (
//                   <Button
//                     variant={"outline"}
//                     size="sm"
//                     key={theme.name}
//                     onClick={() => {
//                       setConfig({
//                         ...config,
//                         theme: theme.name,
//                       })
//                     }}
//                     className={cn(
//                       "justify-start",
//                       isActive && "border-2 border-primary"
//                     )}
//                     style={
//                       {
//                         "--theme-primary": `hsl(${theme?.activeColor[mode === "dark" ? "dark" : "light"]
//                           })`,
//                       } as React.CSSProperties
//                     }
//                   >
//                     <span
//                       className={cn(
//                         "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
//                       )}
//                     >
//                       {isActive && <Check className="h-4 w-4 text-white" />}
//                     </span>
//                     {theme.label}
//                   </Button>
//                 ) : (
//                   <Skeleton className="h-8 w-full" key={theme.name} />
//                 )
//               })}
//           </div>
//         </div>
//         <div className="space-y-1.5">
//           <Label className="text-xs">Radius</Label>
//           <div className="grid grid-cols-5 gap-2">
//             {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
//               return (
//                 <Button
//                   variant={"outline"}
//                   size="sm"
//                   key={value}
//                   onClick={() => {
//                     setConfig({
//                       ...config,
//                       radius: parseFloat(value),
//                     })
//                   }}
//                   className={cn(
//                     config.radius === parseFloat(value) &&
//                     "border-2 border-primary"
//                   )}
//                 >
//                   {value}
//                 </Button>
//               )
//             })}
//           </div>
//         </div>
//         <div className="space-y-1.5">
//           <Label className="text-xs">Mode</Label>
//           <div className="grid grid-cols-3 gap-2">
//             {mounted ? (
//               <>
//                 <Button
//                   variant={"outline"}
//                   size="sm"
//                   onClick={() => setMode("light")}
//                   className={cn(mode === "light" && "border-2 border-primary")}
//                 >
//                   <Sun className="mr-1 -translate-x-1" />
//                   Light
//                 </Button>
//                 <Button
//                   variant={"outline"}
//                   size="sm"
//                   onClick={() => setMode("dark")}
//                   className={cn(mode === "dark" && "border-2 border-primary")}
//                 >
//                   <Moon className="mr-1 -translate-x-1" />
//                   Dark
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Skeleton className="h-8 w-full" />
//                 <Skeleton className="h-8 w-full" />
//               </>
//             )}
//           </div>
//         </div>
//       </div> */}

//       {/* <CodeMirror
//         className="rounded-md"
//         value='<h1>I ♥ react-codemirror2</h1>'
//         options={{
//           mode: 'css',
//           theme: 'material',
//           lineNumbers: true
//         }}
//         onChange={handleChange}
//       /> */}
//     </ThemeWrapper>
//   )
// }

function Config({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const [config] = useConfig()
  const activeTheme = baseColors.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <>
      {/* {activeTheme && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
              name: "copy_theme_code",
              properties: {
                theme: activeTheme.name,
                radius: config.radius,
              },
            })
            setHasCopied(true)
          }}
          className={cn("ml-auto rounded-[0.5rem] md:hidden", className)}
          {...props}
        >
          {hasCopied ? <Check /> : <Copy />}
          Copy code
        </Button>
      )} */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("ml-auto hidden h-9 w-9 rounded-[0.5rem] md:flex", className)} {...props}>
            {/* Copy code */}
            {hasCopied ? <Check /> : <Copy />}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl outline-none">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative">
            <CustomizerCode />
            {activeTheme && (
              <Button
                size="sm"
                onClick={() => {
                  copyToClipboardWithMeta(
                    getThemeCode(activeTheme, config.radius),
                    {
                      name: "copy_theme_code",
                      properties: {
                        theme: activeTheme.name,
                        radius: config.radius,
                      },
                    }
                  )
                  setHasCopied(true)
                }}
                className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              >
                {hasCopied ? <Check /> : <Copy />}
                Copy
              </Button>
            )}
          </ThemeWrapper>
        </DialogContent>
      </Dialog>
    </>
  )
}

function CopyCodeButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const [config] = useConfig()
  const activeTheme = baseColors.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <>
      {activeTheme && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
              name: "copy_theme_code",
              properties: {
                theme: activeTheme.name,
                radius: config.radius,
              },
            })
            setHasCopied(true)
          }}
          className={cn("ml-auto rounded-[0.5rem] md:hidden", className)}
          {...props}
        >
          {hasCopied ? <Check /> : <Copy />}
          Copy code
        </Button>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("ml-auto hidden h-9 w-9 rounded-[0.5rem] md:flex", className)} {...props}>
            {/* Copy code */}
            {hasCopied ? <Check /> : <Copy />}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl outline-none">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative">
            <CustomizerCode />
            {activeTheme && (
              <Button
                size="sm"
                onClick={() => {
                  copyToClipboardWithMeta(
                    getThemeCode(activeTheme, config.radius),
                    {
                      name: "copy_theme_code",
                      properties: {
                        theme: activeTheme.name,
                        radius: config.radius,
                      },
                    }
                  )
                  setHasCopied(true)
                }}
                className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              >
                {hasCopied ? <Check /> : <Copy />}
                Copy
              </Button>
            )}
          </ThemeWrapper>
        </DialogContent>
      </Dialog>
    </>
  )
}


function CustomizerCode() {
  const [config] = useConfig()
  const activeTheme = baseColors.find((theme) => theme.name === config.theme)

  return (
    <ThemeWrapper defaultTheme="zinc" className="relative space-y-4">
      <div data-rehype-pretty-code-fragment="">
        <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            <span className="line text-white">@layer base &#123;</span>
            <span className="line text-white">&nbsp;&nbsp;:root &#123;</span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.light["background"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.light["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.light[
                    prefix as keyof typeof activeTheme.cssVars.light
                    ]
                  }
                  ;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.light[
                    `${prefix}-foreground` as keyof typeof activeTheme.cssVars.light
                    ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.light["border"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.light["input"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.light["ring"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
            </span>
            {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(
              (prefix) => (
                <>
                  <span className="line text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                    {
                      activeTheme?.cssVars.light[
                      prefix as keyof typeof activeTheme.cssVars.light
                      ]
                    }
                    ;
                  </span>
                </>
              )
            )}
            <span className="line text-white">&nbsp;&nbsp;&#125;</span>
            <span className="line text-white">&nbsp;</span>
            <span className="line text-white">&nbsp;&nbsp;.dark &#123;</span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.dark["background"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.dark["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.dark[
                    prefix as keyof typeof activeTheme.cssVars.dark
                    ]
                  }
                  ;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.dark[
                    `${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark
                    ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.dark["border"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.dark["input"]};
            </span>
            <span className="line text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.dark["ring"]};
            </span>
            {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(
              (prefix) => (
                <>
                  <span className="line text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                    {
                      activeTheme?.cssVars.dark[
                      prefix as keyof typeof activeTheme.cssVars.dark
                      ]
                    }
                    ;
                  </span>
                </>
              )
            )}
            <span className="line text-white">&nbsp;&nbsp;&#125;</span>
            <span className="line text-white">&#125;</span>
          </code>
        </pre>
      </div>
    </ThemeWrapper>
  )
}

function getThemeCode(theme: BaseColor, radius: number) {
  if (!theme) {
    return ""
  }

  return template(BASE_STYLES_WITH_VARIABLES)({
    colors: theme.cssVars,
    radius,
  })
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: <%- radius %>rem;
    --chart-1: <%- colors.light["chart-1"] %>;
    --chart-2: <%- colors.light["chart-2"] %>;
    --chart-3: <%- colors.light["chart-3"] %>;
    --chart-4: <%- colors.light["chart-4"] %>;
    --chart-5: <%- colors.light["chart-5"] %>;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
    --chart-1: <%- colors.dark["chart-1"] %>;
    --chart-2: <%- colors.dark["chart-2"] %>;
    --chart-3: <%- colors.dark["chart-3"] %>;
    --chart-4: <%- colors.dark["chart-4"] %>;
    --chart-5: <%- colors.dark["chart-5"] %>;
  }
}
`

