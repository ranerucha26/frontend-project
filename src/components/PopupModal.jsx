import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PopupModal() {
  // ✅ Kept as false so it remains closed when the project runs
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(() =>{
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  },[]);

  const handleClose = () => {
    setIsOpen(false)
    setSubmitted(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-4 bg-black/70"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-[90vw] max-w-[400px] overflow-hidden p-6 md:w-full md:max-w-[860px] md:p-5 rounded-[20px] md:rounded-2xl flex flex-col md:flex-row relative"
            style={{
              background: '#0f172a',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Left Image */}
            <div className="hidden md:block w-[40%] h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                alt="Tech workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[60%] md:p-8">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white md:text-gray-400 hover:text-white text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mt-0 md:mt-2">
                {!submitted ? (
                  <>
                    <h2 className="text-[22px] md:text-[28px] font-bold text-white mb-2 md:mb-3 leading-tight pr-6">
                      Let's Build Something Great
                    </h2>

                    <p className="text-[13px] md:text-[14px] mb-4 md:mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                      Tell us about your project and we'll get back to you within 24 hours.
                    </p>

                    <form
                      className="space-y-3 md:space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        setSubmitted(true)
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none placeholder:text-[#94a3b8]"
                        style={{
                          background: '#1e293b',
                          border: '1px solid rgba(148, 163, 184, 0.15)'
                        }}
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none placeholder:text-[#94a3b8]"
                        style={{
                          background: '#1e293b',
                          border: '1px solid rgba(148, 163, 184, 0.15)'
                        }}
                      />

                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none placeholder:text-[#94a3b8]"
                        style={{
                          background: '#1e293b',
                          border: '1px solid rgba(148, 163, 184, 0.15)'
                        }}
                      />

                      <textarea
                        placeholder="Tell us about your requirement"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none resize-none overflow-hidden placeholder:text-[#94a3b8]"
                        style={{
                          background: '#1e293b',
                          border: '1px solid rgba(148, 163, 184, 0.15)',
                          minHeight: '88px'
                        }}
                      />

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg text-white font-bold text-base transition-all"
                        style={{ background: '#3b82f6' }}
                      >
                        Get In Touch
                      </button>
                    </form>
                  </>
                ) : (
                  // ✅ SUCCESS SCREEN
                  <div className="flex flex-col items-center justify-center text-center h-[350px]">
                    <div className="text-green-400 text-5xl mb-4">✓</div>

                    <h2 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h2>

                    <p className="text-gray-400 text-sm max-w-[300px]">
                      Your details have been submitted successfully.   
                      Our team will get in touch with you within 24 hours.
                    </p>

                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2 rounded-lg text-white text-sm"
                      style={{ background: '#3B82F6' }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}