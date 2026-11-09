import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Zap, Code, Clock, TrendingUp, Award } from 'lucide-react'

const features = [
  {
    title: 'Expert Engineering Team',
    description: '25+ certified engineers and designers with specialized expertise across high-scale web, mobile, and cloud environments.',
    icon: Users,
    color: '#06B6D4',
  },
  {
    title: 'Agile & Rapid Sprints',
    description: 'Two-week sprint cycles with weekly video demos, transparent progress dashboards, and flexible iteration schedules.',
    icon: Zap,
    color: '#3B82F6',
  },
  {
    title: 'Future-Proof Modern Stack',
    description: 'Built with scalable architectures, modern APIs, and clean code that ensures zero tech debt and effortless scaling.',
    icon: Code,
    color: '#8B5CF6',
  },
  {
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock monitoring and rapid incident mitigation with guaranteed SLA response times for peace of mind.',
    icon: Clock,
    color: '#EC4899',
  },
  {
    title: 'Transparent & Predictable ROI',
    description: 'Clear milestone-based pricing with no surprise billing. Maximum business value delivered at competitive rates.',
    icon: TrendingUp,
    color: '#10B981',
  },
  {
    title: 'Proven Track Record',
    description: 'Over 20+ successful deployments worldwide with a 99.9% on-time project completion and client retention rate.',
    icon: Award,
    color: '#F59E0B',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="why-us" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 shadow-sm shadow-cyan-950">
            <span>Why Crescent Techworks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Speed, Scale & Trust
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
            We don't just build software — we engineer digital competitive advantages 
            designed to help ambitious businesses outperform their markets.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl p-8 bg-slate-900/50 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                {/* Subtle Hover Radial Wash */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
                />

                <div>
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      border: `1px solid ${feature.color}35`,
                      boxShadow: `0 0 20px ${feature.color}20`,
                    }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: feature.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom subtle edge indicator */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Advantage 0{idx + 1}</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">✦ Verified</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
