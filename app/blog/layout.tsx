import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Firewall Zone Institute of IT',
  description: 'Read articles on networking, cyber security, cloud computing, AI development, and career guidance for IT professionals.',
  keywords: 'IT blog, networking articles, cyber security tips, career advice, CCNA guide, cloud computing',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
