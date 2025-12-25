"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { StaticImageData } from "next/image";

interface Testimonial {
  text: string;
  image: string | StaticImageData;
  name: string;
  role: string;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: "-50%",
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, duration]);

  return (
    <div className={className}>
      <motion.div
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            y: "-50%",
            transition: {
              duration,
              ease: "linear",
              repeat: Infinity,
            },
          })
        }
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, loop) => (
          <React.Fragment key={loop}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-black/40 backdrop-blur"
              >
                <div className="text-white/90 text-sm leading-relaxed">{text}</div>

                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={typeof image === "string" ? image : image.src}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-white">{name}</div>
                    <div className="text-white/60 text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
