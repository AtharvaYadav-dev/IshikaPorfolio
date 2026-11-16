import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Award, 
  CheckCircle2, 
  Clock, 
  Home, 
  HeartHandshake,
  Activity,
  UserCheck,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-blush-50 via-white to-[#FAF7F7] subtle-grid-bg">
      {/* Soft decorative background glow circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blush-200/60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-sage-100/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Doctor Badge & Registration */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-blush-200 text-xs text-navy-900 font-medium">
              <span className="flex items-center gap-1.5 text-navy-800 font-bold">
                <Award className="w-4 h-4 text-gold-500" />
                {DOCTOR_INFO.degrees}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Reg. No.: 2023/12345 (Maharashtra OTPT Council)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-gold-600 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Evidence-Based Rehabilitation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
                {DOCTOR_INFO.name}
                <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-navy-700 mt-2 font-heading">
                  {DOCTOR_INFO.title}
                </span>
              </h1>
            </div>

            {/* Sub-headline / Tagline */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-lg sm:text-xl font-bold">
              <span className="text-gold-600 bg-gold-50 px-3 py-1 rounded-lg border border-gold-200 shadow-xs">
                "{DOCTOR_INFO.primaryTagline}"
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-navy-800 text-base font-semibold">
                {DOCTOR_INFO.secondaryTagline}
              </span>
            </div>

            {/* Short Intro Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalized, evidence-based physiotherapy delivered right in the comfort of your home. 
              Recover from acute joint and spine pain, restore functional mobility, and rebuild post-surgery strength 
              with dedicated 1-on-1 clinical care—<strong className="text-navy-900 font-semibold">without the stress of hospital commutes</strong>.
            </p>

            {/* Service Areas Pill */}
            <div className="p-3.5 bg-blush-100/70 border border-blush-200 rounded-xl text-xs sm:text-sm text-navy-900 flex flex-col sm:flex-row items-center gap-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 font-bold text-navy-950 whitespace-nowrap">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                Home Visits Available In:
              </div>
              <div className="text-slate-700 font-medium">
                Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-600 shadow-gold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <span>Request a Home Visit</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-navy-900 bg-white hover:bg-blush-50 border border-navy-800/15 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: {DOCTOR_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Points Mini Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-navy-900 leading-tight">1-on-1 Dedicated Time</span>
              </div>
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-navy-900 leading-tight">Sanitized Portable Modalities</span>
              </div>
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-navy-900 leading-tight">Customized Rehab Roadmap</span>
              </div>
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-navy-900 leading-tight">Official Claim Receipts</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Clinical Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Medical Framing */}
              <div className="bg-white rounded-3xl shadow-card border border-blush-200 overflow-hidden relative">
                
                {/* Header banner */}
                <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 p-6 text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-gold-400/30 uppercase tracking-wide">
                      <Home className="w-3.5 h-3.5" /> Home Visit Physiotherapy
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      5.0 (120+ Reviews)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-4 font-heading text-white">
                    Clinical Care At Your Doorstep
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    "Home Visit Physiotherapy at your comfort, for your recovery."
                  </p>
                </div>

                {/* Card Body with Key Highlights */}
                <div className="p-6 space-y-5">
                  
                  {/* Doctor Profile Mini Snippet */}
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-navy-900 to-navy-700 flex items-center justify-center text-white text-lg font-extrabold shadow-md border-2 border-gold-400">
                      IG
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-950 text-base">Dr. Ishika Gupta</h4>
                      <p className="text-xs text-gold-700 font-semibold">Consultant Physiotherapist • BPT</p>
                      <p className="text-xs text-slate-500 mt-0.5">Maharashtra OTPT Reg. 2023/12345</p>
                    </div>
                  </div>

                  {/* Why Home Visits Are Superior for Recovery */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Why Patients Choose Home Visits:
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                        <span><strong>Zero Painful Commutes:</strong> Avoid traveling with acute back pain, frozen shoulder, or post-surgery joints.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                        <span><strong>Advanced Portable Equipment:</strong> Ultrasound, TENS, IFT, cupping, and taping brought directly to you.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                        <span><strong>Real Environment Training:</strong> Gait training on your stairs, bed transfers, and posture assessment at your home desk.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                        <span><strong>Family Member Inclusion:</strong> Clear instructions and home exercise regimens demonstrated to caregivers.</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Box */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01]"
                    >
                      <Activity className="w-4 h-4" />
                      <span>Book Initial Home Consultation</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      ⚡ Quick response within 30 minutes • Flexible morning & evening slots
                    </p>
                  </div>

                </div>

                {/* Footer badge */}
                <div className="bg-blush-50 px-6 py-3 border-t border-blush-200 flex items-center justify-between text-xs text-navy-900 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    Covering Sakinaka, Ghatkopar, Kurla & Vidyavihar
                  </span>
                  <span className="font-bold text-emerald-700">Fast Arrival</span>
                </div>

              </div>

              {/* Floating Stat Pill Left */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-float border border-blush-200">
                <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-950">1,200+ Recoveries</div>
                  <div className="text-[10px] text-slate-500 font-medium">Ortho & Neuro Patients</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
