'use client';

import { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      image: '/images/20091116-AnokhiJaipur11.jpg',
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

  // Removed auto-scroll - images now only change on manual navigation

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
        </div>

        {/* Center-Focused Image Carousel with Side Previews */}
        <div className="relative overflow-hidden bg-brown-100 rounded-lg">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full relative"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={slide.image}
                    alt={`Heritage image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-brown-900/10"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cream-100 scale-125' 
                    : 'bg-brown-600 hover:bg-brown-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Traditional Heritage Text Section */}
        <div className="mt-16 text-center">
          {/* Main Heritage Title */}
          <div className="mb-8">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              style={{ 
                fontFamily: 'Cinzel, serif',
                color: '#8B4513', // Maroon color
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {/* ANOKHI */}
            </h1>
            <div 
              className="text-2xl md:text-3xl font-medium mb-6"
              style={{ 
                fontFamily: 'Libre Baskerville, serif',
                color: '#B8860B', // Gold color
                fontWeight: '400'
              }}
            >
              Handcrafted Heritage, Timeless Design
            </div>
          </div>

          {/* Ornamental Border */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-px" style={{ backgroundColor: '#B8860B' }}></div>
            <div className="mx-4 text-2xl" style={{ color: '#8B4513' }}>◆</div>
            <div className="w-16 h-px" style={{ backgroundColor: '#B8860B' }}></div>
          </div>

          {/* Heritage Description */}
          <div className="max-w-4xl mx-auto">
            <p 
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ 
                fontFamily: 'Libre Baskerville, serif',
                color: '#654321', // Dark brown
                lineHeight: '1.8'
              }}
            >
              For over five decades, Anokhi has been preserving traditional Indian textile arts while embracing contemporary design sensibilities. Our commitment to craft conservation and sustainable practices creates a bridge between heritage and innovation.
            </p>
            
            <p 
              className="text-base md:text-lg"
              style={{ 
                fontFamily: 'Libre Baskerville, serif',
                color: '#8B4513', // Maroon
                fontStyle: 'italic'
              }}
            >
              "Distinguished by its prints, silhouettes and product quality, Anokhi aspires to be an alternative role model for good business practices and the ongoing revival of traditional skills."
            </p>
          </div>

          {/* Decorative Bottom Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B8860B' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8B4513' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B8860B' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
