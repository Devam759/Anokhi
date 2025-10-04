'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Info } from 'lucide-react';

const MuseumExhibits = () => {
  const [selectedExhibit, setSelectedExhibit] = useState(0);

  const exhibits = [
    {
      id: 1,
      title: 'History of Hand-Block Printing',
      description: 'Explore the evolution of hand-block printing from ancient times to modern applications, featuring rare artifacts and historical documents.',
      period: 'Ancient to Present',
      highlights: ['Rare 17th-century blocks', 'Historical textiles', 'Evolution timeline']
    },
    {
      id: 2,
      title: 'Master Artisans Gallery',
      description: 'Meet the skilled craftspeople who have dedicated their lives to preserving traditional textile arts through their exceptional work.',
      period: 'Contemporary',
      highlights: ['Artist profiles', 'Technique demonstrations', 'Award-winning pieces']
    },
    {
      id: 3,
      title: 'Natural Dyeing Techniques',
      description: 'Discover the ancient art of natural dyeing using plants, minerals, and organic materials to create vibrant, sustainable colors.',
      period: 'Traditional',
      highlights: ['Dye garden tour', 'Live demonstrations', 'Color samples']
    },
    {
      id: 4,
      title: 'Contemporary Applications',
      description: 'See how traditional techniques are being adapted for modern fashion, home décor, and lifestyle products.',
      period: 'Modern Era',
      highlights: ['Contemporary designs', 'Fashion collaborations', 'Innovation showcase']
    }
  ];

  const nextExhibit = () => {
    setSelectedExhibit((prev) => (prev + 1) % exhibits.length);
  };

  const prevExhibit = () => {
    setSelectedExhibit((prev) => (prev - 1 + exhibits.length) % exhibits.length);
  };

  return (
    <section id="exhibits" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Museum Exhibits
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the world of traditional Indian textile arts through 
            our carefully curated exhibits and interactive displays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Exhibit Carousel */}
          <div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Eye size={48} className="text-earth-400 mx-auto mb-4" />
                  <p className="text-earth-600 font-medium">Exhibit Preview</p>
                  <p className="text-earth-500 text-sm mt-2">
                    {exhibits[selectedExhibit].title}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevExhibit}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  aria-label="Previous exhibit"
                >
                  <ChevronLeft size={20} className="text-earth-600" />
                </button>
                
                <div className="flex space-x-2">
                  {exhibits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedExhibit(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedExhibit 
                          ? 'bg-terracotta-600 scale-125' 
                          : 'bg-earth-300 hover:bg-earth-400'
                      }`}
                      aria-label={`View exhibit ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextExhibit}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  aria-label="Next exhibit"
                >
                  <ChevronRight size={20} className="text-earth-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Exhibit Details */}
          <div>
            <div className="bg-earth-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-terracotta-600 rounded-full flex items-center justify-center">
                  <Info size={20} className="text-white" />
                </div>
                <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full text-sm font-medium">
                  {exhibits[selectedExhibit].period}
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-earth-900 mb-4">
                {exhibits[selectedExhibit].title}
              </h3>

              <p className="text-earth-600 leading-relaxed mb-6">
                {exhibits[selectedExhibit].description}
              </p>

              <div>
                <h4 className="font-semibold text-earth-900 mb-3">Exhibit Highlights:</h4>
                <ul className="space-y-2">
                  {exhibits[selectedExhibit].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center space-x-3 text-earth-600">
                      <div className="w-2 h-2 bg-terracotta-600 rounded-full flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* All Exhibits Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-earth-900 text-center mb-12">
            All Exhibits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exhibits.map((exhibit, index) => (
              <div
                key={exhibit.id}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedExhibit === index ? 'border-terracotta-200' : 'border-transparent hover:border-earth-200'
                }`}
                onClick={() => setSelectedExhibit(index)}
              >
                <div className="aspect-video bg-gradient-to-br from-earth-100 to-terracotta-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye size={24} className="text-earth-400" />
                </div>
                <h4 className="font-serif font-semibold text-earth-900 mb-2">
                  {exhibit.title}
                </h4>
                <p className="text-sm text-earth-600 leading-relaxed">
                  {exhibit.description.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuseumExhibits;
