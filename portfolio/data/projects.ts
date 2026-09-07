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
  {
    id: "autonomous-robotics-platform",
    title: "High-Speed Autonomous Robotic Platform & Microcontroller Control System",
    category: "Robotics & Hardware",
    featured: true,
    award: "3rd Place ASEAN Robotic Day • 2nd & 3rd Place Jakarta Madrasah Competition",
    period: "2022 – 2023",
    tagline:
      "Precision autonomous competitive robotics featuring customized sensor conditioning arrays and low-latency PID closed-loop control.",
    problem:
      "High-speed robotics competitions require millisecond-level responsiveness, stable tracking over dynamic high-contrast tracks, and robust motor telemetry without losing trajectory or spinning out under rapid deceleration.",
    solution:
      "Designed and fabricated an autonomous mobile robot powered by an optimized Arduino microcontroller core, integrated with custom infrared transceiver optical arrays, high-efficiency H-bridge motor drivers, and closed-loop PID control firmware.",
    approach: [
      "Sensor Matrix & Signal Conditioning: Constructed multi-channel optical sensor arrays calibrated for ambient light rejection and edge detection.",
      "PID Algorithm Tuning: Formulated and experimentally tuned proportional-integral-derivative control loops to dynamically adjust differential motor PWM speeds.",
      "Power Distribution Circuitry: Isolated delicate logic rails from high-drain motor current lines to eliminate electrical noise and voltage dips.",
      "Chassis Architecture: Designed a lightweight, low-center-of-gravity frame optimized for cornering stability and rapid acceleration.",
    ],
    technologies: [
      "Arduino & C++",
      "PID Control Loops",
      "Proteus Circuit Simulation",
      "Infrared & Ultrasonic Sensors",
      "H-Bridge Motor Control",
      "Hardware Prototyping",
    ],
    role: "Lead Hardware & Firmware Developer & Robotics Team Head",
    outcome:
      "Successfully competed and secured 3rd Place at the ASEAN Robotic Day and 2nd & 3rd Place at the Jakarta Madrasah Robotics Competition.",
    links: {
      github: "https://github.com/mesdsky",
    },
  },
  {
    id: "rural-solar-lighting",
    title: "Off-Grid Solar-Powered Public Lighting System (Elektro Charity 2025)",
    category: "Renewable Energy",
    featured: true,
    period: "2025",
    tagline:
      "Sustainable off-grid photovoltaic public lighting infrastructure engineered for unserved rural communities in Bogor.",
    problem:
      "Under-resourced public pathways in rural Bogor lacked electrical grid access, resulting in zero nighttime visibility, safety risks, and restricted local economic mobility after dusk.",
    solution:
      "Co-designed and deployed an autonomous standalone solar photovoltaic (PV) lighting network equipped with deep-cycle energy storage, automated dusk-to-dawn charge controllers, and high-lumen energy-efficient LED luminaires.",
    approach: [
      "Photovoltaic & Load Sizing: Conducted solar insolation analysis to size solar panels and battery storage capacity for 12+ hours continuous lighting with 2 days autonomy factor.",
      "Charge Regulation & Protection: Integrated intelligent charge controllers with overcharge, deep discharge, and short-circuit protection circuits.",
      "Physical Deployment & Commissioning: Supervised field assembly, mechanical mounting on sturdy poles, and electrical termination in rural community zones.",
      "Public Transparency & Media: Directed documentation and infographic reporting for sponsor and stakeholder transparency.",
    ],
    technologies: [
      "Solar Photovoltaics (PV)",
      "Battery Storage & Sizing",
      "Charge Controllers",
      "LED Circuit Design",
      "Off-Grid Power Systems",
    ],
    role: "Engineering Outreach Leadership & Media/Documentation Head",
    outcome:
      "Successfully energized multiple public community sectors, delivering immediate nighttime security and sustainable clean lighting to local residents.",
    links: {},
  },
  {
    id: "embedded-iot-telemetry",
    title: "Embedded IoT Environmental Telemetry & Sensor Acquisition Node",
    category: "IoT & Embedded",
    featured: false,
    period: "2024 – 2025",
    tagline:
      "Modular embedded telemetry node for real-time environmental monitoring, ADC sampling, and wireless data streaming.",
    problem:
      "Need for cost-effective, low-power telemetry nodes that can reliably collect multiple physical sensor inputs (temperature, voltage, humidity) and stream data without packet loss.",
    solution:
      "Constructed a modular embedded hardware prototype utilizing microcontrollers, analog-to-digital converter signal conditioning, and serial/wireless communication pipelines for live data visualization.",
    approach: [
      "Multi-Sensor Interfacing: Interfaced analog and digital sensors through I2C and SPI communication protocols.",
      "Proteus Circuit Simulation: Modeled component behavior and verified power rails before physical breadboarding.",
      "Data Pipeline: Structured lightweight telemetry packets for serial parsing and visualization scripts.",
    ],
    technologies: [
      "Microcontrollers",
      "Proteus VSM",
      "Sensor Interfacing (I2C/SPI)",
      "C / C++",
      "Python Data Logging",
    ],
    role: "Hardware & Firmware Prototyper",
    outcome:
      "Validated stable multichannel sampling and telemetry logging with zero packet drift under continuous lab testing.",
    links: {
      github: "https://github.com/mesdsky",
    },
  },
];
