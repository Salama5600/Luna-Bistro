import React from 'react';

export const TermsView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2 border-b border-[#B9AEA0]/30 pb-4">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Terms of Use
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2B2926]">
          TERMS OF SERVICE
        </h1>
        <p className="text-xs text-[#2B2926]/60">
          Last updated: October 2026 · Sample Terms for Concept Portfolio Project
        </p>
      </div>

      <div className="p-4 rounded bg-[#EEE9E1] border border-[#B9AEA0]/30 text-xs text-[#2B2926]/80">
        <strong>Concept Notice:</strong> This website is an architectural and visual design demonstration. All dishes, prices, hours, reviews, and addresses are fictional sample content prepared solely for portfolio evaluation.
      </div>

      <div className="space-y-6 text-sm text-[#2B2926]/80 leading-relaxed">
        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">1. Concept Demonstrations</h2>
          <p>
            By viewing or interacting with this site, you acknowledge that Luna Bistro is a creative portfolio project. No financial transactions, commercial dining contracts, or enforceable booking obligations are entered into through this interface.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">2. Content & Photography</h2>
          <p>
            All culinary and ambient imagery, typography selections, and design components are curated to represent an elevated modern Mediterranean dining experience.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">3. Contact & Inquiries</h2>
          <p>
            All listed phone numbers and email domains are placeholders created for testing interface flows.
          </p>
        </div>
      </div>
    </div>
  );
};
