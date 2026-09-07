export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
}

export interface ProfileStat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface ProfileData {
  name: string;
  pronouns?: string;
  headline: string;
  statusBadge: {
    text: string;
    available: boolean;
  };
  institution: {
    name: string;
    faculty: string;
    major: string;
    batch: string;
    expectedGraduation: string;
    gpa: string;
    location: string;
  };
  shortBio: string;
  detailedBio: string[];
  focusAreas: string[];
  socials: SocialLinks;
  resumeUrl: string;
  stats: ProfileStat[];
}

export const profileData: ProfileData = {
  name: "Nabil Haniya Zafri",
  headline: "Electrical Engineering Student @ Universitas Indonesia",
  statusBadge: {
    text: "Available for Engineering Projects & Research Collaboration",
    available: true,
  },
  institution: {
    name: "Universitas Indonesia",
    faculty: "Fakultas Teknik",
    major: "Teknik Elektro",
    batch: "2024",
    expectedGraduation: "Aug 2028",
    gpa: "3.71 / 4.00",
    location: "Depok, Indonesia",
  },
  shortBio:
    "Undergraduate in Electrical Engineering at Universitas Indonesia with deep interest in Electronics & IC, IoT & Embedded Systems, AI, and Power Systems. Experienced in technical leadership, robotics engineering, and cross-functional R&D.",
  detailedBio: [
    "I am an Electrical Engineering undergraduate at Universitas Indonesia (Class of 2024) passionate about the intersection of hardware engineering, embedded intelligence, and sustainable technology.",
    "My technical journey spans from revitalizing competitive robotics teams in high school—leading them to podium finishes at ASEAN Robotic Day—to developing bio-electrochemical energy solutions that earned the Favorable Idea Award at the PT Pertamina Hulu Energi Innovation Idea Competition 2025.",
    "Currently, I serve as Vice Head of Research and Development (R&D) at IME FTUI, where I lead organizational research, performance evaluation, and strategic data-driven assessments. I am constantly seeking opportunities to bridge rigorous electrical theory with hands-on, high-impact engineering solutions.",
  ],
  focusAreas: [
    "Elektronika & IC",
    "IoT & Embedded Systems",
    "Artificial Intelligence",
    "Power Systems & Renewable Energy",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/nabilhaniyazafri",
    github: "https://github.com/mesdsky",
    instagram: "https://instagram.com/nbl.zfr",
    email: "nhaniya14@gmail.com",
  },
  resumeUrl: "/cv.pdf",
  stats: [
    {
      label: "Current GPA",
      value: "3.71",
      sublabel: "out of 4.00 at FTUI",
    },
    {
      label: "Current Leadership",
      value: "Vice Head of R&D",
      sublabel: "IME FTUI (2026 – Present)",
    },
    {
      label: "Innovation Award",
      value: "PHE 2025",
      sublabel: "Favorable Idea @ Pertamina Hulu Energi",
    },
    {
      label: "Robotics Honors",
      value: "3rd Place",
      sublabel: "ASEAN Robotic Day & JMC",
    },
  ],
};
