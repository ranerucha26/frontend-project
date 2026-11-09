import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'web',
    title: 'Web Application Development',
    description: 'Blazing-fast, SEO-optimized web apps built with React, Next.js, and Node.js. Scalable architecture from high-converting landing pages to complex SaaS platforms.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: '#06B6D4',
    colSpan: 'lg:col-span-7',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M8 21H16M12 17V21" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 8L10 11L7 14M13 14H17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'mobile',
    title: 'Cross-Platform Mobile Apps',
    description: 'Fluid iOS & Android apps with React Native and Flutter. Native performance, offline-first sync, and smooth 60fps animations.',
    tags: ['React Native', 'Flutter', 'iOS & Android', 'State Management'],
    color: '#3B82F6',
    colSpan: 'lg:col-span-5',
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
        <path d="M9 6H15" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'uiux',
    title: 'UI/UX & Product Design',
    description: 'User-centric, pixel-perfect interfaces designed in Figma. Comprehensive design systems, wireframing, and interactive prototypes.',
    tags: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
    color: '#a855f7',
    colSpan: 'lg:col-span-4',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture & DevOps',
    description: 'Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and AWS/GCP infrastructure designed for 99.9% uptime.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    color: '#10B981',
    colSpan: 'lg:col-span-4',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18 10H6C3.79 10 2 11.79 2 14C2 16.21 3.79 18 6 18H18C20.21 18 22 16.21 22 14C22 11.79 20.21 10 18 10Z" strokeWidth="2"/>
        <path d="M12 6V10M9 8L12 5L15 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'api',
    title: 'API Engineering & Systems',
    description: 'High-throughput RESTful and GraphQL APIs built with rock-solid security, rate limiting, and integrations with third-party ecosystems.',
    tags: ['GraphQL', 'REST APIs', 'PostgreSQL', 'Microservices'],
    color: '#F59E0B',
    colSpan: 'lg:col-span-4',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 7H9C7.34 7 6 8.34 6 10V14C6 15.66 7.34 17 9 17H15C16.66 17 18 15.66 18 14V10C18 8.34 16.66 7 15 7Z" strokeWidth="2"/>
        <path d="M9 11H15M9 14H12" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 shadow-sm shadow-cyan-950">
            <span>What We Do</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Engineering Solutions for the{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Next Era
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
            End-to-end digital engineering that transforms complex challenges into elegant, 
            high-converting, and scalable digital realities.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${svc.colSpan} relative rounded-3xl p-7 sm:p-8 bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-cyan-950/30`}
            >
              {/* Subtle hover gradient wash */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${svc.color}, transparent 70%)` }}
              />

              <div>
                {/* Icon & ID badge */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${svc.color}15`,
                      border: `1px solid ${svc.color}35`,
                      boxShadow: `0 0 20px ${svc.color}20`,
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light mb-6">
                  {svc.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="neon-btn-ghost inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold group"
          >
            <span>Explore All Services & Capabilities</span>
            <svg 
              className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
