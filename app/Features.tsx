// "use client"

// import { motion } from "framer-motion"
// import { IconUsers, IconVideo, IconRadio, IconUserCheck, IconCalendar, IconMessage, IconTrophy, IconTarget, IconActivity, IconHeart } from "@tabler/icons-react"

// // ----- Data -----
// const stats = [
//     { label: "Traders", value: "50+", icon: <IconUsers className="w-6 h-6 text-yellow-400" /> },
//     { label: "Hours of Content", value: "200+", icon: <IconVideo className="w-6 h-6 text-blue-400" /> },
//     { label: "Weekly Streams", value: "9", icon: <IconRadio className="w-6 h-6 text-red-400" /> },
//     { label: "Mentors", value: "2", icon: <IconUserCheck className="w-6 h-6 text-green-400" /> },
// ]

// const benefits = [
//     {
//         title: "Live Market Sessions",
//         description: "Live London & New York session streams (FOREX & US Futures – Tue‑Fri) with real‑time market analysis and doubt clearing.",
//         icon: <IconActivity className="w-8 h-8 text-yellow-400" />,
//         color: "from-yellow-400/20 to-yellow-600/5",
//     },
//     {
//         title: "Weekend Doubt Sessions",
//         description: "Special sessions for working professionals to clarify concepts and stay consistent. No question left unanswered.",
//         icon: <IconCalendar className="w-8 h-8 text-blue-400" />,
//         color: "from-blue-400/20 to-blue-600/5",
//     },
//     {
//         title: "Direct Mentor Guidance",
//         description: "Ask any doubt anytime – we explain it simply and clearly until you get it. Your growth is our priority.",
//         icon: <IconMessage className="w-8 h-8 text-green-400" />,
//         color: "from-green-400/20 to-green-600/5",
//     },
// ]

// const differentiators = [
//     {
//         title: "Top Performer Reward",
//         subtitle: "$10,000 Funded Account",
//         description: "We value consistency. Show up daily, stay disciplined, and we notice. Every 2 weeks we sponsor a $10K funded account for the top performer.",
//         icon: <IconTrophy className="w-10 h-10 text-yellow-400" />,
//         highlight: true,
//     },
//     {
//         title: "Funded Account Guidance",
//         subtitle: "Crack The Challenge",
//         description: "We teach the correct approach to clearing funded challenges with live, real‑time guidance. Stick to the process – we’ll guide you through it.",
//         icon: <IconTarget className="w-10 h-10 text-red-400" />,
//         highlight: false,
//     },
//     {
//         title: "Holistic Growth",
//         subtitle: "Health & Mindset",
//         description: "We also focus on fitness, mindset, and personal development. Members who stay disciplined in health and learning are recognized and encouraged.",
//         icon: <IconHeart className="w-10 h-10 text-pink-400" />,
//         highlight: false,
//     },
// ]

// // ----- Animation Variants -----
// const container = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//         opacity: 1,
//         transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
//     }),
// }

// const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
// }

// export default function Features() {
//     return (
//         <section id="features" className="relative w-full overflow-hidden bg-black text-white font-plusJakartaSans py-24">
//             {/* Background grid */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

//             <div className="container mx-auto px-4 sm:px-6 relative z-10">
//                 {/* ---- Stats ---- */}
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//                 >
//                     {stats.map((s, i) => (
//                         <motion.div
//                             key={i}
//                             variants={item}
//                             className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
//                         >
//                             <div className="flex justify-center mb-3">{s.icon}</div>
//                             <div className="text-4xl font-bold text-yellow-400 mb-1">{s.value}</div>
//                             <div className="text-sm text-gray-400 uppercase tracking-wider">{s.label}</div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* ---- Header ---- */}
//                 <motion.div
//                     id="benefits"
//                     variants={container}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="text-center max-w-3xl mx-auto mb-16"
//                 >
//                     <motion.h2
//                         variants={item}
//                         className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"
//                     >
//                         Benefits That Keep You <b>CONSISTENT⚡️</b>
//                     </motion.h2>
//                     <motion.p
//                         variants={item}
//                         className="text-xl text-gray-300"
//                     >
//                         We’ve got you covered – sit back, relax, and let the system work for you.
//                     </motion.p>
//                 </motion.div>

//                 {/* ---- Benefits Grid ---- */}
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24"
//                 >
//                     {benefits.map((b, i) => (
//                         <motion.div
//                             key={i}
//                             variants={item}
//                             className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:-translate-y-2 transition-all duration-300"
//                         >
//                             <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                             <div className="relative z-10 flex flex-col items-center text-center">
//                                 <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10">
//                                     {b.icon}
//                                 </div>
//                                 <h3 className="text-2xl font-bold mb-3 text-white">{b.title}</h3>
//                                 <p className="text-gray-300 leading-relaxed">{b.description}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* ---- Differentiators ---- */}
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="mb-20"
//                 >
//                     {/* <motion.div
//                         variants={item}
//                         className="text-center mb-12"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                             What Makes <span className="text-yellow-400">Warroom</span> Different?
//                         </h2>
//                         <p className="text-gray-400 max-w-2xl mx-auto">
//                             Live mentorship, real‑time market analysis, weekly challenges, and a holistic approach to trading, health, and mindset.
//                         </p>
//                     </motion.div> */}

//                     {/* <div className="grid lg:grid-cols-3 gap-8">
//                         {differentiators.map((d, i) => (
//                             <motion.div
//                                 key={i}
//                                 variants={item}
//                                 className={`relative p-8 rounded-2xl border ${d.highlight ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-white/5 border-white/10'} backdrop-blur-sm hover:shadow-xl transition-shadow`}
//                             >
//                                 <div className="flex items-start gap-6">
//                                     <div className={`p-3 rounded-xl ${d.highlight ? 'bg-yellow-500/20' : 'bg-white/10'}`}>
//                                         {d.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-2xl font-bold mb-2">{d.title}</h3>
//                                         <div className={`text-sm font-mono mb-2 ${d.highlight ? 'text-yellow-400' : 'text-gray-400'}`}>{d.subtitle}</div>
//                                         <p className="text-gray-300 text-sm leading-relaxed">{d.description}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div> */}
//                 </motion.div>

//                 {/* ---- Call to Action ---- */}
//                 <motion.div
//                     variants={item}
//                     className="text-center mt-12"
//                 >
//                     <a
//                         href="https://discord.com/invite/qnpfuETS"
//                         className="inline-block px-10 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
//                     >
//                         Join Warroom Today
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }
