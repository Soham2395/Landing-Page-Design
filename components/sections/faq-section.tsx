"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"

const faqs = [
  {
    question: "How does ADmyBRAND AI generate content?",
    answer:
      "Our AI uses advanced machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized, on-brand content that resonates with your customers.",
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer:
      "ADmyBRAND AI learns your unique brand voice through our brand training process. You can upload existing content, set tone preferences, and provide feedback to ensure all generated content maintains your brand's personality and style.",
  },
  {
    question: "What types of content can the AI create?",
    answer:
      "Our AI can generate a wide variety of marketing content including social media posts, ad copy, email campaigns, blog articles, product descriptions, video scripts, and more. It supports multiple formats and platforms to meet all your marketing needs.",
  },
  {
    question: "How accurate are the performance predictions?",
    answer:
      "Our AI analyzes historical data and current market trends to provide performance predictions with 85-90% accuracy. The system continuously learns from campaign results to improve its predictions over time.",
  },
  {
    question: "Is there a limit to how much content I can generate?",
    answer:
      "Content generation limits depend on your plan. Starter plans include 1,000 credits per month, Professional plans include 5,000 credits, and Enterprise plans offer unlimited generation. Each piece of content typically uses 1-5 credits depending on complexity.",
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing tools?",
    answer:
      "Yes! We offer integrations with popular marketing platforms including Facebook Ads, Google Ads, Mailchimp, HubSpot, Hootsuite, and many more. Our API also allows for custom integrations with your existing workflow.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also offer extensive documentation, video tutorials, and regular webinars.",
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. All data is stored securely and you maintain full ownership of your content and campaigns.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI and how it can transform your marketing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
