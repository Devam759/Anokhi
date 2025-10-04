import { MapPin, Navigation, Clock, Car, Phone } from 'lucide-react';
import brandData from '@/data/brand.json';

const ContactMap = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Find Us
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Jaipur, our museum and main office are easily accessible 
            by various modes of transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="bg-earth-50 rounded-2xl p-8">
            <div className="aspect-video bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Navigation size={48} className="text-earth-400 mx-auto mb-4" />
                <p className="text-earth-600 font-medium">Interactive Map</p>
                <p className="text-earth-500 text-sm mt-2">
                  Anokhi Museum, Jaipur
                </p>
              </div>
            </div>

            {/* Map Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(brandData.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center group"
              >
                <Navigation size={18} className="mr-2" />
                Get Directions
              </a>
              <a
                href={`tel:${brandData.contact.phone}`}
                className="btn-secondary flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Call for Directions
              </a>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-earth-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-terracotta-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-earth-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {brandData.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-earth-50 rounded-2xl p-6">
              <h3 className="text-xl font-serif font-semibold text-earth-900 mb-6">
                Getting Here
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car size={20} className="text-terracotta-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-earth-900">By Car</h4>
                    <p className="text-earth-600 text-sm">
                      Free parking available on-site. Located 11 km from Jaipur city center.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-earth-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">🚌</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">By Bus</h4>
                    <p className="text-earth-600 text-sm">
                      Bus routes 5, 8, and 12 stop near the museum entrance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-earth-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">🚕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">By Taxi/Rickshaw</h4>
                    <p className="text-earth-600 text-sm">
                      Auto-rickshaws and taxis available from city center (₹200-300).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-gradient-to-br from-sage-50 to-terracotta-50 rounded-2xl p-6">
              <h3 className="text-xl font-serif font-semibold text-earth-900 mb-4">
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-earth-700">Amber Fort</span>
                  <span className="text-earth-600 text-sm">2 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-earth-700">Jaigarh Fort</span>
                  <span className="text-earth-600 text-sm">3 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-earth-700">Nahargarh Fort</span>
                  <span className="text-earth-600 text-sm">5 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-earth-700">City Palace</span>
                  <span className="text-earth-600 text-sm">11 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-earth-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-terracotta-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-earth-900 mb-2">
                Best Time to Visit
              </h3>
              <p className="text-earth-600 text-sm">
                October to March offers the most pleasant weather for exploring our museum and enjoying the café.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation size={24} className="text-sage-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-earth-900 mb-2">
                Easy Navigation
              </h3>
              <p className="text-earth-600 text-sm">
                Well-marked roads and clear signage make it easy to find us. GPS coordinates available on request.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={24} className="text-earth-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-earth-900 mb-2">
                Parking Available
              </h3>
              <p className="text-earth-600 text-sm">
                Free parking for all visitors. Valet service available during peak hours and special events.
              </p>
            </div>
          </div>
        </div>

        {/* Note about Google Maps Integration */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg text-center border border-earth-100">
          <p className="text-earth-600 mb-4">
            <strong>Note:</strong> For production deployment, integrate with Google Maps API for interactive maps with real-time directions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-terracotta-100 text-terracotta-700 px-3 py-1 rounded-full">
              Google Maps API
            </span>
            <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full">
              Real-time Directions
            </span>
            <span className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full">
              Street View
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
