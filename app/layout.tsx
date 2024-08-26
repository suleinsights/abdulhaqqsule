import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/public/css/globals.css'
import Header from '@/scaffold/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s — Abdulhaqq Sule',
    default: 'Abdulhaqq Sule',
  },
  description: 'Pan-African Software Engineer',
  twitter: {
    //card: 'Abdulhaqq Sule',
    title: {
      template: '%s — Abdulhaqq Sule',
      default: 'Abdulhaqq Sule',
    },
    creator: '@haqqmanhq',
    description: 'Pan-African Software Engineer',
    images: ['/meta/twitter-image.png'],
  },
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
          <div className='w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
