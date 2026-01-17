'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaBook, FaPaperPlane } from 'react-icons/fa';

const courses = [
  'CCNA R&S + Security (Offline)',
  'CCNA R&S + Security (Online)',
  'CCNP Security',
  'CCNP Enterprise (R&S)',
  'CCNP R&S',
  'Cyber Security',
  'Full Stack Development (MERN) Using AI',
  'Data Analyst with Python & Power BI',  
  'Fortinet Firewall',
  'Palo Alto',
  'Microsoft Azure',
];

interface EnquiryFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export default function EnquiryForm({ variant = 'default', className = '' }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', course: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center ${className}`}
      >
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-gray-400">We&apos;ll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-card border border-border rounded-xl p-6 ${className}`}
    >
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">
        Student Enquiry Form
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Email Address */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Select Course */}
        <div className="relative">
          <FaBook className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select Course *</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Submit Your Enquiry
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
