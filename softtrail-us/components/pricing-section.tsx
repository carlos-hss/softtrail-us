"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small teams just getting started",
    features: ["Up to 5 team members", "Basic analytics", "24/7 support", "1GB storage"],
    gradient: "from-indigo-500/20 to-indigo-500/5",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams that need more power and features",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
      "API access",
    ],
    gradient: "from-rose-500/20 to-indigo-500/20",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex needs and custom requirements",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "API access",
      "SSO authentication",
      "Custom branding",
    ],
    gradient: "from-amber-500/20 to-rose-500/20",
    popular: false,
  },
]

export default function PricingSection() {
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Choose the plan that works best for your team
          </motion.p>
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
                    <div className="bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="ml-1 text-white/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-white/40 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-emerald-500 mr-2" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600"
                        : "bg-white/10 hover:bg-white/20 text-white",
                    )}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

