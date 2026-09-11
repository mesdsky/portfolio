import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1512" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nabil Haniya Zafri | Electrical Engineering @ Universitas Indonesia",
  description:
    "Official personal portfolio & online CV of Nabil Haniya Zafri — Electrical Engineering undergraduate at Universitas Indonesia (FTUI '24). Specializing in Electronics & IC, Embedded IoT Systems, Artificial Intelligence, and Power Systems.",
  keywords: [
    "Nabil Haniya Zafri",
    "Nabil Haniya",
    "Teknik Elektro UI",
    "Electrical Engineering Universitas Indonesia",
    "Universitas Indonesia",
    "Fakultas Teknik UI",
    "FTUI 2024",
    "IME FTUI",
    "Microbial Fuel Cell Pertamina",
    "Robotics MAN 2 Jakarta",
    "ASEAN Robotic Day",
    "IoT Developer Indonesia",
    "Embedded Systems Engineer",
  ],
  authors: [
    {
      name: "Nabil Haniya Zafri",
      url: "https://www.linkedin.com/in/nabilhaniyazafri",
    },
  ],
  creator: "Nabil Haniya Zafri",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://nabilhaniyazafri.vercel.app",
    title: "Nabil Haniya Zafri | Electrical Engineering @ Universitas Indonesia",
    description:
      "Personal portfolio, engineering research in Microbial Fuel Cells, competitive robotics leadership, and technical CV of Nabil Haniya Zafri.",
    siteName: "Nabil Haniya Zafri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Haniya Zafri | Electrical Engineering @ Universitas Indonesia",
    description:
      "Electrical Engineering undergraduate at Universitas Indonesia. Research in MFC Clean Energy, Robotics, and IoT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nabil Haniya Zafri",
    jobTitle: "Electrical Engineering Undergraduate",
    affiliation: {
      "@type": "Organization",
      name: "Universitas Indonesia",
      department: "Fakultas Teknik - Departemen Teknik Elektro",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "MAN 2 Jakarta",
      },
    ],
    knowsAbout: [
      "Electrical Engineering",
      "Electronics & IC",
      "Embedded Systems & IoT",
      "Microbial Fuel Cells",
      "Competitive Robotics",
      "Power Systems",
      "Python & C++",
    ],
    sameAs: [
      "https://www.linkedin.com/in/nabilhaniyazafri",
      "https://github.com/mesdsky",
      "https://instagram.com/nbl.zfr",
    ],
    email: "mailto:nhaniya14@gmail.com",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}