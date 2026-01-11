import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Testimonials - Firewall Zone Institute of IT',
  description: 'Read success stories from our 5000+ students. 95% placement rate with top companies. Hear how our CCNA, CCNP, and Cyber Security training transformed careers.',
  keywords: 'Student reviews, IT training testimonials, CCNA success stories, placement success, Firewall Zone reviews',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
