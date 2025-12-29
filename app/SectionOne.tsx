"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CustomCursor from "./components/customcursor"
import { Instagram, Youtube, TrendingUp, Target, Activity, TrendingDown, BarChart3, Zap } from "lucide-react"
import { PiDiscordLogoFill } from "react-icons/pi"
import { FaXTwitter } from "react-icons/fa6"
import zeus2 from "../public/zeus2.jpeg"
import zeus3 from "../public/zeus3.jpeg"
import zeus from "../public/Sculpture.jpg"
import zeusai from "../public/zeusai.jpeg"

// ===================== TYPES & HELPERS =====================

type HoverableIconProps = {
  href: string
  label: string
  children: React.ReactNode
}
const HoverableIcon: React.FC<HoverableIconProps> = ({ href, label, children }) => {
  const [hover, setHover] = useState(false)

  // NOTE FOR MOBILE: On touch devices, mouse events are unreliable.
  // The tooltip logic should be adjusted or disabled for true mobile responsiveness.
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
        {/* Hiding the tooltip on small screens (sm:hidden) */}
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

const images = [zeus, zeus2, zeus3, zeusai]

// Trading Icons for Animation Cycle
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
  // Removed unused state: [hoveredFeature]
  const [displayedText, setDisplayedText] = useState("")

  const fullText = "For traders who refuse to stay average."

  // Background Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Typing Animation Logic
  useEffect(() => {
    const typingSpeed = 50; // milliseconds per character
    const startDelay = 1800; // start after the motion.p appears
    setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed)
    }, startDelay)
  }, [])

  // Animated Icons Cycling Logic
  useEffect(() => {
    const iconCycleTimer = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % tradingIcons.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(iconCycleTimer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-plusJakartaSans text-white selection:bg-yellow-500/30">
      {/* Hide CustomCursor on mobile by default, as it interferes with touch */}
      <div className="hidden md:block">
        <CustomCursor hoverActive />
      </div>

      {/* ================= BACKGROUND LAYERS ================= */}

      {/* 1. Image Slider */}
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
              src={images[currentImageIndex].src}
              alt="Background"
              // Increased opacity slightly on small screens for better text contrast
              className="w-full h-full object-cover opacity-50 sm:opacity-40"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Gradient Overlay & Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />

      {/* 3. Tactical Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* ================= HUD / DECORATIVE ELEMENTS (HIDDEN ON MOBILE) ================= */}

      {/* Top Left Corner - Hidden on screens smaller than md */}
      <div className="absolute top-4 left-4 z-20 hidden md:block">
        <div className="w-10 h-10 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
      </div>

      {/* Bottom Right Corner - Hidden on screens smaller than md */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:block text-right">
        <div className="w-10 h-10 border-b-2 border-r-2 border-white/20 rounded-br-lg ml-auto" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 py-6 md:py-10 pt-24 md:pt-20">

        {/* Badge / Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 md:mb-8 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">
            Join the Elite
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="text-center max-w-5xl mx-auto mb-4 md:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            {[
              <span key={0} className="inline-flex items-center justify-center">
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
                    className="ml-2"
                  >
                    {(() => {
                      const IconComponent = tradingIcons[currentIconIndex].icon
                      return <IconComponent className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${tradingIcons[currentIconIndex].color}`} />
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
            className="text-sm sm:text-lg md:text-xl text-gray-300/80 mt-4 font-sanchez"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span style={{ display: 'inline-block', borderRight: '.15em solid #fff' }}>{displayedText}</span>
          </motion.p>
        </div>

        {/* Secondary Title/Description */}
        <motion.p
          className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center max-w-2xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Join the <em>WarRoom</em> — a private, elite mentorship designed to turn inconsistent traders into confident, rule-based performers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://forms.gle/gLG6HF2XfUkoB83MA"
            className="px-6 sm:px-8 py-3 bg-yellow-400 text-black font-bold rounded-full text-center text-sm sm:text-base"
          >
            Join Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#coupons"
            className="px-6 sm:px-8 py-3 bg-transparent border border-white text-white font-bold rounded-full text-center text-sm sm:text-base"
          >
            Claim Discounts
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center w-full mt-8 md:mt-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            // Adjusted padding/gap for mobile
            className="flex items-center gap-3 sm:gap-6 p-2 sm:p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5"
          >
            <HoverableIcon href="https://www.instagram.com/ict_dinesh/" label="INSTAGRAM">
              <Instagram size={18} />
            </HoverableIcon>
            <div className="w-px h-4 bg-white/10" />
            <HoverableIcon href="https://x.com/ict_dinesh/status/1986090000153448690" label="TWITTER / X">
              <FaXTwitter size={18} />
            </HoverableIcon>
            <div className="w-px h-4 bg-white/10" />
            <HoverableIcon href="https://discord.gg/qnpfuETS" label="DISCORD">
              <PiDiscordLogoFill size={20} />
            </HoverableIcon>
            <div className="w-px h-4 bg-white/10" />
            <HoverableIcon href="https://www.youtube.com/@ict_dinesh" label="YOUTUBE">
              <Youtube size={20} />
            </HoverableIcon>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    cPPNShaderMaterial: any
  }
}
