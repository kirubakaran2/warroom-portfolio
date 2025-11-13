"use client"

import { cn } from "../../lib/utils"
import type React from "react"

interface GridVignetteBackgroundProps {
  size?: number
  x?: number
  y?: number
  horizontalVignetteSize?: number
  verticalVignetteSize?: number
  intensity?: number
}

export function GridVignetteBackground({
  className,
  size = 48,
  x = 50,
  y = 50,
  horizontalVignetteSize = 100,
  verticalVignetteSize = 100,
  intensity = 90,
}: React.ComponentProps<"div"> & GridVignetteBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0", // test with z-0
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(240, 235, 235, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: `radial-gradient(ellipse ${horizontalVignetteSize}% ${verticalVignetteSize}% at ${x}% ${y}%, white 70%, transparent 100%)`,
        opacity: 0.9,
      }}
    />
  )
}

