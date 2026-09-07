export interface ExperienceItem {
  id: string;
  role: string;
  roleId?: string; // Indonesian title if applicable
  organization: string;
  period: string;
  location: string;
  type: "Leadership & R&D" | "Social Engineering" | "Robotics & Hardware" | "Academic";
  badge?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "ime-ftui-rd",
    role: "Vice Head of Research and Development (R&D)",
    roleId: "Wakil Kepala Bidang Penelitian dan Pengembangan (Litbang)",
    organization: "Ikatan Mahasiswa Elektro Fakultas Teknik Universitas Indonesia (IME FTUI)",
    period: "Feb 2026 – Present",
    location: "Depok, Indonesia",
    type: "Leadership & R&D",
    badge: "Current Leadership",
    summary:
      "Leading the departmental think-tank responsible for organizational diagnostics, data-driven performance assessments, and strategic institutional advisory across all divisions in IME FTUI.",
    responsibilities: [
      "Led and mentored Research & Development staff members in executing comprehensive organizational health analyses and performance evaluations across diverse functional divisions.",
      "Developed data-driven analytical models, assessment frameworks, and strategic policy recommendations to support the executive board in governance decision-making.",
      "Managed research initiatives and stakeholder consultation programs that generated actionable, metric-backed roadmaps for long-term organizational enhancement.",
      "Spearheaded quantitative survey analysis and qualitative internal reviews to optimize departmental workflows and member engagement.",
    ],
    skills: [
      "Strategic Analysis",
      "Organizational R&D",
      "Data-Driven Modeling",
      "Team Leadership",
      "Stakeholder Management",
      "Slide Decking & Reporting",
    ],
  },
  {
    id: "elektro-charity-2025",
    role: "Vice Head of Publication, Design, and Documentation",
    roleId: "Wakil Kepala Divisi Publikasi, Desain, dan Dokumentasi (PDD)",
    organization: "Elektro Charity by IME FTUI 2025",
    period: "Jul 2025 – Oct 2025",
    location: "Bogor, Indonesia",
    type: "Social Engineering",
    badge: "Community Engineering Project",
    summary:
      "Directed media production and public campaign operations for an engineering-driven community electrification program that installed off-grid solar-powered public lighting in rural Bogor.",
    responsibilities: [
      "Supervised and synchronized 3 distinct operational divisions—Publication, Graphic Design, and Multimedia Documentation—throughout the complete project lifecycle.",
      "Engineered comprehensive digital awareness campaigns, educational video reels, and high-fidelity graphics to raise public backing and donor transparency for renewable energy access.",
      "Coordinated task delegation, milestone tracking, and quality assurance for all visual branding materials and social media deliverables.",
      "Directed on-site technical media coverage during the physical installation of photovoltaic panels, battery storage, and public LED luminaires in target rural communities.",
    ],
    skills: [
      "Solar Lighting Systems",
      "Media Direction",
      "Team Coordination",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Project Management",
    ],
  },
  {
    id: "robotics-man2",
    role: "Head of MAN 2 Jakarta's Robotics Team",
    roleId: "Ketua Tim Robotik MAN 2 Jakarta",
    organization: "Robotics Laboratory – MAN 2 Jakarta",
    period: "Aug 2022 – Aug 2023",
    location: "Jakarta, Indonesia",
    type: "Robotics & Hardware",
    badge: "Competition Leadership",
    summary:
      "Revitalized the school's robotics engineering division after a 1-year inactivity period, establishing technical training programs and leading the hardware squad to multiple regional and ASEAN-level competition podiums.",
    responsibilities: [
      "Revitalized organizational infrastructure from the ground up: recruited expert technical mentors, restored lab testbenches, and implemented a structured syllabus covering Arduino programming, sensors, and motor control.",
      "Spearheaded end-to-end electrical schematics design, hardware prototyping, sensor calibration, and PID algorithmic tuning for competitive autonomous robotic platforms.",
      "Managed competition logistics, budgeting, technical simulations, and high-pressure tournament execution across multiple race categories.",
      "Led the squad to win 3rd Place in a major category at ASEAN Robotic Day and 2nd & 3rd Place at the Jakarta Madrasah Robotics Competition.",
      "Established a sustainable documentation system and knowledge-transfer framework, ensuring the team's continued competitive success for succeeding generations.",
    ],
    skills: [
      "Robotics Prototyping",
      "Arduino & C++",
      "Sensor Integration (IR/Ultrasonic)",
      "PID Control Systems",
      "Team Revitalization",
      "Strategic Planning",
    ],
  },
];
