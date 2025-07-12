import Image from 'next/image'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

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
            <FiMail className='shrink-0 size-3.5' />
            <Link
              href='#'
              className='text-sm border-b border-dotted text-gray-500 hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400'
            >
              email@example.com
            </Link>
          </li>

          <li className='flex items-center gap-x-2.5'>
            <FaXTwitter className='shrink-0 size-3.5' />
            <Link
              href='#'
              target='_blank'
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
