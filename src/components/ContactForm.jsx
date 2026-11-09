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

const validateForm = (data) => {
  const newErrors = {}

  if (!data.name.trim()) {
    newErrors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    newErrors.name = 'Please enter a valid name'
  }

  if (!data.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    newErrors.email = 'Please enter a valid email address'
  }

  if (!data.phone.trim()) {
    newErrors.phone = 'Phone number is required'
  } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(data.phone.trim())) {
    newErrors.phone = 'Please enter a valid phone number'
  }

  if (!data.service) {
    newErrors.service = 'Please select a service'
  }

  if (!data.message.trim()) {
    newErrors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    newErrors.message = 'Please provide more details (at least 10 characters)'
  }

  return newErrors
}

export default function ContactForm({ isInView = true, showCardHeader = true, className = '' }) {
  const [focusedField, setFocusedField] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [popupStatus, setPopupStatus] = useState('success')
  const [popupMessage, setPopupMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})

  const inputStyle = (fieldId) => ({
    width: '100%',
    background: focusedField === fieldId ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.5)',
    border: focusedField === fieldId ? '1px solid #06B6D4' : '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '14px',
    color: '#ffffff',
    fontSize: '15px',
    padding: '14px 18px',
    outline: 'none',
    boxShadow:
      focusedField === fieldId
        ? '0 0 20px rgba(6,182,212,0.25)'
        : 'none',
    transition: 'all 0.3s ease',
    opacity: isSubmitting ? 0.7 : 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    const fieldErrors = validateForm(formData)
    if (fieldErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }))
    }
  }

  const openPopup = (status, message = '') => {
    setPopupStatus(status)
    setPopupMessage(message)
    setShowPopup(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

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
        'We could not send your message right now. Please try again or reach out directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSuccess = popupStatus === 'success'

  return (
    <>
      <div
        className={`w-full p-7 sm:p-10 md:p-12 rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-cyan-950/40 relative overflow-hidden ${className}`}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {showCardHeader && (
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
              <span>Connect With Us</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Start Your Journey
            </h3>
            <p className="text-sm text-slate-400 mt-1 font-light">
              Tell us about your project goals. We typically respond within 2 hours.
            </p>
          </div>
        )}

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerItem}>
              <label className="block mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Abhinav Sharma"
                required
                disabled={isSubmitting}
                style={inputStyle('name')}
                onFocus={() => setFocusedField('name')}
                className="placeholder:text-slate-500"
              />
              {errors.name && (
                <p className="mt-1 text-rose-400 text-xs font-medium">{errors.name}</p>
              )}
            </motion.div>

            <motion.div variants={staggerItem}>
              <label className="block mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="name@company.com"
                required
                disabled={isSubmitting}
                style={inputStyle('email')}
                onFocus={() => setFocusedField('email')}
                className="placeholder:text-slate-500"
              />
              {errors.email && (
                <p className="mt-1 text-rose-400 text-xs font-medium">{errors.email}</p>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerItem}>
              <label className="block mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Phone Number <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+91 98765 43210"
                required
                disabled={isSubmitting}
                style={inputStyle('phone')}
                onFocus={() => setFocusedField('phone')}
                className="placeholder:text-slate-500"
              />
              {errors.phone && (
                <p className="mt-1 text-rose-400 text-xs font-medium">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div variants={staggerItem} className="relative">
              <label className="block mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Select Service <span className="text-cyan-400">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
                style={inputStyle('service')}
                onFocus={() => setFocusedField('service')}
                className="appearance-none cursor-pointer text-white"
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Choose Service Interested
                </option>
                {servicesList.map((service) => (
                  <option key={service} value={service} className="bg-slate-900 text-white">
                    {service}
                  </option>
                ))}
              </select>

              <div className="absolute right-4 top-[38px] pointer-events-none">
                <svg
                  className="w-4 h-4 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.service && (
                <p className="mt-1 text-rose-400 text-xs font-medium">{errors.service}</p>
              )}
            </motion.div>
          </div>

          <motion.div variants={staggerItem}>
            <label className="block mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Project Details <span className="text-cyan-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us about your project, timeline, and goals..."
              required
              disabled={isSubmitting}
              style={{
                ...inputStyle('message'),
                resize: 'vertical',
                minHeight: '120px',
                maxHeight: '260px',
              }}
              onFocus={() => setFocusedField('message')}
              className="placeholder:text-slate-500"
            />
            {errors.message && (
              <p className="mt-1 text-rose-400 text-xs font-medium">{errors.message}</p>
            )}
          </motion.div>

          <motion.div variants={staggerItem}>
            <motion.button
              whileHover={isSubmitting ? {} : { scale: 1.01 }}
              whileTap={isSubmitting ? {} : { scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="neon-btn-primary w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Inquiry'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center pt-2">
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Your data is encrypted and strictly protected under our non-disclosure policy.
            </p>
          </motion.div>
        </motion.form>
      </div>

      {/* Status Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md p-8 bg-slate-900 border border-white/10 shadow-2xl shadow-cyan-950/50 rounded-3xl text-center z-10"
            >
              <div
                className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border ${
                  isSuccess
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                }`}
              >
                {isSuccess ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              <h3 className="text-white font-black text-xl mb-2 tracking-tight">
                {isSuccess ? 'Inquiry Transmitted Successfully' : 'Submission Failed'}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                {isSuccess
                  ? 'Thank you for reaching out to Crescent Techworks. Our leadership team will review your requirements and get in touch within 2 hours.'
                  : popupMessage}
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="neon-btn-primary w-full py-3 rounded-xl font-bold text-sm tracking-wide"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
