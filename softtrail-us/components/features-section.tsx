"use client"

import { motion } from "framer-motion"
import { LucideBarChart2, LucideClock, LucideUsers, LucideZap } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <LucideZap className="h-10 w-10" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your team can work efficiently without delays.",
    gradient: "from-amber-500 to-rose-500",
  },
  {
    icon: <LucideUsers className="h-10 w-10" />,
    title: "Team Collaboration",
    description: "Seamlessly work together with your team members in real-time, no matter where they are.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: <LucideBarChart2 className="h-10 w-10" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <LucideClock className="h-10 w-10" />,
    title: "Time Tracking",
    description: "Keep track of your team's productivity with our intuitive time tracking features.",
    gradient: "from-emerald-500 to-teal-500",
  },
]

export default function FeaturesSection() {
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
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Everything you need to boost productivity and streamline your workflow
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            >
              <div
                className={cn(
                  "absolute -top-5 -left-5 p-3 rounded-xl",
                  "bg-gradient-to-br",
                  feature.gradient,
                  "bg-opacity-10 text-white",
                )}
              >
                {feature.icon}
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/40">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

