
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Web Development',
    description: 'Blazing-fast web apps built with React, Next.js, and Node.js. Scalable architecture from landing pages to full SaaS platforms.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 8L10 11L7 14M13 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#2563EB',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform iOS & Android apps with React Native and Flutter — smooth, native-feel experiences users love.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
        <path d="M9 6H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#0891B2',
  },
  {
    title: 'UI/UX Design',
    description: 'Research-driven, pixel-perfect interfaces crafted in Figma. From wireframes to polished design systems.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: '#7C3AED',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Bulletproof CI/CD pipelines, Docker/Kubernetes, and AWS/GCP infrastructure with 99.9% uptime SLAs.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M18 10H6C3.79 10 2 11.79 2 14C2 16.21 3.79 18 6 18H18C20.21 18 22 16.21 22 14C22 11.79 20.21 10 18 10Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V10M9 8L12 5L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#059669',
  },
  {
    title: 'API Development',
    description: 'RESTful & GraphQL APIs built for scale. Seamless integrations with third-party services and legacy systems.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M15 7H9C7.34 7 6 8.34 6 10V14C6 15.66 7.34 17 9 17H15C16.66 17 18 15.66 18 14V10C18 8.34 16.66 7 15 7Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 11H15M9 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#DB2777',
  },
  {
    title: 'Consulting',
    description: 'Technology strategy, digital transformation roadmaps, and architecture reviews to align tech with business goals.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 20C5 17.24 8.13 15 12 15C15.87 15 19 17.24 19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 8H22M17.5 5.5L19.5 3.5M17.5 10.5L19.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#D97706',
  },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative h-full p-6 rounded-2xl overflow-hidden transition-all duration-500 bg-white border border-slate-200"
        style={{
          background: hovered
            ? `radial-gradient(circle at 0% 0%, #ffffff 0%, #f8fafc 100%)`
            : '#ffffff',
          borderColor: hovered ? `${service.color}40` : '#e2e8f0',
          backdropFilter: 'blur(14px)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 20px 30px -10px rgba(0,0,0,0.04), 0 0 25px -5px ${service.color}15`
            : '0 4px 6px -1px rgba(0,0,0,0.02)',
          cursor: 'pointer',
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
            opacity: hovered ? 0.85 : 0.2,
          }}
        />

        {/* Glow blob */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: service.color,
            opacity: hovered ? 0.12 : 0.04,
            filter: 'blur(36px)',
          }}
        />

        {/* Icon */}
        <div
          className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-400"
          style={{
            background: hovered ? service.color : `${service.color}10`,
            border: `1px solid ${service.color}20`,
            color: hovered ? '#ffffff' : service.color,
          }}
        >
          {service.icon}
        </div>

        <h3 className="relative z-10 text-slate-900 text-lg font-bold mb-2 tracking-tight">
          {service.title}
        </h3>
        <p className="relative z-10 text-slate-600 text-sm leading-relaxed font-normal">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}






export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className="relative pt-17 pb-8 bg-[#f8fafc] overflow-hidden scroll-mt-24"
    >
   

      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="dotSvc" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotSvc)" />
      </svg>

    
   



      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.03), transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-slate-900">
            <span>Our Core </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563EB, #0891B2)' }}>
              Services
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-3 md:mb-16 font-medium">
            End-to-end digital solutions crafted to turn your vision into a competitive advantage.
          </p>
        </motion.div>

        {/* Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <Link key={service.title} to="/services">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>

        {/* Link to full Services page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/10 transition-colors duration-200"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}