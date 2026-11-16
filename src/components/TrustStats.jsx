import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Users } from 'lucide-react';

export default function TrustStats() {
  const highlights = [
    {
      title: "Council Registered",
      value: "Reg. 2023/12345",
      subtitle: "Maharashtra State OTPT Council",
      icon: ShieldCheck,
      color: "text-aqua-700 bg-aqua-50 border-aqua-200"
    },
    {
      title: "Patients Recovered",
      value: "1,200+ Recoveries",
      subtitle: "Ortho, Neuro & Post-Op Care",
      icon: Award,
      color: "text-slate-800 bg-slate-100 border-slate-200"
    },
    {
      title: "Home Visits Completed",
      value: "3,500+ Visits",
      subtitle: "Across Central Mumbai",
      icon: Users,
      color: "text-aqua-700 bg-aqua-50 border-aqua-200"
    },
    {
      title: "Dedicated Attention",
      value: "1-on-1 Bedside",
      subtitle: "Undivided 45-60 Min Sessions",
      icon: HeartHandshake,
      color: "text-slate-800 bg-slate-100 border-slate-200"
    }
  ];

  return (
    <section className="bg-[#F7F9FA] py-10 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-5 rounded-2xl flex items-center gap-4 text-left group bg-white"
              >
                <div className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform duration-200`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">
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
