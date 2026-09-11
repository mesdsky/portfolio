"use client";

import React from "react";
import { skillsData } from "@/../data/skills";
import { Cpu, Terminal, Wrench, Users, Layers } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-accent-primary" />;
      case 1:
        return <Terminal className="w-5 h-5 text-accent-primary" />;
      case 2:
        return <Wrench className="w-5 h-5 text-accent-primary" />;
      case 3:
        return <Users className="w-5 h-5 text-accent-primary" />;
      default:
        return <Layers className="w-5 h-5 text-accent-primary" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            05 — Technical Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Skills Matrix
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="reveal-on-scroll"
            >
              <div className="p-8 h-full border border-soft rounded-lg dark-transition group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-soft">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center text-accent-primary">
                      {getCategoryIcon(index)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display tracking-tight text-primary">
                      {category.title}
                    </h3>
                    <p className="font-meta text-xs text-muted mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List — Editorial, Not Badges */}
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-neutral-50 dark:hover:bg-neutral-900/50 dark-transition group/item"
                    >
                      <span className={`font-meta text-sm ${
                        skill.highlight
                          ? "text-primary font-bold"
                          : "text-secondary"
                      }`}>
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="w-2 h-2 rounded-full bg-accent-primary" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-soft text-xs font-meta text-muted">
                  <span className="opacity-50">// {category.skills.length} skills</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}