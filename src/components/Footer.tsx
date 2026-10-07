import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (route: string) => void;
  onReserveClick: () => void;
  onOpenCaseStudy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onReserveClick,
  onOpenCaseStudy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Menu', route: '/menu' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <footer className="bg-[#2B2926] text-[#FFFDF9] pt-16 pb-12 border-t border-[#B9AEA0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-widest text-[#FFFDF9]">
              {RESTAURANT_INFO.name}
            </h3>
            <p className="text-sm text-[#FFFDF9]/75 font-serif italic text-base">
              "{RESTAURANT_INFO.tagline}"
            </p>
            <p className="text-xs text-[#FFFDF9]/60 leading-relaxed max-w-xs">
              Modern Mediterranean cuisine crafted with seasonal ingredients and served with genuine warmth.
            </p>
            <div className="pt-2">
              <button
                onClick={onReserveClick}
                className="min-h-[44px] px-5 py-2.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B49A6A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFFDF9]/75">
              {navLinks.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => {
                      onNavigate(item.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FFFDF9] transition-colors hover:translate-x-1 inline-block min-h-[36px] flex items-center"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onReserveClick}
                  className="hover:text-[#FFFDF9] transition-colors text-[#B49A6A] min-h-[36px] flex items-center"
                >
                  Book Reservation
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B49A6A]">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-[#FFFDF9]/75">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#FFFDF9] font-medium">{h.days}</span>
                  <span className="text-[#FFFDF9]/60">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#FFFDF9]/50 pt-1">
              Kitchen closes 45 minutes prior to closing time.
            </p>
          </div>

          {/* Visit & Social (Change 8) */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B49A6A]">
              Visit & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#FFFDF9]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A6A] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B49A6A] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:underline">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Links with target="_blank" rel="noopener noreferrer" */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FFFDF9]/80 hover:text-white hover:border-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FFFDF9]/80 hover:text-white hover:border-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* CHANGE 8 Location A: Privacy Policy & Terms under Instagram / Facebook */}
              <div className="flex items-center gap-4 text-xs text-[#FFFDF9]/60 pt-1">
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-[#FFFDF9] transition-colors underline-offset-2 hover:underline min-h-[36px] flex items-center"
                >
                  Privacy Policy
                </button>
                <span aria-hidden="true">·</span>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-[#FFFDF9] transition-colors underline-offset-2 hover:underline min-h-[36px] flex items-center"
                >
                  Terms
                </button>
              </div>

              {/* Required Copyright & Disclaimer line */}
              <p className="text-[11px] text-[#FFFDF9]/50 leading-relaxed">
                © 2026 Luna Bistro. A concept project. All names, prices, and reviews are sample content.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#FFFDF9]/50 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCaseStudy}
              className="text-[#B49A6A] hover:underline min-h-[44px] flex items-center"
            >
              Project Specifications & Design System
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-[#FFFDF9]/70 hover:text-white hover:border-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
