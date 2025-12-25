"use client"

import { motion } from "framer-motion"
import { CouponCard } from "@/components/ui/coupon-card"
import { Navbar } from "../Navbar"

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
  {
    companyName: "FXReplay",
    discount: "15% OFF",
    couponCode: "FXREPLAY15",
    description: "15% off on trading analysis and educational tools.",
    affiliateUrl: "https://www.fxreplay.com/",
    logoUrl: "/fxreplay.jpg"
  },
  {
    companyName: "Tradezella",
    discount: "20% OFF",
    couponCode: "DINESH20",
    description: "20% off on trading journal and analytics tools.",
    affiliateUrl: "https://tradezella.com?fpr=dinesh",
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

export default function CouponsPage() {
  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-screen overflow-hidden bg-black text-white font-plusJakartaSans py-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"
          >
            Exclusive Trading Coupons
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-300"
          >
            Save big on premium trading tools, courses, and prop firm challenges with our exclusive coupon codes
          </motion.p>
        </motion.div>

        {/* Coupons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {coupons.map((coupon, i) => (
            <motion.div key={i} variants={item}>
              <CouponCard
                companyName={coupon.companyName}
                discount={coupon.discount}
                couponCode={coupon.couponCode}
                description={coupon.description}
                affiliateUrl={coupon.affiliateUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={item}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            More coupons and deals coming soon! Stay tuned for updates.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
    </>
  )
}
