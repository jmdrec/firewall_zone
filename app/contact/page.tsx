'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { instituteInfo } from '@/lib/data/institute';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
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
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-foreground mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a course</option>
                    <option value="ccna">CCNA R&S + Security</option>
                    <option value="ccnp-security">CCNP Security</option>
                    <option value="ccnp-enterprise">CCNP Enterprise (R&S)</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="palo-alto">Palo Alto</option>
                    <option value="fortinet">Fortinet Firewall</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="devops">DevOps</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm"
                  >
                    Thank you! We've received your message and will get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-gray-400">Reach out to us through any of these channels</p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{instituteInfo.contact.address}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <div className="space-y-1">
                        {instituteInfo.contact.phone.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="block text-gray-400 hover:text-primary transition-colors text-sm"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <a
                        href={`mailto:${instituteInfo.contact.email}`}
                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                      >
                        {instituteInfo.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                      <a
                        href={`https://wa.me/${instituteInfo.contact.phone[0].replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={instituteInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={instituteInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    <FaYoutube size={20} />
                  </a>
                  {instituteInfo.social.linkedin && (
                    <a
                      href={instituteInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Location Map</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0461366373584!2d78.43683961487656!3d17.39430188807426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e3d5f5c3b%3A0x8c59ea06e2c8dcb0!2sMehdipatnam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Firewall Zone Institute Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
