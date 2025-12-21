"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Feature {
  step: string
  title: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  title?: string
  subtitle?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  title,
  subtitle,
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % features.length)
    setProgress(0)
  }, [features.length])

  const prev = () => {
    setActive((prev) => (prev - 1 + features.length) % features.length)
    setProgress(0)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next()
          return 0
        }
        return p + 100 / (autoPlayInterval / 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [next, autoPlayInterval])

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-3 text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Horizontal Steps */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {features.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActive(index)
              setProgress(0)
            }}
            className={`relative min-w-[200px] px-5 py-4 rounded-xl border transition-all
              ${
                index === active
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background hover:bg-muted"
              }`}
          >
            <span className="font-semibold text-sm">{item.step}</span>

            {index === active && (
              <motion.div
                className="absolute left-0 bottom-0 h-1 bg-primary-foreground rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={features[active].image}
                alt={features[active].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Text */}
            <div className="space-y-5">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold"
              >
                {features[active].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                {features[active].content}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
