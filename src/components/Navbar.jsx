import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpeg' // ✅ corrected extension

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const currentRoute = navLinks.find(link => link.path === location.pathname)
    if (currentRoute) {
      setActiveLink(currentRoute.label)
    }
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm glass-card"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* ✅ LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3">

          <motion.img
            src={logo}
            alt="CRESCENT TECHWORKS INNOVATIONS LLP — home"
            className="h-12 md:h-14 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          <span className="text-slate-900 text-xl font-black tracking-tight">
            CRESCENT <span className="text-blue-600">TECHWORKS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              <Link
                to={link.path}
                onClick={() => setActiveLink(link.label)}
                className={`text-base font-bold pb-1 ${
                  activeLink === link.label
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}

                {activeLink === link.label && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-md glass-card"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-bold ${
                    activeLink === link.label
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                  onClick={() => {
                    setActiveLink(link.label)
                    setMenuOpen(false)
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl text-white text-center bg-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}