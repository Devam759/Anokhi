import { Heart, Leaf, Users, Award, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const CafeExperience = () => {
  const features = [
    {
      icon: Heart,
      title: 'Fresh Organic Produce',
      description: 'Experience farm-fresh ingredients grown locally at the Anokhi farm, picked and served fresh each day.',
      color: 'from-brown-500 to-brown-600'
    },
    {
      icon: Leaf,
      title: 'Vegetarian Philosophy',
      description: 'All our dishes are vegetarian with vegan, gluten-free and other dietary choices available.',
      color: 'from-cream-500 to-cream-600'
    },
    {
      icon: Users,
      title: 'Home-made Delicacies',
      description: 'Freshly baked cakes, biscuits, and traditional recipes prepared with love and care.',
      color: 'from-brown-600 to-cream-600'
    },
    {
      icon: Award,
      title: 'Heritage Setting',
      description: 'Dine in our beloved haven that has grown from humble beginnings to a popular gathering place.',
      color: 'from-brown-500 to-cream-500'
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
    <section id="experience" className="section-padding bg-gradient-to-b from-gold-50 to-maroon-50">
      <div className="container-max">

        {/* Café Story & Experience */}
        <div className="mb-20">
        <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-maroon-800 mb-6">
              The Anokhi Café Story
            </h3>
            <p className="text-lg text-maroon-700 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings as a few tables in the shade to a beloved haven serving 
              fresh, organic produce from our farm and home-made delicacies.
          </p>
        </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-maroon-400"></div>
                  <div className="pl-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-maroon-600 font-serif font-bold text-lg">1</span>
                      </div>
                      <h4 className="text-xl font-serif font-semibold text-maroon-800">
                        Humble Beginnings
                      </h4>
                    </div>
                    <p className="text-maroon-700 leading-relaxed pl-16">
                      The ANOKHI café began as just a few tables & chairs nestled in the shade of the original Anokhi shop. 
                      Serving a small menu of home-made cakes, south-Indian coffee, chai and nimbu pani (lime water), 
                      it very soon became a popular and relaxing haven for customers and locals.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-maroon-400"></div>
                  <div className="pl-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-maroon-600 font-serif font-bold text-lg">2</span>
                      </div>
                      <h4 className="text-xl font-serif font-semibold text-maroon-800">
                        A New Chapter (2007)
                      </h4>
                    </div>
                    <p className="text-maroon-700 leading-relaxed pl-16">
                      In 2007, the ANOKHI café moved to its current location. As well as freshly baked cakes and biscuits, 
                      the menu offers seasonal, organic produce grown locally at the Anokhi farm. Salads and micro greens 
                      are picked and served fresh each day.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-maroon-400"></div>
                  <div className="pl-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-maroon-600 font-serif font-bold text-lg">3</span>
                      </div>
                      <h4 className="text-xl font-serif font-semibold text-maroon-800">
                        Our Philosophy
                      </h4>
                    </div>
                    <p className="text-maroon-700 leading-relaxed pl-16">
                      All our dishes are vegetarian. Vegan, gluten free and other dietary choices are available. 
                      The menu varies according to seasonal availability and the introduction of new dishes, 
                      ensuring fresh, organic ingredients from our own farm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Images */}
              <div className="space-y-6">
                <div>
                  <Image
                    src="/images/anokhi cafe/20060214-DSC_4868.jpg"
                    alt="Anokhi Café Heritage Interior"
                    width={500}
                    height={350}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src="/images/anokhi cafe/20060214-DSC_4879.jpg"
                      alt="Café Seating Area"
                      width={250}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/anokhi cafe/20060216-DSC_5080.jpg"
                      alt="Café Atmosphere"
                      width={250}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Café Images Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            {/* <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
              <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
                Visual Journey
              </h5>
            </div> */}
            <h3 className="text-3xl font-serif font-bold text-maroon-800 mb-6">
              Café Gallery
            </h3>
            <p className="text-lg text-maroon-700 max-w-2xl mx-auto leading-relaxed">
              Step into our heritage space and experience the warm, inviting atmosphere 
              that has made Anokhi Café a beloved gathering place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20060214-DSC_4868.jpg"
                  alt="Anokhi Café Interior"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20080906-2008_09_04-030.jpg"
                  alt="Anokhi Café Heritage Space"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20130129-IMG_0519.jpg"
                  alt="Anokhi Café Dining Experience"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20080904-2008_09_04-013.jpg"
                  alt="Anokhi Café Dining Area"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20080904-2008_09_04-016-1.jpg"
                  alt="Anokhi Café Heritage Setting"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/anokhi cafe/20130129-IMG_0488.jpg"
                  alt="Anokhi Café Ambiance"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>


        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-maroon-800 mb-6">
            What Our Guests Say
          </h3>
            <p className="text-lg text-maroon-700 max-w-2xl mx-auto leading-relaxed">
              Hear from our valued guests who have experienced the warmth and 
              authenticity of Anokhi Café.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative border border-gold-200"
              >
                <div className="absolute top-4 left-4 text-4xl text-gold-300 font-serif">"</div>
                <div className="flex items-center mb-4 pt-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-maroon-700 leading-relaxed mb-6 italic text-sm">
                  {testimonial.comment}
                </p>
                
                <div className="flex items-center justify-between border-t border-gold-200 pt-4">
                  <div>
                    <h4 className="font-serif font-semibold text-maroon-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-maroon-600 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-maroon-100 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-maroon-700 font-serif font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CafeExperience;
