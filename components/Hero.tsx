'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaGraduationCap, FaNetworkWired, FaShieldAlt, FaBriefcase, FaServer, FaCertificate } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Hands-on Training Labs',
    bgGradient: 'from-blue-900 to-slate-900',
    bgImage: '/gallery/Slide 1.jpg',
    icon: FaServer,
    highlight: '100+ Devices'
  },
  {
    id: 2,
    title: 'Expert Faculty',
    bgGradient: 'from-slate-900 to-zinc-900',
    bgImage: '/gallery/Slide 31.jpg',
    icon: FaGraduationCap,
    highlight: 'CCIE Trainers'
  },
  {
    id: 3,
    title: 'Career Transformation',
    bgGradient: 'from-zinc-900 to-neutral-900',
    bgImage: '/gallery/Slide 2.jpg',
    icon: FaBriefcase,
    highlight: '95% Placement'
  },
  {
    id: 4,
    title: 'Global Certifications',
    bgGradient: 'from-neutral-900 to-stone-900',
    bgImage: '/gallery/Slide 5.jpg',
    icon: FaCertificate,
    highlight: 'Cisco Official'
  },
  {
    id: 5,
    title: 'Flexible Learning',
    bgGradient: 'from-stone-900 to-gray-900',
    bgImage: '/gallery/Slide 4.jpg',
    icon: FaNetworkWired,
    highlight: 'Hybrid Learning'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <>
      {/* Main Hero Slider - Responsive Heights */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] overflow-hidden bg-black -mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image - Optimized for All Screen Sizes */}
            <div className="absolute inset-0 bg-gray-900">
              <Image 
                src={slides[currentSlide].bgImage} 
                alt={slides[currentSlide].title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Background Gradient & Pattern */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} opacity-10`}>
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
            </div>
            
            {/* Content Container - Mobile Optimized Positioning */}
            <div className="relative z-10 h-full flex items-end pb-16 sm:pb-20 lg:pb-24">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                  
                  {/* Left Content (Text) - Mobile Responsive */}
                  <div className="lg:col-span-7 text-white space-y-4 sm:space-y-6 lg:space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {/* Responsive Text Sizes */}
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight sm:leading-snug mb-3 sm:mb-4 drop-shadow-lg">
                        {slides[currentSlide].title}
                      </h2>
                    </motion.div>

                    {/* Buttons - Mobile Optimized */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="flex flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4"
                    >
                      <Link
                        href="/courses"
                        className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-primary/95 text-white rounded-full font-semibold text-xs sm:text-sm lg:text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap"
                      >
                        Explore Courses
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-xs sm:text-sm lg:text-base hover:bg-white/20 transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right Content (Feature Box) - Hidden on Mobile/Tablet */}
                  <div className="lg:col-span-5 hidden lg:flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="relative"
                    >
                      <div className="w-72 bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow relative overflow-hidden transition-colors duration-500">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform duration-500">
                            <CurrentIcon className="text-3xl text-white" />
                          </div>
                          <div className="text-2xl font-semibold text-white/90 mb-1">{slides[currentSlide].highlight}</div>
                          <div className="text-gray-400 uppercase tracking-wider text-xs font-medium">Key Highlight</div>
                        </div>
                      </div>

                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-md" />
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-lg" />
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Mobile Responsive */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-0 w-full z-20">
          <div className="container mx-auto px-4 flex justify-between items-end">
            {/* Dots - Mobile Responsive */}
            <div className="flex gap-2 sm:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-6 sm:w-8 bg-primary' : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows - Mobile Responsive */}
            <div className="flex gap-2 sm:gap-3 lg:gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-sm sm:text-base" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-sm sm:text-base" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section - Mobile Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            We help you become a <span className="text-primary">Skilled IT Professional</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed"
          >
            Firewall Zone Institute of IT is a premier training center dedicated to transforming students into
            expert network engineers and cybersecurity professionals. With over 25 years of excellence,
            we bridge the gap between academic learning and industry requirements.
          </motion.p>
        </div>
      </section>
    </>
  );
}
