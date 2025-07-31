"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import Button from "@/components/ui/custom-button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut by 80%. It's like having a team of expert marketers at your fingertips.",
  },
  {
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "StartupBoost",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As a startup founder, I was struggling to create consistent, high-quality marketing content. ADmyBRAND AI not only solved this problem but helped us achieve our first million in revenue 6 months ahead of schedule.",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "GrowthLab Agency",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The AI-powered insights and automation features are incredible. We're now managing 3x more clients with the same team size, and our campaign performance has never been better. ROI increased by 250% across all clients.",
  },
  {
    name: "David Thompson",
    role: "E-commerce Director",
    company: "RetailMax",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The multi-channel campaign feature is a game-changer. We can now coordinate our messaging across social media, email, and ads seamlessly. Our brand consistency has improved dramatically, and sales are up 180%.",
  },
  {
    name: "Lisa Park",
    role: "Brand Manager",
    company: "InnovateCorp",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "What impressed me most is how the AI maintains our brand voice perfectly across all content. It's like it truly understands our brand personality. Our social media engagement has tripled since we started using it.",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their marketing with ADmyBRAND AI.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-white/60">{testimonials[currentIndex].role}</div>
                  <div className="text-blue-400 font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Add this after the main testimonial card and before navigation */}
          <div className="flex justify-center mt-6 mb-4">
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                key={currentIndex}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="secondary" size="sm" onClick={prevTestimonial} className="p-2">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="secondary" size="sm" onClick={nextTestimonial} className="p-2">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["TechFlow", "StartupBoost", "GrowthLab", "RetailMax", "InnovateCorp"].map((company) => (
              <div key={company} className="text-white/40 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
