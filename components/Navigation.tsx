'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-black rotate-45"></div>
              <div className="absolute inset-0 w-10 h-10 border-2 border-black/30 rotate-45 translate-x-1 translate-y-1"></div>
            </div>
            <span className="text-2xl font-light tracking-wider text-black">
              ATELIER <span className="font-semibold">LUXE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wide text-gray-800 hover:text-black transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-800 hover:text-black transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-800 hover:text-black transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-black transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200 pt-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-light tracking-wide text-gray-800 hover:text-black transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-sm font-light tracking-wide text-gray-800 hover:text-black transition-colors uppercase">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
                <button className="flex items-center space-x-2 text-sm font-light tracking-wide text-gray-800 hover:text-black transition-colors uppercase">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Cart</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}