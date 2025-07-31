"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Zap, Crown, Rocket } from "lucide-react"
import Button from "@/components/ui/custom-button"
import GlassCard from "@/components/ui/glass-card"
import PricingCalculator from "@/components/ui/pricing-calculator"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 29,
    yearlyPrice: 290,
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (1,000 credits/month)",
      "Basic Analytics Dashboard",
      "Email Support",
      "3 Brand Profiles",
      "Social Media Integration",
      "Basic Templates",
    ],
    popular: false,
    color: "from-blue-500 to-blue-600",
    glowColor: "blue-500",
  },
  {
    name: "Professional",
    icon: Crown,
    price: 79,
    yearlyPrice: 790,
    description: "Ideal for growing businesses and agencies",
    features: [
      "AI Content Generation (5,000 credits/month)",
      "Advanced Analytics & Insights",
      "Priority Support",
      "10 Brand Profiles",
      "Multi-Channel Campaigns",
      "Custom Templates",
      "A/B Testing",
      "Team Collaboration",
    ],
    popular: true,
    color: "from-cyan-500 to-purple-500",
    glowColor: "cyan-500",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: 199,
    yearlyPrice: 1990,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited AI Content Generation",
      "Custom Analytics & Reporting",
      "Dedicated Account Manager",
      "Unlimited Brand Profiles",
      "White-label Solutions",
      "Custom Integrations",
      "Advanced Automation",
      "Priority Feature Access",
    ],
    popular: false,
    color: "from-purple-500 to-indigo-500",
    glowColor: "purple-500",
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isYearly ? "text-white" : "text-white/60"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/20"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? "text-white" : "text-white/60"}`}>
              Yearly
              <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard
                className={`p-8 h-full flex flex-col ${plan.popular ? `border-2 border-${plan.glowColor}/50 pt-12` : `border-${plan.glowColor}/20`} hover:border-${plan.glowColor}/40 transition-all duration-300`}
              >
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${isYearly ? plan.yearlyPrice : plan.price}</span>
                    <span className="text-white/60">/{isYearly ? "year" : "month"}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? "primary" : "secondary"} className="w-full mt-auto">
                  Get Started
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PricingCalculator />
        </motion.div>
      </div>
    </section>
  )
}
