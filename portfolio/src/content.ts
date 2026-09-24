// Single source of truth for the site. Every fact here is traceable:
//   [CV]    public/cv.pdf
//   [PAPER] public/artworker-paper.pdf (Eco-Power from Waste, team artWorker, 2025)
//   [LIVE]  previous deployed site (nabilhaniyazafri.vercel.app)
//   [IG]    instagram.com/nbl.zfr bio ("EE UI '24")
// Do not add anything that can't be traced to one of these.

export const profile = {
  name: "Nabil Haniya Zafri",
  role: "Electrical Engineering undergraduate",
  school: "Universitas Indonesia",
  location: "Depok, Indonesia",
  email: "nhaniya14@gmail.com",
  cv: "/cv.pdf",
  // [CV] summary, lightly condensed
  intro:
    "Electrical Engineering undergraduate at Universitas Indonesia with a strong interest in power systems, electrical equipment and data-driven problem solving.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nabilhaniyazafri" },
    { label: "Instagram", href: "https://www.instagram.com/nbl.zfr" },
    { label: "GitHub", href: "https://github.com/mesdsky" },
  ],
};

// [CV] interests + [LIVE] "Currently exploring"
export const interests = [
  "Power systems",
  "Electrical equipment",
  "Data-driven problem solving",
  "Renewable energy",
  "Robotics",
  "Electronics",
  "System simulation",
];

// [CV]
export const education = {
  school: "Universitas Indonesia",
  degree: "Undergraduate, Electrical Engineering",
  location: "Depok, Indonesia",
  start: "2024-08-01",
  end: "2028-08-01",
  period: "Aug 2024 – Aug 2028 (expected)",
  gpa: "3.71",
};

export const facts = [
  { value: 3.71, decimals: 2, suffix: "", label: "GPA out of 4.00", sub: "Electrical Engineering, UI" },                          // [CV]
  { value: 3, decimals: 0, suffix: "", label: "Divisions led", sub: "Publication, design & documentation · Elektro Charity 2025" }, // [CV]
  { value: 1, decimals: 0, suffix: " yr", label: "Of inactivity", sub: "before I revived MAN 2 Jakarta's robotics team" },        // [CV]
  { value: 2025, decimals: 0, suffix: "", label: "Favorable Idea", sub: "Innovation Idea Competition · PT Pertamina Hulu Energi" }, // [CV]
];

export type Role = {
  period: string;
  org: string;
  title: string;
  kind: string;
  current?: boolean;
  blurb?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    // [CV]
    period: "Feb 2026 — Present",
    org: "Ikatan Mahasiswa Elektro FTUI (IME FTUI)",
    title: "Vice Head of Research & Development",
    kind: "Organisation",
    current: true,
    points: [
      "Lead R&D staff in organisational analysis and evaluation across multiple divisions.",
      "Develop data-driven recommendations and strategic assessments to support executive decision-making.",
      "Manage research initiatives and consulting activities that turn into actionable insights for organisational improvement.",
    ],
  },
  {
    // [CV]
    period: "Jul 2025 — Oct 2025",
    org: "Elektro Charity by IME FTUI 2025 · Bogor",
    title: "Vice Head of Publication, Design & Documentation",
    kind: "Community engineering",
    blurb:
      "An engineering-based community service programme. The 2025 project delivered a solar-powered lighting system to address public lighting issues in a rural area.",
    points: [
      "Led and supervised three divisions — publication, design and documentation — through the whole event lifecycle.",
      "Managed production of promotional content, including videos and social media designs.",
      "Coordinated task delegation, monitored deliverables and oversaw on-site documentation and media.",
      "Kept branding and communication consistent across all publication materials.",
    ],
  },
  {
    // [CV]
    period: "Aug 2022 — Aug 2023",
    org: "Robotics Team · MAN 2 Jakarta",
    title: "Head of MAN 2 Jakarta's Robotics Team",
    kind: "Robotics",
    points: [
      "Revived the team after a one-year inactivity period: recruited mentors, rebuilt operations and set up structured training.",
      "Led the design, development and testing of robotics projects for competitive events.",
      "Guided the team to 3rd place in a category at ASEAN Robotic Day, and 2nd & 3rd place in robotics categories at the Jakarta Madrasah Competition.",
      "Built a sustainable team structure for continued participation in competitions.",
    ],
  },
  {
    // [LIVE]
    period: "Jul 2022 — Jul 2023",
    org: "OSIS Arutala · MAN 2 Jakarta",
    title: "Head of Information Technology",
    kind: "Student council",
    points: [
      "Led the organisation's IT section, managing technology projects, digital solutions, social media and technology-based events.",
    ],
  },
  {
    // [LIVE]
    period: "Sep 2022",
    org: "OSIS Arutala · MAN 2 Jakarta",
    title: "Project Officer · Spirulinix 8.0",
    kind: "Event",
    points: ["Coordinated the planning and delivery of Spirulinix 8.0 as project officer."],
  },
];

