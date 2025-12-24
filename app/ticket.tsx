"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const handleGetStarted = () => {
  window.open("https://forms.gle/gLG6HF2XfUkoB83MA", "_blank")
}

const ElegantButton = ({ onClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
      onTouchEnd={() => isMobile && setIsHovered(false)}
      className="relative w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-3.5 bg-white text-black font-medium text-base sm:text-lg tracking-wide overflow-hidden group active:scale-95 sm:active:scale-100"
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
        <span className="font-light">Enroll Now</span>
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
        >
          →
        </motion.span>
      </span>
      
      {/* Underline animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-white w-0 group-hover:w-full"
        transition={{ duration: 0.3 }}
      />
      
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}

const ProfessionalCard = ({ 
  title, 
  subtitle, 
  tagline,
  price,
  features,
  details
}: {
  title: string
  subtitle: string
  tagline: string
  price: string
  features: string[]
  details: { title: string; items: string[] }[]
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      className="relative w-full bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden group"
      whileHover={isMobile ? {} : { y: -4 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2">{title}</h3>
            <p className="text-gray-400 font-light text-sm mb-1">{subtitle}</p>
            <p className="text-gray-500 text-xs font-light">{tagline}</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-2xl sm:text-3xl font-light text-white mb-1">{price}</div>
            <div className="text-xs text-gray-500 font-light">One-time payment</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 sm:p-8">
        <h4 className="text-white font-light mb-6 text-xs sm:text-sm tracking-wide uppercase opacity-70">Core Components</h4>
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group/item">
              <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-white/40 rounded-full" />
              <span className="text-gray-300 font-light text-sm sm:text-base group-hover/item:text-white transition-colors duration-200 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Details */}
      <div className="border-t border-white/10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-200 active:bg-white/[0.03]"
        >
          <span className="text-gray-400 font-light text-xs sm:text-sm">
            {isExpanded ? 'Hide Details' : 'View Complete Breakdown'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            ↓
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="p-4 sm:p-6 pt-0 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {details.map((section, index) => (
                <div key={index}>
                  <h5 className="text-white font-light mb-3 sm:mb-4 text-xs sm:text-sm opacity-70">{section.title}</h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Ticket = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-x-hidden">
      {/* Minimal decorative lines - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-4 sm:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute right-4 sm:right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 font-light mb-4 sm:mb-6">
            Professional Trading Education
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Warroom
            <span className="opacity-50 font-extralight"> Mentorship</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            A disciplined approach to futures trading. Systematic execution, 
            risk management, and professional-grade analysis.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl w-full mb-8 sm:mb-16 px-4 sm:px-0">
        <ProfessionalCard
          title="Mentorship Program"
          subtitle="Complete System Training"
          tagline="Lifetime access • Professional methodologies"
          price="₹XX,XXX"
          features={[
            "NQ Futures Trading System",
            "Risk Management Framework",
            "Live Market Analysis",
            "Entry & Exit Precision Rules",
            "Trading Psychology & Discipline"
          ]}
          details={[
            {
              title: "Technical Curriculum",
              items: [
                "Market structure analysis",
                "Price action mastery",
                "Volume profile techniques",
                "Multiple timeframe analysis",
                "Advanced order flow"
              ]
            },
            {
              title: "Execution Training",
              items: [
                "Pre-trade preparation routines",
                "Trade execution protocols",
                "Position sizing strategies",
                "Risk-reward optimization",
                "Performance tracking"
              ]
            }
          ]}
        />

        <ProfessionalCard
          title="Who Should Enroll"
          subtitle="Designed For Serious Traders"
          tagline="From foundation to professional execution"
          price="Apply Today"
          features={[
            "Beginners seeking structured learning",
            "Intermediate traders overcoming inconsistency",
            "Funded traders pursuing stability",
            "Professionals refining methodologies",
            "Those committed to trading as a skill"
          ]}
          details={[
            {
              title: "Program Benefits",
              items: [
                "Weekly accountability sessions",
                "Private community access",
                "Direct mentorship access",
                "Trading psychology training",
                "Continuous system updates"
              ]
            },
            {
              title: "Expected Outcomes",
              items: [
                "Consistent trading performance",
                "Professional risk management",
                "Emotional discipline",
                "Systematic decision making",
                "Sustainable profitability"
              ]
            }
          ]}
        />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center max-w-2xl mx-auto w-full px-4 sm:px-0"
      >
        <div className="text-gray-400 font-light text-sm mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          Limited availability. Applications reviewed based on commitment and 
          alignment with professional trading standards.
        </div>
        <div className="flex justify-center">
          <ElegantButton onClick={handleGetStarted} />
        </div>
        
        {/* Footer note */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-xs text-gray-500 font-light space-y-1">
            <p className="text-xs sm:text-sm">Complete discretion and confidentiality maintained</p>
            <p className="text-xs sm:text-sm">All methodologies based on professional trading principles</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Ticket