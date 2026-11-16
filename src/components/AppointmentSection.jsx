import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function AppointmentSection({ prefillCondition, prefillArea, prefillService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: prefillArea || 'Ghatkopar West',
    serviceMode: 'Home Visit Physiotherapy',
    condition: prefillCondition || 'Knee / Joint / Back Pain',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Dr. Ishika Gupta,%0A%0AI would like to book a Physiotherapy appointment.%0A%0A*Name:* ${formData.name || 'Patient'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Area:* ${formData.area}%0A*Mode:* ${formData.serviceMode}%0A*Condition:* ${formData.condition}%0A*Preferred Time:* ${formData.preferredTime}%0A*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            <span>Consultation & Home Visits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Book an Appointment with Dr. Ishika Gupta
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Request an in-home clinical physiotherapy session in Sakinaka, Ghatkopar, Kurla, or Vidyavihar. Fast turnaround within 30 minutes.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Reach Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-7 sm:p-9 rounded-3xl shadow-card border border-navy-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  Direct Clinical Reach
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1 font-heading">
                  Get In Touch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Feel free to call or WhatsApp for emergency consultations, post-surgery scheduling, or area confirmation.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gold-400 text-navy-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Phone & WhatsApp</span>
                    <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="font-extrabold text-white text-base hover:text-gold-300 transition-colors">
                      {DOCTOR_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400 text-navy-950 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Official Email</span>
                    <a href={`mailto:${DOCTOR_INFO.email}`} className="font-semibold text-white hover:text-emerald-300 transition-colors break-all">
                      {DOCTOR_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-rose-400 text-navy-950 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Working Hours</span>
                    <div className="font-semibold text-white">
                      Monday to Saturday: 8:00 AM – 8:00 PM
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Sunday: By Prior Appointment
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-400 text-navy-950 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Primary Coverage Zones</span>
                    <div className="font-semibold text-white">
                      Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Mumbai, Maharashtra
                    </div>
                  </div>
                </div>

              </div>

              {/* Council Reg note */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Maharashtra OTPT Council Reg. No. 2023/12345</span>
              </div>

            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-extrabold text-sm font-heading">Prefer chatting on WhatsApp?</h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Send your prescription, MRI/X-ray reports, or query directly.
                </p>
              </div>
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20consult%20about%20physiotherapy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center gap-1.5 transition-all hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in-up">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-950 font-heading">
                    Appointment Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy-950 font-bold">{formData.name}</strong>. Dr. Ishika Gupta’s clinic will contact you at <strong className="text-navy-950 font-bold">{formData.phone}</strong> shortly to confirm your {formData.serviceMode} slot in {formData.area}.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-full font-bold text-xs text-navy-950 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={handleWhatsAppBooking}
                      className="px-5 py-3 rounded-full font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp Now</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-blush-200">
                    <div>
                      <h3 className="text-xl font-extrabold text-navy-950 font-heading">
                        Request Home Session / Consultation
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill your details below or book directly with 1-click on WhatsApp.
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                      <Sparkles className="w-3 h-3" /> Quick Response
                    </span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Patient / Requester Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Phone Number (WhatsApp Preferred) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  {/* Area & Care Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Select Your Location (Mumbai) *
                      </label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 font-medium"
                      >
                        <option value="Sakinaka">Sakinaka (PIN 400072)</option>
                        <option value="Ghatkopar West">Ghatkopar West (PIN 400086)</option>
                        <option value="Kurla West">Kurla West (PIN 400070)</option>
                        <option value="Vidyavihar">Vidyavihar (PIN 400077)</option>
                        <option value="Ghatkopar East">Ghatkopar East (Nearby)</option>
                        <option value="Asalpha / Chandivali">Asalpha / Chandivali (Nearby)</option>
                        <option value="Other Location">Other Area in Mumbai</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Care Type *
                      </label>
                      <select
                        name="serviceMode"
                        value={formData.serviceMode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 font-medium"
                      >
                        <option value="Home Visit Physiotherapy">Home Visit Physiotherapy (Bedside Care)</option>
                        <option value="Initial Clinical Assessment">Initial Clinical Assessment</option>
                        <option value="Post-Operative Rehabilitation">Post-Operative Rehabilitation</option>
                        <option value="Neurological Rehabilitation">Neurological Rehabilitation</option>
                        <option value="Online / Video Consultation">Online / Video Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Condition & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Primary Medical Condition *
                      </label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 font-medium"
                      >
                        <option value="Knee / Joint / Back Pain">Knee, Joint, Neck or Back Pain</option>
                        <option value="Osteoarthritis (OA) / RA">Osteoarthritis (OA) / Rheumatoid Arthritis</option>
                        <option value="Frozen Shoulder">Frozen Shoulder</option>
                        <option value="Sciatica & Disc Bulge">Sciatica & Disc Bulge</option>
                        <option value="Stroke Rehab / Parkinson's">Stroke Rehab / Parkinson's</option>
                        <option value="Post-Operative (TKR / THR / Spine)">Post-Operative (TKR, THR, Spine, ACL)</option>
                        <option value="Sports Injury & Sprain">Sports Injury & Sprain</option>
                        <option value="Geriatric Mobility Care">Geriatric / Senior Citizen Care</option>
                        <option value="Other / General Consultation">Other / General Physiotherapy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 mb-1.5">
                        Preferred Time Window
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 font-medium"
                      >
                        <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                        <option value="Earliest Available Slot">Earliest Available Slot</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special requirements */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1.5">
                      Brief Description of Symptoms or Surgery Date (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Severe knee pain while walking, or underwent knee replacement on 10th Nov..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Action Pill Buttons with Hover Glow */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="w-full btn-pill-gold py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all hover:scale-102 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Instantly on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-500 pt-1">
                    🔒 Your medical details are strictly confidential. Dr. Ishika Gupta personally reviews every request.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
