import { motion, useInView, AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'

const technologies = [
  // Frontend (blue glow)
  { name: 'React', icon: 'devicon-react-original', category: 'Frontend', color: '#3B82F6', description: 'A JavaScript library for building user interfaces' },
  { name: 'Flutter', icon: 'devicon-flutter-plain', category: 'Frontend', color: '#3B82F6', description: 'Google\'s UI toolkit for beautiful apps' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', category: 'Frontend', color: '#3B82F6', description: 'Utility-first CSS framework' },
  
  // Backend (cyan glow)
  { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'Backend', color: '#06B6D4', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
  { name: 'Express.js', icon: 'devicon-express-original', category: 'Backend', color: '#06B6D4', description: 'Fast, unopinionated web framework for Node.js' },
  { name: 'Django', icon: 'devicon-django-plain', category: 'Backend', color: '#06B6D4', description: 'High-level Python web framework' },
  
  // Database (pink glow)
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'Database', color: '#ec4899', description: 'NoSQL document-oriented database' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain', category: 'Database', color: '#ec4899', description: 'Self-contained SQL database engine' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'Database', color: '#ec4899', description: 'Powerful open source relational database' },
  
  // DevOps (purple glow)
  { name: 'Docker', icon: 'devicon-docker-plain', category: 'DevOps', color: '#a855f7', description: 'Platform for developing and running applications' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', category: 'DevOps', color: '#a855f7', description: 'Amazon Web Services cloud platform' },
  { name: 'Git', icon: 'devicon-git-plain', category: 'DevOps', color: '#a855f7', description: 'Distributed version control system' },
  { name: 'CI/CD', icon: 'devicon-githubactions-plain', category: 'DevOps', color: '#a855f7', description: 'Continuous Integration and Deployment' },
  
  // Design (orange glow)
  { name: 'Figma', icon: 'devicon-figma-plain', category: 'Design', color: '#f97316', description: 'Collaborative interface design tool' },
  { name: 'Adobe XD', icon: 'devicon-xd-plain', category: 'Design', color: '#f97316', description: 'Vector-based UX design tool' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const floatAnimation = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [techCount, setTechCount] = useState(0)

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Design']

  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory)

  // Animated counter
  React.useEffect(() => {
    if (isInView) {
      const targetCount = filteredTech.length
      const duration = 2000
      const steps = 60
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
  }, [isInView, filteredTech.length])

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-[#f8fafc] overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Subtle Animated Background Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.05), transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(8,145,178,0.04), transparent 70%)',
            filter: 'blur(5px)'
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Dot Grid Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full z-0"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <pattern id="dotGridTech" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGridTech)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-slate-900" style={{ letterSpacing: '-0.03em' }}>
            <span>Technologies</span>{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB, #7C3AED)' }}
            >
              We Use
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Built with cutting-edge stack components, reliable frameworks, and scalable development utilities.
          </p>
          
          {/* Animated Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6"
          >
            <span 
              className="text-3xl font-black bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #0f172a, #2563eb)' }}
            >
              {techCount}+
            </span>
            <span className="text-slate-500 ml-2 text-lg font-bold">Tools & Frameworks Integrated</span>
          </motion.div>
        </motion.div>

        {/* Premium Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/15 border border-blue-500'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900 shadow-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center"
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            {filteredTech.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function TechCard({ tech, index }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!isMobile ? {
          scale: 1.05,
          rotateX: 5,
          rotateY: 8,
          y: -5,
        } : {
          scale: 1.05,
          y: -5,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          variants={floatAnimation}
          animate="animate"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0)'
          }}
        >
          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -15 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50 shadow-md"
              >
                <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap border border-slate-800 text-center">
                  <div className="font-bold text-sm">{tech.name}</div>
                  <div className="text-slate-300 text-xs mt-0.5 max-w-[180px] whitespace-normal leading-tight">{tech.description}</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards transformed into elegant Dark Blue layout */}
          <div
            className="w-full h-36 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer border border-slate-800 bg-[#0b1329]"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '20px',
              boxShadow: `0 10px 20px -5px rgba(11,19,41,0.3)`,
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 15px 30px -10px ${tech.color}50, 0 0 15px ${tech.color}20`
              e.currentTarget.style.borderColor = `${tech.color}80`
              e.currentTarget.style.backgroundColor = '#0f1c3f'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 20px -5px rgba(11,19,41,0.3)`
              e.currentTarget.style.borderColor = `#1e293b`
              e.currentTarget.style.backgroundColor = '#0b1329'
            }}
          >
            {/* Icon Container */}
            <div className="relative mb-2">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-400 bg-slate-900/60"
                style={{
                  border: `1px solid rgba(255,255,255,0.05)`,
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                <i 
                  className={`${tech.icon}`}
                  style={{ 
                    fontSize: '56px',
                    color: isHovered ? tech.color : '#94a3b8',
                    transition: 'color 0.3s ease',
                    filter: isHovered ? `drop-shadow(0 0 6px ${tech.color}40)` : 'none'
                  }}
                />
              </div>
              
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: tech.color,
                    top: `${8 + i * 12}px`,
                    left: `${64 + i * 4}px`
                  }}
                  animate={{
                    x: [0, Math.random() * 10 - 5, 0],
                    y: [0, Math.random() * 10 - 5, 0],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Tech Name */}
            <span className="text-white text-sm font-bold text-center mt-2">
              {tech.name}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}