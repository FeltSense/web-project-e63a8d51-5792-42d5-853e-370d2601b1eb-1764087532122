'use client';

import { Sparkles, Users, Search, Calendar, Heart, Gift, ShoppingBag, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Personal Curation',
      description: 'Our expert stylists hand-select pieces tailored to your unique taste, lifestyle, and body type.',
      features: ['Style profiling', 'Seasonal updates', 'Exclusive access']
    },
    {
      icon: Calendar,
      title: 'Style Consultation',
      description: 'One-on-one sessions with our fashion consultants to refine your wardrobe and discover your signature style.',
      features: ['60-min session', 'Wardrobe audit', 'Lookbook creation']
    },
    {
      icon: ShoppingBag,
      title: 'Seasonal Collections',
      description: 'Access curated seasonal collections featuring the latest trends from emerging and established designers.',
      features: ['New arrivals weekly', 'Limited editions', 'Pre-order exclusives']
    },
    {
      icon: Heart,
      title: 'Size Guide & Fit',
      description: 'Detailed sizing information and personalized fit recommendations to ensure every piece flatters perfectly.',
      features: ['Virtual try-on', 'Fit guarantee', 'Easy exchanges']
    },
    {
      icon: TrendingUp,
      title: 'Trend Insights',
      description: 'Stay ahead with our monthly trend reports, styling tips, and insider access to fashion week highlights.',
      features: ['Monthly newsletter', 'Styling videos', 'Fashion forecasts']
    },
    {
      icon: Gift,
      title: 'Gift Services',
      description: 'Elegant gift cards and personalized gifting services for the fashion lover in your life.',
      features: ['Custom packaging', 'Gift registry', 'Personal messages']
    },
    {
      icon: Users,
      title: 'VIP Community',
      description: 'Join our exclusive community of style enthusiasts with access to private sales and member events.',
      features: ['Early access', 'Member discounts', 'Exclusive events']
    },
    {
      icon: Sparkles,
      title: 'Luxury Experience',
      description: 'White-glove service with complimentary alterations, priority shipping, and dedicated support.',
      features: ['Free alterations', 'Priority support', '2-day shipping']
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-light tracking-widest uppercase">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Elevated Shopping
            <span className="block font-semibold mt-2">Experience</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            More than just a boutique, Atelier Luxe offers a comprehensive fashion experience designed to simplify and elevate your personal style journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 p-8 hover:bg-black transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-black group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-300 font-light leading-relaxed mb-4 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 group-hover:text-gray-400 font-light flex items-center space-x-2 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 bg-black group-hover:bg-white rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready to Transform Your Wardrobe?
            </h3>
            <p className="text-gray-300 font-light text-lg mb-8">
              Book a complimentary 30-minute style consultation and discover how Atelier Luxe can elevate your personal style.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="font-light tracking-wider uppercase">Book Now</span>
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}