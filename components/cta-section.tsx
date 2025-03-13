"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#070707] to-[#050505]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-rose-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              Ready to Transform Your Online Presence?
            </h2>
            
            <p className="text-white/70 text-lg mb-10 max-w-3xl mx-auto">
              Join hundreds of successful businesses that have increased their conversion rates and grown their revenue with our high-performing landing pages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white font-medium text-base px-8 py-6 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-300"
            >
              Get Started Now
              <span className="ml-2">→</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 bg-dark text-white hover:bg-white/80 font-medium text-base px-8 py-6 transition-all duration-300 w-full sm:w-auto"
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

