import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Users, Zap, Code, Clock, TrendingUp, Award } from 'lucide-react'

const flipCardsData = [
  {
    title: 'Expert Team',
    description: '25+ certified professionals with deep expertise across web, mobile, cloud, and design.',
    icon: Users,
    color: '#7C3AED',
    gradient: ['#7C3AED', '#2563EB'],
  },
  {
    title: 'Agile Approach',
    description: 'Rapid iteration, transparent sprints, and flexible timelines that adapt to your evolving needs.',
    icon: Zap,
    color: '#0891B2',
    gradient: ['#0891B2', '#2563EB'],
  },
  {
    title: 'Modern Stack',
    description: 'Latest tech, best practices, and future-proof architecture for maximum scalability.',
    icon: Code,
    color: '#2563EB',
    gradient: ['#2563EB', '#4F46E5'],
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team always on-call. Issues resolved within hours, not days.',
    icon: Clock,
    color: '#DB2777',
    gradient: ['#DB2777', '#7C3AED'],
  },
  {
    title: 'Cost Effective',
    description: 'Transparent pricing, no hidden fees, and flexible engagement models for every budget.',
    icon: TrendingUp,
    color: '#0D9488',
    gradient: ['#0D9488', '#0891B2'],
  },
  {
    title: 'Proven Results',
    description: '15+ happy clients, 10+ countries, and a 99.9% project success rate across all engagements.',
    icon: Award,
    color: '#D97706',
    gradient: ['#D97706', '#CA8A04'],
  },
]

/* ── Styles ── */
const WhyStyles = () => (
  <style>{`
    @keyframes whyLinePulse {
      0%, 100% { opacity: 0.15; }
      50%       { opacity: 0.45; }
    }
    @keyframes whyDashFlow {
      from { stroke-dashoffset: 24; }
      to   { stroke-dashoffset: 0; }
    }
  `}</style>
)

/* ── Background connected-line SVG ── */
const BackgroundNetwork = () => (
  <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg className="w-full h-full max-w-[1200px]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
      <defs>
        <linearGradient id="wcu-grad-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7C3AED" />
          <stop offset="50%"  stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="wcu-grad-bot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#DB2777" />
          <stop offset="50%"  stopColor="#0D9488" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="wcu-vert-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="wcu-vert-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
        <linearGradient id="wcu-vert-3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0891B2" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <g opacity="0.12">
        <motion.path className="hidden lg:block" d="M 166 250 C 330 150, 660 350, 833 250" stroke="url(#wcu-grad-top)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
        <motion.path className="hidden lg:block" d="M 166 750 C 330 850, 660 650, 833 750" stroke="url(#wcu-grad-bot)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} />
        <motion.path className="hidden lg:block" d="M 166 250 C 100 500, 200 500, 166 750" stroke="url(#wcu-vert-1)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }} />
        <motion.path className="hidden lg:block" d="M 500 250 C 450 500, 550 500, 500 750" stroke="url(#wcu-vert-2)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }} />
        <motion.path className="hidden lg:block" d="M 833 250 C 900 500, 750 500, 833 750" stroke="url(#wcu-vert-3)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }} />
        <motion.path className="block lg:hidden" d="M 500 50 C 200 200, 800 400, 500 500 C 200 600, 800 800, 500 950" stroke="url(#wcu-vert-1)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
      </g>

      {[
        { cx: '166', cy: '250', color: '#7C3AED', delay: 1.5 },
        { cx: '500', cy: '250', color: '#2563EB', delay: 1.7 },
        { cx: '833', cy: '250', color: '#0891B2', delay: 1.9 },
        { cx: '166', cy: '750', color: '#DB2777', delay: 1.6 },
        { cx: '500', cy: '750', color: '#0D9488', delay: 1.8 },
        { cx: '833', cy: '750', color: '#D97706', delay: 2.0 },
      ].map((dot, i) => (
        <motion.g key={i} className="hidden lg:block" initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ delay: dot.delay }}>
          <circle cx={dot.cx} cy={dot.cy} r="8" fill={dot.color} style={{ animation: 'whyLinePulse 3s infinite ease-in-out' }} />
        </motion.g>
      ))}
    </svg>
  </div>
)

/* ── Flip card ── */
function FlipCard({ card, index }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = card.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      className="relative w-full aspect-square max-w-[280px] mx-auto"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
      style={{ perspective: '1000px', cursor: 'pointer' }}
    >
      <div
        className="absolute inset-4 rounded-[24px] blur-2xl opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${card.color}30 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: flipped ? 180 : 0, y: flipped ? -8 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-[16px] p-8 flex flex-col items-center justify-center text-center overflow-hidden bg-white border border-slate-200"
          style={{
            boxShadow: `0 10px 25px -5px rgba(0,0,0,0.03), 0 0 1px rgba(0,0,0,0.05), 0 0 30px ${card.color}14`,
            backfaceVisibility: 'hidden',
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
            animate={flipped ? { rotate: 5 } : { rotate: 0 }}
            style={{
              background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`,
              boxShadow: `0 8px 20px -4px ${card.color}40`,
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <h3 className="text-slate-900 text-xl font-bold tracking-wide">{card.title}</h3>
          <p className="text-slate-400 text-xs mt-3 font-medium">Hover to view details</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-[16px] p-6 flex flex-col items-center justify-center text-center overflow-hidden bg-slate-900"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: `0 20px 40px -15px rgba(15,23,42,0.3), 0 0 32px ${card.color}1F`,
          }}
        >
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(${card.color} 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
          <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full" style={{ background: card.color }} />
          <div className="absolute right-0 top-6 bottom-6 w-1 rounded-l-full" style={{ background: card.color }} />
          <div className="relative z-10 px-2">
            <div className="flex justify-center mb-4" style={{ color: card.color }}>
              <Icon size={22} />
            </div>
            <p className="text-white text-[15px] font-medium leading-[1.7]">{card.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-[100px] bg-[#f8fafc] overflow-hidden">
      <WhyStyles />

      {/* Ambient radial highlight */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 60%)' }} />

      {/* Connected background lines */}
      <BackgroundNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-4">Why Us</p>
          <h2 className="text-5xl md:text-6xl font-black mb-5 tracking-tight text-slate-900">
            <span>Why </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #0891B2, #2563EB)' }}>
              Choose Us
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            What sets our engineering, support matrix, and development architecture apart from the rest.
          </p>
        </motion.div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1100px] mx-auto">
          {flipCardsData.map((card, index) => (
            <FlipCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
