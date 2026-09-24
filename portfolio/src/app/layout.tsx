import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, DM_Serif_Display, Barlow_Condensed } from "next/font/google";
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

const displaySerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const condensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6edd6" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nabilhaniyazafri.vercel.app"),
  title: "Nabil Haniya Zafri — Electrical Engineering, Universitas Indonesia",
  description:
    "Portfolio of Nabil Haniya Zafri, Electrical Engineering undergraduate at Universitas Indonesia (GPA 3.71/4.00). Vice Head of R&D at IME FTUI and co-author of Eco-Power from Waste, a Microbial Fuel Cell concept awarded Favorable Idea at the Innovation Idea Competition 2025 by PT Pertamina Hulu Energi.",
  keywords: [
    "Nabil Haniya Zafri",
    "Teknik Elektro UI",
    "Electrical Engineering Universitas Indonesia",
    "IME FTUI",
    "Microbial Fuel Cell",
    "Eco-Power from Waste",
    "MAN 2 Jakarta Robotics",
  ],
  authors: [{ name: "Nabil Haniya Zafri", url: "https://www.linkedin.com/in/nabilhaniyazafri" }],
  creator: "Nabil Haniya Zafri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nabilhaniyazafri.vercel.app",
    title: "Nabil Haniya Zafri — Electrical Engineering, Universitas Indonesia",
    description:
      "Electrical Engineering undergraduate at Universitas Indonesia. Power systems, data-driven problem solving, and a Microbial Fuel Cell concept awarded Favorable Idea (2025).",
    siteName: "Nabil Haniya Zafri",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Haniya Zafri — Electrical Engineering, Universitas Indonesia",
    description: "Electrical Engineering undergraduate at Universitas Indonesia.",
  },
  robots: { index: true, follow: true },
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
      "Power Systems",
      "Microbial Fuel Cells",
      "Arduino",
      "Proteus",
      "MATLAB / Simulink",
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
      // Font variables must live on <html>: the :root tokens in globals.css reference them.
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} ${condensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
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