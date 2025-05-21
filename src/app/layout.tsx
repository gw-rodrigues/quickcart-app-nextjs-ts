import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/globals.css'
import { ProductClientProvider } from '@/store/ProductClientProvider'
import { Toaster } from 'react-hot-toast'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'QuickCart',
  description: 'QuickCart - simple, fast and easy to shop your needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <ProductClientProvider>{children}</ProductClientProvider>
        <Footer />
      </body>
    </html>
  )
}
