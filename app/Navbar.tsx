"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import logo from "../public/warroom-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const navItems = ["About", "Coupons", "Testimonials", "FAQ"]

  const getNavHref = (item: string) => {
    if (item === "About") return "/about-us"
    if (pathname === "/") {
      return `#${item.toLowerCase()}`
    } else {
      return `/#${item.toLowerCase()}`
    }
  }

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 22 },
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 md:py-6 px-4 overflow-hidden">
      <motion.div
        className="flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-3 
bg-black/70 backdrop-blur-xl border border-white/10 rounded-full relative z-10
shadow-[0_10px_30px_-12px_rgba(255,255,255,0.12)]"

        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative flex items-center justify-center">
              <motion.img
                src={logo.src}
                alt="Warroom Logo"
                className="w-10 h-10 rounded-full border border-white/10 object-cover"
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full -z-10" />
            </div>
          <motion.span
            className="text-white font-bold tracking-tight text-lg font-plusJakartaSans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            WARROOM
          </motion.span>
        </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={getNavHref(item)}
              variants={itemVariants}
              className="relative text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide py-2"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 origin-left rounded-full"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <a
            href="https://forms.gle/gLG6HF2XfUkoB83MA"
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)] transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">JOIN NOW</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors active:scale-95"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Panel */}
            <motion.aside
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-2xl border-l border-white/10 text-white z-50 p-6 shadow-2xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img
                    src={logo.src}
                    alt="Warroom Logo"
                    className="w-8 h-8 rounded-full border border-white/10"
                  />
                  <a href="/">
                    <span className="font-bold tracking-tight">WARROOM</span>
                  </a>
                </div>
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </motion.button>
              </div>

              {/* Mobile Nav Items */}
              <motion.nav
                className="flex flex-col space-y-6 flex-1 justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["Home", ...navItems].map((item, i) => (
                  <motion.a
                    key={item}
                    href={
                      item === "Home" ? "/" :
                      getNavHref(item)
                    }
                    variants={itemVariants}
                    className="text-3xl font-bold text-white/90 hover:text-yellow-400 transition-colors flex items-center gap-4 group justify-start w-full"
                    onClick={toggleMenu}
                  >
                    <span className="text-sm font-mono text-white/30 group-hover:text-yellow-500/50 transition-colors">0{i + 1}</span>
                    {item}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Mobile CTA */}
              <motion.div
                className="mt-auto pt-8 border-t border-white/10"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <a
                  href="https://discord.com/invite/qnpfuETS"
                  className="block text-center py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg hover:shadow-orange-500/20 transition-all active:scale-95"
                  onClick={toggleMenu}
                >
                  JOIN NOW
                </a>


              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Navbar }
