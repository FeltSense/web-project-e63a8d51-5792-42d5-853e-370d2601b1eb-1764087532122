'use client';

import { Check, Sparkles, ArrowRight, Gift } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Full access to seasonal collections',
    'Personalized style consultation (60 minutes)',
    'Exclusive pre-order privileges',
    'Member-only pricing on all items',
    'Complimentary alterations',
    'Priority 2-day shipping',
    'Early access to sales & events',
    'Monthly styling tips & trend reports',
    'Virtual wardrobe consultation',
    'Size & fit guarantee',
    'Dedicated style concierge',
    'VIP customer support'
  ];

  const giftCards = [
    { amount: 100, popular: false },
    { amount: 250, popular: true },
    { amount: 500, popular: false },
    { amount: 1000, popular: false }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-light tracking-widest uppercase">
              Membership
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Exclusive Access
            <span className="block font-semibold mt-2">Starts at $29</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Join Atelier Luxe and unlock a world of curated fashion, personalized styling, and luxury service. Limited memberships available for Spring 2024.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Badge */}
            <div className="absolute top-8 right-8 bg-white text-black px-4 py-2 text-xs font-light tracking-widest uppercase">
              Limited Offer
            </div>

            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <div className="text-sm font-light tracking-widest uppercase text-gray-400 mb-4">
                      Founding Member Pre-Order
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-6xl font-light">$29</span>
                      <span className="text-2xl text-gray-400 font-light line-through">$99</span>
                    </div>
                    <div className="text-gray-400 font-light mt-2">
                      One-time membership fee • Lifetime access
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Launch Price Guarantee</div>
                        <div className="text-sm text-gray-400 font-light">Lock in the $29 rate forever</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Founding Member Badge</div>
                        <div className="text-sm text-gray-400 font-light">Exclusive recognition & perks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">$100 Welcome Credit</div>
                        <div className="text-sm text-gray-400 font-light">Applied to your first purchase</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300 w-full md:w-auto justify-center group"
                  >
                    <span className="font-light tracking-wider uppercase">Reserve Your Spot</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="mt-6 text-xs text-gray-400 font-light">
                    🔥 Only 100 founding memberships available • 23 remaining
                  </div>
                </div>

                {/* Right Column - Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Everything Included:</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="font-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-8 text-center">
            <div>
              <div className="text-2xl font-semibold mb-1">30-Day</div>
              <div className="text-sm text-gray-600 font-light">Money-back guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">No Risk</div>
              <div className="text-sm text-gray-600 font-light">Cancel anytime</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">Instant</div>
              <div className="text-sm text-gray-600 font-light">Access upon launch</div>
            </div>
          </div>
        </div>

        {/* Gift Cards Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-xs font-light tracking-widest uppercase">
                Gift Cards
              </span>
            </div>
            <h3 className="text-3xl font-light mb-4">
              The Perfect Gift for
              <span className="block font-semibold mt-2">Fashion Lovers</span>
            </h3>
            <p className="text-gray-600 font-light">
              Give the gift of choice with an Atelier Luxe gift card. Beautifully packaged and delivered instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {giftCards.map((card, index) => (
              <div
                key={index}
                className={`relative p-8 border-2 transition-all duration-300 group hover:shadow-lg ${
                  card.popular
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-black'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs font-light tracking-wider uppercase">
                    Popular
                  </div>
                )}

                <div className="text-center">
                  <div className="text-4xl font-light mb-2">${card.amount}</div>
                  <div className={`text-sm font-light uppercase tracking-wide mb-6 ${
                    card.popular ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Gift Card
                  </div>
                  
                  <button className={`w-full py-3 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                    card.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}>
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 font-light">
              Need a custom amount? <a href="#contact" className="underline hover:text-black">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}