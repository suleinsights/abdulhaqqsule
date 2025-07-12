import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/** Profile section */}
      <section className='flex items-center gap-x-3'>
        <div className='shrink-0'>
          <Image
            src='/media/abdulhaqq-avatar.jpg'
            alt='Abdulhaqq Avatar'
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>

        <div className='grow'>
          <h1 className='text-lg font-medium text-gray-800 dark:text-neutral-200'>
            Hey, I'm Abdulhaqq 👋
          </h1>
          <p className='text-sm text-gray-600 dark:text-neutral-400'>
            Software Engineer
          </p>
        </div>
      </section>

      {/** About Section */}
      <section className='mt-8'>
        <p className='text-sm text-gray-600 dark:text-neutral-400'>
          I'm a Pan-African Software Engineer with over a decade of experience
          in transforming ideas into impactful digital experiences. My passion
          lies at the intersection of technology, design, and business strategy,
          where I bring a unique blend of creativity and technical expertise to
          every project.
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
          it's designing intuitive interfaces or providing strategic guidance,
          I&apos;m committed to delivering excellence and driving success.
        </p>

        <ul className='mt-5 flex flex-col gap-y-3'>
          <li className='flex items-center gap-x-2.5'>
            <svg
              className='shrink-0 size-3.5'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <rect width='20' height='16' x='2' y='4' rx='2' />
              <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
            </svg>
            <Link
              className='text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
              href='#'
            >
              email@example.com
            </Link>
          </li>

          <li className='flex items-center gap-x-2.5'>
            <svg
              className='shrink-0 size-3.5'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z'
                fill='currentColor'
              />
            </svg>
            <Link
              href='#'
              className='text-sm border-b border-dotted text-gray-500 hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
            >
              @suleinsights
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}
