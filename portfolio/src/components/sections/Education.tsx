"use client";

import React from "react";
import { educationData } from "@/../data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02"
          badge="Academic Background"
          title="Education"
          subtitle="Formal engineering education and foundational coursework in Electrical Engineering."
        />

        <div className="space-y-8">
          {educationData.map((edu) => (
            <Card
              key={edu.id}
              borderHighlight={edu.id === "ui-ee"}
              className="p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="p-1.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {edu.institution}
                    </h3>
                    {edu.faculty && (
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        • {edu.faculty}
                      </span>
                    )}
                  </div>

                  <div className="text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400 font-mono">
                    {edu.major} — {edu.degree}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <Badge variant="amber" size="sm" className="mt-1">
                      <Award className="w-3 h-3 text-amber-500" />
                      <span>Cumulative GPA: {edu.gpa}</span>
                    </Badge>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework and Highlights Grid */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                {/* Coursework */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-sky-500" />
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Relevant Coursework & Studies
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Key Highlights
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-sky-500 font-mono mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
