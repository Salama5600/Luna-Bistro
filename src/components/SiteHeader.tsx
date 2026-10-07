import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface SiteHeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onReserveClick: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentRoute,
  onNavigate,
  onReserveClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Menu', route: '/menu' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const handleMobileReserve = () => {
    setMobileMenuOpen(false);
    onReserveClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#B9AEA0]/30 shadow-xs py-3'
          : 'bg-[#F7F3EC]/90 backdrop-blur-xs py-4 border-b border-[#B9AEA0]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Logo & Brand Mark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left group flex items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257] min-h-[44px]"
        >
          <div className="w-8 h-8 rounded-full bg-[#2B2926] text-[#FFFDF9] border border-[#B49A6A]/40 flex items-center justify-center font-serif text-lg font-semibold shadow-xs">
            L
          </div>
          <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#2B2926] font-medium group-hover:text-[#6F7257] transition-colors">
            {RESTAURANT_INFO.name}
          </span>
        </button>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleLinkClick(item.route)}
                className={`transition-colors relative py-2 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257] rounded px-1 ${
                  isActive
                    ? 'text-[#2B2926] font-semibold'
                    : 'text-[#2B2926]/75 hover:text-[#2B2926]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#6F7257] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Mobile Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Primary Reserve Button (Terracotta) */}
          <button
            onClick={onReserveClick}
            className="hidden md:inline-flex items-center justify-center min-h-[44px] px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] rounded transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
          >
            Reserve a Table
          </button>

          {/* Compact Mobile Reserve Button (Change 2 Location B) */}
          <button
            onClick={onReserveClick}
            className="md:hidden min-h-[44px] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] rounded transition-colors shadow-xs flex items-center justify-center"
          >
            RESERVE
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#2B2926] hover:bg-[#EEE9E1] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F3EC] border-b border-[#B9AEA0]/30 px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`text-left text-lg py-2.5 min-h-[44px] border-b border-[#B9AEA0]/20 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#6F7257] font-semibold' : 'text-[#2B2926]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#6F7257]" />}
                </button>
              );
            })}

            {/* Mobile Menu Reserve Button */}
            <div className="pt-3">
              <button
                onClick={handleMobileReserve}
                className="w-full min-h-[44px] py-3 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded text-center flex items-center justify-center transition-colors shadow-xs"
              >
                RESERVE A TABLE
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-[#2B2926]/70 space-y-1">
              <p>{RESTAURANT_INFO.address}</p>
              <p>Phone: {RESTAURANT_INFO.phone}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
