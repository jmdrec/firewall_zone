import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firewall Zone Institute of IT - Best Networking, Cyber Security & AI Training in Hyderabad",
  description: "Premier IT training institute offering CCNA, CCNP, Cyber Security, Palo Alto, Fortinet, Azure, AI & Data Science courses. 25+ years of excellence with 100% placement assistance.",
  keywords: "CCNA training Hyderabad, CCNP Enterprise (R&S), CCNP Security, Cyber Security course, Palo Alto firewall, Fortinet training, Azure cloud, AI SDE course, Data Analyst training, Best IT institute Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
