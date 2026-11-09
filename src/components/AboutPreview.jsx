import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AnimatedCounter({ from = 0, to, suffix = '' }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView, to, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const stats = [
  {
    numericValue: 25,
    suffix: '+',
    label: 'Expert Engineers & Designers',
    color: '#06B6D4',
  },
  {
    numericValue: 20,
    suffix: '+',
    label: 'Successful Digital Deployments',
    color: '#3B82F6',
  },
  {
    numericValue: 15,
    suffix: '+',
    label: 'Enterprise & Startup Clients',
    color: '#A855F7',
  },
  {
    numericValue: 99,
    suffix: '%',
    label: 'Client Satisfaction Index',
    color: '#10B981',
  },
]

const highlights = [
  'Architectural excellence & clean code standards',
  'Agile sprint cycles with transparent reporting',
  '24/7 mission-critical maintenance & SLA support',
  'End-to-end security & compliance first mind-set',
]

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-5 shadow-sm shadow-cyan-950">
              <span>About Crescent Techworks</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Crafting High-Performance{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Digital Realities
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
              CRESCENT TECHWORKS INNOVATIONS LLP is a modern engineering and design consultancy. 
              We partner with innovative startups and visionary enterprises to build custom web applications, 
              scalable mobile ecosystems, and automated cloud workflows that deliver exponential growth.
            </p>

            <div className="space-y-3.5 mb-8 w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-slate-300 font-normal">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="neon-btn-primary px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-2 group"
            >
              <span>Learn More About Our Journey</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Stats Grid (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl sm:rounded-3xl p-6 bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div 
                  className="w-8 h-8 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                    <AnimatedCounter to={item.numericValue} suffix={item.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-light leading-snug">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
