import { InstituteInfo, CompanyLogo } from '../types';

export const instituteInfo: InstituteInfo = {
  name: 'Firewall Zone Institute of IT',
  tagline: "India's premier institute for the best networking courses",
  description: 'Expert support and industry-leading training in CCNA RS, CCNP Security, Networking, and Cyber Security Courses, empowering individuals with the skills to achieve independence, career growth, and technical excellence.',
  stats: {
    experience: '25+',
    devices: '100+',
    students: '5000+',
    companies: '50+'
  },
  contact: {
    phone: ['+91 888 6192132', '040-23530263'],
    email: 'info@firewall-zone.com',
    address: 'Opp: Pillar No: 3, Royal Colony, Mehdipatnam, Hyderabad, Telangana, India',
    mapUrl: 'https://www.google.com/maps?q=Royal+Colony+Mehdipatnam+Hyderabad'
  },
  social: {
    facebook: 'https://www.facebook.com/FirewallZoneInstituteofIT/',
    youtube: 'https://www.youtube.com/@arifuddin8652',
    pinterest: 'https://in.pinterest.com/firewallzone/',
    linkedin: 'https://www.linkedin.com/company/firewall-zone/'
  }
};

// Client companies — only include logos available in `public/images/clients`
export const companyLogos: CompanyLogo[] = [
  { id: '1', name: 'Client 2', logo: '/images/clients/client-2.png' },
  { id: '2', name: 'Client 3', logo: '/images/clients/client-3.png' },
  { id: '3', name: 'Client 3 (archived)', logo: '/images/clients/client-3-arch.png' },
  { id: '4', name: 'Client 4', logo: '/images/clients/client-4.png' },
  { id: '5', name: 'Client 5', logo: '/images/clients/client-5.png' },
  { id: '6', name: 'Client 6', logo: '/images/clients/client-6.png' },
  { id: '7', name: 'Client 7', logo: '/images/clients/client-7.png' },
  { id: '8', name: 'Client 8', logo: '/images/clients/client-8.png' },
  { id: '9', name: 'Client 8 (archived)', logo: '/images/clients/client-8-arch.png' },
  { id: '10', name: 'Client 9', logo: '/images/clients/client-9.png' },
  { id: '11', name: 'Client 10', logo: '/images/clients/client-10.png' },
  { id: '12', name: 'Client 11', logo: '/images/clients/client-11.png' },
  { id: '13', name: 'Client 12', logo: '/images/clients/client-12.png' },
  { id: '14', name: 'Client 13', logo: '/images/clients/client-13.png' },
  { id: '15', name: 'Client 14', logo: '/images/clients/client-14.png' },
  { id: '16', name: 'Client 15', logo: '/images/clients/client-15.png' },
  { id: '17', name: 'Client 16', logo: '/images/clients/client-16.png' },
  { id: '18', name: 'Client 17', logo: '/images/clients/client-17.png' },
  { id: '19', name: 'Client 18', logo: '/images/clients/client-18.png' }
];

export const highlights = [
  '25+ Years of Experience',
  'Highly Equipped Labs with Latest Advanced Equipment',
  'More than 100+ Routers, Switches and Firewalls',
  'Highly Qualified Experienced Faculty',
  'Hands-on Training with Real Equipment',
  'Job Placement Assistance',
  'Flexible Batch Timings',
  'Online & Offline Training Options'
];
