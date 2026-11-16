import React, { useState } from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Search, 
  Navigation, 
  Phone, 
  ShieldCheck,
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
    <section id="service-areas" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Coverage & Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Home Physiotherapy Service Areas in Mumbai
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Providing prompt, dedicated bedside physiotherapy across the following core localities in Central Mumbai:
          </p>
        </div>

        {/* 4 Core Areas Cards */}
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
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative ${
                  isSelected 
                    ? 'bg-gradient-to-b from-blush-100/70 to-white border-gold-400 shadow-card ring-2 ring-gold-400/30 -translate-y-1' 
                    : 'bg-[#FAF7F7] border-slate-200 hover:border-blush-300 shadow-2xs hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-navy-900 text-gold-400' : 'bg-white text-navy-900 border border-slate-200'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-navy-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    PIN: {area.pin}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy-950 tracking-tight">
                  {area.name}
                </h3>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Mumbai, Maharashtra
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Navigation className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{area.landmark}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Est. Turnaround: {area.travelTime}</span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <span className={`text-[11px] font-bold block ${isSelected ? 'text-gold-700' : 'text-slate-500'}`}>
                    {isSelected ? '✓ Selected Area' : 'Click to inspect & book →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Eligibility Checker Box */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white p-6 sm:p-8 lg:p-10 shadow-card relative overflow-hidden">
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
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-sm transition-all"
                >
                  Check Availability
                </button>
              </form>

              {/* Dynamic Search Feedback */}
              {searchResult && (
                <div className={`p-4 rounded-xl text-xs leading-relaxed animate-fadeIn ${
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
                <strong className="text-white">Prominent Coverage:</strong> {selectedArea.landmark} and surrounding residential societies.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    if (onSelectArea) onSelectArea(selectedArea.name);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Book Home Visit in {selectedArea.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/15 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-1.5"
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
