export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string[];
  mode: ('online' | 'offline')[];
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  badge?: 'New' | 'Bestseller' | 'Popular' | 'Trending';
  curriculum: string[];
  prerequisites?: string[];
  certification?: string;
  highlights: string[];
  price?: number;
  relatedCourses?: string[];
  careerOpportunities?: string[];
  trainingMethodology?: string[];
  note?: string;
  whyChoose?: string[];
}

export interface InstituteInfo {
  name: string;
  tagline: string;
  description: string;
  stats: {
    experience: string;
    devices: string;
    students: string;
    companies: string;
  };
  contact: {
    phone: string[];
    email: string;
    address: string;
    mapUrl: string;
  };
  social: {
    facebook: string;
    linkedin?: string;
    youtube: string;
    pinterest: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  feedback: string;
  rating: number;
  image: string;
  linkedin?: string;
  company?: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logo: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
