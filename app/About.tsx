"use client"

import { motion } from "framer-motion"
import { GiChessKing } from "react-icons/gi"
import mentorImage from "./mentor.png"

export default function About() {
    return (
        <section id="about" className="relative w-full py-20 bg-black text-white overflow-hidden font-plusJakartaSans">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm mb-6">
                            <GiChessKing className="text-yellow-400" />
                            <span className="text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">
                                THE VISIONARY
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                            The Trader Behind <span className="text-yellow-500">Warroom</span>?
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-400 font-bitcount">
                            Dinesh
                        </h3>
                    </motion.div>
                    {/* YouTube Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                            <div className="relative pb-[56.25%] h-0">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed?listType=playlist&list=UUoQnDTfZkd-yGVkxQuu7_Kw"
                                    title="Warroom Live Sessions"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* Content Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
                    >
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-500/20 rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-500/20 rounded-br-lg" />

                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            {/* Image Section */}
                            <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={mentorImage.src}
                                    alt="Dinesh - The Visionary"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Text Section */}
                            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
                                <p>
                                    I’m <span className="text-white font-bold">Dinesh</span>, and I build traders, not followers. At <span className="text-white font-bold">Warroom</span>, we strip away the noise and focus on what actually matters: <span className="text-yellow-400">strategy</span>, <span className="text-yellow-400">execution</span>, and <span className="text-yellow-400">mindset</span>.
                                </p>

                                <p>
                                    Through live market sessions, deep-dive breakdowns, and hands-on lessons, you learn to move confidently, make decisive trades, and grow your edge every day.
                                </p>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="font-Sanchez text-white text-center md:text-left">
                                        Here, trading isn’t a gamble — it’s a skill you master, step by step, with <span className="text-yellow-500">clarity</span>, <span className="text-yellow-500">focus</span>, and <span className="text-yellow-500">consistency</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle glow effect */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
