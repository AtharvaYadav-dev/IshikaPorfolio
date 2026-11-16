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
  primaryTagline: "Restoring Movement. Reviving Lives.",
  secondaryTagline: "Better Movement. Brighter Days.",
  experienceYears: "5+ Years Clinical Experience",
  bio: "Dr. Ishika Gupta is a qualified physiotherapist providing personalized physiotherapy care for orthopedic, musculoskeletal, sports, and neurological conditions. I provide evidence-based treatment focused on pain management, mobility, strength, and functional recovery. Treatment plans are individualized based on each patient’s condition, goals, and functional needs.",
  shortBio: "Specializing in orthopedic rehabilitation, neurological recovery, pain relief, and home-based clinical physiotherapy across Central Mumbai.",
  workingHours: "Monday to Saturday: 8:00 AM – 8:00 PM | Sunday: By Prior Appointment",
  serviceAreas: [
    { name: "Sakinaka", pin: "400072", travelTime: "15-20 mins", landmark: "Metro Station & 90ft Road" },
    { name: "Ghatkopar West", pin: "400086", travelTime: "10-25 mins", landmark: "LBS Marg, Amrut Nagar & Station Area" },
    { name: "Kurla West", pin: "400070", travelTime: "15-30 mins", landmark: "Phoenix Marketcity & CST Road" },
    { name: "Vidyavihar", pin: "400077", travelTime: "10-20 mins", landmark: "Somaiya Campus & Station Road" },
  ],
  stats: [
    { label: "Patients Rehabilitated", value: "1,200+", description: "Successfully recovered without hospital stay" },
    { label: "Home Visits Completed", value: "3,500+", description: "Comfortable recovery in home setting" },
    { label: "Patient Satisfaction", value: "99.4%", description: "Verified positive clinical feedback" },
    { label: "Clinical Precision", value: "100%", description: "Evidence-based customized protocols" }
  ]
};

