import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'SHIVAM DUBEY',
    company: 'HARI OM THALASSIC PVT LTD',
    role: 'Founder & CEO',
    tag: 'Marine Web Platform',
    initials: 'SD',
    accentColor: '#06B6D4',
    text: 'We needed a proper digital presence for our marine business — not just a brochure site. Sapphire listened to how we actually work, built what we asked for, and fixed issues quickly when we reported them. Our inquiries from the website have increased noticeably.',
  },
  {
    name: 'Aravind',
    company: 'Ghar Seva',
    role: 'Founder & CEO',
    tag: 'On-Demand Service App',
    initials: 'AR',
    accentColor: '#3B82F6',
    text: 'Ghar Seva runs on trust — customers book home services and expect someone reliable to show up. The team understood that from day one. Booking flow is simple for customers, and on our side we can manage requests without juggling five different apps. Launch was on the date they committed to.',
  },
  {
    name: 'Aniksha Upadhyay',
    company: 'Pehchan YUI Foundation',
    role: 'Founder & CEO',
    tag: 'Non-Profit Web Portal',
    initials: 'AU',
    accentColor: '#8B5CF6',
    text: 'For a foundation, the website has to feel honest and easy for donors and volunteers — not flashy for the sake of it. They got that balance right. Pages load fine on older phones, and we can update content ourselves without calling a developer every time.',
  },
  {
    name: 'Vinod Sharma',
    company: 'Aayush Logistics Private Limited',
    role: 'Founder & CEO',
    tag: 'Enterprise Logistics ERP',
    initials: 'VS',
    accentColor: '#10B981',
    text: 'Logistics is complex — shipments, clients, follow-ups. Before this, a lot of our processes lived in WhatsApp and Excel. Sapphire built us a system that our office staff actually uses daily. Training was patient, and they remained available after launch when we needed small adjustments.',
  },
  {
    name: 'Ghanshyam Dubey',
    company: 'Hari Om Print House',
    role: 'Founder & CEO',
    tag: 'Custom Order Management',
    initials: 'GD',
    accentColor: '#F59E0B',
    text: 'Print orders used to get mixed up — wrong quantity, late proofs. Now customers can share requirements online and we track each job in one place. It is not magic; we still run the shop — but mistakes and follow-up calls have decreased significantly.',
  },
  {
    name: 'Ankit',
    company: 'Soham Gifts',
    role: 'Founder & CEO',
    tag: 'E-Commerce & Inventory',
    initials: 'AK',
    accentColor: '#EC4899',
    text: 'Soham Gifts needed catalog and order handling that works during festival season when everything spikes. They set up the store, payment flow, and basic inventory view without overcomplicating it. Sales team picked it up within a week — that mattered more to us than fancy design.',
  },
]

/* ── 3D Interactive Tilt Card Component ── */
function TiltTestimonialCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for smooth 3D mouse tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for buttery smooth tilt animation
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 })

  // Transform coordinates into degrees of tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Normalize between -0.5 and 0.5
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-3xl p-7 sm:p-9 bg-slate-900/60 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between shadow-2xl shadow-cyan-950/20 group overflow-hidden"
      >
        {/* Subtle Dynamic Ambient Glow following card theme */}
        <div 
          className="absolute -top-24 -right-24 w-52 h-52 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: item.accentColor }}
        />

        {/* Big Background Watermark Quote */}
        <div 
          className="absolute right-6 bottom-4 text-7xl sm:text-8xl font-serif font-black text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-400/[0.07] transition-colors duration-500"
          style={{ transform: 'translateZ(-10px)' }}
        >
          “
        </div>

        {/* Top Header: Avatar + Client Details + Verified Tag */}
        <div 
          className="flex items-start justify-between gap-4 mb-6"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="flex items-center gap-4">
            {/* Glowing Monogram Avatar */}
            <div 
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-mono font-black text-base sm:text-lg text-white shadow-lg relative flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${item.accentColor}40, ${item.accentColor}10)`,
                border: `1.5px solid ${item.accentColor}60`,
                boxShadow: isHovered ? `0 0 20px ${item.accentColor}40` : `0 4px 12px rgba(0,0,0,0.3)`,
                transition: 'all 0.3s ease',
              }}
            >
              <span>{item.initials}</span>
              <span 
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-sm"
                title="Verified Client"
              />
            </div>

            {/* Name, Role & Company */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
              </div>
              <div className="text-xs text-slate-400 font-light mt-0.5">
                {item.role}
              </div>
              <div 
                className="text-xs font-semibold font-mono mt-0.5"
                style={{ color: item.accentColor }}
              >
                {item.company}
              </div>
            </div>
          </div>

          {/* Service Delivered Pill */}
          <span className="hidden sm:inline-flex text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08] whitespace-nowrap">
            {item.tag}
          </span>
        </div>

        {/* Client Quote Text */}
        <p 
          className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6 relative z-10 italic"
          style={{ transform: 'translateZ(25px)' }}
        >
          "{item.text}"
        </p>

        {/* Card Footer: 5 Glowing Stars + Verified Pill */}
        <div 
          className="pt-5 border-t border-white/[0.08] flex items-center justify-between"
          style={{ transform: 'translateZ(15px)' }}
        >
          {/* Glowing Stars */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-amber-300 ml-1">5.0</span>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-full">
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[11px]">Verified Project</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Testimonials() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Global Background Ambience (Matching Homepage) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 sm:pt-28 pb-20">

        {/* Section Header */}
        <section className="relative pt-6 pb-12 sm:pb-16 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-5 shadow-sm shadow-cyan-950">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Client Success Stories</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
                What Our Clients{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Say
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                Verified reviews from ambitious business founders and operations leaders 
                we've partnered with to engineer high-impact digital solutions.
              </p>

              {/* Trust Metric Strip */}
              <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 p-3 sm:px-8 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl shadow-xl text-xs sm:text-sm font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-base">★★★★★</span>
                  <span className="font-bold text-white">5.0 / 5.0</span>
                  <span className="text-slate-400 hidden sm:inline">Overall Rating</span>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold text-base">100%</span>
                  <span className="text-slate-300">On-Time Delivery</span>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold text-base">20+</span>
                  <span className="text-slate-300">Happy Clients</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* 3D Tilt Testimonials Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((item, index) => (
              <TiltTestimonialCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
