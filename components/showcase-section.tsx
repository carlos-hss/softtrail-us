"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "E-commerce", "SaaS", "Real Estate", "Health", "Finance", "Local Business"]

const showcaseItems = [
  {
    title: "E-commerce Product Page",
    category: "E-commerce",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "32% conversion rate",
    increase: "+145% sales increase",
  },
  {
    title: "SaaS Demo Request",
    category: "SaaS",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "28% conversion rate",
    increase: "+87% lead generation",
  },
  {
    title: "Real Estate Listing",
    category: "Real Estate",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "42% conversion rate",
    increase: "+112% property inquiries",
  },
  {
    title: "Health Clinic Appointments",
    category: "Health",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "30% conversion rate",
    increase: "+95% appointment bookings",
  },
  {
    title: "Financial Services",
    category: "Finance",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "25% conversion rate",
    increase: "+78% consultation requests",
  },
  {
    title: "Local Restaurant",
    category: "Local Business",
    image: "/placeholder.svg?height=400&width=600",
    conversion: "38% conversion rate",
    increase: "+156% online orders",
  },
]

export default function ShowcaseSection() {
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
            Our Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            See how our landing pages have transformed businesses across industries
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={cn(
                index === 0
                  ? "bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-medium shadow-md shadow-rose-500/20"
                  : "border-white/30 bg-dark text-white hover:bg-white/20 hover:border-white/50",
              )}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden border border-white/[0.08]"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-white/20 text-white/90">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm mb-1">{item.conversion}</p>
                <p className="text-emerald-400 text-sm font-medium">{item.increase}</p>

                <div className="mt-4 flex gap-2">
                  <Button size="sm" className="bg-rose-500 text-white hover:bg-rose-600 font-medium shadow-md">
                    View Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-dark text-white hover:bg-white/20 hover:border-white/50 font-medium px-6"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

