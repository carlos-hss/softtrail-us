'use client'

import { LucideCalendar, LucideMessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const whatsappLink =
    "https://wa.me/5531995116886?text=Hi!%20I'm%20interested%20in%20a%20landing%20page%20from%20SoftTrail%20for%20my%20business."

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-[#020202]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/softtrail-logo.png" alt="SoftTrail Logo" width={30} height={30} className="rounded-lg" />
              <span className="ml-2 text-xl font-bold text-white">SoftTrail</span>
            </Link>
            <p className="text-zinc-200 mb-6">High-converting landing pages that drive real business results.</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-zinc-200 hover:text-white transition-colors">
                  Landing Pages
              </li>
              <li className="text-zinc-200 hover:text-white transition-colors">
                  SEO Optimization
              </li>
              <li className="text-zinc-200 hover:text-white transition-colors">
                  Conversion Rate Optimization
              </li>
              <li className="text-zinc-200 hover:text-white transition-colors">
                  CRM&apos;s
              </li>
              <li className="text-zinc-200 hover:text-white transition-colors">
                  E-commerces
              </li>
              <li className="text-zinc-200 hover:text-white transition-colors">
                  Mobile Apps
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-zinc-200 hover:text-white transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('launch-process')} className="text-zinc-200 hover:text-white transition-colors">
                  Our Simple Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-zinc-200 hover:text-white transition-colors">
                  Special Offers
                </button>
              </li>
              <li>
                <Link 
                  href="https://calendly.com/softtrail/briefing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-rose-400 transition-colors"
                >
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-green-500 transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-200 hover:text-green-500 transition-colors"
                >
                  <LucideMessageCircle className="h-4 w-4 mr-2" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/softtrail/briefing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center  text-zinc-200 hover:text-white transition-colors"
                >
                  <LucideCalendar className="h-4 w-4 mr-2" />
                  <span>Schedule a Call</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/30 mb-4 md:mb-0">© {new Date().getFullYear()} SoftTrail. All rights reserved.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-white/10">
              <span className="text-white/70">🚀 Limited Time Offer: Free SEO Audit with Any Package</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

