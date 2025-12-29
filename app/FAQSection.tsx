"use client"

import { motion } from "framer-motion"
import { IconChevronDown, IconHelpCircle } from "@tabler/icons-react"
import { useState } from "react"

const faqs = [
  {
    question: "Is this program beginner-friendly?",
    answer: "No - You need at least 1-2 years of experience in ICT Trading."
  },
  {
    question: "Can I trade any market?",
    answer: "The core system is built around NQ futures, but concepts apply to all markets."
  },
  {
    question: "How long will it take to become consistent?",
    answer: "Depends on discipline, but most traders improve in 4–8 weeks."
  },
  {
    question: "Do you guarantee profits?",
    answer: "No — trading involves risk. We teach you a system that improves your edge and discipline."
  },
  {
    question: "Is there a refund?",
    answer: "No refunds after course access is given."
  }
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-plusJakartaSans py-24">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay with glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 mb-6"
          >
            <IconHelpCircle className="w-8 h-8 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">FAQ</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-300"
          >
            Everything you need to know about our trading mentorship program
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.has(index) ? "auto" : 0,
                    opacity: openItems.has(index) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
