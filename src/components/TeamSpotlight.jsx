import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import abhinavImg from '../assets/abhinav.png'
import surajImg from '../assets/surajog.png'

export default function TeamSpotlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative pt-[20px] md:pt-[50px] pb-[56px] bg-[#f8fafc] overflow-hidden">
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="dotTeam" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotTeam)" />
      </svg>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px- pt-4 md:16">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-[30px] md:mb-[40px]"
        >
          <div className="inline-block text-cyan-500 text-[12px] font-bold uppercase tracking-[1px] mb-4 bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-200">
            Leadership
          </div>
          <h2 className="text-[34px] sm:text-[56px] font-black tracking-tight whitespace-nowrap">
            <span className="text-slate-900">Meet Our </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #0891b2, #2563eb, #7c3aed)' }}>
              Team
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
            The visionaries and technical experts driving CRESCENT TECHWORKS INNOVATIONS LLP forward
          </p>
        </motion.div>

        {/* Card 1: Founder */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full rounded-[24px] p-[40px] md:p-[60px] mb-[80px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] bg-white border border-slate-200 relative overflow-hidden"
          style={{
            boxShadow: '0 20px 40px -15px rgba(37, 99, 235, 0.08), 0 0 30px rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Gradient accent on left */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-500 to-blue-600" />
          
          {/* Left: Photo */}
          <div className="w-full md:w-[40%] flex justify-center flex-shrink-0 relative">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[400px] aspect-[4/5] rounded-[20px] overflow-hidden relative flex items-center justify-center group bg-slate-100 border-2 border-slate-200"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={abhinavImg} 
                alt="Abhinav Mishra" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="pattern-am" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#000" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern-am)" />
                  </svg>
                </div>
                <div className="relative z-10 text-[120px] font-black" style={{ color: 'rgba(15, 23, 42, 0.04)' }}>
                  AM
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-[60%] flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-block rounded-[20px] px-[16px] py-[8px] font-bold text-[14px] mb-[20px] text-cyan-700 bg-cyan-50 border border-cyan-200">
              <span className='mr-[8px]'>👤</span> Abhinav Mishra
            </div>
            
            <h3 className="text-[25px] sm:text-[32px] md:text-[40px] font-extrabold mb-[16px] text-slate-900">
              <span className="text-slate-700">Founder & Director</span>
            </h3>

            <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.8] mb-[32px] font-medium">
              Entrepreneur and visionary leader with expertise in AI, machine learning, and business development. Successfully built and scaled CRESCENT TECHWORKS INNOVATIONS LLP, establishing connections across marine institutes, RPSL companies, and maritime organizations. As Director of HPAY, continues to expand the digital ecosystem by leveraging technology to solve complex industry challenges.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-[12px] mb-[24px]">
              {['AI & Machine Learning', 'Maritime Industry', 'Fintech', 'Business Development', 'Leadership'].map((skill, i) => (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  key={skill} 
                  className="px-[12px] py-[6px] rounded-[20px] text-[12px] text-slate-700 font-semibold border border-slate-200 bg-white transition-colors duration-300 cursor-default shadow-sm"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#06B6D4'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#06B6D4'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/masterabbhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-[24px] py-[12px] rounded-[12px] font-bold text-white text-[16px] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-600/20 transition-all duration-200"
                >
                  Connect on LinkedIn 
                  <span className='text-[22px] font-extrabold ml-2'> →</span>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Tech Head */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full rounded-[24px] p-[40px] md:p-[60px] mb-[0px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] bg-white border border-slate-200 relative overflow-hidden"
          style={{
            boxShadow: '0 20px 40px -15px rgba(8, 145, 178, 0.08), 0 0 30px rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Gradient accent on left */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-purple-600" />
          
          {/* Left: Photo */}
          <div className="w-full md:w-[40%] flex justify-center flex-shrink-0 relative">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[400px] aspect-[4/5] rounded-[20px] overflow-hidden relative flex items-center justify-center group bg-slate-100 border-2 border-slate-200"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={surajImg} 
                alt="Suraj Sahani" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="pattern-ss" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#000" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern-ss)" />
                  </svg>
                </div>
                <div className="relative z-10 text-[120px] font-black" style={{ color: 'rgba(15, 23, 42, 0.04)' }}>
                  SS
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-[60%] flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-block rounded-[20px] px-[16px] py-[8px] font-bold text-[14px] mb-[20px] text-blue-700 bg-blue-50 border border-blue-200">
              <span className='mr-[8px]'>💻</span> Suraj Sahani
            </div>
            
            <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold mb-[16px] text-slate-900">
              <span className="text-slate-700">Technical Head</span>
            </h3>

            <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.8] mb-[32px] font-medium">
              Full Stack Developer, Software Engineer, and IT Educator with extensive experience in industry projects and technical training. Built scalable web applications using React.js, Next.js, Node.js, NestJS, Spring Boot, Django, PostgreSQL, MongoDB, and cloud solutions. Successfully delivered full-stack applications while exploring AI/ML domains including predictive analytics and computer vision. Trained over 1,000 students through LetsUpgrade, ITM Skills University, and Disha Computer Institute. Combines strong problem-solving skills with a passion for mentorship.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-[12px] mb-[24px]">
              {['React.js', 'Node.js', 'Next.js', 'Django', 'PostgreSQL', 'MongoDB', 'Nest.js', 'Tailwind CSS', 'JavaScript', 'Spring Boot'].map((tech, i) => (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + (i * 0.05) }}
                  key={tech} 
                  className="px-[12px] py-[6px] rounded-[20px] text-[12px] text-slate-700 font-semibold border border-slate-200 bg-white transition-colors duration-300 cursor-default shadow-sm"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3B82F6'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#3B82F6'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://engineersurajsahani.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-[24px] py-[12px] rounded-[12px] font-bold text-white text-[16px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/20 transition-all duration-200"
                >
                  Explore Portfolio
                  <span className='text-[22px] font-extrabold ml-2'> →</span>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
