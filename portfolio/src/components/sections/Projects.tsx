"use client";

import React, { useState } from "react";
import { projectsData } from "@/../data/projects";
import {
  Zap,
  Bot,
  Sun,
  Cpu,
  ArrowUpRight,
  Code2,
  FileText,
  Award,
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Energy & Environmental":
        return <Zap className="w-4 h-4" />;
      case "Robotics & Hardware":
        return <Bot className="w-4 h-4" />;
      case "Renewable Energy":
        return <Sun className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            04 — Engineering & Innovation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-meta text-xs px-4 py-2 rounded transition-all ${
                filter === cat.id
                  ? "bg-accent-primary text-white"
                  : "bg-neutral-100 dark:bg-neutral-900 text-secondary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group reveal-on-scroll">
              {/* Hero Card — Larger for Featured */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left: Project Info — 2 cols */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Category & Role */}
                  <div className="flex flex-wrap items-center gap-3 font-meta text-xs">
                    <span className="flex items-center gap-1.5">
                      <span>{getCategoryIcon(project.category)}</span>
                      {project.category}
                    </span>
                    <span>•</span>
                    <span className="text-muted">{project.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-display tracking-tight text-primary">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-display text-base text-accent-primary italic">
                    "{project.tagline}"
                  </p>

                  {/* Award if present */}
                  {project.award && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/5 rounded">
                      <Award className="w-3.5 h-3.5 text-accent-primary" />
                      <span className="font-meta text-xs font-bold uppercase tracking-wide text-primary">
                        {project.award}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right: Actions — 1 col */}
                <div className="flex flex-col gap-3 lg:justify-start">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-meta text-xs text-primary hover:text-accent-primary dark-transition"
                    >
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Technical Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {/* Problem Statement */}
                <div className="p-6 rounded-lg border border-soft dark-transition">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-soft">
                    <span className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-primary">
                      Problem Statement
                    </h4>
                  </div>
                  <p className="font-meta text-xs text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Engineered Solution */}
                <div className="p-6 rounded-lg border border-soft dark-transition">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-soft">
                    <span className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </span>
                    <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-primary">
                      Engineered Solution
                    </h4>
                  </div>
                  <p className="font-meta text-xs text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Approach Steps */}
              {project.approach && project.approach.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-meta text-xs font-bold uppercase tracking-wide text-muted mb-3">
                    // Technical Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.approach.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg border border-soft hover:bg-neutral-50 dark:hover:bg-neutral-900/50 dark-transition"
                      >
                        <span className="font-meta text-lg font-bold text-accent-primary mr-2">
                          0{idx + 1}.
                        </span>
                        <span className="font-meta text-xs text-secondary leading-relaxed">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Row — Role & Outcome */}
              <div className="mt-8 pt-6 border-t border-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-meta text-xs text-muted mb-1">
                    Role: <span className="font-bold text-primary ml-1">{project.role}</span>
                  </p>
                  <p className="font-meta text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <span>•</span>
                    <span>{project.outcome}</span>
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-meta text-xs text-muted bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded"
                    >
                      {tech}
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