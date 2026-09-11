export interface ProjectItem {
  id: string;
  title: string;
  category: "Energy & Environmental" | "Robotics & Hardware" | "Renewable Energy" | "IoT & Embedded";
  featured: boolean;
  award?: string;
  period: string;
  tagline: string;
  problem: string;
  solution: string;
  approach: string[];
  technologies: string[];
  role: string;
  outcome: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "microbial-fuel-cell",
    title: "Microbial Fuel Cell (MFC): Dual-Action Bio-Electricity & Drilling Mud Bioremediation",
    category: "Energy & Environmental",
    featured: true,
    award: "Favorable Idea Award – PT Pertamina Hulu Energi (PHE) Innovation Idea Competition 2025",
    period: "2025",
    tagline:
      "Transforming hazardous drilling mud sludge and organic food waste into renewable bio-electricity while simultaneously remediating heavy metals.",
    problem:
      "Post-mining oil and gas drilling operations generate immense quantities of hazardous drilling mud waste containing toxic heavy metal contaminants. Simultaneously, municipal organic food waste continues to accumulate in landfills without sustainable valorization pathways.",
    solution:
      "Engineered an innovative dual-chamber Microbial Fuel Cell (MFC) concept utilizing exoelectrogenic bacteria. The microbial consortium metabolizes the organic food waste substrate in the anode chamber while utilizing the drilling mud as an electron acceptor/matrix, simultaneously generating renewable direct current (DC) electricity and biologically stabilizing heavy metals.",
    approach: [
      "Bio-Electrochemical Anode: Exoelectrogenic bacteria oxidize organic matter under anaerobic conditions, releasing protons (H+) and generating metabolic electrons (e-).",
      "Extracellular Electron Transfer (EET): Harvested electrons travel through an external electrical circuit, generating usable bio-voltage and continuous DC power.",
      "Heavy Metal Bioremediation: Biological redox reactions in the reactor facilitate the immobilization and precipitation of heavy metal ions from drilling mud waste.",
      "Data-Driven Modeling: Performed stoichiometric energy yield calculations, substrate degradation kinetics, and economic feasibility assessments.",
    ],
    technologies: [
      "Bio-Electrochemistry",
      "Microbial Fuel Cell (MFC)",
      "Bioremediation",
      "Energy Harvesting",
      "Data Analysis",
      "Technical Modeling",
    ],
    role: "Research & Innovation Team Member (Technical Research, System Analysis, & Presentation)",
    outcome:
      "Awarded Favorable Idea in the Innovation Idea Competition organized by PT Pertamina Hulu Energi (PHE), demonstrating practical feasibility for green oilfield waste management.",
    links: {},
  },
];
