import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.jpeg' // ✅ add this

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >

          {/* ✅ BRAND SECTION */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">

              {/* ✅ REAL LOGO */}
              <motion.img
                src={logo}
                alt="Sapphire Infotech Solutions logo — software company Mumbai"
                className="h-10 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />

              <span className="text-slate-900 text-xl font-black tracking-tight">
                Sapphire <span className="text-blue-600">Infotech Solutions</span>
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Building exceptional digital experiences with modern web
              technologies and creative design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 font-semibold">
              <li><Link to="/" className="text-slate-600 hover:text-blue-600 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-blue-600 text-sm">About</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-blue-600 text-sm">Services</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp}>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Resources
            </h4>

            <ul className="space-y-3 font-semibold">
              <li><Link to="/testimonials" className="text-slate-600 hover:text-blue-600 text-sm">Testimonials</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-blue-600 text-sm">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-600 hover:text-blue-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-blue-600 text-sm">Terms</Link></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeUp}>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Connect
            </h4>

            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">f</a>
              <a className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">𝕏</a>
              <a className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center">in</a>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-semibold">
            <p>© {currentYear} Sapphire Infotech Solutions. All rights reserved.</p>
            <p className="text-slate-400">Crafted with precision and passion.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}