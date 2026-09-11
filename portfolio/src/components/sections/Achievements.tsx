"use client";

import React from "react";
import { achievementsData } from "@/../data/achievements";
import { Trophy, Award, Calendar, CheckCircle } from "lucide-react";

export function Achievements() {
  if (!achievementsData || achievementsData.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            06 — Recognition & Honors
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Honors & Achievements
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              className="reveal-on-scroll"
            >
              <div className="p-8 h-full border border-soft rounded-lg bg-neutral-50 dark:bg-neutral-900/50 dark-transition group">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center text-accent-primary">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display tracking-tight text-primary mb-2">
                  {item.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-2 font-meta text-xs text-accent-primary mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.issuer}</span>
                  <span className="text-muted">•</span>
                  <span>{item.year}</span>
                </div>

                {/* Description */}
                <p className="font-meta text-xs text-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-soft flex items-center gap-2 text-xs font-meta text-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Verified Achievement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}