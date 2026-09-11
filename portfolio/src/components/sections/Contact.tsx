"use client";

import React, { useState } from "react";
import { profileData } from "@/../data/profile";
import { Mail, Link, Globe, Share2, Send, Copy, Check, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-soft page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-meta text-xs text-accent-primary tracking-wide mb-2">
            07 — Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight">
            Contact & Collaboration
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left CTA Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Strong Closing Statement */}
            <p className="text-lg sm:text-xl leading-relaxed text-secondary">
              Let&apos;s build something worth engineering.
            </p>
            <p className="text-base sm:text-lg text-secondary max-w-2xl">
              Whether you&apos;re looking for undergraduate research collaboration,
              project partnership, or technical discussion—I&apos;m always eager to connect.
            </p>

            {/* Location Always Visible */}
            <div className="flex items-center gap-3 font-meta text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Universitas Indonesia, Kampus UI Depok, West Java, Indonesia</span>
              </span>
            </div>

            {/* Email Section — Editorial */}
            <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-meta font-bold text-primary">
                    {profileData.socials.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 font-meta text-xs px-4 py-2 text-primary border border-soft rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 dark-transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profileData.socials.email}`}
                    className="inline-flex items-center gap-2 font-meta text-xs px-4 py-2 text-white bg-accent-primary rounded hover:bg-accent-hover dark-transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Social Links Column */}
          <div className="lg:col-span-5 space-y-3">
            {/* LinkedIn */}
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft hover:border-accent-primary/30 dark-transition group/item"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center">
                    <Link className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-primary">LinkedIn</h4>
                    <p className="font-meta text-xs text-muted">linkedin.com/in/nabilhaniyazafri</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover/item:text-accent-primary dark-transition" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft hover:border-accent-primary/30 dark-transition group/item"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center text-neutral-900 dark:text-neutral-100">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-primary">GitHub</h4>
                    <p className="font-meta text-xs text-muted">github.com/mesdsky</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover/item:text-accent-primary dark-transition" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href={profileData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-soft hover:border-rose-400/30 dark-transition group/item"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-primary">Instagram</h4>
                    <p className="font-meta text-xs text-muted">@nbl.zfr</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover/item:text-rose-400 dark-transition" />
              </div>
            </a>
          </div>
        </div>

        {/* Strong Closing CTA */}
        <div className="mt-16 text-center">
          <p className="font-meta text-sm text-muted">
            Open to engineering collaborations, research opportunities, and technical discussions
          </p>
        </div>
      </div>
    </section>
  );
}