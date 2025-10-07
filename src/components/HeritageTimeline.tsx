'use client';

import { useState } from 'react';
import heritageData from '@/data/heritage.json';

const HeritageTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="section-padding heritage-section">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Timeline of Excellence
            </h5>
          </div>
          <h1 className="heritage-title text-4xl md:text-6xl mb-6">
            Our Heritage
          </h1>
          <p className="heritage-text text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings in 1970 to becoming a global ambassador of traditional Indian textile arts, 
            discover the milestones that shaped our journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brown-400 to-cream-600 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {heritageData.timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-brown-600 rounded-full transform -translate-x-1/2 z-10 border-2 border-cream-50"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div
                    className={`heritage-card cursor-pointer ${
                      activeYear === index ? 'ring-2 ring-brown-300' : ''
                    }`}
                    onClick={() => setActiveYear(activeYear === index ? -1 : index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-bold text-brown-600">
                        {item.year}
                      </span>
                      <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center">
                        <span className="text-brown-700 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-semibold text-brown-800 mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="heritage-text leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expanded Content */}
                    {activeYear === index && (
                      <div className="mt-6 pt-6 border-t border-brown-200">
                        <div className="aspect-video bg-brown-50 rounded-lg flex items-center justify-center">
                          <span className="text-brown-400">Image: {item.title}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 ornate-border p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-brown-600 mb-2">
                50+
              </div>
              <div className="text-brown-500 font-medium">Years of Heritage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-brown-600 mb-2">
                100+
              </div>
              <div className="text-brown-500 font-medium">Master Artisans</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-brown-600 mb-2">
                3
              </div>
              <div className="text-brown-500 font-medium">Retail Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-brown-600 mb-2">
                1M+
              </div>
              <div className="text-brown-500 font-medium">Pieces Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageTimeline;
