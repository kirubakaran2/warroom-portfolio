"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

import { GridVignetteBackground } from '@/app/components/ui/grid-vignette-background'
import emoji1 from './genmoji7.jpeg'
import emoji2 from './genmoji5.jpeg'
import emoji3 from './genmoji3.jpeg'
import emoji4 from './genmoji00.jpeg'
import emoji5 from './genmoji0.jpeg'
import emoji6 from './genmji8.jpg'
import emoji7 from './genmji6.jpg'
import emoji8 from './genemoji1.jpeg'
import emoji9 from './genmoji3.jpeg'

const testimonials = [
  {
    text: "Proud to be part of War Room. Mentor Dinesh transformed my trading mindset through clear structure, discipline and patience. His constant support, precise outlooks and practical guidance built confidence, consistency, and professional market understanding quickly.",
    image: emoji1,
    name: "Sudhagar",
    role: "War Room Student",
  },
  {
    text: "Excellent ICT mentorship with simple explanations of market structure, liquidity and institutional concepts. Real-time chart examples and proper risk management guidance helped me trade confidently, avoid mistakes, and follow disciplined entries with clear confirmations.",
    image: emoji2,
    name: "Saswath",
    role: "War Room Student",
  },
  {
    text: "After years of losses and failed mentorships, War Room finally changed everything. I can now read price clearly, trade without fear, follow rules properly, manage risk confidently, and finally feel consistent and profitable with discipline.",
    image: emoji3,
    name: "Michael",
    role: "War Room Student",
  },
  {
    text: "Received my first prop firm payout with Dinesh's guidance. War Room replaced my FOMO trading with confirmation-based entries, emotional control and proper risk management. His beginner-friendly teaching style improved confidence, clarity and consistent execution greatly.",
    image: emoji4,
    name: "Karthik",
    role: "War Room Student",
  },
  {
    text: "After blowing more than fifteen accounts, I joined War Room mentorship and passed my prop challenge within ten days. Clear daily setups, structured plans and disciplined execution helped me achieve payout and regain complete trading confidence.",
    image: emoji5,
    name: "Sudhagar",
    role: "War Room Student",
  },
  {
    text: "Cleared Phase Two for the first time after joining War Room. Dinesh's positive words, structured guidance and confidence building approach removed fear, reduced frustration, improved execution, and helped me trade calmly with discipline.",
    image: emoji6,
    name: "Rohith",
    role: "War Room Student",
  },
  {
    text: "War Room mentors guide students properly through structured learning, practical execution and disciplined chart reading. Real growth happens when you apply lessons alone, observe price behavior clearly, build personal edge, and trade confidently.",
    image: emoji7,
    name: "Sheninsha",
    role: "War Room Student",
  },
  {
    text: "More than a course, War Room is life-changing mentorship. Daily continuation setups, constant monitoring, personal guidance, weekly reviews and supportive community helped students achieve funded certificates, payouts, confidence, and consistent disciplined trading performance.",
    image: emoji8,
    name: "Hariharan",
    role: "War Room Student",
  },
  {
    text: "War Room mentorship gave me complete clarity in trading. Structured outlooks, student discussions, mentor guidance and disciplined execution improved my mindset, confidence, risk management and overall consistency. Joining was the best decision.",
    image: emoji9,
    name: "Pavan",
    role: "War Room Student",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black relative">
      <GridVignetteBackground />
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 py-2 px-6 rounded-full font-medium text-sm tracking-wider uppercase shadow-lg backdrop-blur-sm">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-5 text-center
bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            What our users say
          </h2>

          <p className="text-center mt-5 opacity-75 font-medium text-white/80">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={45} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
