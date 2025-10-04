import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import brandData from '@/data/brand.json';

const ContactHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-600 to-terracotta-600">
        <div className="absolute inset-0 bg-earth-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max section-padding">
          <div className="max-w-4xl">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-earth-100 mb-8 leading-relaxed">
                We'd love to hear from you. Whether you have questions about our products, 
                want to visit our museum, or are interested in collaboration, we're here to help.
              </p>
              
              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-white">
                  <Mail size={24} className="text-terracotta-300" />
                  <div>
                    <div className="text-sm text-earth-200">Email</div>
                    <div className="font-semibold">{brandData.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Phone size={24} className="text-terracotta-300" />
                  <div>
                    <div className="text-sm text-earth-200">Phone</div>
                    <div className="font-semibold">{brandData.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Clock size={24} className="text-terracotta-300" />
                  <div>
                    <div className="text-sm text-earth-200">Hours</div>
                    <div className="font-semibold">9 AM - 6 PM</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#form"
                  className="btn-primary inline-flex items-center group"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#info"
                  className="btn-secondary inline-flex items-center group"
                >
                  <MapPin size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
