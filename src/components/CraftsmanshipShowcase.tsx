import craftsmanshipData from '@/data/craftsmanship.json';
import Image from 'next/image';

const CraftsmanshipShowcase = () => {
  return (
    <section className="section-padding heritage-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Traditional Techniques
            </h5>
          </div>
          <h2 className="heritage-title text-4xl md:text-5xl mb-6">
            {craftsmanshipData.title}
          </h2>
          <p className="heritage-text text-lg max-w-3xl mx-auto leading-relaxed">
            {craftsmanshipData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {craftsmanshipData.techniques.map((technique, index) => (
            <div key={technique.id} className="heritage-card group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-brown-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">{technique.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-3 group-hover:text-brown-600 transition-colors">
                  {technique.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="heritage-text leading-relaxed">
                  {technique.description}
                </p>
                
                <div className="bg-brown-50 p-4 rounded-lg">
                  <h4 className="text-sm font-bold text-brown-800 mb-2">Process:</h4>
                  <p className="heritage-text text-sm leading-relaxed">
                    {technique.process}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artisan Spotlight */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="heritage-title text-3xl mb-6">
              Meet Our Master Artisans
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {craftsmanshipData.artisans.map((artisan, index) => (
              <div key={artisan.name} className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="heritage-card">
                  <h4 className="text-xl font-bold text-brown-800 mb-3">
                    {artisan.name}
                  </h4>
                  <p className="text-lg font-semibold text-brown-600 mb-3">
                    {artisan.specialty}
                  </p>
                  <p className="heritage-text leading-relaxed">
                    {artisan.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className={`${craftsmanshipData.artisans.length % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="heritage-card">
                <h4 className="text-xl font-bold text-brown-800 mb-4">
                  Our Collaborators
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {craftsmanshipData.collaborators.map((collaborator, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brown-500 rounded-full"></div>
                      <span className="heritage-text font-medium">{collaborator}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipShowcase;