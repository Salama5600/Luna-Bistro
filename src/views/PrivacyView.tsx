import React from 'react';

export const PrivacyView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2 border-b border-[#B9AEA0]/30 pb-4">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Legal Notice
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2B2926]">
          PRIVACY POLICY
        </h1>
        <p className="text-xs text-[#2B2926]/60">
          Last updated: October 2026 · Sample Policy for Concept Portfolio Project
        </p>
      </div>

      <div className="p-4 rounded bg-[#EEE9E1] border border-[#B9AEA0]/30 text-xs text-[#2B2926]/80">
        <strong>Concept Notice:</strong> Luna Bistro is a fictional restaurant concept project. Any contact information or reservation requests entered on this website are kept strictly client-side and are not transmitted to or stored in any live production database.
      </div>

      <div className="space-y-6 text-sm text-[#2B2926]/80 leading-relaxed">
        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">1. Data Collection Demonstration</h2>
          <p>
            When utilizing our demonstration reservation form, you enter sample fields such as name, email, phone number, and dining preferences. This data remains in your local browser session and is cleared when the page refreshes.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">2. Purpose of Demonstration</h2>
          <p>
            The purpose of this website is to showcase contemporary frontend design, editorial typography, accessibility, and responsive user experience for hospitality brands.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-xl text-[#2B2926]">3. Inquiries</h2>
          <p>
            For questions regarding this concept portfolio project, please refer to the project documentation.
          </p>
        </div>
      </div>
    </div>
  );
};
