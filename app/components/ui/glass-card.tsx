"use client"

import React from "react"
import Ticket from "@/app/ticket"
export const GlassCard = () => {
  const corners = ["tl", "tr", "bl", "br"] as const
  const gap = "inset-10" // 🔹 Controls how far inside the box is (change this value)
  // Try inset-5, inset-10, inset-16 — smaller number = closer to edges

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Outer wrapper for centering */}
      <div className={`absolute ${gap} border border-white/10 flex flex-col items-center justify-center gap-4`}>
        {/* Corner Highlights */}
        {corners.map(corner => {
          const [vertical, horizontal] = corner.split("")
          const position = `${vertical === "t" ? "top-0" : "bottom-0"} ${horizontal === "l" ? "left-0" : "right-0"}`

          return (
            <React.Fragment key={corner}>
              <div className={`absolute ${position} w-8 h-[1px] bg-white/30`} />
              <div className={`absolute ${position} w-[1px] h-8 bg-white/30`} />
            </React.Fragment>
          )
        })}
        <Ticket />
      </div>
    </div>
  )
}
