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
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji1,
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji2,
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji3,
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji4,
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji5,
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji6,
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji7,
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji8,
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
    image: emoji9,
    name: "Hassan Ali",
    role: "E-commerce Manager",
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
          <div className="flex justify-center text-white/90 mt-20">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
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
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
