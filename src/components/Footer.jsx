import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.jpeg'

export default function Footer() {
  const { pathname } = useLocation()
  const currentYear = new Date().getFullYear()

   const socialLinks = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@sapphire-infotech-solutions',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF0000" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/sapphire.infotech.solutions/',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#E4405F" aria-hidden="true">
          <path d="M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.6.3 2 .5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.3 1.6-.5 2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2 .5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.6-.3-2-.5-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.5-2-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .3-1.6.5-2 .2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2-.5 1.1-.1 1.4-.1 4.1-.1zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.1-.1-1.4-.1-4-.1zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-3.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sapphire-infotech-solutions/',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2" aria-hidden="true">
          <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.3A1.8 1.8 0 1 1 6.5 5a1.8 1.8 0 0 1 0 3.6zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V19z" />
        </svg>
      ),
    },
  ]
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleSameRouteClick = (to) => (e) => {
    if (to === pathname) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative z-10 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-24 mb-12"
        >

          {/* BRAND SECTION */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
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
          <motion.div variants={fadeUp} className='mt-0 md:mt-0 px-4 md:px-0'>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 font-semibold">
              <li><Link to="/" onClick={handleSameRouteClick('/')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Home</Link></li>
              <li><Link to="/about" onClick={handleSameRouteClick('/about')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">About</Link></li>
              <li><Link to="/services" onClick={handleSameRouteClick('/services')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Services</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} className='mt-1 md:mt-0 px-4 md:px-0'>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Resources
            </h4>

            <ul className="space-y-3 font-semibold">
              <li><Link to="/testimonials" onClick={handleSameRouteClick('/testimonials')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Testimonials</Link></li>
              <li><Link to="/contact" onClick={handleSameRouteClick('/contact')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Contact</Link></li>
              <li><Link to="/privacy-policy" onClick={handleSameRouteClick('/privacy-policy')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={handleSameRouteClick('/terms')} className="inline-flex py-1 text-slate-600 hover:text-blue-600 active:text-blue-700 text-sm touch-manipulation">Terms</Link></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeUp} className='mt-1 md:mt-0 px-4 md:px-0'>
            <h4 className="text-slate-900 font-bold mb-4 text-base tracking-wide">
              Connect
            </h4>

            
                          <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center transition-all hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 touch-manipulation"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-semibold text-center md:text-left">
            <p>© {currentYear} Sapphire Infotech Solutions. All rights reserved.</p>
            <p className="text-slate-400">Crafted with precision and passion.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
