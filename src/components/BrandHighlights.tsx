'use client';

import Link from 'next/link';

const BrandHighlights = () => {
  return (
    <section id="values" className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#fdf9f0' }}>
      {/* Traditional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A8826B' fill-opacity='0.08'%3E%3Cpath d='M60 60c0-33.137-26.863-60-60-60v60h60zm0 0c0 33.137 26.863 60 60 60V60H60z'/%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30zm0 0c0 16.569 13.431 30 30 30V30H30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Traditional Header with Ornamental Border */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 border-2 border-brown-800 transform rotate-1"></div>
            <div className="bg-cream-50 border-2 border-brown-800 px-8 py-4 relative">
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 uppercase tracking-wider">
                Our Heritage Journey
              </h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-brown-800 leading-relaxed mb-8">
              For over five decades, Anokhi has been preserving traditional Indian textile arts while embracing contemporary design sensibilities.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-px bg-brown-600"></div>
              <div className="w-3 h-3 bg-brown-600 transform rotate-45"></div>
              <div className="w-16 h-px bg-brown-600"></div>
            </div>
          </div>
        </div>

        {/* Simplified Heritage Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Craft Heritage */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brown-900 text-center border-b-2 border-brown-600 pb-2">
              Traditional Craftsmanship
            </h3>
            
             {/* Featured Image */}
             <div className="relative">
               <div 
                 className="w-full h-64 bg-cover bg-center rounded-lg"
                 style={{ backgroundImage: `url('/images/stage2.jpg')` }}
               >
               </div>
             </div>

            {/* Simple Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div 
                  className="h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('/images/stage3.jpg')` }}
                ></div>
              </div>
              
              <div className="relative">
                <div 
                  className="h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('/images/IMG_2224-800x600-1.jpg')` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Side - Artisan Stories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brown-900 text-center border-b-2 border-brown-600 pb-2">
              Master Artisans
            </h3>
            
             {/* Artisan Feature - Slightly larger */}
             <div className="bg-cream-50 p-6 rounded-lg">
               <div className="text-center mb-5">
                 <div 
                   className="w-32 h-36 bg-cover bg-center border-2 border-brown-600 rounded-full mx-auto mb-5"
                   style={{ backgroundImage: `url('/images/image.jpg')` }}
                 ></div>
                 <h4 className="text-xl font-bold text-brown-900">Mahesh ji - Master Patwa</h4>
                 <p className="text-base text-brown-700">Master Threadwork Artisan</p>
               </div>
               
               <p className="text-brown-800 text-base leading-relaxed text-center">
                 A highly-skilled patwa specializing in traditional threadwork, mastering decorative finishes like fundas (tassels), nadas (cords) and intricate beadwork, preserving ancient techniques passed down through family generations.
               </p>
             </div>

          </div>
        </div>

        {/* Traditional Craftsmanship Process */}
        {/* <div className="bg-white border-2 border-brown-300 p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brown-900 mb-4">Traditional Craftsmanship Process</h3>
            <div className="w-20 h-1 bg-brown-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Design Creation</h4>
              <p className="text-brown-700 text-sm">Master craftsmen create intricate designs inspired by traditional motifs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Block Carving</h4>
              <p className="text-brown-700 text-sm">Hand-carved wooden blocks using traditional tools and techniques</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-brown-900 mb-2">Natural Dyeing</h4>
              <p className="text-brown-700 text-sm">Eco-friendly natural dyeing process using organic materials</p>
            </div>
          </div>
        </div> */}

        {/* Heritage Statistics */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white border-2 border-brown-300 p-6">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-brown-900 mb-2">55+</div>
            <div className="text-brown-700 font-medium">Years of Excellence</div>
          </div>
          <div className="text-center bg-white border-2 border-brown-300 p-6">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-brown-900 mb-2">3</div>
            <div className="text-brown-700 font-medium">Prime Locations</div>
          </div>
          <div className="text-center bg-white border-2 border-brown-300 p-6">
            <div className="w-16 h-16 bg-brown-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-brown-900 mb-2">100+</div>
            <div className="text-brown-700 font-medium">Master Artisans</div>
          </div>
        </div> */}

        {/* Traditional Quote Section */}
        <div className="text-center py-12 bg-brown-100 border-2 border-brown-300 relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl text-brown-400">"</div>
          <blockquote className="text-xl md:text-2xl font-medium text-brown-800 max-w-4xl mx-auto leading-relaxed italic">
            Distinguished by its prints, silhouettes and product quality, Anokhi aspires to be an alternative role model for good business practices and the ongoing revival of traditional skills.
          </blockquote>
          <div className="absolute bottom-4 right-1/4 text-4xl text-brown-400">"</div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center bg-brown-800 hover:bg-brown-900 text-cream-50 px-8 py-4 border-2 border-brown-800 hover:border-brown-900 transition-all duration-300 font-medium"
          >
            Explore Our Complete Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;