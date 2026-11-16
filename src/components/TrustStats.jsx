import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Users } from 'lucide-react';

export default function TrustStats() {
  const highlights = [
    {
      title: "Council Registered",
      value: "Reg. 2023/12345",
      subtitle: "Maharashtra State OTPT Council",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      title: "Patients Recovered",
      value: "1,200+ Recoveries",
      subtitle: "Ortho, Neuro & Post-Op Care",
      icon: Award,
      color: "text-gold-700 bg-gold-50 border-gold-200"
    },
    {
      title: "Home Visits Completed",
      value: "3,500+ Visits",
      subtitle: "Across Central Mumbai",
      icon: Users,
      color: "text-navy-700 bg-navy-50 border-navy-200"
    },
    {
      title: "Dedicated Attention",
      value: "1-on-1 Bedside",
      subtitle: "Undivided 45-60 Min Sessions",
      icon: HeartHandshake,
      color: "text-rose-700 bg-blush-100 border-blush-200"
    }
  ];

  return (
    <section className="bg-white border-y border-blush-200 py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="p-4 sm:p-5 rounded-2xl bg-[#FCFBFB] border border-slate-100 hover:border-blush-300 transition-all duration-200 hover:shadow-soft flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-navy-950 tracking-tight leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-navy-700 mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
