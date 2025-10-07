import { Calendar, MapPin, Users, Heart, Award, Globe } from 'lucide-react';

const StorySection = () => {
  const storyMilestones = [
    {
      icon: MapPin,
      title: "Roots in Jaipur",
      period: "Historical Foundation",
      description: "Anokhi's roots lie in Jaipur, a city whose founders were enlightened patrons of the arts and crafts. Skilled artisans practicing myriad craft forms – block carving and printing amongst them – were invited to settle here and were ensured a secure livelihood.",
      color: "from-terracotta-500 to-terracotta-600"
    },
    {
      icon: Calendar,
      title: "The Founding",
      period: "1970",
      description: "Founded by John and Faith Singh in 1970, ANOKHI began when Jaipur's block printing industry was at a very low ebb. Modern manufacturing processes had already marginalized handmade practices, the local patronage system was effectively lost and customers were steadily diminishing.",
      color: "from-sage-500 to-sage-600"
    },
    {
      icon: Users,
      title: "Artisan Partnership",
      period: "Early 1970s",
      description: "To help revitalise these age-old skills, ANOKHI started working with craftspeople in and around Jaipur: block carvers and printers, dyers, embroiderers and bead workers. Listening to their concerns, the Singhs aimed to maintain an open & honest relationship with the artisans while committing to provide sustained work throughout the year.",
      color: "from-earth-500 to-earth-600"
    },
    {
      icon: Heart,
      title: "Design Innovation",
      period: "1970s-1980s",
      description: "ANOKHI began with small clothing collections. In the studio, designers developed striking ranges around the traditional techniques and skilled work of artisans, while infusing pieces with a contemporary twist for the modern-day user. Traditional prints with elaborate layouts were re-imagined as stylish evening dresses, bolero jackets and kaftans.",
      color: "from-terracotta-600 to-sage-600"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      period: "1980s-1990s",
      description: "ANOKHI became known as an alternative role model for good business practices and its ongoing commitment to the revival of traditional textile skills. Unique hand-made pieces could now be found in small independent shops dotted around the UK and across the craft-loving world – from Paris to Kyoto, San Francisco to Bogota.",
      color: "from-sage-600 to-earth-600"
    },
    {
      icon: Award,
      title: "Museum Foundation",
      period: "2005",
      description: "ANOKHI went on to found Anokhi Museum of Hand Printing in 2005. Dedicated to the collection, preservation and interpretation of block printed fabric, exhibitions put emphasis on contemporary design and the present status of the craft while also exploring its historic roots.",
      color: "from-terracotta-700 to-sage-700"
    }
  ];

  return (
    <section className="section-padding heritage-section">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-brown-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-brown-700 uppercase tracking-wider font-medium">
              Our Heritage Journey
            </h5>
          </div>
          <h2 className="heritage-title text-4xl md:text-6xl mb-6">
            Our Story
          </h2>
          <p className="heritage-text text-xl max-w-4xl mx-auto leading-relaxed">
            From a small initiative to preserve traditional crafts to becoming a global ambassador 
            of Indian textile heritage, discover the journey that shaped Anokhi's commitment to 
            craftsmanship and community.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brown-400 to-cream-600 transform md:-translate-x-0.5"></div>

          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-cream-50 rounded-full transform -translate-x-1/2 z-10 border-4 border-brown-600 shadow-lg"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="heritage-card">
                      {/* Icon and Period */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-brown-600 uppercase tracking-wide">
                            {milestone.period}
                          </span>
                          <h3 className="text-2xl font-serif font-bold text-brown-800">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="heritage-text leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy Statement */}
        <div className="mt-20 ornate-border p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="heritage-title text-3xl md:text-4xl mb-8">
              Our Continuing Commitment
            </h3>
            <p className="heritage-text text-xl leading-relaxed mb-8">
              ANOKHI remains deeply committed to supporting traditional craftsmanship and its continued revival. 
              Through our ongoing partnerships with artisans, our museum, and our retail presence across India, 
              we continue to bridge the gap between heritage and modernity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brown-600 mb-2">50+</div>
                <div className="text-brown-500 font-medium">Years of Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brown-600 mb-2">100+</div>
                <div className="text-brown-500 font-medium">Artisan Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brown-600 mb-2">Global</div>
                <div className="text-brown-500 font-medium">Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
