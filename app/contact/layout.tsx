import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Firewall Zone Institute of IT',
  description: 'Get in touch with Firewall Zone Institute of IT. Contact us for course enquiries, admissions, and career guidance. Located in Hyderabad with multiple contact options.',
  keywords: 'Contact Firewall Zone, IT training enquiry, admission Hyderabad, networking course enquiry, cybersecurity training contact',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
