'use client';

import { useState } from 'react';
import { Calendar, Users, Phone, Mail } from 'lucide-react';

const MuseumVisit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    visitors: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        visitors: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="visit" className="section-padding bg-gradient-to-r from-terracotta-600 to-sage-600">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Visit Confirmed!
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Thank you for your interest in visiting the Anokhi Museum. We'll contact you soon 
              to confirm your visit details and provide additional information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="visit" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Plan Your Visit
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Book your visit to the Anokhi Museum and experience the rich heritage of traditional Indian textile arts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-earth-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              Book Your Visit
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-earth-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="visitors" className="block text-sm font-medium text-earth-700 mb-2">
                    Number of Visitors *
                  </label>
                  <select
                    id="visitors"
                    name="visitors"
                    required
                    value={formData.visitors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6 or more</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-earth-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-earth-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                Book My Visit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-terracotta-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-1">Phone</h4>
                    <p className="text-earth-600">+91-141-256-1020</p>
                    <p className="text-earth-500 text-sm">Mon-Sun: 10 AM - 5 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-1">Email</h4>
                    <p className="text-earth-600">museum@anokhi.com</p>
                    <p className="text-earth-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-earth-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900 mb-1">Group Visits</h4>
                    <p className="text-earth-600">groups@anokhi.com</p>
                    <p className="text-earth-500 text-sm">Special rates for groups of 10+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-2xl p-8">
              <h3 className="text-xl font-serif font-bold text-earth-900 mb-4">
                Visit Tips
              </h3>
              <ul className="space-y-3 text-earth-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Allow 1-2 hours for a complete museum experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Guided tours are highly recommended for first-time visitors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Visit our café for authentic Indian cuisine after your tour</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Don't forget to visit our museum shop for unique souvenirs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuseumVisit;
