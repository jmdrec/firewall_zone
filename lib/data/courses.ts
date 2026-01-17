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
      'Routing Protocols (Static Routing, RIP, OSPF, EIGRP and BGP)',
      'Switching Technologies (VLANs, STP)',
      'Network Security Basics',
      'Hands-on Lab Sessions'
    ],
    prerequisites: ['No Prerequisites'],
    certification: 'CCNA (Cisco Certified Network Associate)',
    highlights: [
      '100% Hands-on Training',
      'Real Cisco Equipment',
      'Industry Expert Trainers',
      'Job-Ready Skills',
      'Certification Guidance'
    ],
    careerOpportunities: [
      'Network Administrator',
      'Network Engineer',
      'Network Support Engineer',
      'IT Support Specialist',
      'Junior Network Engineer'
    ],
    trainingMethodology: [
      'Hands-on labs with real Cisco routers and switches',
      'Live classroom training with industry experts',
      'Real-world network deployment scenarios',
      'Individual attention and personalized guidance',
      'Extra lab sessions during course duration',
      'Industry-standard configuration practices'
    ],
    note: 'CCNA (Routing & Switching) + Security Training in Hyderabad at Firewall Zone Institute of IT is led by Cisco-certified professionals and designed to help you master both enterprise-grade network architecture and foundational security protocols. Build practical skills in network configuration, traffic control, device hardening, and threat mitigation—making you job-ready for roles in IT infrastructure and cybersecurity.',
    whyChoose: [
      'High Demand – CCNA-certified professionals with security specialization are in global demand across industries',
      'Recognized Certifications – Prepare for Cisco CCNA Routing & Switching and CCNA Security exams to validate your dual expertise',
      'Hands-On Labs – Train on live network and security scenarios',
      'Career-Focused Curriculum – Build job-ready networking and security skills from day one with role-based learning paths',
      'Highly qualified and experienced instructors',
      'Each student will receive industry\'s most complex, in-depth and up-to-date lab scenarios'
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
    prerequisites: ['No Prerequisites'],
    certification: 'CCNA (Cisco Certified Network Associate)',
    highlights: [
      'Learn from Home',
      'Virtual Lab Access',
      'Live Sessions',
      'Flexible Timings',
      'Recorded Classes'
    ],
    careerOpportunities: [
      'Network Administrator',
      'Network Engineer',
      'Network Support Engineer',
      'IT Support Specialist',
      'Junior Network Engineer'
    ],
    trainingMethodology: [
      'Comprehensive online training for overseas students',
      'Live interactive sessions with virtual labs',
      'Live classes recordings available',
      'Recorded sessions for review and practice',
      'Flexible scheduling for working professionals',
      'One-on-one doubt clearing sessions'
    ],
    note: 'Comprehensive Online Training for CCNA R&S + Security: Overseas Students can now access comprehensive ONLINE TRAINING for both CCNA Routing & Switching (R&S) and Security certifications from the comfort of their home countries. Perfect for working professionals and students who need flexible learning schedules.',
    whyChoose: [
      'High Demand – CCNA-certified professionals are in global demand',
      'Recognized Certifications – Prepare for Cisco CCNA exams',
      'Virtual Hands-On Labs – Remote access to live network scenarios',
      'Career-Focused Curriculum – Build job-ready skills from day one',
      'Learn from anywhere with stable internet connection',
      'Live classes recordings available for revision'
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
    mode: ['offline'],
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
    prerequisites: ['CCNA knowledge'],
    certification: 'CCNP Security',
    highlights: [
      'Advanced Security Training',
      'Cisco ASA Configuration',
      'Real Firewall Equipment',
      'Industry-Standard Skills',
      'Career Advancement'
    ],
    careerOpportunities: [
      'Network Security Engineer',
      'Security Architect',
      'Firewall Administrator',
      'VPN Specialist',
      'Security Consultant',
      'Network Security Analyst',
      'Senior Network Engineer',
      'Infrastructure Security Engineer'
    ],
    trainingMethodology: [
      'Hands-on labs with Cisco ASA, Firepower, and ISE',
      'Real-world security deployment scenarios',
      'Expert instruction from CCNP Security certified professionals',
      'Enterprise-grade security policy configuration',
      'VPN and secure access control implementation',
      'Threat mitigation and incident response training'
    ],
    note: 'CCNP Security Training in Hyderabad at Firewall Zone Institute of IT is led by Cisco-certified professionals and designed to help you master enterprise-grade network security architecture, threat mitigation, and secure access control using Cisco technologies. Build practical skills in perimeter defense, identity management, and secure network design to become job-ready for high-demand cybersecurity roles.',
    whyChoose: [
      'High Demand – CCNP Security-certified professionals are in global demand across industries',
      'Recognized Certifications – Prepare for Cisco CCNP Security exams to validate your advanced firewall and security expertise',
      'Hands-On Labs – Train on live network and security scenarios',
      'Career-Focused Curriculum – Build job-ready security skills from day one with role-based learning paths',
      'Master next-generation network protection',
      'Industry-standard Cisco tools and workflows'
    ],
    relatedCourses: ['1', '6', '7']
  },
  {
    id: '4',
    slug: 'ccnp-enterprise',
    title: 'CCNP Enterprise (R&S) offline',
    shortDescription: 'Master enterprise networking with advanced routing, switching, and network design.',
    description: 'Advanced enterprise networking course covering complex routing and switching scenarios, network design, and enterprise solutions. Perfect for those aiming to become senior network engineers.',
    category: ['CISCO', 'Networking', 'Enterprise'],
    mode: ['offline'],
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
    prerequisites: ['CCNA knowledge'],
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
    title: 'CCNP Enterprise (R&S) online',
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
    prerequisites: ['CCNA knowledge'],
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
    duration: '60 Days',
    level: 'advanced',
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
    prerequisites: ['CCNA knowledge'],
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
    careerOpportunities: [
      'Cybersecurity Analyst',
      'Security Operations Center (SOC) Analyst',
      'Ethical Hacker / Penetration Tester',
      'Information Security Analyst',
      'Security Consultant',
      'Incident Response Analyst',
      'Vulnerability Assessment Specialist',
      'SIEM Engineer',
      'Security Auditor',
      'Compliance Analyst'
    ],
    trainingMethodology: [
      'Hands-on training with real-world attack simulations',
      'Dedicated security labs with latest equipment',
      'Industry-standard tools: Firewalls, SIEM, Endpoint Protection',
      'Vulnerability assessment and penetration testing',
      'Network defense and incident response scenarios',
      'Compliance and risk management training',
      'Multi-vendor firewall configuration (Cisco, Palo Alto, Fortinet)'
    ],
    note: 'Cybersecurity Training in Hyderabad at Firewall Zone Institute of IT is led by certified security professionals and designed to help you master the full cybersecurity lifecycle—from threat detection to incident response. Learn through hands-on labs, real-world attack simulations, and tool-specific modules covering firewalls, SIEM, endpoint protection, vulnerability assessment, and ethical hacking. Build practical skills in network defense, risk management, and compliance to become job-ready for high-demand cybersecurity roles.',
    whyChoose: [
      'High Demand – Cybersecurity professionals are in global demand across every sector',
      'Recognized Certifications – Prepare for CEH, CompTIA Security+, CISSP, and other industry-aligned credentials',
      'Hands-On Labs – Train in dedicated environments with real-world attack simulations and defense strategies',
      'Career-Focused Curriculum – Build job-ready cybersecurity skills from day one with threat-centric learning paths',
      'Comprehensive security training covering all domains',
      'Learn from certified security professionals with 16+ years experience'
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
    prerequisites: ['CCNA knowledge'],
    certification: 'PCNSA, PCNSE (preparation)',
    highlights: [
      'Next-Gen Firewall Training',
      'Real Palo Alto Equipment',
      'Industry-Leading Technology',
      'High-Demand Skills',
      'Certification Guidance'
    ],
    careerOpportunities: [
      'Palo Alto Firewall Engineer',
      'Network Security Engineer',
      'Firewall Administrator',
      'Security Operations Engineer',
      'Network Security Consultant',
      'Security Architect',
      'SOC Engineer',
      'Infrastructure Security Specialist'
    ],
    trainingMethodology: [
      'Hands-on training with real Palo Alto firewalls',
      'Next-generation firewall deployment scenarios',
      'Security policy configuration and optimization',
      'Threat prevention and content filtering',
      'VPN and high availability setup',
      'Panorama centralized management training'
    ],
    note: 'Master next-generation firewall security with Palo Alto Networks Training at Firewall Zone Institute of IT. Learn through hands-on labs, real-world simulations, and certification-focused modules to build advanced firewall skills and become job-ready. Palo Alto appliances are widely adopted in enterprise networks worldwide.',
    whyChoose: [
      'High Demand – Palo Alto-certified professionals are in global demand',
      'Recognized Certifications – PCNSA and PCNSE validate your expertise',
      'Career-Focused Curriculum – Build job-ready skills from day one',
      'Industry-leading next-generation firewall technology'
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
    mode: ['offline'],
    duration: '2 weeks',
    level: 'advanced',
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
    prerequisites: ['CCNA knowledge'],
    certification: 'NSE4, NSE5 (preparation)',
    highlights: [
      'FortiGate Training',
      'Hands-on Labs',
      'Real Equipment',
      'Certification Prep',
      'Industry Recognition'
    ],
    careerOpportunities: [
      'Fortinet Firewall Engineer',
      'Network Security Engineer',
      'Firewall Administrator',
      'Security Engineer',
      'Infrastructure Security Specialist',
      'SOC Analyst'
    ],
    trainingMethodology: [
      'Hands-on training with real FortiGate firewalls',
      'Enterprise firewall deployment scenarios',
      'Security policy and profile configuration',
      'VPN and routing implementation',
      'High availability and load balancing',
      'FortiManager and FortiAnalyzer training'
    ],
    note: 'Fortinet Firewall Training in Hyderabad at Firewall Zone Institute of IT is led by certified experts and designed to help you master FortiGate deployment, configuration, and security policies. Learn through hands-on labs, real-world simulations, and certification-focused modules to build advanced firewall skills and become job-ready. Fortinet\'s globally recognized NSE (Network Security Expert) certification pathway opens doors to top-tier roles.',
    whyChoose: [
      'High Demand – Fortinet-certified professionals are in global demand',
      'Recognized Certifications – NSE 4 and NSE 5 validate your expertise',
      'Hands-On Labs – Train with real FortiGate equipment',
      'Career-Focused Curriculum – Build job-ready skills from day one',
      'Industry-leading security solutions',
      'Comprehensive training on FortiGate ecosystem'
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
    mode: ['offline'],
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
    prerequisites: ['Basic computer knowledge'],
    certification: 'AZ-104, AZ-305 (preparation)',
    highlights: [
      'Cloud Computing Skills',
      'Microsoft Certification',
      'In-Demand Technology',
      'Hands-on Azure Portal',
      'Career Growth'
    ],
    careerOpportunities: [
      'Azure Administrator',
      'Cloud Engineer',
      'Cloud Architect',
      'DevOps Engineer',
      'Cloud Security Engineer',
      'Infrastructure Engineer',
      'Solutions Architect',
      'Cloud Consultant'
    ],
    trainingMethodology: [
      'Hands-on training with Azure Portal',
      'Live cloud environment deployment',
      'Virtual machines and networking configuration',
      'Security and identity management',
      'Automation and DevOps integration',
      'Cost optimization and governance'
    ],
    note: 'Microsoft Azure Training in Hyderabad at Firewall Zone Institute of IT is led by certified cloud professionals and designed to help you master enterprise-grade cloud architecture, deployment, and automation using Microsoft Azure services. Learn through hands-on labs, real-world cloud scenarios, and tool-specific modules covering Azure Virtual Machines, Storage, Networking, Identity, Security, and DevOps integrations. Build practical skills in cloud provisioning, scalability, and governance to become job-ready for high-demand Azure roles.',
    whyChoose: [
      'High Demand – Azure-certified professionals are in global demand across industries',
      'Recognized Certifications – Prepare for AZ-900, AZ-104, AZ-305, and other Microsoft credentials',
      'Hands-On Labs – Train in real Azure environments with live deployment and automation projects',
      'Career-Focused Curriculum – Build job-ready cloud skills from day one with service-based learning paths',
      'Master enterprise-grade cloud architecture',
      'Hybrid and multi-cloud adoption expertise'
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
    title: 'Full Stack Development (MERN) Using AI',
    shortDescription: 'Industry-ready Full Stack Development training with hands-on projects and structured learning.',
    description: 'Our Full Stack Development (MERN) training program is designed to make you industry-ready with hands-on projects, real-world problem-solving, and structured learning. This 3-month program covers software fundamentals, frontend & backend development, JavaScript, AI tools, SQL, Data Structures, and project deployment.',
    category: ['AI', 'Software Development', 'Full Stack'],
    mode: ['offline', 'online'],
    duration: '90 Days',
    level: 'advanced',
    image: '/courses/FULL STACK Development (MERN) Using AI.png',
    badge: 'New',
    curriculum: [
      'WEEK 1: Software Engineering Fundamentals – Introduction to IT Industry, SDLC, Agile, Scrum, Git, GitHub, VS Code',
      'WEEK 2-3: Web Designing – HTML5 & Semantic Structure, CSS3, Flexbox, Grid, Bootstrap, Responsive Web Design',
      'WEEK 4: Databases & SQL – SQL Basics, CRUD Operations, MySQL Workbench, Schema Design, Joins, Views, Stored Procedures',
      'WEEK 5-6-7: JavaScript & DS Algo – JavaScript Essentials, ES6, DOM Manipulation, Async Programming, Data Structures & Algorithms',
      'WEEK 8-9: Frontend Development (React.js) – JSX, Components, Hooks, Props & State Management, Routing, REST API Integration',
      'WEEK 10-11: Backend Development (Node.js & Express.js) – Node.js Fundamentals, Express.js, RESTful APIs, JWT Auth, MySQL Integration',
      'WEEK 12-13: AI Integration & Deployment – Python Basics for AI, AI Tools in Development, API Automation, Deployment on AWS/Render, Full-Stack + AI Project'
    ],
    prerequisites: ['Basic computer knowledge'],
    certification: 'Full Stack Software Development Engineer Certificate',
    highlights: [
      'Full Stack Development Skills',
      'Hands-on Projects',
      'Industry-Ready Training',
      'AI Tools Integration',
      '3-Month Intensive Program',
      'Frontend & Backend Development'
    ],
    careerOpportunities: [
      'Full Stack Developer',
      'Web Application Engineer',
      'Automation Developer',
      'Backend Developer',
      'Frontend Developer'
    ],
    trainingMethodology: [
      'Hands-on training with real-world projects',
      'Live classroom training with industry experts',
      'Frontend & backend development scenarios',
      'AI tools integration and deployment',
      'Database design and SQL practices',
      'Project-based learning approach',
      'Individual attention and personalized guidance'
    ],
    note: 'Full Stack Development (MERN) Using AI Training in Hyderabad at Firewall Zone Institute of Technology is led by certified experts and designed to help you master AI-driven software development, automation, and full-stack engineering. Learn through hands-on labs, real-world simulations, and project-focused modules to build advanced development skills and become job-ready.',
    whyChoose: [
      'High Demand – AI Software Development Engineers are in global demand',
      'Industry-Ready Skills – Build job-ready development skills from day one',
      'Hands-On Projects – Train with real-world AI tools and frameworks',
      'Career-Focused Curriculum – Structured learning with project deployment',
      'Comprehensive training covering full-stack development',
      'Expert instruction from certified professionals with industry experience'
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
    duration: '60 Days',
    level: 'advanced',
    image: '/courses/DATA Analyst.png',
    badge: 'Trending',
    curriculum: [
      'WEEK 1: Basics of Python – Introduction to Python, Variables, Data Types, Input/Output, Conditional & Looping Statements',
      'WEEK 2: Data Structures in Python – Lists, Tuples, Sets, Dictionaries, List Comprehensions, Working with Files',
      'WEEK 3: Functions & OOP Concepts – Functions, Lambda, Object-Oriented Programming, Classes, Objects, Inheritance',
      'WEEK 4: Python Libraries for Data Analysis – Jupyter Notebook, NumPy Fundamentals, Pandas for Data Handling, Data Cleaning',
      'WEEK 5: SQL for Data Analysts – Database Basics, SQL Queries, Filtering, Sorting, Grouping, Joins, Subqueries, Real Datasets',
      'WEEK 6-7: Data Cleaning & Visualization – Handling Missing Data, Outlier Detection, Matplotlib, Seaborn, Mini Data Analysis Project',
      'WEEK 8: Power BI Dashboarding – Power BI Overview, Data Import, Power Query, DAX Functions, Interactive Dashboards, Publishing Reports'
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
    careerOpportunities: [
      'Data Analyst',
      'Business Intelligence Analyst',
      'Data Visualization Specialist',
      'Power BI Developer',
      'Python Data Analyst',
      'Analytics Consultant',
      'Reporting Analyst',
      'Junior Data Scientist'
    ],
    trainingMethodology: [
      'Hands-on training with real datasets',
      'Live classroom training with industry experts',
      'Python programming for data analysis',
      'Power BI dashboard creation projects',
      'SQL database querying and analysis',
      'Statistical analysis and visualization',
      'Individual attention and personalized guidance'
    ],
    note: 'Data Analyst Training in Hyderabad at Firewall Zone Institute of Technology is led by certified experts and designed to help you master data analysis, visualization, and business intelligence. Learn through hands-on labs, real-world datasets, and tool-specific modules to build advanced analytics skills and become job-ready.',
    whyChoose: [
      'High Demand – Data Analysts are in global demand across industries',
      'Industry-Ready Skills – Build job-ready analytics skills from day one',
      'Hands-On Projects – Train with real-world datasets and business scenarios',
      'Career-Focused Curriculum – Python, Power BI, and SQL expertise',
      'Comprehensive training covering data analytics lifecycle',
      'Expert instruction from certified professionals with industry experience'
    ],
    relatedCourses: ['11', '9', '10']
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
    relatedCourses: ['9']
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

