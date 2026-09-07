"use client";

import React from "react";
import { skillsData } from "@/../data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Cpu,
  Terminal,
  Wrench,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case 1:
        return <Terminal className="w-5 h-5 text-indigo-500" />;
      case 2:
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 3:
        return <Users className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05"
          badge="Technical Competencies"
          title="Skills Matrix"
          subtitle="Engineering disciplines, programming frameworks, simulation software, and leadership expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3.5 mb-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 shrink-0">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        skill.highlight
                          ? "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300/80 dark:border-sky-700/80"
                          : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>// {category.skills.length} skills listed</span>
                <span className="text-sky-500">• Verified Experience</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
