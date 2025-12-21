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
  logoUrl?: string
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
      logoUrl,
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
      <div
        ref={ref}
        {...props}
        className={`relative rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${className || ""}`}
      >
        {/* Ribbon */}
        <div className="absolute -right-2 -top-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow">
          SALE
        </div>

        <div className="p-6">
          {/* Company & Discount */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div className="flex items-center gap-3">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt={`${companyName} logo`}
                  className="w-12 h-12 rounded-lg object-contain border border-gray-200"
                />
              )}
              <div>
                <p className="text-sm text-gray-500 mb-1">Save at</p>
                <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-2xl px-4 py-2 rounded-lg">
              {discount}
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="text-gray-600 mb-6 pb-6 border-b border-gray-100">
              {description}
            </p>
          )}

          {/* Coupon Code Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Use this code at checkout:</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg px-4 py-3">
                <p className="font-mono text-lg font-bold text-gray-900 tracking-wider">
                  {couponCode}
                </p>
              </div>
              <button
                onClick={handleCopyCode}
                className={`flex items-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors ${
                  copied
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {copied ? (
                  <>
                    <IconCheck size={18} />
                    <span className="hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <IconCopy size={18} />
                    <span className="hidden sm:inline">Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="text-sm text-gray-500">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Verified • Expires soon
            </div>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
            >
              Shop Now
              <IconExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    )
  }
)

CouponCard.displayName = "CouponCard"
