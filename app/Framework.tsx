"use client";

import DisplayCards from "./components/ui/display-cards";
import { LayeredText } from "./components/ui/layered-text";
import { GridVignetteBackground } from "./components/ui/grid-vignette-background";
import { Sparkles, TrendingUp, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedTextCycle from "./components/ui/animatedtext";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Star className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function DisplayCardsDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const assetsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(assetsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .fromTo(benefitsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .fromTo(featuresRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
  }, []);

  return (
    <div ref={containerRef} className=" font-sanchez relative min-h-screen bg-black text-white font-space py-20 px-6 flex flex-col items-center gap-16 overflow-hidden">
      <GridVignetteBackground />

      <div ref={benefitsRef} className="text-center max-w-3xl mx-auto w-full">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          Why Choose <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Warroom!</span>
        </h3>
        <p className="text-lg md:text-xl text-gray-300">
          Because success in trading takes more than just charts. Warroom gives you mentorship, data, and discipline — all under one roof.
        </p>
      </div>

      <div className="flex w-full justify-center py-12 px-4">
        <div className="w-full max-w-3xl">
          <DisplayCards cards={defaultCards} />
        </div>
      </div>

      <section ref={textRef} className="text-center max-w-2xl font-space w-full px-4">
        <h1 className="text-4xl md:text-5xl font-light">
          Take{" "}
          <AnimatedTextCycle
            words={["trading", "mindset", "strategy", "execution", "discipline", "focus", "growth", "performance"]}
            interval={3000}
            className="text-foreground font-space font-semibold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
          />{" "}
          to the next level
        </h1>
      </section>

      <div ref={assetsRef} className="w-full max-w-4xl px-4">
        <LayeredText />
      </div>
    </div>
  );
}
