import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'

export default function Contact() {
  useScrollToTop()

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-slate-800">
      <Navbar />

      <main className="relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{ opacity: 0.03 }}
        >
          <defs>
            <pattern
              id="dotContact"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotContact)" />
        </svg>

        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Header */}
        <section className="relative z-10 pt-32 pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block text-cyan-500 text-[12px] font-bold uppercase tracking-[1px] mb-4 bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-200">
                Let's Talk
              </div>

              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="text-slate-900">Get in </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg,#06B6D4,#3B82F6,#8B5CF6)',
                  }}
                >
                  Touch
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Have a project in mind? Let's talk about how we can help bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Same form as CTA */}
        <section className="relative z-10 pb-24">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm isInView={true} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { 
                  icon: '📧', 
                  title: 'Email', 
                  value: 'hello@sapphireinfotech.com',
                  link: 'mailto:hello@sapphireinfotech.com'
                },
                { 
                  icon: '📞', 
                  title: 'Phone', 
                  value: '+91 8080535352',
                  link: 'tel:+918080535352'
                },
                { 
                  icon: '📍', 
                  title: 'Location', 
                  value: 'Mumbai, India',
                  link: 'https://www.google.com/maps/search/?api=1&query=Mumbai,+India'
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.title === 'Location' ? '_blank' : undefined}
                  rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                  className="text-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer neumorphic-btn"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-600 font-medium text-sm break-all leading-snug">{item.value}</p>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 md:mt-20"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  What Happens Next?
                </h2>
                <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Send your inquiry',
                    description: 'Fill out the form above with your project details and requirements.'
                  },
                  {
                    step: '02',
                    title: 'We review your request',
                    description: 'Our team analyzes your needs and prepares a tailored response.'
                  },
                  {
                    step: '03',
                    title: "Let's discuss your project",
                    description: 'We connect with you to explore how we can bring your vision to life.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="text-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-5xl font-black text-cyan-500 mb-4 opacity-30">
                      {item.step}
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
