import { ReactScan } from "@/components/devtools/react-scan";

import { ScreenDevTools } from "@/components/devtools/screen-devtools";
import { FontLoader } from "@/components/font-loader";
import { LoadTheme } from "@/components/load-theme";
import { ThemeSync } from "@/components/theme-sync";
import { Toaster } from "@/components/ui/sonner";
// Removed cn import as it's no longer used directly here
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Providers } from "./providers"; // Removed useBackground import
import { BackgroundLayer } from "@/components/background-layer"; // Import BackgroundLayer

export const metadata: Metadata = {
  title: {
    default: "themux | shadcn/ui theme generator",
    template: "%s | themux",
  },
  description:
    "A shadcn/ui theme generator, but fully customizable. Supports Tailwind v4 and v3.",
  keywords: [
    "themux",
    "themux shadcn",
    "shadcn",
    "shadcn/ui",
    "Tailwind",
    "Tailwind v4",
    "TailwindCSS",
    "theme generator",
    "theme customizer",
    "theme editor",
    "Next.js",
    "llanesluis",
  ],
  authors: [
    {
      name: "llanesluis",
      url: "https://www.llanesluis.xyz/",
    },
  ],
  creator: "llanesluis",
  metadataBase: new URL("https://themux.vercel.app"),
  openGraph: {
    title: "themux | Not your regular shadcn/ui theme generator",
    description:
      "A shadcn/ui theme generator, but fully customizable. Supports Tailwind v4 and v3 and different color formats.",
  },
  generator: "Next.js",
};

// Removed BackgroundLayer component definition

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Removed cn() and background styles from body, handled by BackgroundLayer */}
      <body className={`antialiased min-h-screen w-full`}>
        <Providers attribute="class" defaultTheme="system" enableSystem> {/* Pass props for NextThemesProvider */}
          {/* Wrap content with BackgroundLayer */}
          <BackgroundLayer>
            <Suspense>
              {children}
              <ThemeSync />
            </Suspense>
            <FontLoader />
            <Toaster />
            {/* DevTools can remain outside or inside BackgroundLayer depending on needs */}
            {/* <ReactScan /> */}
            {/* <ScreenDevTools /> */}
          </BackgroundLayer>
        </Providers>
      </body>
    </html>
  );
}
