export const DOCTOR_INFO = {
  name: "Dr. Ishika Gupta",
  title: "Consultant Physiotherapist",
  degrees: "BPT (Bachelor of Physiotherapy)",
  registration: "Maharashtra OTPT Council Registration No.: 2023/12345",
  councilName: "Maharashtra State Council for Occupational Therapy and Physiotherapy",
  email: "guptaishika501@gmail.com",
  phone: "+91 9987299842",
  phoneRaw: "+919987299842",
  whatsappNumber: "919987299842",
  primaryTagline: "Better Movement. Brighter Days.",
  heroText: "Personalized, evidence-based physiotherapy care at your comfort.",
  experienceYears: "5+ Years Clinical Experience",
  bio: "Dr. Ishika Gupta is a qualified physiotherapist providing personalized care for orthopedic, musculoskeletal, sports, and neurological conditions. Focused on pain management, mobility, strength, and functional recovery.",
  credentialsDetail: "BPT, Maharashtra OTPT Council Registration No.: 2023/12345",
  workingHours: "Monday to Saturday: 8:00 AM – 8:00 PM | Sunday: By Prior Appointment",
  serviceAreas: [
    { name: "Sakinaka", pin: "400072", travelTime: "15-20 mins", landmark: "Metro Station & 90ft Road" },
    { name: "Ghatkopar West", pin: "400086", travelTime: "10-25 mins", landmark: "LBS Marg, Amrut Nagar & Station Area" },
    { name: "Kurla West", pin: "400070", travelTime: "15-30 mins", landmark: "Phoenix Marketcity & CST Road" },
    { name: "Vidyavihar", pin: "400077", travelTime: "10-20 mins", landmark: "Somaiya Campus & Station Road" },
  ],
  stats: [
    { label: "Patients Rehabilitated", value: "1,200+", description: "Recovered with personalized bedside care" },
    { label: "Home Visits Completed", value: "3,500+", description: "In-home therapy across Central Mumbai" },
    { label: "Patient Satisfaction", value: "99.4%", description: "Verified positive clinical recovery" },
    { label: "Evidence-Based Care", value: "100%", description: "Protocol-driven rehabilitation" }
  ]
};

export const CORE_SERVICES = [
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    tagline: "Active Strengthening & Functional Restoration",
    icon: "Activity",
    badge: "Core Recovery",
    shortDesc: "Targeted therapeutic exercises designed to rebuild core stability, joint endurance, muscular balance, and functional independence.",
    benefits: [
      "Rebuilds weakened stabilizing muscle groups",
      "Corrects muscular imbalances & faulty posture",
      "Prevents recurring slips, strains, and falls",
      "Restores endurance for daily living activities"
    ],
    idealFor: ["Post-operative recovery", "Knee Osteoarthritis", "Weak stabilizing muscles", "Postural rehabilitation"],
    equipmentUsed: "Resistance thera-bands, stability loops, balance mats"
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    tagline: "Hands-on Joint & Tissue Mobilization",
    icon: "HandHeart",
    badge: "Clinical Specialty",
    shortDesc: "Skilled passive mobilization and manipulation of joints and soft tissues to restore natural anatomical gliding and relieve stubborn joint stiffness.",
    benefits: [
      "Immediate reduction in joint stiffness",
      "Spinal articulation and decompression",
      "Restoration of full physiological range of motion",
      "Reduces reliance on oral analgesics"
    ],
    idealFor: ["Frozen shoulder", "Cervical spine stiffness", "Facet joint dysfunction", "Lumbar pain"],
    equipmentUsed: "Specialized mobilization belts & ergonomic clinical positioning"
  },
  {
    id: "mfr",
    title: "Myofascial Release (MFR)",
    tagline: "Deep Fascial Tension Decompression",
    icon: "Layers",
    badge: "Pain Relief",
    shortDesc: "Gentle sustained pressure into myofascial connective tissue restrictions to eliminate chronic muscle tension, knots, and radiating aches.",
    benefits: [
      "Releases deep stubborn trigger points and knots",
      "Increases local micro-circulation in restricted tissues",
      "Alleviates radiating tension headaches and spasms",
      "Restores tissue elasticity without aggressive force"
    ],
    idealFor: ["Trapezius muscle spasms", "Sciatica trigger points", "Chronic back tightness", "Fibromyalgia"],
    equipmentUsed: "Targeted ischemic release techniques & medical grade emollients"
  },
  {
    id: "kinesio-taping",
    title: "Kinesio Taping",
    tagline: "Neuromuscular Support & Decompression",
    icon: "ShieldAlert",
    badge: "Sports & Stability",
    shortDesc: "Elastic therapeutic tape applied strategically to support muscles, stabilize vulnerable joints, and facilitate continuous lymphatic drainage.",
    benefits: [
      "Continuous support 24/7 during daily activities",
      "Accelerates edema and swelling clearance",
      "Relieves pressure on cutaneous pain receptors",
      "Stabilizes weak patella or ankle without restricting motion"
    ],
    idealFor: ["Runner's knee", "Ankle sprains", "Tennis elbow", "Postural alignment"],
    equipmentUsed: "Hypoallergenic, water-resistant medical Kinesiology tape"
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    tagline: "Myofascial Decompression & Micro-Circulation",
    icon: "Sparkles",
    badge: "Rapid Recovery",
    shortDesc: "Negative pressure vacuum therapy applied to tight muscle groups to stimulate blood flow, break micro-adhesions, and accelerate recovery.",
    benefits: [
      "Rapid relief from chronic tightness and back aches",
      "Enhances cellular repair through hyperaemia",
      "Releases deep tight fascial layers",
      "Excellent for desk workers and athletes with postural fatigue"
    ],
    idealFor: ["Upper back stiffness", "Hamstring tight bands", "IT band syndrome", "Lumbar stiffness"],
    equipmentUsed: "Sterilized clinical vacuum suction cups & skin protective serums"
  },
  {
    id: "electrotherapy",
    title: "Electrotherapy (TENS, IFT, Ultrasound)",
    tagline: "Advanced Modality Pain Gating & Healing",
    icon: "Zap",
    badge: "Advanced Tech",
    shortDesc: "Portable electro-physical modalities (TENS for pain gating, IFT for deep neuromuscular stimulation, and Ultrasound for tissue healing) brought to your home.",
    benefits: [
      "Fast, non-invasive symptomatic pain reduction",
      "IFT penetrates deep muscle and pelvic structures",
      "Therapeutic Ultrasound softens scar tissue & decreases swelling",
      "Triggers natural endorphin analgesia"
    ],
    idealFor: ["Acute ligament sprains", "Severe sciatica", "Plantar fasciitis", "Arthritic flare-ups"],
    equipmentUsed: "Calibrated portable TENS/IFT units & Therapeutic Ultrasound heads"
  }
];

