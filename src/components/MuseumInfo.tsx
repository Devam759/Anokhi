import { Clock, MapPin, Users, Camera, BookOpen, Gift } from 'lucide-react';

const MuseumInfo = () => {
  const features = [
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Sunday: 10:00 AM - 5:00 PM',
        'Last entry: 4:30 PM',
        'Closed on public holidays'
      ],
      color: 'from-terracotta-500 to-terracotta-600'
    },
    {
      icon: Users,
      title: 'Guided Tours',
      details: [
        'Available in English & Hindi',
        'Duration: 45-60 minutes',
        'Maximum 20 people per group'
      ],
      color: 'from-sage-500 to-sage-600'
    },
    {
      icon: Camera,
      title: 'Photography',
      details: [
        'Photography allowed in designated areas',
        'No flash photography',
        'Commercial photography by appointment'
      ],
      color: 'from-earth-500 to-earth-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Programs',
      details: [
        'School group visits welcome',
        'Workshop sessions available',
        'Research access by appointment'
      ],
      color: 'from-terracotta-600 to-sage-600'
    }
  ];

  const amenities = [
    { icon: Gift, iconText: '', name: 'Museum Shop', description: 'Handcrafted souvenirs and textiles' },
    { icon: null, iconText: '☕', name: 'Café', description: 'Traditional Indian cuisine and beverages' },
    { icon: null, iconText: '🚗', name: 'Parking', description: 'Free parking available on-site' },
    { icon: null, iconText: '♿', name: 'Accessibility', description: 'Wheelchair accessible throughout' }
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Visitor Information
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to make the most of your visit to the Anokhi Museum.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-4">
                  {feature.title}
                </h3>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-earth-600">
                      <div className="w-1.5 h-1.5 bg-terracotta-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Admission & Pricing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Admission & Pricing
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-earth-100">
                <span className="font-medium text-earth-900">Adults</span>
                <span className="font-bold text-terracotta-600">₹200</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-earth-100">
                <span className="font-medium text-earth-900">Students (with ID)</span>
                <span className="font-bold text-terracotta-600">₹100</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-earth-100">
                <span className="font-medium text-earth-900">Children (5-12 years)</span>
                <span className="font-bold text-terracotta-600">₹50</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-earth-100">
                <span className="font-medium text-earth-900">Children (under 5)</span>
                <span className="font-bold text-terracotta-600">Free</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-earth-900">Guided Tour (per group)</span>
                <span className="font-bold text-terracotta-600">₹500</span>
              </div>
            </div>

            <div className="bg-terracotta-50 rounded-lg p-4">
              <p className="text-terracotta-700 text-sm">
                <strong>Note:</strong> All prices are subject to change. Group discounts available for 10+ visitors.
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Amenities & Facilities
            </h3>
            
            <div className="space-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {amenity.icon ? <amenity.icon size={18} className="text-earth-600" /> : <span className="text-lg">{amenity.iconText}</span>}
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-1">
                      {amenity.name}
                    </h4>
                    <p className="text-earth-600 text-sm">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-earth-100">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-terracotta-600" />
                <div>
                  <h4 className="font-semibold text-earth-900">Location</h4>
                  <p className="text-earth-600 text-sm">
                    Anokhi Museum, Amber Fort Road, Jaipur, Rajasthan 302002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuseumInfo;
