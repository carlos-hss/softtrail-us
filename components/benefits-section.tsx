"use client"

import { motion } from "framer-motion"
import { LucideBarChart, LucideZap, LucideSmartphone, LucideSearch, LucideCode, LucideShield } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: <LucideBarChart className="h-8 w-8" />,
    title: "Conversion Focused",
    description:
      "Our landing pages are strategically designed to convert visitors into customers with clear CTAs and optimized user flows.",
    color: "text-rose-400",
  },
  {
    icon: <LucideZap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with 95+ PageSpeed scores for better user experience and higher search rankings.",
    color: "text-amber-400",
  },
  {
    icon: <LucideSmartphone className="h-8 w-8" />,
    title: "Mobile Optimized",
    description: "Fully responsive designs that look and perform perfectly on all devices, from phones to desktops.",
    color: "text-indigo-400",
  },
  {
    icon: <LucideSearch className="h-8 w-8" />,
    title: "SEO Optimized",
    description:
      "Built with SEO best practices to help your page rank higher in search results and attract more organic traffic.",
    color: "text-emerald-400",
  },
  {
    icon: <LucideCode className="h-8 w-8" />,
    title: "Clean Code",
    description:
      "Built with modern, semantic HTML and optimized CSS/JavaScript for maximum performance and maintainability.",
    color: "text-cyan-400",
  },
  {
    icon: <LucideShield className="h-8 w-8" />,
    title: "Secure & Reliable",
    description: "Implemented with security best practices and hosted on reliable infrastructure for maximum uptime.",
    color: "text-violet-400",
  },
]

export default function BenefitsSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-indigo-500/10">
              <Image
                src="/conversion-rate.jpg"
                alt="High-converting landing page example"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                    <span className="text-white/80 text-sm">Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">+327%</div>
                  <p className="text-white/60 text-sm">Average increase after implementation</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-xl p-4 shadow-lg">
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm">Satisfaction Guarantee</div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Why Our Landing Pages Outperform the Competition
              </h2>
              <p className="text-white/60 mb-8">
                We combine strategic design, technical expertise, and conversion optimization to create landing pages
                that don&apos;t just look good—they deliver measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className={cn("mr-4 p-2 rounded-lg bg-white/5", benefit.color)}>{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{benefit.title}</h3>
                    <p className="text-white/40 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

