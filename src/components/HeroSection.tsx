'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      image: '/images/stage3.jpg',
      title: 'Natural Dyeing Process',
      subtitle: 'Using organic materials and traditional methods for vibrant, lasting colors',
      cta: 'Learn More'
    },
    {
      id: 2,
      image: '/images/IMG_2224-800x600-1.jpg',
      title: '54 Years of Heritage',
      subtitle: 'The ANOKHI archive spans decades of creativity and collaboration with the craft industry',
      cta: 'Explore Archive'
    },
    {
      id: 3,
      image: '/images/image.jpg',
      title: 'Personalized In-Store Experience',
      subtitle: 'Quality and constancy through our verdant workplace on the outskirts of Jaipur',
      cta: 'Visit Jaipur Farm'
    },
    {
      id: 4,
      image: '/images/stage2.jpg',
      title: 'Traditional Hand-Block Printing',
      subtitle: 'Master artisans preserving centuries-old techniques in our design studio',
      cta: 'Discover Craftsmanship'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="hero" className="py-20 px-4 bg-beige-50 relative overflow-hidden">
      {/* Classical Flower Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/images/bg/flowerbg.264b9eed29db2f60573c.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          backgroundPosition: '0 0'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Classical Header */}
        <div className="text-center mb-12">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Craft Conservation Since 1970
            </h5>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-brown-900 mb-6 leading-relaxed">
            {heroSlides[currentSlide].title}
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-brown-800 leading-relaxed mb-6">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="w-16 h-px bg-brown-600 mx-auto mb-8"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/shops"
              className="bg-brown-700 hover:bg-brown-800 text-cream-50 px-6 py-2 border border-brown-600 inline-flex items-center group transition-all duration-300 text-sm font-medium"
            >
              {heroSlides[currentSlide].cta}
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="bg-transparent hover:bg-brown-700 text-brown-700 hover:text-cream-50 border border-brown-600 hover:border-brown-800 px-6 py-2 inline-flex items-center group transition-all duration-300 text-sm font-medium"
            >
              <Play size={16} className="mr-1 group-hover:scale-110 transition-transform" />
              Our Story
            </Link>
          </div>
        </div>

        {/* Classical Image Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div 
                className="w-full h-32 bg-cover bg-center bg-no-repeat border border-brown-200"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-brown-900/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Classical Description */}
        <div className="text-center mt-8 py-6 bg-brown-50 border-t border-b border-brown-200">
          <p className="text-sm text-brown-800 max-w-2xl mx-auto leading-relaxed">
            Distinguished by its prints, silhouettes and product quality, Anokhi aspires to be an alternative role model for good business practices and the ongoing revival of traditional skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
