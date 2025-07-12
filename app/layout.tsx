import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/scaffold/header'
import Footer from '@/scaffold/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s — Abdulhaqq Sule',
    default: 'Abdulhaqq Sule',
  },
  description: 'Pan-African Software Engineer',
  twitter: {
    card: 'summary',
    title: {
      template: '%s — Abdulhaqq Sule',
      default: 'Abdulhaqq Sule',
    },
    creator: '@haqqmanhq',
    description: 'Pan-African Software Engineer',
    images: ['/meta/twitter-image.png'],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_BASE_URL || 'http://localhost'
  ),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-neutral-900`}>
        <Header />
        <main id='content'>
          <div className='w-full max-w-2xl mx-auto py-5 px-4'>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
