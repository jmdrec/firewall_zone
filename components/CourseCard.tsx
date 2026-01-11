'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaGraduationCap, FaArrowRight, FaDesktop, FaHome } from 'react-icons/fa';
import { Course } from '@/lib/types';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const badgeColors = {
    'New': 'bg-green-500',
    'Bestseller': 'bg-orange-500',
    'Popular': 'bg-blue-500',
    'Trending': 'bg-purple-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/courses/${course.slug}`}>
        <div className="relative h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
          {/* Badge */}
          {course.badge && (
            <div className={`absolute top-4 right-4 ${badgeColors[course.badge]} text-white text-xs font-semibold px-3 py-1 rounded-full z-10`}>
              {course.badge}
            </div>
          )}

          {/* Image/Icon Area */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
            {/* Render course image if present, otherwise keep previous placeholder */}
            {course.image ? (
              <>
                <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                <div className="relative z-10 text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {course.category[0]}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2">
              {course.category.slice(0, 2).map((cat) => (
                <span key={cat} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-2">
              {course.shortDescription}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaClock className="text-primary" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-primary" />
                <span className="capitalize">{course.level}</span>
              </div>
            </div>

            {/* Mode */}
            <div className="flex items-center gap-2">
              {course.mode.includes('online') && (
                <div className="flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">
                  <FaDesktop className="text-xs" />
                  <span>Online</span>
                </div>
              )}
              {course.mode.includes('offline') && (
                <div className="flex items-center gap-1 text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">
                  <FaHome className="text-xs" />
                  <span>Offline</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">View Details</span>
                <FaArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