export const awards = [
  {
    // [CV] + [PAPER] (competition name / organiser)
    mark: "Favorable Idea",
    title: "Innovation Idea Competition 2025",
    by: "Upstream Innovation · PT Pertamina Hulu Energi",
    note: "With team artWorker, for Eco-Power from Waste.",
    year: "2025",
  },
  {
    // [CV]
    mark: "3rd",
    title: "ASEAN Robotic Day",
    by: "Competition category",
    note: "As Head of MAN 2 Jakarta's Robotics Team.",
    year: "2022–23",
  },
  {
    // [CV]
    mark: "2nd & 3rd",
    title: "Jakarta Madrasah Competition",
    by: "Robotics categories",
    note: "As Head of MAN 2 Jakarta's Robotics Team.",
    year: "2022–23",
  },
];

// [CV] skills; MATLAB/Simulink from [PAPER] + [LIVE]
export const toolkit = [
  { group: "Technical", tone: "orange", items: ["Arduino", "Proteus", "Microsoft Excel", "MATLAB / Simulink"] },
  { group: "Design & productivity", tone: "sage", items: ["Adobe Photoshop", "Adobe Premiere Pro", "Figma", "Google Workspace"] },
  {
    group: "Professional",
    tone: "terracotta",
    items: ["Leadership", "Project Management", "Strategic Analysis", "Stakeholder Management", "Problem Solving", "Communication", "Slide Decking"],
  },
] as const;

// [PAPER] — all values are simulation results (MATLAB/Simulink), per the paper's abstract & §4.
export const mfc = {
  title: "Eco-Power from Waste",
  subtitle:
    "A Microbial Fuel Cell system that turns food waste into electricity while reducing heavy metals in drilling-mud waste.",
  team: "Team artWorker · five-person student team, Universitas Indonesia",
  competition: "Innovation Idea Competition 2025 — Upstream Innovation",
  role: "Contributed to research development, data analysis and technical presentations.", // [CV]
  paper: "/artworker-paper.pdf",
  cover: "/artworker-cover.jpg",
  cell: { v: 0.255, i: 0.00505 }, // steady-state per cell, Lampiran 1
  steps: [
    {
      k: "Feed",
      h: "Two waste streams, one reactor",
      p: "Dissolved food waste fills the anode chamber as the carbon source. Drilling mud — carrying heavy metals like Cr⁶⁺, Cu²⁺ and Pb²⁺ — fills the cathode chamber, separated by a Nafion 117 proton-exchange membrane.",
    },
    {
      k: "Cell",
      h: "Bacteria do the work",
      p: "Electrogenic bacteria (Shewanella oneidensis MR-1, Geobacter sulfurreducens) oxidise the substrate. Electrons travel through the external circuit and reduce metal ions at the cathode. Modelled in MATLAB/Simulink with modified Monod kinetics.",
    },
    {
      k: "Stack",
      h: "16 cells in series",
      p: "One cell gives about 0.255 V. Sixteen in series per string: 16 × 0.255 V = 4.08 V. Strings are then paralleled for current.",
    },
    {
      k: "Boost",
      h: "DC–DC boost converter",
      p: "A boost converter at ~90% efficiency lifts the stack's 4.08 V to a stable 4.2 V charging level, with PWM control to hold the maximum power point.",
    },
    {
      k: "Use",
      h: "Store it, then power sensors",
      p: "The energy charges a 1.5 Ah (≈6 Wh) sodium-ion battery, enough to run 0.3–0.5 W mine-monitoring sensors for 12–20 hours.",
    },
  ],
  results: [
    { value: 24, prefix: "−", suffix: "%", label: "Substrate", detail: "1.0 → 0.76 g/L", trend: "down" },
    { value: 140, prefix: "+", suffix: "%", label: "Electrogenic biomass", detail: "0.05 → 0.12 g/L", trend: "up" },
    { value: 60, prefix: "−", suffix: "%", label: "Cu²⁺ ions", detail: "0.01 → 0.004 mol/L", trend: "down" },
    { value: 0.25, prefix: "", suffix: " V", label: "Per-cell output", detail: "at 5 mA · 1.25 mW · 0.125 W/m²", trend: "up" },
  ],
  // Paper's design point with 70% total efficiency: 16s416p = 6,656 cells
  design: { series: 16, parallel: 416 },
};
