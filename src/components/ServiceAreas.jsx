import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Search, 
  Navigation, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function ServiceAreas({ onSelectArea, onOpenBooking }) {
  const [selectedArea, setSelectedArea] = useState(DOCTOR_INFO.serviceAreas[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleCheckArea = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const matched = DOCTOR_INFO.serviceAreas.find(
      (a) => a.name.toLowerCase().includes(query) || a.pin.includes(query)
    );

    if (matched) {
      setSearchResult({
        status: 'success',
        message: `Great news! Home visits are actively available in ${matched.name} (${matched.pin}).`,
        area: matched
      });
      setSelectedArea(matched);
    } else if (
      query.includes('asalpha') || 
      query.includes('chandivali') || 
      query.includes('ghatkopar east') || 
      query.includes('tilak nagar') ||
      query.includes('chembur') ||
      query.includes('powai')
    ) {
      setSearchResult({
        status: 'adjacent',
        message: `Your area (${searchQuery}) is adjacent to our core zone. Home visits are feasible upon prior slot scheduling.`,
        area: { name: searchQuery, pin: "Nearby", travelTime: "25-35 mins", landmark: "Adjacent Central Mumbai" }
      });
    } else {
      setSearchResult({
        status: 'contact',
        message: `We primarily operate in Sakinaka, Ghatkopar W, Kurla W & Vidyavihar. Please call Dr. Ishika directly at ${DOCTOR_INFO.phone} to check slot feasibility for your location.`,
        area: null
      });
    }
  };

  return (
    <section id="service-areas" className="py-16 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Coverage & Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Home Physiotherapy Service Areas in Mumbai
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Providing prompt, dedicated bedside physiotherapy across the following core localities in Central Mumbai:
          </p>
        </div>

        {/* 4 Core Areas Responsive Grid: 1-col on Mobile, 2-col on Tablet, 4-col on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DOCTOR_INFO.serviceAreas.map((area, idx) => {
            const isSelected = selectedArea.name === area.name;
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelectedArea(area);
                  setSearchResult(null);
                }}
                className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 relative ${
                  isSelected 
                    ? 'border-gold-500 ring-2 ring-gold-400/30 bg-blush-50/70 -translate-y-1 shadow-card' 
                    : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-navy-950 text-gold-400' : 'bg-slate-100 text-navy-950'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-navy-900 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                    PIN: {area.pin}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy-950 tracking-tight font-heading">
                  {area.name}
                </h3>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  Mumbai, Maharashtra
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Navigation className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{area.landmark}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Est. Turnaround: {area.travelTime}</span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <span className={`text-[11px] font-bold block ${isSelected ? 'text-gold-700' : 'text-slate-500'}`}>
                    {isSelected ? '✓ Selected Location' : 'Click to select & schedule →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Eligibility Checker Box */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 lg:p-10 shadow-card border border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                Quick Availability Checker
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Check If Dr. Ishika Visits Your Neighborhood
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Type your area or pincode (e.g. Sakinaka, 400086, Kurla, Vidyavihar, or nearby localities) to verify instant availability.
              </p>

              <form onSubmit={handleCheckArea} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter locality or 6-digit PIN..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-pill-gold px-6 py-3 text-xs sm:text-sm shrink-0"
                >
                  Check Availability
                </button>
              </form>

              {/* Dynamic Search Feedback */}
              {searchResult && (
                <div className={`p-4 rounded-xl text-xs leading-relaxed animate-fade-in-up ${
                  searchResult.status === 'success' 
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-200' 
                    : searchResult.status === 'adjacent'
                    ? 'bg-amber-950/80 border border-amber-500/50 text-amber-200'
                    : 'bg-rose-950/80 border border-rose-500/50 text-rose-200'
                }`}>
                  <p className="font-semibold">{searchResult.message}</p>
                </div>
              )}
            </div>

            {/* Selected Area Highlight Card */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[11px] text-gold-300 font-bold uppercase tracking-wider">Active Location</span>
                  <h4 className="text-xl font-extrabold text-white mt-0.5">{selectedArea.name} (Mumbai)</h4>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-400/30">
                  Home Visits Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Pin Code</span>
                  <span className="font-bold text-white text-sm">{selectedArea.pin}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Travel Time</span>
                  <span className="font-bold text-white text-sm">{selectedArea.travelTime}</span>
                </div>
              </div>

              <div className="text-xs text-slate-300">
                <strong className="text-white">Coverage Note:</strong> {selectedArea.landmark} and surrounding residential societies.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    if (onSelectArea) onSelectArea(selectedArea.name);
                    onOpenBooking();
                  }}
                  className="flex-1 btn-pill-gold py-3 px-4 text-xs sm:text-sm flex items-center justify-center gap-1.5"
                >
                  <span>Book Visit in {selectedArea.name}</span>
                  <ArrowRight className="w-4 h-4 text-navy-950" />
                </button>
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-white bg-white/15 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Doctor</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
