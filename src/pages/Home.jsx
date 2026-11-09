import { useScrollToTop } from '../hooks/useScrollToTop'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Hero from '../components/Hero'
import HeroStats from '../components/HeroStats'
import ServicesPreview from '../components/ServicesPreview'
import AboutPreview from '../components/AboutPreview'
import TeamSpotlight from '../components/TeamSpotlight'
import TechStack from '../components/TechStack'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'
import PopupModal from '../components/PopupModal'

export default function Home() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Global Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="relative z-10">

        {/* Hero — headline + 3D ecosystem */}
        <Hero />

        {/* Hero Stats — animated counters */}
        <HeroStats />

        {/* Services — modern Bento Grid */}
        <ServicesPreview />

        {/* About — company overview + stats */}
        <AboutPreview />

        {/* Meet The Team — executive spotlight */}
        <TeamSpotlight />

        {/* Tech Stack — technologies we use */}
        <TechStack />

        {/* Why Choose Us — high-tech feature grid */}
        <WhyChooseUs />

        {/* CTA — contact & booking section */}
        <CTA />

      </main>

      {/* Footer */}
      <Footer />

      {/* Popup Modal */}
      <PopupModal />

    </div>
  )
}
