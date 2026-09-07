export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Competition" | "Academic" | "Honor" | "Leadership";
  description: string;
  badge?: string;
  highlight?: boolean;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "phe-innovation-2025",
    title: "Favorable Idea Award – Innovation Idea Competition",
    issuer: "PT Pertamina Hulu Energi (PHE)",
    year: "2025",
    category: "Competition",
    badge: "National Innovation Award",
    highlight: true,
    description:
      "Awarded Favorable Idea for developing an innovative Microbial Fuel Cell (MFC) solution that generates bio-electricity from organic waste while actively bioremediating heavy metal contaminants in drilling mud sludge.",
  },
  {
    id: "ui-academic-excellence",
    title: "Academic Excellence – Electrical Engineering UI",
    issuer: "Fakultas Teknik Universitas Indonesia",
    year: "2024 – Present",
    category: "Academic",
    badge: "GPA 3.71 / 4.00",
    highlight: true,
    description:
      "Maintaining an outstanding cumulative GPA of 3.71 out of 4.00 across fundamental and electrical engineering coursework at FTUI.",
  },
  {
    id: "asean-robotic-day",
    title: "3rd Place – ASEAN Robotic Day Competition",
    issuer: "ASEAN Robotic Committee",
    year: "2022 – 2023",
    category: "Competition",
    badge: "Regional Robotics Podium",
    highlight: true,
    description:
      "Led MAN 2 Jakarta's Robotics Team to 3rd Place in a major competition category through precision hardware tuning and PID control optimization.",
  },
  {
    id: "jmc-robotics-award",
    title: "2nd & 3rd Place – Jakarta Madrasah Robotics Competition",
    issuer: "Kanwil Kemenag DKI Jakarta",
    year: "2022 – 2023",
    category: "Competition",
    badge: "Provincial Podium",
    highlight: false,
    description:
      "Achieved multiple podium finishes across robotics race categories as Head of MAN 2 Jakarta's Robotics Team.",
  },
];
