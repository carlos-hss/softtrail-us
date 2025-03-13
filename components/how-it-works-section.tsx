"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We'll discuss your business goals, target audience, and what you want to achieve with your landing page.",
    image: "/call.jpg",
    gradient: "from-indigo-500/20 to-indigo-500/5",
    highlight: "Free 30-minute consultation",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Our designers create a custom landing page tailored to your brand and optimized for conversions.",
    image: "/designing.jpg",
    gradient: "from-rose-500/20 to-rose-500/5",
    highlight: "Unlimited revisions",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "We build your page with clean code, test it across all devices, and optimize for speed and SEO.",
    image: "/coding.jpg",
    gradient: "from-amber-500/20 to-amber-500/5",
    highlight: "Mobile-first approach",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch your page and provide ongoing optimization based on real user data to maximize conversions.",
    image: "/launch.jpg",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    highlight: "Ongoing support included",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Our Simple Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            From concept to launch in just 4 simple steps
          </motion.p>
        </div>

        <div className="space-y-24 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
              )}
            >
              <div className="flex-1">
                <div className="mb-4 inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-400">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-white/60 mb-6">{step.description}</p>

                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                    "bg-gradient-to-r",
                    step.gradient,
                    "border border-white/[0.15]",
                  )}
                >
                  <span className="text-white/90 font-medium">{step.highlight}</span>
                </div>
              </div>

              <div className="flex-1 rounded-xl overflow-hidden border border-white/[0.08]">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

