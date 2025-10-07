'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import Image from "next/image";
import { shopsData } from '@/data/shops';

// Extract unique cities from shops data
const getUniqueCities = (): string[] => {
  const cities = new Set<string>();
  shopsData.forEach(shop => {
    // Extract city name from location (before comma)
    const cityName = shop.location.split(',')[0].trim();
    cities.add(cityName);
  });
  return Array.from(cities).sort();
};

// Get shops for a specific city
const getShopsByCity = (cityName: string) => {
  return shopsData.filter(shop => shop.location.split(',')[0].trim() === cityName);
};

const ShopsDirectory = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const cities = getUniqueCities();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#faf9f5] text-[#222] p-6 md:p-8 lg:p-12">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 bg-[#f5f3ee] border-r border-gray-200 p-6 rounded-l-lg">
        <h2 className="text-lg font-semibold mb-4 text-[#8b5e3b]">Anokhi Stores</h2>
        <ul className="space-y-2 text-sm">
          {cities.map((city) => {
            const cityShops = getShopsByCity(city);
            const isSelected = selectedCity === city;
            
            return (
              <li 
                key={city} 
                onClick={() => setSelectedCity(city)}
                className={`hover:text-[#8b5e3b] cursor-pointer transition-colors duration-200 py-1 ${
                  isSelected ? 'text-[#8b5e3b] font-medium' : ''
                }`}
              >
                {city} {cityShops.length > 1 ? '+' : ''}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-10 lg:p-12 bg-white rounded-r-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2 text-[#8b5e3b]">Our Shops</h1>
        
        {selectedCity ? (
          <div>
            <div className="text-[17px] leading-8 space-y-5 mb-10">
              <p>
                Discover our {selectedCity} locations and experience the full range of our handcrafted textiles, 
                lifestyle products, and heritage collections.
              </p>
            </div>

            {/* Store Details */}
            <div className="space-y-8">
              {getShopsByCity(selectedCity).map((shop) => (
                <div key={shop.id} className="border-t pt-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Shop Image */}
                    <div className="h-48 bg-gradient-to-br from-[#f5f3ee] to-[#faf9f5] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#8b5e3b] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <span className="text-xl font-bold text-white">
                            {shop.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-[#8b5e3b] font-medium text-sm">Shop Image</span>
                      </div>
                    </div>

                    {/* Shop Details */}
                    <div className="p-8">
                      {/* Shop Header with Heritage Styling */}
                      <div className="text-center mb-8 pb-6 border-b border-[#f5f3ee]">
                        <h3 className="text-2xl font-serif font-bold text-[#8b5e3b] mb-3">
                          {shop.name}
                        </h3>
                        <div className="inline-block border-t border-b border-[#8b5e3b] px-4 py-1 mb-3">
                          <p className="text-sm text-[#8b5e3b] uppercase tracking-wider font-medium">
                            {shop.location}
                          </p>
                        </div>
                        <p className="text-[17px] leading-8 text-[#666] max-w-2xl mx-auto">
                          {shop.description}
                        </p>
                      </div>

                      {/* Contact Info with Heritage Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#faf9f5] rounded-lg px-8 py-4 border border-[#f5f3ee]">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-[#8b5e3b] rounded-full flex items-center justify-center flex-shrink-0">
                              <MapPin size={16} className="text-white" />
                            </div>
                            <div>
                              <h4 className="font-serif font-bold text-[#8b5e3b] mb-1 text-base">Address</h4>
                              <p className="text-sm leading-5 text-[#666]">{shop.address}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-[#faf9f5] rounded-lg px-8 py-4 border border-[#f5f3ee]">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-[#8b5e3b] rounded-full flex items-center justify-center flex-shrink-0">
                              <Clock size={16} className="text-white" />
                            </div>
                            <div>
                              <h4 className="font-serif font-bold text-[#8b5e3b] mb-1 text-base">Store Hours</h4>
                              <div className="text-sm leading-5 text-[#666] space-y-0.5">
                                <div>Mon-Fri: {shop.hours.monday}</div>
                                <div>Sat-Sun: {shop.hours.saturday}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Card */}
                      <div className="bg-[#faf9f5] rounded-lg px-8 py-4 border border-[#f5f3ee] mb-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-[#8b5e3b] rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone size={16} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-serif font-bold text-[#8b5e3b] mb-1 text-base">Contact</h4>
                            <a
                              href={`tel:${shop.phone}`}
                              className="text-sm text-[#8b5e3b] hover:text-[#7a4f32] transition-colors font-medium"
                            >
                              {shop.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons with Heritage Styling */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#8b5e3b] text-white px-8 py-4 rounded-lg text-center hover:bg-[#7a4f32] transition-colors duration-200 flex items-center justify-center group font-medium text-[17px] shadow-lg hover:shadow-xl"
                        >
                          <MapPin size={20} className="mr-3" />
                          Get Directions
                          <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                        
                        <a
                          href={`tel:${shop.phone}`}
                          className="flex-1 border-2 border-[#8b5e3b] text-[#8b5e3b] px-8 py-4 rounded-lg text-center hover:bg-[#8b5e3b] hover:text-white transition-colors duration-200 flex items-center justify-center font-medium text-[17px] hover:shadow-lg"
                        >
                          <Phone size={20} className="mr-3" />
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-[17px] leading-8 space-y-5 mb-10">
              <p>
                There are 25 ANOKHI shops located in towns and cities throughout
                India. Most of our shops carry the full ANOKHI range of items. A
                wider assortment of our hand-crafted womenswear, menswear and
                childrenswear – as well as sleepwear, soft furnishings and
                accessories – is available in the larger shops.
              </p>
              <p>
                The small shop at the <em>Anokhi Museum of Hand Printing</em> (AMHP)
                carries different items to the ANOKHI shops. Stock includes
                limited-edition textile pieces, craft publications and yardage of
                traditional block-prints relating to the exhibits.
              </p>
            </div>

            {/* Image Section */}
            <div className="border-t pt-8">
              <div className="aspect-video bg-gradient-to-br from-[#f5f3ee] to-[#faf9f5] rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#8b5e3b] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                  <span className="text-[#8b5e3b] font-medium text-lg">Anokhi Store Interior</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopsDirectory;
