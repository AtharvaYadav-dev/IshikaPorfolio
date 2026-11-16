import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Heart, 
  Stethoscope, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  MapPin
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
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200">
            <Stethoscope className="w-3.5 h-3.5 text-gold-600" />
            <span>Meet Your Physiotherapist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Compassionate, Evidence-Driven Physiotherapy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated to helping patients in Sakinaka, Ghatkopar, Kurla, and Vidyavihar regain pain-free movement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile & Verified Credential Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Doctor Visual Card */}
              <div className="rounded-3xl bg-gradient-to-b from-blush-100 via-blush-50 to-white p-6 sm:p-8 border border-blush-200 shadow-soft relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl"></div>
                
                {/* Doctor Avatar / Badge */}
                <div className="relative text-center pb-6 border-b border-blush-200">
                  <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-tr from-navy-900 via-navy-800 to-navy-950 flex flex-col items-center justify-center text-white shadow-xl border-4 border-white">
                    <span className="text-3xl font-extrabold font-heading text-gold-400">Dr. IG</span>
                    <span className="text-[10px] tracking-widest text-slate-300 font-semibold uppercase mt-0.5">Physio</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy-900 mt-4 tracking-tight">
                    {DOCTOR_INFO.name}
                  </h3>
                  <p className="text-sm font-bold text-gold-600 mt-0.5">
                    {DOCTOR_INFO.title}
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    {DOCTOR_INFO.degrees}
                  </p>
                </div>

                {/* Professional Council Verification Card */}
                <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Officially Verified Practitioner</span>
                  </div>

                  <div className="text-xs text-navy-900 font-semibold bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
                    {DOCTOR_INFO.registration}
                  </div>

                  <div className="text-[11px] text-slate-500 leading-tight">
                    Affiliated with the <strong className="text-slate-700">{DOCTOR_INFO.councilName}</strong>. Licensed for independent clinical & home practice.
                  </div>
                </div>

                {/* Practice Highlights */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-100 text-center">
                    <div className="font-extrabold text-navy-900 text-sm">Specialty</div>
                    <div className="text-slate-500 text-[11px]">Ortho & Neuro Rehab</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-100 text-center">
                    <div className="font-extrabold text-navy-900 text-sm">Care Mode</div>
                    <div className="text-slate-500 text-[11px]">Personalized Home Visits</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The verbatim bio required by the user */}
            <div className="bg-[#FAF7F7] p-6 sm:p-7 rounded-2xl border-l-4 border-gold-500 shadow-xs relative">
              <span className="text-gold-500 text-4xl font-serif absolute top-3 left-3 opacity-30 select-none">“</span>
              <p className="text-base sm:text-lg text-navy-950 font-medium leading-relaxed italic relative z-10">
                "{DOCTOR_INFO.bio}"
              </p>
              <div className="mt-4 pt-3 border-t border-blush-200 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-navy-900">{DOCTOR_INFO.name}</span>
                  <span className="text-xs text-slate-500 block">BPT • Maharashtra OTPT Council Reg. No. 2023/12345</span>
                </div>
                <div className="flex items-center gap-1 text-gold-500">
                  <Sparkles className="w-4 h-4 fill-gold-400" />
                </div>
              </div>
            </div>

            {/* Clinical Approach Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                Core Clinical Philosophy & Approach
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {clinicalPillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blush-300 transition-colors shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-sm text-navy-900">
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

            {/* Direct Consultation Call to Action */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md transition-all"
              >
                <span>Consult Dr. Ishika Gupta</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Home visits scheduled across <strong>Sakinaka, Ghatkopar, Kurla & Vidyavihar</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
