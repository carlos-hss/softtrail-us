import HeroGeometric from "@/components/hero-geometric"
import ValuePropositionSection from "@/components/value-proposition-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingPlansSection from "@/components/pricing-plans-section"
import TestimonialsSection from "@/components/testimonials-section"
import SpecialOfferSection from "@/components/special-offer-section"
import BenefitsSection from "@/components/benefits-section"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import CalendlyButton from "@/components/calendly-button"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <HeroGeometric badge="SoftTrail" title1="Convert Visitors" title2="Into Customers" />
      <ValuePropositionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingPlansSection />
      <TestimonialsSection />
      <SpecialOfferSection />
      <Footer />
      <WhatsAppButton />
      <CalendlyButton />
    </main>
  )
}

