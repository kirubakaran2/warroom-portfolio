"use client"

import React from "react"
import { motion } from "framer-motion"
import { IconTrendingUp, IconVideo, IconUserCheck, IconMessageCircle, IconInfinity, IconTarget, IconArrowRight, IconCheck } from "@tabler/icons-react"

// Local fallback Card and CardContent components to avoid module not found errors.
// Replace these with your real UI components or restore the original import when the module is available.
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={["rounded-lg", className].filter(Boolean).join(" ")} {...props}>
    {children}
  </div>
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={["p-8", className].filter(Boolean).join(" ")} {...props}>
    {children}
  </div>
)

// ----- Data -----
const differenceCards = [
  {
    title: "Market Outlook & Analysis",
    description: "Weekly institutional-level analysis with precise entry/exit points. Know exactly where the market is heading before Monday opens.",
    icon: <IconTrendingUp className="w-6 h-6 text-blue-600" />,
    stat: "95% accuracy rate",
    features: ["Weekly forecasts", "Key levels marked", "Risk management zones"]
  },
  {
    title: "Live Trading Sessions",
    description: "Real-time Zoom sessions where we analyze, trade, and review together. See professional execution in action.",
    icon: <IconVideo className="w-6 h-6 text-red-600" />,
    stat: "2+ hours weekly",
    features: ["Screen sharing", "Q&A sessions", "Trade replays"]
  },
  {
    title: "Personal 1:1 Mentorship",
    description: "Direct feedback on your trades. We identify and fix your specific weaknesses to stop result fluctuations.",
    icon: <IconUserCheck className="w-6 h-6 text-green-600" />,
    stat: "Personalized reviews",
    features: ["Trade analysis", "Mindset coaching", "Strategy optimization"]
  },
  {
    title: "Private Trading Community",
    description: "Serious traders only. Share insights, discuss setups, and stay accountable with like-minded professionals.",
    icon: <IconMessageCircle className="w-6 h-6 text-purple-600" />,
    stat: "500+ traders",
    features: ["Daily discussions", "Setups shared", "Market updates"]
  },
  {
    title: "Lifetime Access & Updates",
    description: "One-time payment for lifetime access to all current and future content, tools, and community updates.",
    icon: <IconInfinity className="w-6 h-6 text-orange-600" />,
    stat: "One-time payment",
    features: ["No monthly fees", "All future updates", "Lifetime support"]
  },
  {
    title: "Funded Account Pathway",
    description: "Structured guidance to pass prop firm challenges and maintain funded accounts with consistent payouts.",
    icon: <IconTarget className="w-6 h-6 text-cyan-600" />,
    stat: "$1M+ funded traders",
    features: ["Challenge strategies", "Risk management", "Payout optimization"]
  },
]

export default function WarroomDifference() {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28 font-plusJakartaSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <IconCheck className="w-4 h-4" />
            PREMIUM MENTORSHIP
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Serious Traders Choose{" "}
            <span className="text-blue-600">Warroom</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform from inconsistent trader to market dominator with our comprehensive mentorship program
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differenceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white">
                <CardContent className="p-8">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      {card.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {card.stat}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <IconCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Warroom vs Other Communities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the difference between comprehensive mentorship and basic signal groups
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <IconCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">With Warroom</h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized 1:1 mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Live trading sessions with explanations</span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lifetime access to all content</span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Funded account guidance & support</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <IconArrowRight className="w-5 h-5 text-gray-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Others Offer</h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-500">Generic signals with no explanation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-500">Monthly subscription fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-500">No personalized feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-500">Basic chat rooms only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ serious traders who have stopped guessing and started winning consistently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.com/invite/qnpfuETS"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Join Warroom Today
                <IconArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Limited spots available • One-time payment • Lifetime access
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}