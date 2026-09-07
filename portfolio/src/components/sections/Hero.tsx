"use client";

import React from "react";
import { profileData } from "@/../data/profile";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import {
  FileDown,
  ArrowDown,
  Globe,
  Link,
  Share2,
  Mail,
  Zap,
  Cpu,
  Bot,
  Layers,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Organic Blob Backgrounds with Animation */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 dark:from-amber-900/20 dark:to-orange-900/10 rounded-full blur-3xl blob-animation pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-amber-200/30 dark:from-yellow-900/10 dark:to-amber-900/20 rounded-full blur-3xl blob-animation pointer-events-none -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start fade-in-up">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden profile-glow border-4 border-amber-200/50 dark:border-amber-800/50 float-animation">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-orange-100/60 dark:from-amber-900/40 dark:to-orange-900/30" />
                  <Image
                  src="/profile.jpg"
                  alt={profileData.name}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/30 dark:bg-amber-800/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-200/30 dark:bg-orange-800/30 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-8 space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-900 dark:text-amber-200">
                {profileData.statusBadge.text}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                {profileData.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-amber-800 dark:text-amber-300">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Electrical Engineering Undergraduate</span>
                <span className="text-amber-400 dark:text-amber-600">@</span>
                <span className="text-stone-800 dark:text-stone-200">Universitas Indonesia</span>
              </div>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
                {profileData.shortBio}
              </p>
            </div>

            {/* Focus Areas Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mr-1">
                Focus:
              </span>
              {profileData.focusAreas.map((area, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60 hover:scale-105 transition-transform"
                >
                  {index === 0 && <Layers className="w-3.5 h-3.5 text-amber-600" />}
                  {index === 1 && <Cpu className="w-3.5 h-3.5 text-amber-600" />}
                  {index === 2 && <Bot className="w-3.5 h-3.5 text-amber-600" />}
                  {index === 3 && <Zap className="w-3.5 h-3.5 text-amber-600" />}
                  {area}
                </span>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-medium text-sm shadow-lg shadow-amber-900/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-stone-900 border-2 border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/50 text-stone-800 dark:text-stone-200 font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Download CV</span>
              </a>

              <div className="h-8 w-px bg-amber-200 dark:bg-amber-800 hidden sm:block" />

              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-400 transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Link className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-400 transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-400 transition-all hover:scale-110"
                  aria-label="Instagram Profile"
                  title="Instagram Profile"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="p-2.5 rounded-full border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-400 transition-all hover:scale-110"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Cards - Below Hero Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {profileData.stats.map((stat, i) => (
            <Card
              key={i}
              className="p-5 bg-gradient-to-br from-white to-amber-50/50 dark:from-stone-900 dark:to-amber-950/30 border-2 border-amber-100 dark:border-amber-900/50 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1 font-semibold">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-800 dark:text-amber-300">
                {stat.value}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  {stat.sublabel}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
