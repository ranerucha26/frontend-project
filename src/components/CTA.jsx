import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from './ContactForm'

export default function CTA() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  })

  const trustIndicators = [
    {
      label: 'Fast Delivery',

      icon: (
        <svg
          className="w-5 h-5 text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },


    {
      label: '5-Star Rated',

      icon: (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },

    {
      label: '24/7 Support',

      icon: (
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
  ]

  const stats = [
    { number: '25+', label: 'Expert Team' },
    { number: '1+', label: 'Years Experience' }
  ]

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-white to-blue-50 py-[100px] overflow-hidden"
    >
      {/* Background */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ opacity: 0.03 }}
      >
        <defs>
          <pattern
            id="dotCTA"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dotCTA)" />
      </svg>

      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.06), transparent 60%)',

          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.06), transparent 60%)',

          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[40px] lg:px-[80px]">

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-[60px] items-start">

          {/* LEFT */}
          <div className="w-full flex flex-col justify-center h-full">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
              }}
            >
              <div className="inline-block text-cyan-500 text-[12px] font-bold uppercase tracking-[1px] mb-4 bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-200">
                Let's Talk
              </div>

              <h2 className="text-[36px] md:text-[44px] font-bold leading-[1.2] mb-6 tracking-tight">

                <div className="text-gray-900">
                  Ready to Transform Your
                </div>

                <div
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg,#06B6D4,#3B82F6,#8B5CF6)',
                  }}
                >
                  Digital Presence?
                </div>
              </h2>

              <p className="text-[16px] text-gray-600 leading-[1.8] mb-[40px] max-w-lg">
                Let's discuss how our expert team and
                cutting-edge solutions can help your business
                scale to new heights.
              </p>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: 'easeOut',
              }}

              className="flex flex-wrap gap-[24px] xl:gap-[30px] mb-[40px]"
            >
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {item.icon}

                  <span className="text-[14px] font-medium text-gray-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: 'easeOut',
              }}

              className="flex justify-between items-center w-full max-w-lg pt-[24px] border-t border-blue-100"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 text-center relative"
                >
                  {idx !== 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-blue-100" />
                  )}

                  <div className="text-[24px] font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>

                  <div className="text-[12px] text-gray-500 uppercase tracking-[0.5px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: 'easeOut',
            }}
            className="w-full relative"
          >
            <ContactForm isInView={isInView} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}