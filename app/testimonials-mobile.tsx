"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import type { StaticImageData } from "next/image";

interface Testimonial {
  text: string;
  image: string | StaticImageData;
  name: string;
  role: string;
}

const TestimonialsMobile = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slider = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Calculate visible slides based on screen width
  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width < 400) return 1;
    if (width < 640) return 1.1;
    return 1.2;
  };

  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;

  const goToSlide = useCallback((index: number) => {
    const newIndex = Math.max(0, Math.min(index, testimonials.length - 1));
    setCurrentIndex(newIndex);
    if (slider.current) {
      slider.current.scrollTo({
        left: (slider.current.scrollWidth / testimonials.length) * newIndex,
        behavior: 'smooth'
      });
    }
  }, [testimonials.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isDragging && currentIndex < testimonials.length - 1) {
        nextSlide();
      } else if (currentIndex === testimonials.length - 1) {
        goToSlide(0);
      }
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isDragging, testimonials.length, nextSlide, goToSlide]);

  // Touch/handle drag functionality
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].pageX);
    } else {
      setStartX(e.pageX);
    }
    if (slider.current) {
      setScrollLeft(slider.current.scrollLeft);
    }
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    let x;
    if ('touches' in e) {
      x = e.touches[0].pageX;
    } else {
      e.preventDefault();
      x = e.pageX;
    }
    
    const walk = (x - startX) * 2;
    if (slider.current) {
      slider.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (slider.current) {
      const slideWidth = slider.current.scrollWidth / testimonials.length;
      const newIndex = Math.round(slider.current.scrollLeft / slideWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (slider.current && !isDragging) {
      const slideWidth = slider.current.scrollWidth / testimonials.length;
      const newIndex = Math.round(slider.current.scrollLeft / slideWidth);
      setCurrentIndex(newIndex);
    }
  }, [isDragging, testimonials.length]);

  useEffect(() => {
    const sliderRef = slider.current;
    if (sliderRef) {
      sliderRef.addEventListener('scroll', handleScroll);
      return () => sliderRef.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Handle responsive slide width
  useEffect(() => {
    const handleResize = () => {
      goToSlide(currentIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, goToSlide]);

  return (
    <div className="relative md:hidden mt-12 pb-20 px-4">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full bg-gradient-to-r from-amber-500/90 to-orange-500/90 border border-amber-400/30 shadow-lg pointer-events-auto ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          disabled={currentIndex === testimonials.length - 1}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full bg-gradient-to-r from-amber-500/90 to-orange-500/90 border border-amber-400/30 shadow-lg pointer-events-auto ${
            currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          <ChevronRight className="text-white w-5 h-5" />
        </motion.button>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <div 
          ref={slider}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ 
                  opacity: i === currentIndex ? 1 : 0.8,
                  scale: i === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 snap-center"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="p-6 mx-1 rounded-3xl bg-gradient-to-br from-black/70 to-gray-900/70 border border-white/10 backdrop-blur-xl shadow-2xl">
                  {/* Quote Icon */}
                  
                  
                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium pt-2">
                    {t.text}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-sm opacity-50"></div>
                      <img 
                        src={typeof t.image === "string" ? t.image : t.image.src} 
                        alt={t.name}
                        className="h-12 w-12 rounded-full relative z-10 border-2 border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-amber-300/80 text-xs font-medium bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-3 py-1 rounded-full inline-block">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="focus:outline-none"
          >
            <motion.div
              animate={{
                scale: i === currentIndex ? 1.2 : 1,
                backgroundColor: i === currentIndex ? "rgba(251, 191, 36, 0.9)" : "rgba(255, 255, 255, 0.2)"
              }}
              transition={{ duration: 0.2 }}
              className="w-2 h-2 rounded-full"
            />
          </button>
        ))}
      </div>

      {/* Current Slide Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-4 text-sm text-white/60 font-medium"
      >
        {currentIndex + 1} / {testimonials.length}
      </motion.div>

      {/* Gradient overlays for better UX */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default TestimonialsMobile;
