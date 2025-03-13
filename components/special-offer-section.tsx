"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LucideCheck, LucideClock, LucideCalendar, LucideMessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SpecialOfferSection() {
  const whatsappLink =
    "https://wa.me/5531995116886?text=Hi!%20I'm%20interested%20in%20a%20landing%20page%20from%20SoftTrail%20for%20my%20business."

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-rose-500/10 to-indigo-500/10 border border-white/[0.08] backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <LucideClock className="h-4 w-4 text-rose-400" />
            <span className="text-white/80 text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Launch Special: Free SEO Audit
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Book your landing page project this week and receive a comprehensive SEO audit of your current website ($497
            value) absolutely free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 text-left border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">What You Get:</h3>
              <ul className="space-y-3">
                {[
                  "Custom high-converting landing page",
                  "Free 30-minute strategy call",
                  "Unlimited revisions",
                  "Fast turnaround time",
                  "Free SEO audit ($497 value)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <LucideCheck className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 text-left border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Book Your Project</h3>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-white/10 mb-4">
                  <Image
                    src="/calendar.jpg"
                    alt="Calendly scheduling page"
                    width={500}
                    height={300}
                    className="w-full h-[300px] opacity-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white font-medium mb-2">Schedule a free 30-minute briefing call</p>
                    <p className="text-white/70 text-sm mb-4">We&apos;ll discuss your goals and how we can help</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="https://calendly.com/softtrail/briefing" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white font-medium py-6 text-base shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all">
                      <LucideCalendar className="mr-2 h-5 w-5" />
                      Schedule Call
                    </Button>
                  </Link>

                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-6 text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all">
                      <LucideMessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Chat
                    </Button>
                  </Link>
                </div>

                <p className="text-white/40 text-sm text-center">No obligation. Offer expires in 7 days.</p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 font-medium">Money-Back Guarantee:</span>
            <span className="text-white/70">If you&apos;re not satisfied with our work, we&apos;ll refund your payment</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

