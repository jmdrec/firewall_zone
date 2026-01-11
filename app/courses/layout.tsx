import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Courses - Firewall Zone Institute of IT',
  description: 'Explore our comprehensive range of IT courses including CCNA, CCNP, Cyber Security, Palo Alto, Fortinet, Microsoft Azure, and AI courses. Expert training with hands-on labs.',
  keywords: 'CCNA courses, CCNP training, Cyber Security training, Palo Alto certification, Fortinet firewall, Azure cloud training, AI SDE course, IT training Hyderabad',
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
