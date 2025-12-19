// 'use client' directive ensures this component runs on the client side
'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * TestimonialsColumn
 * A vertically auto‑scrolling column of testimonial cards.
 *
 * @param props.className   Optional additional CSS classes for the container.
 * @param props.testimonials Array of testimonial objects with {text, image, name, role}.
 * @param props.duration    Duration of one full scroll loop in seconds (default 10).
 */
export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: {
        text: string;
        image: string;
        name: string;
        role: string;
    }[];
    duration?: number;
}) => {
    const { className = '', testimonials, duration = 10 } = props;

    return (
        <div className={className}>
            <motion.div
                animate={{
                    translateY: '-50%',
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                className="flex flex-col gap-6 pb-6 bg-background"
            >
                {/* Duplicate the list so the scroll appears seamless */}
                {[...new Array(2).fill(0)].map((_, index) => (
                    <React.Fragment key={index}>
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border shadow-lg shadow-primary/10 max-w-sm w-full bg-white dark:bg-gray-900"
                            >
                                <p className="mb-4 text-gray-800 dark:text-gray-200">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            {t.name}
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {t.role}
                                        </span>
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
