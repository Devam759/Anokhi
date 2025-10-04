import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import brandData from '@/data/brand.json';

const Footer = () => {
  return (
    <footer className="relative bg-brown-900 text-cream-50 py-16 px-4 overflow-hidden">
      {/* Classical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdf9f0' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40v40h40zm0 0c0 22.091 17.909 40 40 40V40H40z'/%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zm0 0c0 11.046 8.954 20 20 20V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Classical Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{
        backgroundImage: `linear-gradient(90deg, #fdf9f0 0%, #d4c17a 25%, #a8826b 50%, #d4c17a 75%, #fdf9f0 100%)`
      }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Information */}
          <div className="space-y-6">
            <Link href="/" className="group">
              <div className="w-32 h-12 flex items-center justify-center mb-4">
                <Image
                  src="/anokhi logo.png"
                  alt="Anokhi Logo"
                  width={128}
                  height={48}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-cream-200 leading-relaxed text-sm">
              Founded in 1970, Anokhi's ethos is rooted in craft conservation and development through design and project funding.
            </p>
            <div className="flex space-x-4">
              <a
                href={brandData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={brandData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={brandData.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="border-t border-b border-cream-400 px-4 py-2">
              <h3 className="text-lg font-semibold text-cream-100 text-center uppercase tracking-wider">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shops" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Our Shops
                </Link>
              </li>
              <li>
                <Link href="/museum" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Museum & Café
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Craftsmanship
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage & Collections */}
          <div className="space-y-6">
            <div className="border-t border-b border-cream-400 px-4 py-2">
              <h3 className="text-lg font-semibold text-cream-100 text-center uppercase tracking-wider">Heritage</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <span className="text-cream-300 text-sm">Founded in {brandData.founded}</span>
              </li>
              <li>
                <span className="text-cream-300 text-sm">Based in {brandData.location}</span>
              </li>
              <li>
                <Link href="/about" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Traditional Techniques
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-300 hover:text-cream-100 transition-colors text-sm">
                  Artisan Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="border-t border-b border-cream-400 px-4 py-2">
              <h3 className="text-lg font-semibold text-cream-100 text-center uppercase tracking-wider">Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-cream-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-cream-300 text-sm block">{brandData.contact.address}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cream-400 flex-shrink-0" />
                <a
                  href={`tel:${brandData.contact.phone}`}
                  className="text-cream-300 hover:text-cream-100 transition-colors text-sm"
                >
                  {brandData.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cream-400 flex-shrink-0" />
                <a
                  href={`mailto:${brandData.contact.email}`}
                  className="text-cream-300 hover:text-cream-100 transition-colors text-sm"
                >
                  {brandData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-cream-400 flex-shrink-0" />
                <span className="text-cream-300 text-sm">Mon-Sat: 10AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t-2 border-b-2 border-cream-400 pt-8 pb-8 mb-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="border-t border-b border-cream-500 px-6 py-3 mb-6">
              <h3 className="text-xl font-semibold text-cream-100 uppercase tracking-wider">Stay Connected</h3>
            </div>
            <p className="text-cream-300 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for updates on new collections and artisan stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-cream-300 text-brown-900 placeholder-brown-500 text-sm focus:outline-none focus:border-cream-100 bg-cream-50"
              />
              <button className="bg-cream-300 text-brown-900 px-8 py-3 text-sm font-medium hover:bg-cream-100 transition-colors border border-cream-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-cream-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-cream-400 text-sm font-medium">
                © {new Date().getFullYear()} ANOKHI. All rights reserved.
              </p>
              <p className="text-cream-500 text-xs mt-1">
                Preserving Traditional Craftsmanship Since 1970
              </p>
            </div>
            <div className="flex space-x-8 text-sm">
              <Link href="/privacy" className="text-cream-400 hover:text-cream-100 transition-colors border-b border-transparent hover:border-cream-100 pb-1">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream-400 hover:text-cream-100 transition-colors border-b border-transparent hover:border-cream-100 pb-1">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-cream-400 hover:text-cream-100 transition-colors border-b border-transparent hover:border-cream-100 pb-1">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;