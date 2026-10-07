import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    partySize: '2',
    seatingArea: 'Main Dining Room',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Please provide a valid contact number.';
    }
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a preferred time.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real reservation processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '19:00',
      partySize: '2',
      seatingArea: 'Main Dining Room',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2926]/75 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F7F3EC] text-[#2B2926] rounded-lg max-w-lg w-full p-6 sm:p-8 border border-[#B9AEA0]/40 shadow-xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close reservation modal"
          className="absolute top-5 right-5 text-[#2B2926]/60 hover:text-[#2B2926] p-1.5 rounded-full hover:bg-[#EEE9E1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7257]"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-[#6F7257]/15 rounded-full flex items-center justify-center mx-auto text-[#6F7257]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6F7257] font-semibold mb-1">
                Confirmation Notice
              </p>
              <h3 id="reservation-title" className="font-serif text-3xl font-normal text-[#2B2926]">
                TABLE REQUEST RECEIVED.
              </h3>
            </div>
            <p className="text-sm text-[#2B2926]/75 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#2B2926]">{formData.name}</strong>. We'll be in touch to confirm your reservation for{' '}
              <strong className="text-[#2B2926]">{formData.partySize} guests</strong> on{' '}
              <strong className="text-[#2B2926]">{formData.date}</strong> at{' '}
              <strong className="text-[#2B2926]">{formData.time}</strong>.
            </p>
            <div className="pt-4 border-t border-[#B9AEA0]/30 text-xs text-[#2B2926]/60 space-y-1">
              <p>{RESTAURANT_INFO.address}</p>
              <p>For immediate changes, call {RESTAURANT_INFO.phone}</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-6 bg-[#2B2926] hover:bg-[#1a1917] text-[#FFFDF9] text-sm font-semibold rounded transition-all duration-150 hover:-translate-y-0.5"
              >
                Back to Luna Bistro
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#6F7257] uppercase">
                Reservations
              </span>
              <h2 id="reservation-title" className="font-serif text-2xl sm:text-3xl text-[#2B2926] mt-1">
                YOUR TABLE IS WAITING.
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2926]/70 mt-1">
                Make your next evening one to remember.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                  Full Name <span className="text-[#9A5B50]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Mitchell"
                  className={`w-full h-12 px-3.5 rounded bg-[#FFFDF9] border text-sm text-[#2B2926] transition-colors focus:outline-none ${
                    errors.name
                      ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                      : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-[#9A5B50] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                    Email <span className="text-[#9A5B50]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className={`w-full h-12 px-3.5 rounded bg-[#FFFDF9] border text-sm text-[#2B2926] transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                        : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#9A5B50] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                    Phone <span className="text-[#9A5B50]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full h-12 px-3.5 rounded bg-[#FFFDF9] border text-sm text-[#2B2926] transition-colors focus:outline-none ${
                      errors.phone
                        ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                        : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#9A5B50] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                    Date <span className="text-[#9A5B50]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full h-12 px-3 rounded bg-[#FFFDF9] border text-xs sm:text-sm text-[#2B2926] transition-colors focus:outline-none ${
                        errors.date
                          ? 'border-[#9A5B50] focus:ring-1 focus:ring-[#9A5B50]'
                          : 'border-[#B9AEA0]/60 focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-[#9A5B50] mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-12 px-3 rounded bg-[#FFFDF9] border border-[#B9AEA0]/60 text-xs sm:text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full h-12 px-3 rounded bg-[#FFFDF9] border border-[#B9AEA0]/60 text-xs sm:text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7+">7+ (Private Dining)</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                  Seating Area
                </label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                  className="w-full h-12 px-3.5 rounded bg-[#FFFDF9] border border-[#B9AEA0]/60 text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                >
                  <option value="Main Dining Room">Main Dining Room</option>
                  <option value="Intimate Candlelit Booth">Intimate Candlelit Booth</option>
                  <option value="Olive Garden Terrace (Covered)">Olive Garden Terrace (Covered)</option>
                  <option value="Chef's Open Counter">Chef's Open Counter</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold tracking-wide text-[#2B2926] uppercase mb-1">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Anniversary celebration, dietary restrictions, etc."
                  className="w-full p-3 rounded bg-[#FFFDF9] border border-[#B9AEA0]/60 text-sm text-[#2B2926] focus:outline-none focus:border-[#6F7257] focus:ring-1 focus:ring-[#6F7257]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#2B2926] hover:bg-[#1a1917] text-[#FFFDF9] text-sm font-semibold tracking-wider uppercase rounded transition-all duration-150 hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Confirming Request...</span>
                    </>
                  ) : (
                    <span>Reserve a Table</span>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-[#2B2926]/55">
                We hold tables for 15 minutes. For parties over 6, please call us directly.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
