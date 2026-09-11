"use client";

import React from "react";
import { profileData } from "@/../data/profile";
import { FileDown, ArrowDown, Mail, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Editorial Layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Introduction Line */}
            <p className="font-meta text-sm text-accent-primary tracking-wide">
              electrical engineer // undergraduate
            </p>

            {/* Main Heading - Editorial Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight">
              {profileData.name}
            </h1>

            {/* Role & Institution - Clean Hierarchy */}
            <div className="flex flex-wrap items gap-4 text-lg sm:text-xl font-medium">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent-primary" />
                <span className="text-secondary">Electrical Engineering</span>
                <span className="text-muted text-base">@</span>
                <span className="text-primary">Universitas Indonesia</span>
              </div>
            </div>

            {/* Bio - Concise, Narrative */}
            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-secondary">
              {profileData.shortBio}
            </p>

            {/* Compact Focus Areas — Editorial List Instead of Badges */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {profileData.focusAreas.map((area, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="text-accent-primary">/</span>
                  <span>{area}</span>
                </span>
              ))}
            </div>

            {/* Editorial CTA Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-5 py-2.5 text-sm font-bold text-white bg-accent-primary rounded transition-all hover:bg-accent-hover dark-transition"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-primary border border-soft rounded hover:bg-neutral-50 dark:bg-neutral-900/50 dark-transition"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-secondary border border-soft rounded hover:bg-neutral-50 dark:bg-neutral-900/50 dark-transition"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column - Compact Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
              <img
                src="/profile.jpg"
                alt={profileData.name}
                width={256}
                height={256}
                className="w-full h-full object-cover dark-transition"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Minimal Stats Row — Editorial, Unboxed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-soft pt-8">
          {profileData.stats.map((stat, i) => (
            <div key={i} className="reveal-on-scroll">
              <p className="font-display text-2xl sm:text-3xl text-primary">
                {stat.value}
              </p>
              <p className="font-meta text-xs text-muted uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}