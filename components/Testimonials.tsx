'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophia Laurent',
      role: 'Creative Director',
      image: 'SL',
      rating: 5,
      text: 'Atelier Luxe has completely transformed how I approach fashion. The curation is impeccable, and every piece I receive feels like it was made just for me. The quality and attention to detail are unmatched.',
      highlight: 'Impeccable curation'
    },
    {
      name: 'Isabella Chen',
      role: 'Entrepreneur',
      image: 'IC',
      rating: 5,
      text: 'As someone with limited time for shopping, the personal styling service has been a game-changer. My stylist understands my aesthetic perfectly and consistently delivers pieces that I love and actually wear.',
      highlight: 'Game-changer'
    },
    {
      name: 'Emma Richardson',
      role: 'Marketing Executive',
      image: 'ER',
      rating: 5,
      text: 'The level of service at Atelier Luxe is extraordinary. From the consultation to delivery, every touchpoint is thoughtful and luxurious. I finally feel confident in my personal style.',
      highlight: 'Extraordinary service'
    },
    {
      name: 'Victoria Moore',
      role: 'Art Consultant',
      image: 'VM',
      rating: 5,
      text: 'I appreciate the sustainability focus and the careful selection of designers. Each piece tells a story, and I know I\'m investing in quality that will last. The styling advice is invaluable.',
      highlight: 'Quality that lasts'
    },
    {
      name: 'Olivia Sinclair',
      role: 'Architect',
      image: 'OS',
      rating: 5,
      text: 'The seasonal lookbooks are inspiring, and the size guidance is spot-on. I\'ve never felt more comfortable shopping online. The fit is perfect every time, and the return process is seamless.',
      highlight: 'Perfect fit every time'
    },
    {
      name: 'Charlotte Banks',
      role: 'Interior Designer',
      image: 'CB',
      rating: 5,
      text: 'Atelier Luxe understands sophisticated elegance. The pieces are investment-worthy, and the styling consultation helped me refine my wardrobe into a cohesive collection I absolutely love.',
      highlight: 'Investment-worthy'
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-black" />
            <span className="text-xs font-light tracking-widest uppercase">
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Trusted by Women
            <span className="block font-semibold mt-2">Who Value Quality</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Discover why discerning women choose Atelier Luxe for their wardrobe essentials and style transformation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-20 h-20" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 font-light leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-block bg-gray-100 px-3 py-1 mb-6">
                <span className="text-xs font-light tracking-wide uppercase text-gray-600">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-light">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/10 pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white p-12 md:p-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">4.9</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white" />
                ))}
              </div>
              <div className="text-sm text-gray-400 font-light uppercase tracking-wide">
                Average Rating
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">2,000+</div>
              <div className="text-sm text-gray-400 font-light uppercase tracking-wide mt-4">
                Happy Clients
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">98%</div>
              <div className="text-sm text-gray-400 font-light uppercase tracking-wide mt-4">
                Satisfaction Rate
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">15K+</div>
              <div className="text-sm text-gray-400 font-light uppercase tracking-wide mt-4">
                Items Curated
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light mb-4">
            Follow Our Style Journey
            <span className="block font-semibold text-lg mt-2">@AtelierLuxe</span>
          </h3>
          <p className="text-gray-600 font-light mb-8">
            Join our community for daily style inspiration, behind-the-scenes content, and exclusive previews.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 hover:opacity-75 transition-opacity duration-300 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}