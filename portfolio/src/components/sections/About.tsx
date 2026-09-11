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
              <div className="p-6 rounded-lg border border-soft dark-transition">
                <div className="mb-4 pb-4 border-b border-soft">
                  <span className="text-accent-primary">
                    <Layers className="w-5 h-5 inline" />
                  </span>
                  <h4 className="font-display text-sm mt-2 text-primary font-medium">
                    Technical Integrity
                  </h4>
                </div>
                <p className="font-meta text-xs text-secondary">
                  Data-backed problem solving & structured validation.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-soft dark-transition">
                <div className="mb-4 pb-4 border-b border-soft">
                  <span className="text-accent-primary">
                    <Cpu className="w-5 h-5 inline" />
                  </span>
                  <h4 className="font-display text-sm mt-2 text-primary font-medium">
                    Continuous Research
                  </h4>
                </div>
                <p className="font-meta text-xs text-secondary">
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
                  className="p-6 rounded-lg border border-soft hover:bg-neutral-50 dark:hover:bg-neutral-900/50 dark-transition"
                >
                  <div className="flex items-start gap-3 mb-4 pb-4 border-b border-soft">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center text-accent-primary">
                      {pillar.icon}
                    </div>
                    <h4 className="font-display text-sm font-medium text-primary">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-meta text-xs text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}