import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/nav/Header"
import AuthProvider from "@/context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

const title = "Blog it!"
const description =
  "Blog it! is a platform for individuals to share their unique perspectives, meaningful stories with the world."

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-shrix1.vercel.app/"),
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@shriprasanna007",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
