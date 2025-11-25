'use client';

import { useState } from 'react';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          business: 'Atelier Luxe',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    'Style Consultation',
    'Personal Curation',
    'Wardrobe Audit',
    'Special Event Styling',
    'VIP Membership Inquiry',
    'Gift Services',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <Mail className="w-4 h-4" />
            <span className="text-xs font-light tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Start Your
            <span className="block font-semibold mt-2">Style Journey</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Book a consultation, inquire about membership, or simply reach out. Our style experts are here to help you discover your perfect look.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-8">
                  Visit Our
                  <span className="block font-semibold mt-1">Atelier</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Showroom Location</div>
                      <div className="text-gray-600 font-light">
                        123 Madison Avenue<br />
                        New York, NY 10016<br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone & Email</div>
                      <div className="text-gray-600 font-light">
                        +1 (212) 555-0123<br />
                        hello@atelierluxe.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-gray-600 font-light">
                        Monday - Friday: 10am - 7pm<br />
                        Saturday: 11am - 6pm<br />
                        Sunday: 12pm - 5pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 lg:h-80 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p className="text-gray-600 font-light">View on Google Maps</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer"></div>
              </div>

              {/* Additional Info */}
              <div className="bg-black text-white p-8">
                <h4 className="text-xl font-semibold mb-4">Private Appointments Available</h4>
                <p className="text-gray-300 font-light mb-4">
                  Prefer an exclusive one-on-one experience? Book a private styling session at your convenience.
                </p>
                <p className="text-sm text-gray-400 font-light">
                  ✓ Complimentary champagne & refreshments<br />
                  ✓ Full showroom access<br />
                  ✓ Personal stylist dedicated to you
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-light tracking-wide uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light tracking-wide uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-light tracking-wide uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-light tracking-wide uppercase mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-light tracking-wide uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your style needs and preferences..."
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-900">Message sent successfully!</div>
                      <div className="text-sm text-green-700 font-light mt-1">
                        We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-900">Failed to send message</div>
                      <div className="text-sm text-red-700 font-light mt-1">
                        {errorMessage}
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="font-light tracking-wider uppercase">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-500 font-light text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}