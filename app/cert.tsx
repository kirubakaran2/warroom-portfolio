"use client";

import { useState } from 'react';
import { cn } from './lib/utils'
export default function CertificateGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const certificates = [
    '/cert0.jpeg',
    '/cert1.jpeg',
    '/cert2.jpeg',
    '/cert3.jpg',
    '/cert7.jpeg',
    '/cert4.jpg',
    '/cert5.png',
    '/cert6.jpeg',
    '/cert8.png',
    '/cert10.png',
    '/cert11.jpg',
    '/cert12.png',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex h-[10vh] items-center justify-center mb-10">
                <div aria-hidden className={cn(
                  'absolute -top-1/2 left-1/2 h-[120vmin] w-[140vmin] -translate-x-1/2 rounded-full',
                  'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.08),transparent_55%)] blur-[40px]'
                )}/>
                <h1 className="text-center text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Students Achievements
                </h1>
              </div>

        {/* Masonry Grid for Different Sizes */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="break-inside-avoid"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group">
                {/* Card */}
                <div
                  className={`
                    relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm
                    border border-slate-700/50
                    transition-all duration-500 ease-out
                    ${hoveredIndex === index 
                      ? 'scale-[1.02] shadow-2xl shadow-blue-500/20 -translate-y-1 border-blue-500/50' 
                      : 'scale-100 shadow-lg'
                    }
                  `}
                >
                  {/* Image Container - Auto adjusts to image size */}
                  <div className="relative w-full">
                    <img
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-700"
                      style={{ display: 'block' }}
                    />

                    {/* Overlay on hover */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-t from-blue-600/30 via-purple-600/10 to-transparent
                        transition-opacity duration-500
                        ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                      `}
                    ></div>

                    {/* Shine effect */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                        transition-transform duration-1000
                        ${hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'}
                      `}
                    ></div>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`
                    absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-lg
                    transition-opacity duration-500
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
