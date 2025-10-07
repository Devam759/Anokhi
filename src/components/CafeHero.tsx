import { Clock, MapPin, Users, Star, Utensils, Leaf, Coffee } from 'lucide-react';
import Image from 'next/image';

const CafeHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/anokhi cafe/20130129-IMG_0434copy.jpg"
          alt="Anokhi Café Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-maroon-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max section-padding">
          <div className="max-w-4xl">
            <div className="animate-slide-up">
              <div className="inline-block border-t border-b border-gold-300 px-6 py-2 mb-6">
                <h5 className="text-sm text-gold-200 uppercase tracking-wider font-medium">
                  Heritage Café
                </h5>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Anokhi Café
              </h1>
              <p className="text-xl md:text-2xl text-gold-100 mb-8 leading-relaxed">
                From humble beginnings as a few tables in the shade to a beloved haven serving 
                fresh, organic produce from our farm and home-made delicacies.
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-white">
                  <Clock size={24} className="text-gold-300" />
                  <div>
                    <div className="text-sm text-gold-200">Hours</div>
                    <div className="font-semibold">9 AM - 7 PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <MapPin size={24} className="text-gold-300" />
                  <div>
                    <div className="text-sm text-gold-200">Location</div>
                    <div className="font-semibold">Museum Grounds</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Leaf size={24} className="text-gold-300" />
                  <div>
                    <div className="text-sm text-gold-200">Philosophy</div>
                    <div className="font-semibold">Vegetarian</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Coffee size={24} className="text-gold-300" />
                  <div>
                    <div className="text-sm text-gold-200">Since</div>
                    <div className="font-semibold">2007</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#menu"
                  className="btn-primary inline-flex items-center group"
                >
                  View Menu
                  <Utensils size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#experience"
                  className="btn-secondary inline-flex items-center group"
                >
                  Our Experience
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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

export default CafeHero;
