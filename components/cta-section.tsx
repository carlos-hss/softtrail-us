"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border border-white/[0.08] backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-white/40 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to boost productivity and streamline collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
            <Button className="bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white">
              Get Started
            </Button>
          </div>

          <p className="mt-4 text-white/30 text-sm">Free 14-day trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  )
}

