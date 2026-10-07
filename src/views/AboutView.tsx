import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/restaurantData';

interface AboutViewProps {
  onReserveClick: () => void;
  onNavigate: (route: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onReserveClick, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Heritage & Hospitality
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#2B2926] font-normal">
          OUR STORY
        </h1>
        <p className="text-base sm:text-lg text-[#2B2926]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Great food is only part of the experience.
        </p>
      </section>

      {/* A THOUGHTFUL KIND OF HOSPITALITY Section (CHANGE 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                A Thoughtful Kind of Hospitality
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2926] font-normal leading-tight">
                A THOUGHTFUL KIND OF HOSPITALITY.
              </h2>
            </div>

            {/* Approved Rewritten Copy */}
            <p className="text-sm sm:text-base text-[#2B2926]/85 leading-relaxed font-light">
              Luna Bistro began with a simple idea: a good evening should feel effortless. We cook with what is in season, set tables that invite you to linger, and look after every guest as if they were dining at our own table.
            </p>

            {/* Rewritten Core Details */}
            <div className="space-y-4 pt-4 border-t border-[#B9AEA0]/30">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#2B2926]">Ingredients</h3>
                <p className="text-xs sm:text-sm text-[#2B2926]/75 leading-relaxed">
                  We work with small producers and seasonal markets: sun-ripened tomatoes, good olive oil, fresh herbs, and fish and lamb sourced with care.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#2B2926]">Seasonality</h3>
                <p className="text-xs sm:text-sm text-[#2B2926]/75 leading-relaxed">
                  Our menu changes with the seasons. Each dish is built around what is at its best right now, with simple Mediterranean technique.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#2B2926]">Hospitality</h3>
                <p className="text-xs sm:text-sm text-[#2B2926]/75 leading-relaxed">
                  Warm, unhurried service. We want you to feel at home from the first welcome to the last coffee.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#B9AEA0]/30 aspect-[4/3] bg-[#EEE9E1]">
              <img
                src={ASSET_IMAGES.about}
                alt="Chef plating handmade fresh pasta at the kitchen pass"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#B9AEA0]/30 aspect-[4/3] bg-[#EEE9E1]">
              <img
                src={ASSET_IMAGES.interior}
                alt="Luna Bistro dining table with warm candlelight and rustic ceramics"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* CHANGE 3: Meet the Kitchen block right after the two photos */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                FROM THE LUNA KITCHEN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2926] font-normal leading-tight">
                COOKED WITH CARE.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#2B2926]/80 leading-relaxed font-light">
              Our kitchen team cooks with confidence and restraint. Fresh pasta is rolled daily, fish is grilled simply with lemon and herbs, and every plate leaves the pass the way we would want to receive it.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/menu')}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B2926] hover:text-[#C0613E] transition-colors min-h-[44px]"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B2926] rounded-xl p-8 sm:p-14 text-center text-[#FFFDF9] space-y-6 shadow-xl">
          <span className="text-xs font-semibold tracking-widest text-[#B49A6A] uppercase">
            Join Us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal">
            YOUR TABLE IS WAITING.
          </h2>
          <p className="text-xs sm:text-sm text-[#FFFDF9]/80 max-w-lg mx-auto font-light leading-relaxed">
            We would be honored to host you and your loved ones. Experience the aromas, the hospitality, and the flavors tonight.
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
