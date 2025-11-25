'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-light tracking-widest uppercase">
                Spring/Summer 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Curated Elegance
              <span className="block font-semibold mt-2">For the Modern Woman</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
              Discover timeless pieces that define your personal style. From sophisticated wardrobe essentials to statement accessories, every item is carefully selected for the discerning woman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 group"
              >
                <span className="font-light tracking-wider uppercase">Explore Collections</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                <span className="font-light tracking-wider uppercase">Book Consultation</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-semibold">500+</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide mt-1">
                  Curated Pieces
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold">50+</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide mt-1">
                  Designers
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold">2K+</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide mt-1">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative h-96 bg-gray-200 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 border-2 border-white rotate-45 mx-auto mb-4"></div>
                    <p className="text-sm font-light tracking-widest uppercase">Main Collection</p>
                  </div>
                </div>
              </div>
              
              {/* Small Images */}
              <div className="relative h-48 bg-gray-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xs font-light tracking-widest uppercase">Accessories</p>
                </div>
              </div>
              
              <div className="relative h-48 bg-gray-400 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xs font-light tracking-widest uppercase">Footwear</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
              <div className="text-4xl font-semibold">20%</div>
              <div className="text-xs text-gray-600 font-light uppercase tracking-wide mt-1">
                First Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}