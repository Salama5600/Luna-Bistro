/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { PortfolioConceptModal } from './components/PortfolioConceptModal';
import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { AboutView } from './views/AboutView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { GALLERY_ITEMS } from './data/restaurantData';
import { Info } from 'lucide-react';

interface RouteMeta {
  title: string;
  description: string;
}

const ROUTE_METADATA: Record<string, RouteMeta> = {
  '/': {
    title: 'Luna Bistro | Modern Mediterranean Restaurant (Concept Project)',
    description: 'A restaurant website concept showing how Luna Bistro could present its food, atmosphere, and reservation experience online.',
  },
  '/menu': {
    title: 'Menu | Luna Bistro',
    description: 'Seasonal Mediterranean starters, pasta, mains, desserts, and drinks designed to share.',
  },
  '/about': {
    title: 'Our Story | Luna Bistro',
    description: "Learn about Luna Bistro's seasonal ingredients, kitchen, and warm hospitality.",
  },
  '/gallery': {
    title: 'Gallery | Luna Bistro',
    description: 'A glimpse of Luna Bistro: dishes, interior, kitchen, drinks, and desserts.',
  },
  '/contact': {
    title: 'Reserve a Table | Luna Bistro',
    description: 'Request a table, find our address and opening hours.',
  },
  '/privacy': {
    title: 'Privacy Policy | Luna Bistro',
    description: 'Privacy policy sample for concept project.',
  },
  '/terms': {
    title: 'Terms of Service | Luna Bistro',
    description: 'Terms of service sample for concept project.',
  },
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const path = window.location.pathname;
    if (['/about', '/menu', '/gallery', '/contact', '/privacy', '/terms'].includes(path)) {
      return path;
    }
    return '/';
  });

  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync route and metadata
  useEffect(() => {
    const meta = ROUTE_METADATA[currentRoute] || ROUTE_METADATA['/'];
    document.title = meta.title;

    const setMetaTag = (selector: string, content: string) => {
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', content);
      }
    };

    setMetaTag('meta[name="description"]', meta.description);
    setMetaTag('meta[property="og:title"]', meta.title);
    setMetaTag('meta[property="og:description"]', meta.description);
    setMetaTag('meta[name="twitter:title"]', meta.title);
    setMetaTag('meta[name="twitter:description"]', meta.description);
  }, [currentRoute]);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (['/', '/about', '/menu', '/gallery', '/contact', '/privacy', '/terms'].includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // CHANGE 1: "Every existing 'Reserve a Table' and 'Make a Reservation' button or link on the entire site
  // must link to /contact#reservation and scroll smoothly to the form."
  const handleReserveClick = () => {
    if (currentRoute !== '/contact') {
      setCurrentRoute('/contact');
      window.history.pushState({}, '', '/contact#reservation');
      setTimeout(() => {
        const el = document.getElementById('reservation');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.history.pushState({}, '', '/contact#reservation');
      const el = document.getElementById('reservation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EC] text-[#2B2926] overflow-x-hidden">
      {/* Portfolio Concept Top Bar */}
      <div className="bg-[#2B2926] text-[#FFFDF9] text-[11px] py-1.5 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2">
        <span className="text-[#B49A6A] font-semibold">PORTFOLIO CONCEPT:</span>
        <span className="text-[#FFFDF9]/80 truncate">
          Luna Bistro — Modern Mediterranean Bistro Design System & Experience
        </span>
        <button
          onClick={() => setIsCaseStudyOpen(true)}
          className="underline hover:text-[#B49A6A] ml-2 shrink-0 flex items-center gap-1 font-medium min-h-[32px]"
        >
          <Info className="w-3 h-3" />
          <span>View Brief & Specs</span>
        </button>
      </div>

      {/* Global Navigation */}
      <SiteHeader
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onReserveClick={handleReserveClick}
      />

      {/* Main Content Router */}
      <main id="main-content" className="flex-1">
        {currentRoute === '/' && (
          <HomeView
            onNavigate={navigateTo}
            onReserveClick={handleReserveClick}
          />
        )}
        {currentRoute === '/about' && (
          <AboutView
            onNavigate={navigateTo}
            onReserveClick={handleReserveClick}
          />
        )}
        {currentRoute === '/menu' && (
          <MenuView
            onReserveClick={handleReserveClick}
          />
        )}
        {currentRoute === '/gallery' && (
          <GalleryView
            onOpenLightbox={handleOpenLightbox}
            onReserveClick={handleReserveClick}
          />
        )}
        {currentRoute === '/contact' && (
          <ContactView />
        )}
        {currentRoute === '/privacy' && (
          <PrivacyView />
        )}
        {currentRoute === '/terms' && (
          <TermsView />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onReserveClick={handleReserveClick}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
      />

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      {/* Portfolio Specifications Modal */}
      <PortfolioConceptModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </div>
  );
}
