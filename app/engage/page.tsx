import Image from 'next/image'
import Link from 'next/link'

export default function EngagePage() {
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
            Book a CTO Strategy Session 👋
          </h1>
          <p className='text-sm text-gray-600 dark:text-neutral-400'>
            with Abdulhaqq Sule
          </p>
        </div>
      </section>

      {/** About Section */}
      <section className='mt-8 space-y-3'>
        <p className='text-sm text-gray-600 dark:text-neutral-400'>
          Whether you&apos;re launching a new product, scaling your tech team,
          or navigating a critical decision — this is your space to tap into
          over a decade of real CTO experience.
        </p>

        <p className='text-sm text-gray-600 dark:text-neutral-400'>
          From choosing the right stack to reviewing your product architecture
          or even structuring your tech team, I help founders, non-profits, and
          small teams move with clarity and confidence.
        </p>

        <p className='text-sm font-bold text-gray-600 dark:text-neutral-400'>
          Let&apos;s talk strategy, not just code.
        </p>
      </section>

      {/** Services Section */}
      {/** Services Section */}
      <section className='my-10'>
        <h2 className='mb-3 font-medium text-gray-800 dark:text-neutral-200'>
          CTO Services
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[
            {
              icon: '/media/layers-icon.png',
              label: 'Engineering Strategy Session',
              subtitle: 'Strategy & Technical Roadmapping',
              description:
                'Tailored guidance on tech stacks, team structure, and development strategy to align with your product vision and business goals.',
            },
            {
              icon: '/media/speed-icon.svg',
              label: 'Product Architecture Review',
              subtitle: 'Technical Deep Dive',
              description:
                'I\’ll audit your product architecture, APIs, and workflows — then suggest improvements for scalability, security, and performance.',
            },
            {
              icon: '/media/performance-icon.svg',
              label: 'Startup Due Diligence',
              subtitle: "Founder's Advisory",
              description:
                'For early-stage founders and VCs — I\’ll evaluate product readiness, engineering team, and dev processes before you raise or invest.',
            },
            {
              icon: '/media/advancement-icon.png',
              label: 'Engineering Career Path',
              subtitle: 'Mentorship Track',
              description:
                'For junior and mid-level devs — career guidance, stack clarity, and how to move from coding to leading.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className='group p-4 border border-gray-200 rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'
            >
              <Image
                src={service.icon}
                alt={`${service.label} Icon`}
                width={200}
                height={200}
                className='shrink-0 size-10 mb-3 rounded-md'
              />

              <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
                {service.subtitle}
              </h3>

              <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200'>
                {service.label}
              </p>

              <p className='mt-1 text-sm text-gray-600 dark:text-neutral-400'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
