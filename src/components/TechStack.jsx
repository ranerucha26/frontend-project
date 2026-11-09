import { motion, useInView, AnimatePresence } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'

const technologies = [
  // Frontend
  { name: 'React', icon: 'devicon-react-original', category: 'Frontend', color: '#38BDF8', description: 'Modern UI & Component Architecture' },
  { name: 'Flutter', icon: 'devicon-flutter-plain', category: 'Frontend', color: '#38BDF8', description: "Google's UI toolkit for high-performance apps" },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', category: 'Frontend', color: '#06B6D4', description: 'Utility-first modern CSS framework' },
  
  // Backend
  { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'Backend', color: '#10B981', description: "JavaScript runtime built on Chrome's V8 engine" },
  { name: 'Express.js', icon: 'devicon-express-original', category: 'Backend', color: '#94A3B8', description: 'Fast, unopinionated web framework for Node.js' },
  { name: 'Django', icon: 'devicon-django-plain', category: 'Backend', color: '#059669', description: 'High-level Python web framework' },
  
  // Database
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'Database', color: '#10B981', description: 'Scalable NoSQL document-oriented database' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain', category: 'Database', color: '#60A5FA', description: 'Self-contained lightweight SQL engine' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'Database', color: '#3B82F6', description: 'Enterprise open-source relational database' },
  
  // DevOps
  { name: 'Docker', icon: 'devicon-docker-plain', category: 'DevOps', color: '#0284C7', description: 'Platform for developing and shipping applications' },
  { name: 'AWS Cloud', icon: 'devicon-amazonwebservices-plain-wordmark', category: 'DevOps', color: '#F59E0B', description: 'Amazon Web Services elastic cloud platform' },
  { name: 'Git & GitHub', icon: 'devicon-git-plain', category: 'DevOps', color: '#F97316', description: 'Distributed version control & CI workflow' },
  { name: 'CI / CD', icon: 'devicon-githubactions-plain', category: 'DevOps', color: '#8B5CF6', description: 'Continuous integration and automated delivery' },
  
  // Design
  { name: 'Figma', icon: 'devicon-figma-plain', category: 'Design', color: '#EC4899', description: 'Collaborative cloud interface design tool' },
  { name: 'Adobe XD', icon: 'devicon-xd-plain', category: 'Design', color: '#F43F5E', description: 'Vector-based UI/UX prototype design tool' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function TechCard({ tech }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: -16, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-slate-900/95 backdrop-blur-xl text-white px-4 py-2.5 rounded-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/70 text-center min-w-[170px] max-w-[230px]">
              <div className="font-bold text-xs text-cyan-300 font-mono tracking-wide">{tech.name}</div>
              <div className="text-slate-300 text-[11px] mt-1 leading-snug font-light">{tech.description}</div>
              
              {/* Arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-cyan-500/50"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Card */}
      <motion.div
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group overflow-hidden"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at center, ${tech.color}18, rgba(15, 23, 42, 0.8) 75%)` 
            : 'rgba(15, 23, 42, 0.65)',
          border: isHovered 
            ? `1px solid ${tech.color}80` 
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered 
            ? `0 15px 35px -10px ${tech.color}40, 0 0 20px ${tech.color}20` 
            : '0 10px 25px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Subtle Category Pill on Top Right */}
        <span 
          className="absolute top-2.5 right-2.5 text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-full"
          style={{
            backgroundColor: `${tech.color}15`,
            color: isHovered ? tech.color : '#94a3b8',
            border: `1px solid ${tech.color}30`,
          }}
        >
          {tech.category}
        </span>

        {/* Devicon Icon */}
        <div className="relative mb-2 flex items-center justify-center">
          <i
            className={`${tech.icon} text-4xl sm:text-5xl transition-all duration-300`}
            style={{
              color: isHovered ? tech.color : '#cbd5e1',
              filter: isHovered ? `drop-shadow(0 0 10px ${tech.color}60)` : 'none',
            }}
          />
        </div>

        {/* Tech Name */}
        <span className="text-white text-xs sm:text-sm font-bold text-center tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [techCount, setTechCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Design']

  const filteredTechs = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory)

  // Animated Counter
  useEffect(() => {
    if (isInView) {
      const targetCount = filteredTechs.length
      const duration = 1200
      const steps = 30
      const increment = targetCount / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= targetCount) {
          setTechCount(targetCount)
          clearInterval(timer)
        } else {
          setTechCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, filteredTechs.length])

  return (
    <section id="tech-stack" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 shadow-sm shadow-cyan-950">
            <span>Tech Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Technologies{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              We Use
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-6">
            Built with cutting-edge stack components, reliable frameworks, and scalable development utilities.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono">
            <span className="text-cyan-400 font-bold text-sm">{techCount}+</span>
            <span>Tools & Frameworks Integrated</span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/[0.08] p-1.5 rounded-full flex flex-wrap justify-center gap-1 shadow-lg shadow-black/40">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md shadow-cyan-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tech Cards Grid with Real Devicons and Hover Tooltips */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center"
          >
            {filteredTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
