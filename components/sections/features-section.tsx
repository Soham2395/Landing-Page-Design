"use client"

import type React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Brain, Zap, Target, BarChart3, Palette, MessageSquare } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Generate high-converting ad copy, social media posts, and email campaigns in seconds with our advanced AI models.",
    color: "from-blue-400 to-blue-600",
    glowColor: "blue-400",
    category: "Content",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your ideal customers with precision using AI-powered audience analysis and segmentation.",
    color: "from-cyan-400 to-cyan-600",
    glowColor: "cyan-400",
    category: "Analytics",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track, analyze, and optimize your campaigns with real-time insights and predictive analytics.",
    color: "from-purple-400 to-purple-600",
    glowColor: "purple-400",
    category: "Analytics",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "Maintain perfect brand voice and visual identity across all your marketing materials automatically.",
    color: "from-indigo-400 to-indigo-600",
    glowColor: "indigo-400",
    category: "Design",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Campaigns",
    description: "Deploy synchronized campaigns across social media, email, and advertising platforms seamlessly.",
    color: "from-teal-400 to-teal-600",
    glowColor: "teal-400",
    category: "Automation",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Set up intelligent automation workflows that adapt and optimize based on performance data.",
    color: "from-violet-400 to-violet-600",
    glowColor: "violet-400",
    category: "Automation",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5])
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02, z: 50 }}
        className="relative h-full"
      >
        <GlassCard className="p-8 h-80 border-white/10 hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden flex flex-col">
          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          />

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}

          <div className="flex flex-col h-full">
            {/* Category badge */}
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-blue-500/20 text-blue-400 border border-blue-500/30 self-start">
              {feature.category}
            </div>

            {/* Icon with 3D effect */}
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 relative`}
              whileHover={{
                rotateY: 15,
                boxShadow: `0 20px 40px rgba(59, 130, 246, 0.3)`,
              }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <feature.icon className="w-8 h-8 text-white" />

              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} blur-xl opacity-0 group-hover:opacity-50`}
                animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex-grow">
              <motion.h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </motion.h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>

          {/* Interactive corner accent */}
          <motion.div
            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
          />
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-cyan-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-blue-400 font-medium">✨ Powerful Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Revolutionary AI Tools
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Built for Growth
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Experience the future of marketing with our cutting-edge AI suite designed to transform your brand's digital
            presence.
          </p>
        </motion.div>

        {/* Features Grid - Clean 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Interactive CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto border-blue-500/20 relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Marketing?</h3>
              <p className="text-white/70 mb-6">
                Join thousands of businesses already using ADmyBRAND AI to revolutionize their marketing strategy.
              </p>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
