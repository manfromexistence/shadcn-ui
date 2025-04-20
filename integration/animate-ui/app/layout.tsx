import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './global.css';
import { Providers } from './providers';
import { jsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: {
    template: '%s - Animate UI',
    default: 'Animate UI - Animated React Components',
  },
  description:
    'Fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
  keywords: [
    'Animate UI',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Open-source components',
    'Animated UI components',
    'UI library',
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  authors: [
    {
      name: 'imskyleen',
      url: 'https://github.com/imskyleen',
    },
  ],
  creator: 'imskyleen',
  openGraph: {
    title: 'Animate UI',
    description:
      'Fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
    url: 'https://animate-ui.com',
    siteName: 'Animate UI',
    images: [
      {
        url: 'https://animate-ui.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Animate UI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@animate_ui',
    title: 'Animate UI',
    description:
      'Fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
    images: [
      {
        url: 'https://animate-ui.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Animate UI',
      },
    ],
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-dvh">
        <RootProvider theme={{ defaultTheme: 'dark' }}>
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  );
}
