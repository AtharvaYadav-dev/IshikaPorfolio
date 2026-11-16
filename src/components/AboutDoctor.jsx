import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Stethoscope, 
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

export default function AboutDoctor({ onOpenBooking }) {
  const clinicalPillars = [
    {
      title: "Root-Cause Assessment",
      desc: "Beyond temporary symptom relief, we diagnose postural imbalances, muscle inhibitions, and biomechanical dysfunctions."
    },
    {
      title: "Evidence-Based Protocols",
      desc: "Treatments grounded in current orthopedic and neurological rehabilitation clinical research, avoiding obsolete methods."
    },
    {
      title: "1-on-1 Patient-Centric Care",
      desc: "Every session is dedicated exclusively to you with active hands-on care, continuous monitoring, and tailored progression."
    },
    {
      title: "Functional Independence",
      desc: "Empowering patients with self-management strategies, ergonomic desk habits, and home exercises to stay pain-free."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#FCFCFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <Stethoscope className="w-3.5 h-3.5 text-gold-600" />
            <span>Meet Your Physiotherapist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Compassionate, Evidence-Driven Care
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dedicated to helping patients in Sakinaka, Ghatkopar, Kurla, and Vidyavihar regain pain-free movement and active daily independence.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
              
              {/* Profile Header */}
              <div className="text-center pb-6 border-b border-blush-200/80">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-tr from-navy-950 via-navy-900 to-navy-800 flex flex-col items-center justify-center text-white shadow-xl border-4 border-white">
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gold-400">IG</span>
                  <span className="text-[10px] tracking-widest text-slate-300 font-bold uppercase mt-1">Physio</span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-950 mt-4 tracking-tight font-heading">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-gold-700 mt-1">
                  {DOCTOR_INFO.title}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold mt-1 bg-slate-100 px-3 py-1 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 text-navy-800" />
                  <span>{DOCTOR_INFO.degrees}</span>
                </div>
              </div>

              {/* Council Verification Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Officially Verified Practitioner</span>
                </div>

                <div className="text-xs text-navy-950 font-bold bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                  {DOCTOR_INFO.registration}
                </div>

                <div className="text-[11px] text-slate-600 leading-relaxed">
                  Licensed by the <strong className="text-slate-800">{DOCTOR_INFO.councilName}</strong> for independent clinical and bedside practice.
                </div>
              </div>

              {/* Practice Highlights Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 text-center shadow-2xs">
                  <div className="font-extrabold text-navy-950 text-sm">Specialty</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">Ortho & Neuro Rehab</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-slate-100 text-center shadow-2xs">
                  <div className="font-extrabold text-navy-950 text-sm">Care Delivery</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">Dedicated Home Visits</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The verbatim bio required by the user */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-blush-200 shadow-card relative">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-xs uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span>Doctor's Professional Statement</span>
              </div>

              <blockquote className="text-base sm:text-lg text-navy-950 font-medium leading-relaxed italic border-l-4 border-gold-500 pl-4 py-1">
                "{DOCTOR_INFO.bio}"
              </blockquote>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-sm font-bold text-navy-950 block">{DOCTOR_INFO.name}</span>
                  <span className="text-xs text-slate-500">{DOCTOR_INFO.degrees} • Consultant Physiotherapist</span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Evidence-Based Clinical Protocol
                </span>
              </div>
            </div>

            {/* Clinical Approach Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2 font-heading">
                <Heart className="w-5 h-5 text-rose-500" />
                Core Clinical Philosophy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {clinicalPillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blush-300 transition-colors shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-sm text-navy-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-pill-gold px-7 py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <span>Consult Dr. Ishika Gupta</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-600 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Home visits active in <strong>Sakinaka, Ghatkopar, Kurla & Vidyavihar</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
