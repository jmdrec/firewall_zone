'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { instituteInfo } from '@/lib/data/institute';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ccnaDropdown = [
    { name: 'CCNA R&S + Security (Offline)', href: '/courses/ccna-routing-switching' },
    { name: 'CCNA R&S + Security (Online)', href: '/courses/ccna-routing-switching-online' },
  ];

  const ccnpDropdown = [
    { name: 'CCNP Security', href: '/courses/ccnp-security' },
    { name: 'CCNP Enterprise (R&S) offline', href: '/courses/ccnp-enterprise' },
    { name: 'CCNP Enterprise (R&S) online', href: '/courses/ccnp-routing-switching-online' }
  ];

  const securityDropdown = [
    { name: 'Cyber Security', href: '/courses/cyber-security' },
    { name: 'CCNP Security', href: '/courses/ccnp-security' },
    { name: 'Fortinet Firewall', href: '/courses/fortinet-firewall' },
    { name: 'Palo Alto', href: '/courses/palo-alto' },
  ];

  const microsoftDropdown = [
    { name: 'Microsoft Azure', href: '/courses/microsoft-azure' },
    { name: 'Microsoft 365', href: '/courses/microsoft-365' },
  ];

  const aiCoursesDropdown = [
    { name: 'FULL STACK Development (MERN) Using AI', href: '/courses/ai-sde' },
    { name: 'Data Analyst with Python & Power BI', href: '/courses/data-analyst-python-powerbi' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 hidden md:block overflow-hidden">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-shrink-0">
            <a href="tel:040-23530263" className="flex items-center gap-2 hover:text-gray-200">
              <FaPhone className="text-xs" />
              +91 888 6192132
            </a>
            <a href={`mailto:${instituteInfo.contact.email}`} className="flex items-center gap-2 hover:text-gray-200">
              <FaEnvelope className="text-xs" />
              {instituteInfo.contact.email}
            </a>
          </div>
          {/* Scrolling Address Marquee */}
          <div className="overflow-hidden flex-1 ml-4">
            <div className="animate-marquee whitespace-nowrap text-xs">
              25+years of Experience | Highly Equipped Labs with Latest Advanced Equipments | 100+Routers, Switches and Firewalls | Highly Qualified Experienced Faculty &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {instituteInfo.contact.address}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-card'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative rounded-md p-1.5 shadow-sm border border-white/5 overflow-hidden" style={{width: 220}}>
                {/* Left 34% background */}
                <div className="absolute inset-y-0 left-0 w-[34%] rounded-l-md bg-card" />
                {/* Right 66% background */}
                <div className="absolute inset-y-0 right-0 left-[34%] bg-white rounded-r-md" />
                <div className="relative flex items-center justify-center">
                  <Image 
                    src="https://www.firewall-zone.com/wp-content/uploads/2025/09/Firewall-zone.png" 
                    alt="Firewall Zone" 
                    width={220} 
                    height={48}
                    className="object-contain block"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </Link>

              {/* CCNA Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('ccna')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  CCNA <FaChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ccna' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2"
                    >
                      {ccnaDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CCNP Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('ccnp')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  CCNP <FaChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ccnp' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2"
                    >
                      {ccnpDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Security Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('security')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Security <FaChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'security' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2"
                    >
                      {securityDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AI Courses Dropdown with NEW badge */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  <span className="relative">
                    AI Courses
                    <span className="absolute -top-3 -right-8 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  </span>
                  <FaChevronDown className="text-xs ml-6" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ai' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl py-2"
                    >
                      {aiCoursesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Microsoft Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('microsoft')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Microsoft <FaChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'microsoft' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2"
                    >
                      {microsoftDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog */}
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                Blog
              </Link>

              {/* Contact Us */}
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                <Link href="/" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-400">CCNA Courses</div>
                  {ccnaDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-400">CCNP Courses</div>
                  {ccnpDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-400">Security Courses</div>
                  {securityDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-400 flex items-center gap-2">
                    AI Courses <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">NEW</span>
                  </div>
                  {aiCoursesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-400">Microsoft</div>
                  {microsoftDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
