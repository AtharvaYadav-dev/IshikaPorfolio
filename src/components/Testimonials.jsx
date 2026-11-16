import React from 'react';
import { Star, MapPin, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/physioData';

export default function Testimonials({ onOpenBooking }) {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <Star className="w-3.5 h-3.5 text-gold-600 fill-gold-500" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Real Stories of Movement & Recovery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear from patients and their families in Sakinaka, Ghatkopar, Kurla, and Vidyavihar who regained active, independent living.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FCFBFB] p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-blush-300 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Location Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-xs font-bold text-navy-800 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    {item.area}
                  </span>
                </div>

                {/* Condition Treated Tag */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-bold text-navy-900 bg-blush-100/80 px-2.5 py-1 rounded-lg border border-blush-200">
                    Condition: {item.condition}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient Footer info */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-navy-950 text-sm">
                    {item.patientName}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Age {item.age} • Home Visit Patient
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.recoveryHighlight}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clinical Assurance Strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-blush-50 px-6 py-3 rounded-2xl border border-blush-200 text-xs font-semibold text-navy-900">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> 100% Verified Clinical Reviews
            </span>
            <span className="text-slate-300">•</span>
            <span>Over 1,200 successful patient recoveries</span>
            <span className="text-slate-300">•</span>
            <button
              onClick={onOpenBooking}
              className="text-gold-700 font-bold hover:underline"
            >
              Start your recovery roadmap today →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
