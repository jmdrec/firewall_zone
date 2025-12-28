'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/gallery/firewall-networking-1.jpeg', title: 'Training Lab 1', description: 'Cisco Router Lab' },
  { id: 2, src: '/gallery/empowering-1.png', title: 'Empowering Future Professionals', description: 'Real world training' },
  { id: 3, src: '/gallery/cyber-security-1.jpg', title: 'Cyber Security Course', description: 'Classroom training' },
  { id: 4, src: '/gallery/networking-software-1.png', title: 'Networking & Software', description: 'Hands-on labs' },
  { id: 5, src: '/gallery/class-1.jpeg', title: 'Classroom Session', description: 'Live CCNA Training' },
  { id: 6, src: '/gallery/students-1.jpeg', title: 'Students', description: 'Student batches' },
  { id: 7, src: '/gallery/cybersecurity-cert-1.png', title: 'Certification', description: 'Enroll now' },
  { id: 8, src: '/gallery/best-networking-1.png', title: 'Beginner Courses', description: 'Best networking courses' },
  { id: 9, src: '/gallery/empowering-2.png', title: 'Empowering', description: 'Career focused training' },
  { id: 10, src: '/gallery/firewall-zone-networking.png', title: 'Firewall Zone', description: 'Institute overview' },
  { id: 11, src: '/gallery/empowering-1.webp', title: 'Empowering (webp)', description: 'Hero slider image' },
  { id: 12, src: '/gallery/empowering-2.webp', title: 'Empowering (webp 2)', description: 'Hero slider variant' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take a look at our state-of-the-art training facilities and successful batches
          </p>
        </motion.div>

        {/* Gallery Grid - 4 per row, 3 rows = 12 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-background border border-border rounded-xl overflow-hidden aspect-square hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Gallery image */}
                <Image src={image.src} alt={image.title} fill className="object-cover" />

                {/* Caption (visible on hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25">
                  <div className="text-sm font-semibold text-white text-center">
                    {image.title}
                  </div>
                  <div className="text-xs text-gray-200 text-center mt-1">
                    {image.description}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
