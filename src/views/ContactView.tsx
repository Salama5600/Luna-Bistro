import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { MapBlock } from '../components/MapBlock';

export const ContactView: React.FC = () => {
  const todayDateString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '7:00 PM',
    guests: '2 Guests',
    occasion: 'None',
    specialRequests: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'date':
        if (!value) return 'Please select a reservation date.';
        if (value < todayDateString) return 'Reservation date cannot be in the past.';
        return '';
      case 'time':
        if (!value) return 'Please select a preferred dining time.';
        return '';
      case 'guests':
        if (!value) return 'Please select number of guests.';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      date: validateField('date', formData.date),
      time: validateField('time', formData.time),
      guests: validateField('guests', formData.guests),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, (formData as any)[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      date: true,
      time: true,
      guests: true,
    });

    if (validateAll()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '7:00 PM',
      guests: '2 Guests',
      occasion: 'None',
      specialRequests: '',
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-16 sm:space-y-24">
      {/* Hero Heading */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
          Welcome to Luna Bistro
        </span>
        <h1 className="font-serif text-[clamp(2rem,6vw,3.75rem)] font-normal text-[#2B2926] leading-[1.12] tracking-tight break-words max-w-4xl mx-auto">
          COME AS YOU ARE. STAY FOR THE EXPERIENCE.
        </h1>
        <p className="text-sm sm:text-base text-[#2B2926]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Request a table for dinner, discover our service hours, or reach out to our dining room team.
        </p>
      </section>

      {/* CHANGE 1: Working Reservation Section */}
      <section id="reservation" className="max-w-3xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="bg-[#FFFDF9] rounded-lg p-6 sm:p-10 border border-[#B9AEA0]/40 shadow-xs">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-5 animate-fadeIn">
              <div className="w-14 h-14 bg-[#6F7257]/15 rounded-full flex items-center justify-center mx-auto text-[#6F7257]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                  Request Received
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2926] font-normal">
                  RESERVATION RECORDED
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#2B2926]/85 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#2B2926]">{formData.name}</strong>. Your table request for{' '}
                <strong className="text-[#2B2926]">{formData.guests}</strong> on{' '}
                <strong className="text-[#2B2926]">{formData.date}</strong> at{' '}
                <strong className="text-[#2B2926]">{formData.time}</strong> has been received.
              </p>

              <div className="p-3.5 bg-[#EEE9E1]/80 rounded border border-[#B9AEA0]/30 text-xs text-[#2B2926]/75 max-w-md mx-auto">
                This is a concept project. No real booking was made.
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold uppercase tracking-wider text-[#C0613E] hover:text-[#9e4626] underline underline-offset-4 transition-colors min-h-[44px] px-3 py-2"
                >
                  Make another request
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                  BOOK YOUR TABLE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2926] font-normal">
                  RESERVE A TABLE.
                </h2>
                <p className="text-xs sm:text-sm text-[#2B2926]/70">
                  Dinner service is hosted every evening. Complete the request form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5 pt-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                    Full Name <span className="text-[#9A5B50]">*</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Clara Dupont"
                    className={`w-full min-h-[48px] px-3.5 rounded bg-[#F7F3EC]/50 border text-sm text-[#2B2926] transition-colors focus:outline-none ${
                      touched.name && errors.name
                        ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                        : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-xs text-[#9A5B50] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="res-email" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                      Email <span className="text-[#9A5B50]">*</span>
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="clara@example.com"
                      className={`w-full min-h-[48px] px-3.5 rounded bg-[#F7F3EC]/50 border text-sm text-[#2B2926] transition-colors focus:outline-none ${
                        touched.email && errors.email
                          ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                          : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-[#9A5B50] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="res-phone" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                      Phone <span className="text-xs font-normal lowercase text-[#2B2926]/60">(optional)</span>
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full min-h-[48px] px-3.5 rounded bg-[#F7F3EC]/50 border border-[#B9AEA0]/60 text-sm text-[#2B2926] transition-colors focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                    />
                  </div>
                </div>

                {/* Date, Time, Number of Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div>
                    <label htmlFor="res-date" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                      Date <span className="text-[#9A5B50]">*</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      min={todayDateString}
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      onBlur={() => handleBlur('date')}
                      className={`w-full min-h-[48px] px-3 rounded bg-[#F7F3EC]/50 border text-xs sm:text-sm text-[#2B2926] transition-colors focus:outline-none ${
                        touched.date && errors.date
                          ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                          : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                      }`}
                    />
                    {touched.date && errors.date && (
                      <p className="text-xs text-[#9A5B50] mt-1">{errors.date}</p>
                    )}
                  </div>

                  {/* Time dropdown 5:00 PM to 10:30 PM in 30-min steps */}
                  <div>
                    <label htmlFor="res-time" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                      Time <span className="text-[#9A5B50]">*</span>
                    </label>
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => handleChange('time', e.target.value)}
                      onBlur={() => handleBlur('time')}
                      className="w-full min-h-[48px] px-3 rounded bg-[#F7F3EC]/50 border border-[#B9AEA0]/60 text-xs sm:text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                    >
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                    </select>
                  </div>

                  {/* Number of Guests (1 to 10 plus 11+ contact us) */}
                  <div>
                    <label htmlFor="res-guests" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                      Guests <span className="text-[#9A5B50]">*</span>
                    </label>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => handleChange('guests', e.target.value)}
                      onBlur={() => handleBlur('guests')}
                      className="w-full min-h-[48px] px-3 rounded bg-[#F7F3EC]/50 border border-[#B9AEA0]/60 text-xs sm:text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5 Guests">5 Guests</option>
                      <option value="6 Guests">6 Guests</option>
                      <option value="7 Guests">7 Guests</option>
                      <option value="8 Guests">8 Guests</option>
                      <option value="9 Guests">9 Guests</option>
                      <option value="10 Guests">10 Guests</option>
                      <option value="11+ (contact us)">11+ (contact us)</option>
                    </select>
                  </div>
                </div>

                {/* Occasion dropdown (optional) */}
                <div>
                  <label htmlFor="res-occasion" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                    Occasion <span className="text-xs font-normal lowercase text-[#2B2926]/60">(optional)</span>
                  </label>
                  <select
                    id="res-occasion"
                    value={formData.occasion}
                    onChange={(e) => handleChange('occasion', e.target.value)}
                    className="w-full min-h-[48px] px-3.5 rounded bg-[#F7F3EC]/50 border border-[#B9AEA0]/60 text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                  >
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Date Night">Date Night</option>
                    <option value="Business Dinner">Business Dinner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Special Requests (optional) */}
                <div>
                  <label htmlFor="res-requests" className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1.5">
                    Special Requests <span className="text-xs font-normal lowercase text-[#2B2926]/60">(optional)</span>
                  </label>
                  <textarea
                    id="res-requests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                    placeholder="Dietary notes, seating preferences, anniversary wishes..."
                    className="w-full p-3.5 rounded bg-[#F7F3EC]/50 border border-[#B9AEA0]/60 text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                  />
                </div>

                {/* Primary Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] bg-[#C0613E] hover:bg-[#a64e2d] text-[#FFFDF9] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
                  >
                    Reserve a Table
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* VISIT LUNA BISTRO Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapBlock />
      </section>
    </div>
  );
};
