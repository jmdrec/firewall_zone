import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'ccna-routing-switching',
    title: 'CCNA R&S + Security - OFFLINE',
    shortDescription: 'Master networking fundamentals with Cisco CCNA Routing & Switching plus Security certification.',
    description: 'Comprehensive CCNA Routing & Switching with Security training that covers network fundamentals, routing protocols, switching technologies, and network security. Get hands-on experience with real Cisco equipment in our state-of-the-art labs.',
    category: ['CISCO', 'Networking', 'Security'],
    mode: ['offline'],
    duration: '30 Days',
    level: 'beginner',
    image: '/courses/ccna.png',
    badge: 'Popular',
    curriculum: [
      'Network Fundamentals',
      'Network Access',
      'IP Connectivity',
      'IP Services',
      'Security Fundamentals',
      'Automation and Programmability',
      'Routing Protocols (OSPF, EIGRP)',
      'Switching Technologies (VLANs, STP)',
      'Network Security Basics',
      'Hands-on Lab Sessions'
    ],
    prerequisites: ['Basic computer knowledge', 'Interest in networking'],
    certification: 'CCNA (Cisco Certified Network Associate)',
    highlights: [
      '100% Hands-on Training',
      'Real Cisco Equipment',
      'Industry Expert Trainers',
      'Job-Ready Skills',
      'Certification Guidance'
    ],
    relatedCourses: ['2', '3', '4']
  },
  {
    id: '2',
    slug: 'ccna-routing-switching-online',
    title: 'CCNA R&S + Security - ONLINE',
    shortDescription: 'Learn CCNA Routing & Switching with Security from anywhere with our comprehensive online training.',
    description: 'Complete CCNA training delivered online with live sessions, virtual labs, and remote access to real equipment. Perfect for working professionals and students who need flexible learning schedules.',
    category: ['CISCO', 'Networking', 'Security'],
    mode: ['online'],
    duration: '30 Days',
    level: 'beginner',
    image: '/courses/ccna.png',
    badge: 'Popular',
    curriculum: [
      'Network Fundamentals',
      'Network Access',
      'IP Connectivity',
      'IP Services',
      'Security Fundamentals',
      'Automation and Programmability',
      'Virtual Lab Access',
      'Live Interactive Sessions',
      'Recorded Sessions for Review'
    ],
    prerequisites: ['Basic computer knowledge', 'Stable internet connection'],
    certification: 'CCNA (Cisco Certified Network Associate)',
    highlights: [
      'Learn from Home',
      'Virtual Lab Access',
      'Live Sessions',
      'Flexible Timings',
      'Recorded Classes'
    ],
    relatedCourses: ['1', '3', '4']
  },
  {
    id: '3',
    slug: 'ccnp-security',
    title: 'CCNP Security',
    shortDescription: 'Advanced Cisco security training covering firewalls, VPNs, IPS, and security best practices.',
    description: 'Professional-level security training focused on Cisco security solutions. Master firewalls, VPNs, intrusion prevention, and advanced security technologies. Ideal for network engineers looking to specialize in security.',
    category: ['CISCO', 'Security', 'Advanced'],
    mode: ['offline', 'online'],
    duration: '45 Days',
    level: 'advanced',
    image: '/courses/ccnp-security.png',
    badge: 'Bestseller',
    curriculum: [
      'Cisco Secure Firewall',
      'Cisco Secure IPS',
      'VPN Technologies',
      'Cisco Secure Email',
      'Cisco Secure Web Appliance',
      'Advanced Threat Protection',
      'Security Policies and Procedures',
      'Troubleshooting Security Solutions',
      'Real-world Security Scenarios'
    ],
    prerequisites: ['CCNA certification or equivalent knowledge', '1-2 years networking experience'],
    certification: 'CCNP Security',
    highlights: [
      'Advanced Security Training',
      'Cisco ASA Configuration',
      'Real Firewall Equipment',
      'Industry-Standard Skills',
      'Career Advancement'
    ],
    relatedCourses: ['1', '6', '7']
  },
  {
    id: '4',
    slug: 'ccnp-enterprise',
    title: 'CCNP Enterprise',
    shortDescription: 'Master enterprise networking with advanced routing, switching, and network design.',
    description: 'Advanced enterprise networking course covering complex routing and switching scenarios, network design, and enterprise solutions. Perfect for those aiming to become senior network engineers.',
    category: ['CISCO', 'Networking', 'Enterprise'],
    mode: ['offline', 'online'],
    duration: '45 Days',
    level: 'advanced',
    image: '/courses/ccnp-rs.png',
    curriculum: [
      'Advanced Routing (OSPF, EIGRP, BGP)',
      'Enterprise Switching',
      'Network Design Principles',
      'SD-WAN Solutions',
      'Wireless Networking',
      'Network Automation',
      'Quality of Service (QoS)',
      'Multicast Routing',
      'Troubleshooting Complex Networks'
    ],
    prerequisites: ['CCNA certification', 'Networking experience recommended'],
    certification: 'CCNP Enterprise',
    highlights: [
      'Enterprise-Level Skills',
      'Advanced Protocols',
      'Network Design',
      'Automation Focus',
      'High-Paying Career Path'
    ],
    relatedCourses: ['1', '2', '5']
  },
  {
    id: '5',
    slug: 'ccnp-routing-switching-online',
    title: 'CCNP R&S Online',
    shortDescription: 'Complete CCNP Routing & Switching training delivered online with virtual labs.',
    description: 'Comprehensive online CCNP training with virtual lab access and live instruction. Learn advanced routing and switching concepts from the comfort of your home.',
    category: ['CISCO', 'Networking', 'Online'],
    mode: ['online'],
    duration: '45 Days',
    level: 'advanced',
    image: '/courses/ccnp-rs.png',
    curriculum: [
      'Advanced Routing Protocols',
      'Enterprise Switching',
      'Network Design',
      'Troubleshooting',
      'Virtual Lab Sessions',
      'Live Online Classes',
      'Practice Labs'
    ],
    prerequisites: ['CCNA certification', 'Good internet connection'],
    certification: 'CCNP Enterprise',
    highlights: [
      'Flexible Online Learning',
      'Virtual Labs',
      'Live Instruction',
      'Career Support',
      'Expert Trainers'
    ],
    relatedCourses: ['4', '1', '2']
  },
  {
    id: '6',
    slug: 'cyber-security',
    title: 'Cyber Security - Complete Course Package',
    shortDescription: 'Comprehensive 10-course cyber security program covering ethical hacking, network defense, and threat mitigation.',
    description: 'Advance your career in cybersecurity with our expert-led training. This comprehensive 10-course package covers ethical hacking, network defense, and real-world threat mitigation—designed to get you certified and job-ready in today\'s digital landscape.',
    category: ['Security', 'Cyber Security', 'Ethical Hacking'],
    mode: ['offline', 'online'],
    duration: '3-4 Months',
    level: 'intermediate',
    image: '/courses/cyber-security.png',
    badge: 'Bestseller',
    curriculum: [
      'Course 1 – Networking Fundamentals',
      'Course 2 – Cyber Security Basics',
      'Course 3 – Juniper Security',
      'Course 4 – Cisco Security',
      'Course 5 – Security Standards & Compliance',
      'Course 6 – Security Auditing',
      'Course 7 – Hacking Techniques & Ethical Hacking',
      'Course 8 – Endpoint Security',
      'Course 9 – Network Monitoring & SIEM',
      'Course 10 – FortiGate Security'
    ],
    prerequisites: ['Basic networking knowledge', 'Computer fundamentals'],
    certification: 'Multiple certifications covered',
    highlights: [
      '10 Complete Courses',
      'Ethical Hacking Training',
      'Network Defense',
      'Real-World Projects',
      'Industry-Ready Skills',
      'Multiple Certifications Prep',
      'Job Placement Assistance'
    ],
    relatedCourses: ['3', '7', '8']
  },
  {
    id: '7',
    slug: 'palo-alto',
    title: 'Palo Alto Networks Firewall',
    shortDescription: 'Master Palo Alto Networks next-generation firewalls with hands-on training.',
    description: 'Complete Palo Alto Networks training covering firewall configuration, security policies, threat prevention, and advanced features. Get hands-on experience with real Palo Alto equipment.',
    category: ['Security', 'Firewall', 'Palo Alto'],
    mode: ['offline', 'online'],
    duration: '30 Days',
    level: 'intermediate',
    image: '/courses/palo-alto.png',
    curriculum: [
      'Palo Alto Firewall Architecture',
      'Initial Configuration',
      'Security Policies',
      'NAT Configuration',
      'User-ID and App-ID',
      'Content-ID and Threat Prevention',
      'VPN Configuration',
      'High Availability',
      'Panorama Management',
      'Troubleshooting and Monitoring'
    ],
    prerequisites: ['Networking basics', 'Firewall concepts'],
    certification: 'PCNSA, PCNSE (preparation)',
    highlights: [
      'Next-Gen Firewall Training',
      'Real Palo Alto Equipment',
      'Industry-Leading Technology',
      'High-Demand Skills',
      'Certification Guidance'
    ],
    relatedCourses: ['6', '8', '3']
  },
  {
    id: '8',
    slug: 'fortinet-firewall',
    title: 'Fortinet Firewall',
    shortDescription: 'Learn Fortinet FortiGate firewall configuration, security policies, and network protection.',
    description: 'Comprehensive Fortinet FortiGate training covering firewall setup, security policies, VPN, and advanced threat protection. Hands-on labs with real FortiGate devices.',
    category: ['Security', 'Firewall', 'Fortinet'],
    mode: ['offline', 'online'],
    duration: '30 Days',
    level: 'intermediate',
    image: '/courses/fortinet.png',
    curriculum: [
      'FortiGate Architecture',
      'Initial Setup and Configuration',
      'Firewall Policies',
      'NAT and Virtual IPs',
      'VPN Configuration (IPSec, SSL)',
      'Routing Protocols',
      'High Availability',
      'FortiManager and FortiAnalyzer',
      'Security Profiles',
      'Troubleshooting'
    ],
    prerequisites: ['Basic networking knowledge'],
    certification: 'NSE4, NSE7 (preparation)',
    highlights: [
      'FortiGate Training',
      'Hands-on Labs',
      'Real Equipment',
      'Certification Prep',
      'Industry Recognition'
    ],
    relatedCourses: ['6', '7', '3']
  },
  {
    id: '9',
    slug: 'microsoft-azure',
    title: 'Microsoft Azure',
    shortDescription: 'Master cloud computing with Microsoft Azure training covering infrastructure, security, and services.',
    description: 'Complete Microsoft Azure training covering cloud infrastructure, virtual machines, networking, security, and Azure services. Perfect for IT professionals moving to the cloud.',
    category: ['Cloud', 'Microsoft', 'Azure'],
    mode: ['offline', 'online'],
    duration: '30 Days',
    level: 'intermediate',
    image: '/courses/azure-az104.png',
    curriculum: [
      'Azure Fundamentals',
      'Azure Virtual Machines',
      'Azure Networking (VNet, NSG, VPN)',
      'Azure Storage',
      'Azure Active Directory',
      'Azure Security',
      'Azure Monitor and Diagnostics',
      'Azure Backup and Recovery',
      'Cost Management',
      'Hands-on Projects'
    ],
    prerequisites: ['Basic IT knowledge', 'Networking basics'],
    certification: 'AZ-104, AZ-305 (preparation)',
    highlights: [
      'Cloud Computing Skills',
      'Microsoft Certification',
      'In-Demand Technology',
      'Hands-on Azure Portal',
      'Career Growth'
    ],
    relatedCourses: ['10', '6']
  },
  {
    id: '10',
    slug: 'devops',
    title: 'DevOps',
    shortDescription: 'Learn DevOps practices, tools, and automation for modern software development and deployment.',
    description: 'Comprehensive DevOps training covering CI/CD, containerization, automation, and cloud technologies. Learn industry-standard tools and practices for modern development.',
    category: ['DevOps', 'Cloud', 'Automation'],
    mode: ['offline', 'online'],
    duration: '3-4 months',
    level: 'intermediate',
    image: '/courses/mcse.png',
    badge: 'New',
    curriculum: [
      'DevOps Fundamentals',
      'Linux Administration',
      'Git and Version Control',
      'Docker and Containerization',
      'Kubernetes',
      'CI/CD with Jenkins',
      'Terraform and Infrastructure as Code',
      'Ansible Automation',
      'Cloud Platforms (AWS/Azure)',
      'Monitoring and Logging'
    ],
    prerequisites: ['Basic Linux knowledge', 'Programming basics helpful'],
    certification: 'Various DevOps certifications',
    highlights: [
      'Modern DevOps Tools',
      'Automation Skills',
      'Cloud Integration',
      'High-Paying Career',
      'Industry Best Practices'
    ],
    relatedCourses: ['9', '6']
  },
  {
    id: '11',
    slug: 'ai-sde',
    title: 'AI SDE (Software Development Engineer)',
    shortDescription: 'Master AI-powered software development with machine learning, deep learning, and AI integration.',
    description: 'Comprehensive AI Software Development Engineer course covering machine learning, deep learning, natural language processing, and AI integration in software applications. Learn to build intelligent applications with Python, TensorFlow, and PyTorch.',
    category: ['AI', 'Machine Learning', 'Software Development'],
    mode: ['offline', 'online'],
    duration: '60 Days',
    level: 'intermediate',
    image: '',
    badge: 'New',
    curriculum: [
      'Python for AI Development',
      'Machine Learning Fundamentals',
      'Deep Learning with TensorFlow & PyTorch',
      'Natural Language Processing (NLP)',
      'Computer Vision Basics',
      'AI Model Deployment',
      'MLOps and CI/CD for AI',
      'Building AI-Powered Applications',
      'LLM Integration (ChatGPT, LangChain)',
      'Capstone AI Project'
    ],
    prerequisites: ['Basic Python knowledge', 'Programming fundamentals'],
    certification: 'AI Software Development Engineer Certificate',
    highlights: [
      'Cutting-Edge AI Skills',
      'Hands-on ML Projects',
      'Industry-Ready Training',
      'LLM & ChatGPT Integration',
      'High-Demand Career Path'
    ],
    relatedCourses: ['12', '10', '9']
  },
  {
    id: '12',
    slug: 'data-analyst-python-powerbi',
    title: 'Data Analyst with Python & Power BI',
    shortDescription: 'Become a data analyst with Python programming, data visualization, and Power BI expertise.',
    description: 'Complete data analytics training covering Python for data analysis, SQL, data visualization with Power BI, and statistical analysis. Learn to extract insights from data and create compelling dashboards.',
    category: ['Data Analytics', 'Python', 'Power BI'],
    mode: ['offline', 'online'],
    duration: '45 Days',
    level: 'intermediate',
    image: '',
    badge: 'Trending',
    curriculum: [
      'Python Programming Fundamentals',
      'Data Analysis with Pandas & NumPy',
      'SQL for Data Analysis',
      'Data Visualization with Matplotlib & Seaborn',
      'Power BI Fundamentals',
      'Creating Interactive Dashboards',
      'DAX Functions in Power BI',
      'Statistical Analysis',
      'Excel for Data Analysis',
      'Real-World Data Projects'
    ],
    prerequisites: ['Basic computer skills', 'No prior programming required'],
    certification: 'Data Analyst Certificate',
    highlights: [
      'Python + Power BI Skills',
      'Hands-on Data Projects',
      'Dashboard Creation',
      'Industry Tools Training',
      'High-Paying Career'
    ],
    relatedCourses: ['11', '9', '10']
  },

  {
    id: '18',
    slug: 'microsoft-azure',
    title: 'Microsoft Azure',
    shortDescription: 'Cloud computing training for Microsoft Azure certification.',
    description: 'Learn cloud computing concepts and master Microsoft Azure services. This course covers Azure administration, networking, security, and computing solutions.',
    category: ['Cloud', 'Microsoft'],
    mode: ['offline', 'online'],
    duration: '30 Days',
    level: 'intermediate',
    image: '/courses/azure-az104.png',
    curriculum: [
      'Azure Administration',
      'Virtual Networking',
      'Azure Identity & Governance',
      'Storage Solutions',
      'Deploying Virtual Machines'
    ],
    prerequisites: ['Basic OS and Networking knowledge'],
    certification: 'AZ-104',
    highlights: ['Live Cloud Labs', 'Exam Preparation'],
    relatedCourses: ['19']
  },
  {
    id: '19',
    slug: 'microsoft-365',
    title: 'Microsoft 365',
    shortDescription: 'Master Microsoft 365 administration and services.',
    description: 'Comprehensive training on Microsoft 365 services including Exchange Online, SharePoint, Teams, and device management.',
    category: ['Cloud', 'Microsoft'],
    mode: ['offline', 'online'],
    duration: '30 Days',
    level: 'intermediate',
    image: '/courses/mcse.png',
    curriculum: [
      'M365 Tenant Management',
      'Identity Synchronization',
      'Security & Compliance',
      'Exchange Online Admin'
    ],
    prerequisites: ['Basic Windows Server knowledge'],
    certification: 'MS-100 / MS-101',
    highlights: ['Real-world Scenarios', 'Tenant Access'],
    relatedCourses: ['18']
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => 
    course.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.badge);
};

