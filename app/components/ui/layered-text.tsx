"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { FaDiscord, FaYoutube } from "react-icons/fa"
import { SiNotion } from "react-icons/si"

interface LayeredTextProps {
  lines?: Array<{
    top: React.ReactNode
    bottom: React.ReactNode
    topLink?: string
    bottomLink?: string
  }>
  fontSize?: string
  fontSizeMd?: string
  lineHeight?: number
  lineHeightMd?: number
  className?: string
}

export function LayeredText({
  lines = [
    {
      top: "\u00A0",
      bottom: (
        <>
          <FaDiscord className="inline-block mr-2" /> Discord
        </>
      ),
      bottomLink: "https://discord.gg/qnpfuETS",
    },
    {
      top: (
        <>
          Discord <FaDiscord className="inline-block mr-2" />
        </>
      ),
      bottom: (
        <>
          YouTube <FaYoutube className="inline-block mr-2" />
        </>
      ),
      topLink: "https://discord.gg/qnpfuETS",
      bottomLink: "https://www.youtube.com/@ict_dinesh",
    },
    {
      top: (
        <>
          <FaYoutube className="inline-block mr-2" /> YouTube
        </>
      ),
      bottom: "📈 Live Trading",
      topLink: "https://www.youtube.com/@ict_dinesh",
      bottomLink: "https://www.youtube.com/@ict_dinesh",
    },
    {
      top: "Live Trading 📈",
      bottom: "Psychology 🧠",
      topLink: "https://discord.gg/qnpfuETS",
      bottomLink: "https://x.com/ict_dinesh/status/1986090000153448690",
    },
    {
      top: "🧠 Psychology",
      bottom: <></>,
      topLink: "https://x.com/ict_dinesh/status/1986090000153448690",
    },
  ],
  fontSize = "72px",
  fontSizeMd = "36px",
  lineHeight = 60,
  lineHeightMd = 35,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const calculateTranslateX = (index: number) => {
    const baseOffset = 35
    const baseOffsetMd = 15
    const centerIndex = Math.floor(lines.length / 2)
    return {
      desktop: (index - centerIndex) * baseOffset,
      mobile: (index - centerIndex) * baseOffsetMd,
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    timelineRef.current = gsap.timeline({ paused: true })

    timelineRef.current.to(paragraphs, {
      y: window.innerWidth >= 768 ? -60 : -35,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    })

    const handleMouseEnter = () => timelineRef.current?.play()
    const handleMouseLeave = () => timelineRef.current?.reverse()

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      timelineRef.current?.kill()
    }
  }, [lines])

  return (
    <div
      ref={containerRef}
      className={`mx-auto py-12 md:py-24 font-sans font-black tracking-[-2px] uppercase text-white antialiased cursor-pointer ${className}`}
      style={{ fontSize, "--md-font-size": fontSizeMd } as React.CSSProperties}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index)

          return (
            <li
              key={index}
              className={`
                overflow-hidden relative
                ${
                  index % 2 === 0
                    ? "[transform:skew(60deg,-30deg)_scaleY(0.66667)]"
                    : "[transform:skew(0deg,-30deg)_scaleY(1.33333)]"
                }
              `}
              style={{
                height: `${lineHeight}px`,
                transform: `translateX(${translateX.desktop}px) skew(${
                  index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"
                }) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                "--md-height": `${lineHeightMd}px`,
                "--md-translateX": `${translateX.mobile}px`,
              } as React.CSSProperties}
            >
              {/** Top line */}
              <p
                className={`leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0 ${
                  line.topLink
                    ? "hover:text-blue-300 transition-colors duration-200"
                    : ""
                }`}
                style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 5}px` }}
                onClick={() => line.topLink && window.open(line.topLink, "_blank")}
              >
                {line.top}
              </p>

              {/** Bottom line */}
              <p
                className={`leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0 ${
                  line.bottomLink
                    ? "hover:text-blue-300 transition-colors duration-200"
                    : ""
                }`}
                style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 5}px` }}
                onClick={() => line.bottomLink && window.open(line.bottomLink, "_blank")}
              >
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
