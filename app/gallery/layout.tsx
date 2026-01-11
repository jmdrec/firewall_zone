import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Firewall Zone Institute of IT',
  description: 'Explore our state-of-the-art facilities, networking labs, classrooms, and events. See our 100+ networking devices and modern infrastructure.',
  keywords: 'Firewall Zone gallery, IT training lab, networking equipment, Cisco lab, classroom facilities Hyderabad',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
