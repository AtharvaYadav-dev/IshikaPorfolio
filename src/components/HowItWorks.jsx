import React from 'react';
import { 
  CalendarCheck, 
  Stethoscope, 
  Sparkles, 
  TrendingUp, 
  Home, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/physioData';

export default function HowItWorks({ onOpenBooking }) {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-gold-500" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-rose-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-500" />;
      default: return <Stethoscope className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="home-visits" className="py-16 lg:py-24 bg-[#FCFBFB] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <Home className="w-3.5 h-3.5 text-gold-600" />
            <span>The Home Care Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            How Home Physiotherapy Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Simple, transparent, and structured recovery delivered right into your living room. No clinic queues, no travel exhaustion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-card transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blush-50 border border-blush-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getStepIcon(stepItem.icon)}
                </div>
                <span className="text-3xl font-extrabold font-heading text-slate-200 group-hover:text-gold-400 transition-colors">
                  {stepItem.step}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-950 tracking-tight mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero hassle for patients</span>
              </div>
            </div>
          ))}
        </div>

        {/* What to prepare for your home session */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-blush-200 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>What to Expect During Your Session</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                Dr. Ishika Brings All Clinical Modalities & Sanitized Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All you need is a comfortable bed or sofa space and loose, comfortable clothing. Dr. Ishika carries calibrated portable electrotherapy machines (TENS/IFT), therapeutic ultrasound, cupping units, kinesiology tapes, and resistance bands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-navy-900 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  100% Sanitized Equipment Between Patients
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Caregiver / Family Guidance Included
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Detailed Home Exercise Charts Provided
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Formal Insurance & Claim Invoices Available
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md transition-all"
              >
                <span>Book First Home Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-500 mt-2">
                Covering Sakinaka, Ghatkopar, Kurla & Vidyavihar
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
