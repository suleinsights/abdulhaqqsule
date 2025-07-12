'use client'

import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <footer className='w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='py-6 border-t border-gray-200 dark:border-neutral-700'>
        <div className='flex flex-wrap justify-between items-center gap-2'>
          <p className='text-xs text-gray-600 dark:text-neutral-400'>
            &copy; 2025 Abdulhaqq Sule
          </p>

          <ul className='flex flex-wrap items-center'>
            {[
              { name: 'X (Twitter)', href: 'https://x.com/suleinsights' },
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/suleinsights',
              },
              { name: 'GitHub', href: 'https://github.com/suleinsights' },
            ].map((link, index) => (
              <li
                key={link.name}
                className={`inline-block relative pe-4 text-xs ${
                  index === 2
                    ? ''
                    : 'last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:before:bg-neutral-600'
                }`}
              >
                <a
                  href={link.href}
                  className='text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className='inline-block'>
              <button
                type='button'
                onClick={toggleTheme}
                className='relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
              >
                <span className='sr-only'>
                  {theme === 'light' ? 'Dark' : 'Light'} Mode
                </span>
                {theme === 'light' ? <FiMoon size={14} /> : <FiSun size={14} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
