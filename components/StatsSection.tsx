'use client';

import { motion } from 'framer-motion';
import { FaNetworkWired, FaUserGraduate, FaBuilding, FaAward, FaTools, FaChalkboardTeacher, FaClock, FaBriefcase } from 'react-icons/fa';

export default function StatsSection() {
  const stats = [
    {
      icon: FaAward,
      value: '25+',
      label: 'Years of Excellence',
      description: 'Industry-leading training',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaNetworkWired,
      value: '100+',
      label: 'Lab Equipment',
      description: 'Routers, Switches & Firewalls',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUserGraduate,
      value: '5000+',
      label: 'Students Trained',
      description: 'Success stories',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaBuilding,
      value: '50+',
      label: 'Hiring Companies',
      description: 'Industry partnerships',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      icon: FaTools,
      title: 'Hands-on Training with Real Equipment',
      description: 'Practice on actual Cisco routers, switches, and firewalls',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Highly Qualified Experienced Faculty',
      description: 'Learn from Cisco-certified professionals with 25+ years experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaClock,
      title: 'Flexible Batch Timings',
      description: 'Morning, afternoon, and weekend batches available',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: FaBriefcase,
      title: 'Job Placement Assistance',
      description: '100% placement support with interview preparation',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Firewall Zone</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by thousands of students and professionals for career-transforming IT training
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl`}>
                    <stat.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-lg`}>
                    <feature.icon className="text-xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
