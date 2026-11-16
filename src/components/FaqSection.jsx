import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQ_ITEMS, DOCTOR_INFO } from '../data/physioData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F8] border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Dr. Ishika Gupta's home visit physiotherapy sessions and clinical care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blush-300 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-navy-950 hover:text-gold-700 transition-colors"
                >
                  <span className="leading-snug font-heading">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-gold-100 text-gold-800 rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FCFBFB] animate-fade-in-up">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have More Questions Helper Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-navy-950 text-base sm:text-lg font-heading">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Contact Dr. Ishika directly for medical guidance regarding your specific condition.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-navy-950 bg-blush-100 hover:bg-blush-200 border border-blush-300 flex items-center gap-2 transition-all hover:scale-102"
            >
              <Phone className="w-4 h-4 text-navy-900" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20have%20a%20question%20regarding%20physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center gap-2 transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
