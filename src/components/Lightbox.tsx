import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/restaurantData';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2926]/90 backdrop-blur-sm p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute -top-12 right-0 sm:top-2 sm:-right-12 text-[#FFFDF9]/80 hover:text-[#FFFDF9] transition-colors p-2 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A]"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 text-[#FFFDF9]/80 hover:text-[#FFFDF9] transition-colors p-3 rounded-full bg-[#2B2926]/60 sm:bg-transparent hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A]"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Image Display */}
        <div className="relative overflow-hidden rounded-lg bg-[#2B2926] max-h-[75vh] flex items-center justify-center border border-white/10 shadow-2xl">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="w-full h-auto max-h-[75vh] object-contain select-none"
          />
        </div>

        {/* Caption & Navigation Counter */}
        <div className="w-full mt-4 flex items-center justify-between text-[#FFFDF9] px-2">
          <div>
            <h3 className="font-serif text-lg tracking-wide">{currentItem.title}</h3>
            <p className="text-xs text-[#FFFDF9]/70 mt-0.5">{currentItem.caption}</p>
          </div>
          <span className="text-xs tracking-widest text-[#FFFDF9]/60 font-mono tabular-nums">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 text-[#FFFDF9]/80 hover:text-[#FFFDF9] transition-colors p-3 rounded-full bg-[#2B2926]/60 sm:bg-transparent hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A6A]"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
