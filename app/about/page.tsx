'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaAward, FaUsers, FaLaptopCode, FaChalkboardTeacher, FaCheckCircle, FaRocket, FaChevronLeft, FaChevronRight, FaGraduationCap, FaNetworkWired, FaCertificate } from 'react-icons/fa';
import { instituteInfo, highlights } from '@/lib/data/institute';
import EnquiryForm from '@/components/EnquiryForm';

const slides = [
  {
    id: 1,
    title: 'About Firewall Zone',
    description: "India's premier institute for networking and cybersecurity training",
    bgGradient: 'from-blue-900/80 to-purple-900/80',
    bgImage: '/gallery/empowering-2.png',
  },
  {
    id: 2,
    title: '25+ Years of Excellence',
    description: 'Training professionals since 2000 with industry-leading curriculum',
    bgGradient: 'from-purple-900/80 to-pink-900/80',
    bgImage: '/gallery/firewall-zone-networking.png',
  },
  {
    id: 3,
    title: '5000+ Success Stories',
    description: 'Join our community of certified networking professionals',
    bgGradient: 'from-cyan-900/80 to-blue-900/80',
    bgImage: '/gallery/cybersecurity-cert-1.png',
  },
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const features = [
    {
      icon: FaAward,
      title: 'Industry Recognition',
      description: '25+ years of excellence in IT training with certified instructors and industry partnerships'
    },
    {
      icon: FaLaptopCode,
      title: 'State-of-the-art Labs',
      description: '100+ real networking devices including routers, switches, and firewalls for hands-on practice'
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Expert Faculty',
      description: 'Highly qualified instructors with real-world industry experience and teaching expertise'
    },
    {
      icon: FaUsers,
      title: 'Student Success',
      description: '5000+ successful students placed in top companies with 95% placement rate'
    }
  ];

  const milestones = [
    { year: '2011', title: 'Institute Founded', description: 'Started with a vision to provide quality networking education' },
    { year: '2016', title: '1000+ Students', description: 'Reached milestone of training 1000+ professionals' },
    { year: '2018', title: 'Expanded Courses', description: 'Added cyber security and cloud computing programs' },
    { year: '2020', title: 'Online Training', description: 'Launched online training platform during pandemic' },
    { year: '2024', title: '5000+ Students', description: 'Proud alumni network of 5000+ working professionals' },
    { year: '2025', title: 'Launched AI Courses', description: 'Introduced AI SDE and Data Analyst training programs' }
  ];

  const whyChooseUs = [
    'Hands-on Training with Real Equipment',
    'Flexible Batch Timings (Weekday & Weekend)',
    'Industry-Recognized Certifications',
    'Small Batch Sizes for Personalized Attention',
    'Lifetime Course Access & Support',
    'Modern Infrastructure & Facilities'
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Image Slider Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={slides[currentSlide].bgImage} 
                alt={slides[currentSlide].title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
                loading="eager"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient}`}>
              <div className="absolute inset-0 bg-[url('/images/lab-placeholder.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
                  <p className="text-xl text-gray-200 max-w-2xl mx-auto">{slides[currentSlide].description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{instituteInfo.stats.experience}</div>
              <div className="text-gray-400 text-sm mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{instituteInfo.stats.devices}</div>
              <div className="text-gray-400 text-sm mt-2">Lab Devices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{instituteInfo.stats.students}</div>
              <div className="text-gray-400 text-sm mt-2">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{instituteInfo.stats.companies}</div>
              <div className="text-gray-400 text-sm mt-2">Hiring Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              {instituteInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex p-4 bg-gradient-primary rounded-xl">
                <FaRocket className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower individuals with industry-leading IT skills and certifications, enabling them to build 
                successful careers in networking, cybersecurity, and cloud technologies. We strive to provide 
                hands-on, practical training that bridges the gap between theoretical knowledge and real-world 
                application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex p-4 bg-gradient-secondary rounded-xl">
                <FaAward className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be India's most trusted and recognized institute for networking and cybersecurity training, 
                known for producing job-ready professionals who excel in their careers. We envision creating a 
                community of skilled IT professionals who contribute to the digital transformation of businesses 
                worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-400">Excellence in every aspect of IT training</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:from-primary group-hover:to-secondary transition-all">
                    <feature.icon className="text-3xl text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">25+ years of excellence and growth</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Firewall Zone?</h2>
            <p className="text-xl text-gray-400">Committed to your success every step of the way</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-background border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enquiry Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Begin Your <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>?
              </h2>
              <p className="text-xl text-gray-400">
                Join our community of successful IT professionals and transform your career
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Start Today?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-300 text-xl" />
                      <span>Limited seats available for upcoming batches</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-300 text-xl" />
                      <span>Early bird discounts available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-300 text-xl" />
                      <span>Free demo classes to get started</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-300 text-xl" />
                      <span>100% placement assistance</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/courses"
                      className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
                    >
                      View Courses
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-white/10 border border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Right - Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <EnquiryForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
