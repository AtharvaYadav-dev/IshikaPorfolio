import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Award, 
  CheckCircle2, 
  Home, 
  Sparkles,
  UserCheck,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative overflow-hidden hero-medical-bg pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Responsive CSS Grid (Zero absolute positioning) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Sub-headline, Text & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Verification Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200 text-xs text-slate-800 font-semibold shadow-2xs">
              <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                <Award className="w-4 h-4 text-aqua-600" />
                {DOCTOR_INFO.degrees}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-aqua-600" />
                Maharashtra OTPT Reg. No.: 2023/12345
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-aqua-600 flex items-center justify-center lg:justify-start gap-1.5">
                <Sparkles className="w-4 h-4 text-aqua-500" />
                <span>Evidence-Based Rehabilitation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] font-heading">
                {DOCTOR_INFO.name}
                <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 mt-2 font-heading">
                  {DOCTOR_INFO.title}
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="inline-block bg-aqua-50 border border-aqua-200 px-4 py-2 rounded-xl text-base sm:text-xl font-bold text-aqua-800">
              "{DOCTOR_INFO.primaryTagline}"
            </div>

            {/* Short Intro Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {DOCTOR_INFO.heroText}
            </p>

            {/* Service Areas Banner */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 flex flex-col sm:flex-row items-center gap-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 whitespace-nowrap">
                <MapPin className="w-4 h-4 text-aqua-600 shrink-0" />
                Home Visits Available In:
              </div>
              <div className="text-slate-700 font-semibold text-center sm:text-left">
                Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
              </div>
            </div>

            {/* Buttons: Primary "Request a Home Visit" & Secondary "View Treatments" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-aqua px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2.5"
              >
                <span>Request a Home Visit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#treatments"
                className="w-full sm:w-auto btn-outline-slate px-7 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>View Treatments</span>
              </a>
            </div>

            {/* Trust Points Responsive Row */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">1-on-1 Dedicated Time</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">Sanitized Portable Gear</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">Customized Roadmaps</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">Official Claim Receipts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Medical Card Flow (Zero absolute positioning) */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto space-y-4">
              
              {/* Doctor Profile & Service Card */}
              <div className="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
                
                {/* Header Banner */}
                <div className="bg-slate-900 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-aqua-500/20 text-aqua-400 text-xs font-bold px-3 py-1 rounded-full border border-aqua-500/30 uppercase tracking-wide">
                      <Home className="w-3.5 h-3.5 text-aqua-400" />
                      Home Visit Physiotherapy
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      5.0 (120+ Reviews)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-3 font-heading text-white">
                    Clinical Care At Your Doorstep
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Personalized, evidence-based care delivered at home.
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5">
                  
                  {/* Doctor Profile Snippet */}
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-13 h-13 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-lg font-extrabold shadow-sm border border-slate-700 shrink-0">
                      <span className="text-aqua-400">IG</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{DOCTOR_INFO.name}</h4>
                      <p className="text-xs text-aqua-700 font-bold">Consultant Physiotherapist • BPT</p>
                      <p className="text-xs text-slate-500 mt-0.5">Maharashtra OTPT Reg. No.: 2023/12345</p>
                    </div>
                  </div>

                  {/* Why Home Visits Are Superior for Recovery */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Why Patients Choose Home Visits:
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-aqua-50 text-aqua-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-aqua-200">✓</div>
                        <span><strong>Zero Painful Commutes:</strong> Avoid traveling with acute back pain, frozen shoulder, or post-surgery joints.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-aqua-50 text-aqua-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-aqua-200">✓</div>
                        <span><strong>Advanced Portable Equipment:</strong> Ultrasound, TENS, IFT, cupping, and taping brought directly to you.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-aqua-50 text-aqua-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-aqua-200">✓</div>
                        <span><strong>Real Environment Training:</strong> Gait training on your stairs, bed transfers, and posture assessment at your home desk.</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="w-full btn-aqua py-3.5 text-sm flex items-center justify-center gap-2"
                    >
                      <Activity className="w-4 h-4 text-white" />
                      <span>Book Initial Home Consultation</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      ⚡ Quick response within 30 minutes • Flexible morning & evening slots
                    </p>
                  </div>

                </div>

                {/* Card Footer Badge */}
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-800 font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-aqua-600" />
                    Covering Sakinaka, Ghatkopar, Kurla & Vidyavihar
                  </span>
                  <span className="font-bold text-aqua-700">Prompt Arrival</span>
                </div>

              </div>

              {/* Recovery Proof Pill */}
              <div className="bg-white p-4 rounded-2xl shadow-soft border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-aqua-50 text-aqua-700 flex items-center justify-center border border-aqua-200 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">1,200+ Patient Recoveries</div>
                    <div className="text-[11px] text-slate-500">Orthopedic & Neurological Care</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-aqua-700 bg-aqua-50 px-2.5 py-1 rounded-full border border-aqua-200">
                  99.4% Success
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
