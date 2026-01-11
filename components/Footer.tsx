import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaPinterest, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { instituteInfo } from '@/lib/data/institute';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const ciscoLinks = [
    { name: 'CCNA R&S + Security', href: '/courses/ccna-routing-switching' },
    { name: 'CCNP Security', href: '/courses/ccnp-security' },
    { name: 'CCNP Enterprise (R&S)', href: '/courses/ccnp-enterprise' }
  ];

  const securityLinks = [
    { name: 'Cyber Security', href: '/courses/cyber-security' },
    { name: 'Palo Alto', href: '/courses/palo-alto' },
    { name: 'Fortinet Firewall', href: '/courses/fortinet-firewall' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Courses', href: '/courses' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative rounded-md p-1.5 shadow-sm inline-block border border-white/5 overflow-hidden" style={{width: 220}}>
                <div className="absolute inset-y-0 left-0 w-[34%] rounded-l-md bg-card" />
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
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {instituteInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={instituteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={instituteInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
              >
                <FaYoutube size={20} />
              </a>
              {instituteInfo.social.linkedin && (
                <a
                  href={instituteInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              <a
                href={instituteInfo.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border hover:bg-primary transition-colors rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* CISCO Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">CISCO Courses</h3>
            <ul className="space-y-3">
              {ciscoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Security Courses</h3>
            <ul className="space-y-3">
              {securityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses/microsoft-azure"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Microsoft Azure
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/devops"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {instituteInfo.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <div className="space-y-1">
                  {instituteInfo.contact.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-gray-400 hover:text-primary transition-colors text-sm block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${instituteInfo.contact.email}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {instituteInfo.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Google Map */}
            <div className="w-full h-48 rounded-lg overflow-hidden border border-border mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.859267923707!2d78.4477813148768!3d17.41854998805987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97364fa6f263%3A0x6b772070387531!2sFirewall%20Zone!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {instituteInfo.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {quickLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
