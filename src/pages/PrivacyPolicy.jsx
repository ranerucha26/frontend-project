import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  useScrollToTop()
  const [activeSection, setActiveSection] = useState('introduction')

  // To highlight active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'information-we-collect', 'how-we-use-your-information', 'data-security', 'your-rights', 'third-party-services', 'cookies', 'changes-to-this-policy', 'contact-us']
      let current = ''
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section
        }
      }
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  const tocLinks = [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'information-we-collect', label: '2. Information We Collect' },
    { id: 'how-we-use-your-information', label: '3. How We Use Your Information' },
    { id: 'data-security', label: '4. Data Security' },
    { id: 'your-rights', label: '5. Your Rights' },
    { id: 'third-party-services', label: '6. Third-Party Services' },
    { id: 'cookies', label: '7. Cookies' },
    { id: 'changes-to-this-policy', label: '8. Changes to This Policy' },
    { id: 'contact-us', label: '9. Contact Us' },
  ]

  return (
    <div className="bg-[#020817] min-h-screen text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Subtle mesh/dot background pattern */}
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[56px] font-bold mb-6"
          >
            <span className="text-white">Privacy</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Policy
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#cbd5e1] text-[16px] max-w-2xl mx-auto"
          >
            How we protect and handle your personal information
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-[60px] py-12 md:py-[80px] flex flex-col lg:flex-row gap-10">
        
        {/* Left Sidebar - TOC */}
        <div className="lg:w-1/4 w-full">
          <div className="sticky top-28 bg-[#0f172a80] border-r border-[#06b6d41a] p-6 rounded-xl mr-0 lg:mr-10">
            <h3 className="text-white font-bold text-xl mb-6">Table of Contents</h3>
            <ul className="flex flex-col gap-3">
              {tocLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`block text-[14px] leading-[1.6] transition-all duration-300
                      ${activeSection === link.id 
                        ? 'text-[#06B6D4] font-semibold border-l-3 border-[#06B6D4] pl-3' 
                        : 'text-[#cbd5e1] hover:text-[#06B6D4] hover:underline pl-3 border-l-3 border-transparent'
                      }`}
                    style={{ borderLeftWidth: activeSection === link.id ? '3px' : '3px', borderColor: activeSection === link.id ? '#06B6D4' : 'transparent' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-[70%] w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#cbd5e1] text-[16px] leading-[1.8] tracking-[0.5px]"
          >
            {/* Sections */}
            <div id="introduction" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                1. Introduction
              </h2>
              <p className="mb-5">
                At Sapphire Infotech Solutions, we take your privacy seriously. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our 
                website and use our services.
              </p>
              <p className="mb-5">
                Please read this Privacy Policy carefully. If you do not agree with our policies and 
                practices, please do not use our Services. By accessing and using Sapphire Infotech Solutions, 
                you acknowledge that you have read, understood, and agree to be bound by all the 
                provisions of this Privacy Policy.
              </p>
            </div>

            <div id="information-we-collect" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                2. Information We Collect
              </h2>
              
              <h3 className="text-[20px] font-semibold text-[rgba(255,255,255,0.95)] mt-6 mb-3">
                a) Personal Information You Provide:
              </h3>
              <ul className="ml-5 mb-4 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">Name</li>
                <li className="mb-2">Email address</li>
                <li className="mb-2">Phone number</li>
                <li className="mb-2">Company information</li>
                <li className="mb-2">Project details</li>
                <li className="mb-2">Any other information you voluntarily provide</li>
              </ul>
              
              <h3 className="text-[20px] font-semibold text-[rgba(255,255,255,0.95)] mt-6 mb-3">
                b) Automatically Collected Information:
              </h3>
              <ul className="ml-5 mb-4 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">IP address</li>
                <li className="mb-2">Browser type</li>
                <li className="mb-2">Pages visited</li>
                <li className="mb-2">Time and date of visits</li>
                <li className="mb-2">Referring URLs</li>
                <li className="mb-2">Device information</li>
              </ul>
              
              <h3 className="text-[20px] font-semibold text-[rgba(255,255,255,0.95)] mt-6 mb-3">
                c) Cookies and Tracking:
              </h3>
              <ul className="ml-5 mb-4 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">We use cookies to enhance user experience</li>
                <li className="mb-2">Analytics tools to understand usage patterns</li>
                <li className="mb-2">Third-party services may also use cookies</li>
              </ul>
            </div>

            <div id="how-we-use-your-information" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-5">We use the information we collect for various purposes:</p>
              <ul className="ml-5 mb-5 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">To provide, maintain, and improve our services</li>
                <li className="mb-2">To respond to your inquiries and requests</li>
                <li className="mb-2">To send you updates, newsletters, and promotional materials</li>
                <li className="mb-2">To analyze usage patterns and improve user experience</li>
                <li className="mb-2">To ensure compliance with legal obligations</li>
                <li className="mb-2">To prevent fraud and enhance security</li>
                <li className="mb-2">To contact you regarding service updates</li>
                <li className="mb-2">To provide customer support</li>
              </ul>
              <p className="mb-5 font-semibold text-white">
                We will never sell your personal information to third parties without your consent.
              </p>
            </div>

            <div id="data-security" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                4. Data Security
              </h2>
              <p className="mb-5">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="mb-5">
                While we strive to use commercially acceptable means to protect your personal information, 
                no method of transmission over the Internet or electronic storage is 100% secure. Therefore, 
                we cannot guarantee absolute security.
              </p>
              <h3 className="text-[20px] font-semibold text-[rgba(255,255,255,0.95)] mt-6 mb-3">
                Security Measures Include:
              </h3>
              <ul className="ml-5 mb-4 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">SSL encryption for data transmission</li>
                <li className="mb-2">Secure password protocols</li>
                <li className="mb-2">Regular security audits</li>
                <li className="mb-2">Limited access to personal information</li>
                <li className="mb-2">Secure data storage practices</li>
              </ul>
            </div>

            <div id="your-rights" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                5. Your Rights
              </h2>
              <p className="mb-5">Depending on your location, you may have the following rights:</p>
              <ul className="ml-5 mb-5 list-disc marker:text-[#06B6D4]">
                <li className="mb-2"><span className="text-white font-semibold">Right to Access:</span> Request a copy of your personal data</li>
                <li className="mb-2"><span className="text-white font-semibold">Right to Correction:</span> Request corrections to inaccurate data</li>
                <li className="mb-2"><span className="text-white font-semibold">Right to Deletion:</span> Request deletion of your data (subject to legal requirements)</li>
                <li className="mb-2"><span className="text-white font-semibold">Right to Withdraw Consent:</span> Withdraw consent for data processing</li>
                <li className="mb-2"><span className="text-white font-semibold">Right to Data Portability:</span> Receive your data in a portable format</li>
              </ul>
              <p className="mb-5">
                To exercise any of these rights, please contact us at <a href="mailto:contact@sapphireinfotech.com" className="text-[#06B6D4] hover:underline">contact@sapphireinfotech.com</a>
              </p>
            </div>

            <div id="third-party-services" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                6. Third-Party Services
              </h2>
              <p className="mb-5">
                Our website may contain links to third-party websites and services. We are not responsible 
                for the privacy practices of these external sites. We encourage you to review their privacy 
                policies before providing any personal information.
              </p>
            </div>

            <div id="cookies" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                7. Cookies
              </h2>
              <p className="mb-5">We use cookies to:</p>
              <ul className="ml-5 mb-5 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">Remember your preferences</li>
                <li className="mb-2">Understand how you use our services</li>
                <li className="mb-2">Improve user experience</li>
                <li className="mb-2">Track analytics</li>
              </ul>
              <p className="mb-5">
                You can control cookie settings in your browser, but disabling cookies may affect 
                certain features of our website.
              </p>
            </div>

            <div id="changes-to-this-policy" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                8. Changes to This Policy
              </h2>
              <p className="mb-5">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by updating the 'Last Updated' date below. Your continued use of our services 
                after such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
              <p className="mb-5 text-[#cbd5e1] italic">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div id="contact-us" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                9. Contact Us
              </h2>
              <p className="mb-5">
                If you have questions about this Privacy Policy or our privacy practices, please 
                contact us at:
              </p>
              <div className="bg-[#0f172a50] p-6 rounded-lg border border-[rgba(6,182,212,0.1)]">
                <p className="mb-2"><span className="text-white font-semibold">Email:</span> <a href="mailto:privacy@sapphireinfotech.com" className="text-[#06B6D4] hover:underline">privacy@sapphireinfotech.com</a></p>
                <p className="mb-2"><span className="text-white font-semibold">Address:</span> [Your Company Address]</p>
                <p className="mb-0"><span className="text-white font-semibold">Phone:</span> [Your Contact Number]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
