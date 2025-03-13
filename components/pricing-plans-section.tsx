"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, X, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "$497",
    description: "Perfect for small businesses looking to establish an online presence",
    features: [
      { included: true, text: "Custom landing page design" },
      { included: true, text: "Mobile responsive" },
      { included: true, text: "Contact form integration" },
      { included: true, text: "Basic SEO optimization" },
      { included: false, text: "A/B testing" },
      { included: false, text: "Custom animations" },
      { included: false, text: "Multiple page sections" },
      { included: false, text: "Ongoing optimization" },
    ],
    cta: "Get Started",
    gradient: "from-indigo-500/90 to-indigo-500/80",
    popular: false,
    deliveryTime: "7-10 days",
  },
  {
    name: "Pro",
    price: "$897",
    description: "Ideal for growing businesses that need more advanced features and optimization",
    features: [
      { included: true, text: "Custom landing page design" },
      { included: true, text: "Mobile responsive" },
      { included: true, text: "Contact form integration" },
      { included: true, text: "Advanced SEO optimization" },
      { included: true, text: "A/B testing" },
      { included: true, text: "Custom animations" },
      { included: false, text: "Multiple page sections" },
      { included: false, text: "Ongoing optimization" },
    ],
    cta: "Get Started",
    gradient: "from-rose-500/90 to-indigo-500/90",
    popular: true,
    deliveryTime: "10-14 days",
  },
  {
    name: "Premium",
    price: "$1,297",
    description: "For businesses that want the ultimate high-converting landing page experience",
    features: [
      { included: true, text: "Custom landing page design" },
      { included: true, text: "Mobile responsive" },
      { included: true, text: "Contact form integration" },
      { included: true, text: "Advanced SEO optimization" },
      { included: true, text: "A/B testing" },
      { included: true, text: "Custom animations" },
      { included: true, text: "Multiple page sections" },
      { included: true, text: "Ongoing optimization" },
    ],
    cta: "Get Started",
    gradient: "from-amber-500/90 to-rose-500/90",
    popular: false,
    deliveryTime: "14-21 days",
  },
]

export default function PricingPlansSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="pricing">
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
            Choose Your Landing Page Package
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto mb-8"
          >
            Select the package that best fits your business needs and goals
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 mb-12"
          >
            <span className="text-emerald-400 font-medium">100% Satisfaction Guarantee:</span>
            <span className="text-white/70">Unlimited revisions until you&apos;re completely satisfied</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card
                className={cn(
                  "relative overflow-hidden border-white/[0.08]",
                  "bg-gradient-to-b",
                  plan.gradient,
                  "backdrop-blur-sm",
                  plan.popular ? "scale-105 shadow-lg" : "",
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-rose-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="ml-1 text-white/60">one-time</span>
                  </div>
                  <div className="mt-2 text-white/60 text-sm">Delivery in {plan.deliveryTime}</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-white/40 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-rose-500/50 mr-2 flex-shrink-0" />
                        )}
                        <span className={cn(feature.included ? "text-white/70" : "text-white/30")}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://calendly.com/softtrail/briefing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className={cn(
                        "w-full py-6 font-medium text-base",
                        plan.popular
                          ? "bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30"
                          : "bg-indigo-500/30 hover:bg-indigo-500/50 text-white border border-indigo-500/30 hover:border-indigo-500/50",
                      )}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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
          <p className="text-white/40 mb-2">All packages include a free 30-minute strategy call</p>
          <p className="text-white/60">
            Need a custom solution?{" "}
            <a href="#" className="text-rose-400 hover:underline">
              Contact us
            </a>{" "}
            for a personalized quote
          </p>
        </motion.div>
      </div>
    </section>
  )
}

