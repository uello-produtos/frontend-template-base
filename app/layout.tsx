import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { MotionProvider } from "@/providers/MotionProvider"
import { QueryProvider } from "@/providers/QueryProvider"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frontend Template Base",
  description: "Template base moderno para desenvolvimento frontend com Next.js, React, TypeScript e shadcn/ui",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <QueryProvider>
              {children}
              <Toaster />
            </QueryProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
