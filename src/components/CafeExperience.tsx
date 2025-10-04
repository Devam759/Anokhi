import { Heart, Leaf, Users, Award, Clock, MapPin } from 'lucide-react';

const CafeExperience = () => {
  const features = [
    {
      icon: Heart,
      title: 'Authentic Flavors',
      description: 'Experience genuine Indian cuisine prepared using traditional recipes and cooking methods passed down through generations.',
      color: 'from-terracotta-500 to-terracotta-600'
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We source fresh, organic ingredients daily from local farmers and markets to ensure the highest quality in every dish.',
      color: 'from-sage-500 to-sage-600'
    },
    {
      icon: Users,
      title: 'Family Recipes',
      description: 'Our menu features time-honored family recipes that have been perfected over decades of culinary tradition.',
      color: 'from-earth-500 to-earth-600'
    },
    {
      icon: Award,
      title: 'Heritage Setting',
      description: 'Dine in a beautifully restored heritage building that complements our museum and textile heritage perfectly.',
      color: 'from-terracotta-600 to-sage-600'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'The most authentic Indian food I\'ve had outside of home. The Dal Makhani is absolutely divine!'
    },
    {
      name: 'James Wilson',
      location: 'London',
      rating: 5,
      comment: 'A perfect complement to the museum visit. The heritage setting and delicious food made it unforgettable.'
    },
    {
      name: 'Amit Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Excellent service and the traditional recipes reminded me of my grandmother\'s cooking.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-earth-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            The Anokhi Café Experience
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            More than just a meal, our café offers an immersive cultural experience that 
            celebrates the rich culinary heritage of India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-4 group-hover:text-terracotta-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-earth-600 leading-relaxed group-hover:text-earth-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-earth-900 text-center mb-12">
            What Our Guests Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-earth-600 leading-relaxed mb-4 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-earth-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center">
                    <span className="text-terracotta-700 font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Café Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Operating Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Café Hours & Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-terracotta-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Operating Hours</h4>
                  <div className="space-y-1 text-earth-600">
                    <div>Monday - Sunday: 9:00 AM - 7:00 PM</div>
                    <div>Last order: 6:30 PM</div>
                    <div>Kitchen closes: 6:45 PM</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Location</h4>
                  <div className="space-y-1 text-earth-600">
                    <div>Anokhi Museum Grounds</div>
                    <div>Amber Fort Road, Jaipur</div>
                    <div>Rajasthan 302002</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-earth-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-2">Reservations</h4>
                  <div className="space-y-1 text-earth-600">
                    <div>Walk-ins welcome</div>
                    <div>Reservations recommended for groups</div>
                    <div>Call: +91-141-256-1021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Features */}
          <div className="bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Special Features
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terracotta-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Heritage Ambiance</h4>
                  <p className="text-earth-600 text-sm">Dine surrounded by traditional architecture and textile displays</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terracotta-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Outdoor Seating</h4>
                  <p className="text-earth-600 text-sm">Beautiful courtyard seating with views of the museum gardens</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terracotta-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Cultural Events</h4>
                  <p className="text-earth-600 text-sm">Regular cooking demonstrations and cultural performances</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terracotta-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Dietary Accommodations</h4>
                  <p className="text-earth-600 text-sm">Vegetarian, vegan, and gluten-free options available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terracotta-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Takeaway Available</h4>
                  <p className="text-earth-600 text-sm">Enjoy our food at home with our convenient takeaway service</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-earth-200">
              <a
                href="/contact"
                className="btn-primary w-full text-center block"
              >
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeExperience;
