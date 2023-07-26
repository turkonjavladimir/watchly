import { Analytics } from "@/components/analytics"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: {
    name: "Vladimir Turkonja",
    url: "https://github.com/turkonjavladimir",
  },
  creator: "Vladimir Turkonja",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MobileNav items={navConfig} />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
