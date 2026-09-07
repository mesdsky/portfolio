"use client";

import React, { useState } from "react";
import { profileData } from "@/../data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Link,
  Globe,
  Share2,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  MapPin,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="07"
          badge="Get In Touch"
          title="Contact & Collaboration"
          subtitle="Open for engineering projects, undergraduate research opportunities, technical discussions, and professional networking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Primary Action (Left 7 Cols) */}
          <Card
            borderHighlight={true}
            className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="green" size="md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Actively Open to Opportunities</span>
                </Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Let&apos;s build impactful engineering solutions together.
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Whether you are a recruiter, professor, mentor, engineering peer, or collaborator looking to discuss electronics, IoT, AI, or renewable energy—feel free to reach out.
                </p>
              </div>

              {/* Email Box with Copy */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {profileData.socials.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
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
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Universitas Indonesia, Kampus UI Depok, West Java, Indonesia</span>
            </div>
          </Card>

          {/* Social Links Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* LinkedIn Card */}
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="p-5 group-hover:border-sky-500/60 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0077b5]/10 text-[#0077b5] dark:text-sky-400 border border-[#0077b5]/20">
                      <Link className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                        LinkedIn
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        linkedin.com/in/nabilhaniyazafri
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Card>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="p-5 group-hover:border-sky-500/60 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                        GitHub
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        github.com/mesdsky
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Card>
            </a>

            {/* Instagram Card */}
            <a
              href={profileData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="p-5 group-hover:border-sky-500/60 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                        Instagram
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        @nbl.zfr
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
