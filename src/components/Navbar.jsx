import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Activity, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr. Ishika', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Home Visits', href: '#home-visits' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-sage-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium border border-emerald-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting Home Visits
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Sakinaka • Ghatkopar West • Kurla West • Vidyavihar
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              Mon-Sat: 8 AM – 8 PM
            </span>
            <a 
              href={`tel:${DOCTOR_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-gold-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-soft border-b border-blush-200' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the Left */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200 border border-gold-500/30">
                <Activity className="w-6 h-6 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-navy-900 tracking-tight leading-none group-hover:text-navy-800 transition-colors">
                  {DOCTOR_INFO.name}
                </span>
                <span className="text-xs sm:text-xs text-navy-600 font-medium tracking-wide mt-1 flex items-center gap-1.5">
                  <span className="text-gold-600 font-semibold">{DOCTOR_INFO.degrees}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-600">{DOCTOR_INFO.title}</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button on the Top Right */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-navy-900 bg-blush-100 hover:bg-blush-200 rounded-lg border border-blush-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-navy-800" />
                Quick Call
              </a>

              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-600 shadow-gold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 text-navy-950" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-gold-500 text-navy-950 shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-navy-900 hover:bg-blush-100 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-blush-200 bg-white/98 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-navy-900 hover:bg-blush-100 hover:text-navy-950 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-navy-900 bg-blush-100 border border-blush-300 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-navy-800" />
                  Call Doctor
                </a>
                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Hello%20Dr.%20Ishika,%20I%20would%20like%20to%20book%20a%20home%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
