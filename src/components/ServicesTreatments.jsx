import React, { useState } from 'react';
import { 
  Activity, 
  Layers, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  HeartPulse, 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  ChevronDown,
  ChevronUp,
  Stethoscope
} from 'lucide-react';
import { CORE_SERVICES } from '../data/physioData';

export default function ServicesTreatments({ onSelectService, onOpenBooking }) {
  const [expandedId, setExpandedId] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      default: return <Stethoscope className="w-6 h-6" />;
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="treatments" className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-gold-600" />
            <span>Clinical Treatments & Modalities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Advanced physical modalities, skilled hands-on manual therapy, and active strengthening tailored to your rehabilitation needs.
          </p>
        </div>

        {/* Highlight Feature Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 lg:p-10 shadow-card border border-navy-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                <Home className="w-3.5 h-3.5 text-gold-400" />
                Featured Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading leading-snug">
                "Home Visit Physiotherapy at your comfort, for your recovery."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Skip the painful travel, traffic delays, and crowded clinic waiting areas. Dr. Ishika Gupta brings certified clinical modalities—from Electrotherapy (IFT & TENS) and Ultrasound to Cupping and Manual Joint Mobilization—directly to your residence.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gold-300 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sakinaka
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ghatkopar West
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Kurla West
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Vidyavihar
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenBooking}
                className="btn-pill-gold py-4 px-6 text-sm flex items-center justify-center gap-2"
              >
                <span>Request Home Visit</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>
              <div className="text-center text-xs text-slate-400">
                ⚡ All sanitization protocols strictly followed
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Grid: 1-col on Mobile (<768px), 2-col on Tablet (768px - 1024px), 3-col on Desktop (>1024px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                {/* Card Top Content */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blush-100 text-navy-950 flex items-center justify-center border border-blush-200">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-navy-900 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-950 tracking-tight font-heading">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-gold-700 mt-1">
                    {service.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Ideal For Badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-navy-900 block mb-2">Ideal For:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.map((item, idx) => (
                        <span key={idx} className="text-[11px] font-semibold bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Clinical Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-dashed border-slate-200 space-y-3 text-xs text-slate-700 animate-fade-in-up">
                      <p className="italic text-slate-600 bg-blush-50/70 p-3 rounded-xl border border-blush-100">
                        {service.fullDesc}
                      </p>
                      
                      <div>
                        <span className="font-bold text-navy-950 block mb-1">Key Clinical Benefits:</span>
                        <ul className="space-y-1">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl text-[11px] text-slate-600 border border-slate-200">
                        <strong className="text-navy-950">Equipment Carried:</strong> {service.equipmentUsed}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 transition-colors py-1"
                  >
                    <span>{isExpanded ? "Show Less" : "View Benefits & Gear"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service.title);
                      onOpenBooking();
                    }}
                    className="font-bold text-gold-700 hover:text-gold-800 flex items-center gap-1 py-1"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
