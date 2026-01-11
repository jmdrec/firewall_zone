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
    description: 'Master networking with real Cisco routers, switches, and firewalls in our state-of-the-art labs.',
    bgGradient: 'from-blue-900 to-slate-900',
    bgImage: '/gallery/60756768255.png',
    icon: FaServer,
    highlight: '100+ Devices'
  },
  {
    id: 2,
    title: 'Expert Faculty',
    description: 'Learn from Cisco Certified Internetwork Experts (CCIE) with 25+ years of industry experience.',
    bgGradient: 'from-slate-900 to-zinc-900',
    bgImage: '/gallery/networking-software-1.png',
    icon: FaGraduationCap,
    highlight: 'CCIE Trainers'
  },
  {
    id: 3,
    title: 'Career Transformation',
    description: 'Join 5000+ success stories. We provide 100% placement assistance and interview preparation.',
    bgGradient: 'from-zinc-900 to-neutral-900',
    bgImage: '/gallery/Firewall-Institute-OF-IT-Students-1.png',
    icon: FaBriefcase,
    highlight: '95% Placement'
  },
  {
    id: 4,
    title: 'Global Certifications',
    description: 'Get certified in CCNA, CCNP, Palo Alto, Fortinet, and Azure to boost your career globally.',
    bgGradient: 'from-neutral-900 to-stone-900',
    bgImage: '/gallery/Empowering-Future-Network-Professionals-1.png',
    icon: FaCertificate,
    highlight: 'Cisco Official'
  },
  {
    id: 5,
    title: 'Flexible Learning',
    description: 'Choose between comprehensive classroom training or interactive online sessions that fit your schedule.',
    bgGradient: 'from-stone-900 to-gray-900',
    bgImage: '/gallery/Firewall-Zone-Institute-of-IT-Networking-Courses-Hyderabad.png',
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
      {/* Main Hero Slider */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={slides[currentSlide].bgImage} 
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay - Reduced to let image dominate */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Background Gradient & Pattern (minimal to let image dominate) */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} opacity-10`}>
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Content (Text) - Spans 7 cols */}
                  <div className="lg:col-span-7 text-white space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-4 drop-shadow-lg">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed drop-shadow-md">
                        {slides[currentSlide].description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        href="/courses"
                        className="px-6 py-3 bg-primary/95 text-white rounded-full font-semibold text-base hover:bg-primary/90 transition-all flex items-center gap-2 group"
                      >
                        Explore Courses
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-full font-semibold text-base transition-all"
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right Content (Feature Box) - Spans 5 cols */}
                  <div className="lg:col-span-5 hidden lg:flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="relative"
                    >
                      {/* Subdued Glass Card (less visually dominant) */}
                      <div className="w-72 bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow relative overflow-hidden transition-colors duration-500">
                        
                        {/* Subtle Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform duration-500">
                            <CurrentIcon className="text-3xl text-white" />
                          </div>
                          <div className="text-2xl font-semibold text-white/90 mb-1">{slides[currentSlide].highlight}</div>
                          <div className="text-gray-400 uppercase tracking-wider text-xs font-medium">Key Highlight</div>
                        </div>
                      </div>

                      {/* Floating Elements (toned down) */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-md" />
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-lg" />
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 left-0 w-full z-20">
          <div className="container mx-auto px-4 flex justify-between items-end">
            {/* Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section (Replaces old stats area) */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We help you become a <span className="text-primary">Skilled IT Professional</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
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
