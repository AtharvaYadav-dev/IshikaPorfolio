import React, { useState } from 'react';
import { 
  Activity, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function Footer({ onOpenBooking }) {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleQuickCallback = (e) => {
    e.preventDefault();
    if (quickPhone) {
      setQuickSent(true);
      setTimeout(() => setQuickSent(false), 5000);
      setQuickPhone('');
    }
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-28 lg:pb-12 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-navy-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-gold-500 to-gold-400 flex items-center justify-center text-navy-950 shadow-md">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white font-heading tracking-tight">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-gold-400 font-semibold">
                  {DOCTOR_INFO.degrees} • {DOCTOR_INFO.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Providing compassionate, personalized, and evidence-backed physiotherapy care for orthopedic, musculoskeletal, sports, and neurological conditions. Bringing clinical healing directly to your home.
            </p>

            <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Medical Credentials</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {DOCTOR_INFO.registration}
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Connect With Dr. Ishika</span>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-rose-900/40 hover:border-rose-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-900/40 hover:border-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-900/40 hover:border-red-700 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-950 hover:border-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Dr. Ishika</a></li>
              <li><a href="#treatments" className="hover:text-gold-400 transition-colors">Treatments Offered</a></li>
              <li><a href="#conditions" className="hover:text-gold-400 transition-colors">Conditions Treated</a></li>
              <li><a href="#home-visits" className="hover:text-gold-400 transition-colors">How Home Visits Work</a></li>
              <li><a href="#service-areas" className="hover:text-gold-400 transition-colors">Mumbai Service Areas</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact & Appointment</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas in Mumbai */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Home Visit Localities
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <strong className="text-white block font-bold text-xs">Sakinaka (PIN 400072)</strong>
                <span className="text-[11px] text-slate-400">Metro Station, 90ft Road & surroundings</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <strong className="text-white block font-bold text-xs">Ghatkopar West (PIN 400086)</strong>
                <span className="text-[11px] text-slate-400">LBS Marg, Amrut Nagar, Station Area</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <strong className="text-white block font-bold text-xs">Kurla West (PIN 400070)</strong>
                <span className="text-[11px] text-slate-400">Phoenix Marketcity, CST Road</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-900 border border-navy-800">
                <strong className="text-white block font-bold text-xs">Vidyavihar (PIN 400077)</strong>
                <span className="text-[11px] text-slate-400">Somaiya Campus, Station Area</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Callback & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Contact & Quick Callback
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-bold text-white">{DOCTOR_INFO.phone}</span>
              </a>
              <a href={`mailto:${DOCTOR_INFO.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors break-all">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{DOCTOR_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{DOCTOR_INFO.workingHours}</span>
              </div>
            </div>

            {/* Quick Callback Mini Form */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-300 block mb-1.5">
                Request an Immediate Callback:
              </span>
              {quickSent ? (
                <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Callback requested! We will call you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickCallback} className="flex gap-1.5">
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-navy-900 border border-navy-700 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="btn-pill-gold px-4 py-2.5 text-xs shrink-0 flex items-center gap-1"
                  >
                    <span>Call Me</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p>© {new Date().getFullYear()} Dr. Ishika Gupta (BPT). All Rights Reserved.</p>
            <p className="mt-0.5 text-slate-500 text-[11px]">
              Maharashtra State Council for Occupational Therapy and Physiotherapy Reg. No.: 2023/12345.
            </p>
          </div>

          <div className="max-w-md text-slate-500 text-[10px] leading-relaxed">
            <strong>Medical Disclaimer:</strong> Content on this website is for informational and appointment scheduling purposes. Always consult directly with a qualified medical professional for specific diagnosis and prescription.
          </div>
        </div>

      </div>
    </footer>
  );
}
