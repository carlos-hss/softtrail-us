import { LucideCalendar, LucideMessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const whatsappLink =
    "https://wa.me/5531995116886?text=Hi!%20I'm%20interested%20in%20a%20landing%20page%20from%20SoftTrail%20for%20my%20business."

  return (
    <footer className="relative py-16 overflow-hidden bg-[#020202]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="https://kokonutui.com/logo.svg" alt="SoftTrail Logo" width={30} height={30} />
              <span className="ml-2 text-xl font-bold text-white">SoftTrail</span>
            </Link>
            <p className="text-zinc-200 mb-6">High-converting landing pages that drive real business results.</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Conversion Rate Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  A/B Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Analytics Setup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-200 hover:text-white transition-colors">
                  Support
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

