import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from './ContactForm'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const trustIndicators = [
    {
      label: 'Rapid Sprints & On-Time Delivery',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: '100% Code Ownership & IP Protection',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      label: '24/7 Dedicated Engineering Support',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Value Prop (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-5 shadow-sm shadow-cyan-950">
              <span>Initiate Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8">
              Let's discuss how our modern stack and cutting-edge digital solutions can help you launch faster, 
              delight users, and outperform your competitors.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-4 mb-10 w-full">
              {trustIndicators.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.08] w-full">
              <div>
                <div className="text-2xl font-black text-white">25+</div>
                <div className="text-xs text-slate-400 font-mono">Expert Engineers</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-black text-cyan-400">100%</div>
                <div className="text-xs text-slate-400 font-mono">SLA Guarantee</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 w-full"
          >
            <ContactForm isInView={isInView} showCardHeader={true} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
