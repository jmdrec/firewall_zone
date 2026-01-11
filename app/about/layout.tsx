import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Firewall Zone Institute of IT',
  description: 'Learn about Firewall Zone Institute of IT - 25+ years of excellence in networking and cybersecurity training. 5000+ successful students, expert faculty, and state-of-the-art labs.',
  keywords: 'About Firewall Zone, IT training institute Hyderabad, networking training, cybersecurity education, CCNA CCNP training center',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
