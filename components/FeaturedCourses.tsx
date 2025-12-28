'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaClock, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';
import { courses } from '@/lib/data/courses';

// Select courses that match the navigation dropdowns (show all relevant course cards)
const navCourses = courses.filter(course =>
  [
    'ccna-routing-switching',
    'ccna-routing-switching-online',
    'ccnp-security',
    'ccnp-enterprise',
    'ccnp-routing-switching-online',
    'cyber-security',
    'fortinet-firewall',
    'palo-alto',
    'microsoft-azure',
    'microsoft-365',
    'ai-sde',
    'data-analyst-python-powerbi'
  ].includes(course.slug)
);

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master networking and cybersecurity with our industry-leading courses designed to make you job-ready
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {navCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 h-full flex flex-col">
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  {/* Use course.image if available */}
                  {course.image ? (
                    <Image src={course.image} alt={course.title} fill className="object-cover" />
                  ) : (
                    <div className="text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {course.title.split(' ')[0]}
                    </div>
                  )}

                  {course.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      course.badge === 'New' ? 'bg-green-500 text-white' :
                      course.badge === 'Bestseller' ? 'bg-orange-500 text-white' :
                      course.badge === 'Trending' ? 'bg-pink-500 text-white' :
                      'bg-primary text-white'
                    }`}>
                      {course.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {course.shortDescription}
                  </p>

                  {/* Course Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {course.mode.includes('online') ? (
                        <><FaLaptop className="text-primary" /><span>Online</span></>
                      ) : (
                        <><FaChalkboardTeacher className="text-primary" /><span>Offline</span></>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group/link"
                  >
                    View Details
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all group hover:scale-105"
          >
            View All Courses
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
