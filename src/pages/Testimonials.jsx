import { useScrollToTop } from '../hooks/useScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'SHIVAM DUBEY',
    company: 'HARI OM THALASSIC PVT LTD',
    role: 'Founder & CEO',
    text: 'We needed a proper digital presence for our marine business — not just a brochure site. Sapphire listened to how we actually work, built what we asked for, and fixed issues quickly when we reported them. Our enquiries from the website have gone up noticeably.',
    avatar: '👨‍💼',
  },
  {
    name: 'Aravind',
    company: 'Ghar Seva',
    role: 'Founder & CEO',
    text: 'Ghar Seva runs on trust — customers book home services and expect someone reliable to show up. The team understood that from day one. Booking flow is simple for customers, and on our side we can manage requests without juggling five different apps. Launch was on the date they committed to.',
    avatar: '👨‍💼',
  },
  {
    name: 'Aniksha Upadhyay',
    company: 'Pehchan YUI Foundation',
    role: 'Founder & CEO',
    text: 'For a foundation, the website has to feel honest and easy for donors and volunteers — not flashy for the sake of it. They got that balance right. Pages load fine on older phones, and we can update content ourselves without calling a developer every time.',
    avatar: '👩‍💼',
  },
  {
    name: 'Vinod Sharma',
    company: 'Aayush Logistics Private Limited',
    role: 'Founder & CEO',
    text: 'Logistics is messy — shipments, clients, follow-ups. Before this, a lot lived in WhatsApp and Excel. Sapphire built us a system that our office staff actually uses daily. Training was patient, and they stayed available after go-live when we had small tweaks.',
    avatar: '👨‍💼',
  },
  {
    name: 'Ghanshyam Dubey',
    company: 'Hari Om Print House',
    role: 'Founder & CEO',
    text: 'Print orders used to get mixed up — wrong quantity, late proofs. Now customers can share requirements online and we track each job in one place. It is not magic; we still run the shop — but mistakes and repeat calls have dropped a lot.',
    avatar: '👨‍💼',
  },
  {
    name: 'Ankit',
    company: 'Soham Gifts',
    role: 'Founder & CEO',
    text: 'Soham Gifts needed catalog and order handling that works during festival season when everything spikes. They set up the store, payment flow, and basic inventory view without overcomplicating it. Sales team picked it up within a week — that mattered more to us than fancy design.',
    avatar: '👨‍💼',
  },
]

export default function Testimonials() {
  useScrollToTop()

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Navbar />

      <main className="relative">

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 100% 70% at 50% 20%, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
        </div>

        {/* Header */}
        <section className="relative z-10 pt-32 pb-10 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="text-slate-900">What Our Clients </span>
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  Say
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Success stories from businesses we've had the pleasure of working with.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>

                    <div>
                      <h4 className="text-slate-900 font-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-blue-600 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 italic">
                    “{testimonial.text}”
                  </p>

                  <div className="mt-4 flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
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
