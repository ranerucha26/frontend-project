import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpeg'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-cyan-950/20 py-3.5'
          : 'bg-[#030712]/50 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-sm group-hover:opacity-100 transition duration-300" />
            <motion.img
              src={logo}
              alt="CRESCENT TECHWORKS"
              className="relative h-10 w-10 md:h-11 md:w-11 object-cover rounded-xl border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white text-lg md:text-xl font-black tracking-tight leading-none">
              CRESCENT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TECHWORKS</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono mt-0.5">
              Innovations LLP
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label
            return (
              <li key={link.label} className="relative">
                <Link
                  to={link.path}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 block rounded-full ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full -z-10 shadow-sm shadow-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="neon-btn-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 group"
          >
            <span>Get Started</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-xl bg-white/[0.05] border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      setActiveLink(link.label)
                      setMenuOpen(false)
                    }}
                    className={`block py-2 text-base font-medium ${
                      activeLink === link.label ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="neon-btn-primary block w-full py-3 text-center rounded-xl font-semibold text-sm"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
