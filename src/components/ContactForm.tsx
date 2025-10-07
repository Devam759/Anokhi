'use client';

import { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, Check } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission (replace with actual Formspree/Netlify Forms integration)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subjects = [
    'General Inquiry',
    'Product Information',
    'Museum Visit',
    'Café Reservation',
    'Collaboration',
    'Press & Media',
    'Wholesale Inquiry',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <section id="form" className="section-padding bg-gradient-to-b from-cream-50 to-gold-50">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-maroon-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-800 mb-4">
              Message Sent!
            </h2>
            <p className="text-xl text-maroon-700 leading-relaxed">
              Thank you for reaching out to us. We've received your message and will get back to you 
              within 24 hours. We appreciate your interest in Anokhi!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="section-padding bg-gradient-to-b from-cream-50 to-gold-50">
      <div className="container-max">
        <div className="text-center mb-16">
          {/* <div className="inline-block border-t border-b border-maroon-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-maroon-700 uppercase tracking-wider font-medium">
              Get in Touch
            </h5>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800 mb-6">
            Send Us a Message
          </h2>
          <p className="text-xl text-maroon-700 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to get in touch? We'd love to hear from you. 
            Fill out the form below and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gold-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-maroon-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-maroon-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-maroon-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-maroon-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-maroon-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare size={20} className="absolute left-4 top-4 text-brown-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary inline-flex items-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="text-center">
                <p className="text-brown-500 text-sm">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
