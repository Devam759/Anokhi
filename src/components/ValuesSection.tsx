import { Heart, Leaf, Users, Award } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'We are deeply passionate about preserving traditional textile arts and sharing the beauty of handcrafted products with the world.',
      color: 'from-terracotta-500 to-terracotta-600'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Our commitment to sustainability drives everything we do, from natural dyes to eco-friendly packaging and ethical production methods.',
      color: 'from-sage-500 to-sage-600'
    },
    {
      icon: Users,
      title: 'Artisan Empowerment',
      description: 'We believe in fair trade practices and empowering local artisans, ensuring they receive fair compensation and recognition for their skills.',
      color: 'from-earth-500 to-earth-600'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every product undergoes rigorous quality control to ensure it meets our high standards and represents the best of traditional craftsmanship.',
      color: 'from-terracotta-600 to-sage-600'
    }
  ];

  return (
    <section className="section-padding heritage-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Guiding Principles
            </h5>
          </div>
          <h2 className="heritage-title text-4xl md:text-5xl mb-6">
            Our Values
          </h2>
          <p className="heritage-text text-xl max-w-3xl mx-auto leading-relaxed">
            These core values guide everything we do, from design to production, 
            ensuring we stay true to our heritage while embracing innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group heritage-card"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-brown-800 mb-4 group-hover:text-brown-600 transition-colors">
                  {value.title}
                </h3>
                
                <p className="heritage-text leading-relaxed group-hover:text-brown-700 transition-colors">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 ornate-border p-12 text-center">
          <h3 className="heritage-title text-3xl mb-6">
            Our Mission
          </h3>
          <p className="heritage-text text-xl leading-relaxed max-w-4xl mx-auto">
            To preserve and promote the rich heritage of Indian textile arts while creating 
            contemporary products that celebrate traditional craftsmanship. We strive to bridge 
            the gap between heritage and modernity, ensuring that ancient techniques continue 
            to thrive in today's world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
