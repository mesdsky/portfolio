"use client";

import React from "react";
import { profileData } from "@/../data/profile";
import { Cpu, Layers, MapPin } from "lucide-react";

const pillars = [
  {
    icon: <Layers className="w-4 h-4 text-accent-primary" />,
    title: "Hardware, IC & Embedded Systems",
    description:
      "Building from fundamental semiconductor physics and circuit theory to physical microcontroller prototyping with Arduino, sensor telemetry, and simulation tools like Proteus.",
  },
  {
    icon: <Cpu className="w-4 h-4 text-accent-primary" />,
    title: "Data-Driven Organizational R&D",
    description:
      "Leading R&D operations at IME FTUI by executing quantitative surveys, institutional health evaluations, and strategic policy formulations for student governance.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            01 — Background & Mission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative Layout — Asymmetric, Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-lg max-w-none">
              {profileData.detailedBio.map((paragraph, index) => (
                <p key={index} className="reveal-on-scroll">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Philosophy Box — Editorial, Not Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft">
                <div className="mb-2">
                  <span className="text-accent-primary">
                    <Layers className="w-4 h-4 inline" />
                  </span>
                  <h4 className="font-display text-sm mt-2 mb-1 text-primary">
                    Technical Integrity
                  </h4>
                </div>
                <p className="font-meta text-xs text-muted">
                  Data-backed problem solving & structured validation.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft">
                <div className="mb-2">
                  <span className="text-accent-primary">
                    <Cpu className="w-4 h-4 inline" />
                  </span>
                  <h4 className="font-display text-sm mt-2 mb-1 text-primary">
                    Continuous Research
                  </h4>
                </div>
                <p className="font-meta text-xs text-muted">
                  Always expanding in IC design, IoT & machine intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Focus Pillars — Compact Preview */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-meta text-xs font-bold uppercase tracking-wide text-muted">
                  Core Focus Areas
                </h3>
                <span className="font-meta text-xs text-accent-primary">// expand</span>
              </div>

              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-soft rounded-lg group dark-transition"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-accent-primary">
                        {pillar.icon}
                      </div>
                      <h4 className="font-display text-sm font-medium text-primary">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="font-meta text-xs text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  {/* Hover Reveal Line */}
                  <div className="h-px bg-accent-primary/0 group-hover:bg-accent-primary dark-transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}