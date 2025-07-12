import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <section className='mt-10'>
      <h2 className='mb-3 font-medium text-gray-800 dark:text-neutral-200'>
        Backed by the Bold
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700'>
        {/* Testimonial 1 */}
        <div className='sm:-ms-4 py-6 sm:px-4'>
          <blockquote>
            <span className='text-xs text-gray-500 dark:text-neutral-200'>
              From securing our entire infrastructure to crafting a future-proof
              ecommerce architecture for <Link href='https://shoponclick.ng' target='_blank' className='dotted-lines'>ShopOnClick</Link>, Abdulhaqq&apos;s done more than most CTOs
              would-without ever being officially titled one. Every one of my
              brands has leaned on his technical brilliance through Haqqman.
            </span>
            <footer className='mt-3'>
              <div className='flex items-center gap-x-2'>
                <Image
                  className='shrink-0 size-5 rounded-full'
                  src='/media/oluwaseun-avatar.png'
                  alt='Oluwaseun Femi Joseph'
                  width={50}
                  height={50}
                />
                <div className='grow'>
                  <div className='text-xs text-gray-500 dark:text-neutral-500'>
                    <Link
                      href='https://linkpane.com/oluwaseunfj'
                      target='_blank'
                    >
                      Oluwaseun &apos;Femi Joseph
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Testimonial 2 */}
        <div className='py-6 sm:px-4'>
          <blockquote>
            <span className='text-xs text-gray-500 dark:text-neutral-200'>
              When my startup here in the UK needed a technical edge, Abdulhaqq
              showed up-personally and professionally. He offered CTO-level
              clarity, and guided us through Haqqman&apos;s support like we were
              his own. That kind of help? Rare.
            </span>
            <footer className='mt-3'>
              <div className='flex items-center gap-x-2'>
                <Image
                  className='shrink-0 size-5 rounded-full'
                  src='https://dummyimage.com/200x200'
                  alt='Mahmud Mahmud'
                  width={50}
                  height={50}
                />

                <div className='grow'>
                  <div className='text-xs text-gray-500 dark:text-neutral-500'>
                    Mahmud Mahmud, Clean Marine
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
