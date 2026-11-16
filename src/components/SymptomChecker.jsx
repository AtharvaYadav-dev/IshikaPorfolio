import React, { useState } from 'react';
import { HelpCircle, ArrowRight, CheckCircle2, Stethoscope, AlertCircle } from 'lucide-react';

export default function SymptomChecker({ onOpenBooking, onSelectCondition }) {
  const [selectedIssue, setSelectedIssue] = useState('knee');

  const issues = [
    {
      id: 'knee',
      label: 'Knee Pain / Osteoarthritis',
      area: 'Knee & Lower Limb',
      recommendedTherapies: ['Exercise Therapy', 'Manual Mobilization', 'Electrotherapy (IFT/US)', 'Kinesio Taping'],
      clinicalAdvice: 'Avoid forceful floor squatting or repeated stairs until quadriceps strengthening and joint decompression are initiated.',
      recoveryGoal: 'Reduce weight-bearing joint friction, rebuild vastus medialis strength, restore pain-free walking.'
    },
    {
      id: 'back',
      label: 'Lower Back & Sciatica',
      area: 'Lumbar Spine & Sacrum',
      recommendedTherapies: ['Myofascial Release (MFR)', 'Electrotherapy (TENS/IFT)', 'McKenzie Extension / Core Stability', 'Cupping Therapy'],
      clinicalAdvice: 'Avoid prolonged soft-sofa sitting. Ensure ergonomic lumbar support and begin gentle directional nerve flossing under clinical supervision.',
      recoveryGoal: 'Decompress compressed nerve roots, eliminate radiating spasms, establish pelvic girdle stability.'
    },
    {
      id: 'shoulder',
      label: 'Frozen Shoulder / Rotator Cuff',
      area: 'Shoulder & Cervical',
      recommendedTherapies: ['Manual Joint Glides (Maitland)', 'Therapeutic Ultrasound', 'Capsular Stretching', 'Cupping Therapy'],
      clinicalAdvice: 'Never force aggressive overhead jerking at home. Gentle progressive passive glides prevent long-term joint capsule thickening.',
      recoveryGoal: 'Regain full functional reaching overhead and behind the back without night aches.'
    },
    {
      id: 'neck',
      label: 'Neck Stiffness & Tech Neck',
      area: 'Cervical & Upper Spine',
      recommendedTherapies: ['Deep Tissue MFR', 'Dry Cupping', 'Postural Bio-mechanics', 'Cervical Traction & Mobilization'],
      clinicalAdvice: 'Raise screens to eye level. Dr. Ishika inspects your actual workstation ergonomics during the home session.',
      recoveryGoal: 'Alleviate tension headaches, relax spastic trapezius muscles, restore full head rotation.'
    },
    {
      id: 'postop',
      label: 'Post-Surgery (TKR / THR / ACL)',
      area: 'Operated Limb & Gait',
      recommendedTherapies: ['Phased Post-Operative Protocol', 'Cryo-therapy & Swelling Drainage', 'Gait Training with Walker', 'Active-Assisted ROM'],
      clinicalAdvice: 'Strict adherence to your surgeon’s weight-bearing timeline is crucial to prevent implant loosening and joint stiffness.',
      recoveryGoal: 'Regain targeted knee/hip bend degrees and achieve independent unassisted walking.'
    },
    {
      id: 'neuro',
      label: 'Stroke / Parkinson’s Rehab',
      area: 'Neuromuscular System',
      recommendedTherapies: ['Neuro-Developmental Therapy (Bobath)', 'Proprioceptive Balance Training', 'Task-Oriented Relearning', 'Spasticity Inhibition'],
      clinicalAdvice: 'Early and continuous bedside mobilization builds neural plasticity and prevents contractures.',
      recoveryGoal: 'Reclaim safe transfers, independent standing balance, and hand dexterity.'
    }
  ];

  const current = issues.find(i => i.id === selectedIssue) || issues[0];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F8] border-y border-blush-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blush-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Interactive Care Advisor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-navy-950 tracking-tight font-heading">
            Where Does It Hurt? Select Your Symptom
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get instant clinical insights and discover which evidence-based therapies Dr. Ishika recommends for your exact complaint.
          </p>
        </div>

        {/* Buttons / Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {issues.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedIssue(item.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedIssue === item.id
                  ? 'btn-pill-navy scale-102'
                  : 'bg-white text-navy-950 border border-slate-200 hover:border-blush-300 shadow-xs'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Advisor Details Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                  Target Region: {current.area}
                </span>
                <h3 className="text-2xl font-extrabold text-navy-950 mt-1 font-heading">
                  {current.label}
                </h3>
              </div>

              <div>
                <span className="text-xs font-bold text-navy-950 block mb-2">Recommended Modalities & Therapies:</span>
                <div className="flex flex-wrap gap-2">
                  {current.recommendedTherapies.map((t, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blush-50 text-navy-950 px-3 py-1.5 rounded-xl border border-blush-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-navy-950 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  Doctor's Clinical Insight:
                </div>
                <p className="leading-relaxed">{current.clinicalAdvice}</p>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-navy-950 font-bold">Primary Recovery Goal:</strong> {current.recoveryGoal}
              </div>
            </div>

            {/* Right Callout */}
            <div className="md:col-span-5 bg-gradient-to-br from-blush-50 via-white to-blush-50 p-6 sm:p-7 rounded-2xl border border-blush-300 text-center space-y-4">
              <div className="w-13 h-13 mx-auto rounded-2xl bg-navy-950 text-gold-400 flex items-center justify-center shadow-md">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-navy-950 text-base font-heading">
                  Get Personalized Bedside Evaluation
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Dr. Ishika visits your home with clinical assessment gear to verify joint kinematics and initiate pain relief.
                </p>
              </div>
              <button
                onClick={() => {
                  if (onSelectCondition) onSelectCondition(current.label);
                  onOpenBooking();
                }}
                className="w-full btn-pill-gold py-3 px-4 text-xs sm:text-sm flex items-center justify-center gap-1.5"
              >
                <span>Book Care for {current.label}</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
