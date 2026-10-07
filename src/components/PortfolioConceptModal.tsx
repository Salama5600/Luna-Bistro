import React from 'react';
import { X, Check, ExternalLink, Compass, Palette, Type, Smartphone, Monitor } from 'lucide-react';

interface PortfolioConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioConceptModal: React.FC<PortfolioConceptModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2926]/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F7F3EC] text-[#2B2926] rounded-xl max-w-2xl w-full p-6 sm:p-8 border border-[#B9AEA0]/40 shadow-2xl my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-[#2B2926]/60 hover:text-[#2B2926] p-1.5 rounded-full hover:bg-[#EEE9E1] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#6F7257]/15 text-[#6F7257] text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              Creative Blueprint & Case Study
            </div>
            <h2 id="concept-modal-title" className="font-serif text-3xl font-medium text-[#2B2926]">
              Luna Bistro Concept Case Study
            </h2>
            <p className="text-sm text-[#2B2926]/75 mt-2 leading-relaxed">
              A premium restaurant website concept designed to show how Luna Bistro could present its food, atmosphere, and reservation experience online. The experience combines editorial typography, warm Mediterranean-inspired neutrals, cinematic food photography, a structured menu, gallery storytelling, and reservation-focused UX.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#EEE9E1]/80 border border-[#B9AEA0]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6F7257]">
                <Palette className="w-4 h-4" />
                Color System
              </div>
              <p className="text-xs text-[#2B2926]/80 leading-relaxed">
                60-30-10 palette balance: Warm Cream (#F7F3EC) canvas, Soft Sand (#EEE9E1) secondary surfaces, Deep Charcoal (#2B2926) typography & CTAs, Muted Olive (#6F7257) accents, and Warm Gold (#B49A6A) micro-touches.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#EEE9E1]/80 border border-[#B9AEA0]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6F7257]">
                <Type className="w-4 h-4" />
                Editorial Typography
              </div>
              <p className="text-xs text-[#2B2926]/80 leading-relaxed">
                High-character <em>Cormorant Garamond</em> for display headlines paired with pristine <em>Inter</em> for UI controls, body prose, and tabular numerals.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#2B2926]">
              Architectural & Responsive Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B2926]/80">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Mobile, Tablet & 1440px Desktop Grid</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Complete 11-section Editorial Home Page</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Interactive Lightbox Gallery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Full Menu with Category & Dietary Filters</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Validated Reservation Engine with State Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#6F7257] shrink-0" />
                <span>Custom Interactive Map & Directions</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-[#2B2926] text-[#FFFDF9] text-xs flex items-center justify-between">
            <div>
              <span className="font-semibold block text-[#B49A6A]">Fictional Concept Project</span>
              <span className="text-[#FFFDF9]/70 text-[11px]">
                Names, prices, reviews, and address are sample content created for portfolio presentation.
              </span>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-[#FFFDF9] text-[#2B2926] rounded text-xs font-semibold hover:bg-[#EEE9E1] shrink-0 ml-4"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
