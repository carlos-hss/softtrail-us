"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    quote:
      "Our landing page conversion rate increased from 2% to 15% after working with SoftTrail. The ROI has been incredible - we made back our investment in just 9 days.",
    author: "Alex Morgan",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "TechSolutions Inc.",
    companyLogo: "/placeholder.svg?height=30&width=120",
    gradient: "from-indigo-500/10 to-violet-500/10",
    result: "+650% conversion increase",
  },
  {
    quote:
      "The team delivered a stunning landing page that perfectly captured our brand voice. More importantly, it's generating 3x more leads than our previous page.",
    author: "Sarah Chen",
    role: "CEO",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "GrowthHouse Realty",
    companyLogo: "/placeholder.svg?height=30&width=120",
    gradient: "from-rose-500/10 to-amber-500/10",
    result: "3x more qualified leads",
  },
  {
    quote:
      "We've tried other agencies before, but none delivered results like SoftTrail. Our e-commerce conversion rate jumped by 8% and our average order value increased by 22%.",
    author: "Michael Johnson",
    role: "E-commerce Manager",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "Urban Styles",
    companyLogo: "/placeholder.svg?height=30&width=120",
    gradient: "from-cyan-500/10 to-blue-500/10",
    result: "+22% average order value",
  },
]

export default function TestimonialsSection() {
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Real results from businesses just like yours
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={cn(
                "relative p-6 rounded-2xl",
                "bg-gradient-to-br",
                testimonial.gradient,
                "border border-white/[0.08] backdrop-blur-sm",
              )}
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-lg">
                {testimonial.result}
              </div>

              <div className="mb-6">
                <svg
                  width="45"
                  height="36"
                  viewBox="0 0 45 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40"
                >
                  <path
                    d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18H13.5C15.433 18 17 19.567 17 21.5V30.5C17 32.433 15.433 34 13.5 34H4.5C2.567 34 1 32.433 1 30.5V21.5C1 19.567 2.567 18 4.5 18H13.5ZM40.5 18H36C36 12.477 40.477 8 46 8V12C42.686 12 40 14.686 40 18H40.5C42.433 18 44 19.567 44 21.5V30.5C44 32.433 42.433 34 40.5 34H31.5C29.567 34 28 32.433 28 30.5V21.5C28 19.567 29.567 18 31.5 18H40.5Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p className="text-white/70 mb-6 italic">{testimonial.quote}</p>

              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-white/40 text-sm">{testimonial.role}</p>
                  <div className="mt-2">
                    <Image
                      src={testimonial.companyLogo || "/placeholder.svg"}
                      alt={testimonial.company}
                      width={80}
                      height={20}
                      className="h-5 w-auto"
                    />
                  </div>
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
          <p className="text-white/60 mb-6">
            Join 200+ businesses who've increased their conversion rates with SoftTrail landing pages
          </p>
          <Link href="https://calendly.com/softtrail/briefing" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white font-medium text-base px-8 py-6 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all"
            >
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

