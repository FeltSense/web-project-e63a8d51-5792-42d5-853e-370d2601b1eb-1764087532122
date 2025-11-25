'use client';

import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'New Arrivals', href: '#collections' },
      { label: 'Women\'s Wear', href: '#products' },
      { label: 'Accessories', href: '#products' },
      { label: 'Shoes', href: '#products' },
      { label: 'Bags', href: '#products' },
      { label: 'Designer Collections', href: '#collections' },
    ],
    services: [
      { label: 'Style Consultation', href: '#consultation' },
      { label: 'Personal Styling', href: '#services' },
      { label: 'Size Guide', href: '#size-guide' },
      { label: 'Styling Tips', href: '#tips' },
      { label: 'Gift Cards', href: '#gift-cards' },
      { label: 'Customer Profiles', href: '#profile' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#story' },
      { label: 'Lookbook', href: '#lookbook' },
      { label: 'Journal', href: '#journal' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Shipping & Returns', href: '#shipping' },
      { label: 'Order Tracking', href: '#tracking' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-2xl font-light tracking-wide text-white">
                Join Our Style Circle
              </h3>
              <p className="mt-3 text-sm text-neutral-400">
                Subscribe to receive exclusive access to new collections, styling tips, 
                and insider fashion insights curated just for you.
              </p>
            </div>
            <div className="flex items-center">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-none border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-none bg-white px-8 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-xs text-neutral-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-light tracking-[0.2em] text-white">
                ATELIER LUXE
              </h2>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
              Curating sophisticated fashion for the modern woman. 
              Discover timeless pieces and contemporary designs that elevate your personal style.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  123 Fashion Avenue<br />New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-neutral-500 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-neutral-400 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-neutral-500 flex-shrink-0" />
                <a href="mailto:hello@atelierluxe.com" className="text-neutral-400 hover:text-white transition-colors">
                  hello@atelierluxe.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-neutral-700 text-neutral-400 transition-colors hover:border-white hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-neutral-700 text-neutral-400 transition-colors hover:border-white hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@atelierluxe.com"
                className="flex h-10 w-10 items-center justify-center border border-neutral-700 text-neutral-400 transition-colors hover:border-white hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white">SHOP</h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white">SERVICES</h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white">COMPANY</h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white">SUPPORT</h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-neutral-500">
              © {currentYear} Atelier Luxe. All rights reserved. Crafted with sophistication.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#accessibility" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}