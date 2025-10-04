'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission (replace with actual Formspree/Netlify Forms integration)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-4" style={{ backgroundColor: '#62473c' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              You've successfully subscribed to our newsletter. We'll keep you updated with our latest collections, 
              artisan stories, and heritage insights.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#62473c' }}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join our community and be the first to discover new collections, artisan stories, 
            and exclusive insights into traditional craftsmanship.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#a18072' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  style={{ 
                    backgroundColor: '#fdf9f0',
                    color: '#62473c',
                    border: '1px solid #a18072'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                style={{ 
                  backgroundColor: '#fdf9f0',
                  color: '#62473c',
                  border: '1px solid #a18072'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#f3ede7';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#fdf9f0';
                }}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <p className="text-sm mt-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
