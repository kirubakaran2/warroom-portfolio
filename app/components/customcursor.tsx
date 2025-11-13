"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor({ hoverActive = false }: { hoverActive?: boolean }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Optional global hover tracking
  useEffect(() => {
    if (!hoverActive) return
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target?.closest("a, button, .hover-target")) setIsHovering(true)
    }
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target?.closest("a, button, .hover-target")) setIsHovering(false)
    }
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)
    return () => {
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [hoverActive])

  return (
    <>
      {/* Hide the default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[999]"
        animate={{
          x: cursorPos.x - 10,
          y: cursorPos.y - 10,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 1,
          backgroundColor: isHovering ? "rgba(255, 215, 0, 0.9)" : "rgba(255, 255, 255, 1)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  )
}