export const CORE_SERVICES = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    tagline: "Hands-on Joint & Tissue Mobilization",
    icon: "HandHeart",
    badge: "Specialized Technique",
    shortDesc: "Specialized hands-on clinical manipulation and mobilization of joints and soft tissues to restore natural motion and relieve stiff joints.",
    fullDesc: "Manual therapy employs skilled, passive movements of joints and soft tissue structures to decrease pain, increase range of motion, reduce myofascial tension, and induce deep muscle relaxation.",
    benefits: [
      "Immediate joint stiffness reduction",
      "Spinal articulation and decompression",
      "Restoration of natural anatomical gliding",
      "Reduces dependency on oral pain medications"
    ],
    idealFor: ["Frozen shoulder", "Cervical stiffness", "Facet joint lock", "Lumbar disc issues"],
    equipmentUsed: "Specialized mobilization belts & ergonomic clinical positioning"
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    tagline: "Active Strengthening & Functional Restoration",
    icon: "Activity",
    badge: "Core Recovery",
    shortDesc: "Targeted therapeutic exercises designed to rebuild core stability, neuromuscular balance, joint endurance, and functional stamina.",
    fullDesc: "Prescribed medical exercise regimens tailored specifically to your body's current tolerance level, focusing on eccentric control, proprioception, kinetic chain balance, and progressive overload.",
    benefits: [
      "Rebuilds weakened stabilizing muscles",
      "Prevents recurring slips, strains, and falls",
      "Improves endurance for daily chores and sports",
      "Corrects muscular imbalances & faulty posture"
    ],
    idealFor: ["Post-operative muscle atrophy", "Knee Osteoarthritis", "Scoliosis / Kyphosis", "General debility"],
    equipmentUsed: "Resistance thera-bands, loop bands, stability discs, weights"
  },
  {
    id: "mfr",
    title: "Myofascial Release (MFR)",
    tagline: "Deep Fascial Tension Decompression",
    icon: "Layers",
    badge: "Pain Relief",
    shortDesc: "Gentle sustained pressure into myofascial connective tissue restrictions to eliminate pain and restore pain-free movement.",
    fullDesc: "Trauma, inflammatory responses, and surgical procedures can cause tight fascial restrictions exerting excessive pressure upon nerves and blood vessels. MFR slowly elongates restricted fascia.",
    benefits: [
      "Releases stubborn trigger points & muscle knots",
      "Increases blood flow to oxygen-starved muscles",
      "Alleviates radiating tension headaches & back spasms",
      "Enhances tissue flexibility without traumatic force"
    ],
    idealFor: ["Trapezius muscle spasm", "Sciatica trigger points", "Fibromyalgia tender points", "Chronic back pain"],
    equipmentUsed: "Targeted ischemic pressure tools & soft tissue release lubricants"
  },
  {
    id: "kinesio-taping",
    title: "Kinesio Taping",
    tagline: "Neuromuscular Support & Decompression",
    icon: "ShieldAlert",
    badge: "Sports & Rehab",
    shortDesc: "Elastic therapeutic tape applied strategically to support muscles, stabilize joints, and accelerate lymphatic drainage.",
    fullDesc: "Specialized medical-grade elastic cotton tape that mimics human skin elasticity, lifting microscopic skin layers to facilitate lymphatic clearance and providing continuous proprioceptive feedback.",
    benefits: [
      "Continuous support 24/7 during normal activities",
      "Accelerates hematoma and edema absorption",
      "Relieves pressure on pain receptors",
      "Stabilizes weak patella, ankle, or shoulder without restricting motion"
    ],
    idealFor: ["Runner's knee", "Sprained ankles", "Tennis elbow", "Postural stabilization"],
    equipmentUsed: "Hypoallergenic, water-resistant medical Kinesiology tape"
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    tagline: "Myofascial Decompression & Micro-Circulation",
    icon: "Sparkles",
    badge: "High Demand",
    shortDesc: "Negative pressure vacuum therapy applied to tight muscle groups to stimulate micro-circulation and break deep adhesions.",
    fullDesc: "Dry medical cupping uses suction cups to draw interstitial fluid into tissues, breaking micro-adhesions in stubborn muscles, releasing stagnant metabolites, and drastically accelerating tissue repair.",
    benefits: [
      "Rapid relief from chronic tightness and back aches",
      "Enhances cellular repair through hyperaemia",
      "Releases deep tight fascial layers unattainable by fingers alone",
      "Great for athletes and desk workers suffering postural fatigue"
    ],
    idealFor: ["Upper back knots", "Hamstring tightness", "IT band friction syndrome", "Lumbar stiffness"],
    equipmentUsed: "Sterilized clinical vacuum suction cups & skin protective serums"
  },
  {
    id: "electrotherapy",
    title: "Electrotherapy (TENS, IFT, US, SWD)",
    tagline: "Advanced Modality Pain Gating & Healing",
    icon: "Zap",
    badge: "Medical Tech",
    shortDesc: "Portable electro-physical modalities (TENS, IFT, Therapeutic Ultrasound, SWD) brought to your home for non-invasive pain relief.",
    fullDesc: "Targeted application of therapeutic electrical currents and acoustic sound waves to block pain pathways (Pain Gate Mechanism), stimulate endorphin release, and accelerate deep tissue cellular repair.",
    benefits: [
      "Swift symptomatic pain relief without side effects",
      "Interferential current (IFT) penetrates deep muscle groups",
      "Therapeutic Ultrasound softens scar tissue & reduces acute swelling",
      "Accelerates bone and tendon healing phases"
    ],
    idealFor: ["Acute sprains", "Severe sciatica", "Calcaneal spur / Plantar fasciitis", "Arthritic flare-ups"],
    equipmentUsed: "Calibrated portable TENS/IFT combi-units & Therapeutic Ultrasound heads"
  },
  {
    id: "post-op-rehab",
    title: "Post-Surgical Rehabilitation",
    tagline: "Structured Protocol-Driven Recovery",
    icon: "HeartPulse",
    badge: "Clinical Specialty",
    shortDesc: "Tailored phased rehabilitation after orthopedic, spinal, or trauma surgery to safely regain full functional independence.",
    fullDesc: "Working in close alignment with your operating orthopedic surgeon’s protocol, Dr. Ishika safely guides you through early mobilization, weight-bearing progression, gait training, and final functional recovery.",
    benefits: [
      "Prevents post-operative joint stiffness and DVT risks",
      "Safely restores knee/hip flexion and extension degrees",
      "Home gait training with walker, crutches, or cane",
      "Minimizes post-surgical fear of movement (kinesiophobia)"
    ],
    idealFor: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "ACL Reconstruction", "Spine Discectomy / Fusion"],
    equipmentUsed: "Goniometers, cryo-gel packs, balance mats, mobility aids"
  }
];

