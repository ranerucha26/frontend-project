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
          <h2 className="text-[34px] sm:text-[56px] font-black tracking-tight whitespace-nowrap">
            <span className="text-slate 900">Meet Our </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #0891b2, #2563eb, #7c3aed)' }}>
              Team
            </span>
          </h2>
        </motion.div>

        {/* Card 1: Founder */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full rounded-[24px] p-[40px] md:p-[60px] mb-[80px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] bg-white border border-slate-200"
          style={{
            boxShadow: '0 20px 40px -15px rgba(37, 99, 235, 0.05), 0 0 30px rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Left: Photo */}
          <div className="w-full md:w-[40%] flex justify-center flex-shrink-0">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[400px] aspect-[4/5] rounded-[20px] overflow-hidden relative flex items-center justify-center group bg-slate-100 border border-slate-200"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'
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
            <h3 className="text-[25px] sm:text-[32px] md:text-[40px] font-extrabold mb-[16px] text-slate-900">
              <span className="text-slate-700">Meet Our </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #0891b2, #0284c7)' }}>
                Visionary Founder
              </span>
            </h3>

            <div className="inline-block rounded-[20px] px-[16px] py-[8px] font-bold text-[14px] mb-[24px] text-cyan-700 bg-cyan-50 border border-cyan-100">
              <span className='mr-[8px]'>👤</span> Abhinav Mishra - Founder & Director
            </div>

            <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.8] mb-[32px] font-medium">
              Abhinav is an entrepreneur and visionary leader who founded Sapphire Infotech Solutions with a mission to revolutionize maritime services and digital solutions. With expertise in AI, machine learning, and business development, he has successfully built and scaled Sapphire Infotech Solutions to establish connections across marine institutes, RPSL companies, and maritime organizations. His innovative approach combines technical acumen with strategic business management, driving the company's growth in specialized maritime training and digital fintech services. As Director of HPAY, he continues to expand the digital ecosystem, leveraging technology to solve complex industry challenges.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-[12px] mb-[24px]">
              {['AI & Machine Learning', 'Maritime Industry', 'Fintech', 'Business Development', 'Leadership'].map((skill, i) => (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  key={skill} 
                  className="px-[12px] py-[6px] rounded-[20px] text-[12px] text-slate-700 font-semibold border border-slate-200 bg-slate-50 transition-colors duration-300 cursor-default"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#edf2f7'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <a 
              href="https://www.linkedin.com/in/masterabbhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-[8px]"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="px-[24px] py-[12px] rounded-[12px] font-bold text-white text-[16px] bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/10 transition-colors duration-200"
              >
                Connect on LinkedIn 
                <span className='text-[22px] font-extrabold'> →</span>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Card 2: Tech Head */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full rounded-[24px] p-[40px] md:p-[60px] mb-[0px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] bg-white border border-slate-200"
          style={{
            boxShadow: '0 20px 40px -15px rgba(8, 145, 178, 0.04), 0 0 30px rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Left: Photo */}
          <div className="w-full md:w-[40%] flex justify-center flex-shrink-0">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[400px] aspect-[4/5] rounded-[20px] overflow-hidden relative flex items-center justify-center group bg-slate-100 border border-slate-200"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'
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
            <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold mb-[16px] text-slate-900 ">
              <span className="text-slate-700">Meet Our </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #0891b2, #0284c7)' }}>
                Technical Head
              </span>
            </h3>

            <div className="inline-block rounded-[20px] px-[16px] py-[8px] font-bold text-[14px] mb-[24px] text-cyan-700 bg-cyan-50 border border-cyan-100">
              <span className='mr-[8px]'>💻</span> Suraj Sahani - Technical Head
            </div>

            <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.8] mb-[32px] font-medium">
            Suraj Sahani is a passionate Full Stack Developer, Software Engineer, and IT Educator with extensive experience in both industry projects and technical training. Since beginning his programming journey in 2020, he has built scalable web applications using modern technologies such as React.js, Next.js, Node.js, NestJS, Spring Boot, Django, PostgreSQL, MongoDB, and cloud-based solutions. Currently working as a Full Stack Developer, he has successfully delivered full-stack applications while also exploring AI/ML domains including predictive analytics and computer vision. Beyond development, Suraj has trained over 1,000 students through organizations such as LetsUpgrade, ITM Skills University, and Disha Computer Institute. With 1,000+ coding problems solved across competitive programming platforms, he combines strong problem-solving skills, technical leadership, and a passion for mentorship to bridge the gap between learning and real-world software development.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-[12px] mb-[24px]">
              {['React.js', 'Node.js', 'Next.js', 'Django', 'PostgreSQL', 'MongoDB', 'Nest.js', 'Tailwind CSS', 'JavaScript', 'Spring Boot'].map((tech, i) => (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + (i * 0.05) }}
                  key={tech} 
                  className="px-[12px] py-[6px] rounded-[20px] text-[12px] text-slate-700 font-semibold border border-slate-200 bg-slate-50 transition-colors duration-300 cursor-default"
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#edf2f7'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            <a 
              href="https://engineersurajsahani.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-[8px]"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="px-[24px] py-[12px] rounded-[12px] font-bold text-white text-[16px] bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/10 transition-colors duration-200"
              >
                Explore Portfolio
                <span className='text-[22px] font-extrabold'> →</span>
              </motion.button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
