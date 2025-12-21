"use client"

import React, { useEffect, useState } from "react"
import Ticket from "@/app/ticket"

export const GlassCard = () => {
  const corners = ["tl", "tr", "bl", "br"] as const
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generateParticles = Array.from({ length: 20 }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 0.5,
      duration: 5 + Math.random() * 10,
    }))
    setParticles(generateParticles)
  }, [])

  const glowX = mousePosition.x * 100
  const glowY = mousePosition.y * 100

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Dynamic gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-transparent to-pink-500/20 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Mouse-following glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 transition-all duration-300 pointer-events-none"
        style={{
          left: `${glowX}%`,
          top: `${glowY}%`,
          background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.3) 50%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Main glass container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/20 rounded-3xl shadow-2xl shadow-blue-900/20 flex flex-col items-center justify-center gap-6 p-8 md:p-12 overflow-hidden group">

          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 animate-shimmer" />
          </div>

          {/* Corner decorations */}
          {corners.map((corner) => {
            const [vertical, horizontal] = corner.split("")
            const position = `${vertical === "t" ? "top-0" : "bottom-0"} ${horizontal === "l" ? "left-0" : "right-0"}`

            return (
              <React.Fragment key={corner}>
                {/* Animated corner lines */}
                <div className={`absolute ${position} w-16 h-[1px] bg-gradient-to-${horizontal === "l" ? "right" : "left"} from-transparent via-white/80 to-transparent group-hover:via-cyan-400 transition-all duration-300`} />
                <div className={`absolute ${position} w-[1px] h-16 bg-gradient-to-${vertical === "t" ? "bottom" : "top"} from-transparent via-white/80 to-transparent group-hover:via-cyan-400 transition-all duration-300`} />

                {/* Corner accent with hover effect */}
                <div className={`absolute ${position} w-3 h-3 bg-gradient-to-br from-white/50 to-transparent rounded-full transform ${corner === "tl" ? "-translate-x-1 -translate-y-1" : corner === "tr" ? "translate-x-1 -translate-y-1" : corner === "bl" ? "-translate-x-1 translate-y-1" : "translate-x-1 translate-y-1"} group-hover:scale-125 group-hover:bg-cyan-400/80 transition-all duration-300`} />
              </React.Fragment>
            )
          })}

          {/* Inner glow layers */}
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>
          <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>

          {/* Floating particles inside */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i * 10)}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-20 w-full">
            <Ticket />
          </div>

          {/* Animated bottom line */}
          <div className="w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
