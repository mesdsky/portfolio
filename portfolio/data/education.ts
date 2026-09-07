export interface EducationItem {
  id: string;
  institution: string;
  faculty?: string;
  degree: string;
  major: string;
  period: string;
  expectedGraduation?: string;
  location: string;
  gpa?: string;
  description: string;
  coursework: string[];
  highlights: string[];
  badge?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "ui-ee",
    institution: "Universitas Indonesia",
    faculty: "Fakultas Teknik (FTUI)",
    degree: "Bachelor of Engineering (S.T.)",
    major: "Teknik Elektro (Electrical Engineering)",
    period: "Aug 2024 – Present",
    expectedGraduation: "Aug 2028 (Expected)",
    location: "Depok, West Java, Indonesia",
    gpa: "3.71 / 4.00",
    badge: "Current Studies",
    description:
      "Pursuing a rigorous undergraduate curriculum in Electrical Engineering, emphasizing electric circuit theory, digital logic, electronics, signals, mathematics, and applied engineering research.",
    coursework: [
      "Rangkaian Listrik (Electric Circuits & Network Analysis)",
      "Matematika Teknik (Engineering Mathematics)",
      "Fisika Dasar & Praktikum (Applied Physics & Lab Experiments)",
      "Sistem Digital & Logika (Digital Systems & Logic Design)",
      "Pemrograman Komputer & Algoritma (Computer Programming & Algorithms)",
      "Elektronika Dasar (Basic Electronics)",
    ],
    highlights: [
      "Academic standing with a cumulative GPA of 3.71 / 4.00.",
      "Vice Head of Research & Development (R&D) at Ikatan Mahasiswa Elektro (IME FTUI).",
      "Active participant in national engineering innovation competitions and lab research initiatives.",
    ],
  },
  {
    id: "man2-jakarta",
    institution: "MAN 2 Jakarta",
    degree: "High School Diploma",
    major: "Mathematics and Natural Sciences (MIPA)",
    period: "Jul 2021 – May 2024",
    location: "Jakarta, Indonesia",
    badge: "Alumni",
    description:
      "Completed secondary education with deep focus in sciences, mathematics, and active leadership in the school robotics laboratory.",
    coursework: [
      "Advanced Mathematics & Calculus",
      "Physics (Mechanics & Electromagnetism)",
      "Robotics & Microcontroller Fundamentals",
    ],
    highlights: [
      "Served as Head of MAN 2 Jakarta's Robotics Team (2022–2023).",
      "Led the squad to 3rd Place at ASEAN Robotic Day and multiple podium finishes at Jakarta Madrasah Competition.",
    ],
  },
];
