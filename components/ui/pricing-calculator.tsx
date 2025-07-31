"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Users, Zap, TrendingUp } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import Button from "@/components/ui/custom-button"

export default function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [contentVolume, setContentVolume] = useState(1000)
  const [features, setFeatures] = useState({
    analytics: true,
    automation: true,
    multiChannel: false,
    whiteLabel: false,
  })

  const calculatePrice = () => {
    let basePrice = 29

    // Team size multiplier
    if (teamSize > 10) basePrice = 79
    if (teamSize > 25) basePrice = 199

    // Content volume adjustment
    const volumeMultiplier = Math.ceil(contentVolume / 1000)
    basePrice *= volumeMultiplier

    // Feature additions
    if (features.multiChannel) basePrice += 20
    if (features.whiteLabel) basePrice += 50

    return Math.min(basePrice, 499) // Cap at enterprise level
  }

  const recommendedPlan = () => {
    const price = calculatePrice()
    if (price <= 29) return "Starter"
    if (price <= 79) return "Professional"
    return "Enterprise"
  }

  return (
    <GlassCard className="p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Pricing Calculator</h3>
        </div>
        <p className="text-white/70">Find the perfect plan for your team and usage needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <div className="space-y-6">
          {/* Team Size */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <Users className="w-4 h-4" />
              Team Size: {teamSize} members
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-white/60 mt-1">
              <span>1</span>
              <span>50+</span>
            </div>
          </div>

          {/* Content Volume */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <Zap className="w-4 h-4" />
              Monthly Content: {contentVolume.toLocaleString()} pieces
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={contentVolume}
              onChange={(e) => setContentVolume(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-white/60 mt-1">
              <span>100</span>
              <span>10,000+</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-3">
              <TrendingUp className="w-4 h-4" />
              Additional Features
            </label>
            <div className="space-y-3">
              {Object.entries({
                analytics: "Advanced Analytics",
                automation: "Marketing Automation",
                multiChannel: "Multi-Channel Campaigns (+$20/mo)",
                whiteLabel: "White-Label Solution (+$50/mo)",
              }).map(([key, label]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={features[key as keyof typeof features]}
                    onChange={(e) =>
                      setFeatures((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                  />
                  <span className="text-white/80">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <GlassCard className="p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Estimated Monthly Cost</h4>
            <motion.div
              key={calculatePrice()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-white mb-2"
            >
              ${calculatePrice()}
            </motion.div>
            <p className="text-white/60 mb-4">per month</p>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-4">
              <p className="text-white font-medium">Recommended: {recommendedPlan()} Plan</p>
            </div>

            <Button variant="primary" className="w-full">
              Get Started with {recommendedPlan()}
            </Button>
          </GlassCard>

          <div className="text-sm text-white/60 space-y-2">
            <p>• All plans include 14-day free trial</p>
            <p>• No setup fees or hidden costs</p>
            <p>• Cancel anytime</p>
            <p>• 24/7 customer support</p>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
