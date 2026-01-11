'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaClock, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { blogPosts, getAllCategories } from '@/lib/data/blog';

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...getAllCategories()];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-400">
              Insights, tutorials, and career guidance for IT professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card/50 sticky top-0 z-30 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-card border border-border text-gray-400 hover:text-primary hover:border-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-4 text-gray-400 text-sm">
            Showing {paginatedPosts.length} of {filteredPosts.length} articles
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-lg bg-card border border-border text-gray-400 hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    currentPage === page
                      ? 'bg-gradient-primary text-white'
                      : 'bg-card border border-border text-gray-400 hover:text-primary hover:border-primary'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-lg bg-card border border-border text-gray-400 hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
