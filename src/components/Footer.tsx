import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import brandData from '@/data/brand.json';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: '#3d2f1a' }}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full"
          style={{
            backgroundImage: `url('/images/bg/36e0c1fe-b739-4bf2-9af5-a08d3ba1083e.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center bottom',
            maxHeight: '100vh',
            maxWidth: '100vw'
          }}
        ></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Brand Information */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <div className="w-32 h-12 flex items-center justify-center mb-6 mx-auto">
                <Image
                  src="/anokhi logo.png"
                  alt="Anokhi Logo"
                  width={128}
                  height={48}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-cream-200 leading-relaxed text-sm max-w-2xl mx-auto">
              Founded in 1970, Anokhi's ethos is rooted in craft conservation and development through design and project funding.
            </p>
            <div className="flex justify-center space-x-6">
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
        </div>


        {/* Bottom Bar */}
        <div className="pt-8">
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
              {/* <Link href="/sitemap" className="text-cream-400 hover:text-cream-100 transition-colors border-b border-transparent hover:border-cream-100 pb-1">
                Sitemap
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;