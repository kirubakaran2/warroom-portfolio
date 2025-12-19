"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IconCopy, IconCheck, IconExternalLink } from "@tabler/icons-react"

interface CouponCardProps {
  companyName: string
  discount: string
  couponCode: string
  description?: string
  affiliateUrl: string
  className?: string
}

export const CouponCard = React.forwardRef<HTMLDivElement, CouponCardProps>(
  (
    {
      companyName,
      discount,
      couponCode,
      description,
      affiliateUrl,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopyCode = async () => {
      try {
        await navigator.clipboard.writeText(couponCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy code:", err)
      }
    }

    return (
      <motion.div
        ref={ref}
        {...props}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${className || ""}`}
      >
        {/* Noise background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />
        {/* Subtle glass highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              {companyName}
            </h3>

            <motion.button
              onClick={handleCopyCode}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium border backdrop-blur-md transition-colors ${
                copied
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                  : "border-white/15 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {copied ? (
                <>
                  <IconCheck size={16} /> Copied
                </>
              ) : (
                <>
                  <IconCopy size={16} /> Copy
                </>
              )}
            </motion.button>
          </div>

          {/* Discount */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold
              bg-gradient-to-r from-indigo-400/20 to-cyan-400/20
              text-indigo-200 border border-white/10">
              {discount}
            </span>
          </div>

          {/* Coupon code */}
          <div className="mb-4 rounded-lg border border-white/10 bg-black/30 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
              Coupon Code
            </p>
            <p className="font-mono text-white text-sm font-semibold select-all">
              {couponCode}
            </p>
          </div>

          {/* Description */}
          {description && (
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              {description}
            </p>
          )}

          {/* CTA */}
          <motion.a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl px-5 py-3 text-sm font-semibold
              bg-white/10 text-white
              border border-white/15
              hover:bg-white/20
              transition-all
            "
          >
            Get Deal
            <IconExternalLink size={16} />
          </motion.a>
        </div>
      </motion.div>
    )
  }
)

CouponCard.displayName = "CouponCard"
