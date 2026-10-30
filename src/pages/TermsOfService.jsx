import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  useScrollToTop()
  const [activeSection, setActiveSection] = useState('agreement-to-terms')

  // To highlight active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['agreement-to-terms', 'use-license', 'disclaimer-of-warranties', 'limitations-of-liability', 'indemnification', 'user-responsibilities', 'intellectual-property-rights', 'third-party-links', 'service-modifications', 'governing-law', 'contact-information']
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
    { id: 'agreement-to-terms', label: '1. Agreement to Terms' },
    { id: 'use-license', label: '2. Use License' },
    { id: 'disclaimer-of-warranties', label: '3. Disclaimer of Warranties' },
    { id: 'limitations-of-liability', label: '4. Limitations of Liability' },
    { id: 'indemnification', label: '5. Indemnification' },
    { id: 'user-responsibilities', label: '6. User Responsibilities' },
    { id: 'intellectual-property-rights', label: '7. Intellectual Property Rights' },
    { id: 'third-party-links', label: '8. Third-Party Links' },
    { id: 'service-modifications', label: '9. Service Modifications' },
    { id: 'governing-law', label: '10. Governing Law' },
    { id: 'contact-information', label: '11. Contact Information' },
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
            <span className="text-white">Terms</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              of Service
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#cbd5e1] text-[16px] max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
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
            <div id="agreement-to-terms" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                1. Agreement to Terms
              </h2>
              <p className="mb-5">
                By accessing and using CRESCENT TECHWORKS INNOVATIONS LLP's website and services, you agree to be 
                bound by these Terms of Service. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>

            <div id="use-license" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                2. Use License
              </h2>
              <p className="mb-5">
                Permission is granted to temporarily download one copy of the materials (information 
                or software) on CRESCENT TECHWORKS INNOVATIONS LLP's website for personal, non-commercial transitory 
                viewing only. This is the grant of a license, not a transfer of title, and under this 
                license you may not:
              </p>
              <ul className="ml-5 mb-5 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">Modify or copy the materials</li>
                <li className="mb-2">Use the materials for commercial purposes</li>
                <li className="mb-2">Attempt to decompile or reverse engineer any software</li>
                <li className="mb-2">Remove any copyright or other proprietary notations</li>
                <li className="mb-2">Transfer the materials to another person or 'mirror' the materials on any server</li>
              </ul>
            </div>

            <div id="disclaimer-of-warranties" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                3. Disclaimer of Warranties
              </h2>
              <p className="mb-5">
                The materials on CRESCENT TECHWORKS INNOVATIONS LLP's website are provided on an 'as is' basis. 
                CRESCENT TECHWORKS INNOVATIONS LLP makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties including, without limitation, implied warranties 
                or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </div>

            <div id="limitations-of-liability" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                4. Limitations of Liability
              </h2>
              <p className="mb-5">
                In no event shall CRESCENT TECHWORKS INNOVATIONS LLP or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on 
                CRESCENT TECHWORKS INNOVATIONS LLP's website.
              </p>
            </div>

            <div id="indemnification" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                5. Indemnification
              </h2>
              <p className="mb-5">
                You agree to indemnify and hold harmless CRESCENT TECHWORKS INNOVATIONS LLP and its officers, directors, 
                employees, agents, and successors from and against any and all claims, damages, losses, 
                and expenses arising out of your use of the website or services.
              </p>
            </div>

            <div id="user-responsibilities" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                6. User Responsibilities
              </h2>
              <p className="mb-5">By using our services, you agree that you will:</p>
              <ul className="ml-5 mb-5 list-disc marker:text-[#06B6D4]">
                <li className="mb-2">Provide accurate and complete information</li>
                <li className="mb-2">Not use our services for unlawful purposes</li>
                <li className="mb-2">Not engage in any conduct that restricts others' use or enjoyment of the service</li>
                <li className="mb-2">Not attempt to gain unauthorized access to our systems</li>
                <li className="mb-2">Not transmit viruses, malware, or harmful code</li>
                <li className="mb-2">Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div id="intellectual-property-rights" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                7. Intellectual Property Rights
              </h2>
              <p className="mb-5">
                All materials on CRESCENT TECHWORKS INNOVATIONS LLP's website, including but not limited to text, 
                graphics, logos, images, and software, are the property of CRESCENT TECHWORKS INNOVATIONS LLP or its 
                content suppliers and are protected by international copyright laws.
              </p>
            </div>

            <div id="third-party-links" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                8. Third-Party Links
              </h2>
              <p className="mb-5">
                CRESCENT TECHWORKS INNOVATIONS LLP has not reviewed all of the sites linked to its website and is 
                not responsible for the contents of any such linked site. The inclusion of any link 
                does not imply endorsement by CRESCENT TECHWORKS INNOVATIONS LLP of the site. Use of any such linked 
                website is at the user's own risk.
              </p>
            </div>

            <div id="service-modifications" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                9. Service Modifications
              </h2>
              <p className="mb-5">
                CRESCENT TECHWORKS INNOVATIONS LLP may revise these terms of service for its website at any time 
                without notice. By using this website, you are agreeing to be bound by the then 
                current version of these terms of service.
              </p>
            </div>

            <div id="governing-law" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                10. Governing Law
              </h2>
              <p className="mb-5">
                These terms and conditions are governed by and construed in accordance with the 
                laws of India, and you irrevocably submit to the exclusive jurisdiction of the 
                courts in that location.
              </p>
            </div>

            <div id="contact-information" className="mb-12">
              <h2 className="text-[32px] font-bold text-white mt-10 mb-4 border-b-2 border-[rgba(6,182,212,0.2)] pb-3">
                11. Contact Information
              </h2>
              <p className="mb-5">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-[#0f172a50] p-6 rounded-lg border border-[rgba(6,182,212,0.1)]">
                <p className="mb-2"><span className="text-white font-semibold">Email:</span> <a href="mailto:legal@sapphireinfotech.com" className="text-[#06B6D4] hover:underline">legal@sapphireinfotech.com</a></p>
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
