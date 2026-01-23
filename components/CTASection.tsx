'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-3 sm:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Ready to Start Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">IT Career</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Join 5000+ students who have transformed their careers with expert-led training and hands-on experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-white space-y-6 sm:space-y-8">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Contact Us Directly</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
                  Have questions? Our team is ready to help you choose the right course for your career goals.
                </p>

                {/* Contact Buttons */}
                <div className="space-y-4">
                  <a
                    href="tel:040-23530263"
                    className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Call Us</div>
                      <div className="font-bold text-lg">040-23530263</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918886192132"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl hover:bg-green-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">WhatsApp</div>
                      <div className="font-bold text-lg">+91 888 6192132</div>
                    </div>
                  </a>
                </div>

                {/* Trust Points */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">25+</div>
                      <div className="text-xs text-white/70">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5000+</div>
                      <div className="text-xs text-white/70">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-xs text-white/70">Placement</div>
                    </div>
                  </div>
                </div>
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
    </section>
  );
}
