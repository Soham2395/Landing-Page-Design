"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Zap, Target, X } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import AnimatedCounter from "@/components/ui/animated-counter"
import { useState } from "react"

export default function HeroSection() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/90">AI-Powered Marketing Revolution</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Transform Your Brand
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              With AI Magic
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, optimize ad
            performance, and scale your brand like never before.
          </motion.p>

          {/* CTA Buttons - Fixed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDemo(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <GlassCard className="p-6 border-blue-500/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-blue-400 mr-2" />
                <AnimatedCounter end={250} suffix="%" className="text-2xl font-bold text-white" />
              </div>
              <p className="text-white/60 text-sm">ROI Increase</p>
            </GlassCard>
            <GlassCard className="p-6 border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                <AnimatedCounter end={10} suffix="x" className="text-2xl font-bold text-white" />
              </div>
              <p className="text-white/60 text-sm">Faster Content Creation</p>
            </GlassCard>
            <GlassCard className="p-6 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                <AnimatedCounter end={50000} suffix="+" className="text-2xl font-bold text-white" />
              </div>
              <p className="text-white/60 text-sm">Happy Customers</p>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Hero Image/Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16"
        >
          <GlassCard className="p-8 max-w-4xl mx-auto border-blue-500/20">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
              <div className="text-center relative z-10">
                <Play className="w-16 h-16 text-white/60 mx-auto mb-4" />
                <p className="text-white/60">Product Demo Video</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard className="p-6 border-blue-500/20">
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  autoPlay
                  poster="/placeholder.svg?height=400&width=800&text=Demo+Video"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">ADmyBRAND AI Demo</p>
                    <p className="text-white/60">See how AI transforms your marketing</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
