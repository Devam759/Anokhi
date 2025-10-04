import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anokhi - Handcrafted Heritage, Timeless Design",
  description: "A celebration of traditional craftsmanship and contemporary design, bringing together the rich heritage of handcrafted textiles with modern lifestyle products.",
  keywords: "handcrafted textiles, traditional crafts, Indian textiles, block printing, heritage, lifestyle, Jaipur, Anokhi",
  authors: [{ name: "Anokhi" }],
  creator: "Anokhi",
  publisher: "Anokhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://anokhi.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Anokhi - Handcrafted Heritage, Timeless Design",
    description: "A celebration of traditional craftsmanship and contemporary design, bringing together the rich heritage of handcrafted textiles with modern lifestyle products.",
    url: 'https://anokhi.com',
    siteName: 'Anokhi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anokhi - Handcrafted Heritage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anokhi - Handcrafted Heritage, Timeless Design",
    description: "A celebration of traditional craftsmanship and contemporary design, bringing together the rich heritage of handcrafted textiles with modern lifestyle products.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}