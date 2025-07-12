'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: 'Resources', href: '/resources' },
    { label: 'Engage', href: '/engage', className: 'text-yellow-600' }
  ]

  return (
    <header className='bg-white sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm'>
      <nav className='mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700'>
        <div className='px-4 md:px-0 flex justify-between items-center'>
          <Link
            href='/'
            aria-label='Abdulhaqq'
            className='flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80'
          >
            <Image
              src='/meta/abdulhaqq-logomark.png'
              alt=''
              width={50}
              height={50}
              className='w-12 h-auto p-2'
            />
          </Link>

          <div className='md:hidden'>
            <button
              type='button'
              onClick={toggleMenu}
              className='hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
              aria-expanded={isOpen}
              aria-controls='hs-navbar-header-floating'
              aria-label='Toggle navigation'
            >
              <svg
                className={`shrink-0 size-3.5 ${isOpen ? 'hidden' : 'block'}`}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='3' x2='21' y1='6' y2='6' />
                <line x1='3' x2='21' y1='12' y2='12' />
                <line x1='3' x2='21' y1='18' y2='18' />
              </svg>
              <svg
                className={`shrink-0 size-4 ${isOpen ? 'block' : 'hidden'}`}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        </div>

        <div
          id='hs-navbar-header-floating'
          className={`${
            isOpen ? 'block' : 'hidden'
          } hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className='flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7'>
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${
                    isActive
                      ? 'border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-neutral-200'
                      : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                  } ${link.className || ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
