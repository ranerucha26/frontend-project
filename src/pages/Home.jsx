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
    <div className="min-h-screen hero-bg overflow-hidden">

      {/* Navbar */}
      <Navbar />

      <main>

        {/* Hero — headline + network diagram */}
        <Hero />

        {/* Hero Stats — 3 premium stats cards */}
        <HeroStats />

        {/* Services — 6-card overview grid */}
        <ServicesPreview />

        {/* About — brief company overview + stats */}
        <AboutPreview />

        {/* Meet The Team — Team spotlight section */}
        <TeamSpotlight />

        {/* Tech Stack — technologies we use */}
        <TechStack />

        {/* Why Choose Us — interactive cards */}
        <WhyChooseUs />

        {/* CTA — contact section */}
        <CTA />

      </main>

      {/* Footer */}
      <Footer />

      {/* Popup Modal */}
      <PopupModal />

    </div>
  )
}