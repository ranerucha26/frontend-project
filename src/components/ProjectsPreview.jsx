import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, Stripe payment integration, and a blazing-fast storefront.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#3B82F6',
    stat: '3× faster checkout',
    statIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    category: 'Web App',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A real-time analytics dashboard for a B2B SaaS company, featuring interactive charts, custom reporting, and role-based access control.',
    tags: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
    color: '#06B6D4',
    stat: '40% reduced churn',
    statIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    category: 'SaaS',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure, cross-platform mobile banking application with biometric authentication, instant transfers, and an intuitive financial overview.',
    tags: ['React Native', 'Firebase', 'Redux'],
    color: '#a855f7',
    stat: '4.9★ App Store Rating',
    statIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    category: 'Mobile',
  },
]

export default function ProjectsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 bg-[#030816] overflow-hidden">
      {/* Background mesh */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.02 }}>
        <defs>
          <pattern id="dotGridProj" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGridProj)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="text-white">Featured </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #06B6D4)' }}
            >
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real solutions we've shipped for our clients — from startups to enterprise.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #3b0764, #4c1d95)',
                border: '1px solid rgba(168,85,247,0.4)',
                boxShadow: '0 0 30px rgba(168,85,247,0.2)',
              }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(145deg, ${project.color}18 0%, rgba(2,8,23,0.95) 60%)`
            : 'rgba(15, 23, 42, 0.5)',
          border: `1px solid ${hovered ? project.color + '50' : project.color + '15'}`,
          backdropFilter: 'blur(12px)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 25px 50px -12px rgba(0,0,0,0.7), 0 0 40px -10px ${project.color}40`
            : '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top accent */}
        <div
          className="h-[3px] w-full transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            opacity: hovered ? 0.9 : 0.3,
          }}
        />

        <div className="p-7">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.category}
            </span>
            {/* Stat pill */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              {project.statIcon}
              {project.stat}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-3 tracking-tight transition-colors duration-300 group-hover:text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full text-slate-300"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View project arrow */}
          <div
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-300"
            style={{ color: hovered ? project.color : '#475569' }}
          >
            View Case Study
            <svg
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Background glow */}
        <div
          className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${project.color}25, transparent 70%)`,
            opacity: hovered ? 1 : 0.2,
            filter: 'blur(40px)',
          }}
        />
      </div>
    </motion.div>
  )
}
