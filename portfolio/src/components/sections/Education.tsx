"use client";

import React from "react";
import { educationData } from "@/../data/education";
import { Calendar, MapPin, BookOpen } from "lucide-react";

export function Education() {
  const highlightedEdu = educationData.find(e => e.id === "ui-ee");

  return (
    <section id="education" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            02 — Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => {
            const isFeatured = edu.id === "ui-ee";
            return (
              <div
                key={edu.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${
                  isFeatured ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                {/* Left: Date & Location */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="inline-flex items-center gap-2 font-meta text-xs text-accent-primary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 font-meta text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-4 text-sm font-bold text-primary bg-accent/5 px-3 py-1.5 rounded inline-block">
                      {edu.gpa}
                    </div>
                  )}
                </div>

                {/* Middle: Institution Info */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-display tracking-tight text-primary mb-1">
                    {edu.institution}
                  </h3>
                  <p className="font-display text-sm text-muted mb-1">
                    {edu.faculty}
                  </p>
                  <p className="font-meta text-xs text-accent-primary">
                    {edu.major} — {edu.degree}
                  </p>
                </div>

                {/* Right: Core Info */}
                <div className="lg:col-span-4 space-y-4 lg:pt-2">
                  <div>
                    <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.slice(0, 5).map((course, idx) => (
                        <span
                          key={idx}
                          className="font-meta text-xs text-muted bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded"
                        >
                          {course}
                        </span>
                      ))}
                      {edu.coursework.length > 5 && (
                        <span className="font-meta text-xs text-muted">
                          +{edu.coursework.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="font-meta text-xs leading-relaxed text-secondary flex items-start gap-2"
                        >
                          <span />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}