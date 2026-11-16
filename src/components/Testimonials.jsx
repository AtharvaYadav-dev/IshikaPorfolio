import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/physioData';

export default function Testimonials({ onOpenBooking }) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aqua-50 text-aqua-800 text-xs font-bold uppercase tracking-wider mb-3 border border-aqua-200">
            <Star className="w-3.5 h-3.5 text-aqua-600 fill-aqua-500" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Real Stories of Movement & Recovery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hear from patients and their families in Sakinaka, Ghatkopar, Kurla, and Vidyavihar who regained active, independent living.
          </p>
        </div>

        {/* Responsive Grid: 1-col on Mobile, 2-col on Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between bg-white border border-slate-200 hover:border-aqua-400"
            >
              <div>
                {/* Rating & Location Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    <MapPin className="w-3 h-3 text-aqua-600" />
                    {item.area}
                  </span>
                </div>

                {/* Condition Treated Tag */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-bold text-slate-800 bg-aqua-50 px-3 py-1 rounded-xl border border-aqua-200">
                    Condition: {item.condition}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient Footer info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading">
                    {item.patientName}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    Age {item.age} • Home Visit Patient
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-aqua-800 bg-aqua-50 px-3 py-1 rounded-full border border-aqua-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aqua-600" />
                    {item.recoveryHighlight}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clinical Assurance Strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#F7F9FA] px-6 py-3.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 shadow-2xs">
            <span className="flex items-center gap-1.5 text-aqua-700 font-bold">
              <CheckCircle2 className="w-4 h-4" /> 100% Verified Clinical Reviews
            </span>
            <span className="text-slate-300">•</span>
            <span>Over 1,200 successful patient recoveries</span>
            <span className="text-slate-300">•</span>
            <button
              onClick={onOpenBooking}
              className="text-aqua-700 font-bold hover:underline"
            >
              Start your recovery roadmap today →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
