"use client"

import { useState, useEffect, type FC } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Youtube, TrendingUp, Target, Activity, BarChart3, Zap } from "lucide-react"
import zeus2 from "../public/zeus2.jpeg"
import zeus3 from "../public/zeus3.jpeg"
import zeus from "../public/Sculpture.jpg"
import zeusai from "../public/zeusai.jpeg"

import CustomCursor from "./components/customcursor"
// ===================== SOCIAL ICON COMPONENT =====================
const DiscordIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor">
    <path d="M216.37,57.47A193.09,193.09,0,0,0,168,40h0a2,2,0,0,0-2,1.21c-2.07,4.69-4.37,10.83-6,15.61a179.81,179.81,0,0,0-54.06,0c-1.59-4.78-3.89-10.92-6-15.61A2,2,0,0,0,98,40h0A192.35,192.35,0,0,0,49.63,57.47,2,2,0,0,0,48.73,58.6C16.3,109.77,7.74,159.72,11.87,209a2.11,2.11,0,0,0,.79,1.43A194.27,194.27,0,0,0,71.13,238a2,2,0,0,0,2.18-.68,139,139,0,0,0,11.9-19.34,2,2,0,0,0-1.09-2.77,127.87,127.87,0,0,1-18.25-8.69,2,2,0,0,1-.2-3.32c1.23-.92,2.46-1.87,3.63-2.83a1.92,1.92,0,0,1,2-.27c38.31,17.49,79.77,17.49,117.49,0a1.92,1.92,0,0,1,2,.27c1.17.96,2.4,1.91,3.64,2.83a2,2,0,0,1-.2,3.32,119.87,119.87,0,0,1-18.26,8.69,2,2,0,0,0-1.08,2.77,156.19,156.19,0,0,0,11.89,19.34,2,2,0,0,0,2.18.68,193.45,193.45,0,0,0,58.48-27.57,2.11,2.11,0,0,0,.79-1.43c4.93-57,-.83-106.53-3.54-150.4A1.59,1.59,0,0,0,216.37,57.47ZM88.31,179.2c-11.81,0-21.54-10.85-21.54-24.17s9.52-24.17,21.54-24.17c12.12,0,21.75,10.95,21.54,24.17C109.85,168.35,100.33,179.2,88.31,179.2Zm79.38,0c-11.81,0-21.54-10.85-21.54-24.17s9.52-24.17,21.54-24.17c12.12,0,21.75,10.95,21.54,24.17C189.23,168.35,179.81,179.2,167.69,179.2Z"/>
  </svg>
)

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// ===================== HOVERABLE ICON COMPONENT =====================
type HoverableIconProps = {
  href: string
  label: string
  children: React.ReactNode
}

const HoverableIcon: React.FC<HoverableIconProps> = ({ href, label, children }) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative hover-target group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-400 group-hover:text-white transition-colors duration-300 block p-2"
      >
        {children}
      </a>

      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: -30, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest uppercase bg-black/80 border border-white/10 text-white/90 rounded px-2 py-1 backdrop-blur-md whitespace-nowrap z-50 hidden sm:block"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

// ===================== PLACEHOLDER IMAGES =====================
const createPlaceholderImage = (color: string) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23ffffff40'%3ETrading Hero Image%3C/text%3E%3C/svg%3E`
}

const images = [zeus, zeus2, zeus3, zeusai]

// ===================== TRADING ICONS =====================
const tradingIcons = [
  { icon: TrendingUp, color: "text-green-400", delay: 0 },
  { icon: Target, color: "text-red-400", delay: 0.2 },
  { icon: Activity, color: "text-blue-400", delay: 0.4 },
  { icon: BarChart3, color: "text-yellow-400", delay: 0.6 },
  { icon: Zap, color: "text-purple-400", delay: 0.8 },
]

// ===================== MAIN COMPONENT =====================
export default function HeroOne() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentIconIndex, setCurrentIconIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")

  const fullText = "For traders who refuse to stay average."

  // Background Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Typing Animation
  useEffect(() => {
    const typingSpeed = 50
    const startDelay = 1800
    setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, typingSpeed)
    }, startDelay)
  }, [])

  // Animated Icons Cycling
  useEffect(() => {
    const iconCycleTimer = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % tradingIcons.length)
    }, 4000)

    return () => clearInterval(iconCycleTimer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-yellow-500/30">
      {/* Custom Cursor - Hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* ================= BACKGROUND LAYERS ================= */}

      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={typeof images[currentImageIndex] === "string" ? images[currentImageIndex] : images[currentImageIndex].src}
              alt="Background"
              className="w-full h-full object-cover opacity-50 sm:opacity-40"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay & Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />

      {/* Tactical Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* ================= HUD / DECORATIVE ELEMENTS ================= */}

      {/* Top Left Corner */}
      <div className="absolute top-4 left-4 z-20 hidden md:block">
        <div className="w-10 h-10 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:block text-right">
        <div className="w-10 h-10 border-b-2 border-r-2 border-white/20 rounded-br-lg ml-auto" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 py-8 md:py-10 pt-22 sm:pt-24 md:pt-20">

        {/* Badge / Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 md:mb-8 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
        >
          <span className="text-xs sm:text-sm font-mono font-bold text-yellow-400 tracking-widest uppercase">
            Join the Elite
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="text-center max-w-5xl mx-auto mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] sm:leading-[0.9]">
            {[
              <span key={0} className="inline-flex items-center justify-center flex-wrap">
                Master the Markets
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIconIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      y: [0, -2, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.5 },
                      rotate: { duration: 0.5 },
                      y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    }}
                    className="ml-1 sm:ml-2"
                  >
                    {(() => {
                      const IconComponent = tradingIcons[currentIconIndex].icon
                      return <IconComponent className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl ${tradingIcons[currentIconIndex].color}`} />
                    })()}
                  </motion.span>
                </AnimatePresence>
              </span>,
              "Build Discipline",
            ].map((txt, i) => (
              <motion.span
                key={i}
                className="block text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.3 }}
              >
                {txt}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300/80 mt-4 md:mt-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span style={{ display: 'inline-block', borderRight: '.15em solid #fff' }}>{displayedText}</span>
          </motion.p>
        </div>

        {/* Secondary Title/Description */}
        <motion.p
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-center max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Join the <em>WarRoom</em> — a private, elite mentorship designed to turn inconsistent traders into confident, rule-based performers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-10 w-full max-w-md sm:max-w-none px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://forms.gle/gLG6HF2XfUkoB83MA"
            className="px-8 py-3.5 bg-yellow-400 text-black font-bold rounded-full text-center text-sm sm:text-base shadow-lg shadow-yellow-400/20"
          >
            Join Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#coupons"
            className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full text-center text-sm sm:text-base"
          >
            Claim Discounts
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center w-full mt-10 md:mt-14 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5"
          >
            <HoverableIcon href="https://www.instagram.com/ict_dinesh/" label="INSTAGRAM">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </HoverableIcon>
            <div className="w-px h-5 bg-white/10" />
            <HoverableIcon href="https://x.com/ict_dinesh/status/1986090000153448690" label="TWITTER / X">
              <TwitterIcon size={20} />
            </HoverableIcon>
            <div className="w-px h-5 bg-white/10" />
            <HoverableIcon href="https://discord.gg/qnpfuETS" label="DISCORD">
              <DiscordIcon size={22} />
            </HoverableIcon>
            <div className="w-px h-5 bg-white/10" />
            <HoverableIcon href="https://www.youtube.com/@ict_dinesh" label="YOUTUBE">
              <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
            </HoverableIcon>
          </motion.div>
        </div>
      </div>
    </section>
  )
}