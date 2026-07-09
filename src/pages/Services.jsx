import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Monitor, Smartphone, PenTool, Cloud, Settings, Link2, BarChart, Lightbulb, Building, Search, Code, Rocket, Users, Zap, Clock, TrendingUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices. Scalable, secure, and performance-optimized solutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7V17L12 22L2 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'development',
    features: ['React/Vue/Angular', 'Node.js/Python', 'RESTful APIs', 'Cloud deployment'],
    color: '#3B82F6'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Engaging user experiences with cutting-edge frameworks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    category: 'development',
    features: ['React Native/Flutter', 'iOS/Android Native', 'App Store Optimization', 'Push Notifications'],
    color: '#3B82F6'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that delight your users. Research-driven design for optimal user experiences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7V17L12 22L2 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    category: 'development',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#3B82F6'
  },
  {
    title: 'Cloud Solutions & Infrastructure',
    description: 'Scalable cloud infrastructure and deployment solutions on AWS, Google Cloud, and Azure. We design systems that grow with your business.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10H6C4.69 10 3 13.31 3 16V20C3 21.55 4.45 22 6V22H18C19.55 22 21 21.55 18 20V16C21 13.31 19.31 10 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'cloud',
    features: ['AWS/GCP/Azure expertise', 'Auto-scaling', '99.9% uptime SLA', 'Cost optimization'],
    color: '#0891B2'
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, containerization with Docker/Kubernetes, and infrastructure automation for seamless deployments and rapid iteration.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="3" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 15L9 18M12 15L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    category: 'devops',
    features: ['Docker & Kubernetes', 'GitLab/GitHub CI-CD', 'Infrastructure as Code', 'Monitoring & Logging'],
    color: '#7C3AED'
  },
  {
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs built for scalability and performance. Seamless integration with third-party services and legacy systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7H9C7.34 7 6 8.34 6 10V14C6 15.66 7.34 16 9V16H15C16.66 16 18 15.66 18 14V10C18 8.34 16.66 7 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    category: 'api',
    features: ['RESTful & GraphQL APIs', 'Third-party integrations', 'Rate limiting', 'API security & documentation'],
    color: '#DB2777'
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Transform raw data into actionable insights. Custom dashboards, real-time analytics, and predictive modeling to drive informed decisions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21V3H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H17V17H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    category: 'data',
    features: ['Data pipeline design', 'Real-time dashboards', 'Predictive analytics', 'BI tools integration'],
    color: '#EA580C'
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security audits, penetration testing, and compliance solutions. GDPR, HIPAA, SOC2 certified implementations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12.55 22 13.05 21.95 13.54 21.76 14.24 21.4 14.81 20.83 15.19 20.21 15.46 19.56 15.68 18.87 15.81 18.15 15.87 17.37 15.81 17.48 16.24 16.81 16.8 17.05 16.48 17.08 16.64 17.18 16.56 17.27 16.44 17.37 16.28 17.48 16.08 17.59 15.84 17.71 15.56 17.84 15.24 18 14.88 18.17 14.48 18.35 14.04 18.54 13.56 18.74 13.04 18.95 12.48 19.17 11.88 19.4 11.24 19.65 10.56 19.91 9.84 20.18 9.08 20.46 8.28 20.75 7.44 21.05 6.56 21.36 5.64 21.68 4.68 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.93 4.93L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'security',
    features: ['Security audits', 'Penetration testing', 'GDPR/HIPAA compliance', 'Encryption & SSL'],
    color: '#DC2626'
  },
  {
    title: 'Consulting & Strategy',
    description: 'Technology strategy, digital transformation roadmaps, and architectural guidance to align technology with your business goals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15V13H9V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9L16 13L8 18L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'consulting',
    features: ['Tech stack evaluation', 'Architecture design', 'Digital roadmaps', 'Team mentoring'],
    color: '#059669'
  }
]

const NetworkStyles = () => (
  <style>{`
    @keyframes netNodeFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes netCenterPulse {
      0%, 100% { box-shadow: 0 0 20px rgba(37,99,235,0.2), inset 0 0 15px rgba(37,99,235,0.1); }
      50% { box-shadow: 0 0 35px rgba(37,99,235,0.4), inset 0 0 25px rgba(37,99,235,0.2); }
    }
    @keyframes netLinePulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.6; }
    }
    @keyframes netDashFlow {
      from { stroke-dashoffset: 24; }
      to { stroke-dashoffset: 0; }
    }
  `}</style>
)

