"use client";

import React from "react";
import { profileData } from "@/../data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Cpu,
  Zap,
  Layers,
  GraduationCap,
  Award,
  Compass,
  CheckCircle2,
} from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Hardware, IC & Embedded Systems",
      description:
        "Building from fundamental semiconductor physics and circuit theory to physical microcontroller prototyping with Arduino, sensor telemetry, and simulation tools like Proteus.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Energy & Bio-Electrochemical Innovation",
      description:
        "Engineering next-generation clean tech, such as Microbial Fuel Cell (MFC) systems converting hazardous industrial sludge into clean electricity, recognized by PT Pertamina Hulu Energi.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Data-Driven Organizational R&D",
      description:
        "Leading R&D operations at IME FTUI by executing quantitative surveys, institutional health evaluations, and strategic policy formulations for student governance.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t-2 border-amber-200 dark:border-amber-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          badge="Background & Mission"
          title="About Me"
          subtitle="Engineering student bridging rigorous electrical theory with hands-on embedded intelligence and sustainable energy innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 leading-relaxed text-base sm:text-lg">
            {profileData.detailedBio.map((paragraph, index) => (
              <p key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-900/50 hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block text-stone-900 dark:text-stone-100 font-semibold">
                    Technical Integrity
                  </strong>
                  <span className="text-xs text-stone-600 dark:text-stone-400">
                    Data-backed problem solving & structured validation.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-900/50 hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="block text-stone-900 dark:text-stone-100 font-semibold">
                    Continuous Research
                  </strong>
                  <span className="text-xs text-stone-600 dark:text-stone-400">
                    Always expanding in IC design, IoT & machine intelligence.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Pillars (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              // Core Focus Pillars
            </h3>
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="p-5 bg-gradient-to-br from-white to-amber-50/40 dark:from-stone-900 dark:to-amber-950/20 hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/50 border-2 border-amber-200 dark:border-amber-800/60 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
