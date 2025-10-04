'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Shops', href: '/shops' },
    { name: 'Museum', href: '/museum' },
    { name: 'Café', href: '/cafe' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed bottom-0 left-0 right-0 z-40 bg-beige-100 border-t border-brown-300 shadow-lg">
      <nav className="max-w-4xl mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-800 hover:text-brown-900 font-medium transition-colors duration-300 text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Logo - Centered */}
          <Link href="/" className="group">
            <div className="w-40 h-16 flex items-center justify-center">
              <Image
                src="/anokhi logo.png"
                alt="Anokhi Logo"
                width={160}
                height={64}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-800 hover:text-brown-900 font-medium transition-colors duration-300 text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 text-brown-800 hover:text-brown-900 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-brown-300 bg-beige-100">
            <div className="flex flex-col space-y-1 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brown-800 hover:text-brown-900 font-medium transition-colors duration-300 py-2 px-4 text-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
