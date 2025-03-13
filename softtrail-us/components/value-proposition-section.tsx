"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LucideRocket, LucideZap, LucideDollarSign, LucideUsers, LucideLineChart, LucideSearch } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: <LucideLineChart className="h-6 w-6" />,
    title: "Higher Conversion Rates",
    description:
      "Our landing pages are designed to convert visitors into customers, with proven 30%+ conversion rates.",
  },
  {
    icon: <LucideSearch className="h-6 w-6" />,
    title: "SEO Optimized",
    description: "Built with SEO best practices to help your page rank higher in search results.",
  },
  {
    icon: <LucideZap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized for speed with 95+ PageSpeed scores for better user experience and SEO ranking.",
  },
  {
    icon: <LucideDollarSign className="h-6 w-6" />,
    title: "ROI Focused",
    description: "Designed to maximize your return on investment by generating more leads and sales.",
  },
  {
    icon: <LucideUsers className="h-6 w-6" />,
    title: "Mobile Optimized",
    description: "Fully responsive designs that look perfect on all devices, from phones to desktops.",
  },
  {
    icon: <LucideRocket className="h-6 w-6" />,
    title: "Quick Turnaround",
    description: "Get your custom landing page live in as little as 7 days, not months.",
  },
]

export default function ValuePropositionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            High-Converting Landing Pages That Drive Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg mb-8"
          >
            Stop losing potential customers with an underperforming website. Our custom landing pages are designed to
            convert visitors into leads and customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="https://calendly.com/softtrail/briefing" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white font-medium text-base px-8 py-6 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 bg-dark text-white hover:bg-white/80 font-medium text-base px-8 py-6 transition-all w-full sm:w-auto"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              See Pricing
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className="mr-4 text-rose-400">{benefit.icon}</div>
              <div>
                <h3 className="font-medium text-white mb-1">{benefit.title}</h3>
                <p className="text-white/40 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-indigo-500/20 border border-white/[0.08]">
            <span className="text-rose-400 font-medium">Limited Time Offer:</span>
            <span className="text-white/70">Free 30-minute strategy call with all packages</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

