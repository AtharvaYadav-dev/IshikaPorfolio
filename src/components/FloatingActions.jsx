import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function FloatingActions({ onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right WhatsApp & Quick Booking buttons */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white text-slate-800 shadow-float border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all transform hover:-translate-y-1"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-800" />
          </button>
        )}

        <a
          href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20home%20visit.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 text-white shadow-float flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110 hover:shadow-2xl group relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 top-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Dr. Ishika
          </span>
        </a>

        <button
          onClick={onOpenBooking}
          className="w-14 h-14 rounded-full btn-aqua shadow-float flex items-center justify-center transition-all transform hover:scale-110 group relative"
          title="Book Home Visit"
        >
          <Calendar className="w-6 h-6 text-white" />
          <span className="absolute right-16 top-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Request Home Visit
          </span>
        </button>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-float px-3 py-2.5">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${DOCTOR_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-slate-100 text-slate-900 font-bold text-xs border border-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-slate-800" />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20book%20a%20physiotherapy%20home%20visit.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-full btn-aqua text-xs shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </button>
        </div>
      </div>
    </>
  );
}