export const CONDITIONS_TREATED = [
  {
    category: "Orthopedic",
    title: "Osteoarthritis (OA) & Rheumatoid Arthritis",
    description: "Joint preservation therapy, pain modulation, quadriceps/hamstring strengthening, and cartilage unload strategies.",
    commonSymptoms: "Morning stiffness, knee cracking, joint swelling, difficulty climbing stairs.",
    icon: "Bone"
  },
  {
    category: "Orthopedic",
    title: "Knee, Neck & Back Pain",
    description: "Targeted spinal decompression, core muscle stabilization, ergonomic posture correction, and sciatica relief.",
    commonSymptoms: "Radiating leg pain, sharp lower back pinch, neck spasm after long hours at computer.",
    icon: "Crosshair"
  },
  {
    category: "Orthopedic",
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    description: "Multiphase capsular stretching, gentle joint glide mobilization, and progressive pain-free reach restoration.",
    commonSymptoms: "Night shoulder ache, inability to reach behind back, severe restriction lifting arm overhead.",
    icon: "UserCheck"
  },
  {
    category: "Orthopedic",
    title: "Sciatica & Disc Bulge",
    description: "Nerve flossing / neurodynamics, directional preference exercises (McKenzie approach), and muscle spasm release.",
    commonSymptoms: "Shooting electric sensations down hip and calf, tingling toes, numbness while sitting.",
    icon: "ShieldAlert"
  },
  {
    category: "Neurological",
    title: "Stroke Rehabilitation (Hemiplegia / Paresis)",
    description: "Neuro-developmental therapy (NDT/Bobath), task-oriented motor relearning, spasticity management, and gait training.",
    commonSymptoms: "One-sided weakness, impaired hand grip, loss of balance, walking instability.",
    icon: "Brain"
  },
  {
    category: "Neurological",
    title: "Parkinson's Disease Management",
    description: "Rhythmic auditory cueing, trunk rotation exercises, balance preservation, and fall prevention protocols.",
    commonSymptoms: "Tremors, freezing of gait, postural instability, muscle rigidity.",
    icon: "Activity"
  },
  {
    category: "Other",
    title: "Sports Injuries & Ligament Strains",
    description: "Ligament sprain recovery (ACL/MCL/Ankle), tennis elbow, rotator cuff tendinitis, and return-to-sport testing.",
    commonSymptoms: "Sudden joint twist, localized inflammation, pain with exertion.",
    icon: "Flame"
  },
  {
    category: "Other",
    title: "Post-Operative Rehabilitation",
    description: "Safe, accelerated recovery following Total Knee/Hip Replacement (TKR/THR), fracture fixations, and spine surgeries.",
    commonSymptoms: "Surgical edema, reduced joint range, fear of putting weight on operated leg.",
    icon: "HeartPulse"
  },
  {
    category: "Other",
    title: "Muscle Strain & Spasms",
    description: "Dry cupping, MFR, ultrasound heating, and stretch protocols for desk-workers and repetitive stress sufferers.",
    commonSymptoms: "Painful muscle knots, localized tenderness, restricted movement.",
    icon: "Zap"
  },
  {
    category: "Other",
    title: "Geriatric & Cardiac Rehabilitation",
    description: "Gentle mobility maintenance, safe balance training, chest physiotherapy, and endurance reconditioning for seniors.",
    commonSymptoms: "Fear of falling, decreased physical stamina, progressive joint stiffness.",
    icon: "HeartHandshake"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Request a Home Session",
    desc: "Contact via call, WhatsApp, or our quick online form. Share your location (Sakinaka, Ghatkopar, Kurla, or Vidyavihar) and your primary health concern.",
    icon: "CalendarCheck"
  },
  {
    step: "02",
    title: "Comprehensive Home Evaluation",
    desc: "Dr. Ishika visits your home with clinical assessment gear. She performs a 45-minute detailed orthopedic & functional assessment to identify root causes.",
    icon: "Stethoscope"
  },
  {
    step: "03",
    title: "Hands-on Therapy & Modalities",
    desc: "Receive customized therapy right in your room: Manual therapy, electrotherapy (IFT/TENS), cupping, or taping along with guided corrective exercises.",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Monitored Functional Recovery",
    desc: "Track measurable milestones weekly with personalized home exercise charts, posture modifications, and long-term re-injury prevention.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    patientName: "Mrs. Sneha Merchant",
    age: 64,
    area: "Ghatkopar West",
    condition: "Post-Total Knee Replacement (TKR)",
    rating: 5,
    quote: "After my knee replacement surgery, climbing stairs or traveling to a clinic was out of the question. Dr. Ishika came home every day, patiently worked on my knee bend and walking balance. Within 3 weeks, I was walking comfortably without any stick. Her calm and professional manner made all the difference!",
    recoveryHighlight: "Regained 115° knee flexion in 21 days"
  },
  {
    id: 2,
    patientName: "Rajesh Kulkarni",
    age: 42,
    area: "Sakinaka (Near Metro)",
    condition: "Chronic Sciatica & L4-L5 Disc Bulge",
    rating: 5,
    quote: "My severe sciatica pain made sitting at my IT job impossible. Dr. Ishika diagnosed the exact nerve entrapment and used a combination of IFT, MFR, and McKenzie flossing. The home visit saved me hours in traffic. The pain reduced by 85% in just 6 sessions!",
    recoveryHighlight: "Pain dropped from 9/10 to 1/10 without surgery"
  },
  {
    id: 3,
    patientName: "Anandita Mukherjee",
    age: 51,
    area: "Vidyavihar",
    condition: "Frozen Shoulder (Stage 2)",
    rating: 5,
    quote: "I couldn't tie my hair or reach behind my back for over 5 months. Dr. Ishika used gentle joint mobilization and cupping therapy. She never forced painful movements and gave clear homework exercises. Today my shoulder movement is completely back!",
    recoveryHighlight: "100% full overhead reach restored"
  },
  {
    id: 4,
    patientName: "Kewalram Shah",
    age: 72,
    area: "Kurla West (Near LBS Marg)",
    condition: "Post-Stroke Mobility & Balance Rehab",
    rating: 5,
    quote: "My father had weakness on his right side after a mild stroke. Getting him to a hospital daily was exhausting. Dr. Ishika's home neurological rehab sessions rebuilt his leg strength, stepping confidence, and hand coordination. We are deeply grateful.",
    recoveryHighlight: "Independent walking indoors achieved"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Why should I choose Home Visit Physiotherapy instead of visiting a clinic?",
    a: "When dealing with acute joint pain, post-surgical recovery (like knee or hip replacement), or neurological conditions, traveling through Mumbai traffic aggravates pain and increases risk. Home visits provide dedicated 1-on-1 attention in your comfortable environment, allow evaluation of real home ergonomics, and save valuable time."
  },
  {
    q: "What equipment does Dr. Ishika bring for home sessions?",
    a: "Dr. Ishika carries a fully sanitized, portable clinical physiotherapy kit including portable Electrotherapy units (TENS & IFT), Therapeutic Ultrasound machines, Kinesiology tapes, Medical Cupping sets, resistance bands (Thera-bands), mobilization straps, and specialized orthopedic evaluation tools."
  },
  {
    q: "Which specific areas in Mumbai do you cover for home visits?",
    a: "Home visits are actively provided in Central Mumbai: Sakinaka, Ghatkopar West, Kurla West, and Vidyavihar. Adjacent locations like Ghatkopar East, Asalpha, and Chandivali are also accommodated upon prior schedule confirmation."
  },
  {
    q: "How long does a typical physiotherapy session last?",
    a: "Each session lasts approximately 45 to 60 minutes. The first appointment includes a comprehensive clinical examination, joint tests, and customized goal setting followed by initial therapeutic treatment."
  },
  {
    q: "Do you provide medical bills/receipts for health insurance reimbursement?",
    a: "Yes! Dr. Ishika Gupta is a registered physiotherapist with the Maharashtra State OTPT Council (Reg. No.: 2023/12345). Detailed clinical assessment reports and official fee receipts are provided for claim submission under corporate wellness or health insurance policies."
  },
  {
    q: "How do I book an appointment or check home visit availability?",
    a: "You can simply call or WhatsApp on +91 9987299842, or fill the appointment form on this page. We typically respond within 15–30 minutes to confirm your preferred day and time slot."
  }
];
