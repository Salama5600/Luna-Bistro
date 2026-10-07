import React, { useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import {
  RESTAURANT_INFO,
  SIGNATURE_DISHES,
  MENU_ITEMS,
  HOME_GALLERY_PREVIEW,
  TESTIMONIALS,
  ASSET_IMAGES,
} from '../data/restaurantData';
import { MapBlock } from '../components/MapBlock';

interface HomeViewProps {
  onNavigate: (route: string) => void;
  onReserveClick: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onReserveClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starters' | 'pasta' | 'mains' | 'desserts'>('starters');

  const filteredPreviewItems = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  }).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 02 — HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Atmospheric Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_IMAGES.hero}
            alt="Warm candlelit dining tables and interior atmosphere at Luna Bistro"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
            fetchPriority="high"
          />
          {/* Measured Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B2926]/90 via-[#2B2926]/70 to-[#2B2926]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2926]/85 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl sm:max-w-3xl space-y-6 text-[#FFFDF9]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#B49A6A] uppercase">
              <span>{RESTAURANT_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#FFFDF9]">
              WHERE EVERY DISH <br className="hidden sm:inline" />
              TELLS A STORY.
            </h1>

            {/* Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#FFFDF9]/85 font-light leading-relaxed max-w-xl">
              {RESTAURANT_INFO.shortBio}
            </p>

            {/* CHANGE 2: Swapped Buttons with Terracotta Accent */}
            <div className="relative p-2 rounded-lg bg-black/25 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none inline-block">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* PRIMARY: Reserve a Table (Terracotta) */}
                <button
                  onClick={onReserveClick}
                  className="min-h-[48px] px-8 py-3.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-150 hover:-translate-y-0.5 text-center flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
                >
                  Reserve a Table
                </button>

                {/* SECONDARY: Explore Our Menu (Transparent with 1px soft-white border) */}
                <button
                  onClick={() => onNavigate('/menu')}
                  className="min-h-[48px] px-8 py-3.5 border border-[#FFFDF9]/80 hover:border-[#FFFDF9] hover:bg-white/10 text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
                >
                  Explore Our Menu
                </button>
              </div>
            </div>

            {/* Key Quick Details */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#FFFDF9]/75 border-t border-white/15">
              <span>125 Olive Street, Downtown</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Dinner Service Nightly from 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — ABOUT SECTION (kept as is per Change 3 Location A) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2926] font-normal leading-tight">
                A TABLE MADE FOR MEMORIES.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#2B2926]/80 leading-relaxed font-light">
              At Luna Bistro, we believe great food is only part of the experience. From carefully selected ingredients to the atmosphere around the table, every detail is designed to make your visit memorable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#B9AEA0]/30">
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#2B2926]">Seasonality</h3>
                <p className="text-xs text-[#2B2926]/70 leading-relaxed">
                  Produce harvested at peak ripeness from coastal growers.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#2B2926]">Craft</h3>
                <p className="text-xs text-[#2B2926]/70 leading-relaxed">
                  Handmade pastas, slow-braised cuts, and cold-pressed oils.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#2B2926]">Hospitality</h3>
                <p className="text-xs text-[#2B2926]/70 leading-relaxed">
                  Unpretentious warmth that makes every guest feel at home.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B2926] hover:text-[#6F7257] transition-colors min-h-[44px]"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Editorial Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#B9AEA0]/30 aspect-[4/3] bg-[#EEE9E1]">
              <img
                src={ASSET_IMAGES.about}
                alt="Chef preparing artisanal Mediterranean dishes in an open kitchen"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 — SIGNATURE DISHES */}
      <section className="bg-[#EEE9E1]/60 py-16 sm:py-20 border-y border-[#B9AEA0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                Featured Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2926] font-normal">
                A TASTE OF LUNA.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/menu')}
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B2926] hover:text-[#6F7257] transition-colors min-h-[44px]"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 4 Signature Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SIGNATURE_DISHES.map((dish) => (
              <div
                key={dish.id}
                className="group bg-[#FFFDF9] rounded-lg overflow-hidden border border-[#B9AEA0]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EEE9E1]">
                    <img
                      src={dish.image}
                      alt={dish.altText}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#2B2926]/80 backdrop-blur-xs text-[#FFFDF9] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                      {dish.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl text-[#2B2926] font-medium leading-snug group-hover:text-[#6F7257] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-base font-medium text-[#2B2926] font-mono tabular-nums shrink-0">
                        ${dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#2B2926]/70 leading-relaxed">
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
      </section>

      {/* 05 — MENU PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
            Curated Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2926] font-normal">
            SEASONAL HARVEST & FLAVOR.
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2926]/75">
            Designed for shared conversations, vibrant aromas, and effortless enjoyment.
          </p>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {(
              [
                { label: 'Starters', val: 'starters' },
                { label: 'Pasta & Grains', val: 'pasta' },
                { label: 'Mains', val: 'mains' },
                { label: 'Desserts', val: 'desserts' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`min-h-[44px] px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  selectedCategory === cat.val
                    ? 'bg-[#2B2926] text-[#FFFDF9]'
                    : 'bg-[#EEE9E1] text-[#2B2926]/80 hover:text-[#2B2926]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Dishes List (Names & Prices per brief) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filteredPreviewItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-[#FFFDF9] border border-[#B9AEA0]/30 shadow-xs flex items-center justify-between"
            >
              <h3 className="font-serif text-lg sm:text-xl text-[#2B2926] font-medium">
                {item.name}
              </h3>
              <span className="text-base font-semibold font-mono tabular-nums text-[#2B2926]">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('/menu')}
            className="min-h-[44px] px-6 py-3 bg-[#2B2926] hover:bg-[#1a1917] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-150 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>View Full Menu & Drinks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 06 — RESTAURANT EXPERIENCE */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#2B2926] text-[#FFFDF9] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={ASSET_IMAGES.interior}
            alt="Luna Bistro candlelit interior dining setting"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
            The Dining Atmosphere
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            GOOD FOOD. GOOD PEOPLE. <br className="hidden sm:inline" />
            GOOD MOMENTS.
          </h2>

          <p className="text-base sm:text-xl text-[#FFFDF9]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Whether it's a quiet dinner for two or a celebration with friends, Luna Bistro is made for moments worth remembering.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onReserveClick}
              className="min-h-[44px] px-7 py-3 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              Reserve a Table
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="min-h-[44px] px-7 py-3 border border-white/40 hover:border-white text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              Our Story & Space
            </button>
          </div>
        </div>
      </section>

      {/* 07 — GALLERY SECTION (CHANGE 4: 2 UNIQUE images with SEE THE GALLERY →) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
              Visual Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2926] font-normal">
              A GLIMPSE OF LUNA.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/gallery')}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B2926] hover:text-[#C0613E] transition-colors min-h-[44px]"
          >
            <span>SEE THE GALLERY →</span>
          </button>
        </div>

        {/* 2 Unique Photos for Home */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HOME_GALLERY_PREVIEW.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('/gallery')}
              className="group relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#B9AEA0]/30 shadow-xs cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-[#FFFDF9]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#B49A6A]">
                  {item.caption}
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-medium mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — TESTIMONIALS */}
      <section className="bg-[#EEE9E1]/50 py-16 border-y border-[#B9AEA0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
              Guest Impressions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2926] font-normal">
              STORIES FROM OUR TABLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#FFFDF9] p-6 sm:p-8 rounded-lg border border-[#B9AEA0]/30 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <Quote className="w-6 h-6 text-[#B49A6A]/60 shrink-0" />
                <p className="font-serif text-lg sm:text-xl text-[#2B2926] italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#B9AEA0]/20 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#2B2926]">{t.author}</span>
                  <span className="text-[#6F7257]">{t.occasion}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-[#2B2926]/50">
            Fictional sample testimonials for concept project presentation.
          </p>
        </div>
      </section>

      {/* 09 — RESERVATION CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B2926] rounded-2xl p-8 sm:p-14 text-center text-[#FFFDF9] space-y-6 relative overflow-hidden shadow-xl">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
              Reserve An Evening
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              YOUR TABLE IS WAITING.
            </h2>
            <p className="text-sm sm:text-base text-[#FFFDF9]/80 font-light max-w-lg mx-auto">
              Make your next evening one to remember.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onReserveClick}
              className="min-h-[48px] px-8 py-3.5 bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-150 hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* 10 — LOCATION & HOURS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <MapBlock />
      </section>
    </div>
  );
};
