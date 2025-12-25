"use client"

import { Navbar } from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { IoCompass } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import mentorImage from "../mentor2.png";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Mission & Vision Section */}
           

            {/* Meet the Founder Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm mb-6">
                  <span className="text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">
                    MEET THE FOUNDER
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                  The Man Behind <span className="text-yellow-500">Warroom</span>
                </h1>
              </div>

              <div className="relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                  {/* Image Section */}
                  <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl grayscale">
                    <img
                      src={mentorImage.src}
                      alt="Dinesh - Trader, Educator, and Founder of Warroom"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Story Section */}
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
                    <p>
                      I'm <span className="text-white font-bold">Dinesh</span> — Trader, Educator, and Founder of Warroom.
                    </p>

                    <p>
                      After years of studying price action, psychology, and futures markets, I created a system that focuses on simplicity, clarity, and consistency.
                    </p>

                    <p>
                      Now I help traders avoid the mistakes I made and grow faster with proper guidance.
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="font-Sanchez text-white">
                        At Warroom, we strip away the noise and focus on what actually matters: <span className="text-yellow-400">strategy</span>, <span className="text-yellow-400">execution</span>, and <span className="text-yellow-400">mindset</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
             <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm mb-6">
                  <IoCompass className="text-yellow-400 text-lg" />
                  <span className="text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">
                    OUR MISSION
                  </span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  To build disciplined, consistent traders who understand the market's structure, manage risk with confidence, and execute with clarity.
                </p>
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm mb-6">
                  <FiTarget className="text-yellow-400 text-lg" />
                  <span className="text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">
                    OUR VISION
                  </span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  A world where traders don't gamble, they follow a structured plan, trade smart, and build real financial freedom.
                </p>
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            </div>

            {/* Stats Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Statistic 1 */}
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 backdrop-blur-sm text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 font-bitcount">
                    50+
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-bold tracking-widest uppercase">
                    Traders Mentored
                  </div>
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Statistic 2 */}
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 backdrop-blur-sm text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 font-bitcount">
                    5+
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-bold tracking-widest uppercase">
                    Years Market Experience
                  </div>
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Statistic 3 */}
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 backdrop-blur-sm text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 font-bitcount">
                    NQ
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-bold tracking-widest uppercase">
                    Focused Strategy
                  </div>
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
