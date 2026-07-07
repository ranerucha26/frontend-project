import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from 'framer-motion'

import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ from = 0, to, suffix = '' }) {
  const count = useMotionValue(from)

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest) + suffix
  )

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  })

  useEffect(() => {
    if (isInView) {
      animate(count, to, {
        duration: 2,
        ease: 'easeOut',
      })
    }
  }, [isInView, to, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const stats = [
  {
    numericValue: 25,
    suffix: '+',
    label: 'Expert Team Members',
    color: '59,130,246',
    borderStr: 'rgba(59,130,246,0.25)',
    gradient:
      'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,182,212,0.08))',

    icon: (
      <svg
        className="w-6 h-6 md:w-9 md:h-9 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },

  {
    numericValue: 1,
    suffix: '+',
    label: 'Years of Experience',
    color: '251,191,36',
    borderStr: 'rgba(251,191,36,0.25)',
    gradient:
      'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(245,158,11,0.08))',

    icon: (
      <svg
        className="w-6 h-6 md:w-9 md:h-9 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },

  {
    numericValue: 15,
    suffix: '+',
    label: 'Happy Clients',
    color: '236,72,153',
    borderStr: 'rgba(236,72,153,0.25)',
    gradient:
      'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(244,114,182,0.08))',

    icon: (
      <svg
        className="w-6 h-6 md:w-9 md:h-9 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
]

const values = [
  {
    title: 'Innovation-driven approach',

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },

  {
    title: 'Agile development methodology',

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },

  {
    title: '24/7 support and maintenance',

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },

  {
    title: 'Transparent communication',

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
]

function StatCard({ stat, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: 0.15 * index,
        ease: 'easeOut',
      }}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      className="relative flex flex-col justify-center items-center text-center p-2.5 md:p-[20px] rounded-[18px] md:rounded-[24px] transition-all duration-400 w-full min-h-[140px] md:min-h-[260px] overflow-hidden bg-white border border-gray-200 shadow-xl"
      style={{
        boxShadow: hovered
          ? `0 20px 60px rgba(${stat.color}, 0.18)`
          : `0 10px 30px rgba(0,0,0,0.06)`,

        transform: hovered
          ? 'scale(1.05) translateY(-8px)'
          : 'scale(1) translateY(0)',

        borderColor: hovered
          ? `rgba(${stat.color},0.5)`
          : stat.borderStr,
      }}
    >
      {/* Top Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{
          background: `rgba(${stat.color},0.8)`,
        }}
      />

      {/* Icon */}
      <motion.div
        className="w-12 h-12 md:w-[80px] md:h-[80px] rounded-xl md:rounded-2xl flex items-center justify-center mb-1 md:mb-4 shrink-0"
        style={{
          background: stat.gradient,
        }}

        animate={{
          y: hovered ? 0 : [-4, 4, -4],
          rotate: hovered ? [0, 8, 0] : 0,
        }}

        transition={
          hovered
            ? { duration: 0.4 }
            : {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        {stat.icon}
      </motion.div>

      {/* Number */}
      <div className="text-lg md:text-[48px] font-bold text-gray-900 leading-none mt-1 md:mt-[16px] tracking-[1px]">
        <AnimatedCounter to={stat.numericValue} suffix={stat.suffix} />
      </div>

      {/* Label */}
      <div className="text-xs md:text-[16px] font-medium text-gray-600 mt-2 md:mt-[12px] tracking-[0.5px]">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function AboutPreview() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  })

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-white to-blue-50 py-[40px] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)',

            filter: 'blur(80px)',
          }}
        />

        <div
          className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',

            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] lg:px-[100px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left mb-1"
        >
          <h2 className="text-[28px] sm:text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-tight md:mt-10 mb-4 md:mb-0">
            <span className="block text-gray-900 ">About</span>

            <span
              className="whitespace-nowrap text-[0.9em] sm:text-[0.8em] md:text-[0.84em] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg,#06B6D4,#3B82F6,#8B5CF6)',
              }}
            >
              Sapphire Infotech Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-10 lg:gap-[60px] items-center">
          {/* Left Side */}
          <div className="lg:pr-[20px]">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[18px] text-gray-700 leading-[1.7] mb-4 md:mb-3 text-center md:text-left"
            >
              We're a passionate team of digital craftspeople dedicated
              to creating exceptional digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[18px] text-gray-700 leading-[1.7] mb-4 md:mb-4 text-center md:text-left"
            >
              Founded in 2022, we've grown from a small startup to a
              leading digital agency working with clients worldwide.
            </motion.p>

            {/* Values */}
            <div className="space-y-[16px] w-fit mx-auto md:w-full">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.1,
                  }}
                  className="flex items-center gap-[16px]"
                >
                  <div className="w-[42px] h-[42px] rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-500 shadow-sm shrink-0">
                    {val.icon}
                  </div>

                  <span className="text-[16px] text-gray-700 font-medium">
                    {val.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:pl-[20px]">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
