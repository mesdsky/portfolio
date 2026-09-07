export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Electronics, Hardware & Power Systems",
    description: "Circuit analysis, microcontrollers, embedded prototyping, and clean energy systems.",
    skills: [
      { name: "Electronics & IC Foundations", highlight: true },
      { name: "Circuit Analysis & Simulation", highlight: true },
      { name: "Arduino & Microcontrollers", highlight: true },
      { name: "IoT & Sensor Telemetry", highlight: true },
      { name: "Proteus Circuit Design", highlight: true },
      { name: "Solar PV & Off-Grid Systems", highlight: false },
      { name: "Power Systems Fundamentals", highlight: false },
      { name: "Hardware Prototyping & Breadboarding", highlight: false },
    ],
  },
  {
    title: "Programming, AI & Computing",
    description: "Software languages, data-driven analytical modeling, and intelligent algorithms.",
    skills: [
      { name: "Python", highlight: true },
      { name: "C / C++ (Embedded)", highlight: true },
      { name: "Data-Driven Analysis & Modeling", highlight: true },
      { name: "Artificial Intelligence Foundations", highlight: true },
      { name: "Algorithms & Logic Design", highlight: false },
      { name: "Git & Version Control", highlight: false },
    ],
  },
  {
    title: "Engineering & Creative Tools",
    description: "Simulation environments, CAD/UI design, data modeling, and media production.",
    skills: [
      { name: "Proteus VSM", highlight: true },
      { name: "Microsoft Excel (Advanced Modeling)", highlight: true },
      { name: "Figma (UI & Wireframing)", highlight: false },
      { name: "Adobe Photoshop", highlight: false },
      { name: "Adobe Premiere Pro", highlight: false },
      { name: "VS Code & Arduino IDE", highlight: false },
      { name: "Google Workspace & Productivity", highlight: false },
    ],
  },
  {
    title: "Leadership & Professional Competencies",
    description: "Departmental leadership, research methodologies, and cross-functional coordination.",
    skills: [
      { name: "Research & Development (R&D) Management", highlight: true },
      { name: "Strategic Organizational Analysis", highlight: true },
      { name: "Technical Project Leadership", highlight: true },
      { name: "Stakeholder & Division Management", highlight: false },
      { name: "Technical Writing & Presentation", highlight: false },
      { name: "Problem Solving & Analytical Thinking", highlight: false },
    ],
  },
];
