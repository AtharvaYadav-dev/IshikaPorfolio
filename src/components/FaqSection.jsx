import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { FAQ_ITEMS, DOCTOR_INFO } from '../data/physioData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F7] border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about Dr. Ishika Gupta's home visit physiotherapy sessions and clinical care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-navy-950 hover:text-gold-700 transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-gold-50 text-gold-700 rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FCFBFB] animate-fadeIn">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions helper */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-navy-950 text-base">Have a question not listed here?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Contact Dr. Ishika directly for medical guidance regarding your specific condition.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-navy-900 bg-blush-100 hover:bg-blush-200 border border-blush-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-navy-900" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20have%20a%20question%20regarding%20physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