const HeroAmbient = () => {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 70% at 75% 50%, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.03) 45%, transparent 75%)',
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.07 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="svcMesh" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(37,99,235,0.6)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svcMesh)" />
      </svg>
    </div>
  )
}

const TechNetwork = () => {
  const nodes = [
    { label: 'Web Dev', icon: Monitor, color: '#2563EB', angle: 0 },
    { label: 'Mobile App', icon: Smartphone, color: '#0891B2', angle: 45 },
    { label: 'UI/UX', icon: PenTool, color: '#7C3AED', angle: 90 },
    { label: 'Cloud', icon: Cloud, color: '#0891B2', angle: 135 },
    { label: 'DevOps', icon: Settings, color: '#2563EB', angle: 180 },
    { label: 'API', icon: Link2, color: '#7C3AED', angle: 225 },
    { label: 'Data', icon: BarChart, color: '#2563EB', angle: 270 },
    { label: 'Consulting', icon: Lightbulb, color: '#0891B2', angle: 315 },
  ]
  const networkRadius = 135

  return (
    <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 42vw, 380px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg style={{ position: 'absolute', width: '480px', height: '480px', overflow: 'visible', zIndex: 0 }} viewBox="-240 -240 480 480">
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180
          const x = Math.cos(rad) * 160
          const y = Math.sin(rad) * 160
          
          return (
            <g key={`line-${i}`} style={{ animation: `netLinePulse ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
              <line x1="0" y1="0" x2={x} y2={y} stroke={n.color} strokeWidth="1.5" strokeOpacity="0.3" />
              <line 
                x1="0" y1="0" x2={x} y2={y} 
                stroke={n.color} strokeWidth="2" 
                strokeDasharray="4 20" 
                style={{
                  animation: `netDashFlow ${2 + i % 3}s linear infinite`,
                  animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                }} 
              />
            </g>
          )
        })}
      </svg>

      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180
        const x = Math.cos(rad) * 160
        const y = Math.sin(rad) * 160
        const Icon = n.icon
        
        return (
          <div
            key={n.label}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px - 30px)`,
              top: `calc(50% + ${y}px - 30px)`,
              width: '60px', height: '60px',
              borderRadius: '50%',
              background: `radial-gradient(circle at center, #ffffff 40%, ${n.color}15 100%)`,
              border: `1px solid ${n.color}40`,
              boxShadow: `0 8px 20px -4px rgba(0,0,0,0.08), 0 0 12px ${n.color}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
              animation: `netNodeFloat ${4 + i % 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              transition: 'all 0.3s ease',
            }}
          >
            <Icon className="w-6 h-6" style={{ color: n.color }} />
          </div>
        )
      })}

      <div style={{
        position: 'absolute',
        width: '90px', height: '90px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, #ffffff, #f1f5f9)',
        border: '2px solid rgba(37,99,235,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 5,
        boxShadow: '0 10px 25px -5px rgba(37,99,235,0.15)',
        animation: 'netCenterPulse 3s ease-in-out infinite'
      }}>
        <Building className="w-10 h-10 text-blue-600" />
      </div>
    </div>
  )
}

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container altered into dark blue theme */}
      <div
        className="h-full p-8 rounded-[20px] transition-all duration-500 ease-out relative overflow-hidden"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at 0% 0%, #0f1c3f 0%, #0b1329 100%)`
            : `#0b1329`,
          border: `1px solid ${isHovered ? service.color + '70' : '#1e293b'}`,
          backdropFilter: 'blur(16px)',
          boxShadow: isHovered 
            ? `0 20px 35px -10px rgba(11,19,41,0.3), 0 0 25px -5px ${service.color}25` 
            : `0 10px 20px -5px rgba(11,19,41,0.15)`,
          transform: isHovered ? 'translateY(-6px)' : 'none',
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
            opacity: isHovered ? 0.9 : 0.4,
          }}
        />

        <div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: service.color,
            opacity: isHovered ? 0.2 : 0.08 
          }}
        />

        <div 
          className="mb-8 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 bg-slate-900/60"
          style={{ 
            border: `1px solid ${isHovered ? service.color : 'rgba(255,255,255,0.08)'}`,
            color: isHovered ? '#ffffff' : service.color,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            boxShadow: isHovered ? `0 0 15px ${service.color}40` : 'none'
          }}
        >
          {service.icon}
        </div>
        
        {/* Texts switched over to high-contrast white treatments */}
        <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-8 font-normal min-h-[60px]">
          {service.description}
        </p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-200 font-medium">
              <svg 
                className="w-4 h-4 mr-3 shrink-0 transition-colors duration-300" 
                style={{ color: service.color }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const TimelineProcess = () => {
  const steps = [
    {
      title: 'Discovery & Planning',
      description: 'We understand your goals, challenges, and vision through detailed discovery calls and market research.',
      icon: Search,
      color: '#0891B2',
      glowClass: 'shadow-[0_10px_30px_rgba(8,145,178,0.05)]',
    },
    {
      title: 'Design & Architecture',
      description: 'Our architects design scalable, secure solutions tailored to your requirements.',
      icon: PenTool,
      color: '#2563EB',
      glowClass: 'shadow-[0_10px_30px_rgba(37,99,235,0.05)]',
    },
    {
      title: 'Development & Testing',
      description: 'Agile development with continuous integration, rigorous testing, and quality assurance.',
      icon: Code,
      color: '#7C3AED',
      glowClass: 'shadow-[0_10px_30px_rgba(124,58,237,0.05)]',
    },
    {
      title: 'Deploy & Support',
      description: 'Seamless deployment, monitoring, and 24/7 support to ensure optimal performance.',
      icon: Rocket,
      color: '#0891B2',
      glowClass: 'shadow-[0_10px_30px_rgba(8,145,178,0.05)]',
    }
  ]

  return (
    <div className="relative max-w-5xl mx-auto py-10 px-4">
      <div 
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 transform md:-translate-x-1/2"
      >
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-[flowDown_4s_linear_infinite]" />
      </div>

      {steps.map((step, index) => {
        const isLeft = index % 2 === 0
        const Icon = step.icon

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative flex items-center mb-10 md:mb-10 ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-row`}
          >
            <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 transform -translate-x-1/2 md:translate-x-0 md:-ml-2 z-10`}
                 style={{ borderColor: step.color }} />

            <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 pl-12 md:pl-0' : 'md:pl-16 pl-12'}`}>
              <div 
                className={`group relative p-6 rounded-[16px] border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] ${step.glowClass}`}
                style={{
                  background: `linear-gradient(145deg, #ffffff, ${step.color}05)`,
                }}
              >
                <div 
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[1px] opacity-40 ${
                    isLeft ? '-right-16' : '-left-16'
                  }`}
                  style={{ backgroundColor: step.color }}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div 
                    className="shrink-0 w-16 h-16 rounded-[12px] flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <div className="text-sm font-mono font-bold tracking-wider mb-1" style={{ color: step.color }}>
                      STEP 0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

const FlipCardsNetwork = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full max-w-[1200px]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="network-grad-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <linearGradient id="network-grad-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DB2777" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        <g opacity="0.15">
          <motion.path
            className="hidden lg:block"
            d="M 166 250 C 330 150, 660 350, 833 250"
            stroke="url(#network-grad-top)" strokeWidth="3" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            className="hidden lg:block"
            d="M 166 750 C 330 850, 660 650, 833 750"
            stroke="url(#network-grad-bottom)" strokeWidth="3" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </g>
      </svg>
    </div>
  )
}

const FlipCard = ({ card, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = card.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      className="relative w-full aspect-square max-w-[280px] mx-auto"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px', cursor: 'pointer' }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0, y: isFlipped ? -8 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[16px] p-8 flex flex-col items-center justify-center text-center overflow-hidden bg-white"
          style={{
            border: `1px solid #e2e8f0`,
            boxShadow: `0 10px 25px -5px rgba(0,0,0,0.04)`,
            backfaceVisibility: 'hidden',
          }}
        >
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
            style={{ 
              background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`,
            }}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-slate-900 text-xl font-bold tracking-wide">{card.title}</h3>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[16px] p-6 flex flex-col items-center justify-center text-center overflow-hidden bg-slate-900"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full" style={{ background: card.color }} />
          <div className="absolute right-0 top-6 bottom-6 w-1 rounded-l-full" style={{ background: card.color }} />

          <motion.div
            className="relative z-10 w-full"
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-[15px] font-medium leading-[1.7] px-2">
              {card.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  useScrollToTop()

  const flipCardsData = [
    {
      title: 'Expert Team',
      description: '25+ certified professionals with 5+ years combined experience in cutting-edge technologies.',
      icon: Users,
      color: '#7C3AED',
      gradient: ['#7C3AED', '#2563EB']
    },
    {
      title: 'Agile Approach',
      description: 'Rapid iteration, transparent communication, flexible timelines that adapt to your needs.',
      icon: Zap,
      color: '#0891B2',
      gradient: ['#0891B2', '#2563EB']
    },
    {
      title: 'Modern Stack',
      description: 'Latest technologies, best practices, future-proof solutions built for scalability.',
      icon: Code,
      color: '#2563EB',
      gradient: ['#2563EB', '#4F46E5']
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team always available for your needs, issues resolved within hours.',
      icon: Clock,
      color: '#DB2777',
      gradient: ['#DB2777', '#7C3AED']
    },
    {
      title: 'Cost Effective',
      description: 'Transparent pricing, no hidden costs, flexible engagement models that fit your budget.',
      icon: TrendingUp,
      color: '#0D9488',
      gradient: ['#0D9488', '#0891B2']
    },
    {
      title: 'Proven Track Record',
      description: '15+ happy clients, 2+ countries served, 99.9% project success rate.',
      icon: Award,
      color: '#D97706',
      gradient: ['#D97706', '#CA8A04']
    }
  ]

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800">
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ minHeight: 'auto', paddingTop: '100px', paddingBottom: '24px' }}>
          <NetworkStyles />
          <HeroAmbient />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{
              position: 'relative', zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            {/* LEFT — Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
              style={{ flex: '3 1 340px', minWidth: 0 }}
            >
              <h1 style={{
                fontWeight: 900,
                fontSize: 'clamp(42px, 5.5vw, 64px)',
                lineHeight: 1.1,
                letterSpacing: '-1px',
                marginBottom: '24px',
              }}>
                <span className="text-slate-900">Our </span>
                <span style={{
                  backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Services
                </span>
              </h1>

              <div
                className="mx-auto lg:mx-0"
                style={{
                position: 'relative',
                borderTop: '5px solid #2563EB',
                paddingLeft: '0',
                paddingTop: '8px',
                paddingBottom: '8px',
                maxWidth: '650px',
                marginTop: '2px',
                marginBottom: '32px',
              }}>
                <div style={{
                  color: '#2563EB', fontSize: '14px', fontWeight: 'bold',
                  textTransform: 'uppercase', letterSpacing: '1.5px',
                  marginBottom: '12px',
                  marginTop: '5px',
                }}>
                  What We Do
                </div>

                <p style={{
                  color: '#334155', fontSize: '20px', lineHeight: '1.7',
                  fontWeight: 500, marginBottom: '16px'
                }}>
                  We offer end-to-end <span className="text-blue-600 font-bold">digital solutions</span> designed to transform your business. 
                  Each service is crafted with precision, backed by years of expertise and cutting-edge tech architecture.
                </p>
                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>
                  Whether you're an agile startup or an established enterprise, we build highly reliable workflows tailored completely around your operations.
                </p>
              </div>
            </motion.div>

            {/* RIGHT — Network Widget */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
              className="w-full px-4 sm:px-0"
              style={{ flex: '2 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
            >
              <div className="w-full max-w-[360px] sm:max-w-none scale-[0.82] sm:scale-100 origin-center">
                <TechNetwork />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="relative z-10 pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 pt-8 pb-0 md:py-2 bg-[#f1f5f9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-6 md-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
                <span>Our </span>
                <span style={{ backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Process
                </span>
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
                Our strategic journey toward producing exceptional business engineering outcomes.
              </p>
            </motion.div>
            
            <TimelineProcess />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative z-10 pt-15 pb-15 md:py-15 bg-[#f8fafc] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
                <span>Why </span>
                <span style={{ backgroundImage: 'linear-gradient(to right, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Choose Us
                </span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                What sets our architecture and methodology apart from the rest.
              </p>
            </motion.div>
            
            <div className="relative">
              <FlipCardsNetwork />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto relative z-10">
                {flipCardsData.map((card, index) => (
                  <FlipCard key={card.title} card={card} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 pt-5 pb-15 md:py-15 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative p-12 md:p-16 rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
                Ready to Transform Your <br />
                <span style={{ backgroundImage: 'linear-gradient(to right, #0891B2, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Digital Architecture?
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                Let's construct an optimization plan tailored around your structural limits and target market demands.
              </p>
              
              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 rounded-3xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xl sm:text-2xl font-bold text-center whitespace-normal leading-tight shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-all duration-300 mx-auto block"
                >
                  Schedule a Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
