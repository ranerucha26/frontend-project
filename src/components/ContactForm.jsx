import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'engineersurajsahani'
const EMAILJS_TEMPLATE_ID = 'engineersurajsahani'
const EMAILJS_PUBLIC_KEY = 'BY6c0mKQge9oFWOyD'

const servicesList = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'DevOps & Automation',
  'API Development & Integration',
  'Data Analytics & Business Intelligence',
  'Security & Compliance',
  'Consulting & Strategy',
]

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm({ isInView = true, showCardHeader = true, className = '' }) {
  const [focusedField, setFocusedField] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [popupStatus, setPopupStatus] = useState('success')
  const [popupMessage, setPopupMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  const inputStyle = (fieldId) => ({
    width: '100%',
    background: focusedField === fieldId ? 'rgba(255,255,255,1)' : 'rgba(248,250,252,1)',
    border: focusedField === fieldId ? '2px solid #06B6D4' : '2px solid #dbeafe',
    borderRadius: '14px',
    color: '#111827',
    fontSize: '16px',
    padding: '16px 18px',
    outline: 'none',
    boxShadow:
      focusedField === fieldId
        ? '0 0 20px rgba(6,182,212,0.15)'
        : '0 2px 10px rgba(0,0,0,0.03)',
    transition: 'all 0.3s ease',
    opacity: isSubmitting ? 0.7 : 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const openPopup = (status, message = '') => {
    setPopupStatus(status)
    setPopupMessage(message)
    setShowPopup(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const templateParams = {
      user_name: formData.name.trim(),
      user_email: formData.email.trim(),
      user_phone: formData.phone.trim(),
      service: formData.service,
      subject: formData.service,
      message: formData.message.trim(),
      submitted_at: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      }),
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setFormData(initialFormData)
      openPopup('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      openPopup(
        'error',
        'We could not send your message right now. Please try again or email us at hello@sapphireinfotech.com.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSuccess = popupStatus === 'success'

  return (
    <>
      <div
        className={`w-full p-8 md:p-[50px] lg:p-[60px] rounded-[28px] bg-white border border-gray-200 shadow-2xl ${className}`}
      >
        {showCardHeader && (
          <div className="mb-[40px]">
            <div className="w-12 h-1 bg-cyan-500 rounded-full mb-4" />
            <h3 className="text-[36px] font-bold text-gray-900 leading-tight">
              Start Your Journey
            </h3>
          </div>
        )}

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <motion.div variants={staggerItem}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                disabled={isSubmitting}
                style={inputStyle('name')}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="placeholder:text-gray-400"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com *"
                required
                disabled={isSubmitting}
                style={inputStyle('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="placeholder:text-gray-400"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <motion.div variants={staggerItem}>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number *"
                required
                disabled={isSubmitting}
                style={inputStyle('phone')}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="placeholder:text-gray-400"
              />
            </motion.div>

            <motion.div variants={staggerItem} className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                style={inputStyle('service')}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField(null)}
                className="appearance-none cursor-pointer text-gray-700"
              >
                <option value="" disabled>
                  Service Interest *
                </option>
                {servicesList.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          <motion.div variants={staggerItem}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project... *"
              required
              disabled={isSubmitting}
              style={{
                ...inputStyle('message'),
                resize: 'vertical',
                minHeight: '140px',
                maxHeight: '300px',
              }}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="placeholder:text-gray-400"
            />
          </motion.div>

          <motion.div variants={staggerItem}>
            <motion.button
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-[12px] text-[16px] font-bold text-white py-[16px] px-[32px] rounded-[14px] transition-all duration-300 border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg,#3B82F6 0%,#06B6D4 50%,#8B5CF6 100%)',
                boxShadow: '0 10px 30px rgba(59,130,246,0.25)',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Get Started →'}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md p-8 bg-white border border-slate-100 shadow-2xl rounded-2xl text-center z-10"
            >
              <div
                className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-sm border ${
                  isSuccess
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-500'
                    : 'bg-red-50 border-red-100 text-red-500'
                }`}
              >
                {isSuccess ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              <h3 className="text-slate-950 font-black text-xl mb-2 tracking-tight">
                {isSuccess ? 'Message Successfully Sent' : 'Could Not Send Message'}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                {isSuccess
                  ? 'Thank you for reaching out. Our operations desk will contact you soon.'
                  : popupMessage}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg"
              >
                Close Window
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
