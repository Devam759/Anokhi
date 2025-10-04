import { Mail, Phone, MapPin, Clock, Users, Heart } from 'lucide-react';
import brandData from '@/data/brand.json';

const ContactInfo = () => {
  const departments = [
    {
      icon: Mail,
      title: 'General Inquiries',
      email: 'info@anokhi.com',
      phone: '+91-141-256-1020',
      description: 'Questions about our products, services, or general information'
    },
    {
      icon: Users,
      title: 'Museum & Café',
      email: 'museum@anokhi.com',
      phone: '+91-141-256-1021',
      description: 'Museum visits, café reservations, and cultural programs'
    },
    {
      icon: Heart,
      title: 'Collaborations',
      email: 'collaborations@anokhi.com',
      phone: '+91-141-256-1022',
      description: 'Partnership opportunities, press inquiries, and media requests'
    }
  ];

  const quickLinks = [
    { name: 'Visit Our Shops', href: '/shops', description: 'Find our retail locations' },
    { name: 'Museum Information', href: '/museum', description: 'Plan your museum visit' },
    { name: 'Café Menu', href: '/cafe', description: 'View our authentic cuisine' },
    { name: 'Our Heritage', href: '/about', description: 'Learn about our story' }
  ];

  return (
    <section id="info" className="section-padding bg-earth-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team through multiple channels. We're here to help with 
            any questions about our products, services, or heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Departments */}
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-terracotta-600" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-4">
                  {dept.title}
                </h3>
                
                <p className="text-earth-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-terracotta-600 flex-shrink-0" />
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-earth-700 hover:text-terracotta-600 transition-colors text-sm"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-terracotta-600 flex-shrink-0" />
                    <a
                      href={`tel:${dept.phone}`}
                      className="text-earth-700 hover:text-terracotta-600 transition-colors text-sm"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Main Office & Museum
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-terracotta-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Address</h4>
                  <p className="text-earth-600 leading-relaxed">
                    {brandData.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Business Hours</h4>
                  <div className="space-y-1 text-earth-600">
                    <div>Monday - Sunday: 9:00 AM - 6:00 PM</div>
                    <div>Museum: 10:00 AM - 5:00 PM</div>
                    <div>Café: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-earth-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Phone Numbers</h4>
                  <div className="space-y-1 text-earth-600">
                    <div>Main Office: {brandData.contact.phone}</div>
                    <div>Museum: +91-141-256-1021</div>
                    <div>Café: +91-141-256-1022</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-earth-200">
              <a
                href={`tel:${brandData.contact.phone}`}
                className="btn-primary w-full text-center block"
              >
                <Phone size={18} className="inline mr-2" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Quick Links
            </h3>
            
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    <h4 className="font-semibold text-earth-900 group-hover:text-terracotta-600 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-earth-600 text-sm">
                      {link.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-earth-400 group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-earth-200">
              <h4 className="font-semibold text-earth-900 mb-4">Response Time</h4>
              <div className="space-y-2 text-earth-600 text-sm">
                <div className="flex justify-between">
                  <span>Email inquiries:</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone calls:</span>
                  <span className="font-medium">During business hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Urgent matters:</span>
                  <span className="font-medium">Immediate response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
