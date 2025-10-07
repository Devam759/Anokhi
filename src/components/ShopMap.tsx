'use client';

import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { shopsData } from '@/data/shops';

const ShopMap = () => {
  const [selectedShop, setSelectedShop] = useState(0);
  const shop = shopsData[selectedShop];

  return (
    <section className="section-padding heritage-section">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Store Locator
            </h5>
          </div>
          <h2 className="heritage-title text-3xl md:text-4xl mb-4">
            Find Us on the Map
          </h2>
          <p className="heritage-text text-xl">
            Locate our shops and plan your visit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shop Selector */}
          <div className="lg:col-span-1">
            <div className="heritage-card">
              <h3 className="text-xl font-serif font-bold text-brown-800 mb-6">
                Select Location
              </h3>
              <div className="space-y-3">
                {shopsData.map((shop, index) => (
                  <button
                    key={shop.id}
                    onClick={() => setSelectedShop(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedShop === index
                        ? 'bg-brown-50 border-2 border-brown-200'
                        : 'bg-cream-50 hover:bg-cream-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedShop === index
                          ? 'bg-brown-600 text-white'
                          : 'bg-brown-200 text-brown-600'
                      }`}>
                        <MapPin size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brown-800 mb-1">
                          {shop.name}
                        </h4>
                        <p className="text-sm heritage-text">
                          {shop.location}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="heritage-card">
              <div className="aspect-video bg-gradient-to-br from-brown-100 to-cream-100 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Navigation size={48} className="text-brown-400 mx-auto mb-4" />
                  <p className="heritage-text font-medium">Interactive Map</p>
                  <p className="text-brown-500 text-sm mt-2">
                    {shop.name} - {shop.location}
                  </p>
                </div>
              </div>

              {/* Shop Details */}
              <div className="border-t border-brown-200 pt-6">
                <h3 className="text-xl font-serif font-bold text-brown-800 mb-4">
                  {shop.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-2">Address</h4>
                    <p className="heritage-text text-sm leading-relaxed">
                      {shop.address}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-2">Contact</h4>
                    <p className="heritage-text text-sm">
                      Phone: {shop.phone}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-2">Hours</h4>
                    <div className="heritage-text text-sm space-y-1">
                      <div>Mon-Fri: {shop.hours.monday}</div>
                      <div>Sat: {shop.hours.saturday}</div>
                      <div>Sun: {shop.hours.sunday}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-2">Quick Actions</h4>
                    <div className="space-y-2">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brown-600 hover:text-brown-700 text-sm font-medium"
                      >
                        <Navigation size={14} className="mr-1" />
                        Get Directions
                      </a>
                      <br />
                      <a
                        href={`tel:${shop.phone}`}
                        className="inline-flex items-center text-brown-600 hover:text-brown-700 text-sm font-medium"
                      >
                        <MapPin size={14} className="mr-1" />
                        Call Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note about Google Maps Integration */}
        <div className="mt-12 heritage-card text-center">
          <p className="heritage-text mb-4">
            <strong>Note:</strong> For production deployment, integrate with Google Maps API to show actual interactive maps.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full">
              Google Maps API
            </span>
            <span className="bg-cream-100 text-brown-700 px-3 py-1 rounded-full">
              Interactive Markers
            </span>
            <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full">
              Directions Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopMap;
