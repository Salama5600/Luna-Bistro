import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const MapBlock: React.FC = () => {
  return (
    <section className="rounded-xl overflow-hidden border border-[#B9AEA0]/40 bg-[#FFFDF9] shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Info Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6F7257]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Hours</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2926] font-medium">
              VISIT LUNA BISTRO
            </h3>

            {/* Address */}
            <div className="space-y-1 text-sm text-[#2B2926]">
              <p className="text-xs uppercase font-semibold tracking-wider text-[#6F7257]">Address</p>
              <p className="font-medium">{RESTAURANT_INFO.address}</p>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#2B2926] pt-1">
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-[#6F7257]">Phone</p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="font-medium hover:text-[#C0613E] transition-colors underline-offset-2 hover:underline"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-[#6F7257]">Email</p>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="font-medium hover:text-[#C0613E] transition-colors underline-offset-2 hover:underline truncate block"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            {/* Service Hours */}
            <div className="pt-2 border-t border-[#B9AEA0]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B2926]">
                <Clock className="w-3.5 h-3.5 text-[#6F7257]" />
                <span>Hours of Service</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#2B2926]/85">
                {RESTAURANT_INFO.hours.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-0.5">
                    <span className="font-medium text-[#2B2926]">{item.days}</span>
                    <span className="text-[#2B2926]/80 tabular-nums">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#2B2926]/60 border-t border-[#B9AEA0]/20">
            {RESTAURANT_INFO.conceptDisclaimer}
          </div>
        </div>

        {/* Map Visualization Column */}
        <div className="lg:col-span-7 bg-[#EEE9E1] border-t lg:border-t-0 lg:border-l border-[#B9AEA0]/40 p-4 sm:p-6 flex flex-col justify-between space-y-3">
          <div className="w-full rounded-[6px] overflow-hidden border border-[#B9AEA0] shadow-xs bg-[#EEE9E1]">
            <iframe
              src="https://maps.google.com/maps?q=125+Olive+Street,+Downtown&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Map showing Luna Bistro location"
              loading="lazy"
              className="w-full h-[320px] lg:h-[400px] border-0 block"
            />
          </div>

          <div className="pt-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=125+Olive+Street,+Downtown"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2B2926] hover:text-[#C0613E] transition-colors group"
            >
              <span>GET DIRECTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
