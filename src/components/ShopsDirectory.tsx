import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import shopsData from '@/data/shops.json';

const ShopsDirectory = () => {

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-earth-900 mb-6">
            Our Shops
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Visit our beautiful retail locations to experience the full range of our handcrafted textiles, 
            lifestyle products, and heritage collections in person.
          </p>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {shopsData.map((shop) => (
            <div
              key={shop.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100 overflow-hidden"
            >
              {/* Shop Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-terracotta-100 to-sage-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-terracotta-600">
                      {shop.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-earth-400 font-medium">Shop Image</span>
                </div>
              </div>

              {/* Shop Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-earth-900 group-hover:text-terracotta-600 transition-colors">
                    {shop.name}
                  </h3>
                  <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full text-sm font-medium">
                    {shop.location}
                  </span>
                </div>

                <p className="text-earth-600 mb-6 leading-relaxed">
                  {shop.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-terracotta-600 mt-1 flex-shrink-0" />
                    <span className="text-earth-700 text-sm">{shop.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-terracotta-600 flex-shrink-0" />
                    <div className="text-earth-700 text-sm">
                      <div className="font-medium mb-1">Store Hours:</div>
                      <div className="text-xs text-earth-600">
                        Mon-Fri: {shop.hours.monday}<br />
                        Sat-Sun: {shop.hours.saturday}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-terracotta-600 flex-shrink-0" />
                    <a
                      href={`tel:${shop.phone}`}
                      className="text-earth-700 hover:text-terracotta-600 transition-colors text-sm"
                    >
                      {shop.phone}
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center flex items-center justify-center group"
                  >
                    <MapPin size={18} className="mr-2" />
                    Get Directions
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href={`tel:${shop.phone}`}
                    className="btn-secondary text-center flex items-center justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-earth-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-earth-900 mb-6">
            Can't Visit Our Shops?
          </h2>
          <p className="text-xl text-earth-600 mb-8 max-w-3xl mx-auto">
            While we encourage you to visit our physical locations to experience our products in person, 
            we also offer online consultations and virtual shopping experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Schedule Virtual Tour
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-flex items-center group"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopsDirectory;
