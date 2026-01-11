'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaClock, FaArrowLeft, FaArrowRight, FaUser, FaTag, FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BlogPost } from '@/lib/types';

interface BlogArticleClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogArticleClient({ post, relatedPosts }: BlogArticleClientProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary">{post.category}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <FaUser className="text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendar className="text-primary" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                {post.readTime} read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              <article className="lg:col-span-8 prose prose-invert prose-lg max-w-none">
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/## /g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">')
                      .replace(/### /g, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^/, '<p class="mb-4">')
                      .replace(/$/, '</p>')
                  }}
                />
              </article>

              <aside className="lg:col-span-4 space-y-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <FaTag className="text-primary" /> Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <FaShare className="text-primary" /> Share
                  </h3>
                  <div className="flex gap-3">
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all">
                      <FaTwitter />
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all">
                      <FaLinkedin />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all">
                      <FaFacebook />
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Ready to Start Learning?</h3>
                  <p className="text-white/80 text-sm mb-4">Enroll in our courses and transform your career today.</p>
                  <Link href="/courses" className="inline-block px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Courses
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Related <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group"
                >
                  <div className="relative h-40">
                    <Image src={relatedPost.image} alt={relatedPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{relatedPost.title}</h3>
                    <Link href={`/blog/${relatedPost.slug}`} className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      Read More <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-all">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
