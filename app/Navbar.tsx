"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../public/warroom-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const navItems = ["Features", "Resources", "Pricing", "Testimonials", "FAQ"]

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-3 px-4 ">
      <motion.div
        className="flex items-center justify-between w-full max-w-2xl px-3 py-3 bg-black/50 rounded-full relative z-10"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer select-none"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.img
            src={logo.src}
            alt="Warroom Logo"
            className="w-9 h-9 rounded-full"
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.span
            className="text-white font-semibold tracking-tight text-lg "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Warroom
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              variants={itemVariants}
              className="relative text-sm text-white transition font-medium"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 origin-left"
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
            href="#"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg bg-white/15 text-white"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Panel */}
            <motion.aside
              className="fixed right-0 top-0 bottom-0 w-80 bg-neutral-900 text-white z-50 p-8 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-lg font-semibold">Menu</span>
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10"
                >
                  <X className="h-5 w-5 text-white" />
                </motion.button>
              </div>

              <motion.nav
                className="flex flex-col space-y-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["Home", ...navItems].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    variants={itemVariants}
                    className="text-lg text-white/90 hover:text-white transition"
                    onClick={toggleMenu}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.div
                className="mt-10"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <a
                  href="#"
                  className="block text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  onClick={toggleMenu}
                >
                  Get Started
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
