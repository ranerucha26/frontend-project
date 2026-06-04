import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    tags: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication.',
    tags: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management platform with real-time updates.',
    tags: ['Vue.js', 'Node.js', 'WebSocket', 'PostgreSQL'],
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot application powered by machine learning.',
    tags: ['Python', 'FastAPI', 'React', 'TensorFlow'],
  },
  {
    title: 'Social Media Platform',
    description: 'Social networking platform with messaging and content sharing.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
  },
]

export default function Projects() {
  useScrollToTop()

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 70% at 50% 20%, rgba(59,130,246,0.1) 0%, rgba(2,8,23,0) 70%)'
            }}
          />
        </div>

        {/* Header */}
        <section className="relative z-10 py-20 md:py-32 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-coral-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Showcasing our portfolio of successful digital projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative z-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/10 border border-blue-800/30 hover:border-blue-600/50 transition-colors group cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-900/30 border border-blue-800/50 rounded-full text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
