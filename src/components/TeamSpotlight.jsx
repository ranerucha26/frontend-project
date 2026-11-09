import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import abhinavImg from '../assets/abhinav.png'
import surajImg from '../assets/surajog.png'

const team = [
  {
    name: 'Abhinav',
    role: 'Founder & Director',
    badge: 'Visionary Leader',
    badgeColor: '#06B6D4',
    image: abhinavImg,
    bio: 'Entrepreneur and visionary leader with expertise in AI, machine learning, and business development. Spearheading strategic growth, client partnerships, and company architecture at CRESCENT TECHWORKS INNOVATIONS LLP.',
    skills: ['Strategic Leadership', 'AI & ML Solutions', 'Business Architecture', 'Global Partnerships'],
    linkedin: 'https://www.linkedin.com/company/crescent-techworks-innovations-llp',
  },
  {
    name: 'Suraj',
    role: 'Technical Head',
    badge: 'Tech Architect',
    badgeColor: '#8B5CF6',
    image: surajImg,
    bio: 'Full-Stack Software Engineer with intensive experience in high-throughput enterprise projects and technical leadership. Specializes in building cutting-edge web & mobile applications with microservices and cloud infrastructure.',
    skills: ['Full-Stack Engineering', 'System Architecture', 'Cloud Infrastructure', 'Tech Mentorship'],
    linkedin: 'https://www.linkedin.com/company/crescent-techworks-innovations-llp',
  },
]

export default function TeamSpotlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="team" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 shadow-sm shadow-cyan-950">
            <span>Leadership & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Meet the{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
            The visionary leaders and technical minds driving CRESCENT TECHWORKS INNOVATIONS LLP forward.
          </p>
        </motion.div>

        {/* 2-Column Executive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative rounded-3xl p-8 sm:p-10 bg-slate-900/60 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              {/* Top Accent Gradient Border */}
              <div 
                className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
                {/* Photo with Glowing Ring */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-50 blur group-hover:opacity-100 transition duration-300"
                    style={{ backgroundColor: `${member.badgeColor}40` }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border border-white/20 shadow-xl"
                  />
                </div>

                {/* Info & Badges */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-2"
                    style={{
                      backgroundColor: `${member.badgeColor}15`,
                      color: member.badgeColor,
                      border: `1px solid ${member.badgeColor}35`,
                    }}
                  >
                    <span>✦ {member.badge}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Skills Tags & LinkedIn Button */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-ghost flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-2 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
