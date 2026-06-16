import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TechStack from '../components/TechStack'
import TeamSpotlight from '../components/TeamSpotlight'

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const AboutCanvasBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient backdrop */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 30%, rgba(59,130,246,0.06) 0%, rgba(248,250,252,0) 70%)'
        }}
      />
      
      {/* Network Mesh Pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="meshPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Mesh lines */}
            <motion.path
              d="M 0,0 L 100,50 L 200,0 M 0,100 L 100,50 L 200,100 M 0,200 L 100,150 L 200,200"
              stroke="rgba(59,130,246,0.12)"
              strokeWidth="0.6"
              fill="none"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M 50,0 L 50,200 M 150,0 L 150,200"
              stroke="rgba(6,182,212,0.1)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M 0,50 L 200,50 M 0,150 L 200,150"
              stroke="rgba(168,85,247,0.08)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#meshPattern)" />
      </svg>
      
      {/* Subtle Glowing Accent Dots */}
      <motion.div
        className="absolute w-3 h-3 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)',
          filter: 'blur(4px)',
          left: '15%',
          top: '20%'
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent)',
          filter: 'blur(5px)',
          left: '75%',
          top: '35%'
        }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default function About() {
  useScrollToTop()
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const statsRef = useRef(null)
  const storyRef = useRef(null)

  const isMissionInView = useInView(missionRef, { once: false, amount: 0.3 })
  const isValuesInView = useInView(valuesRef, { once: false, amount: 0.2 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.3 })

  const statCards = [
    {
      id: 1,
      number: '3+',
      label: 'Years of Excellence',
      sublabel: 'Building digital products since 2020',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      from: '#0284c7',
      to: '#2563eb',
      glow: 'rgba(2,132,199,0.08)',
      border: '#e2e8f0',
      hoverBorder: 'rgba(2,132,199,0.4)',
      bar: 85,
    },
    {
      id: 2,
      number: '20+',
      label: 'Projects Delivered',
      sublabel: 'Across web, mobile and enterprise',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      from: '#2563eb',
      to: '#4f46e5',
      glow: 'rgba(37,99,235,0.08)',
      border: '#e2e8f0',
      hoverBorder: 'rgba(37,99,235,0.4)',
      bar: 92,
    },
    {
      id: 3,
      number: '15+',
      label: 'Happy Clients',
      sublabel: 'Trusted by startups & enterprises',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      from: '#0891b2',
      to: '#0284c7',
      glow: 'rgba(8,145,178,0.08)',
      border: '#e2e8f0',
      hoverBorder: 'rgba(8,145,178,0.4)',
      bar: 78,
    },

  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We lead with cutting-edge technology and creative thinking to solve complex challenges.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      accent: 'from-cyan-500 to-blue-600',
      color: 'rgba(6,182,212,0.8)',
      glowColor: 'rgba(6,182,212,0.06)',
      side: 'left',
    },
    {
      title: 'Excellence Driven',
      description: 'Every project is crafted with meticulous attention to detail and commitment to quality.',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      accent: 'from-violet-500 to-purple-600',
      color: 'rgba(124,58,237,0.8)',
      glowColor: 'rgba(124,58,237,0.06)',
      side: 'right',
    },
    {
      title: 'Partnership Focused',
      description: 'We treat every client as a true partner, deeply invested in their success and long-term vision.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      accent: 'from-emerald-500 to-teal-600',
      color: 'rgba(16,185,129,0.8)',
      glowColor: 'rgba(16,185,129,0.06)',
      side: 'left',
    },
    {
      title: 'Agile & Adaptive',
      description: 'We move fast, iterate smart, and adapt to your evolving needs throughout the entire journey.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      accent: 'from-amber-500 to-orange-600',
      color: 'rgba(217,119,6,0.8)',
      glowColor: 'rgba(217,119,6,0.06)',
      side: 'right',
    },
    {
      title: 'Client-Centric',
      description: 'Your goals drive every decision we make. Your satisfaction is our ultimate measure of success.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      accent: 'from-rose-500 to-pink-600',
      color: 'rgba(225,29,72,0.8)',
      glowColor: 'rgba(225,29,72,0.06)',
      side: 'left',
    },
    {
      title: 'Full Transparency',
      description: 'Open communication, honest timelines, and clear reporting — no surprises, ever.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      accent: 'from-sky-500 to-indigo-600',
      color: 'rgba(14,165,233,0.8)',
      glowColor: 'rgba(14,165,233,0.06)',
      side: 'right',
    },
  ]

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 overflow-hidden">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#f8fafc] pt-32 pb-10">
        {/* Dot Grid Pattern Overlay */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.05 }} >
          <defs>
            <pattern id="dotGridHero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGridHero)" />
        </svg>

        {/* Background Canvas Effect */}
        <AboutCanvasBackground />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (60%) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8">
                  <span className="text-slate-900">About </span>
                  <span style={{
                    backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Sapphire Infotech Solutions
                  </span>
                </h1>

                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  We're a passionate team of digital craftspeople dedicated to creating exceptional digital experiences. Our mission is to help businesses transform their ideas into reality through innovative technology solutions.
                </p>

                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Founded in 2022, we've grown from a small startup to a leading digital agency, working with clients ranging from innovative startups to enterprise leaders. Our approach combines technical expertise with creative vision to deliver solutions that not only meet but exceed expectations.
                </p>

                <div className="space-y-3 pt-6">
                  {[
                    'Innovation-driven approach',
                    'Agile development methodology',
                    '24/7 support and maintenance',
                    'Transparent communication'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 text-base font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column (40%) - Stat Cards Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden hover:border-rose-400 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-rose-400 transition-colors duration-500">
                    <svg className="w-7 h-7 text-rose-500 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 text-4xl font-black text-slate-900 mb-2 tracking-tight">30+</div>
                  <div className="relative z-10 text-sm text-slate-600 font-bold">Expert Team Members</div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden hover:border-indigo-400 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-400 transition-colors duration-500">
                    <svg className="w-7 h-7 text-indigo-500 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 text-4xl font-black text-slate-900 mb-2 tracking-tight">3+</div>
                  <div className="relative z-10 text-sm text-slate-600 font-bold">Years of Experience</div>
                </motion.div>



                {/* Card 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.75 }}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden hover:border-emerald-500 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-colors duration-500">
                    <svg className="w-7 h-7 text-emerald-500 relative z-10 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 text-4xl font-black text-slate-900 mb-2 tracking-tight">15+</div>
                  <div className="relative z-10 text-sm text-slate-600 font-bold">Happy Clients</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section ref={missionRef} className="relative py-8 md:py-12 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden text-center pointer-events-none select-none hidden md:block">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[12rem] lg:text-[18rem] font-black text-slate-900/[0.02] tracking-tighter uppercase whitespace-nowrap"
            >
              MISSION
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              initial={{ height: 0 }}
              animate={isMissionInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-1.5 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" 
            />
            
            <div className="pl-10 md:pl-16 relative">
              <div className="absolute -top-10 -left-2 text-[8rem] text-blue-500/10 font-serif font-bold leading-none pointer-events-none select-none">"</div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.1em] text-blue-600 uppercase mb-5 flex items-center gap-4"
              >
                Our Mission
                <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 leading-normal lg:leading-[1.5] max-w-4xl"
              >
                To empower businesses with <span className="font-bold text-slate-900">innovative digital solutions</span> that not only meet their needs but <span style={{ backgroundImage: 'linear-gradient(to right, #0284c7, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} className="font-black">exceed their expectations</span> — delivering measurable growth through technology, creativity, and an unwavering commitment to excellence.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section ref={valuesRef} className="relative py-12 md:py-20 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-blue-600 inline-block" />
              What We Stand For
              <span className="w-8 h-[2px] bg-blue-600 inline-block" />
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              Our Core <span style={{ backgroundImage: 'linear-gradient(to right, #0891b2, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Values</span>
            </h2>
          </motion.div>

          {/* Hub and Spoke Layout */}
          <div className="relative flex flex-col md:flex-row items-stretch gap-0">

            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col justify-around gap-8 md:pr-8">
              {values.filter(v => v.side === 'left').map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative flex items-center"
                >
                  <motion.div
                    className="relative w-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden cursor-pointer"
                    style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}
                    whileHover={{ 
                      borderColor: value.color, 
                      boxShadow: `0 10px 30px ${value.glowColor}` 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: value.glowColor, border: `1px solid ${value.color}` }}>
                        <svg className="w-5 h-5" style={{ color: value.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg text-center mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed font-normal">{value.description}</p>
                  </motion.div>

                  <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 items-center">
                    <div className="w-8 border-t-2 border-dashed border-slate-300" />
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: value.color }} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CENTER BEAM */}
            <div className="hidden md:flex relative flex-col items-center flex-shrink-0 w-12">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isValuesInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="w-[2px] h-full origin-top bg-slate-200"
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-md"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1 flex flex-col justify-around gap-8 md:pl-8 mt-8 md:mt-0">
              {values.filter(v => v.side === 'right').map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  className="group relative flex items-center"
                >
                  <div className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 items-center">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: value.color }} />
                    <div className="w-8 border-t-2 border-dashed border-slate-300" />
                  </div>

                  <motion.div
                    className="relative w-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden cursor-pointer"
                    style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}
                    whileHover={{ 
                      borderColor: value.color, 
                      boxShadow: `0 10px 30px ${value.glowColor}` 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: value.glowColor, border: `1px solid ${value.color}` }}>
                        <svg className="w-5 h-5" style={{ color: value.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg text-center mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed font-normal">{value.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===== ENHANCED STATS SECTION ===== */}
      <section ref={statsRef} className="relative py-24 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-blue-600 inline-block" />
              Our Impact
              <span className="w-8 h-[2px] bg-blue-600 inline-block" />
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900">
              By The <span style={{ backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Numbers</span>
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group"
                whileHover={{ y: -8 }}
              >
                <div
                  className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-md h-full transition-all duration-500 cursor-pointer"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.hoverBorder }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                >
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${card.from}12`, border: `1px solid ${card.from}33` }}>
                      <svg className="w-6 h-6" style={{ color: card.from }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                      </svg>
                    </div>
                  </div>

                  <div className="relative mb-2">
                    <span className="text-5xl font-black tracking-tight bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${card.from}, ${card.to})` }}>
                      {card.number}
                    </span>
                  </div>

                  <div className="text-slate-900 font-bold text-lg mb-1">{card.label}</div>
                  <div className="text-slate-500 text-sm mb-6 font-medium leading-tight">{card.sublabel}</div>

                  <div className="relative h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: `linear-gradient(to right, ${card.from}, ${card.to})` }}
                      initial={{ width: 0 }}
                      animate={isStatsInView ? { width: `${card.bar}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <TechStack />

      {/* ===== STORY SECTION ===== */}
      <section ref={storyRef} className="relative py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
          
          {/* Centered Single Column Text Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <p className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">
              How It Started
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
              Our <span style={{ backgroundImage: 'linear-gradient(to right, #0891b2, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Story</span>
            </h2>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p>
                Founded in <span className="text-slate-900 font-bold">2022</span> by a group of passionate developers and designers, Sapphire Infotech Solutions began with a simple vision: to craft high-performance digital experiences that truly matter to the people who use them.
              </p>
              <p>
                In just <span className="text-blue-600 font-bold">3+ years</span>, we've grown into a dynamic studio of <span className="text-slate-900 font-bold">30+ expert professionals</span> — developers, designers, and strategists — all united by an unwavering commitment to excellence and innovation.
              </p>
              <p>
                Today, we've delivered <span className="text-slate-900 font-bold">20+ successful projects</span> for <span className="text-slate-900 font-bold">15+ happy clients</span>  helping businesses of all sizes transform their digital infrastructure.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <TeamSpotlight />

      <Footer />
    </div>
  )
}