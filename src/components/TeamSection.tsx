import { Instagram, Twitter, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Singh',
      role: 'Founder & Creative Director',
      image: '/images/team/john-singh.jpg',
      bio: 'Visionary leader who founded Anokhi in 1969 with a dream to preserve traditional Indian textile arts.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Faith Singh',
      role: 'Co-Founder & Design Director',
      image: '/images/team/faith-singh.jpg',
      bio: 'Design innovator who has shaped Anokhi\'s aesthetic vision and contemporary design language.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Craftsmanship',
      image: '/images/team/priya-sharma.jpg',
      bio: 'Master artisan with over 30 years of experience in traditional hand-block printing techniques.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Raj Kumar',
      role: 'Museum Curator',
      image: '/images/team/raj-kumar.jpg',
      bio: 'Cultural historian and curator who oversees our museum and heritage preservation initiatives.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            The passionate individuals behind Anokhi, dedicated to preserving heritage 
            while creating beautiful, contemporary products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="aspect-square bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 bg-terracotta-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-terracotta-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-terracotta-50 transition-colors"
                  >
                    <Instagram size={14} className="text-earth-600" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-terracotta-50 transition-colors"
                  >
                    <Twitter size={14} className="text-earth-600" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-terracotta-50 transition-colors"
                  >
                    <Linkedin size={14} className="text-earth-600" />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-terracotta-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-earth-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-4">
              Join Our Journey
            </h3>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              Are you passionate about traditional crafts and heritage preservation? 
              We're always looking for talented individuals to join our mission.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
