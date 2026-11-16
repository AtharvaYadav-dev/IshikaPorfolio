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
    <section id="home" className="relative overflow-hidden hero-gradient-mesh pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-blush-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Responsive Layout using CSS Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Council Verification Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-blush-200 text-xs text-navy-900 font-semibold">
              <span className="flex items-center gap-1.5 text-navy-950 font-bold">
                <Award className="w-4 h-4 text-gold-600" />
                {DOCTOR_INFO.degrees}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Maharashtra OTPT Reg. No.: 2023/12345
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-gold-600 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span>Evidence-Based Physiotherapy Care</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18] font-heading">
                {DOCTOR_INFO.name}
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-navy-700 mt-2 font-heading">
                  {DOCTOR_INFO.title}
                </span>
              </h1>
            </div>

            {/* Tagline Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base font-bold">
              <span className="text-gold-700 bg-gold-50/90 px-3.5 py-1.5 rounded-full border border-gold-300/80 shadow-xs">
                "{DOCTOR_INFO.primaryTagline}"
              </span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="text-navy-900 bg-white/80 px-3.5 py-1.5 rounded-full border border-blush-200 shadow-xs font-semibold">
                {DOCTOR_INFO.secondaryTagline}
              </span>
            </div>

            {/* Short Intro Text with Enhanced Line Height */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalized, evidence-based physiotherapy delivered directly in the comfort of your home. 
              Recover from acute joint, spine, and muscle pain, restore functional mobility, and rebuild strength after surgery—<strong className="text-navy-950 font-bold">with dedicated 1-on-1 bedside clinical care and zero hospital commute stress</strong>.
            </p>

            {/* Service Areas Banner */}
            <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-md border border-blush-200/90 rounded-2xl text-xs sm:text-sm text-navy-900 flex flex-col sm:flex-row items-center gap-2 max-w-xl mx-auto lg:mx-0 shadow-xs">
              <div className="flex items-center gap-1.5 font-extrabold text-navy-950 whitespace-nowrap">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                Home Visits Available In:
              </div>
              <div className="text-slate-700 font-semibold text-center sm:text-left">
                Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
              </div>
            </div>

            {/* Catchy Pill CTA Buttons with Hover Glow */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-pill-gold px-7 py-4 text-sm sm:text-base flex items-center justify-center gap-2.5"
              >
                <span>Request a Home Visit</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="w-full sm:w-auto btn-pill-navy px-6 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call: {DOCTOR_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Points Responsive Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              <div className="bg-white/90 p-2.5 rounded-xl border border-blush-200/60 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy-950 leading-tight">1-on-1 Dedicated Time</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-blush-200/60 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy-950 leading-tight">Sanitized Portable Gear</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-blush-200/60 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy-950 leading-tight">Customized Roadmaps</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-blush-200/60 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy-950 leading-tight">Official Claim Receipts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Glassmorphic Clinical Card with Clean Natural Flow */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto space-y-4">
              
              {/* Doctor Card */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-card border border-blush-200 overflow-hidden">
                
                {/* Card Header */}
                <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-gold-400/30 uppercase tracking-wide">
                      <Home className="w-3.5 h-3.5 text-gold-400" />
                      Home Visit Physiotherapy
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      5.0 (120+ Reviews)
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold mt-3 font-heading text-white">
                    Clinical Care At Your Doorstep
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    "Home Visit Physiotherapy at your comfort, for your recovery."
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5">
                  
                  {/* Doctor Profile Snippet */}
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-navy-950 to-navy-800 flex items-center justify-center text-white text-lg font-extrabold shadow-md border-2 border-gold-400 shrink-0">
                      IG
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-base">Dr. Ishika Gupta</h4>
                      <p className="text-xs text-gold-700 font-bold">Consultant Physiotherapist • BPT</p>
                      <p className="text-xs text-slate-500 mt-0.5">Maharashtra OTPT Reg. No.: 2023/12345</p>
                    </div>
                  </div>

                  {/* Why Home Visits Are Superior for Recovery */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Why Patients Choose Home Visits:
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-emerald-200">✓</div>
                        <span><strong>Zero Painful Commutes:</strong> Avoid traveling with acute back pain, frozen shoulder, or post-surgery joints.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-emerald-200">✓</div>
                        <span><strong>Advanced Portable Equipment:</strong> Ultrasound, TENS, IFT, cupping, and taping brought directly to you.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-emerald-200">✓</div>
                        <span><strong>Real Environment Training:</strong> Gait training on your stairs, bed transfers, and posture assessment at your home desk.</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="w-full btn-pill-gold py-3.5 text-sm flex items-center justify-center gap-2"
                    >
                      <Activity className="w-4 h-4 text-navy-950" />
                      <span>Book Initial Home Consultation</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      ⚡ Quick response within 30 minutes • Flexible morning & evening slots
                    </p>
                  </div>

                </div>

                {/* Card Footer Badge */}
                <div className="bg-blush-50/80 px-6 py-3 border-t border-blush-200 flex items-center justify-between text-xs text-navy-950 font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    Covering Sakinaka, Ghatkopar, Kurla & Vidyavihar
                  </span>
                  <span className="font-bold text-emerald-700">Prompt Arrival</span>
                </div>

              </div>

              {/* Recovery Proof Pill - Naturally flow below the card, no overlapping absolute offsets */}
              <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft border border-blush-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-navy-950">1,200+ Patient Recoveries</div>
                    <div className="text-[11px] text-slate-500">Orthopedic & Neurological Care</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
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
