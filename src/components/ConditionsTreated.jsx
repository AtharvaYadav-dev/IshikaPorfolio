import React, { useState } from 'react';
import { 
  Bone, 
  Crosshair, 
  UserCheck, 
  ShieldAlert, 
  Brain, 
  Activity, 
  Flame, 
  HeartPulse, 
  HeartHandshake, 
  Zap, 
  ArrowRight, 
  Filter 
} from 'lucide-react';
import { CONDITIONS_TREATED } from '../data/physioData';

export default function ConditionsTreated({ onSelectCondition, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Orthopedic', 'Neurological', 'Other'];

  const filteredConditions = activeCategory === 'All' 
    ? CONDITIONS_TREATED 
    : CONDITIONS_TREATED.filter(c => c.category === activeCategory);

  const getConditionIcon = (iconName) => {
    switch (iconName) {
      case 'Bone': return <Bone className="w-5 h-5 text-aqua-600" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-slate-700" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-aqua-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-indigo-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-rose-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      default: return <Zap className="w-5 h-5 text-aqua-600" />;
    }
  };

  return (
    <section id="conditions" className="py-16 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aqua-50 text-aqua-800 text-xs font-bold uppercase tracking-wider mb-3 border border-aqua-200">
            <Filter className="w-3.5 h-3.5 text-aqua-600" />
            <span>Targeted Clinical Rehabilitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Conditions Treated by Dr. Ishika Gupta
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every clinical condition requires a distinct evidence-based recovery plan. Explore the conditions we rehabilitate in the comfort of your home.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'btn-slate'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Conditions' : cat === 'Other' ? 'Sports, Post-Op & Geriatric' : `${cat} Care`}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid: 1-col on Mobile (<768px), 2-col on Tablet (768px - 1024px), 3-col on Desktop (>1024px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group bg-white border border-slate-200 hover:border-aqua-400"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {getConditionIcon(condition.icon)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    condition.category === 'Orthopedic' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : condition.category === 'Neurological'
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    {condition.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug font-heading group-hover:text-aqua-700 transition-colors">
                  {condition.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {condition.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-0.5">Common Symptoms:</strong>
                  {condition.commonSymptoms}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-semibold">
                  Evidence-based protocol
                </span>
                <button
                  onClick={() => {
                    if (onSelectCondition) onSelectCondition(condition.title);
                    onOpenBooking();
                  }}
                  className="font-bold text-slate-900 hover:text-aqua-600 flex items-center gap-1 transition-colors"
                >
                  <span>Book Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F7F9FA] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
              Not sure which therapy your condition requires?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak directly with Dr. Ishika Gupta for clinical guidance tailored to your medical history.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-aqua px-6 py-3 text-xs sm:text-sm shrink-0"
          >
            Consult With Doctor Now
          </button>
        </div>

      </div>
    </section>
  );
}
