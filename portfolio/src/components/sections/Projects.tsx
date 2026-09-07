"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/../data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Zap,
  Bot,
  Sun,
  Cpu,
  Award,
  ArrowUpRight,
  Globe,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Layers,
} from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Energy & Environmental", label: "Energy & CleanTech" },
    { id: "Robotics & Hardware", label: "Robotics & Hardware" },
    { id: "Renewable Energy", label: "Solar & Power" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const getCategoryIcon = (category: ProjectItem["category"]) => {
    switch (category) {
      case "Energy & Environmental":
        return <Zap className="w-4 h-4 text-emerald-500" />;
      case "Robotics & Hardware":
        return <Bot className="w-4 h-4 text-sky-500" />;
      case "Renewable Energy":
        return <Sun className="w-4 h-4 text-amber-500" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="04"
          badge="Engineering & Innovation"
          title="Featured Projects"
          subtitle="Research initiatives, competitive robotics platforms, and community engineering deployments."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                filter === cat.id
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              borderHighlight={project.featured}
              className="p-6 sm:p-8 overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {project.category}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>

                  {project.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-xs font-mono font-medium">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.award}</span>
                    </div>
                  )}
                </div>

                {/* External links */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tagline */}
              <p className="mt-5 text-sm sm:text-base font-medium text-sky-700 dark:text-sky-300 leading-relaxed">
                &ldquo;{project.tagline}&rdquo;
              </p>

              {/* Technical Breakdown: Problem -> Solution -> Approach -> Outcome */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem Card */}
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Card */}
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Approach Steps */}
              {project.approach && project.approach.length > 0 && (
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-sky-500" />
                    <span>Technical Architecture & Approach</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.approach.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-md bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="font-mono text-sky-500 font-bold">0{idx + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome & Role */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Role: <span className="font-semibold text-slate-800 dark:text-slate-200">{project.role}</span>
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.outcome}</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
