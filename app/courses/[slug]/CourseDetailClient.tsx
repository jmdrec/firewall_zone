'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaGraduationCap, FaCheckCircle, FaArrowRight, FaPhone, FaWhatsapp, FaDesktop, FaHome, FaImage } from 'react-icons/fa';
import { Course, InstituteInfo } from '@/lib/types';
import CourseCard from '@/components/CourseCard';

interface CourseDetailClientProps {
  course: Course;
  relatedCourses: Course[];
  instituteInfo: InstituteInfo;
}

export default function CourseDetailClient({ course, relatedCourses, instituteInfo }: CourseDetailClientProps) {
  const badgeColors: Record<string, string> = {
    'New': 'bg-green-500',
    'Bestseller': 'bg-orange-500',
    'Popular': 'bg-blue-500',
    'Trending': 'bg-pink-500'
  };

  // Course pricing and duration based on slug
  const getCourseDetails = (slug: string) => {
    const details: Record<string, { classroom?: string; online?: string; duration: string; durationDays: string }> = {
      'ccna-routing-switching': { classroom: '₹8,000', duration: '30 Days', durationDays: '30 Days' },
      'ccna-routing-switching-online': { online: '₹10,000', duration: '30 Days', durationDays: '30 Days' },
      'ccnp-security': { classroom: '₹25,000', online: '₹30,000', duration: '45 Days', durationDays: '45 Days' },
      'ccnp-enterprise': { classroom: '₹25,000', online: '₹30,000', duration: '45 Days', durationDays: '45 Days' },
      'cyber-security': { classroom: '₹50,000', online: '₹55,000', duration: '3-4 Months', durationDays: '90-120 Days' },
      'microsoft-azure': { classroom: '₹15,000', online: '₹18,000', duration: '30 Days', durationDays: '30 Days' },
      'ai-sde': { classroom: '₹35,000', online: '₹40,000', duration: '60 Days', durationDays: '60 Days' },
      'data-analyst-python-powerbi': { classroom: '₹25,000', online: '₹30,000', duration: '45 Days', durationDays: '45 Days' },
      'palo-alto': { classroom: '₹20,000', online: '₹25,000', duration: '30 Days', durationDays: '30 Days' },
      'fortinet-firewall': { classroom: '₹20,000', online: '₹25,000', duration: '30 Days', durationDays: '30 Days' },
    };
    return details[slug];
  };

  const courseDetails = getCourseDetails(course.slug);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Two Column Layout */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-foreground">{course.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Category Tags & Badge */}
              <div className="flex flex-wrap items-center gap-3">
                {course.category.map((cat) => (
                  <span key={cat} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {cat}
                  </span>
                ))}
                {course.badge && (
                  <span className={`${badgeColors[course.badge]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {course.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                  <FaClock className="text-primary" />
                  <span className="text-gray-300">{courseDetails?.durationDays || course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                  <FaGraduationCap className="text-primary" />
                  <span className="text-gray-300 capitalize">{course.level}</span>
                </div>
                {course.mode.includes('online') && (
                  <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-lg">
                    <FaDesktop />
                    <span>Online</span>
                  </div>
                )}
                {course.mode.includes('offline') && (
                  <div className="flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-2 rounded-lg">
                    <FaHome />
                    <span>Classroom</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons with Phone Numbers */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  Enroll Now
                  <FaArrowRight />
                </Link>
                <a
                  href="tel:040-23530263"
                  className="px-6 py-4 bg-card border-2 border-primary text-primary rounded-lg font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
                >
                  <FaPhone />
                  040-23530263
                </a>
                <a
                  href="https://wa.me/918886192132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-green-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition-all"
                >
                  <FaWhatsapp />
                  +91 888 6192132
                </a>
              </div>
            </motion.div>

            {/* Right - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Course Image */}
                <div className="aspect-video relative overflow-hidden">
                  {course.image ? (
                    <Image src={course.image} alt={course.title} fill className="object-cover" />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <FaImage className="text-6xl text-gray-500 mx-auto mb-4" />
                        <div className="text-gray-400">Course Image</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Price Card */}
                {courseDetails && (
                  <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-t border-green-500/20">
                    <div className="text-sm font-semibold text-green-400 mb-3">Course Fee</div>
                    {courseDetails.classroom && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Classroom Training:</span>
                        <span className="text-2xl font-bold text-foreground">{courseDetails.classroom}</span>
                      </div>
                    )}
                    {courseDetails.online && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Online Training:</span>
                        <span className="text-2xl font-bold text-foreground">{courseDetails.online}</span>
                      </div>
                    )}
                    <div className="text-sm text-gray-400 mt-2">Duration: {courseDetails.durationDays}</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground">What You&apos;ll Learn</h2>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground">Course Curriculum</h2>
                <div className="bg-card border border-border rounded-xl p-8 space-y-4">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-foreground">Prerequisites</h2>
                  <div className="bg-card border border-border rounded-xl p-8">
                    <ul className="space-y-3">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Certification */}
              {course.certification && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-foreground">Certification</h2>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🎓</div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{course.certification}</h3>
                        <p className="text-gray-300">
                          Upon successful completion of this course, you&apos;ll be prepared for industry-recognized certification exams.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 space-y-6"
              >
                {/* Mobile Fee Structure */}
                <div className="lg:hidden">
                  {courseDetails && (
                    <div className="bg-card border border-border rounded-xl p-6 space-y-4 mb-6">
                      <h3 className="text-xl font-bold text-foreground">Course Fee</h3>
                      {courseDetails.classroom && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Classroom:</span>
                          <span className="text-2xl font-bold text-foreground">{courseDetails.classroom}</span>
                        </div>
                      )}
                      {courseDetails.online && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Online:</span>
                          <span className="text-2xl font-bold text-foreground">{courseDetails.online}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Enrollment Card */}
                <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Ready to Start?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaClock className="text-primary" />
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="font-semibold">{courseDetails?.durationDays || course.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaGraduationCap className="text-primary" />
                      <div>
                        <div className="text-sm text-gray-400">Level</div>
                        <div className="font-semibold capitalize">{course.level}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <Link
                      href="/contact"
                      className="block w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold text-center hover:opacity-90 transition-all hover:scale-105"
                    >
                      Enroll Now
                    </Link>
                    <a
                      href="tel:040-23530263"
                      className="block w-full px-6 py-3 bg-card border border-primary text-primary rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition-all"
                    >
                      Call: 040-23530263
                    </a>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <h3 className="font-bold text-foreground">Course Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      <span>Hands-on Lab Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      <span>Expert Instructors</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      <span>Real Equipment Training</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      <span>Job Placement Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-500" />
                      <span>Flexible Batch Timings</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Related Courses</h2>
                <p className="text-gray-400">Continue your learning journey with these courses</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedCourses.map((relatedCourse, index) => (
                  <CourseCard key={relatedCourse.id} course={relatedCourse} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
