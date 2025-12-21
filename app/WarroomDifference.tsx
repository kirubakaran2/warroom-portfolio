"use client"

import React from "react"
import { FeatureSteps } from "../components/blocks/feature-section"

const features = [
  {
    step: "Market Outlook & Analysis",
    title: "Market Outlook & Analysis",
    content:
      "Weekly institutional-level analysis with precise entry/exit points. Know exactly where the market is heading before Monday opens.",
    image: "/market_outlook.png",
  },
  {
    step: "Live Trading Sessions",
    title: "Live Trading Sessions",
    content:
      "Real-time Zoom sessions where we analyze, trade, and review together. See professional execution in action.",
    image: "/weekly_zoom_calls.png",
  },
  {
    step: "Personal 1:1 Mentorship",
    title: "Personal 1:1 Mentorship",
    content:
      "Direct feedback on your trades. We identify and fix your specific weaknesses to stop result fluctuations.",
    image: "/one-to-one.png",
  },
  {
    step: "Private Trading Community",
    title: "Private Trading Community",
    content:
      "Serious traders only. Share insights, discuss setups, and stay accountable with like-minded professionals.",
    image: "/dis.png",
  },
  {
    step: "Lifetime Access & Updates",
    title: "Lifetime Access & Updates",
    content:
      "One-time payment for lifetime access to all current and future content, tools, and community updates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },
  {
    step: "Funded Account Pathway",
    title: "Funded Account Pathway",
    content:
      "Structured guidance to pass prop firm challenges and maintain funded accounts with consistent payouts.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
  },
]

export default function WarroomDifference() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <FeatureSteps
          title="Why Serious Traders Choose Warroom"
          subtitle="Built for traders who want consistency, clarity, and capital"
          features={features}
          autoPlayInterval={4000}
        />
      </div>
    </section>
  )
}
