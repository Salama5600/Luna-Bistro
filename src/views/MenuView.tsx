import React, { useState, useEffect } from 'react';
import { ZoomIn } from 'lucide-react';
import { MENU_ITEMS, MenuItem, CHEF_RECOMMENDATION } from '../data/restaurantData';

interface MenuViewProps {
  onReserveClick: () => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onReserveClick }) => {
  const [activeTab, setActiveTab] = useState<string>('starters');
  const [previewDish, setPreviewDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'starters', label: 'STARTERS', eyebrow: 'TO BEGIN', title: 'Starters & Mezze' },
    { id: 'pasta', label: 'PASTA & GRAINS', eyebrow: 'HAND-ROLLED & COMFORTING', title: 'Handmade Pasta & Grains' },
    { id: 'mains', label: 'MAINS', eyebrow: 'FROM THE GRILL & OVEN', title: 'Mains & Hearth Specialties' },
    { id: 'desserts', label: 'DESSERTS', eyebrow: 'TO FINISH', title: 'Dolce & Desserts' },
    { id: 'drinks', label: 'DRINKS', eyebrow: 'TO SIP', title: 'Aperitivi, Cocktails & Coffee' },
  ];

  // Scrollspy to highlight active category while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (catId: string) => {
    setActiveTab(catId);
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
      {/* Menu Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Mediterranean Inspiration
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2926] font-normal">
          OUR MENU
        </h1>
        <p className="text-base sm:text-lg text-[#2B2926]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Seasonal ingredients, Mediterranean inspiration, and dishes designed to share around the table.
        </p>

        {/* Dietary Legend (Change 6) */}
        <div className="pt-2 text-xs text-[#2B2926]/70 flex items-center justify-center gap-4">
          <span className="font-medium text-[#2B2926]">Dietary Guide:</span>
          <span><strong className="text-[#6F7257]">V</strong> Vegetarian</span>
          <span>·</span>
          <span><strong className="text-[#6F7257]">GF</strong> Gluten-Free</span>
          <span>·</span>
          <span><strong className="text-[#6F7257]">VG</strong> Vegan</span>
        </div>
      </section>

      {/* Sticky Category Tabs Bar */}
      <div className="sticky top-[68px] sm:top-[74px] z-30 bg-[#F7F3EC]/95 backdrop-blur-md border-y border-[#B9AEA0]/30 py-2.5 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none py-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollToCategory(c.id)}
              className={`min-h-[44px] px-4 py-2 text-xs font-semibold tracking-wider rounded transition-colors whitespace-nowrap ${
                activeTab === c.id
                  ? 'bg-[#2B2926] text-[#FFFDF9]'
                  : 'bg-[#EEE9E1] text-[#2B2926]/80 hover:text-[#2B2926]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* CHEF'S SELECTION Highlight Card (Change 6) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-xl border border-[#B9AEA0]/40 p-6 sm:p-8 shadow-xs hover:border-[#6F7257]/50 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 aspect-[4/3] rounded-lg overflow-hidden bg-[#EEE9E1]">
              <img
                src={CHEF_RECOMMENDATION.image}
                alt={CHEF_RECOMMENDATION.altText}
                width={600}
                height={450}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
                  CHEF'S SELECTION
                </span>
                <span className="text-[10px] font-semibold text-[#6F7257] border border-[#6F7257]/40 px-2 py-0.5 rounded">
                  {CHEF_RECOMMENDATION.tag}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2926]">
                TONIGHT'S RECOMMENDATION
              </h2>
              <div className="flex items-baseline justify-between border-b border-[#B9AEA0]/20 pb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B2926]">
                  {CHEF_RECOMMENDATION.dish}
                </h3>
                <span className="text-xl font-semibold font-mono text-[#2B2926]">
                  ${CHEF_RECOMMENDATION.price}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2926]/75 leading-relaxed">
                {CHEF_RECOMMENDATION.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={onReserveClick}
                  className="min-h-[44px] px-5 py-2.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  Reserve For Tonight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories in exact matching order */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((cat) => {
          const items = MENU_ITEMS.filter((i) => i.category === cat.id);

          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-36 space-y-6">
              {/* Category Header with Approved Eyebrow Labels */}
              <div className="border-b border-[#2B2926]/30 pb-3">
                <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase block">
                  {cat.eyebrow}
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B2926]">
                    {cat.title}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-[#2B2926]/60">
                    {items.length} items
                  </span>
                </div>
              </div>

              {/* Items Grid with Individual Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {items.map((dish) => (
                  <div
                    key={dish.id}
                    className="group bg-[#FFFDF9] rounded-xl overflow-hidden border border-[#B9AEA0]/30 shadow-xs hover:shadow-md hover:border-[#6F7257]/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Dish Image */}
                      <div
                        onClick={() => setPreviewDish(dish)}
                        className="relative aspect-[4/3] overflow-hidden bg-[#EEE9E1] cursor-pointer"
                      >
                        <img
                          src={dish.image}
                          alt={dish.altText}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {dish.isChefSelection && (
                          <div className="absolute top-3 left-3 bg-[#B49A6A] text-[#FFFDF9] text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
                            Chef's Pick
                          </div>
                        )}
                        <div className="absolute bottom-3 right-3 p-1.5 bg-[#2B2926]/75 text-[#FFFDF9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Info & Dietary Tags */}
                      <div className="p-5 space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <h3 className="font-serif text-xl text-[#2B2926] font-medium leading-snug group-hover:text-[#6F7257] transition-colors">
                              {dish.name}
                            </h3>
                            {/* Dietary Tags (Change 6: olive text, 1px olive border, 4px radius, tiny uppercase) */}
                            {dish.dietary && dish.dietary.length > 0 && (
                              <div className="flex items-center gap-1.5 pt-0.5">
                                {dish.dietary.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] font-semibold uppercase text-[#6F7257] border border-[#6F7257] px-1.5 py-0.2 rounded-[4px]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-lg font-semibold font-mono tabular-nums text-[#2B2926] shrink-0">
                            ${dish.price}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#2B2926]/75 leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-1">
                      <button
                        onClick={onReserveClick}
                        className="w-full min-h-[44px] py-2 border border-[#B9AEA0]/50 hover:border-[#2B2926] hover:bg-[#2B2926] hover:text-[#FFFDF9] text-[#2B2926] text-[11px] font-semibold uppercase tracking-wider rounded transition-colors"
                      >
                        Reserve a Table
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Final Dark CTA (Change 6) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B2926] rounded-xl p-8 sm:p-12 text-center text-[#FFFDF9] space-y-5 shadow-lg">
          <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
            Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            YOUR TABLE IS WAITING.
          </h2>
          <p className="text-xs sm:text-sm text-[#FFFDF9]/80 max-w-md mx-auto">
            Tables for evening dinner service fill quickly on weekends. Reserve in advance to ensure your preferred seating.
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

      {/* Dish Zoom Modal */}
      {previewDish && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2926]/80 backdrop-blur-xs p-4"
          onClick={() => setPreviewDish(null)}
        >
          <div
            className="bg-[#FFFDF9] rounded-xl overflow-hidden max-w-lg w-full border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <img
                src={previewDish.image}
                alt={previewDish.altText}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl text-[#2B2926] font-medium">
                  {previewDish.name}
                </h3>
                <span className="text-xl font-medium font-mono text-[#2B2926]">
                  ${previewDish.price}
                </span>
              </div>
              <p className="text-sm text-[#2B2926]/80 leading-relaxed">
                {previewDish.description}
              </p>
              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setPreviewDish(null);
                    onReserveClick();
                  }}
                  className="flex-1 min-h-[44px] py-2.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  Reserve For This Dish
                </button>
                <button
                  onClick={() => setPreviewDish(null)}
                  className="min-h-[44px] px-5 py-2.5 border border-[#B9AEA0]/60 text-[#2B2926] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#EEE9E1]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
