import Image from 'next/image'
import Link from 'next/link'
import { FiMail, FiArrowRight, FiUser, FiGlobe } from 'react-icons/fi'
import Testimonials from '@/components/testimonials'

export default function HomePage() {
  return (
    <>
      {/** Profile section */}
      <section className='flex items-center gap-x-3'>
        <Link
          href='https://showcv.ng/abdulhaqq-sule'
          target='_blank'
          className='shrink-0'
        >
          <Image
            src='/media/abdulhaqq-avatar.jpg'
            alt='Abdulhaqq Avatar'
            width={100}
            height={100}
            className='rounded-full'
          />
        </Link>

        <div className='grow'>
          <h1 className='text-lg font-medium text-gray-800 dark:text-neutral-200'>
            Hey, I&apos;m Abdulhaqq 👋
          </h1>
          <p className='text-sm text-gray-600 dark:text-neutral-400'>
            Pan-African Software Engineer
          </p>
        </div>
      </section>

      {/** About Section */}
      <section className='mt-8'>
        <p className='text-sm text-gray-600 dark:text-neutral-400'>
          With over a decade of experience in transforming ideas into impactful
          digital experiences, my passion lies at the intersection of
          technology, design, and business strategy, where I bring a unique
          blend of creativity and technical expertise to every project.
        </p>

        <p className='mt-3 text-sm text-gray-600 dark:text-neutral-400'>
          As the CTO at{' '}
          <Link
            href='https://haqqman.com'
            target='_blank'
            className='border-b border-dotted hover:text-green-500'
          >
            Haqqman
          </Link>
          , I lead the engineering of scalable web solutions that help brands
          across Africa and beyond stand out in the digital landscape. Whether
          it&apos;s designing intuitive interfaces or providing strategic guidance,
          I&apos;m committed to delivering excellence and driving success.
        </p>

        <ul className='mt-5 flex flex-col gap-y-3'>
          <li className='flex items-center gap-x-2.5'>
            <FiMail className='shrink-0 size-3.5' />
            <Link
              href='#'
              className='text-sm border-b border-dotted text-gray-500 hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
            >
              email@example.com
            </Link>
          </li>

          <li className='flex items-center gap-x-2.5'>
            <FiGlobe className='shrink-0 size-3.5' />
            <Link
              href='https://showcv.ng/abdulhaqq-sule'
              target='_blank'
              className='text-sm border-b border-dotted text-gray-500 hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
            >
              View Experience on ShowCV
            </Link>
          </li>
        </ul>
      </section>

      <Testimonials />

      {/** Newsletter Section */}
      <section className='my-10 sm:my-14'>
        <h2 className='mb-3 font-medium text-gray-800 dark:text-neutral-200'>
          Insightful cues from someone ahead of the curve.
        </h2>

        <form>
          <div className='p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700'>
            {/* First Name */}
            <div className='relative w-full'>
              <label htmlFor='first-name' className='sr-only'>
                First Name
              </label>
              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3'>
                <FiUser className='size-4 text-gray-400 dark:text-neutral-600' />
              </div>
              <input
                type='text'
                id='first-name'
                name='first-name'
                className='py-1.5 sm:py-2 ps-9 pe-3 block w-full border-transparent rounded-lg sm:text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500'
                placeholder='First name'
              />
            </div>

            {/* Email */}
            <div className='relative w-full'>
              <label htmlFor='hero-input' className='sr-only'>
                Email Address
              </label>
              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3'>
                <FiMail className='size-4 text-gray-400 dark:text-neutral-600' />
              </div>
              <input
                type='email'
                id='hero-input'
                name='hero-input'
                className='py-1.5 sm:py-2 ps-9 pe-3 block w-full border-transparent rounded-lg sm:text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500'
                placeholder='email@example.com'
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200'
            >
              Subscribe
              <FiArrowRight className='size-3.5' />
            </button>
          </div>

          <p className='mt-2 text-xs text-gray-500 dark:text-neutral-500'>
            No spam. Unsubscribe at any time.
          </p>
        </form>
      </section>
    </>
  )
}
