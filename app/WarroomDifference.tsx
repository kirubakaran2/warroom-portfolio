"use client"

import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, MessageSquare, Zap, Award, Target } from "lucide-react"
import { IconCalendar } from "@tabler/icons-react"

const benefits = [
  {
    title: "Market Outlook & Analysis",
    description: "Weekly institutional-level analysis with precise entry/exit points. Know exactly where the market is heading before Monday opens.",
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Weekend Doubt Sessions",
    description: "Special sessions for working professionals to clarify concepts and stay consistent. No question left unanswered.",
     icon: <IconCalendar className="w-8 h-8 text-blue-400" />,
        color: "from-blue-400/20 to-blue-600/5",
  },
  {
    title: "Personal 1:1 Mentorship",
    description: "Direct feedback on your trades. We identify and fix your specific weaknesses to stop result fluctuations.",
    icon: <Target className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Private Trading Community",
    description: "Serious traders only. Share insights, discuss setups, and stay accountable with like-minded professionals.",
    icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    title: "Lifetime Access & Updates",
    description: "One-time payment for lifetime access to all current and future content, tools, and community updates.",
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Funded Account Pathway",
    description: "Structured guidance to pass prop firm challenges and maintain funded accounts with consistent payouts.",
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20"
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function WarroomDifference() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
<motion.div
                        variants={item}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            What Makes <span className="text-yellow-400">WarRoom</span> Different?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Live mentorship, real‑time market analysis, weekly challenges, and a holistic approach to trading, health, and mindset.
                        </p>
                    </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{b.title}</h3>
                <p className="text-gray-300 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
                    variants={item}
                    className="text-center mt-12"
                >
                    <a
                        href="https://discord.com/invite/qnpfuETS"
                        className="inline-block px-10 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                        Join Warroom Today
                    </a>
                </motion.div>
      </div>
    </section>
  )
}