export const CONDITIONS_TREATED = [
  {
    category: "Orthopedic",
    title: "Osteoarthritis (OA) & Rheumatoid Arthritis (RA)",
    description: "Joint preservation therapy, pain modulation, quadriceps/hamstring strengthening, and cartilage unload strategies.",
    commonSymptoms: "Morning stiffness, knee cracking (crepitus), swelling, difficulty climbing stairs.",
    icon: "Bone"
  },
  {
    category: "Orthopedic",
    title: "Knee, Hip, Neck & Back Pain",
    description: "Targeted spinal decompression, core muscle stabilization, ergonomic posture correction, and sciatica relief.",
    commonSymptoms: "Radiating leg pain, sharp lower back pinch, neck spasm after long laptop hours.",
    icon: "Crosshair"
  },
  {
    category: "Orthopedic",
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    description: "Multiphase capsular stretching, gentle joint glide mobilization, and progressive pain-free reach restoration.",
    commonSymptoms: "Night shoulder ache, inability to reach behind back, severe restriction lifting arm.",
    icon: "UserCheck"
  },
  {
    category: "Orthopedic",
    title: "Sciatica & Disc Bulge",
    description: "Nerve flossing / neurodynamics, directional preference exercises (McKenzie approach), and muscle spasm release.",
    commonSymptoms: "Shooting electric sensations down hip and calf, tingling toes, numbness sitting.",
    icon: "ShieldAlert"
  },
  {
    category: "Orthopedic",
    title: "Postural Problems & Cervicogenic Headaches",
    description: "Forward head posture correction, thoracic spine mobilization, ergonomic workstation counseling.",
    commonSymptoms: "Tension headaches, rounded shoulders, upper trapezius stiffness, mid-back burning.",
    icon: "Smile"
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
    commonSymptoms: "Sudden joint twist, localized inflammation, pain with high exertion.",
    icon: "Flame"
  },
  {
    category: "Other",
    title: "Post-Operative Rehabilitation",
    description: "Accelerated yet safe recovery following Total Knee/Hip Replacement, fracture fixations, and spinal surgeries.",
    commonSymptoms: "Surgical edema, reduced joint range, fear of putting weight on the operated leg.",
    icon: "HeartPulse"
  },
  {
    category: "Other",
    title: "Geriatric & Senior Citizen Care",
    description: "Gentle mobility maintenance, safe balance training, osteoporosis management, and independent living support.",
    commonSymptoms: "Fear of falling, progressive muscle wasting (sarcopenia), general joint stiffness.",
    icon: "HeartHandshake"
  },
  {
    category: "Other",
    title: "Cardiac & Respiratory Conditions",
    description: "Chest physiotherapy, breathing exercises (active cycle of breathing), post-pneumonia reconditioning, and endurance building.",
    commonSymptoms: "Shortness of breath on mild exertion, chest congestion, low physical stamina.",
    icon: "Wind"
  },
  {
    category: "Other",
    title: "Muscle Pain, Spasms & Myofascial Triggers",
    description: "Dry cupping, MFR, ultrasound heating, and stretch protocols for desk-workers and repetitive stress sufferers.",
    commonSymptoms: "Painful muscle knots, localized tenderness, restricted flexibility.",
    icon: "Zap"
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
    area: "Vidyavihar East/West",
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
    q: "Why should I choose Home Visit Physiotherapy instead of a clinic?",
    a: "When dealing with acute joint pain, post-surgical recovery (like knee or hip replacement), or neurological issues, traveling through Mumbai traffic worsens pain and risks re-injury. Home visits provide one-on-one undivided attention in your comfortable environment, allow the doctor to assess your real-life home ergonomics (bed height, chair, stairs), and save valuable time for family members."
  },
  {
    q: "What equipment does Dr. Ishika bring for home sessions?",
    a: "Dr. Ishika carries a fully sanitized, portable clinical physiotherapy kit including portable Electrotherapy units (TENS & IFT), Therapeutic Ultrasound machines, Kinesiology tapes, Medical Cupping sets, resistance bands (Thera-bands), mobilization straps, and specialized orthopedic evaluation tools."
  },
  {
    q: "Which specific areas in Mumbai do you cover for home visits?",
    a: "Home visits are currently focused in Central Mumbai: Sakinaka, Ghatkopar West, Kurla West, and Vidyavihar. If you reside in closely adjacent areas (like Ghatkopar East, Asalpha, or Chandivali), please contact us to check feasibility."
  },
  {
    q: "How long does a typical physiotherapy session last?",
    a: "Each session lasts approximately 45 to 60 minutes. The first appointment includes a comprehensive 15–20 minute clinical examination, movement tests, and goal setting followed by initial therapeutic intervention."
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
