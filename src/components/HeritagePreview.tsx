import Link from 'next/link';
import { Star, Award, Shield, Heart } from 'lucide-react';
import heritageData from '@/data/heritage.json';

const HeritagePreview = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#f3ede7' }}>
      {/* Traditional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A8826B' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v50h50zm0 0c0 27.614 22.386 50 50 50V50H50z'/%3E%3Cpath d='M25 25c0-13.807-11.193-25-25-25v25h25zm0 0c0 13.807 11.193 25 25 25V25H25z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Traditional Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 border-2 border-brown-800 transform -rotate-1"></div>
            <div className="bg-cream-50 border-2 border-brown-800 px-10 py-5 relative">
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 uppercase tracking-wider">
                Our Heritage Legacy
              </h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-brown-800 leading-relaxed mb-8">
    
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="w-20 h-px bg-brown-600"></div>
              <div className="w-4 h-4 bg-brown-600 transform rotate-45"></div>
              <div className="w-20 h-px bg-brown-600"></div>
            </div>
          </div>
        </div>

        {/* Traditional Heritage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side - Heritage Story */}
          <div className="space-y-8">
            <div className="bg-white border-2 border-brown-400 p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brown-800 rounded-full flex items-center justify-center mr-4">
                  <Star size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-900">Founded in 1970</h3>
                  <p className="text-brown-700 text-sm">The Beginning of a Legacy</p>
                </div>
              </div>
              <p className="text-brown-800 leading-relaxed mb-6">
                Anokhi was established with a clear mission: to preserve and promote traditional Indian textile arts while creating contemporary designs that honor centuries-old craftsmanship.
              </p>
              <div className="border-l-4 border-brown-600 pl-4">
                <p className="text-brown-700 italic">
                  "Every thread tells a story, every pattern preserves a tradition."
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-brown-400 p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brown-700 rounded-full flex items-center justify-center mr-4">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-900">Design Excellence</h3>
                  <p className="text-brown-700 text-sm">Innovation Meets Tradition</p>
                </div>
              </div>
              <p className="text-brown-800 leading-relaxed mb-6">
                Our design studio in Jaipur serves as the creative heart where traditional techniques meet contemporary aesthetics, resulting in timeless pieces that celebrate heritage.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-brown-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="w-8 h-8 bg-brown-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="w-8 h-8 bg-brown-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Heritage Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div 
                  className="w-full h-56 bg-cover bg-center border-2 border-brown-300 shadow-lg"
                  style={{ backgroundImage: `url('/images/stage7.jpg')` }}
                >
                  <div className="absolute inset-0 bg-brown-900/30 group-hover:bg-brown-900/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm bg-brown-800/80 px-3 py-1">Traditional Techniques</h4>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div 
                  className="w-full h-56 bg-cover bg-center border-2 border-brown-300 shadow-lg"
                  style={{ backgroundImage: `url('/images/stage8.jpg')` }}
                >
                  <div className="absolute inset-0 bg-brown-900/30 group-hover:bg-brown-900/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm bg-brown-800/80 px-3 py-1">Artisan Craft</h4>
                  </div>
                </div>
              </div>
              <div className="relative group col-span-2">
                <div 
                  className="w-full h-40 bg-cover bg-center border-2 border-brown-300 shadow-lg"
                  style={{ backgroundImage: `url('/images/IMG_2224-800x600-1.jpg')` }}
                >
                  <div className="absolute inset-0 bg-brown-900/30 group-hover:bg-brown-900/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm bg-brown-800/80 px-3 py-1">Heritage Collection</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white border-2 border-brown-300 p-6 hover:border-brown-600 transition-colors">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} className="text-white" />
            </div>
            <h4 className="text-lg font-bold text-brown-900 mb-2">Craft Conservation</h4>
            <p className="text-brown-700 text-sm">Preserving traditional skills for future generations</p>
          </div>
          <div className="text-center bg-white border-2 border-brown-300 p-6 hover:border-brown-600 transition-colors">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} className="text-white" />
            </div>
            <h4 className="text-lg font-bold text-brown-900 mb-2">Quality Assurance</h4>
            <p className="text-brown-700 text-sm">Uncompromising standards in every creation</p>
          </div>
          <div className="text-center bg-white border-2 border-brown-300 p-6 hover:border-brown-600 transition-colors">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={24} className="text-white" />
            </div>
            <h4 className="text-lg font-bold text-brown-900 mb-2">Artisan Support</h4>
            <p className="text-brown-700 text-sm">Empowering craftsmen and their communities</p>
          </div>
          <div className="text-center bg-white border-2 border-brown-300 p-6 hover:border-brown-600 transition-colors">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-white" />
            </div>
            <h4 className="text-lg font-bold text-brown-900 mb-2">Design Innovation</h4>
            <p className="text-brown-700 text-sm">Contemporary aesthetics rooted in tradition</p>
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="bg-white border-2 border-brown-400 p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brown-900 mb-4">Our Heritage Timeline</h3>
            <div className="w-24 h-1 bg-brown-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1970</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Foundation</h4>
              <p className="text-brown-700 text-sm">Anokhi established with craft conservation mission</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1980s</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Expansion</h4>
              <p className="text-brown-700 text-sm">Design studio and craft development center</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Today</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Recognition</h4>
              <p className="text-brown-700 text-sm">Global recognition for heritage preservation</p>
            </div>
          </div>
        </div>

        {/* Traditional Quote */}
        <div className="text-center py-12 bg-brown-100 border-2 border-brown-300 relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl text-brown-400">"</div>
          <blockquote className="text-xl md:text-2xl font-medium text-brown-800 max-w-4xl mx-auto leading-relaxed italic">
            For over five decades, Anokhi has been at the forefront of preserving and promoting traditional Indian textile arts while embracing contemporary design sensibilities.
          </blockquote>
          <div className="absolute bottom-4 right-1/4 text-4xl text-brown-400">"</div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center bg-brown-800 hover:bg-brown-900 text-cream-50 px-10 py-4 border-2 border-brown-800 hover:border-brown-900 transition-all duration-300 font-medium"
          >
            Discover Our Complete Heritage
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeritagePreview;