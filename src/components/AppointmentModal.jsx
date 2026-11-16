import React, { useState } from 'react';
import { X, Calendar, MapPin, Send, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function AppointmentModal({ isOpen, onClose, initialCondition, initialArea, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: initialArea || 'Ghatkopar West',
    service: initialService || 'Home Visit Physiotherapy',
    condition: initialCondition || 'Knee / Joint / Back Pain',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Dr. Ishika Gupta,%0A%0AI would like to book a Physiotherapy appointment.%0A%0A*Name:* ${formData.name || 'Patient'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Area:* ${formData.area}%0A*Care:* ${formData.service}%0A*Condition:* ${formData.condition}%0A*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blush-200 overflow-hidden transform transition-all">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Fast Consultation Booking</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Schedule Care with Dr. Ishika Gupta
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            BPT • Maharashtra OTPT Council Reg. No. 2023/12345
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-navy-950">
                Request Submitted!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you! We have received your request for {formData.area}. Dr. Ishika's team will contact you within 30 minutes.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp Now
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-600 hover:bg-slate-100"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Your Location *
                  </label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <option value="Sakinaka">Sakinaka (400072)</option>
                    <option value="Ghatkopar West">Ghatkopar West (400086)</option>
                    <option value="Kurla West">Kurla West (400070)</option>
                    <option value="Vidyavihar">Vidyavihar (400077)</option>
                    <option value="Nearby Area">Nearby Central Mumbai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Care Mode *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-400 font-medium"
                  >
                    <option value="Home Visit Physiotherapy">Home Visit (Bedside)</option>
                    <option value="Initial Consultation">Initial Consultation</option>
                    <option value="Post-Op Rehabilitation">Post-Op Rehab</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Condition / Pain Area *
                </label>
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  placeholder="e.g. Knee pain, Frozen shoulder, Sciatica, Stroke rehab"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Surgery date, doctor's referral or convenient time..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Or Book Instantly on WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-1 text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your medical information is kept strictly confidential.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
