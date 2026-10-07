import React from 'react';
import { ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

interface GalleryViewProps {
  onOpenLightbox: (index: number) => void;
  onReserveClick: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onOpenLightbox,
  onReserveClick,
}) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Visual Experience
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2926] font-normal">
          A GLIMPSE OF LUNA.
        </h1>
        <p className="text-base sm:text-lg text-[#2B2926]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Warm natural lighting, candid moments of hospitality, handcrafted textures, and the vibrant colors of the Mediterranean.
        </p>
      </section>

      {/* 8 UNIQUE Images Grid with Correct Captions (CHANGE 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#B9AEA0]/30 shadow-xs cursor-pointer aspect-[4/3] flex flex-col justify-end"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Caption Overlay */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-[#FFFDF9] flex items-end justify-between">
                <div className="space-y-0.5 max-w-[85%]">
                  <p className="text-[10px] font-semibold tracking-widest text-[#B49A6A] uppercase">
                    {item.caption}
                  </p>
                  <p className="font-serif text-sm sm:text-base font-medium truncate">
                    {item.title}
                  </p>
                </div>
                <div className="p-1.5 rounded-full bg-white/20 text-[#FFFDF9] backdrop-blur-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B2926] rounded-xl p-8 sm:p-12 text-center text-[#FFFDF9] space-y-4 shadow-lg">
          <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
            Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl">EXPERIENCE IT IN PERSON</h2>
          <p className="text-xs sm:text-sm text-[#FFFDF9]/80 max-w-md mx-auto">
            Nothing compares to the aroma of fresh herbs and the warmth of candlelight at our tables.
          </p>
          <div className="pt-2">
            <button
              onClick={onReserveClick}
              className="min-h-[48px] px-8 py-3.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-150 hover:-translate-y-0.5 inline-flex items-center justify-center shadow-md"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
