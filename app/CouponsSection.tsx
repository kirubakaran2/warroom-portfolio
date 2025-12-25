"use client"

import { motion } from "framer-motion"
import { CouponCard } from "@/components/ui/coupon-card"

const coupons = [
  {
    companyName: "5%ers",
    discount: "10% OFF",
    couponCode: "COMMING SOON",
    description: `Manage Up to $4M
10% OFF only First Purchase
Get 5k Account only for 39$`,
    affiliateUrl: "https://www.the5ers.com/?afmc=kll",
    logoUrl: "/5ers.jpg"
  },
  {
    companyName: "Blue Guardian Futures",
    discount: "60% OFF",
    couponCode: "FUTURE80",
    description: "Futures, Commodities\nMax Allocation 450k",
    affiliateUrl: "https://nononsensetrader.com/%F0%9F%8E%AF-how-to-beat-the-5ers-bootcamp-with-strategyquant-x-and-become-a-4m-robot-wielding-legend/",
    logoUrl: "/bluee.jpg"
  },
  {
    companyName: "Funding Ticks",
    discount: "35% OFF",
    couponCode: "FUNDINGTICKS70",
    description: "Save big on prop firm challenges and funded accounts with this exclusive discount.",
    affiliateUrl: "https://nononsensetrader.com/%F0%9F%8E%AF-how-to-beat-the-5ers-bootcamp-with-strategyquant-x-and-become-a-4m-robot-wielding-legend/",
    logoUrl: "/tradif.png"
  },
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

export default function CouponsSection() {
  return (
    <section id="coupons" className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white font-plusJakartaSans py-24">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid overlay with glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            variants={item}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"
          >
            Exclusive Trading Deals
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-300"
          >
            Save big on premium trading tools, courses, and prop firm challenges with our curated discounts
          </motion.p>
        </motion.div>

        {/* Coupons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {coupons.map((coupon, i) => (
            <motion.div key={i} variants={item}>
              <CouponCard
                companyName={coupon.companyName}
                discount={coupon.discount}
                couponCode={coupon.couponCode}
                description={coupon.description}
                affiliateUrl={coupon.affiliateUrl}
                logoUrl={coupon.logoUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          variants={item}
          className="text-center mt-12"
        >
          <a
            href="/coupons"
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Deals
          </a>
        </motion.div>
      </div>
    </section>
  )
}
