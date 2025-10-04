'use client';

import { useState } from 'react';
import heritageData from '@/data/heritage.json';

const HeritageTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-earth-900 mb-6">
            Our Heritage
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings in 1969 to becoming a global ambassador of traditional Indian textile arts, 
            discover the milestones that shaped our journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-earth-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {heritageData.timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-terracotta-600 rounded-full transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-earth-100 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                      activeYear === index ? 'ring-2 ring-terracotta-200' : ''
                    }`}
                    onClick={() => setActiveYear(activeYear === index ? -1 : index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-bold text-terracotta-600">
                        {item.year}
                      </span>
                      <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                        <span className="text-terracotta-700 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-semibold text-earth-900 mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-earth-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expanded Content */}
                    {activeYear === index && (
                      <div className="mt-6 pt-6 border-t border-earth-100">
                        <div className="aspect-video bg-earth-50 rounded-lg flex items-center justify-center">
                          <span className="text-earth-400">Image: {item.title}</span>
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
        <div className="mt-20 bg-earth-50 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-terracotta-600 mb-2">
                55+
              </div>
              <div className="text-earth-600 font-medium">Years of Heritage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-sage-600 mb-2">
                100+
              </div>
              <div className="text-earth-600 font-medium">Master Artisans</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-earth-600 mb-2">
                3
              </div>
              <div className="text-earth-600 font-medium">Retail Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-terracotta-700 mb-2">
                1M+
              </div>
              <div className="text-earth-600 font-medium">Pieces Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageTimeline;
