import { Phone, Mail, MapPin, Clock, Users, Car } from 'lucide-react';

const CafeInfo = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Visit Our Café
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Plan your visit to Anokhi Café and experience authentic Indian cuisine in a heritage setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-earth-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Contact Us
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-terracotta-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Phone</h4>
                  <a href="tel:+91-141-256-1021" className="text-earth-600 hover:text-terracotta-600 transition-colors">
                    +91-141-256-1021
                  </a>
                  <p className="text-earth-500 text-sm">For reservations and inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Email</h4>
                  <a href="mailto:cafe@anokhi.com" className="text-earth-600 hover:text-terracotta-600 transition-colors">
                    cafe@anokhi.com
                  </a>
                  <p className="text-earth-500 text-sm">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-earth-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Address</h4>
                  <p className="text-earth-600">
                    Anokhi Museum Grounds<br />
                    Amber Fort Road<br />
                    Jaipur, Rajasthan 302002
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-earth-100">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Hours & Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-terracotta-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Operating Hours</h4>
                  <div className="space-y-1 text-earth-600 text-sm">
                    <div>Monday - Sunday: 9:00 AM - 7:00 PM</div>
                    <div>Last order: 6:30 PM</div>
                    <div>Kitchen closes: 6:45 PM</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Capacity</h4>
                  <div className="space-y-1 text-earth-600 text-sm">
                    <div>Indoor seating: 30 guests</div>
                    <div>Outdoor courtyard: 20 guests</div>
                    <div>Private dining: Available</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Car size={20} className="text-earth-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Parking</h4>
                  <div className="space-y-1 text-earth-600 text-sm">
                    <div>Free parking available</div>
                    <div>Museum visitor parking</div>
                    <div>Valet service on weekends</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Quick Actions
            </h3>
            
            <div className="space-y-4">
              <a
                href="tel:+91-141-256-1021"
                className="w-full btn-primary text-center block"
              >
                <Phone size={18} className="inline mr-2" />
                Call for Reservations
              </a>
              
              <a
                href="mailto:cafe@anokhi.com"
                className="w-full btn-secondary text-center block"
              >
                <Mail size={18} className="inline mr-2" />
                Send Email Inquiry
              </a>
              
              <a
                href="https://maps.google.com/?q=Anokhi+Museum+Amber+Fort+Road+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border-2 border-earth-300 text-earth-700 hover:bg-earth-50 px-6 py-3 rounded-md font-medium transition-all duration-300 text-center block"
              >
                <MapPin size={18} className="inline mr-2" />
                Get Directions
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-earth-200">
              <h4 className="font-semibold text-earth-900 mb-3">Special Services</h4>
              <ul className="space-y-2 text-earth-600 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-terracotta-600 rounded-full"></span>
                  <span>Group dining arrangements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-terracotta-600 rounded-full"></span>
                  <span>Private event hosting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-terracotta-600 rounded-full"></span>
                  <span>Catering services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-terracotta-600 rounded-full"></span>
                  <span>Takeaway and delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-earth-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-earth-900 mb-6">
            Perfect for Every Occasion
          </h3>
          <p className="text-xl text-earth-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Whether you're visiting the museum, celebrating a special occasion, or simply 
            looking for authentic Indian cuisine, Anokhi Café provides the perfect setting 
            with exceptional food and warm hospitality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-semibold text-earth-900 mb-2">Museum Visitors</h4>
              <p className="text-earth-600 text-sm">Perfect lunch spot after exploring our textile exhibits</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="font-semibold text-earth-900 mb-2">Special Events</h4>
              <p className="text-earth-600 text-sm">Host your celebrations in our heritage setting</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold text-earth-900 mb-2">Family Dining</h4>
              <p className="text-earth-600 text-sm">Kid-friendly menu and spacious seating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeInfo;
