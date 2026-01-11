'use client';

import { motion } from 'framer-motion';
import { companyLogos } from '@/lib/data/institute';
import { FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

export default function CompanyLogos() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by leading organizations for professional IT training and corporate programs
          </p>
        </motion.div>

        {/* Scrolling marquee of client logos (plain images, no boxes) */}
        <div className="marquee-wrap overflow-hidden">
          <div className="flex gap-4 items-center animate-marquee py-4">
            {/* Duplicate the logos array to make a seamless loop */}
            {[...companyLogos, ...companyLogos].map((company, i) => (
              <div key={`${company.id}-${i}`} className="w-40 md:w-48 lg:w-56 flex-shrink-0 flex items-center justify-center">
                {company.logo ? (
                  <div className="relative w-full h-28 md:h-32 lg:h-36 flex items-center justify-center">
                    <Image src={company.logo} alt={company.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 150px" className="object-contain" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-28 md:h-32 lg:h-36">
                    <FaBuilding className="text-3xl text-gray-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-primary rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Many</div>
              <div className="text-white/80">Career Opportunities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
