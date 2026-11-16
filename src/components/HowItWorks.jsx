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
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-aqua-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-aqua-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-aqua-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-aqua-600" />;
      default: return <Stethoscope className="w-6 h-6 text-aqua-600" />;
    }
  };

  return (
    <section id="home-visits" className="py-16 sm:py-20 lg:py-28 bg-[#F7F9FA] relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-aqua-800 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200 shadow-2xs">
            <Home className="w-3.5 h-3.5 text-aqua-600" />
            <span>The Home Care Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            How Home Physiotherapy Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent, and structured recovery delivered right into your living room. No clinic queues, no travel exhaustion.
          </p>
        </div>

        {/* Steps Responsive Grid: 1-col on Mobile, 2-col on Tablet, 4-col on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group bg-white border border-slate-200 hover:border-aqua-400"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-aqua-50 border border-aqua-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(stepItem.icon)}
                  </div>
                  <span className="text-3xl font-extrabold font-heading text-slate-200 group-hover:text-aqua-500 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 font-heading">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-aqua-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Zero travel hassle</span>
              </div>
            </div>
          ))}
        </div>

        {/* What to Expect During Session Card */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-aqua-700 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-aqua-600" />
                <span>Clinical Readiness & Equipment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                Dr. Ishika Brings Calibrated Clinical Gear Directly to You
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All you need is a comfortable bed or sofa space. Dr. Ishika carries calibrated portable electrotherapy machines (TENS/IFT), therapeutic ultrasound, cupping units, kinesiology tapes, and resistance bands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua-500 shrink-0"></span>
                  100% Sanitized Equipment Between Patients
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua-500 shrink-0"></span>
                  Caregiver & Family Posture Guidance Included
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua-500 shrink-0"></span>
                  Detailed Home Exercise Charts Provided
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua-500 shrink-0"></span>
                  Formal Insurance & Claim Invoices Available
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-aqua py-4 px-7 text-sm inline-flex items-center justify-center gap-2"
              >
                <span>Book First Home Visit</span>
                <ArrowRight className="w-4 h-4 text-white" />
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
