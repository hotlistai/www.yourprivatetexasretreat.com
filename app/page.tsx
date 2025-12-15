import Hero from "@/components/Hero"
import KeyStats from "@/components/KeyStats"
import MediaGallery from "@/components/MediaGallery"
import LifestyleSection from "@/components/LifestyleSection"
import AboutHome from "@/components/AboutHome"
import FeaturesGrid from "@/components/FeaturesGrid"
import Neighborhood from "@/components/Neighborhood"
import MapSection from "@/components/MapSection"
import AgentSection from "@/components/AgentSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function PropertyPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyStats />
      <MediaGallery />
      <LifestyleSection />
      <AboutHome />
      <FeaturesGrid />
      <Neighborhood />
      <MapSection />
      <AgentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
