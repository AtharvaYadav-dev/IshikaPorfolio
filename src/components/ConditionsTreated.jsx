import React, { useState } from 'react';
import { 
  Bone, 
  Crosshair, 
  UserCheck, 
  ShieldAlert, 
  Smile, 
  Brain, 
  Activity, 
  Flame, 
  HeartPulse, 
  HeartHandshake, 
  Wind, 
  Zap,
  CheckCircle2,
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
      case 'Bone': return <Bone className="w-5 h-5 text-rose-500" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-navy-700" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-gold-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'Smile': return <Smile className="w-5 h-5 text-emerald-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-600" />;
      default: return <Zap className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <section id="conditions" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <Filter className="w-3.5 h-3.5 text-gold-600" />
            <span>Targeted Clinical Rehabilitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Conditions Treated by Dr. Ishika Gupta
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every condition requires a distinct clinical roadmap. Explore the specialized conditions we treat with home-based evidence-backed protocols.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-blush-100 hover:text-navy-900'
                }`}
              >
                {cat === 'All' ? 'All Conditions (12)' : cat === 'Other' ? 'Sports, Post-Op & Geriatric' : `${cat} Conditions`}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FCFBFB] border border-slate-200/90 hover:border-gold-300 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
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

                <h3 className="text-base sm:text-lg font-bold text-navy-950 tracking-tight leading-snug group-hover:text-gold-700 transition-colors">
                  {condition.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {condition.description}
                </p>

                <div className="mt-4 p-2.5 rounded-xl bg-blush-50/60 border border-blush-200/70 text-[11px] text-slate-700">
                  <strong className="text-navy-900 font-semibold block mb-0.5">Common Symptoms:</strong>
                  {condition.commonSymptoms}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">
                  Evidence-based protocol
                </span>
                <button
                  onClick={() => {
                    if (onSelectCondition) onSelectCondition(condition.title);
                    onOpenBooking();
                  }}
                  className="font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
                >
                  <span>Book Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Need help deciding box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blush-100/80 via-white to-blush-100/80 border border-blush-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-navy-950 text-base">Not sure which therapy your condition requires?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Speak directly with Dr. Ishika Gupta for a clinical pre-assessment and guidance.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-xs text-navy-950 bg-gold-400 hover:bg-gold-500 shadow-sm transition-colors"
          >
            Consult With Doctor Now
          </button>
        </div>

      </div>
    </section>
  );
}
