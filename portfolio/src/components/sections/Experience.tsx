"use client";

import React from "react";
import { experienceData } from "@/../data/experience";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            03 — Leadership & Organizations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Experience & Leadership
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative pl-8 lg:pl-12 ${
                index !== experienceData.length - 1 ? "pb-16" : ""
              }`}
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-0 lg:left-4 top-8 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-1.5 top-8 w-4 h-4 rounded-full border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950" />

              {/* Content Card */}
              <div className="reveal-on-scroll">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-display tracking-tight text-primary">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="font-display text-sm text-accent-primary">
                      {exp.organization}
                    </p>
                    {exp.roleId && (
                      <p className="font-meta text-xs text-mut">{exp.roleId}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4 font-meta text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="font-meta text-sm text-secondary leading-relaxed mb-4 max-w-3xl">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-3">
                    // Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="font-meta text-xs leading-relaxed text-secondary flex items-start gap-2"
                      >
                        <span />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="font-meta text-xs text-primary bg-accent/5 px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}