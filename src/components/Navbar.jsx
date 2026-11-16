import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Activity, 
  Clock, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Areas', href: '#service-areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Notification / Quick Contact Bar (Clean physica-style topbar) */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-aqua-500/20 text-aqua-400 px-2.5 py-0.5 rounded-full font-semibold border border-aqua-500/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 animate-pulse"></span>
              Accepting Home Visits
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-aqua-400 shrink-0" />
              Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-aqua-400 shrink-0" />
              Mon-Sat: 8 AM – 8 PM
            </span>
            <a 
              href={`tel:${DOCTOR_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-aqua-400 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-aqua-400 shrink-0" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-aqua-400 hover:text-aqua-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean White Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav shadow-soft border-b border-slate-100 py-3.5' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo on the Left */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200 border border-slate-700">
                <Activity className="w-6 h-6 text-aqua-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-aqua-600 transition-colors">
                  {DOCTOR_INFO.name}
                </span>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide flex items-center gap-1 mt-0.5">
                  <span className="text-aqua-600 font-bold">{DOCTOR_INFO.degrees}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{DOCTOR_INFO.title}</span>
                </div>
              </div>
            </a>

            {/* Navigation links: Home, About, Treatments, Areas, Contact */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-aqua-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-aqua-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* "Book Appointment" CTA button on the right */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                Call Doctor
              </a>

              <button
                onClick={onOpenBooking}
                className="btn-aqua px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden btn-aqua px-3.5 py-2 text-xs font-bold"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-5 pt-4 pb-6 mt-3 animate-fade-in-up">
            <div className="flex flex-col space-y-1.5 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-aqua-600 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-aqua py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="py-3 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-700" />
                  Call Doctor
                </a>
                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20book%20a%20home%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
