"use client";

import React from "react";
import { experienceData } from "@/../data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Users } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          badge="Leadership & Organizations"
          title="Experience & Leadership"
          subtitle="Organizational governance, engineering project direction, and competitive robotics leadership."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-xs shadow-sky-500/20 group-hover:scale-125 transition-transform" />

              <Card className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <Badge variant="highlight" size="sm">
                          {exp.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400">
                      {exp.organization}
                    </div>

                    {exp.roleId && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                        {exp.roleId}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bullet points: Action -> What I did -> Impact */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    // Key Responsibilities & Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
                    Competencies:
                  </span>
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="default" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
